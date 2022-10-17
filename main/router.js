import bcrypt from 'bcryptjs'
import express from 'express'
import jwt from 'jsonwebtoken'
import fetchuser from './middleware.js'
import { some } from './middleware.js'
import nodemailer from 'nodemailer'






import { userModel, userDetail } from "./models.js"
const JWT_SECRET = "mayank"
const router = express.Router()
    //fetchuser
router.get('/user', fetchuser, async(req, res) => {

        const fn = await userModel.findOne({ _id: some })
        console.log("this is some data ", fn)
        if (fn.superadmin === "true") {
            const f = await userModel.find()
                // console.log(f)
            console.log("user data info")


            res.json({ f })

        }





    })
    // login check
router.post('', async(req, res) => {
        try {
            const { username, password } = req.body
            console.log(req.body.password)
            console.log(username, password)
            const f = await userModel.find({ username: username })

            //console.log()

            if (f.length == 0) {

                res.json({ message: "notexist" })
                console.log("not")

            } else {
                const p = f[0].password
                const u = f[0].username
                const admin = f[0].admin
                const superadmin = f[0].superadmin
                const match = await bcrypt.compare(password, p)


                console.log(match, "f-->", f)
                if (superadmin == "true" && match == true && username == u) {
                    console.log("superadmin")

                    const data = {
                        user: {
                            id: f[0].id
                        }
                    }
                    const authtoken = jwt.sign(data, JWT_SECRET);

                    console.log(authtoken)
                        // res.json(user)
                    res.json({ authtoken: authtoken, login: "true", message: "superadmin" })

                } else if (admin === "true" && match == true && username == u) {
                    console.log("admin")

                    const data = {
                        user: {
                            id: f[0].id
                        }
                    }
                    const authtoken = jwt.sign(data, JWT_SECRET);

                    console.log(authtoken)
                        // res.json(user)
                    res.json({ authtoken: authtoken, login: "true", message: "admin" })

                } else if (match == true && username == u) {
                    //res.json({ message: "user enter succefullly" })
                    console.log("user login")

                    const data = {
                        user: {
                            id: f[0].id
                        }
                    }
                    const authtoken = jwt.sign(data, JWT_SECRET);

                    console.log(authtoken)
                        // res.json(user)
                    res.json({ authtoken: authtoken, login: "true" })

                } else {
                    console.log("wrong pass and user")
                    res.json({ message: "wrong" })
                }
            }


        } catch (error) {
            res.send({ error: "some error" })
            console.log(error)

        }


    })
    //register user
router.post('/register', async(req, res) => {
        try {
            const { username, rollno, branch, password } = req.body
                //console.log(username, password)
            const admin = "false"
            const f = await userModel.find({ username: username })

            const salt = await bcrypt.genSalt(10);
            //console.log("yee")
            const pass = await bcrypt.hash(password, 10)
            console.log(pass)
            if (f.length == 0) {
                const d = new userModel({
                    username: username,
                    rollno: rollno,
                    branch: branch,
                    password: pass,
                    admin: admin
                })
                const user = await d.save()
                res.json({ message: 'registered' })
                console.log(user)



            } else {
                res.json({ message: "exist" })
            }



        } catch (error) {
            res.json({ message: "error" })
            console.log(error)

        }



        //console.log(f,username)




    })
    // save info
router.post('/enter', fetchuser, async(req, res) => {
    const { username, title, feedback } = req.body
    const resolve = "false"

    const t = new userDetail({
        username: username,
        title: title,
        feedback: feedback,
        resolve: resolve

    })
    const n = await t.save()
    console.log(req.body)
    console.log(n)
    if (n) {
        res.status(200).send({ message: 'registered' })

    }

    //

})
router.get('/show', fetchuser, async(req, res) => {

    const fn = await userModel.findOne({ _id: some })
    console.log("thisone-->", fn)

    if (fn.admin === "true" || fn.superadmin == "true") {
        const d = await userDetail.find()
            // 
        console.log("user get info")



        res.json({ d })

    }










})
router.delete('/show', async(req, res) => {
    const i = await userDetail.deleteOne({ username: req.body.username })

    console.log("deleted")
    res.json({ message: "delted" })


})
router.post('/admin', async(req, res) => {
    const { username, admin } = req.body
    let value;
    if (admin == "true") {
        value = "false"

    } else {
        value = "true"

    }

    const s = await userModel.update({ username: username }, { $set: { admin: value } })
    console.log(s)


    res.json({ mesaage: "edit" })



})

export default router;
import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    username: { type: 'String' },
    rollno: { type: 'String' },
    branch: { type: 'String' },
    password: { type: 'String' },
    admin: { type: 'String' },
    superadmin: { type: "String" }


})

const detailSchema = new mongoose.Schema({
    username: { type: "String" },
    title: { type: "String" },
    feedback: { type: "String" },
    resolve: { type: "String" }

})

// userSchema.pre("save", async(next) =>

//     {
//         const salt = await bcrypt.genSalt(10);
//         console.log("yee")
//         this.password = await bcrypt.hash(this.password, 10) // store in hash
//         next()


//     }

// )

const userModel = new mongoose.model('users', userSchema)
const userDetail = new mongoose.model('details', detailSchema)

export { userModel, userDetail }
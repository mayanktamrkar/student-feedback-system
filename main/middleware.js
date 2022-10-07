import jwt from "jsonwebtoken";
const JWT_SECRET = 'mayank';
var some;

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('authtoken');
    if (!token) {
        // res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        some = data.user.id
        console.log(" middleware--", some)

        next();
    } catch (error) {
        //  res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}

export { some }
export default fetchuser;
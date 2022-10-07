import mongoose from "mongoose"
const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/project')
        console.log('connected')
        
    } catch (error) {
        console.log(error)
        
    }
  


}

export default  connectDB
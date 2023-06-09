import mongoose from "mongoose";
mongoose
    .connect(process.env.DB)
    .then(() => console.log('connect'))
    .catch((err) => console.log(err))


    // first step 
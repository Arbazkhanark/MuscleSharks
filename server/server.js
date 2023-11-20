const express=require("express");
const dbConnection = require("./database");
const cookieParser=require("cookie-parser");
const cors=require("cors");
require("dotenv").config();


const app=express();
dbConnection();

app.use(cors({
    credentials:true,
    origin:["http://localhost:5173","http://localhost:5174"]
}));
app.use(cookieParser());
app.use(express.json());

app.use(require("./routes/userRouter"));
app.use(require("./routes/productRoutes"));
app.use(require("./routes/cartRouter"));
app.use(require("./routes/orderRouter"));
app.use(require("./routes/adminRouter"))
app.use(require("./routes/couponRouter"));





app.listen(process.env.PORT || 5000,()=>console.log(`Server is running on PORT ${process.env.PORT} ........`));
import express from "express";
import userRoutes from "./src/routes/userRoutes.js";
import stockRoutes from "./src/routes/stockRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
// import errorResponse from "./src/utils/response.js";
const app = express();
const host = "localhost";
const port = 9000;


app.use(express.json());
app.use("/users", userRoutes);
app.use("/stocks", stockRoutes);
app.use("/auth", authRoutes);

// app.use((error, request, response, next ) =>{
//     const message = "internal server error";
//     console.log(error.message);
//     errorResponse(response, message, 500)
// })



app.listen(port, host, ()=>{
    console.log(`Server siap di http://${host}:${port}`);
})
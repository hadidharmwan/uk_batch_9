import express from "express";
import userRoutes from "./src/routes/userRoutes.js";
import stockRoutes from "./src/routes/stockRoutes.js";
const app = express();
const host = "localhost";
const port = 9000;


app.use(express.json());
app.use("/users", userRoutes);
app.use("/stocks", stockRoutes);

app.listen(port, host, ()=>{
    console.log(`Server siap di http://${host}:${port}`);
})
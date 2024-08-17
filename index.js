const express = require("express");

const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 400;

// middleware for parsing json request body
app.use(express.json());

// import routes for TODO API
const BlogRoutes = require("./routes/Blogs");
// app.use("/api", todoRoutes);
app.use("/api/v1", BlogRoutes);

//mogodb connection

const dbConnect = require("./config/database")
dbConnect();

//default routes
app.get("/", (req, res) => {
    res.send("<h1> This is the HomePage</h1>")
})

//listen 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
import express from "express"
import cors from "cors"
import { getAllDoc,postDoc, findDoc, deleteDoc} from "./src/functions.js";

const PORT = process.env.PORT;

const app = express()
app.use( express.json())
app.use( cors())

// GET ROOT
// app.get("/", (req,res) => {
//     console.log('Mongo API: I am root')
// })
app.get("/", (req, res) => res.send(`Mongo API: i am root`))

/* *********************************************************** */

// Get: Get All
app.get("/getall", getAllDoc)

/* *********************************************************** */

// Get: Search
app.get("/search/:search", findDoc)

/* *********************************************************** */

// Post: Add Doc
app.post("/post", postDoc)

/* *********************************************************** */

// Delete
app.delete("/delete/:docId", deleteDoc)

/* *********************************************************** */




app.listen(PORT, () => console.log(`listening on http//:localhost:${PORT}`))

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
// const {json} = require('body-parser') can destructure json out of body-parser for middleware
const controller = require("./controller/controller.js")
require('dotenv').config()

const massive = require('massive')

const port = 3007;

const app = express()

massive(process.env.connectionString)
.then(db => app.set("db", db))
.catch(console.log)


// Invoke app.use and tell it to add the middleware below. Then the middleware will be added onto your express middleware stack.
app.use(cors());
app.use(bodyParser.json());


app.use((req, res, next) => { // we can console log our req.body, params, or query here. This will help you see if the req data is making it to the server properly. Good for troubleshooting where your requests could be failing, and to see what your req data looks like on the server side.
    console.log("Middleware firing off...")
    console.log("Body: ", req.body)
    console.log("Query: ", req.query)
    // invoke next to pass the request through...
  next();
})



app.get("/api/getusers", controller.getUsers)

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

import express from "express";
import personRoute from "./routes/person"
import path from "path"


let app = express()


app.use((req, res, next) =>{
  console.log(`${new Date().toString()} => ${req.originalUrl}`)
  next()
})

//middle ware adds the routes from person.js
app.use(personRoute)

//default localhost:3000 end point
app.use(express.static('public'))

//error 404 not found Handler
app.use((req, res, next) =>{
  res.status(404).send("You Lost B")
  next()
})

//error 500 Handler
app.use((err, req, res, next) =>{
  console.error(err.stack)
  res.sendFile(path.join(__dirname, '../public/error.html'))
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`🚀 Server ready at http://localhost:${PORT}`))

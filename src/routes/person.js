import express from "express";
let router = express.Router()


//regular end route
router.get("/person", (req, res) => {
  res.send("Request for Person")
})

//params property on an object
router.get("/person/:name", (req, res) => {
  res.send(`Request for Person ${req.params.name}`)
})

//Query String
//localhost:3000/jawn?name=jawn
router.get("/jawn", (req, res) => {
  if(req.query.name){
    res.send(`Request for Person ${req.query.name}`)
  }
  else {
    res.send("Request for Person")
  }
})

//error Route
router.get("/Aaron", (req, res) => {
  throw new Error("its actually Aaron?")
})





export default router

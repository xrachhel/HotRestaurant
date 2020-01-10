// Dependencies
const express = require("express")
const path = require("path")

// Set up Express App
const app = express()
var PORT = 3000

// Set up Express App to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Tables DATA

var tables = [
    {
        name: "Rachel",
        people: "4",
        phone: "41452345"
    },
    {
        name: "Ryan",
        people: "7",
        phone: "23432354"
    }
]
var waitlist = []

// Routes

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"))
})

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"))
})

// Display all tables
app.get("/api/tables", function(req, res){
    return res.json(tables)
})

app.get("/api/waitlist", function(req, res){
    return res.json(waitlist)
})

// Create New Reservation
app.post("/api/tables/new", function(req, res){
    var newTable = req.body;
    console.log(newTable)
    if(tables.length < 5){
        tables.push(newTable)
    }
    else{
        waitlist.push(newTable)
    }
    console.log(tables)
    console.log(waitlist)
    res.json(newTable)
})



// Listen
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
})
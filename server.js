////////////////////////////////
// Import Dependencies
////////////////////////////////
require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 4321


////////////////////////////////
// Create Express App Object
////////////////////////////////
const app = express()


////////////////////////////////
// Routes
////////////////////////////////
app.get('/', (req, res) => {
    res.send(`hello world i am listening to port ${PORT}`)
})

app.get('/dburl', (req, res) => {
    res.send(`My connection string is ${process.env.DATABASE_URL}`)
})


////////////////////////////////
// Turn Server On
////////////////////////////////
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
const express = require('express')

const app = express()
const PORT = 5051

const jokes = []

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

app.get('/api', (req, res) => {
    res.send("it works")
})

app.post('/api', (req, resp) => {
    console.log(req.body.newJoke)
    jokes.push(req.body.newJoke)
    console.log(jokes)
    resp.send('worked')
})

app.listen(PORT, () => console.log('running on Port 5051'))

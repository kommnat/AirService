const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/kreangsak', (req, res) => {
    res.send('Hello GET')
    });
app.post('/kreangsak',async (req, res) => {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.sendStatus(200)
    });

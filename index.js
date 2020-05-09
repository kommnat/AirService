const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/kreangsak', (req, res) => {
    res.send('Hello GET')
    });
app.post('/kreangsak',async (req, res) => {
    res.sendStatus(200)
    });

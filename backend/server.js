import express from 'express';
import cors from 'cors';
import db from './database.js'
const app = express()
const port = 3001

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user/:username/books', (req, res) => {
    const name = req.params.username
    console.log(`Request from ${name}`)
    res.send(`Hello, ${name}`)
})

app.post('/newbook', (req, res) => {
    console.log(req.body)
    res.send('New Book Created')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
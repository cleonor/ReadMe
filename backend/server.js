const express = require('express')
var cors = require('cors');
const app = express()
const port = 3001

app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send('Hello, Leonor')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
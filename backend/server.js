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
    db.data
        .books
        .push(req.body)

    // Save to file
    db.write()
    res.send('New Book Created')
})

app.post('/login', (req, res) => {
    const allUsers = db.data.users;

    const user = allUsers.find((user) => req.body.username === user.username);
    if (user) {
        if (req.body.password === user.password) res.send('Login success')
    }
    res.status(401);
    res.send('User not found');

})

app.get('/myBooks', (req, res) => {
    res.send(db.data.books);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
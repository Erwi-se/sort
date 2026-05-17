const express = require('express')
const app = express()
app.use(express.json())

app.post('/', (req, res) => {
    const data = req.body
    data.sort((a, b) => b - a)
    res.json(data)
})

app.listen(3000, () => console.log('Running!'))
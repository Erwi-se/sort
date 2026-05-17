module.exports = (req, res) => {
    const data = req.body
    data.sort((a, b) => b - a)
    res.json(data)
}

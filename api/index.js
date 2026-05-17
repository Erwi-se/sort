module.exports = (req, res) => {
    if (req.method !== 'POST') {
        return res.status(200).json({ status: 'ok' })
    }
    let body = req.body
    if (typeof body === 'string') {
        body = JSON.parse(body)
    }
    if (!body || !Array.isArray(body)) {
        return res.status(400).json({ error: 'expected array' })
    }
    body.sort((a, b) => b - a)
    res.json(body)
}

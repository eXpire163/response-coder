


var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello, use /statuscode/200 to get what you want or /timeout/3000 for a response after 3000 ms');
})

app.get('/statuscode/:code', (req, res) => {
    const {
        code
    } = req.params
    console.log()
    if (isNaN(code)) {
        console.log("Request was not a number %s, but was", code, typeof code)
        res.status(503).send("Please send a number")
        return
    }
    if (Number(code) >= 1000) {
        console.log("Request was higher than 1000:  %s", code)
        res.status(503).send("Code must be below 1000")
        return
    }
    console.log("You ask for the status code: " + code)
    res.status(Number(code)).send("You ask for the status code: " + code)
});

app.get('/timeout/:duration', async (req, res) => {
    const {
        duration
    } = req.params
    const result = await asyncFunc(duration)
    return res.send(result)
});




const asyncFunc = (duration) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Timeout is over! After ms: " + duration), duration)
    })
}


var server = app.listen(8181, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Statuscode app is running on http://%s:%s", host, port)
})



module.exports = server;

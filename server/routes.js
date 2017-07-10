var express = require('express')
var router = express.Router()

// '/api/todos' routes

router.post('/todos', function (req, res) {
    res.send('post todos')
})

router.get('/todos', function (req, res) {
    res.send( {
        todos: [
            {
                id: "3315",
                title: "Red"
            },
            {
                id: "3318",
                title: "Green"
            },
            {
                id: "3313",
                title: "Blue"
            }
        ]
    }
    )
})

router.delete('/todos/:id', function (req, res) {
    res.send(req.params)
})

router.put('/todos/:id', function (req, res) {
    res.send(req.params)
})


module.exports = router

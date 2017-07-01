const express = require('express'),
      path = require('path')

app = express()

const sendHTMLpage = (req, res) => {

    bundle = ``
    if (process.env.NODE_ENV == 'development') {
      bundle = `<script src="http://localhost:8080/assets/bundle.js"></script>`
    } else {
      bundle = `<script src="assets/bundle.js"></script>`
    }

    return_html = `
<!DOCTYPE html>
<html>
    <head>
        <title>Served</title>
    </head>
    <body>
        <div id="react-container"></div>` + bundle + `
    </body>
</html>`

    res.status(200).send(return_html)

  }

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`)
    next()
}

app.use(logger)
app.use(sendHTMLpage)


app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port ' + (process.env.PORT || 3000))
})

module.exports = app

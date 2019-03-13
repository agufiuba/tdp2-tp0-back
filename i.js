const express = require('express')
const google = require('googleapis')

const port = process.env.PORT || 3000
const books = google.books('v1')

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

const search = async (q) => {
  return books.volumes.list({ q })
}

var app = express()
app.get('/api/books', async function (req, res) {
  let q = (req.query.q || "").trim()
  if (q != "") {
    try {
      res.send(JSON.stringify(await search(q)))
    } catch (e) {
      res.send(e)
    }
  }
  else
    res.send("FALTA Q")
})

// #####################################################################

app.listen(port)

// #####################################################################

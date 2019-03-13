const {google} = require('googleapis');
const books = google.books('v1');

const params = {q: "Harry Potter"}

books.volumes.list(params).then(res => {
  console.log(JSON.stringify(res))
}).catch(error => {
  console.log(error)
})

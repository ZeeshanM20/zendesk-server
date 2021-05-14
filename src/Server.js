const express = require('express')
const cors = require('cors');
const { getTickets } = require('./tickets')
const { getPrevPage } = require('./prevPage')
const { getNextPage } = require('./nextPage')
const fs = require('fs')

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.get('/tickets', async (req, res) => {
  const tickets = await getTickets()
  res.set('Content-Type', 'application/json')
  res.send(tickets)
});
app.get('/prevPage', async (req, res) => {
  const tickets = await getPrevPage(req.query.url)
  res.set('Content-Type', 'application/json')
  res.send(tickets)
});
app.get('/nextPage', async (req, res) => {
  const tickets = await getNextPage(req.query.url)
  res.set('Content-Type', 'application/json')
  res.send(tickets)
});
app.get('/', (req, res)=> {
  const index = fs.readFileSync('./index.html')
  res.set('Content-Type', 'text/html')
  res.send(index)
});

app.listen(port, () => console.log(`Server running on ${port}!`));
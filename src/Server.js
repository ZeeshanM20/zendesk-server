const express = require('express')
const cors = require('cors');
const { getTickets } = require('./tickets')

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.get('/tickets', getTickets);

app.listen(port, () => console.log(`Server running on ${port}!`));
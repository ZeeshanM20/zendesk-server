const fetch = require('node-fetch')

const getTickets = async () => {

let url = 'https://zeeshan-mujtaba.zendesk.com/api/v2/tickets.json'

let options = {
  method: 'GET',
  headers: {'Authorization': 'Basic ' + btoa('zmujtaba96@gmail.com:**********')}
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
}

module.exports = { getTickets }

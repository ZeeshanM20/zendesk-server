const fetch = require('node-fetch')

const getTickets = async () => {

  let url = 'https://zeeshan-mujtaba.zendesk.com/api/v2/tickets.json'

  let options = {
    method: 'GET',
    headers: {'Authorization': 'Basic ' + btoa('zmujtaba96@gmail.com:Zendesk123')}
  };
  try{
    const response = await fetch(url, options)
      return response.json()
  }
  catch (error) {
    console.log(error)
  }
}

module.exports = { getTickets }

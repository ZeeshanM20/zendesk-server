const fetch = require('node-fetch')

const getNextPage = async (url) => {
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

module.exports = { getNextPage }

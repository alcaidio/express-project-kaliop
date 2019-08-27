const request = require('request')

module.exports = {
    data : async function(url){
        return await new Promise((resolve, reject) => {
            request(url, { json: true }, (err, res, body) => {
              if (err) reject(err)
              resolve(body)
            });
        })
    }
}
var request = require('request');

/*
* Receive a client id
* and response with client if id was found in the client array
* @param {String} id client id 
* @success {Object} client client data
* @error {Number} error Error code
*/
getClientById = (id) => {
    return new Promise((resolve, reject) => {
        request("http://www.mocky.io/v2/5808862710000087232b75ac", function (error, response, body) {
            let clients = JSON.parse(body).clients;
            let client = clients.find(client => {
                return client.id == id
            })
            resolve(client);
        });
    });

}
/*
* Receive a client user name
* and response with client if name was found in the client array
* @param {String} name client name
* @success {Object} client client data
* @error {Number} error Error code
*/
getClientByName = (name) => {
    return new Promise((resolve, reject) => {
        request("http://www.mocky.io/v2/5808862710000087232b75ac", function (error, response, body) {
            let clients = JSON.parse(body).clients;
            let client = clients.find(client => {
                return client.name == name
            })
            resolve(client);
        });
    });
}
module.exports.getClientById = getClientById;
module.exports.getClientByName = getClientByName;
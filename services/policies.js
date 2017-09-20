var request = require('request');
var clients = require('./clients');

/*
* Receive a policie id
* and response with client data linked to it
* @param {String} id policie number 
* @success {Object} client client data linked to policie number
* @error {Number} error Error code
*/
getClientByIdPolicie = (id) => {
    return new Promise((resolve, reject) => {
        request("http://www.mocky.io/v2/580891a4100000e8242b75c5", function (error, response, body) {

            let policies = JSON.parse(body).policies;
            let policie = policies.find(policie => {
                return policie.id == id
            })
            if (policie) {
                clients.getClientById(policie.clientId).then(client => {
                    if (client && client.role == 'admin')
                        resolve(client);
                    else
                        reject(403);
                })
            }
            else
                reject(404);

        });
    });

}
/*
* Receive an user name, begin pagination (optional) and end pagination (optional)
* and response with policies array if the user role is admin or error in another cases
* @param {String} name Client name 
* @param {Number} begin (optional) position of policies array
* @param {Number} end (optional) position end of policies array
* @success {Array} policies policies array filtered for params name, begin and end
* @error {Number} error Error code
*/
getPoliciesByClientName = (name,begin=0,end=30) => {
    return new Promise((resolve, reject) => {
        console.log("NAME:", name);
        clients.getClientByName(name).then(client => {
            console.log("CLIENT:", client);
            if (client) {
                if (client.role == 'admin') {
                    request("http://www.mocky.io/v2/580891a4100000e8242b75c5", function (error, response, body) {
                        let policies = JSON.parse(body).policies;
                        policies = policies.filter(p => {
                            return p.clientId == client.id
                        })
                        resolve(policies.slice(begin,end));
                    })
                }
                else
                    reject(403);
            }
            else
                reject(404)

        })
    });
}
module.exports.getClientByIdPolicie = getClientByIdPolicie;
module.exports.getPoliciesByClientName = getPoliciesByClientName;
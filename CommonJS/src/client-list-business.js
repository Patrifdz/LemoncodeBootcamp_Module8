const Clients = require("./data-business");
const GetClientElement = require("./client-business");

module.exports = {printClientsAccounts}

function printClientsAccounts() {
    const clients = Clients.getClients();
    const ul = document.createElement("ul");
    
    for (let client of clients) {
        const element = GetClientElement.getClientElement(client);
        ul.appendChild(element);
    }
    
    document.getElementById("root").appendChild(ul);
}

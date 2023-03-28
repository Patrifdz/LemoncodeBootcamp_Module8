const Accounts = require("./data-business");
const AccountsElement = require("./account-business");

module.exports = { getClientElement };

function getClientElement(client) {
    const allAccounts = Accounts.getAccounts();
    const clientAccounts = [];

    for (let account of allAccounts) {
        if (account.clientId === client.id) {
            clientAccounts.push(account);
        }
    }
    const node = getClientNode(client);
    const ul = AccountsElement.getClientAccountsElement(clientAccounts);
    node.appendChild(ul);
    return node;
  }


function getClientNode(client) {
    const li = document.createElement("li");
    li.append(getFullName(client));
    return li;
}


function getFullName(client) {
    return client.first_name + " " + client.last_name;
}


function Account(name, surname, number, pin, balance) {
    this.name = name;
    this.surname = surname;
    this.number = number;
    this.pin = pin;
    this.balance = balance;

    this.getName = function() {
        return this.name;
    };

    this.setName = function(name) {
        this.name = name;
    };

    this.getSurname = function() {
        return this.surname;
    };

    this.setSurname = function(surname) {
        this.surname = surname;
    };

    this.getNumber = function() {
        return this.number;
    };

    this.setNumber = function(number) {
        this.number = number;
    };

    this.getPin = function() {
        return this.pin;
    };

    this.setPin = function(pin) {
        this.pin = pin;
    };

    this.getBalance = function() {
        return this.balance;
    };

    this.setBalance = function(balance) {
        this.balance = balance;
    };

    counter++;
}

var counter = 0;

Account.prototype.AccountInfo = function() {
    return (
        counter + " | " + this.getName() + " | " + this.getSurname() + " | " + this.getNumber() + " | " +  this.getPin() + " | " + this.getBalance() + "\n"
    );
};

function DisplayAccount(account) {
    var accountParagraph = document.createElement("p");
    accountParagraph.id = counter;
    accountParagraph.innerHTML = counter + " | " + account.getName() + " | " + account.getSurname() + " | " + account.getNumber() + " | " + account.getPin() + " | " + account.getBalance();
    document.body.appendChild(accountParagraph);
}

var account1 = new Account("Yury", "Karlianok", 2233114499007766, 3241, 340.15);
alert(account1.AccountInfo());
DisplayAccount(account1);

var account2 = new Account("Lizaveta", "Baradina", 9944773300881122, 6987, 2514.98);
alert(account2.AccountInfo());
DisplayAccount(account2);
function Account(name, surname, acc, code, balance) {
    this.name = name;
    this.surname = surname;
    this.acc = acc;
    this.code = code;
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

    this.getAcc = function() {
        return this.acc;
    };

    this.setAcc = function(acc) {
        this.acc = acc;
    };

    this.getCode = function() {
        return this.code;
    };

    this.setCode = function(code) {
        this.code = code;
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
        counter + " | " + this.getName() + " | " + this.getSurname() + " | " + this.getAcc() + " | " +  this.getCode() + " | " + this.getBalance() + "\n"
    );
};

function DisplayAccount(account) {
    var accountParagraph = document.createElement("p");
    accountParagraph.id = counter;
    accountParagraph.innerHTML = counter + " | " + account.getName() + " | " + account.getSurname() + " | " + account.getAcc() + " | " + account.getCode() + " | " + account.getBalance();
    document.body.appendChild(accountParagraph);
}

var account1 = new Account("Vanya", "Pupkin", 1234567890001111, 1124, 100);
alert(account1.AccountInfo());
DisplayAccount(account1);

var account2 = new Account("Petya", "Puzikov", 109987653211234, 8934, 2500 );
alert(account2.AccountInfo());
DisplayAccount(account2);
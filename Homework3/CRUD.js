function onCreate(ev) {
    ev.preventDefault();

    var data = JSON.stringify({
        name: String(document.getElementById("cname").value),
        surname: String(document.getElementById("csurname").value),
        number: String(document.getElementById("cnumber").value),
        pin: String(document.getElementById("cpin").value),
        balance: String(document.getElementById("cbalance").value)
    });
    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            alert(this.responseText);
            document
                .getElementById("createForm")
                .dispatchEvent(new Event("submit"));
        }
    });

    xhr.open("POST", "http://localhost:2403/account/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onRead() {
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            result = JSON.parse(this.response);
            var resultTBody = document.createElement("tbody");
            result.map(function(nthAccount) {
                resultTBody.appendChild(parseAccountToTableRow(nthAccount));
            });

            var table = document.getElementById("rTBody").parentElement;
            table.replaceChild(resultTBody, document.getElementById("rTBody"));
            resultTBody.id = "rTBody";
            console.log("success");
        }
    });

    xhr.open("GET", "http://localhost:2403/account/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function onPrepareUpdate(ev) {
    ev.preventDefault();
    xhrids = new XMLHttpRequest();
    xhrids.withCredentials = true;

    xhrids.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            result = JSON.parse(this.response);
            var ids = document.createElement("select");
            ids.className = "form-control";
            result.map(function(nthTextBook) {
                var id = document.createElement("option");
                id.innerHTML = nthTextBook["id"];
                ids.appendChild(id);
            });
            var form = document.getElementById("uid").parentElement;
            form.replaceChild(ids, document.getElementById("uid"));
            ids.id = "uid";
        }
    });
    xhrids.open("GET", "http://localhost:2403/account/");
    xhrids.setRequestHeader("Content-Type", "application/json");
    xhrids.send();
}

function onUpdate(ev) {
    ev.preventDefault();

    var data = JSON.stringify({
        name: String(document.getElementById("uname").value),
        surname: String(document.getElementById("usurname").value),
        number: String(document.getElementById("unumber").value),
        pin: String(document.getElementById("upin").value),
        balance: String(document.getElementById("ubalance").value)
    });
    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("PUT", "http://localhost:2403/account/" + document.getElementById("uid").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onDelete(ev) {
    ev.preventDefault();
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("DELETE", "http://localhost:2403/account/" + document.getElementById("did").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function parseAccountToTableRow(account) {
    var row = document.createElement("tr");

    id = document.createElement("th");
    id.innerText = account["id"];
    row.appendChild(id);

    _name = document.createElement("td");
    _name.innerText = account["name"];
    row.appendChild(_name);

    surname = document.createElement("td");
    surname.innerText = account["surname"];
    row.appendChild(surname);

    number = document.createElement("td");
    number.innerText = account["number"];
    row.appendChild(number);

    pin = document.createElement("td");
    pin.innerText = account["pin"];
    row.appendChild(pin);

    balance = document.createElement("td");
    balance.innerText = account["balance"];
    row.appendChild(balance);

    return row;
}

(function() {
    document.getElementById("cbutton").addEventListener("click", onCreate);
    document.getElementById("rbutton").addEventListener("click", onRead);
    document.getElementById("ubutton").addEventListener("click", onUpdate);
    document
        .getElementById("pubutton")
        .addEventListener("click", onPrepareUpdate);
    document.getElementById("dbutton").addEventListener("click", onDelete);
    console.log("Handlers is set");
})();
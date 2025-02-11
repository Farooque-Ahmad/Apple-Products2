
var subtotal = 0;
var paidAmount = 0;

// Calculate Amount
function calculate() {
    var price = parseFloat(document.getElementById("prc").value);
    var quantity = parseInt(document.getElementById("qty").value);
    var amount = price * quantity;

    // Show Amount
    document.getElementById("amnt").value = isNaN(amount) ? "" : amount;
}

// Add product data
function addData() {
    var ids = document.getElementById("ids").value;
    var product = document.getElementById("product").value;
    var price = parseFloat(document.getElementById("prc").value);
    var quantity = parseInt(document.getElementById("qty").value);
    var amount = price * quantity;

    // Only add product if the amount is valid
    if (!isNaN(amount) && amount > 0) {
        document.getElementById("newtr").innerHTML += '<tr><td>' + ids + '</td><td>' + product +
            '</td><td>' + price + '</td><td>' + quantity + '</td><td>' + amount + '</td></tr>';

        subtotal += amount;
        document.getElementById("subtotal-amount").innerHTML = subtotal;

        // Reset input fields after adding
        document.getElementById("ids").value = "";
        document.getElementById("product").value = "";
        document.getElementById("prc").value = "";
        document.getElementById("qty").value = "";
        document.getElementById("amnt").value = "";
    }
}

// Update Paid Amount and Balance
function updatePaidAmount() {
    paidAmount = parseFloat(document.getElementById("paid").value) || 0;
    document.getElementById("paid-amount").innerHTML = paidAmount;

    var balanceAmount = subtotal - paidAmount;
    document.getElementById("total-amount").innerHTML = balanceAmount;
}


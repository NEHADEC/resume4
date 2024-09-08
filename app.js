// app.ts
var _a;
// Create an array of products
var products = [
    { name: "Laptop", quantity: 10, price: 50000 },
    { name: "Mobile", quantity: 20, price: 20000 },
    { name: "Tablet", quantity: 15, price: 30000 },
];
// Function to display products in the HTML table
function displayProducts() {
    var tableBody = document.getElementById("product-table-body");
    tableBody.innerHTML = ""; // Clear existing rows
    products.forEach(function (product) {
        var row = document.createElement("tr");
        var nameCell = document.createElement("td");
        nameCell.textContent = product.name;
        row.appendChild(nameCell);
        var quantityCell = document.createElement("td");
        quantityCell.textContent = product.quantity.toString();
        row.appendChild(quantityCell);
        var priceCell = document.createElement("td");
        priceCell.textContent = product.price.toString();
        row.appendChild(priceCell);
        tableBody.appendChild(row); // Append the row to the table body
    });
}
// Validate input fields
function validateInputs(productName, quantity, price) {
    if (productName.trim() === "") {
        alert("Product Name cannot be empty.");
        return false;
    }
    if (isNaN(quantity) || quantity <= 0) {
        alert("Quantity must be a positive number.");
        return false;
    }
    if (isNaN(price) || price <= 0) {
        alert("Price must be a positive number.");
        return false;
    }
    return true;
}
// Call the function to display products when the page loads
window.onload = displayProducts;
(_a = document.getElementById('addProductButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    // Get the input values
    var productName = document.getElementById('productName').value;
    var quantity = parseInt(document.getElementById('quantity').value);
    var price = parseFloat(document.getElementById('price').value);
    // Validate input
    if (validateInputs(productName, quantity, price)) {
        // Add product to array
        products.push({ name: productName, quantity: quantity, price: price });
        // Update table
        displayProducts();
        // Clear input fields
        document.getElementById('productName').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('price').value = '';
    }
});

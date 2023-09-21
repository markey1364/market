// Initialize an array of 10 shoes
let shoesArray = [
    "Nike Air Max",
    "Adidas Ultra Boost",
    "Reebok Classic",
    "Puma Suede",
    "Converse Chuck Taylor",
    "Vans Old Skool",
    "New Balance 990",
    "Under Armour Curry",
    "Salomon Speedcross",
    "Brooks Glycerin"
];

// Function to display the shoes
function displayShoes() {
    const shoesList = document.getElementById("shoes");
    shoesList.innerHTML = "";

    for (let i = 0; i < shoesArray.length; i++) {
        const li = document.createElement("li");
        li.textContent = shoesArray[i];
        shoesList.appendChild(li);
    }
}

// Add event listeners for the buttons
document.getElementById("slice-button").addEventListener("click", function() {
    shoesArray = shoesArray.slice(0, 5); // Slice the array to keep the first 5 shoes
    displayShoes();
});

document.getElementById("push-button").addEventListener("click", function() {
    const newShoe = prompt("Enter a new shoe:");
    if (newShoe) {
        shoesArray.push(newShoe);
        displayShoes();
    }
});

document.getElementById("pop-button").addEventListener("click", function() {
    if (shoesArray.length > 0) {
        shoesArray.pop();
        displayShoes();
    } else {
        alert("The array is empty.");
    }
});

// Initial display of the shoes
displayShoes();

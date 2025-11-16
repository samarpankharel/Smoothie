//Creating a Smoothie class
class Smoothie {
    constructor(flavor, size, price) {
        this.flavor = flavor;
        this.size = size;
        this.price = {
            small: 5.99,
            medium: 6.99,
            large: 7.99
        };
    }
    //Method to Display Smoothie Details
    displayDetails() {
        const names= {
            berryblast: "Berry Blast Smoothie",
            tropicaltwist: "Tropical Twist Smoothie",
            greengoodness: "Green Goodness Smoothie"
        };
        //Returning formatted string with smoothie details
        return `Smoothie: ${names[this.flavor]}, Size: ${this.size}, Price: $${this.price[this.size].toFixed(2)}`;
    }
    //Method to get price based on size
    getPrice() {
        return this.price[this.size];
    }
    //method for picking up the smoothie based on image
    //Special thanks to Keesha's Kitchen for the images link:https://unsplash.com/@keeshasskitchen
  getImage() {
    const images = {
        berryblast: "images/berry_blast.jpg",
        tropicaltwist: "images/tropical_twist.jpg",
        greengoodness: "images/green_goodness.jpg"
    };
    return images[this.flavor];
}

    //Method for giving a description of the final orderd smoothie by user
    getDescription() {
        const descriptions = {
            berryblast: "A delightful blend of mixed berries packed with antioxidants.",
            tropicaltwist: "A refreshing mix of tropical fruits that transports you to a beach paradise.",
            greengoodness: "A nutritious blend of leafy greens and fruits for a healthy boost."
        };
        return descriptions[this.flavor];
    }
}
// Adding a special add on protein powder so extending the smoothie class
class ProteinSmoothie extends Smoothie {
    constructor(flavor, size, price, proteinType) {
        super(flavor, size, price);
        this.proteinType = proteinType;
        this.proteinPrice = 2.00; // Flat rate for protein add-on
    }
//Outputting the details of smoothie with submit order button
   getTotalPrice() {
        return this.getPrice() + this.proteinPrice;
    }

    displayDetails() {
        return `${super.displayDetails()}, Protein Add-on: ${this.proteinType}, Total Price: $${this.getTotalPrice().toFixed(2)}`;
    }

}
// HANDLE FORM SUBMISSION
// Event listener for form submission refrence link: https://www.w3schools.com/jsref/met_form_submit.asp
document.getElementById("smoothieForm").addEventListener("submit", function(event) {
    //Getting user input values
    const name = document.getElementById("name").value.trim();
    const flavor = document.getElementById("smoothieType").value.toLowerCase();
    const size = document.getElementById("size").value;
    const protein = document.getElementById("protein") ? document.getElementById("protein").value.trim() : "";
    let smoothie;
    if (protein) {
        smoothie = new ProteinSmoothie(flavor, size, 0, protein);
    } else {
        smoothie = new Smoothie(flavor, size, 0);
    }
    event.preventDefault(); // Prevent form from submitting normally
    // Show the result in output div
   document.getElementById("output").innerHTML = `
        <p>Hello <strong>${name}</strong>!<br>${smoothie.displayDetails()}</p>
        <p>${smoothie.getDescription()}</p>
        <img src="${smoothie.getImage()}" alt="Smoothie Image" width="150">
    `;
});
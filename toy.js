// ToyCar Constructor
function ToyCar(name, brand, color, length, width, height, weight, material, price, isRemoteControlled, batteryType, ageRecommendation, maxSpeed, features) {
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.dimensions = { length, width, height };
    this.weight = weight;
    this.material = material;
    this.price = price;
    this.isRemoteControlled = isRemoteControlled;
    this.batteryType = batteryType;
    this.ageRecommendation = ageRecommendation;
    this.maxSpeed = maxSpeed;
    this.features = features;
}
// Create an instance of ToyCar
const ferrari = new ToyCar(
    "Ferrari 488 GTB",
    "Ferrari",
    "Red",
    15,
    7,
    4,
    200,
    "Die-cast metal",
    19.99,
    false,
    "None",
    "3+",
    10,
    ["Realistic Interior", "Detailed Engine", "Rubber Tires"]
);
// Display the toy car details on the page
function displayDetails() {
    document.getElementById("car-name").innerText = `Name: ${ferrari.name}`;
    document.getElementById("car-brand").innerText = `Brand: ${ferrari.brand}`;
    document.getElementById("car-color").innerText = `Color: ${ferrari.color}`;
    document.getElementById("car-dimensions").innerText = `Dimensions: ${ferrari.dimensions.length} x ${ferrari.dimensions.width} x ${ferrari.dimensions.height} cm`;
    document.getElementById("car-weight").innerText = `Weight: ${ferrari.weight} grams`;
    document.getElementById("car-material").innerText = `Material: ${ferrari.material}`;
    document.getElementById("car-price").innerText = `Price: $${ferrari.price}`;
    document.getElementById("car-remote").innerText = `Remote Controlled: ${ferrari.isRemoteControlled ? "Yes" : "No"}`;
    document.getElementById("car-battery").innerText = `Battery Type: ${ferrari.batteryType}`;
    document.getElementById("car-age").innerText = `Age Recommendation: ${ferrari.ageRecommendation}`;
    document.getElementById("car-speed").innerText = `Max Speed: ${ferrari.maxSpeed} km/h`;
    document.getElementById("car-features").innerText = `Features: ${ferrari.features.join(", ")}`;
}

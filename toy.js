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

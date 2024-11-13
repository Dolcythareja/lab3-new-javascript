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

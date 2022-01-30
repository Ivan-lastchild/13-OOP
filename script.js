function Hamburger(size){
    this.cost = size.cost;
    this.callories = size.callories;
}

Hamburger.BIG_SIZE = {
    cost: 100,
    callories: 40,
}

Hamburger.MIDDLE_SIZE = {
    cost: 75,
    callories: 30,
}

Hamburger.SMALL_SIZE = {
    cost: 50,
    callories: 20,
}

Hamburger.TOPPING_SHEESE = {
    cost: 10,
    callories: 20,
}

Hamburger.TOPPING_SALAD = {
    cost: 20,
    callories: 5,
}

Hamburger.TOPPING_POTATO = {
    cost: 15,
    callories: 10,
}

Hamburger.TOPPING_FLAVORING = {
    cost: 15,
    callories: 0,
}

Hamburger.TOPPING_MAYO = {
    cost: 20,
    callories: 5,
}

Hamburger.prototype.getPrice = function(){
    return this.cost;
}

Hamburger.prototype.getCallories = function(){
    return this.callories;
}

Hamburger.prototype.addTopping = function(topping){
    this.cost += topping.cost;
    this.callories += topping.callories;
}

const hamburger = new Hamburger(Hamburger.BIG_SIZE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

hamburger.addTopping(Hamburger.TOPPING_POTATO);

hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log(`Price with sauce: ${hamburger.getPrice()}`);
console.log(`Callories with sauce: ${hamburger.getCallories()}`);


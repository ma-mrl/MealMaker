let menu = {
    _meal: '',
    _price: 0,

    // Add setter methods
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            return this._meal = mealToCheck;
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            return this._price = priceToCheck;
        }
    },

    // Add a getter method
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's Special is ${this._meal} for $${this._price}!`
        } else {
            return `Meal or price was not set correctly!`;
        }
    }
}

// Set the values of _meal and _price using the setter methods
menu.meal = 'Carbonara';
menu.price = 9.95;

// Check the functionality of the setter methods
console.log(menu);

// Check the functionality of the getter method
console.log(menu.todaysSpecial);

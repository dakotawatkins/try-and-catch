let car = { make: "Honda", model: "Civic", color: "Slate Grey" };
//getCarColor(car); // "Slate Grey"
//getCarColor(undefined); // "Color unknown"

/*
The function must use the try/catch syntax.
For a valid car, it should return the car's color.
If accessing the color fails, 
the function should catch the error and return "Color unknown".
*/

//function returns 'car' color.
function getCarColor(car) {
    //let result = car.color;
    try {
        let result = car.color;
        if (!result) {
            throw "Color unkown"
        } else {
          return result;
        }
    } catch (error) { return "Color unknown" }
}

console.log(getCarColor(car))

//do not remove
module.exports = getCarColor;
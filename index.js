// const planet = {
//     name: "Mercury",
//     orbitalPeriodInDays: 88,
//     radiusInMiles: 1516,
//     newObj: {
//         nameObj: "A nested object"
//     }
// };

// Old long way
// const name = planet.name


// Destructuring planet
// You can rename a key by using the syntax below for radiusInMiles as an example
// let { orbitalPeriodInDays, name, radiusInMiles: rad } = planet

// console.log(name)
// console.log(orbitalPeriodInDays)
// console.log(rad)

// Updating key within planet, using 'rad' as reference
rad = 2000
// console.log(rad)
// console.log(newObj)

// const { nameObj } = newObj
// console.log(nameObj)



// const song = {
//     title: "Greatest Love of All",
//     artist: "Whitney Houston",
//     album: "Fav Album"
// }

// const { title, artist } = song

// console.log(`Artist: ${artist}, song: ${title}`)


// Destructuring arrays
const planets = ["Mercury", "Venus", "Earth", "Mars"];

// Naming indexes in planets array can be any name you want
// const [merc, ven, earth] = planets

// Use commas to skip over the elements that you don't want to grab
const [,, earth] = planets


// Cannot reference an index that is not defined in side of your array. Will log undefined as value
// console.log(planets[10])



// Parameter destructuring

// Conventional syntax
// function planetRadiusInKilometers(someObj) {
//     const radiusInMiles = someObj.radiusInMiles;
//     return radiusInMiles * 1.609;
// }


// We can take a key out of the object that the function is getting passed, and use it like we would normally

// Function still takes an object as a param, but the curlys let the function know to look into the object and pull out the radiusInMiles key
function planetRadiusInKilometers( { radiusInMiles } ){
    return radiusInMiles * 1.609
}

// const planet = {
//     name: "Mercury",
//     orbitalPeriodInDays: 88,
//     radiusInMiles: 1516,
// };

// console.log(planetRadiusInKilometers(planet))



// Object Shorthand
const name = "Jupiter";
const orbitalPeriodInDays = 687;
const planet = {
  name,
  orbitalPeriodInDays,
};

// console.log(planet)



// Default Params
function getPlanetAndMoonsDescription(planet, moons=[]) {
    // guard clause
    if(typeof moons !== "object"){
        return "error"
    }
    return `${planet.name} has ${moons.length} moons.`;
}

// Passing in a second param, but not the best syntax
// console.log(getPlanetAndMoonsDescription(planet, []))

// We can give a param a default value, incase that param is omitted when we call the function
// console.log(getPlanetAndMoonsDescription(planet))


// Arrow functions
// These functions do not get hoisted to the top of the file
// Made up of three parts:
// 1. Parens for params
// 2. Thick arrow
// 3. Curly brackets

// New, hip function expression/arrow function
// const sayHello = () => {
//     return "Hello world from arrow function/function expression"
// }

// Old function declaration
// function sayHello(){
//     return "Hello world from function declaration"
// }

// console.log(sayHello())


// Short hand arrow function/function expression
// If the function can be written in one line, we can drop the curly brackets
// Without curly brackets, whatever comes after the arrow is what will be returned.
// The return keyword is omitted bc the return is implied
// const planetRadiusInKilometers2 = () => planet.radiusInMiles * 1.609

// Short, shorthand version
// If the function only takes ONE params, we can drop the parens around the params
const sayHello = name => `Hello, ${name}`

// console.log(typeof planetRadiusInKilometers2)



// Spread operator
const beforeEarth = ["Mercury", "Venus"];
const afterEarth = ["Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

const allPlanets = [...beforeEarth, "Earth", ...afterEarth]
// console.log(allPlanets)



const myFlavors = ["Strawberry", "Rocky Road"]
const yourFlavors = ["Mint Chocolate Chip", "Cookie Dough"]

// We can make each element in the two array above, become standalone elements inside of the flavors array below, by using the spread operator
const flavors = [...myFlavors, ...yourFlavors]
// console.log(flavors)

// Spread operator will grab everything inside of an array or object
// console.log(...myFlavors)


// Spread operator for objects
const physicalRequirements = {
    visualAcuity: "20/20",
};
const workRequirements = {
    degree: "STEM field",
    minimumYearsOfExperience: 3,
};


const requirements = {
    mustBeUSCitizen: true,
    ...physicalRequirements,
    ...workRequirements
}

// console.log(requirements)



// Rest syntax
const astronauts = [
    "Jessica Watkins",
    "Robert Shane",
    "Nicole Mann",
    "Jasmin Moghbeli",
    "Frank Rubio",
];

const [first, second, ...rest] = astronauts
console.log(first)
console.log(rest)


const dog = {
    dogName: "Rex",
    age: 7,
    legs: 5,
    bestFriends: ["Sally", "Fido"]
}

// const { dogName, age, ...rest} = dog
// console.log(rest)


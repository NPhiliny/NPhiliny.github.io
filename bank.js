// var owedMoney = {} //empty object
// owedMoney["Jimmy"] = 4;
// owedMoney["Anna"] = 3;
// owedMoney["Olga"] = 9;
// owedMoney["Jimmy"] += 9;
// console.log(owedMoney);
var movies = {
    "Finding Nemo": {
        releaseDate: 2003,
        duration: 100,
        actors: ["Alberet Brooks", "Ellen Degeneres", "Alexander Gold"],
        format: "DVD"
    },
    "Star Wars: Episode VI - Return og the Jedi": {
        releaseDate: 1983,
        duration: 134,
        actors: ["Mark Hamil", "Harison Ford", "Carrie Fisher"],
        format: "DVD"
    },
    "Harry Potter and the Goblet of Fire": {
        releaseDate: 2005,
        duration: 157,
        actors: ["Daniel Radclieffe", "Emma Watson", "Rupert Grint"],
        format: "Blu-ray"
    }
};

// console.log(movies);
console.log(movies["Harry Potter and the Goblet of Fire"]);
console.log(movies["Harry Potter and the Goblet of Fire"].duration);
var potterMovie = movies["Harry Potter and the Goblet of Fire"];
var formatM = potterMovie.format;
console.log(formatM);
var newData = {
    releaseDate: 2006,
    duration: 117,
    actors: ["Mark", "Edward", "Bowy"],
    format: "Blu-ray"
}
movies["newData"] = newData;

console.log(movies); 

console.log("All my movies: ", Object.keys(movies)); //to list the names of all movies
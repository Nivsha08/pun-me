import store from "../store/store"

const jokesAPIs = "https://sv443.net/jokeapi/category/Any";

export default class PunGenerator {

    constructor() {}

    getJoke = async () => {
        let data: object = await fetch(jokesAPIs);
        const jokeObject = await data.json();
        return this.parseJoke(jokeObject);
    }
    
    parseJoke = (jokeObject: object) => {
        let joke = "";
        if (jokeObject.type === "twopart") {
            joke = [jokeObject.setup, jokeObject.delivery];
        }
        else if (jokeObject.type === "single") {
            joke = [jokeObject.joke];
        }
        return joke;
    }
    

}
import store from "../store/store"

const jokesAPIs = "https://sv443.net/jokeapi/category/Any";
interface IJokeObject {
    type?: string | any,
    setup?: string | any,
    delivery?: string | any,
    joke?: string | any
};


export default class PunGenerator {

    constructor() {}

    getJoke = async () => {
        let data = await fetch(jokesAPIs);
        const jokeObject = await data.json();
        return this.parseJoke(jokeObject);
    }
    
    parseJoke = (jokeObject: IJokeObject) => {
        let joke: string[] = [];
        if (jokeObject.type === "twopart") {
            joke = [jokeObject.setup, jokeObject.delivery];
        }
        else if (jokeObject.type === "single") {
            joke = [jokeObject.joke];
        }
        return joke;
    }
    

}
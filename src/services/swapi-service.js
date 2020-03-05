//https://pokeapi.co/api/v2/pokemon/1231/
//https://swapi.co/api/people/1/
export default class SwapiService {
    _apiBase = 'https://swapi.co/api/'
    async getResourse (url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(` Could not fetch ${url}, received ${res.status}`)
        }
    return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResourse(`people/`)
        return res.results
    }

    getPeopleId(id) {
        return this.getResourse(`people/${id}/`)
    }

    async getAllPlanets() {
        const res = await this.getResourse(`planets/`)
        return res.results
    }

    getPlanetsId(id) {
        return this.getResourse(`planets/${id}/`)
    }

    async getAllStarships() {
        const res = await this.getResourse(`starships/`)
        return res.results
    }

    getStarshipsId(id) {
        return this.getResourse(`starships/${id}/`)
    }

}

const swapi = new SwapiService()
swapi.getAllPeople().then((people) => {
    people.forEach(element => {
        console.log(element.name)
    });
})

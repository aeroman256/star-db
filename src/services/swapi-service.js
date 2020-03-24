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

    getAllPeople = async () => {
        const res = await this.getResourse(`people/`)
        return res.results.map(this._transformPerson)
    }

    getPerson = async (id) => {
        const person = await this.getResourse(`people/${id}/`)
        return this._transformPerson(person)
    }

    getAllPlanets = async () => {
        const res = await this.getResourse(`planets/`)
        return res.results.map(this._transformPlanet)
    }

    getPlanet = async (id) => {
        const planet = await this.getResourse(`planets/${id}/`)
        return this._transformPlanet(planet)
    }

    getAllStarships = async () => {
        const res = await this.getResourse(`starships/`)
        return res.results.map(this._transformStarsheep)
    }

    getStarshipsId = async (id) => {
        const starsheep = await this.getResourse(`starships/${id}/`)
        return this._transformStarsheep(starsheep)
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        const res = item.url.match(idRegExp)[1];
        return res
      }

    _transformPlanet = (planet) => {
        const id = this._extractId(planet)
        return (
            {
                id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            }
        )
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        } 


    }

    _transformStarsheep = (starsheep) => {
        const id = this._extractId(starsheep)
        return {
            id,
            name: starsheep.name,
            model: starsheep.model,
            manufacturer: starsheep.manufacturer,
            costInCredits: starsheep.costInCredits,
            length: starsheep.length,
            crew: starsheep.crew,
            passengers: starsheep.passengers,
            cargoCapacity: starsheep.cargoCapacity
        }

    }
}
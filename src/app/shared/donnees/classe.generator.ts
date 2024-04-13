import { faker } from "@faker-js/faker";
import { Classe } from "../interfaces/classes";

export function createClasse(): Classe {
    return {
        id: faker.string.uuid(),
        libelle: faker.word.sample(),
        effectif: faker.number.int({ min: 20, max: 50}),
    }

}

export function createClasses(nombreClasses: number = 10): Classe[] {
    return faker.helpers.multiple(createClasse, {
        count: nombreClasses
    })
  };
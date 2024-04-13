import { faker } from '@faker-js/faker';
import { Eleve } from '../interfaces/eleves';
  

export function createEleve(): Eleve {
    return {
      id: faker.string.uuid(),
      nom: faker.person.lastName(),
      prenom: faker.person.fullName(),
      adresse: faker.location.streetAddress(),
      matricule: 'MAT-' + faker.number.int({ min: 1000, max: 9999 }),
      dateNaissance: faker.date.birthdate(),
    };
  }
  
  export function createEleves(nombreEleves: number = 20): Eleve[] {
    return faker.helpers.multiple(createEleve, {
        count: nombreEleves
    })
  };
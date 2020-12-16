class Villagers {
  constructor(card) {
    this.card = card

    this.url = 'https://acnhapi.com/v1/villagers/'
    
    this.villagers = Array()
    this.animals = Object()
  }

  async getVillagers() {
    if (this.villagers.length === 0) {
      const response = await fetch(this.url)
      const json = await response.json()
      Object.entries(await json).forEach(villager => {
        let villagerNew = villager[1]
        villagerNew.id = villager[0]
        this.villagers.push(villagerNew)
      })
    }
  }
  
  sortVillagers() {
    let anteaters = this.villagers.filter(villager => villager.species === 'Anteater')
    let bears = this.villagers.filter(villager => villager.species === 'Bear')
    let birds = this.villagers.filter(villager => villager.species === 'Bird')
    let chickens = this.villagers.filter(villager => villager.species === 'Chicken')
    let cows = this.villagers.filter(villager => villager.species === 'Cow')
    let gators = this.villagers.filter(villager => villager.species === 'Alligator')
    let deer = this.villagers.filter(villager => villager.species === 'Deer')
    let dogs = this.villagers.filter(villager => villager.species === 'Dog')
    let ducks = this.villagers.filter(villager => villager.species === 'Duck')
    let eagles = this.villagers.filter(villager => villager.species === 'Eagle')
    let elephants = this.villagers.filter(villager => villager.species === 'Elephant')
    let frogs = this.villagers.filter(villager => villager.species === 'Frog')
    let goats = this.villagers.filter(villager => villager.species === 'Goat')
    let gorillas = this.villagers.filter(villager => villager.species === 'Gorilla')
    let hamsters = this.villagers.filter(villager => villager.species === 'Hamster')
    let hippos = this.villagers.filter(villager => villager.species === 'Hippo')
    let horses = this.villagers.filter(villager => villager.species === 'Horse')
    let kangaroos = this.villagers.filter(villager => villager.species === 'Kangaroo')
    let koalas = this.villagers.filter(villager => villager.species === 'Koala')
    let lions = this.villagers.filter(villager => villager.species === 'Lion')
    let monkeys = this.villagers.filter(villager => villager.species === 'Monkey')
    let mice = this.villagers.filter(villager => villager.species === 'Mouse')
    let octopuses = this.villagers.filter(villager => villager.species === 'Octopus')
    let ostriches = this.villagers.filter(villager => villager.species === 'Ostrich')
    let penguins = this.villagers.filter(villager => villager.species === 'Penguin')
    let pigs = this.villagers.filter(villager => villager.species === 'Pig')
    let rabbits = this.villagers.filter(villager => villager.species === 'Rabbit')
    let rhinos = this.villagers.filter(villager => villager.species === 'Rhino')
    let sheep = this.villagers.filter(villager => villager.species === 'Sheep')
    let squirrels = this.villagers.filter(villager => villager.species === 'Squirrel')
    let tigers = this.villagers.filter(villager => villager.species === 'Tiger')
    let wolves = this.villagers.filter(villager => villager.species === 'Wolf')
  
    return {
      anteaters: {
        animalName: 'Anteaters',
        anteaters,
      },
      bears: {
        animalName: 'Bears',
        bears,
      },
      birds: {
        animalName: 'Birds',
        birds,
      },
      chickens: {
        animalName: 'Chickens',
        chickens,
      },
      cows: {
        animalName: 'Cows',
        cows,
      },
      gators: {
        animalName: 'Alligators and Crocodiles',
        gators,
      },
      deer: {
        animalName: 'Deer',
        deer,
      },
      dogs: {
        animalName: 'Dogs',
        dogs,
      },
      ducks: {
        animalName: 'Ducks',
        ducks,
      },
      eagles: {
        animalName: 'Eagles',
        eagles,
      },
      elephants: {
        animalName: 'Elephants',
        elephants,
      },
      frogs: {
        animalName: 'Frogs',
        frogs,
      },
      goats: {
        animalName: 'Goats',
        goats,
      },
      gorillas: {
        animalName: 'Gorillas',
        gorillas,
      },
      hamsters: {
        animalName: 'Hamsters',
        hamsters,
      },
      hippos: {
        animalName: 'Hippos',
        hippos,
      },
      horses: {
        animalName: 'Horses',
        horses,
      },
      kangaroos: {
        animalName: 'Kangaroos',
        kangaroos,
      },
      koalas: {
        animalName: 'Koalas',
        koalas,
      },
      lions: {
        animalName: 'Lions',
        lions,
      },
      monkeys: {
        animalName: 'Monkeys',
        monkeys,
      },
      mice: {
        animalName: 'Mice',
        mice,
      },
      octopuses: {
        animalName: 'Octopuses',
        octopuses,
      },
      ostriches: {
        animalName: 'Ostriches',
        ostriches,
      },
      penguins: {
        animalName: 'Penguins',
        penguins,
      },
      pigs: {
        animalName: 'Pigs',
        pigs,
      },
      rabbits: {
        animalName: 'Rabbits',
        rabbits,
      },
      rhinos: {
        animalName: 'Rhinos',
        rhinos,
      },
      sheep: {
        animalName: 'Sheep',
        sheep,
      },
      squirrels: {
        animalName: 'Squirrels',
        squirrels,
      },
      tigers: {
        animalName: 'Tigers',
        tigers,
      },
      wolves: {
        animalName: 'Wolves',
        wolves,
      },
    }
  }
}
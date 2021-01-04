class Villagers {
  constructor(card) {
    this.card = card

    this.url = 'https://acnhapi.com/v1/villagers/'
    
    this.villagers = new Array()
    this.animals = new Object()
  }

  async getVillagers() {
    const response = await fetch(this.url)
    const json = await response.json()
    Object.entries(await json).forEach(villager => {
      let villagerNew = villager[1]
      villagerNew.id = villager[0]
      this.card.villagers.villagers.push(villagerNew)
    })
  }
  
  sortVillagers() {
    const { villagers } = this.card.villagers

    const anteaters = villagers.filter(villager => villager.species === 'Anteater')
    const bears = villagers.filter(villager => villager.species === 'Bear')
    const birds = villagers.filter(villager => villager.species === 'Bird')
    const chickens = villagers.filter(villager => villager.species === 'Chicken')
    const cows = villagers.filter(villager => villager.species === 'Cow')
    const gators = villagers.filter(villager => villager.species === 'Alligator')
    const deer = villagers.filter(villager => villager.species === 'Deer')
    const dogs = villagers.filter(villager => villager.species === 'Dog')
    const ducks = villagers.filter(villager => villager.species === 'Duck')
    const eagles = villagers.filter(villager => villager.species === 'Eagle')
    const elephants = villagers.filter(villager => villager.species === 'Elephant')
    const frogs = villagers.filter(villager => villager.species === 'Frog')
    const goats = villagers.filter(villager => villager.species === 'Goat')
    const gorillas = villagers.filter(villager => villager.species === 'Gorilla')
    const hamsters = villagers.filter(villager => villager.species === 'Hamster')
    const hippos = villagers.filter(villager => villager.species === 'Hippo')
    const horses = villagers.filter(villager => villager.species === 'Horse')
    const kangaroos = villagers.filter(villager => villager.species === 'Kangaroo')
    const koalas = villagers.filter(villager => villager.species === 'Koala')
    const lions = villagers.filter(villager => villager.species === 'Lion')
    const monkeys = villagers.filter(villager => villager.species === 'Monkey')
    const mice = villagers.filter(villager => villager.species === 'Mouse')
    const octopuses = villagers.filter(villager => villager.species === 'Octopus')
    const ostriches = villagers.filter(villager => villager.species === 'Ostrich')
    const penguins = villagers.filter(villager => villager.species === 'Penguin')
    const pigs = villagers.filter(villager => villager.species === 'Pig')
    const rabbits = villagers.filter(villager => villager.species === 'Rabbit')
    const rhinos = villagers.filter(villager => villager.species === 'Rhino')
    const sheep = villagers.filter(villager => villager.species === 'Sheep')
    const squirrels = villagers.filter(villager => villager.species === 'Squirrel')
    const tigers = villagers.filter(villager => villager.species === 'Tiger')
    const wolves = villagers.filter(villager => villager.species === 'Wolf')
  
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
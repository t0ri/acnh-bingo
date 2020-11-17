const api = 'https://acnhapi.com/v1/villagers/'
let villagers = []

const getVillagers = async (url) => {
  const response = await fetch(url)
  const json = await response.json()
  Object.entries(await json).forEach(villager => {
    villagers.push(villager)
  })
}

const sortVillagers = () => {
  let anteaters = villagers.filter(villager => villager[1].species === 'Anteater')
  let bears = villagers.filter(villager => villager[1].species === 'Bear')
  let birds = villagers.filter(villager => villager[1].species === 'Bird')
  let chickens = villagers.filter(villager => villager[1].species === 'Chicken')
  let cows = villagers.filter(villager => villager[1].species === 'Cow')
  let gators = villagers.filter(villager => villager[1].species === 'Alligator')
  let deer = villagers.filter(villager => villager[1].species === 'Deer')
  let dogs = villagers.filter(villager => villager[1].species === 'Dog')
  let ducks = villagers.filter(villager => villager[1].species === 'Duck')
  let eagles = villagers.filter(villager => villager[1].species === 'Eagle')
  let elephants = villagers.filter(villager => villager[1].species === 'Elephant')
  let frogs = villagers.filter(villager => villager[1].species === 'Frog')
  let goats = villagers.filter(villager => villager[1].species === 'Goat')
  let gorillas = villagers.filter(villager => villager[1].species === 'Gorilla')
  let hamsters = villagers.filter(villager => villager[1].species === 'Hamster')
  let hippos = villagers.filter(villager => villager[1].species === 'Hippo')
  let horses = villagers.filter(villager => villager[1].species === 'Horses')
  let kangaroos = villagers.filter(villager => villager[1].species === 'Kangaroo')
  let koalas = villagers.filter(villager => villager[1].species === 'Koala')
  let lions = villagers.filter(villager => villager[1].species === 'Lion')
  let monkeys = villagers.filter(villager => villager[1].species === 'Monkey')
  let mice = villagers.filter(villager => villager[1].species === 'Mouse')
  let octopuses = villagers.filter(villager => villager[1].species === 'Octopus')
  let ostriches = villagers.filter(villager => villager[1].species === 'Ostrich')
  let penguins = villagers.filter(villager => villager[1].species === 'Penguin')
  let pigs = villagers.filter(villager => villager[1].species === 'Pig')
  let rabbits = villagers.filter(villager => villager[1].species === 'Rabbit')
  let rhinos = villagers.filter(villager => villager[1].species === 'Rhino')
  let sheep = villagers.filter(villager => villager[1].species === 'Sheep')
  let squirrels = villagers.filter(villager => villager[1].species === 'Squirrel')
  let tigers = villagers.filter(villager => villager[1].species === 'Tiger')
  let wolves = villagers.filter(villager => villager[1].species === 'Wolf')

  return villagerTypes = {
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

const eventListeners = () => {
  // Get Elements
  let selectorsElements = document.querySelectorAll('.animal-type-portrait-container')
  selectorsElements.forEach((selectElement) => {
    selectElement.addEventListener('click', event => {
      let element = event.target
      while (element.className !== 'portrait-container') {
        element = element.parentNode
      }
      updateVillager(element.attributes[1]['nodeValue'], element.attributes[2]['nodeValue'])
    })
  })
}

const createSelections = () => {
  // Create Animal Type Container
  const villagersContainer = document.getElementById('villagers-container')
  villagersContainer.innerHTML = ''
  for (const animalType in villagers) {
    // Create Animal Type Header
    const animalHeading = document.createElement('h2')
    animalHeading.innerHTML = villagers[animalType]['animalName']
    animalHeading.className = 'animal-type-header'
    villagersContainer.appendChild(animalHeading)

    // Create Animal Type Portraits Container
    const animalContainer = document.createElement('div')
    animalContainer.className = 'animal-type-portrait-container'

    const animals = villagers[animalType][animalType].filter((value, index, array)=>array.findIndex((index) => (index[0] === value[0])) === index)

    // Create Portraits
    animals.map((animal) => {
      // Create Portrait Container
      const animalPortraitContainer = document.createElement('div')
      animalPortraitContainer.className = `portrait-container`
      animalPortraitContainer.setAttribute('data-id', animal[0])
      animalPortraitContainer.setAttribute('data-name', animal[1]['name']['name-USen'])

      // Create Portrait
      const animalPortrait = document.createElement('img')
      animalPortrait.src = animal[1]['icon_uri']
      animalPortrait.className = 'animal-portrait grow'

      // Create Animal Name Text
      const animalName = document.createElement('p')
      animalName.className = 'animal-name'
      animalName.innerHTML = animal[1]['name']['name-USen']

      animalPortraitContainer.appendChild(animalPortrait)
      animalPortraitContainer.appendChild(animalName)
      animalContainer.appendChild(animalPortraitContainer)
    })

    villagersContainer.appendChild(animalContainer)
  }

  eventListeners()
}

const init = () => {
  if (villagers.length >= 393) {
    villagers = sortVillagers()
    createSelections()
  } else {
    getVillagers(api)
    setTimeout(init, 500)
  }
}

init()
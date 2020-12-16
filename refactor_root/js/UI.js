class UI {
  constructor(game) {
    this.game = game
    this.bg = this.setBackground()
  }

  setBackground() {
    let background = new Image()
    background.src = './img/card.jpg'
    background.onload = () => {
      this.game.ctx.drawImage(background, 0, 0)
    }
    canvas.addEventListener('click', this.clickCanvas)
  }

  eventListeners() {
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

  createSelections() {
    // Create Animal Type Container
    const villagersContainer = document.getElementById('villagers-container')
    villagersContainer.innerHTML = ''
    for (const animalType in this.villagers.villagers) {
      // Create Animal Type Header
      const animalHeading = document.createElement('h2')
      animalHeading.innerHTML = villagers[animalType]['animalName']
      animalHeading.className = 'animal-type-header'
      villagersContainer.appendChild(animalHeading)
  
      // Create Animal Type Portraits Container
      const animalContainer = document.createElement('div')
      animalContainer.className = 'animal-type-portrait-container'
  
      const animals = this.villagers.animals[animalType][animalType].filter((value, index, array)=>array.findIndex((index) => (index.id === value.id)) === index)
  
      // Create Portraits
      animals.map((animal) => {
        // Create Portrait Container
        const animalPortraitContainer = document.createElement('div')
        animalPortraitContainer.className = `portrait-container`
        animalPortraitContainer.setAttribute('data-id', animal['id'])
        animalPortraitContainer.setAttribute('data-name', animal['name']['name-USen'])
  
        // Create Portrait
        const animalPortrait = document.createElement('img')
        animalPortrait.src = animal['icon_uri']
        animalPortrait.className = 'animal-portrait grow'
  
        // Create Animal Name Text
        const animalName = document.createElement('p')
        animalName.className = 'animal-name'
        animalName.innerHTML = animal['name']['name-USen']
  
        animalPortraitContainer.appendChild(animalPortrait)
        animalPortraitContainer.appendChild(animalName)
        animalContainer.appendChild(animalPortraitContainer)
      })
  
      villagersContainer.appendChild(animalContainer)
    }
  
    this.eventListeners()
  }

  clickCanvas(e) {
    slot = this.card.detectSlot(e.clientX, e.clientY)
    gridPosition = iconNums.gridPositions[slot]
  
    if (gridPosition && gridPosition !== 13) {
      const instructions = document.getElementById('instructions')
      instructions.innerHTML = `Select a Villager to fill ${slot.replace(/\s/g, '')}.`
    } else if (gridPosition === 13) {
      const instructions = document.getElementById('instructions')
      instructions.innerHTML = `Cannot Replace Free Space!`
    }
  }

  // Set Villager
  // `updateVillager('id', 'My Name', 1)`
  updateVillager(villagerId, villagerName) {
    if (position && position !== 13) {
      let icon = new Image()
      icon.src = `https://acnhapi.com/v1/images/villagers/${villagerId}`
      icon.crossOrigin = 'anonymous'
      
      let column = cardSlot[0]
      let row = cardSlot[2]
      
      icon.onload = () => {
        const columnCenter = iconNums.slots.columns[column] + 30 + 20
        const textWidth = Number(ctx.measureText(villagerName).width) / 2
        const textPosition = iconNums.slots.rows[row] + iconNums.height + 30
        
        ctx.fillStyle = "#fff"
        ctx.fillRect(iconNums.slots.columns[column] + 20, iconNums.slots.rows[row] + 15, iconNums.width, iconNums.height + 20)
    
        ctx.drawImage(icon, iconNums.slots.columns[column] + 20, iconNums.slots.rows[row] + 15, iconNums.width, iconNums.height)
    
        ctx.font = '14px Balsamiq Sans'
        ctx.fillStyle = '#60bec3'
        ctx.fillText(villagerName, columnCenter - textWidth, textPosition)
      }
    }

    this.card.gridPosition = undefined
    this.card.slot = undefined
    const instructions = document.getElementById('instructions')
    instructions.innerHTML = 'Select a Spot on the Bingo Card to Fill.'
  }
}


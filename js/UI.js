class UI {
  constructor(card) {
    this.card = card

    // Define Canvas
    this.canvas = document.getElementsByTagName('canvas')[0]
    this.canvas.width = 590
    this.canvas.height = 700
    this.ctx = this.canvas.getContext('2d')
    this.bg = this.setBackground()

    this.firstTextPlaced = false
  }

  setBackground() {
    let background = new Image()
    background.src = './img/card.jpg'
    background.onload = () => {
      this.ctx.drawImage(background, 0, 0)
    }
    this.canvas.addEventListener('click', this.clickCanvas.bind(this))
  }

  updateVillager(villagerId, villagerName, random=false) {
    if (this.card.activeSlot && this.card.activeSlot !== 13) {
      let icon = new Image()
      icon.src = `https://acnhapi.com/v1/images/villagers/${villagerId}`
      icon.crossOrigin = 'anonymous'
      
      let column = String(this.card.activeGridPosition)[0]
      let row = String(this.card.activeGridPosition)[2]
      
      icon.onload = () => {
        const columnCenter = this.card.slotData.columns[column] + 50
        const textWidth = Number(this.ctx.measureText(villagerName).width)
        const textHeightPosition = this.card.slotData.rows[row] + this.card.slotData.slotHeight - 10
        
        this.ctx.drawImage(icon, this.card.slotData.columns[column] + 20, this.card.slotData.rows[row] + 15, 60, 60)
        
        this.ctx.fillStyle = "#fff"
        this.ctx.fillRect(this.card.slotData.columns[column] + 20, this.card.slotData.rows[row] + 75, 60, 20)
        
        this.ctx.font = '14px Balsamiq Sans'
        this.ctx.fillStyle = '#60bec3'
        this.ctx.fillText(villagerName, columnCenter - (textWidth / 2), textHeightPosition)

        // Fixes uneven text placement bug
        if (!this.firstTextPlaced) {
          this.firstTextPlaced = true
          this.ctx.fillStyle = "#fff"
          this.ctx.fillRect(this.card.slotData.columns[column] + 20, this.card.slotData.rows[row] + 75, 60, 20)
        
          this.ctx.font = '14px Balsamiq Sans'
          this.ctx.fillStyle = '#60bec3'
          this.ctx.fillText(villagerName, columnCenter - (Number(this.ctx.measureText(villagerName).width) / 2), textHeightPosition)
        }
      }

    }

    this.card.random = random
    this.toggleRandomVerificationElement()
    
    this.card.activeGridPosition = undefined
    this.card.activeSlot = undefined
    const instructions = document.getElementById('instructions')
    instructions.innerHTML = 'Select a Spot on the Bingo Card to Fill.'
  }

  toggleRandomVerificationElement() {
    if (this.card.random) {
      this.ctx.fillStyle = "#fff"
      this.ctx.fillRect(360, 677, 225, 25)

      this.ctx.font = '12px Balsamiq Sans'
      this.ctx.fillStyle = '#C0C0C0'
      this.ctx.fillText('Certified Randomly Generated Card', 370, 695)
    } else {
      this.ctx.fillStyle = "#fff"
      this.ctx.fillRect(360, 677, 225, 25)
    }
  }

  setEventListeners() {
    // Get Elements
    let selectorsElements = document.querySelectorAll('.animal-type-portrait-container')
    selectorsElements.forEach((selectElement) => {
      selectElement.addEventListener('click', event => {
        let element = event.target
        while (element.className !== 'portrait-container') {
          element = element.parentNode
        }
        this.updateVillager(element.attributes[1]['nodeValue'], element.attributes[2]['nodeValue'])
      })
    })
  }

  renderPortraitSelectors() {
    const { animals: animalsObj } = this.card.villagers
    
    // Create AnimalType Container
    const villagersContainer = document.getElementById('villagers-container')
    // Remove "Loading" Text
    villagersContainer.innerHTML = ''

    for (const animalType in animalsObj) {
      // Create AnimalType Header
      const animalHeading = document.createElement('h2')
      animalHeading.innerHTML = animalsObj[animalType]['animalName']
      animalHeading.className = 'animal-type-header'
      villagersContainer.appendChild(animalHeading)
  
      // Create Animal Type Portraits Container
      const animalContainer = document.createElement('div')
      animalContainer.className = 'animal-type-portrait-container'

      // Create Portraits
      animalsObj[animalType][animalType].map((animal) => {
        // Create Portrait Container
        const animalPortraitContainer = document.createElement('div')
        animalPortraitContainer.className = 'portrait-container'
        animalPortraitContainer.setAttribute('data-id', animal['id'])
        animalPortraitContainer.setAttribute('data-name', animal['name']['name-USen'])
  
        // Create Portrait
        const animalPortrait = document.createElement('img')
        animalPortrait.src = animal['icon_uri']
        animalPortrait.className = 'animal-portrait grow'
  
        // Create Name Text
        const animalName = document.createElement('p')
        animalName.className = 'animal-name'
        animalName.innerHTML = animal['name']['name-USen']
  
        animalPortraitContainer.appendChild(animalPortrait)
        animalPortraitContainer.appendChild(animalName)
        animalContainer.appendChild(animalPortraitContainer)
      })
  
      villagersContainer.appendChild(animalContainer)
    }
  
    this.setEventListeners()
  }

  clickCanvas(e) {
    let gridPosition = this.card.slotData.detectGridPosition(e.clientX, e.clientY)
    this.card.activeGridPosition = gridPosition
    this.card.activeSlot = this.card.slotData.gridToSlot[gridPosition]
  
    if (this.card.activeSlot && this.card.activeSlot !== 13) {
      const instructions = document.getElementById('instructions')
      instructions.innerHTML = `Select a Villager to fill ${gridPosition.replace(/\s/g, '')}.`
    } else if (this.card.activeSlot === 13) {
      const instructions = document.getElementById('instructions')
      instructions.innerHTML = `Cannot Replace Free Space!`
    }
  }
}

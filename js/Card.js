class Card {
  constructor() {
    this.villagers = new Villagers(this)
    this.ui = new UI(this)
    this.slotData = new SlotData(this)

    this.activeSlot = undefined
    this.activeGridPosition = undefined

    this.random = false
  }

  async init() {
    if (this.villagers.villagers) {
      // Initialize Villagers List
      if (this.villagers.villagers.length === 0) {
        // Populate `this.villagers.villagers` from API
        await this.villagers.getVillagers()
        // Call `init()` again to sort animals
        this.init()
      // After retrieving villagers, sort into Animals
      } else if (this.villagers.villagers.length === 391) {
        // Sort Villagers
        this.villagers.animals = await this.villagers.sortVillagers()
        // Render Animal List
        this.ui.renderPortraitSelectors()
      }
    } else {
      // Reset `this.villagers.villagers` if undefined
      this.villagers.villagers = new Array()
      // Call `init()` again to restart process
      setTimeout(this.init(), 1000)
    }
  }

  downloadImage(element) {
    let image = this.ui.canvas.toDataURL('image/jpg')
    element.href = image
  }

  randomizeCard() {
    // For each slot on Bingo Card (1-25, except 13)
    for (let slot = 0; slot < 26; slot++) {
      this.activeSlot = slot
      this.activeGridPosition = this.slotData.slotToGrid[slot]

      if (slot !== 13) {  
        // Get random integer between 0 and 391
        const randomVillagerNumber = Math.floor(Math.random() * Math.floor(392))
        
        // Get Villager from `randomVillagerNumber`
        const villager = this.villagers.villagers[randomVillagerNumber]

        // Call updateVillager() to place Villager on card
        this.ui.updateVillager(villager.id, villager.name['name-USen'], true)
      }
    }
    
    this.random = true
    this.ui.toggleRandomVerificationElement()
  }
}

const card = new Card()
card.init()
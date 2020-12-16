class Card {
  constructor() {
    this.ui = new UI(this)
    this.villagers = new Villagers(this)

    // Define Canvas
    this.canvas = document.getElementsByTagName('canvas')[0]
    this.canvas.width = 590
    this.canvas.height = 700
    this.ctx = this.canvas.getContext('2d')

    this.slot = undefined
    this.gridPosition = undefined
  }

  init() {
    const { villagers, animals } = this.villagers
    console.log(villagers, animals)
    if (villagers.length === 0) {
      console.log('1')
      this.villagers.getVillagers(this.villagers.url)
      setTimeout(this.init, 500)
    } else if (villagers.length >= 391) {
      console.log('2')
      this.villagers.animals = this.villagers.sortVillagers()
      this.ui.createSelections()
    }
  }

  downloadImage(element) {
    let image = this.canvas.toDataURL('image/jpg')
    element.href = image
  }

  // #TODO later
  randomizeCard(element) {
    // updateVillager('ant01', 'Winston', 1, 'B 1')
  
    // For each slot on Bingo Card (1-25, except 13)
    for (gridPosition = 0; gridPosition < 26; gridPosition++) {
      if (gridPosition !== 13) {
        // Generate slot from gridPosition
        Object.keys(villagers).find(gridPosition => object[gridPosition] === value);
  
  
        // Get random integer between 0 and 391
        randomVillager = Math.floor(Math.random() * Math.floor(392))
        
      }
    }
    // for each bingo space (0 - 25, except 13)
      // set grid position
      // get random num between 0 - 393
      // get villagers[random num]
      // updateVillager()
  }

  detectRow(clickX) {
    if (clickX > iconNums.slots.rows['1']) {
      if (clickX > iconNums.slots.rows['2']) {
        if (clickX > iconNums.slots.rows['3']) {
          if (clickX > iconNums.slots.rows['4']) {
            if (clickX > iconNums.slots.rows['5']) {
              return '5'
            }
            return '4'
          }
          return '3'
        }
        return '2'
      }
      return '1'
    }
  }

  detectColumn(clickY) {
    if (clickY > iconNums.slots.columns['B'] - 15) {
      if (clickY > iconNums.slots.columns['I']) {
        if (clickY > iconNums.slots.columns['N']) {
          if (clickY > iconNums.slots.columns['G']) {
            if (clickY > iconNums.slots.columns['O'])  {
              return 'O'
            }
            return 'G'
          }
          return 'N'
        }
        return 'I'
      }
      return 'B'
    }
  }

  detectSlot(windowX, windowY) {
    const canvasRect = canvas.getBoundingClientRect()
    const bodyRect = document.body.getBoundingClientRect()
    const offsetTop = canvasRect.top - bodyRect.top
    const offsetLeft = canvasRect.left - bodyRect.left
  
    const column = detectColumn(windowX - offsetLeft - 8)
    const row = detectRow(windowY - offsetTop - 20)
  
    return `${column} ${row}`
  }
  
}

const card = new Card()
card.init()
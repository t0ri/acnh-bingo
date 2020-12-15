// Slot Dictionary
const iconNums = {
  height: 60,
  width: 60,
  padding: 10,
  margin: 25,
  slots: {
    columns: {
      'B': 25,
      'I': 135,
      'N': 245,
      'G': 355,
      'O': 465,
    },
    rows: {
      '1': 135,
      '2': 245,
      '3': 355,
      '4': 465,
      '5': 575,
    }
  },
  gridPositions: {
    'B 1': 1,
    'I 1': 2, 
    'N 1': 3, 
    'G 1': 4, 
    'O 1': 5, 
    'B 2': 6, 
    'I 2': 7, 
    'N 2': 8, 
    'G 2': 9, 
    'O 2': 10, 
    'B 3': 11, 
    'I 3': 12, 
    'N 3': 13, 
    'G 3': 14, 
    'O 3': 15, 
    'B 4': 16, 
    'I 4': 17, 
    'N 4': 18, 
    'G 4': 19, 
    'O 4': 20, 
    'B 5': 21, 
    'I 5': 22, 
    'N 5': 23, 
    'G 5': 24, 
    'O 5': 25, 
  }
}

// Define Canvas
let canvas = document.getElementsByTagName('canvas')[0]
ctx = canvas.getContext('2d')
canvas.width = 590
canvas.height = 700

// Detect Row Clicked
const detectRow = (clickX) => {
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

// Detect Column Clicked
const detectColumn = (clickY) => {
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

// Find Slot Clicked
const detectSlot = (windowX, windowY) => {
  const canvasRect = canvas.getBoundingClientRect()
  const bodyRect = document.body.getBoundingClientRect()
  const offsetTop = canvasRect.top - bodyRect.top
  const offsetLeft = canvasRect.left - bodyRect.left

  const column = detectColumn(windowX - offsetLeft - 8)
  const row = detectRow(windowY - offsetTop - 20)

  return `${column} ${row}`
}

let gridPosition
let slot

const clickCanvas = (e) => {
  slot = detectSlot(e.clientX, e.clientY)
  gridPosition = iconNums.gridPositions[slot]

  if (gridPosition && gridPosition !== 13) {
    const instructions = document.getElementById('instructions')
    instructions.innerHTML = `Select a Villager to fill ${slot.replace(/\s/g, '')}.`
  } else if (gridPosition === 13) {
    const instructions = document.getElementById('instructions')
    instructions.innerHTML = `Cannot Replace Free Space!`
  }
}

// Set Background
const setBackground = (() => {
  let background = new Image()
  background.src = './card3.jpg'
  background.onload = () => {
    ctx.drawImage(background, 0, 0)
  }
  canvas.addEventListener('click', clickCanvas)
})()

// Set Villager
// `updateVillager('id', 'My Name', 1)`
const updateVillager = (villagerId, villagerName, position=gridPosition, cardSlot=slot) => {
  console.log(position)
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

  gridPosition = undefined
  slot = undefined
  const instructions = document.getElementById('instructions')
  instructions.innerHTML = 'Select a Spot on the Bingo Card to Fill.'
}

// Download Button Clicked
const downloadImage = (element) => {
  let image = canvas.toDataURL('image/jpg')
  element.href = image
}

const randomizeCard = (element) => {
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
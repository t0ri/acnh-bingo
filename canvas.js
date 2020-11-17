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
    1: ['B', '1'],
    2: ['I', '1'],
    3: ['N', '1'],
    4: ['G', '1'],
    5: ['O', '1'],
    6: ['B', '2'],
    7: ['I', '2'],
    8: ['N', '2'],
    9: ['G', '2'],
    10: ['O', '2'],
    11: ['B', '3'],
    12: ['I', '3'],
    13: ['N', '3'],
    14: ['G', '3'],
    15: ['O', '3'],
    16: ['B', '4'],
    17: ['I', '4'],
    18: ['N', '4'],
    19: ['G', '4'],
    20: ['O', '4'],
    21: ['B', '5'],
    22: ['I', '5'],
    23: ['N', '5'],
    24: ['G', '5'],
    25: ['O', '5']
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

  console.info(column, row)
}

const clickCanvas = (e) => {
  detectSlot(e.clientX, e.clientY)
}

// Set Background
const setBackground = (() => {
  let background = new Image()
  background.src = './card2.jpg'
  background.onload = () => {
    ctx.drawImage(background, 0, 0)
  }
  canvas.addEventListener('click', clickCanvas)
})()

// Set Villager
// `updateVillager('ant01', 'My Name', 1)`
const updateVillager = (villagerId, villagerName, selectionNum) => {
  let icon = new Image()
  icon.src = `https://acnhapi.com/v1/images/villagers/${villagerId}`
  icon.crossOrigin = 'anonymous'
  icon.onload = () => {
    const column = iconNums.gridPositions[selectionNum][0]
    const row = iconNums.gridPositions[selectionNum][1]
    
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

// Download Button Clicked
const downloadImage = (element) => {
  let image = canvas.toDataURL('image/jpg')
  element.href = image
}
class SlotData {
  constructor(card) {
    this.card = card

    // Card & Slot Sizes
    this.cardMargin = 25
    this.slotHeight = 100
    this.slotWidth = 100
    this.slotMargin = 10
    this.headingOffset = 135

    // Column Start Absolute Positions
    this.columns = {
      'B': this.cardMargin,                                              // 25
      'I': this.cardMargin + this.slotWidth + this.slotMargin,           // 135
      'N': this.cardMargin + 2 * (this.slotWidth + this.slotMargin),     // 245
      'G': this.cardMargin + 3 * (this.slotWidth + this.slotMargin),     // 355
      'O': this.cardMargin + 4 * (this.slotWidth + this.slotMargin),     // 465
    }

    // Row Start Absolute Positions
    this.rows = {
      '1': this.headingOffset,                                           // 135
      '2': this.headingOffset + this.slotHeight + this.slotMargin,       // 245
      '3': this.headingOffset + 2 * (this.slotHeight + this.slotMargin), // 355
      '4': this.headingOffset + 3 * (this.slotHeight + this.slotMargin), // 465
      '5': this.headingOffset + 4 * (this.slotHeight + this.slotMargin), // 575
    }

    // Grid Positions as Slots
    this.gridToSlot = {
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

    // Slot Positions as Grid
    this.slotToGrid = {
      1: 'B 1',
      2: 'I 1',
      3: 'N 1',
      4: 'G 1',
      5: 'O 1',
      6: 'B 2',
      7: 'I 2',
      8: 'N 2',
      9: 'G 2',
      10: 'O 2',
      11: 'B 3',
      12: 'I 3',
      13: 'N 3',
      14: 'G 3',
      15: 'O 3',
      16: 'B 4',
      17: 'I 4',
      18: 'N 4',
      19: 'G 4',
      20: 'O 4',
      21: 'B 5',
      22: 'I 5',
      23: 'N 5',
      24: 'G 5',
      25: 'O 5',
    }
  }

  detectGridPosition(windowX, windowY) {
    const canvasRect = this.card.ui.canvas.getBoundingClientRect()
    const bodyRect = document.body.getBoundingClientRect()
    const offsetTop = canvasRect.top - bodyRect.top
    const offsetLeft = canvasRect.left - bodyRect.left
  
    const column = this.detectColumn(windowX - offsetLeft)
    const row = this.detectRow(windowY - offsetTop)

    return `${column} ${row}`
  }

  detectColumn(clickY) {
    if (clickY > this.columns['B'] - 15) { // 10
      if (clickY > this.columns['I']) { // 135
        if (clickY > this.columns['N']) { // 245
          if (clickY > this.columns['G']) { // 355
            if (clickY > this.columns['O'])  { // 465
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

  detectRow(clickX) {
    if (clickX > this.rows['1']) { // 135
      if (clickX > this.rows['2']) { // 245
        if (clickX > this.rows['3']) { // 355
          if (clickX > this.rows['4']) { // 465
            if (clickX > this.rows['5']) { // 575
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
}

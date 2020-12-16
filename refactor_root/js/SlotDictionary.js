class SlotDictionary {
  constructor(game) {
    this.game = game

    // Card & Slot Sizes
    this.cardMargin = 25
    this.slotHeight, this.slotWidth = 60
    this.slotMargin = 10

    this.columns = {
      'B': this.cardMargin, // 25
      'I': this.cardMargin + this.slotWidth + this.slotMargin // 95
      'N': this.cardMargin + 2(this.slotWidth + this.slotMargin) // 165
      245,
      'G': 355,
      'O': 465,
    }

    this.rows = {
      '1': 135,
      '2': 245,
      '3': 355,
      '4': 465,
      '5': 575,
    }
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
  }
}
const api = 'https://acnhapi.com/v1/villagers/'
const villagers = []

const getVillagers = async (url) => {
  const response = await fetch(url)
  const json = await response.json()
  Object.entries(await json).forEach(villager => {
    villagers.push(villager)
  });
}

const createVillagerSelector = () => {
  // Get Elements
  let selectionSection = document.getElementById('selection')
  let selectorElement = document.querySelector('.villager-select')
  
  // Set First Selection View
  selectorElement.innerHTML = '<option value="">&nbsp; &nbsp;Select Villager</option>'
  
  // Append an `<option>` for each villager
  villagers.forEach((villager) => {
    const option = document.createElement('option')
    option.value = villager[0]
    option.innerHTML = villager[1]['name']['name-USen']
    selectorElement.appendChild(option)
  })

  // Create 24 Select Elements
  for (let num = 2; num <= 25; num++) {
    if (num === 13) {
      const select = document.createElement('select')
      const option = document.createElement('option')
      option.innerHTML = ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; FREE!'
      select.appendChild(option)
      selectionSection.appendChild(select)
    } else {
      let clone = selectorElement.cloneNode(true)
      clone.name = `${num}`
      selectionSection.appendChild(clone)
    }
  }

  eventListeners()
}

const eventListeners = () => {
  // Get Elements
  let selectorsElements = document.querySelectorAll('.villager-select')
  selectorsElements.forEach((selectElement) => {
    selectElement.addEventListener('input', event => {
      const villagerId = event.target.selectedOptions[0].value
      const villagerName = event.target.selectedOptions[0].innerHTML
      let selectorId = event.target.name
      updateVillager(villagerId, villagerName, selectorId)
    })
  })
}

const init = () => {
  if (villagers.length >= 391) {
    createVillagerSelector()
  } else {
    getVillagers(api)
    setTimeout(init, 500)
  }
}

init()
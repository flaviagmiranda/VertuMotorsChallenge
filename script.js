/* _________HEADER ELEMENT__________ */

/* ----DROPDOWN BUTTONS---- */

// Toggle the specified dropdown content
/* end of the HEADER element */
/* _________MAIN ELEMENT: BANNER2__________ */

function toggleDropdown (dropdownId) {
  const dropdown = document.getElementById(dropdownId)
  const dropdowns = document.getElementsByClassName('dropdown-content')
  for (let i = 0; i < dropdowns.length; i++) {
    const openDropdown = dropdowns[i]
    if (openDropdown.classList.contains('show') && openDropdown !== dropdown) {
      openDropdown.classList.remove('show')
    }
  }
  dropdown.classList.toggle('show')
}

// Close the dropdown menus if the user clicks outside of them
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content')
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}

/* -----SEARCH BAR------ */

// Selects the microphone icon
const microphoneIcon = document.getElementById('microphoneIcon')
microphoneIcon.addEventListener('click', startDictation)

// Triggers the browser to request access to the microphone once the icon is clicked
// Recognizes when the user stops speaking
function startDictation () {
  const speechInput = document.getElementById('speech-input')

  const recognition = new webkitSpeechRecognition()
  recognition.continuous = false
  recognition.interimResults = false

  recognition.onresult = function (event) {
    speechInput.value = event.results[0][0].transcript
    recognition.stop()
  }

  recognition.onerror = function (event) {
    console.error(event.error)
    recognition.stop()
  }

  recognition.start()
}
/* ---- HAMBURGUR MENU ICON ----- */

// Selecting the DOM elements
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
const mobileMenu = document.querySelector('.mobile-menu')
const screenSizeThreshold = 768

// Toggles the 'show' class on the mobile menu element when the mobile menu toggle button is clicked
mobileMenuToggle.addEventListener('click', function () {
  mobileMenu.classList.toggle('show')
})

// Removes the 'show' class from the mobile menu element when the user clicks on any part of the page that is not a descendant of the mobile header
document.addEventListener('click', function (event) {
  if (!event.target.closest('.mobile-header-left')) {
    mobileMenu.classList.remove('show')
  }
})

// Removes the 'show' class from the mobile menu element when the window is resized and the width is greater than or equal to a threshold value
window.addEventListener('resize', function () {
  if (window.innerWidth >= screenSizeThreshold) {
    mobileMenu.classList.remove('show')
  }
})

/* CARSDISPLAY */

// Selects both arrow buttons
const controls = document.querySelectorAll('.control')
// Set currentItem to 0 - currentItem is the selected card at the moment
let currentItem = 0
// Select all elements with the class 'item' (cards)
const items = document.querySelectorAll('.item')
// Get the total number of items
const maxItems = items.length

// For each element with the class 'control', add a click event listener
controls.forEach((control) => {
  control.addEventListener('click', () => {
    // Check if the clicked control has the class 'arrow-left'
    const isLeft = control.classList.contains('arrow-left')

    // If the clicked control is the left arrow, decrement the current item index
    if (isLeft) {
      currentItem -= 1
    } else {
      // Otherwise, increment the current item index
      currentItem += 1
    }

    // If the current item index is greater than or equal to the total number of items, set it back to 0
    if (currentItem >= maxItems) {
      currentItem = 0
    }

    // If the current item index is less than 0, set it to the index of the last item
    if (currentItem < 0) {
      currentItem = maxItems - 1
    }

    // Remove the 'current-item' class from all items
    items.forEach((item) => item.classList.remove('current-item'))

    // Scroll the current item smoothly into view with the 'scrollIntoView' method
    items[currentItem].scrollIntoView({
      inline: 'center', // horizontally center the item within the scrollable area
      behavior: 'smooth' // animate the scrolling smoothly
    })

    // Add the 'current-item' class to the current item
    items[currentItem].classList.add('current-item')
  })

  const arrowLeft = document.querySelector('.arrow-left')
  const cards = document.querySelectorAll('.card')
  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      if (index < 3) {
        arrowLeft.classList.add('show-arrow-left')
      } else {
        arrowLeft.classList.remove('show-arrow-left')
      }
    })
  })
})

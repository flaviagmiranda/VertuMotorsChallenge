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
  if (!event.target.closest('.hamburguer-menu')) {
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

const carousel = document.querySelector('.gallery-wrapper')
const cards = document.querySelectorAll('.item')
const buttonLeft = document.querySelector('.arrow-left')
const buttonRight = document.querySelector('.arrow-right')

let scrollPosition = 0
const cardWidth = cards[0].getBoundingClientRect().width + 10 // Calculate the width of a single card by getting the bounding rectangle of the first card and adding a margin of 10 pixels

buttonLeft.addEventListener('click', () => {
  scrollPosition -= cardWidth * 3
  carousel.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  })
  if (scrollPosition === 0) {
    buttonLeft.style.display = 'none'
  }
})

buttonRight.addEventListener('click', () => {
  const maxScroll = carousel.scrollWidth - carousel.clientWidth
  if (scrollPosition + cardWidth * 3 <= maxScroll) {
    // if there are more items to the right
    scrollPosition += cardWidth * 3
    buttonLeft.style.display = 'block'
  } else {
    // if there are no more items to the right, scroll to the first item
    scrollPosition = 0
    buttonLeft.style.display = 'none'
  }
  carousel.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  })
})

/* BANNER2  */

// Change the banner2 body text deppending on screen size
const spanTextElement = document.getElementById('text-content')

function updateText () {
  if (window.innerWidth < 768) {
    spanTextElement.innerText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
  } else {
    spanTextElement.innerText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
}

window.addEventListener('resize', updateText)

updateText()

// Change the banner2 button text deppending on screen size
const spanButtonElement = document.getElementById('button-content')

function updateButtonText () {
  if (window.innerWidth < 768) {
    spanButtonElement.innerText = 'Book a test drive'
  } else {
    spanButtonElement.innerText = 'Request a Personalised Video'
  }
}

window.addEventListener('resize', updateButtonText)

updateButtonText()

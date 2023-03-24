/* _________HEADER ELEMENT__________ */

/* ----DROPDOWN BUTTONS---- */

// Toggle the specified dropdown content
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

/* Selecting the DOM elements */
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

/* end of the HEADER element */
/* _________MAIN ELEMENT: BANNER1__________ */

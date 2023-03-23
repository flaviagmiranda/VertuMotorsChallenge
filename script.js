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

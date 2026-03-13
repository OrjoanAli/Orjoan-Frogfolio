function openPopup(id) {
  document.getElementById(id).style.display = 'flex';
}

function closePopup(id) {
  document.getElementById(id).style.display = 'none';
}

// click outside window to close
document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
    }
  });
});
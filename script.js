const tskElements = document.querySelectorAll('.tsk');
const popup = document.getElementById('simple-popup');
const popupText = document.getElementById('popup-text');
const closeBtn = document.getElementById('close-btn');

// Bấm vào div .tsk thì hiện pop-up
tskElements.forEach((element) => {
  element.addEventListener('click', () => {
    const message = element.getAttribute('data-message');
    popupText.innerText = message;
    popup.style.display = 'block'; // Hiện pop-up
  });
});

// Bấm nút Đóng thì ẩn pop-up
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none'; // Ẩn pop-up
});
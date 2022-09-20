var cardBtns = document.querySelector('.card__btns');
var btns = document.querySelectorAll('.card__btns-btn');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active');

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }

    // Add the active class to the current/clicked button
    this.className += ' active';
  });
}

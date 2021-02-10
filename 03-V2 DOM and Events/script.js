'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');
let btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);

    btnCloseModal.addEventListener('click', closeModal);

    overlay.addEventListener('click', closeModal);
};

// we don't call, we define the function for JS to call it and pass the EVENT OBJECT as this 'event' argument
document.addEventListener('keydown', function(event) {
    // console.log(event);
    // console.log(event.key)
    
    if(event.key === 'Escape' && !modal.classList.contains('hidden')) {
        // console.log('Esc pressed');
            closeModal();
    }
});
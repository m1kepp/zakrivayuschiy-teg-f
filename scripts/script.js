const dialog = document.querySelector(".dialog");

const openButtons = document.querySelectorAll(".save-button");

const closeButton = document.querySelector(".dialog__button");


openButtons.forEach((button) => {

  button.addEventListener("click", () => {

    dialog.showModal();

  });

});


closeButton.addEventListener("click", () => {

  dialog.close();

});

document.querySelectorAll('.card').forEach((card) => {

  const heart = card.querySelector('.like-icon');
  const buttons = card.querySelectorAll('.like-button, .like-text-button');
  const likeTextButton = card.querySelector('.like-text-button');


  buttons.forEach((button) => {

    button.addEventListener('click', () => {

      heart.classList.toggle('is-liked');


      if (heart.classList.contains('is-liked')) {

        likeTextButton.textContent = 'Unlike';

      } else {

        likeTextButton.textContent = 'Like';

      }

    });

  });

});
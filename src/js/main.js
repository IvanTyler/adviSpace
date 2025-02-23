function feedbackForm() {
    const modalHTML = document.createElement('form');
    modalHTML.classList.add('feedback-form');
    modalHTML.innerHTML = `
        <input type="text" placeholder="Your name" class="feedback-form__input" />
        <input type="text" placeholder="Company" class="feedback-form__input" />
        <input type="text" placeholder="Telegram, email or number" class="feedback-form__input" />
        <input type="text" placeholder="Briefly about the task" class="feedback-form__input" />

        <h3 class="feedback-form__title">Budget</h3> 
        <div class="budget">
            <div class="budget__text">Less than 1 m</div>
            <div class="budget__text active">1-3 m</div>
            <div class="budget__text">3-5 m</div>
            <div class="budget__text">More 5 m</div>
        </div>

        <button type="submit" class="feedback-form__submit">send</button>
    `

    return modalHTML;
}


function modal() {
    const modalHTML = document.createElement('div');
    modalHTML.classList.add('modal');
    modalHTML.innerHTML = `
        <div class="modal__content">
            <button class="modal__close">
                <img src="/assets/icons/close.svg" class="modal__close-icon" />
            </button>

            <a href="" class="modal__link">
                Write to telegram
            </a>

            <div class="modal-social-media-wrapper">
                <div class="modal-social-media">
                    <div class="a footer-social-media__link">
                        <img src="/assets/icons/telegram.svg" alt="telegram" class="footer-social-media__img">
                    </div>
                    <div class="a footer-social-media__link">
                        <img src="/assets/icons/linkedIn.svg" alt="linkedIn" class="footer-social-media__img">
                    </div>
                </div>

                <a href="" class="modal-social-media-wrapper__link">Privacy Policy</a>
                <a href="" class="modal-social-media-wrapper__link">Terms & Conditions</a>
            </div>
        </div>
    `

    const modalContent = modalHTML.querySelector('.modal__content');
    modalContent.append(feedbackForm());

    modalHTML.querySelector('.modal__close').addEventListener('click', () => modalHTML.remove())

    document.addEventListener('keydown', event => {
        if (event.key === "Escape") modalHTML.remove()
    });

    return modalHTML;

}



document.querySelector('.marketing-agency__button').addEventListener('click', () => document.body.append(modal()))
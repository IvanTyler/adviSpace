import feedbackForm from "./feedback-form.js";

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
                        <img src="/assets/icons/footer/telegram.svg" alt="telegram" class="footer-social-media__img">
                    </div>
                    <div class="a footer-social-media__link">
                        <img src="/assets/icons/footer/linkedIn.svg" alt="linkedIn" class="footer-social-media__img">
                    </div>
                </div>

                <a href="" class="modal-social-media-wrapper__link">Privacy Policy</a>
                <a href="" class="modal-social-media-wrapper__link">Terms & Conditions</a>
            </div>
        </div>
    `

    const modalContent = modalHTML.querySelector('.modal__content');
    modalContent.append(feedbackForm);

    return modalHTML;

}
export default function feedbackForm() {
    const modalHTML = document.createElement('form');
    modalHTML.classList.add('feedback-form');
    modalHTML.innerHTML = `
        <input type="text" placeholder="Your name" class="feedback-form__input" />
        <input type="text" placeholder="Company" class="feedback-form__input" />
        <input type="text" placeholder="Telegram, email or number" class="feedback-form__input" />
        <input type="text" placeholder="Briefly about the task" class="feedback-form__input" />

        <div class="budget">
            <div class="budget__text">Less than 1 m</div>
            <div class="budget__text">1-3 m</div>
            <div class="budget__text">3-5 m</div>
            <div class="budget__text">More 5 m</div>
        </div>

        <button type="submit" class="feedback-form__submit">send</button>
    `

    return feedbackForm;
}
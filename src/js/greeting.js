const LS_USER = 'currentUser';
const CN_TITLE_USER = '.momentum-title-user-name',
      CN_GREETING_MODAL = '.greeting-modal',
      CN_GREETING_FORM = '.greeting-form',
      CN_GREETING_INPUT = '.greeting-input',
      CN_GREETING_CANCLE = '.greeting-cancle-btn';

const titleUserElem = document.querySelector(CN_TITLE_USER),
      greetingModal = document.querySelector(CN_GREETING_MODAL),
      greetingForm = greetingModal.querySelector(CN_GREETING_FORM),
      greetingInput = greetingForm.querySelector(CN_GREETING_INPUT),
      greetingCancleBtn = greetingModal.querySelector(CN_GREETING_CANCLE);

const saveName = (name) => localStorage.setItem(LS_USER, name);
const showGreeting = () => greetingModal.hidden = false;
const blindGreeting = () => greetingModal.hidden = true;

const handleGreetingSubmit = (event) => {
    event.preventDefault();
    
    const currentValue = greetingInput.value;
    
    if ( currentValue ) {
        saveName(currentValue);
        blindGreeting();
        loadUserName();
    } else {
        alert('다시 입력해주세요.')
    }

}

const greetingUser = () => {
    const currentUser = localStorage.getItem(LS_USER);

    if (currentUser) {
        blindGreeting();
    } else {
        showGreeting();
    }
}

const loadUserName = () => {
    const currentUser = localStorage.getItem(LS_USER);
    
    if ( currentUser === null ) {
        titleUserElem.textContent = '방문자';
    } else {
        titleUserElem.textContent = currentUser;
    }
};

export default () => {
    greetingForm.addEventListener('submit', handleGreetingSubmit);
    greetingCancleBtn.addEventListener('click', blindGreeting);
    greetingUser();
    loadUserName();
};

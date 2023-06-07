import throttle from 'lodash.throttle';

const formRef = document.querySelector('form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const localStorageValuesFromForm = {};

formRef.addEventListener('input', throttle(handleInputForLocalStorage, 500));
formRef.addEventListener('submit', handleSubmitBtnClick);

handlePageReloading();


function handleInputForLocalStorage(e) {
    localStorageValuesFromForm[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(localStorageValuesFromForm));
}

function handleSubmitBtnClick(e) {
    e.preventDefault();
    formRef.reset();
    console.log(localStorageValuesFromForm);
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function handlePageReloading() {
    const savingDataFromForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (savingDataFromForm) {
        formRef.email.value = savingDataFromForm.email || '';
        formRef.message.value = savingDataFromForm.message || '';
    }
    
}



//////////////////////////////////////////////////// //

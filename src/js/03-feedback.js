import throttle from 'lodash.throttle';

const formRef = document.querySelector('form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
//let localStorageValuesFromForm = {};
let localStorageValuesFromForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

formRef.addEventListener('submit', handleSubmitBtnClick);
formRef.addEventListener('input', throttle(handleInputForLocalStorage, 500));

handlePageReloading();

function handleSubmitBtnClick(e) {
    e.preventDefault();
    formRef.reset();
    console.log(localStorageValuesFromForm);
    localStorage.removeItem(LOCALSTORAGE_KEY);

    localStorageValuesFromForm = {}
    // localStorageValuesFromForm = {savingDataFromForm};
}

function handleInputForLocalStorage(e) {
    localStorageValuesFromForm[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(localStorageValuesFromForm));
}

function handlePageReloading() {
    const savingDataFromForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (savingDataFromForm) {
        formRef.email.value = savingDataFromForm.email || '';
        formRef.message.value = savingDataFromForm.message || '';
    }
    // localStorageValuesFromForm = {savingDataFromForm};
    // localStorageValuesFromForm = savingDataFromForm;
    // localStorageValuesFromForm = localStorage.getItem(LOCALSTORAGE_KEY);
    // console.log(localStorageValuesFromForm, savingDataFromForm);
}



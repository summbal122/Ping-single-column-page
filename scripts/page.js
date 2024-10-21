const inputElement = document.querySelector('#js-input');
const buttonElement = document.querySelector('.js-button');
let displayText = document.querySelector('.js-display');
buttonElement.addEventListener('click', (event)=>{
    const value = inputElement.value.trim();
    if(value === ''){
        event.preventDefault();
    displayText.innerHTML = `<p> <em class="error-display">Please provide a valid email address </em> <p>`
    }
})

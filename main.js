const dom_strings = {
    card_number: document.getElementById('card-number'),
    card_name: document.getElementById('card-name'),
    card_exp_month: document.getElementById('month'),
    card_exp_year: document.getElementById('year'),
    card_cvc: document.getElementById('card-cvc'),
    input_name: document.getElementById('name'),
    input_card_number: document.getElementById('number'),
    input_mm: document.getElementById('mm-date'),
    input_yy: document.getElementById('year-date'),
    input_cvc: document.getElementById('cvc'),
    form: document.getElementById('form'),
    thanks_message: document.getElementById('thanks-form'),
    submit_btn: document.getElementById('btn')
}

const openThanksMessage = () => {
    dom_strings.form.classList.toggle('disabled');
    dom_strings.thanks_message.classList.toggle('disabled')
}

dom_strings.form.addEventListener('keyup', (e) => {
    e.preventDefault()
    if(e.target.id === 'number') {
        dom_strings.card_number.innerText = dom_strings.input_card_number.value
    }
    if(e.target.id === 'name') {
        dom_strings.card_name.innerText = dom_strings.input_name.value
    }
    if(e.target.id === 'mm-date') {
        dom_strings.card_exp_month.innerText = '';
        dom_strings.card_exp_month.innerText = `${dom_strings.input_mm.value}/`
    }
    if(e.target.id === 'year-date') {
        dom_strings.card_exp_year.innerText = '';
        dom_strings.card_exp_year.innerText = `${dom_strings.input_yy.value}`
    }
    if(e.target.id === 'year-date') {
        dom_strings.card_number.innerText = dom_strings.input_card_number.value
    }
    if(e.target.id === 'cvc') {
        dom_strings.card_cvc.innerText = dom_strings.input_cvc.value;
    }
})

dom_strings.submit_btn.addEventListener('click', (e) => {
    e.preventDefault();
    openThanksMessage()
})




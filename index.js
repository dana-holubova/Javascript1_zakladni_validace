//overeni emailove adresy

const email = prompt("Zadejte email: ")
const message = document.querySelector("#msg")

if (validator.isEmail(email)) {
    message.textContent = "E-mail v pořádku."
    message.classList.add("msg--valid")
}

else {
    message.textContent = "Neplatný e-mail."
    message.classList.add("msg--invalid")
}

//overeni cisla kreditni karty (příklad: 4125010001000208)

const creditCard = prompt("Zadejte číslo karty: ")
const message2 = document.querySelector("#msg2")

if (validator.isCreditCard(creditCard)) {
    message2.textContent = `${creditCard} je číslo karty.`
    message2.classList.add("msg--valid")
}

else {
    message2.textContent = `${creditCard} není číslo karty.`
    message2.classList.add("msg--invalid")
}



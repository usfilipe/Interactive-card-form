let number = document.getElementById('c-number')
let cnumber = document.getElementById('c-number-d')

number.oninput = function change() {
  cnumber.innerText = number.value
}

//setInterval(change, 500)

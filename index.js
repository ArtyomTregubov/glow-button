let counter = 0;

function onClickButton(e) {
    counter++; 
    e.innerHTML = "Вы нажали на кнопку : " + counter;

    console.log(e.name);
}
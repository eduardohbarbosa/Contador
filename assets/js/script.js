//Declaração da Veriaveis
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var btnDecrement = document.getElementById('decrement');
var btnIncrement = document.getElementById('increment')

var allNumber = document.getElementById('allNumbers');
var numPositive = document.getElementById('numPositive');
var numNegative = document.getElementById('numNegative');

// Criação dos eventos
btnDecrement.addEventListener('click', function(){decrement()});
btnIncrement.addEventListener('click', function(){increment()});

numPositive.addEventListener('click', function(){positive()});
numNegative.addEventListener('click', function(){negative()});
allNumber.addEventListener('click', function(){counter()});


// Funções dos eventos
function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function positive(){
    btnDecrement.disabled = true;
    btnDisabled(btnDecrement);

    if (btnIncrement.disabled = true){
        btnIncrement.disabled = false;
        btnEnable(btnIncrement);
    }

    if (currentNumber < 0){
        currentNumber = 0;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function negative(){
    btnIncrement.disabled = true;

    btnDisabled(btnIncrement);

    if (btnDecrement.disabled = true){
        btnDecrement.disabled = false;
        btnEnable(btnDecrement);
    }

    if (currentNumber > 0){
        currentNumber = 0;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function counter(){
    btnIncrement.disabled = false;
    btnDecrement.disabled = false;

    btnEnable(btnIncrement);
    btnEnable(btnDecrement);

    currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;
}

function btnDisabled(btn){
    btn.style.backgroundColor = 'white';
    btn.style.border = 'solid 1px var(--cor1)';
    btn.style.color = 'var(--cor1)';
    btn.style.cursor = 'auto';
}

function btnEnable(btn){
    btn.style.backgroundColor = 'var(--cor3)';
    btn.style.border = 'none';
    btn.style.color = 'var(--cor4)';
    btn.style.cursor = 'pointer';
}
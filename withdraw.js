// / 1 widthdraw 

document.getElementById('btn-widthdraw').addEventListener('click', function () {
    const widthdrawfield = document.getElementById('user-widthdraw');
    const newwidthdrawstring = widthdrawfield.value;
    const newwidthdrawamount = parseFloat(newwidthdrawstring);

    // // 7 clear 
    widthdrawfield.value = '';

    if (isNaN(newwidthdrawamount)) {
        alert('Please input your valid number');
        return;
    }

    // 2 current widthdraw 
    const widthdrawtotalelement = document.getElementById('widthdraw-money');
    const prevouswidthdrawtotalstring = widthdrawtotalelement.innerText;
    const previouswidthdrawtotal = parseFloat(prevouswidthdrawtotalstring);

    // 4 blance 
    const blancetotal = document.getElementById('blance-money');
    const previousblancestring = blancetotal.innerText;
    const previousblance = parseFloat(previousblancestring);

    if (newwidthdrawamount > previousblance) {
        alert('Your account  have not sufficient blance, please top up');
        return;
    }
    // 3 current blance 
    const currentwidthdraw = previouswidthdrawtotal + newwidthdrawamount;
    widthdrawtotalelement.innerText = currentwidthdraw;
    //  6 after withdraw blance 
    const currentblancetotal = previousblance - newwidthdrawamount;
    blancetotal.innerText = currentblancetotal;



})
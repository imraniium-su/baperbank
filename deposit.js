// deposite 
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositefild = document.getElementById('user-deposit');
    const newdepositeamountstring = depositefild.value;
    const newdepositeamount = parseFloat(newdepositeamountstring);
    // current deposite show 
    const depositetotal = document.getElementById('deposit-money');
    const previousdepositetype = depositetotal.innerText;
    const prevousdeposit = parseFloat(previousdepositetype);
    const currentdeposittotal = prevousdeposit + newdepositeamount;
    depositetotal.innerText = currentdeposittotal;

    //  blance check 
    const blancetotal = document.getElementById('blance-money');
    const previousblancestring = blancetotal.innerText;
    const previousblance = parseFloat(previousblancestring);
    const currentblancetotal = newdepositeamount + previousblance;
    blancetotal.innerText = currentblancetotal;
    // clerfild 
    depositefild.value = '';
})

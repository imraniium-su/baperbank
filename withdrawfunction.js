document.getElementById('btn-widthdraw').addEventListener('click', function () {
    const newwithdrawamount = getinputfieldvalue('user-widthdraw');

    const previouswithdrawamount = getelementvalueid('widthdraw-money');
    const newwithddrawtotal = previouswithdrawamount + newwithdrawamount;
    setelementvalueid('widthdraw-money', newwithddrawtotal);

    const previousblancetotal = getelementvalueid('blance-money');
    const currentBlancetotal = previousblancetotal - newwithdrawamount;
    setelementvalueid('blance-money', currentBlancetotal);
})


document.getElementById('btn-deposit').addEventListener('click', function () {

    const newdepositamount = getinputfieldvalue('user-deposit');

    // get previous total by id
    const previousdepositotal = getelementvalueid('deposit-money');

    // calculate new deposit totaql
    const newdeposittotal = previousdepositotal + newdepositamount;
    // set deposite total value
    setelementvalueid('deposit-money', newdeposittotal);

    // get previous blance by using function
    const previousblancetotal = getelementvalueid('blance-money');
    const newBlancetotal = previousblancetotal + newdepositamount;
    setelementvalueid('blance-money', newBlancetotal);
}
)
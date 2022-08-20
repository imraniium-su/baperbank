function getinputfieldvalue(inputid) {
    const inputfield = document.getElementById(inputid);
    const inputfildvaluestring = inputfield.value;
    const inputfildvalue = parseFloat(inputfildvaluestring)
    inputfield.value = '';
    return inputfildvalue;
}
function getelementvalueid(elementid) {
    const element = document.getElementById(elementid);
    const elementstring = element.innerText;
    const value = parseFloat(elementstring);
    return value;
}
function setelementvalueid(elementid, newvalue) {
    const element = document.getElementById(elementid);
    element.innerText = newvalue;
}
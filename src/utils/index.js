module.exports.validateCpf = v => {
    let sum = 0, rest;
    if (!v || v == "00000000000") return false;

    for (i=1; i<=9; i++) sum = sum + parseInt(v.substring(i-1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(v.substring(9, 10)) ) return false;

    sum = 0;
    for (i = 1; i <= 10; i++) sum = sum + parseInt(v.substring(i-1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(v.substring(10, 11) ) ) return false;
    
    return true;
}
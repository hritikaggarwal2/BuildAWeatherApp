console.log("hello");

function FtoC(degree) {
    let ret = degree - 32;
    ret = ret * 5 / 9;
    return ret;
}

function CtoF(degree) {
    let ret = degree * 9 / 5;
    ret = ret + 32;
    return ret;
}
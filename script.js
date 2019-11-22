console.log("hello");

window.addEventListener("load", init)

function FtoC(degree) {
    let ret = degree - 32;
    ret = ret * 5 / 9;
    return Math.round(ret);
}

function CtoF(degree) {
    let ret = degree * 9 / 5;
    ret = ret + 32;
    return Math.round(ret);
}

function init() {
    let buttonC = document.getElementById("C");
    let buttonF = document.getElementById("F");
    buttonC.disabled = true;

    buttonC.addEventListener("click", function(){
        let temp = document.querySelector("h1");
        let temp_num = parseInt(temp.innerText);
        temp.innerText = FtoC(temp_num);
        buttonC.disabled = true;
        buttonF.disabled = false;
    })

    buttonF.addEventListener("click", function(){
        let temp = document.querySelector("h1");
        let temp_num = parseInt(temp.innerText);
        temp.innerText = CtoF(temp_num);
        buttonF.disabled = true;
        buttonC.disabled = false;

    })

    changeImage("snowflake");

    function changeImage(new_img) {
        let image = document.getElementById("img");
        console.log(image);
        image.src = "images/" + new_img + ".svg";
    }
}


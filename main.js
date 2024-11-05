//Future value of one-time investment

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {

    let pv1 = Number(document.getElementById("pv1").value);
    let iv1 = Number(document.getElementById("iv1").value);
    let times1 = Number(document.getElementById("times1").value);


    let output1 = document.getElementById("output1");

    let inR1 = iv1 / 100
    let value1 = 1 + inR1
    let value2 = value1 ** times1
    let ans1 = pv1 * value2
    console.log(parseInt(ans1))
    output1.textContent = parseInt(ans1)
});

//Value of starting annual insvestmnet is

let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {

    let iNv1 = Number(document.getElementById("iNv1").value);
    let iv2 = Number(document.getElementById("iv2").value);
    let times2 = Number(document.getElementById("times2").value);


    let output2 = document.getElementById("output2");

    let inR2 = iv2 / 100
    let value3 = 1 + inR2
    let value4 = value3 ** times2
    let value5 = value4 / inR2
    let value6 = 1 / inR2
    let value7 = value5 - value6
    let ans2 = iNv1 * value3 * value7
    console.log(parseInt(ans2))
    output2.textContent = parseInt(ans2)
});

//Value of ending annual insvestmnet

let btn3 = document.getElementById("btn3");

btn3.addEventListener("click", () => {

    let iNv2 = Number(document.getElementById("iNv2").value);
    let iv3 = Number(document.getElementById("iv3").value);
    let times3 = Number(document.getElementById("times3").value);


    let output3 = document.getElementById("output3");
    let inR3 = iv3 / 100
    let value8 = 1 + inR3
    let value9 = value8 ** times3
    let value10 = value9 / inR3
    let value11 = 1 / inR3
    let value12 = value10 - value11
    let ans3 = iNv2 * value12
    console.log(parseInt(ans3))
    output3.innerText = parseInt(ans3)
});
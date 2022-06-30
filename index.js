function mathy() {
    const nmbr = document.getElementById("inpt1").value
    const pers = document.getElementById("inpt2").value
    var checkBox = document.getElementById("btn1")
    var hello = document.getElementById("btn2")

    var x = (100 - inpt2.value) * inpt1.value / 100;
    var z = inpt2.value;
    var b = (parseInt(z));
    var y = ((b + 100) * inpt1.value) / 100;

    if (checkBox.checked == true) {
        document.getElementById("output").innerText = x;
    } else if (hello.checked == true) {
        document.getElementById("output").innerText = y;
    }
}
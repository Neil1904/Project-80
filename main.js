function getParagraph1(){
    var inputs = [];
    for (i = 0; i <= 6; i++) {
        inputs.push(document.getElementById("para1_input_box" + i).value);

    }
    inputs.join(". ");
    document.getElementById("showParagraph1").innerHTML=inputs.join(". ");
}
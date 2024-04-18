
const put = document.getElementById("texto");

function changeColorByName(){
    const color_name = document.getElementById("colorName").value;
    const change_1 = document.getElementsById("changeName");

    change_1.innerHTML.backgroundColor = color_name;
    document.body.style.backgroundColor = blue;
    put.style.color = 'yellow';
}   

function changeColorByPicker(){
    const color_picker = document.getElementById("colorPicker").value;
    const change_2 = document.getElementById("changePicker");

    change_2.innerHTML.backgroundColor = color_picker;
} 
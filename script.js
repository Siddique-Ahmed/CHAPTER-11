// Question 1 \\:

let link = document.getElementById("link");

link.addEventListener("click", ()=>{
    alert("be carefull");
});

// Question 02 \\:

let btn = document.querySelectorAll("button");
let arr = Array.from(btn)

arr.forEach(button =>{
    button.addEventListener("click", function (){
        alert("Thanks for purchasing")
    })
})

// Question 3 \\:   

function deleteRow(btn){
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Question 4\\:

function imgChange(imgSlide){
    document.getElementById("img").src = imgSlide;
}

// Questoin 5\\:

let counterValue = 0;
let interValid;

function startCount(){
    if(interValid){
        clearInterval(interValid);
        interValid = null;
    }else{
        counterValue = parseInt(document.getElementById("inputBox").value);
        interValid = setInterval(function(){
            counterValue++;
            document.getElementById("inputBox").value = counterValue;
        },500);
    };
};
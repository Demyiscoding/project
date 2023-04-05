// 點擊購買選單按鈕 購買選單從下方滑出

// $(function(){
//     let open = false;
//     $(".buybuybuy").click(function(){
//         if(open == false){
//         $(".right").animatate({top:"154px",opacity:1,1000});
//         open = true;
//     }else{
//         $(".right").animate({top:"100%",opacity:0},1000);
//         open = false;
//     }
//     })
// });


const button = document.querySelectorAll(".buybuybuy");
const buylist = document.querySelectorAll(".right"); 
// console.log(button);
// console.log(buylist);

button.addEventListener("click", function(){
    right.classList.toggle("opentobuy")
});



// const button = document.getElementsByClassName(".buybuybuy")[0];
// const buylist = document.getElementsByClassName(".right"); 
// button.addEventListener("click", function(){
//     right.classList.toggle("opentobuy")
// });


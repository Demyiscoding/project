// 共用=====================================================

$(document).ready(function() {
    // 滾動到頂部
    $('.backtotop').click(function() {
      $('html, body').animate({scrollTop: 0}, 'slow');
      return false;
    });
  });


// 左側選單跟漢堡
const ham = document.getElementsByClassName("hamburger")[0];
const bar1 = document.getElementsByClassName("bar1")[0];
const bar2 = document.getElementsByClassName("bar2")[0];
let menu = document.getElementById("menu");
// console.log(ham);
// console.log(bar1);
// console.log(bar2);
// console.log(menu);

ham.addEventListener("click", function(){
        bar1.classList.toggle("rotate1");
        bar2.classList.toggle("rotate2");
        menu.classList.toggle("open");
        open = true
});



// 箭頭轉向
let arrow = document.getElementById("menuarrow");
let productlist = document.getElementsByClassName("addarrow")[0];
let product = document.getElementsByClassName("childlist")[0];
// console.log(productlist);
// console.log(arrow);
// console.log(product);

/*
    productlist.addEventListener("click", function(){
        arrow.classList.toggle("arrowclick"); 

        // 錯
        product.classList.toggle("upanddown");           
});

*/

// 用if=====================

productlist.addEventListener("click", function(){
    let open = false; //一開始是關
    if(open == false){
    arrow.classList.toggle("arrowclick");
    product.style.display = "block";
    }else{  
        product.style.display = "none";
    }
})




/*
//錯
//子選單
$(function(){
    let open = false; //一開始是關
    $(".addarrow").click(function(){
        if(open == false){
        $(".menuarrow").toggleClass("arrowclick");
        $("childlist").slidedown(1000,ease)
        open = true;
    }else{
        $(".childlist").slideup(1000,ease)
    }
    })
});
*/






// 共用=====================================================
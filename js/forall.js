// 共用=====================================================


//backtotop==================================
$(document).ready(function() {
    // 滾動到頂部
    $('.backtotop').click(function() {
      $('html, body').animate({scrollTop: 0}, 'slow');
      return false;
    });
  });



// 左側選單跟漢堡===================================
const ham = document.getElementsByClassName("hamburger")[0];
const bar1 = document.getElementsByClassName("bar1")[0];
const bar2 = document.getElementsByClassName("bar2")[0];
const menu = document.getElementById("menu");
let burgeropen = document.getElementById("mask");
// console.log(ham);
// console.log(bar1);
// console.log(bar2);
// console.log(menu);
// console.log(burgeropen);

ham.addEventListener("click", function(){
        bar1.classList.toggle("rotate1");
        bar2.classList.toggle("rotate2");
        menu.classList.toggle("open");
        // burgeropen.classList.toggle("active");
        // open = true
});


//子選單收合及箭頭轉向
$(function(){
    let open = false; //一開始是關
    $(".addarrow").click(function(){
        if(open == false){
        $("#menuarrow").addClass("arrowclick");
        // $(".childlist").addClass("-open");
        $(".childlist").animate({ height: "toggle" },300);
        // console.log('open');
        open = true;
    }else{
        $("#menuarrow").removeClass("arrowclick");
        // $(".childlist").removeClass("-open");
        $(".childlist").animate({ height: "toggle" },300);
        //  console.log('open');
        open = false;
    }

    })
});




// nav英跳中設定===========================

const about = document.getElementById("1");

// 綁定滑鼠移入
about.addEventListener("mouseover",function(){
    //移入時要更改的內容
    about.textContent = "#關於我們";
});
//綁定滑鼠移出
about.addEventListener("mouseout",function(){
    //移出時要更改的元素
    about.textContent = "ABOUT";
});


const notice = document.getElementById("2");
notice.addEventListener("mouseover",function(){
    notice.textContent = "#購物須知";
});
notice.addEventListener("mouseout",function(){
    notice.textContent = "NOTICE";
});

const products = document.getElementById("3");
products.addEventListener("mouseover",function(){
    products.textContent = "#商品全覽";
});
products.addEventListener("mouseout",function(){
    products.innerText = "PRODUCTS";
});

const myorders = document.getElementById("4");
myorders.addEventListener("mouseover",function(){
    myorders.textContent = "訂單查詢";
});
myorders.addEventListener("mouseout",function(){
    myorders.textContent = "MY ORDERS";
});



// 共用=====================================================
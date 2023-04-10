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
// const menu = document.getElementsByClassName("childlist")[0];
// let whole = document.documentElement;
// console.log(ham);
// console.log(bar1);
// console.log(bar2);
console.log(menu);
// console.log(burgeropen);

ham.addEventListener("click", function(){
        bar1.classList.toggle("rotate1");
        bar2.classList.toggle("rotate2");
        menu.classList.toggle("open");
        burgeropen.classList.toggle("active");
        // whole.classList.toggle("bgcolor");
        open = true
});


//子選單收合及箭頭轉向
$(function(){
    let open = false; //一開始是關
    $(".addarrow").click(function(){
        if(open == false){
        $("#menuarrow").addClass("arrowclick");
        $(".childlist").addClass('-open')
        console.log('open');
        open = true;
    }else{
        // $(".childlist").slideDown(1000)
        $("#menuarrow").removeClass("arrowclick");
        $(".childlist").removeClass('-open')
        // console.log('open');
        open = false;
    }

    })
});


// 箭頭轉向 選單收合======失敗的part==============================
// let arrow = document.getElementById("menuarrow");
// let productlist = document.getElementsByClassName("addarrow")[0];
// let product = document.getElementsByClassName("childlist")[0];
// console.log(productlist);
// console.log(arrow);
// console.log(product);
//     productlist.addEventListener("click", function(){
//         arrow.classList.toggle("arrowclick"); 
      
// });


// 用if=====================失敗
// productlist.addEventListener("click", function(){
//     let open = false; 
//     if(open == false){
//     arrow.classList.toggle("arrowclick");
//     product.style.display = "block";
//     }else{  
//         product.style.display = "none";
//     }
// })



// nav英跳中設定===========================





// nav的英跳中






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
    myorders.textContent = "#訂單查詢";
});
myorders.addEventListener("mouseout",function(){
    myorders.textContent = "MY ORDERS";
});


// 共用=over====================================================



// rectop輪播
   $(function(){
                $('.owl-carousel').owlCarousel({
                    loop:true,
                    margin:10,
                    nav:true,
                    
                    autoplay:true,
                    autoplayTimeout:2000,
                    responsive:{
                    0:{
                        items:1
                    },
                    300:{
                        items:1
                    },
                    800:{
                        item:2
                    },
                    1000:{
                        item:3
                    }
                }
            })
        })
    



// recmiddle //搖搖第1種  不能把transition跟animation設定在一起會無效

const fadeinpics = document.querySelectorAll(".fadein");
//先transition//再animation
fadeinpics.forEach(fadein => {
    fadein.addEventListener("transitionend",function(){
        if(fadein.classList.contains("-active")){
            fadein.classList.add("spin");
        }
    })
})

window.addEventListener("scroll",function(){
    fadeinpics.forEach(fadein => {
        //觸發動畫區塊的頂部
        const inposition = fadein.getBoundingClientRect().top + window.scrollY;
        //視窗捲動的底部
        const screenposition = window.innerHeight + window.scrollY;

        if(screenposition > inposition){
            fadein.classList.add("-active");
        }
    });
})



//搖搖第2種  

//先transition//再animation
const fadeinpics2 = document.querySelectorAll(".fadein2");
fadeinpics2.forEach(fadein2 => {
    fadein2.addEventListener('transitionend', () => {
        if (fadein2.classList.contains('-active2')) {
          fadein2.classList.add('spin2');
        }
      });
})

// 滾動到才觸發
window.addEventListener("scroll",function(){
    fadeinpics2.forEach(fadein2 => {
        //觸發動畫區塊的頂部
        const inposition = fadein2.getBoundingClientRect().top + window.scrollY;
        //視窗捲動的底部
        const screenposition = window.innerHeight + window.scrollY;
        if(screenposition > inposition){
            fadein2.classList.add("-active2");
        }
    });
})








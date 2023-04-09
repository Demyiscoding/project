// 點擊購買選單按鈕 購買選單從下方滑出

$(function(){
    let open = false;
    $(".buybuybuy").click(function(){
        if(open == false){
        // $(".right").animate({top:"154px",opacity:1},1000);

        $('.right').addClass('-open')
        open = true;
    }else{
        // $(".right").animate({top:"100%",opacity:0},1000);
        $('.right').removeClass('-open')
        open = false;
    }
    })
    
});

//失敗
// const button = document.querySelectorAll(".buybuybuy");
// const buylist = document.querySelectorAll(".right"); 
// // console.log(button);
// // console.log(buylist);

// button.addEventListener("click", function(){
//     right.classList.toggle("opentobuy")
// });



// const button = document.getElementsByClassName(".buybuybuy")[0];
// const buylist = document.getElementsByClassName(".right"); 
// button.addEventListener("click", function(){
//     right.classList.toggle("opentobuy")
// });


//願望清單的按鈕
const heart = document.getElementById("heart");
    heart.addEventListener("click", function(){
        this.classList.toggle("-addlike");
        if(this.classList.contains("-addlike")){
            this.classList.add("-addlike")
            }else{
                this.classList.remove("-addlike")
                if(confirm("確定將本產品從願望清單移除?")){
                }else{};
            }

    })


//加購價加上去
let base = document.getElementById("baseprice");
let add1 = document.getElementById("customization");
let add2 = document.getElementById("package");
        // console.log(base);
        // console.log(add1);
        // console.log(add2);


let baseprice = 360
base.addEventListener("input", function(){
    baseprice = parseFloat(base.value); 
    totalprice();
});

let add1price = 0
    add1.addEventListener("change", function(){
    if(this.checked){
        add1price = parseFloat(add1.value);
    }else{
        add1price = 0;
    }
    totalprice();
});

let add2price = 0;
    add2.addEventListener("change", function(){
        if(this.checked){
            add2price = parseFloat(add2.value);
        }else{
            add2price = 0
        }
        totalprice();
    });

    function totalprice(){
        let totalprice = (baseprice + add1price + add2price).toFixed(0);
        document.getElementById("baseprice").innerText = totalprice;
    }






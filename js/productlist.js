// 願望清單購物袋按鈕
const heart = document.getElementsByClassName("heart");
const bag = document.getElementsByClassName("bag");
console.log(heart);
console.log(bag);

for( i = 0; i < heart.length; i++){
    heart[i].addEventListener("click",function(e){
        e.preventDefault();
        this.classList.toggle("-addheart");
        if(this.classList.contains("-addheart")){
            this.classList.add("-addheart");
            // alert("加入願望清單 消費滿NT$1500享免運!");
        }else{this.classList.remove("-addheart")
        alert("已將產品從願望清單中移除。 全館消費滿NT$1500享免運!");
        }
    });
};

for(j = 0; j < bag.length; j++){
    bag[j].addEventListener("click", function(e){
        e.preventDefault();
        this.classList.toggle("-addbag");
        if(this.classList.contains("-addbag")){
            this.classList.add("-addbag")
        }else{this.classList.remove("-addbag")
        alert("已將產品從購物袋中移除。 全館消費滿NT$1500享免運!");
    }
    });
};



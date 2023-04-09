let heart = document.getElementsByClassName("nexttime");
let trash = document.getElementsByClassName("trash");
let itemone = document.getElementById("one");
let itemtwo = document.getElementById("two");

for(i = 0; i < heart.length; i++){
    heart[i].addEventListener("click",function(e){
        e.preventDefault();
            if(confirm("確定這次先將本產品移至願望清單?")){
                this.classList.add("-next");
                itemone.classList.add("gray");
            }else{
                this.classList.remove("-next");
                itemone.classList.remove("gray");
            }
    });
}

for(j = 0; j < trash.length; j++){
    trash[j].addEventListener("click",function(e){
        e.preventDefault();
        if(confirm("確定這次不購買本產品?")){
            itemtwo.remove();
        }
    })
}
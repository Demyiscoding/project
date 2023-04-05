// function openTab(tabname){
//     const tab1 = document.getElementsByClassName("tab1");
//     const tab2 = document.getElementsByClassName("tab2");
//     // console.log(tab1);
//     // console.log(tab2);

//     if(tabname === "tab1"){
//         tab1.style.display = "block";
//         tab2.style.display = "none";
//     }else if(tabname === "tab2"){
//         tab1.style.display = "none";
//         tab2.style.display = "block";
//     }
// };

// $(function(){
//     let signup = false
//     if(signup == false){
//         $(".tab1").click(function(){
//             $(".login").show();
//         })
//     }else if(){}
// })


$(function(){
    $(".tab1").click(function(){
        $(".login").show();
        $(".signup").hide();
    });
    $(".tab2").click(function(){
        $(".login").hide();
        $(".signup").show();
    });
});

// $(function(){
//     $(".tab2").click(function(){
//         $(".login").hide();
//         $(".signup").show();
//     })
// })
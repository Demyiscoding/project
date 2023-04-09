6// function openTab(tabname){
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


$(function(){
    $(".tab1").click(function(){
        $(".login").show();
        $(".signup").hide();
        $(".tab1").addClass("-active");
        $(".tab2").removeClass("-active");
    });
    $(".tab2").click(function(){
        $(".login").hide();
        $(".signup").show();
        $(".tab2").addClass("-active");
        $(".tab1").removeClass("-active");
    });
 // 模擬點擊 ".tab1"，使登入頁面為預設畫面
    $(".tab1").click()
    // $("tab1").addClsss("tab>button:hover");
});


//子選單收合及箭頭轉向
$(function(){
    let open = false; //一開始是關
    $(".addarrow").click(function(){
        if(open == false){
        $("#menuarrow").addClass("arrowclick");
        $(".childlist").addClass('-open')
        // console.log('open');
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
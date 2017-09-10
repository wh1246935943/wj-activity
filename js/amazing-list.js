/**
 * Created by chichi on 17-8-2.
 */
function expandShow(flag) {
    console.log(flag);
    if(flag==0){
        $("#up-nav").css('display','block');
        $("#expand-nav").css('display','none');
    }
    if(flag==1){
        $("#up-nav").css('display','none');
        $("#expand-nav").css('display','block');
    }
}
function expandInfoShow(flag) {
    if(flag==0){
        $(".expands-info").css('display','block');
        $(".expands-show").css('display','none');
    }
    if(flag==1){
        $(".expands-info").css('display','none');
        $(".expands-show").css('display','block');
    }
}
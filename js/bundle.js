/**
 * Created by jeankang on 2017/8/3.
 */
window.onload = function () {
    $('wj-header').load('wj-header.html');
    $('wj-footer').load('wj-footer.html');
    $('wj-breadcrumb').load('wj-breadcrumb.html', function () {
        var data = JSON.parse($('wj-breadcrumb').attr("breadcrumb-data"));

        for (var i = 0; i < data.length; i++) {
            if (i === data.length - 1) {
                $("#breadcrumbList").append($('<a class="breadcrumb-red" href="' + data[i].url + '"><span>' + data[i].name + '</span></a>'));
            } else {
                $("#breadcrumbList").append($('<a class="breadcrumb-black" href="' + data[i].url + '"><span>' + data[i].name + '</span></a><span class="breadcrumb-flag">&gt;</span>'));
            }
        }
    });
    if($('#datepicker').length){
        initDatePicker();
    }
    showInit();
    birthdayInit();
};
// 活动日历日期
var courseList=[{date:'2017/8/1',message:'xxxxxx'},{date:'2017/8/10',message:'message'},{date:'2017/8/4',message:'message'}];
function initDatePicker(){
    var curYear = new Date().getFullYear();
    $('#datepicker').datepicker({
        dateFormat: "yy/m/d",
        showMonthAfterYear: true,
        dayNamesMin: ['日','一','二','三','四','五','六'],
        monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        yearSuffix:'',
        defaultDate:new Date(),
        beforeShowDay: function(date){
            var today=new Date();
            today=today.toLocaleString().split(" ")[0];
            date=date.toLocaleString().split(" ")[0];
            if(date==today){
                for(var i in courseList){
                    if(courseList[i].date == date){
                        return [true, 'today-css', courseList[i].message];
                    }
                }
                return [true ,'today-css'];
            }
            for(var i in courseList){
                if(courseList[i].date == date){
                    return [true, 'hasCourse', courseList[i].message];
                }
            }
            return [false, 'noCourse'];
        },
        onSelect:function(text,instace){
            if(!$('.dateCourseList').length){
                $('.datepicker').append($('<div class="dateCourseList"></div>'));
            }
            var date=text.toLocaleString().split(" ")[0];
            for(var i in courseList){
                if(courseList[i].date == date){
                    var dialogTitle = '活动日程详情';
                    var dialogHeight = 100;
                    var a=$('#datepicker');
                    var top=a.offset().top;
                    var left=a.offset().left;
                    $(".dateCourseList").html('<div>'+courseList[i].message+'</div>').dialog({
                        title: dialogTitle,
                        height: dialogHeight,
                        width: 300,
                        position: { using:function(pos){
                            $(this).css('top', top+50+'px');
                            $(this).css('left', left+'px');
                        }},
                    });
                    break;
                }
            }
            return false;
        }
    });

}

//显示更多
function showInit() {
    var pic=$('.picdetail');
    for(var i=0;i<pic.length;i++){
        var img=$(pic[i]).children('img');
        for(var j=4;j<img.length;j++){
            img[j].style.display='none';
        }
    }
}

function showMore(data){
    if(data.innerHTML=='顯示更多'){
        var c=data.parentNode;
        var d=$(data.parentNode).children('.picdetail').children('img');
        for(var i=4;i<d.length;i++){
            d[i].style.display='inline-block';
        }
        data.innerHTML='隐藏';
    }else{
        var c=data.parentNode;
        var d=$(data.parentNode).children('.picdetail').children('img');
        for(var i=4;i<d.length;i++){
            d[i].style.display='none';
        }
        data.innerHTML='顯示更多';
    }

}


function birthdayInit(){
    if($("#birthday").length){
        $(function() {
            $( "#birthday" ).datepicker({
                dateFormat: "yy-m-d",
            });
        });
    }
}


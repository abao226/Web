$(function () {
  carousel();
  carouselt();
  tabChange();
  sy();
  var scroll = document.getElementById("scroll");
  var munit = document.getElementById("munit");
  var li = munit.children;
  // 进行滚动
  var nowLeft = 0;
  //要找到ul元素运动的折返点
  var back = -230; //图和边框的宽度，有7张图，所以折返点就是1470
  //定时器
  var timer = setInterval(run, 20);

  // 鼠标移上scroll停止
  scroll.onmouseover = function () {
    clearInterval(timer);
  };
  // 移开轮播
  scroll.onmouseout = function () {
    timer = setInterval(run, 20);
  };

  function run() {
    nowLeft -= 2;
    //判断是否走到了折返点，走到了，则瞬间切换到0位置
    if (nowLeft <= back) {
      nowLeft = 0;
    }
    munit.style.left = nowLeft + "px";
  }
});

function carousel() {
  $(".carousel_wrap ol").on("click", "li", function () {
    var index = $(this).index();
    $(this).addClass("active").siblings().removeClass();
    $(".carousel_wrap ul>li").eq(index).fadeIn().siblings("li").fadeOut();
  });

  var i = 0;
  setInterval(function () {
    i++;
    if (i > $(".carousel_wrap ul>li").length - 1) {
      i = 0;
    }
    console.log(i);
    $(".carousel_wrap ul>li").eq(i).fadeIn().siblings("li").fadeOut();
    $(".carousel_wrap ol>li").eq(i).addClass("active").siblings().removeClass();
  }, 5000);
}

function carouselt() {
  $(".carousel_wrap .list").on("click", "li", function () {
    var xx = $(this).index();
    $(this).addClass("active").siblings().removeClass();
    $(".carousel_wrap .t_list>li").eq(xx).fadeIn().siblings("li").fadeOut();
  });

  var i = 0;
  setInterval(function () {
    i++;
    if (i > $(".carousel_wrap ul>li").length - 1) {
      i = 0;
    }
    console.log(i);
    $(".carousel_wrap ul>li").eq(i).fadeIn().siblings("li").fadeOut();
    $(".carousel_wrap ol>li").eq(i).addClass("active").siblings().removeClass();
  }, 5000);
}

function tabChange() {
  $(".right .row1 .btn").on("click", "span", function () {
    var index = $(this).index();
    $(".right .row1 .item_wrap .item").eq(index).show().siblings().hide();
    $(this).addClass("active").siblings().removeClass();
  });
}

function sy() {
  $(".right .row2 .img_list").on("click", "li", function () {
    var index = $(this).index();
    $(".right .row2 .con .item").eq(index).show().siblings().hide();
    $(this).addClass("active").siblings().removeClass();
  });
}

/*   function showTime(clock){
  var now = new Date();
  var year = now.getFullYear();
  var month= now.getMonth();
  var day = now.getDate();
  var hour = now.getHours();
  var minu = now.getMinutes();
  var second = now.getSeconds();
  month = month+1;
  var arr_work = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
  var week = arr_work[ now.getDay()];
  var time = year+"年"+month+"月"+day+"日 "+ week+" "+hour+":"+minu+":"+second;
  clock.innerHTML="当前时间: "+time;
}
window.onload = function(){
  var clock = document.getElementById("clock");
  window.setInterval("showTime(clock)",1000);

}
  */
$(document).ready(function () {
    //弹出菜单
    $(".menuBtn").click(function () {
        var popMenu = $(".popMenu");
        $("body").eq(0).css("overflow", "hidden");
        $("body").bind("touchmove", function (event) {
            event.preventDefault();
        }, false);
        popMenu.show(200, function () {  //弹窗菜单显示
            var this_ = $(this);
            //主菜单右滑出
            $(".menuMain").animate({
                left:"40%"
            }, 200);
            //最外围div点击后关闭菜单，同时解除屏幕锁定
            this_.click(function () {
                $("body").unbind("touchmove");
                $("body").eq(0).css("overflow", "auto");
                $(".menuMain").animate({
                    left: "100%"
                }, 200);
                this_.hide();
            });
        });
    });

    //产品列表下拉菜单
    function pullDown() {
        $(".navBtn").bind("click", function () {
            var navMain = $(".navMain");
            if (navMain.hasClass("open")) {
                navMain.removeClass("open").slideUp(50);
            } else {
                navMain.addClass("open").slideDown(50);
                navMain.children("a").click(function () {
                    navMain.removeClass("open").slideUp(50);
                    $(this).addClass("focus").siblings("a").removeClass("focus");
                });
            }
        });
    }
    pullDown();

    //选项卡
    function tabS(clickBtn, showMain, siblingsC) {
        var abstractMenuA = $(clickBtn);
        var MTextOne = $(showMain);
        abstractMenuA.bind("click", function () {
            var this_ = $(this);
            if (this_.hasClass("on")) {
                MTextOne.eq(abstractMenuA.index(this)).show().siblings().hide();
            } else {
                this_.addClass("on").siblings(siblingsC).removeClass("on");
                MTextOne.eq(abstractMenuA.index(this)).show().siblings().hide();
            }
        });
    }
    tabS("ul.tabMenu li", "div.tabMains", "li");
});
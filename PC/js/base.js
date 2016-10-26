$(document).ready(function () {
    //导航鼠标滑过效果
    function menuXG() {
        var menuA = $(".menu li");
        var li = $(".menu");
        $(".bj").mouseenter(function () {
            var this_s = $(this);
            this_s.find(".bjs").animate({
                top:'0px'
            }, 100);
            this_s.children("a.bj").addClass("hoverBg");
            this_s.find("em").animate({
                top: '16px'
            }, 50);
            this_s.siblings(".xiala").slideDown(100);
        });
        $(".bj").mouseleave(function () {
            var this_ = $(this);
            this_.find(".bjs").animate({
                top: '-28px'
            }, 100);
            this_.children("a.bj").removeClass("hoverBg");
            this_.find("em").animate({
                top: '0px'
            }, 50);
            this_.siblings(".xiala").slideUp(100);
        });
        $(".bj").click(function () {
            var this_ss = $(this);
            this_ss.find(".bjs").animate({
                top: '-28px'
            }, 100);
            this_ss.children("a.bj").removeClass("hoverBg");
            this_ss.find("em").animate({
                top: '0px'
            }, 50);
            this_ss.siblings(".xiala").slideUp(100);
        });
    }
    menuXG();

    //定制流程效果
    function dz() {
        var processListLi = $(".processList").children("li");
        processListLi.bind({
            mouseenter: function () {
                $(this).children("em").animate({
                    top:'-8px'
                }, 200);
            },
            mouseleave: function () {
                $(this).children("em").animate({
                    top: '0px'
                }, 200);
            }
        });
    }
    dz();

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
    tabS("ul.listTit li", "div.mainCommon", "li");
    tabS("ul.otherTit li", "div.public", "li");
    tabS("ul.otherTit li", "div.mainCommon", "li");
});
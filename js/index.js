$(function() {
    var _width = $(window).width();
    if (_width < 1024) {
        alert("暂时小于1024屏幕暂时没有实现");
    } else {
        var $liCur = $(".by-h-nav li"),
            curP = $liCur.position().left,
            curW = $liCur.outerWidth(true),
            $slider = $(".curBg"),
            $navBox = $(".by-h-nav"),
        	$targetEle = $(".nav ul li>div");
        $slider.animate({
            "left": curP,
            "width": curW
        });
        $targetEle.mouseenter(function() {
            var $_parent = $(this).parent(),
                _width = $_parent.outerWidth(true),
                posL = $_parent.position().left;
            $slider.stop(true, true).animate({
                "left": posL,
                "width": _width
            }, "fast");
            $(".by-drop-down,.drop-down-ba").show();
             $(this).addClass("current").parent().siblings("li").find("div").removeClass("current");
        });
        $navBox.mouseleave(function(cur, wid) {
            cur = curP;
            wid = curW;
            $slider.stop(true, true).animate({
                "left": cur,
                "width": wid
            }, "fast");
            $(".by-drop-down,.drop-down-ba").hide();
            $(".by-h-nav li").eq(0).find("div").addClass("current").parent().siblings("li").find("div").removeClass("current")
        });
        $(".drop-down-ba").mousemove(function() {
            $(".by-drop-down").show();
            $(".drop-down-ba").show();
        }).mouseout(function() {
            $(".by-drop-down").hide();
            $(".drop-down-ba").hide();
        });
        $(".main-Pr-left ul li").click(function() {
            var index = $(".main-Pr-left ul li").index(this);
            $(this).find("i").addClass("ii").parents("li").siblings().find("i").removeClass("ii")
            showImg(index);
        });
        function showImg(index){
		    var adHeight = $(".main-Pr-right .Pr-Tab").height();
		    $(".main-Pr-right").stop(true,false).animate({"margin-top" : -adHeight*index},500);
		}
    };
});
/**弹框js**/
    $(".check-a").click(function() {
     document.documentElement.scrollTop = document.body.scrollTop =0;//直接跳转到页面顶部
        $("#BgDiv").css({ display: "block", height: $(document).height() });
        var yscroll = document.documentElement.scrollTop;
        $(".inInfo").css("display","block");
        document.documentElement.scrollTop = 0;
    });
    $(".pImg").click(function() {
        $("#BgDiv").css("display","none");
        $(".inInfo").css("display","none");
    });
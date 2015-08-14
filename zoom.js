define(['jquery'], function($) {
    function zoom(config, backFunction) {
        var creatId = config.id;
        var appendId = config.appendId;
        var appendBg = config.appendBg;
        var multiple = config.multiple;
        if(!config.background){
        	var zoomBackground = "rgba(0,0,0,0.4)";
        }
        else{
        	var zoomBackground = config.background;
        }
        var imgContent = $($(creatId).html());
        var showWidth = config.showWidth;
        $(creatId).append("<div class='showZoom'></div>");
        var background = $(creatId).css("background");
        var width = parseInt($(creatId).css("width"));
        var height = parseInt($(creatId).css("height"));
        $(creatId).find(".showZoom").css({
            "position": "absolute",
            "width": width / multiple,
            "height": width / multiple,
            "background": zoomBackground,
        });
        var $imgContent = $("<div class='enlargeDiv'></div>");
        imgContent.css({
            'width': showWidth * multiple,
        }).addClass("enlarge");
        $imgContent.append(imgContent);
        $imgContent.css({
            "position": "absolute",
            "top": 0,
            "left": 0,
        });
        $(appendId).css({
            "width": showWidth,
            "height": showWidth,
            "background": appendBg,
        }).append($imgContent);
        $(creatId).on("mouseover", function() {
            $(appendId).css("display", "block");
            $(this).on("mousemove", function(e) {
                var y = e.pageY;
                var x = e.pageX;
                var offsetLeft = $(creatId).offset().left;
                var offsetTop = $(creatId).offset().top;
                var moveX = x - offsetLeft - width / multiple / 2;
                var moveY = y - offsetTop - width / multiple / 2;
                if (moveY < 0) moveY = 0;
                if (moveX < 0) moveX = 0;
                if (moveX > width - width / multiple) moveX = width - width / multiple;
                if (moveY > height - width / multiple) moveY = height - width / multiple;
                $(this).find(".showZoom").css({
                    "display": "block",
                    "top": moveY,
                    "left": moveX,
                });
                $(appendId).find(".enlargeDiv").css({
                    "display": "block",
                    "top": -moveY/width*showWidth * multiple,
                    "left": -moveX/width*showWidth * multiple,
                });
            }).on("mouseleave", function() {
                $(this).find(".showZoom").css({
                    "display": "none",
                });
                $(appendId).css({
                    "display": "none",
                });
            });
        })

    }
    return zoom;
});

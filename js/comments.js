function Comments() {
    this.previousValue = "";
    this.showExtraComments = function (span) {
        var extra = $(".extra");
        if(extra.css("display") == "none"){
            this.previousValue = span.text();
            extra.css({"display":"block"});
            span.text("Скрыть");
            $('html, body').animate({scrollTop:extra.offset().top - 15}, 1000);
        }else{
            extra.css({"display":"none"});
            span.text(this.previousValue);
            $('html, body').animate({scrollTop:$(".comment-block").offset().top - 15}, 1000);
        }
    }
}
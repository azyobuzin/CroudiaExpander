$(".show_desc a").each(function(index){
    var a = $(this)
    var shorten = a.text();
    if (shorten.indexOf("http://goo.gl/") == 0) {
        chrome.extension.sendMessage({shorten:shorten}, function(response){
            a.text(response.expanded);
        });
    }
});

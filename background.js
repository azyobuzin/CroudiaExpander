chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request.shorten);
    $.getJSON(
        "https://www.googleapis.com/urlshortener/v1/url",
        {key:"AIzaSyBx1Wk9ncbbKkHQnchHnujcxrDuSf0AL5Q", shortUrl:request.shorten},
        function(data){
            sendResponse({expanded:data.longUrl});
        }
    );
    return true;
});

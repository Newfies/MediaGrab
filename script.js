document.addEventListener("DOMContentLoaded", function(){
    const urlInput = document.getElementById("link");
    const report = document.getElementById("report");

    if (urlInput && report){
        urlInput.addEventListener("click", function(){
            urlInput.value = "";
        })

        urlInput.addEventListener("change", function(){
            // Figure what URL it is
            if (urlInput.value.includes('youtube.com/watch?v=')){
                // Its a YouTube URL!
                var url = new URL(urlInput.value)
                // Check If URL Contains Video ID
                var videoId = url.searchParams.get('v');
                if (videoId) {
                    // Get Video ID From URL
                    report.innerText = `Valid YouTube URL Entered With Video ID ${videoId}`;
                    $.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoId + "&key=" + "AIzaSyAZCjFb4Gjmw6o_mHzsaGucQ86-cA8t9Sw", function(data) {
                        alert(data.items[0].snippet.title);
                    });
                } else {
                    report.innerText = `Invalid YouTube URL Entered`;
                }
            }

            if (urlInput.value.includes('youtu.be/')){
                // Its a YouTube Shortened URL!
            }

            else {
                // Its an unsupported URL!
            }
        })
    }
})

// Notes, Removed Content, Reminders, Etc.

/*

https://www.googleapis.com/youtube/v3/videos?part=snippet&id={YOUTUBE_VIDEO_ID}&fields=items(id,snippet)&key=AIzaSyAZCjFb4Gjmw6o_mHzsaGucQ86-cA8t9Sw
https://developers.google.com/youtube/v3/getting-started#calculating-quota-usage

*/
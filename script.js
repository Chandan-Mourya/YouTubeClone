var menuIcon = document.querySelector(".menu_icon")
var sidebar = document.querySelector(".sidebar")
var content = document.querySelector(".content")

menuIcon.onclick =function(){
    sidebar.classList.toggle("small-sidebar")
    content.classList.toggle("large-content")
}


document.querySelector(".logo").addEventListener("click", () => {
    window.location.href = "index.html";
});


// -----------------------------------

let searchInput = document.getElementById("search_input");

searchInput.addEventListener("keydown", async function (event) {
    if (event.code === "Enter") {
       
            try {
                let inp= searchInput.value;
        
                let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inp}&key=AIzaSyCWmsjslHkf5HrCvKjkSL-G89v3inCk-18&maxResults=40&order=viewCount&safeSearch=strict`);
                let data = await res.json();
                console.log(data.items);
                appendvideos(data.items);
        
            } catch (error) {
                console.log(error);
            
                
        }
        document.querySelector(".banner").style.display = "none";
        searchInput.value = '';
        
    }
 });




const appendvideos = (data) =>{
    document.querySelector('.list_content').innerHTML = '';
    data.forEach((el) => {
        
        let vid_list = document.createElement('div');
        vid_list.classList.add('vid_list');

        let thumbnail = document.createElement('img');
        thumbnail.src = el.snippet.thumbnails.medium.url;
        thumbnail.classList.add('thumbnail');
        thumbnail.addEventListener('click', () => {
            // window.open(`https://www.youtube.com/watch?v=${el.id.videoId}`);
            let videoId = el.id.videoId;
            localStorage.setItem('videoId', videoId);
            localStorage.setItem('videoTitle', el.snippet.title);
            localStorage.setItem('videoDesc', el.snippet.description);
            localStorage.setItem('videoChannel', el.snippet.channelTitle);

            window.location.href ="play-video.html";
            
            // window.location.href ="play-video.html?videoId="+el.id.videoId;
        });

        let flex_div = document.createElement('div');
        flex_div.classList.add('flex-div');

        let userImg = document.createElement('img');
        userImg.src ="./images/Jack.png";

        let vid_info = document.createElement('div');
        vid_info.classList.add('vid-info');

        let title = document.createElement('a');
        title.innerHTML = el.snippet.title;
     
        let username = document.createElement('p');
        username.innerHTML = el.snippet.channelTitle;

        // let view_count = document.createElement('p');
        // view_count.innerHTML = el.statistics.viewCount;

        vid_info.append(title, username);
        flex_div.append(userImg,vid_info);
        vid_list.append(thumbnail, flex_div);

        document.querySelector('.list_content').append(vid_list);


    });
}


// -------------------------------


const videos= async() => {
    

        try {
            
    
            let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyCWmsjslHkf5HrCvKjkSL-G89v3inCk-18&maxResults=80&order=viewCount&safeSearch=moderate`);
            let data = await res.json();
            console.log(data.items);
            append(data.items);
    
        } catch (error) {
            console.log(error);
        
            
    }
  
}

videos();

const append = (data) =>{
    document.querySelector('.list_content').innerHTML = '';
    data.forEach((el) => {
        
        let vid_list = document.createElement('div');
        vid_list.classList.add('vid_list');

        let thumbnail = document.createElement('img');
        thumbnail.src = el.snippet.thumbnails.medium.url;
        thumbnail.classList.add('thumbnail');
        thumbnail.addEventListener('click', () => {
            // window.open(`https://www.youtube.com/watch?v=${el.id.videoId}`);
            let videoId = el.id.videoId;
            localStorage.setItem('videoId', videoId);
            localStorage.setItem('videoTitle', el.snippet.title);
            localStorage.setItem('videoDesc', el.snippet.description);
            localStorage.setItem('videoChannel', el.snippet.channelTitle);
            window.location.href ="play-video.html";
              
            // window.location.href ="play-video.html?videoId="+el.id.videoId;
        });

        let flex_div = document.createElement('div');
        flex_div.classList.add('flex-div');

        let userImg = document.createElement('img');
        userImg.src ="./images/Jack.png";

        let vid_info = document.createElement('div');
        vid_info.classList.add('vid-info');

        let title = document.createElement('a');
        title.innerHTML = el.snippet.title;
     
        let username = document.createElement('p');
        username.innerHTML = el.snippet.channelTitle;

        // let date = document.createElement('p');
        // date.innerHTML = el.snippet.publishedAt;
        
        // let view_count = document.createElement('p');
        // view_count.innerHTML = el.statistics.viewCount;

        vid_info.append(title, username);
        flex_div.append(userImg,vid_info);
        vid_list.append(thumbnail, flex_div);

        document.querySelector('.list_content').append(vid_list);


    });
}

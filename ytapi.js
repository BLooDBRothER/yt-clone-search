const req = new XMLHttpRequest();
let contacts = new Map()


const container = document.querySelector('.wrap-class');
const search = document.querySelector('.srh-btn');


class items{
    constructor(vimg, cimg, title, channel){
        this.createvideo(vimg, cimg, title, channel)
    }

    createvideo(vimg, cimg, title, channel){
        var vidbox = document.createElement('div');
        vidbox.classList.add('each-vid');

        var vtmb = document.createElement('div');
        vtmb.classList.add("thumbnail");

        var vi = document.createElement('img');
        vi.src = vimg;

        var det = document.createElement('div');
        det.classList.add("vid-det");

        var ctmb = document.createElement('div');
        ctmb.classList.add("channel-img");

        var ci = document.createElement('img');
        ci.src = cimg;

        var vinfo = document.createElement('div');
        vinfo.classList.add("vid-info");

        var tit = document.createElement('div');
        tit.classList.add("vid-title");
        tit.innerHTML = title;

        var chn = document.createElement('div');
        chn.classList.add("channel");
        chn.innerHTML = channel;

        container.appendChild(vidbox);

        vidbox.appendChild(vtmb);
        vidbox.appendChild(det);

        vtmb.appendChild(vi);

        det.appendChild(ctmb);
        det.appendChild(vinfo);

        ctmb.appendChild(ci);

        vinfo.appendChild(tit);
        vinfo.appendChild(chn);
    }

}

async function channellogo(vimage, title, channelTitle, id){
    console.log("in")
    churl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=AIzaSyBjAiITLf05HKF6g_HoQtK2rlvDe0b0CXs`;
    fetch(churl)
        .then(response => {
            return response.json();
        }).then(json =>{
            
            // txt = json["items"][0]["snippet"]["thumbnails"]["medium"]["url"];
            cimage = json["items"][0]["snippet"]["thumbnails"]["medium"]["url"];
            new items(vimage, cimage, title, channelTitle);
            // console.log(txt)
            // contacts.set('logourl', {"url" : txt})
            
            // return "hi";
        })
    // let res = await fetch(churl);
    // let data = await res.json();
    // return data["items"];
    // let txt = '';
    // req.open("GET", churl);
    // req.send();
    // req.onload = () =>{
    //     if(req.status == 200){
    //         res = JSON.parse(req.response);
    //         txt = res["items"][0]["snippet"]["thumbnails"]["high"]["url"]
    //         console.log(typeof(txt))
    //         return txt;
    //     }
    // }
    // return txt;
}

// channellogo("UCBnxEdpoZwstJqC1yZpOjRA")



search.addEventListener("click", function(){
    // let vidcnt = document.querySelectorAll(".each-vid")
    // console.log(vidcnt)
    while(1){
        if (container.hasChildNodes()) {
            console.log("done");
            container.removeChild(container.childNodes[0]);
        }
        else{
            break;
        }
    }
    let te = document.getElementById("vid-search");
    data = te.value;
    url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${data}&key=AIzaSyBjAiITLf05HKF6g_HoQtK2rlvDe0b0CXs`;
    req.open("GET", url);
    req.send();
    req.onload = () =>{
        if(req.status == 200){
            console.log("in");
            txt = JSON.parse(req.response);
            var lis = txt["items"];
            // console.log(lis);
            for(i=0; i<lis.length; i++){
                snip = lis[i]["snippet"];
                title = snip["title"];
                channelId = snip["channelId"];
                vimage = snip["thumbnails"]["medium"]["url"];
                channelTitle = snip["channelTitle"];
                // channellogo(channelId).then(res=>{
                //     console.log(res);
                //     new items(vimage, cimage, title, channelTitle);
                // })
                // console.log(i);
                channellogo(vimage, title, channelTitle, channelId)
            }
        }
    }
});

                // console.log(, , , );
                
                // console.log(snip["title"], snip["thumbnails"]["medium"]["url"], snip["channelTitle"], snip["channelId"])

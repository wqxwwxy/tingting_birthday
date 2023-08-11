window.onload = function() {
    //为音乐添加src
    //document.querySelector(".audio").src = "./music/hbd.mp3";
    //音乐数组
    var musicList = [
        "./music/1.mp3",
        "./music/2.mp3",
        "./music/3.mp3",
        "./music/4.mp3",
        "./music/5.mp3",
        "./music/6.mp3",
        "./music/7.mp3",
        "./music/8.mp3",
        "./music/9.mp3",
    ]
    var num = 0;

    function fn(name) {
        return document.querySelector(name);
    }
    fn(".audio").src = musicList[num];
    var audio = fn(".audio")
        //document.querySelector(".audio").src = musicList[num];
    fn(".play").onclick = function() {
        if (audio.paused) {
            audio.play();
        }
    };
    fn(".paused").onclick = function() {
        if (audio.played) {
            audio.pause();
        }
    };
    fn(".last").onclick = function() {
        num--
        if (num < 0) {
            num = musicList.length - 1
        }
        fn(".audio").src = musicList[num];
        audio.play();
    };
    fn(".next").onclick = function() {
        num++
        if (num > musicList.length - 1) {
            num = 0
        }
        fn(".audio").src = musicList[num];
        audio.play();
    };
    var volume = fn(".volume");
    volume.onchange = function() {
        audio.volume = volume.value
    }


}
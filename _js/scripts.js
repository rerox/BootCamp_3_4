(function(){

    var player = document.getElementById('video');
    var progress = document.getElementById('progressFilm');
    var output = document.getElementById('TimeProgress');
    var playButton = document.getElementById('playPause');






    var SecondNumber = function (seconds) {
        var value = Math.floor(seconds);
        return (value).toLocaleString({minimumIntegerDigits: 2, useGrouping:false})
    };


    // WYPISYWANIE DO OUTPUTA //


    var timePercent = function (){
        output.value = SecondNumber(player.currentTime/60) + ":" + SecondNumber(player.currentTime%60) + "/"
            + SecondNumber(player.duration/60) + ":" + SecondNumber(player.duration%60);
    };


    player.addEventListener('loadedmetadata',function () {
        progress.max = player.duration;
        progress.value = player.currentTime;
        timePercent();

    });

    video.addEventListener('timeupdate',function (e) {
        progress.value = e.target.currentTime;
        output.value = e.target.currentTime;
        timePercent();
    });


    progress.addEventListener('change', function(){
        player.currentTime = progress.value;
        timePercent();
    });

    playButton.addEventListener('click', function(){
        if (player.paused) {
            player.play();
            playButton.classList.remove('glyphicon-play');
            playButton.classList.add('glyphicon-pause')
        } else {
            video.pause();
            playButton.classList.remove('glyphicon-pause');
            playButton.classList.add('glyphicon-play')
        }
    }, false);


})();
document.getElementById('openBtn').addEventListener('click', function() {
    document.querySelector('.wrapper').classList.add('open');
    var audio = document.getElementById('raudio');
    audio.play();

    setTimeout(function() {
        var letterText = document.getElementById('letterText');
        letterText.textContent = "HAPPY BIRTHDAY !!!🎈🎂🎊 we may not be talking to each other often anymore, however i won't forget the memories we cherished together and im glad that we met. You're one of a kind. Always have a special place in my heart, anyways enjoy the rest of the day and good luck being a fucking 20 year old you grandma skinny legend hehe nevertheless happy birthday tiff ! luv ya - Secret";
    }, 750); // Match the transition-delay of 0.75s for the envelope opening
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.querySelector('.wrapper').classList.remove('open');
    var audio = document.getElementById('raudio');
    audio.pause();
    audio.currentTime = 0;

    var letterText = document.getElementById('letterText');
    letterText.textContent = "";
});

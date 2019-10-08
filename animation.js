window.onload = function () {
    
    var tlOne, banner, background, backgroundimageOne, FrameOne, cta, bgexit;
    var tlOne = new TimelineLite();
    var tlTwo = new TimelineLite();
    var banner = document.getElementById("banner");
    var FrameOne = document.getElementById("FrameOne");
    var FrameOneImage = document.getElementById("FrameOneImage");
    var copyOne = document.getElementById("copyOne");
    var copyTwo = document.getElementById("copyTwo");
    var copyThree = document.getElementById("copyThree");
    var copyFour = document.getElementById("copyFour");
    var printerBottom = document.getElementById("printerBottom");
    var printer = document.getElementById("printer");
    var cta = document.getElementById("cta");
    var FrameTwoImage = document.getElementById("FrameTwoImage");
    
    function initBannerAdd() {
        setPositionsObjects();
        animateAdNew();
    }

    function setPositionsObjects() {

    }

    
    function animateAdNew() {
        tlTwo.from(FrameTwoImage,6, {y:-1000}, "-=0")
        
        tlOne.to(copyOne,1, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        .to(copyOne,1, {delay: 0.5, opacity:0, ease:Power4.easeout}, "-=0")
        
        .to(copyTwo,1, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        .to(copyTwo,1, {delay: 0.5, opacity:0, ease:Power4.easeout}, "-=0")
        
        .to(copyThree,1, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        .to(copyThree,1, {delay: 0.5, opacity:0, ease:Power4.easeout}, "-=0")
        
        .to(copyFour,1, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        
        //.to(printerBottom,1, {delay: 0, opacity:0, ease:Power4.easeout}, "-=1.5")
        //.to(FrameOneImage,1, {delay: 0, opacity:0, ease:Power4.easeout}, "-=1.5")
        //.to(printer,1, {delay: 0, opacity:0, ease:Power4.easeout}, "-=1.5")
        //.to(FrameTwoImage,1, {delay: 0, opacity:0, ease:Power4.easeout}, "-=1.5")
        .to(cta,1, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        .to(cta,3, {delay: 0, opacity:1, onComplete:restartAnimation}, "-=0")

        tlOne.totalDuration(12);
    }
    

    ////timer
    var myVar = setInterval(function () {myTimer()}, 1000);
    function myTimer() {
        var d = new Date();
        //tlOne.totalDuration(10);
    }

    var animationLoop = 1;
    function restartAnimation() {
        if (animationLoop === 1) {
            /*
            animationLoop = animationLoop + 1;
            tlOne.restart();
            tlTwo.restart();
            
            
            //restart css animations 
            var FrameOneImage = document.getElementById("FrameOneImage");
            FrameOneImage.style.animation='';
            FrameOneImage.style.background = "url(assets/spritesheet1.png) 0px -50px";
            FrameOneImage.style.backgroundposition = "0px -50px";
            
            FrameOneImage.style.animation='playAgain 1s steps(51) forwards';
            FrameOneImage.style.webkitanimation='playAgain 1s steps(51) forwards';
            FrameOneImage.style.mozanimation='playAgain 1s steps(51) forwards';
            FrameOneImage.style.msanimation='playAgain 1s steps(51) forwards';
            
            
            FrameOneImage.style.animationDuration='4s';
            FrameOneImage.style.webkitanimationDuration='4s';
            FrameOneImage.style.msanimationDuration='4s';
            FrameOneImage.style.mozanimationanimationDuration='4s';
            
            FrameOneImage.style.animationDelay ='1.8s'; 
            FrameOneImage.style.webkitanimationDelay ='1.8s'; 
            FrameOneImage.style.mozanimationDelay ='1.8s'; 
            FrameOneImage.style.msanimationDelay ='1.8s'; 
            */
        }
    }
    initBannerAdd(); 
    //init(); ///start initialising everything   
    /////////////// /////////////// /////////////// //////////////  
};
let mainMenu = document.querySelectorAll('.top_nav > ul > li'),
    header = document.querySelector('body > header');
    subMenu = document.querySelectorAll('.top_nav ul ul'),
    headerHeight = header.offsetHeight;

// for(sm of subMenu){
//     let smHeight = sm.offsetHeight;
//     if(tallestSubMenu < smHeight){
//         tallestSubMenu = smHeight;
//     }
// };

//header
mainMenu.forEach(function(item){
    item.addEventListener('mouseover',function(){
        header.style.height = '350px';
        header.classList.add('active');
    });
    item.addEventListener('mouseout',function(){
        header.style.height = '27px';
        header.classList.remove('active');
    });
});


//scroll event
window.addEventListener('scroll',()=>{
    let winSCT = window.scrollY;

    if(winSCT>0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
});

//hyosung way
let hyosungway = document.querySelector('.hyosungway');
let hyosungwayOST = hyosungway.offsetTop - 600;


window.addEventListener('scroll',()=>{
    let winSCT = window.scrollY;
    if(winSCT > hyosungwayOST){
        hyosungway.classList.add('active');
    }else{
        hyosungway.classList.remove('active');
    }
    console.log(hyosungway)
});

//business slide
// $('#fiber').bxSlider({
//     pager:false,
//     moveSlides:1
// });


//etc 비디오 모달
let prVideo = document.querySelector('.pr .pr_video');
let targetVideo = document.querySelector('#video');
let orgUrl = targetVideo.querySelector('iframe').getAttribute('src');

prVideo.addEventListener('click',e=>{
    e.preventDefault();
    targetVideo.classList.add('active');

    let newUrl = orgUrl.concat('?autoplay=1');

    targetVideo.querySelector('iframe').setAttribute('src', newUrl);
});

targetVideo.addEventListener('click',()=>{
    targetVideo.classList.remove('active');
    targetVideo.querySelector('iframe').setAttribute('src', orgUrl);
})
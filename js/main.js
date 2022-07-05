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
let winSCT = 0;
//header
mainMenu.forEach(function(item){
    item.addEventListener('mouseover',function(){
        header.style.height = '350px';
        header.classList.add('active');
    });
    item.addEventListener('mouseout',function(){
        header.style.height = '27px';

        if(winSCT == 0){
            header.classList.remove('active');
        }
    });
});

// $(document).ready(function() {
// 	$('#fullpage').fullpage({
// 		//options here
// 		autoScrolling:true,
// 		scrollHorizontally: true
// 	});

// 	//methods
// 	$.fn.fullpage.setAllowScrolling(false);
// });


//scroll event
window.addEventListener('scroll',()=>{
    winSCT = window.scrollY;

    if(winSCT>0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
});

//sitemap_arrow_accordion
let arrowUp = $('.arrow_up'),
    menu2 = $('.menu2');

arrowUp.click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass('active');
})
// $('.menu1 >li').accordion({
//     collapsible: true
//   });

//sitemap_toggle
let siteMap = $('.site_map'),
    menuBtn = $('.menu_btn'),
    closeBtn = $('.close_btn');

menuBtn.click(function(e){
    e.preventDefault();
    siteMap.addClass('active');
})
closeBtn.click(function(e){
    e.preventDefault();
    siteMap.removeClass('active');
})

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

//fiber hover
let fiberImg = $('.fiber_img'),
    textBox = fiberImg.find('.text_box');

    fiberImg.hover(()=>{
        textBox.stop().animate({left:'0px'},300);
    });

/* ------------ header ------------ */
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



/* ------------ header scroll fixed ------------ */
window.addEventListener('scroll',()=>{
    winSCT = window.scrollY;

    if(winSCT>0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
});



/* ------------ sitemap arrow accordion ------------ */
let arrowDown = $('.arrow_down'),
    menu2 = $('.menu2');

arrowDown.click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass('active');
    $(this).next().toggleClass('active'); 
    $(this).parent().siblings().find('ul').slideUp();
})
// $('.menu1 >li').accordion({
//     collapsible: true
//   });



/* ------------ sitemap toggle ------------ */
let siteMap = $('.site_map'),
    menuBtn = $('.menu_btn'),
    closeBtn = $('.close_btn');

menuBtn.click(function(e){
    e.preventDefault();
    siteMap.addClass('active');
    closeBtn.css({display:'block', color:'var(--secondary-c)'});
})
closeBtn.click(function(e){
    e.preventDefault();
    siteMap.removeClass('active');
    closeBtn.css('display','none');
})



/* ------------ search toggle ------------ */
let search = $('.search'),
    searchBtn = $('.search_btn');
    closeBtn = $('.close_btn');
    searchBox = $('.search input');

searchBtn.click(function(e){
    e.preventDefault();
    search.addClass('active');
    closeBtn.css({display:'block', color:'var(--primary-c)'});
    searchBox.focus();
})
closeBtn.click(function(e){
    e.preventDefault();
    search.removeClass('active');
    closeBtn.css('display','none');
})



/* ------------ gototop btn ------------ */
let gtt = $('#gotop');

$(window).scroll(function(){
    if($(this).scrollTop() > 300){
        gtt.fadeIn();
    }else{
        gtt.fadeOut();
    }
});
//??????.animate({css?????????:???},??????,??????);
gtt.click(function(e){
    e.preventDefault();
    $('body,html').animate({scrollTop:0},300,'easeInSine');
});



/* ------------ mouse icon ------------ */
let mouse = $('.mouse_icon');

setInterval(function(){
    mouse.animate({bottom:'30px'},700,'easeOutBack');
    mouse.animate({bottom:'20px'},700,'easeOutBack');
})



/* ------------ hyosung way ------------ */
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




/* ------------ product btn ------------ */
let fiberBtn = $('.fiber_icon a'),
    tradeBtn = $('.trade_icon a'),
    fiberSlide = $('.fiber_wrapper'),
    tradeSlide = $('.trade_wrapper');

fiberBtn.click(function(e){
    e.preventDefault();
    $(this).addClass('active')
    tradeBtn.removeClass('active')
    fiberSlide.addClass('active')
    tradeSlide.removeClass('active')
});
tradeBtn.click(function(e){
    e.preventDefault();
    $(this).addClass('active');
    fiberBtn.removeClass('active');
    tradeSlide.addClass('active');
    fiberSlide.removeClass('active');
    $('#trade').bxSlider({
        pager:false,
        minSlides:1,
        maxSlides:4,
        moveSlides:1,
        slideWidth:306,
        slideMargin:24
    });
});


/* ------------ product slide ------------ */
$('#fiber').bxSlider({
    pager:false,
    minSlides:1,
    maxSlides:4,
    moveSlides:1,
    slideWidth:306,
    slideMargin:24
});


/* ------------ etc video modal ------------ */
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



/* ------------ fiber hover ------------ */
let fiberImg = $('.fiber_img'),
    textBox = fiberImg.find('.text_box');

fiberImg.hover(()=>{
    textBox.stop().animate({left:'0px'},300);
});



/* ------------ employ btn hover ------------ */
let employBtn = $('.employ');

employBtn.hover(function(){
    $(this).find('.bar').stop().animate({width:'100%'}, 600);
},function(){
    $(this).find('.bar').stop().animate({width:'0%'}, 600);
});


/* ------------ cookie ------------ */
let popup = document.querySelector('.popup');
let popupCheckBox = document.querySelector('#popup');
let popupClose = popup.querySelector('#close');

//?????? ?????? ??????
function setCookie(name,value,day){
    let date = new Date();
    date.setDate(date.getDate() + day);

    let cookieContent = '';
    cookieContent += `${name}=${value};`;
    cookieContent += `Expires=${date.toUTCString()}`;            

    document.cookie = cookieContent;
}
/*
???????????? 
    ?????? ????????? - ????????? ????????????.
    ?????? ????????? - ????????? ?????????.

?????? ????????? ???????????? ??????
    ??????????????? ??????????????? ????????? - ???????????????.
    ???????????? ????????? - ????????????
*/

//?????? ?????? ??????
function getCookie(name){
    let visited = false;
    let cookies = document.cookie.split(';'); //????????? ; ???????????? ?????? ??????

    for(let cookie of cookies){
        if(cookie.indexOf(name) > -1){
            visited = true;
        }
    }
    if(visited){
        popup.style.display = 'none'; //?????????
    }else{
        popup.style.display = 'block'; //?????????, ????????? ??????????????? ??????,
    }
}        
getCookie('ABC');

//?????? ?????? ??????
function delCookie(name,value){           

    let date = new Date();
    date.setDate(date.getDate() - 1);

    let cookieContent = '';
    cookieContent += `${name}=${value};`;
    cookieContent += `Expires=${date.toUTCString()}`;            

    document.cookie = cookieContent;
}            

popupClose.addEventListener('click', ()=>{
    popup.style.display = 'none';
    if(popupCheckBox.checked){ //??????????????????, ????????? ?????? ????????????, ????????????
        setCookie('ABC','Main Page',1);
    }else{//??????x, ????????? ?????? ?????????, ????????????
        delCookie('ABC','Main Page');
    }
});
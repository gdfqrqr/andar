$(function () {

    // 최상단 광고 swiper
    var swiper = new Swiper(".group-top", {
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    // 메인 비주얼 swiper
    var swiper = new Swiper(".visual-slide", {
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 3500,
        },
        pagination: {
            el: ".pagination",
            clickable: true,
        },
    });

    // 하단 상품 슬라이드
    var swiper = new Swiper(".prd-slide", {
        slidesPerView: 2.2,
        spaceBetween: 10,
        freeMode: true //부드럽게 슬라이드
    });


    // 스크롤시 헤더 변화
    $(window).scroll(function () {
        curr = $(this).scrollTop();
        // console.log(curr);
        if (curr > 0) {
            $('.header-inner').addClass('fixed')
        } else {
            $('.header-inner').removeClass('fixed')
        }
    })
    $(window).trigger('scroll'); // 스크롤 강제 발생

    //스크롤시 변화한 헤더 내의 클릭 이벤트
    $('.header .btn-menu').click(function () {
        $('.header .gnb').toggleClass('show');
        $('.header .btm-area2').slideToggle();
    })


    // 햄버거 메뉴 펼치기
    $('.btn-ham').click(function (e) {
        e.preventDefault();
        $('body').addClass('hidden')
        $('.side-nav').addClass('on')
    })


    // 햄버거메뉴 닫기
    $(document).click(function (e) {
        if ($('header').has(e.target).length == 0) {
            $('.side-nav').removeClass('on')
            $('body').removeClass('hidden')
   
        }
    })

    $('.btn-close').click(function (e) {
        e.preventDefault()
        $('.side-nav').removeClass('on')
        $('body').removeClass('hidden')
    })


    // aside 아코디언 메뉴
    $('.nav-box').click(function (e) {
        e.preventDefault();
        $(this).removeClass('on').siblings('.item-sub').stop().slideToggle();
       
    })

    // search icon 클릭시 나타나는 화면
    $('.btn-search').click(function (e) {
        e.preventDefault();
        $('.popup-search').addClass('on')
    })

    $('.popup-search .btn-close').click(function (e) {
        e.preventDefault();
        $('.popup-search').removeClass('on')
    })


    //스크롤시 퀵메뉴 
    let lastScroll = 0;
  
    $(window).scroll(function(){
        curr = $(this).scrollTop();

        if (curr > lastScroll) {
            $('.quick-wrap').addClass('hide');
        } else {
            $('.quick-wrap').removeClass('hide');
        }

        lastScroll = curr;
    })


})
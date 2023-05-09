$(function () {

    // 최상단 광고 swiper
    var swiper = new Swiper(".mySwiper", {
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    // 메인 비주얼 swiper
    var swiper = new Swiper(".mySwiper2", {
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 3500,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // 하단 상품 슬라이드1
    var swiper = new Swiper(".mySwiper3", {
        slidesPerView: 2.2,
        spaceBetween: 10,
    });
    // 하단 상품 슬라이드2
    var swiper = new Swiper(".mySwiper4", {
        slidesPerView: 2.2,
        spaceBetween: 10,
    });
    // 하단 상품 슬라이드3
    var swiper = new Swiper(".mySwiper5", {
        slidesPerView: 2.2,
        spaceBetween: 10,
    });

    // 스크롤시 헤더 변화
    $(window).scroll(function () {
        curr = $(this).scrollTop();
        // console.log(curr);
        if (curr > 0) {
            $('.hideTab-group').removeClass('hide')
        } else if (curr == 0) {
            $('.hideTab-group').addClass('hide')
        }
    })

    //스크롤시 변화한 헤더 내의 클릭 이벤트
    $('.right-wrap').click(function () {
        // $('.btm-area2').toggleClass('show');
        $('.tit-wrap').addClass('show')
        $('.allMenu-wrap').slideDown(300, function () {
            $(this).css('display', 'flex')
        })

        $('.btm-area').addClass('hide')
    })
    $('.tit-wrap i').click(function () {
        // $('.btm-area2').toggleClass('show');
        $('.tit-wrap').removeClass('show')
        $('.allMenu-wrap').slideUp(300)
        $('.btm-area').removeClass('hide');
    })

    // 스크롤 이벤트에 있어서 새로고침시 사라지는문제 해결 
    curr = $(this).scrollTop();
    // console.log(curr);
    if (curr > 0) {
        $('.hideTab-group').removeClass('hide')
    } else if (curr == 0) {
        $('.hideTab-group').addClass('hide')
    }

    // 햄버거 메뉴 펼치기
    $('.ico-ham').click(function (e) {
        e.preventDefault();
        $('.aside-group').addClass('on')
        $('#mask').css('display', 'block')
    })


    // 햄버거메뉴 닫기
    $(document).click(function (e) {
        if ($('header').has(e.target).length == 0) {
            $('.aside-group').removeClass('on')
            $('#mask').css('display', 'none')
        }
    })

    $('.close').click(function (e) {
        e.preventDefault()
        $('.aside-group').removeClass('on')
        $('#mask').css('display', 'none')
    })


    // aside 아코디언 메뉴
    $('.nav-box').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('on')) {
            $(this).removeClass('on').siblings('.item-sub').stop().slideUp();
        } else {
            // $('.nav-box').removeClass('on').siblings('.item-sub').stop().slideUp();
            $(this).addClass('on').siblings('.item-sub').stop().slideDown();
        }
    })

    // search icon 클릭시 나타나는 화면
    $('.ico-search').click(function (e) {
        e.preventDefault();
        $('.search-more').addClass('on')
    })

    $('.search-more .prev').click(function (e) {
        e.preventDefault();
        $('.search-more').removeClass('on')
    })






})
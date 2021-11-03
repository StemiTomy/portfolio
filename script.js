$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY>2800){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    // script para ir hacia arriba
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // scirpt para escribir
    var typed = new Typed(".typing", {
        strings: ["Programador", "Diseñador", "Analista"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Programador", "Diseñador", "Analista"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // activar menu pulsando el icono de barritas
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});
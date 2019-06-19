window.onload = function() {
    new WOW().init();
    var headerNode = $('.header');
    if ($(window).scrollTop() > 30) {
        enableHeader(headerNode);
    } else {
        disableHeader(headerNode);
    }
};

$('#mobile-burger').on('change', function(e) {
    var $self = $(this);
    if ($self.prop('checked')) {
        disableScroll();
    } else {
        enableScroll();
    }
});

function closeMenu() {
    $('#mobile-burger').prop('checked', false);
}

function disableScroll() {
    $('body').css('overflow', 'hidden');
}
function enableScroll() {
    $('body').css('overflow', '');
}
function enableHeader(node) {
    node.addClass('scroll');
}
function disableHeader(node) {
    node.removeClass('scroll');
}

$(window).on('resize', function(e) {
    var headerNode = $('.header');
    if ($(window).width() >= 992) {
        closeMenu();
        enableScroll();
        disableHeader(headerNode);
    }

});



$(window).on('scroll', function () {
    //console.log($(window).scrollTop());
    var headerNode = $('.header');
    if ($(window).scrollTop() > 30) {
        enableHeader(headerNode);
    } else {
        disableHeader(headerNode);
    }
    closeMenu();
});
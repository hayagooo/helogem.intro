$(document).ready(function() {
    AOS.init()
    function toggleNav() {
        $('#toggle-nav').toggleClass('nav-menus-show')
        $('#toggle-nav-closeable').toggleClass('overlay-show')
    }
    $('#toggle-nav-btn').click(function() { toggleNav() })
    $('#toggle-nav-closeable').click(function() { toggleNav() })
})
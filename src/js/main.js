import '../scss/main.scss'
import '../index.html'
import $ from 'jquery';
import 'bootstrap';

global.jQuery = $;
global.$ = $;

$('.header__mobile-menu-btn').on('click', () => {
    $('.header__menu--mobile').toggleClass('header__menu--open')
    $('.overlay').fadeToggle(1000)
})
$('.overlay').on('click', () => {
    $('.overlay').fadeOut(500);
    $('.header__menu--mobile').removeClass('header__menu--open')
    $('.connect-modal').removeClass('connect-modal--show')
})
$('.btn-connect').on('click', () => {
    $('.connect-modal').addClass('connect-modal--show')
    $('.header__menu--mobile').removeClass('header__menu--open')
    $('.overlay').fadeIn(1000);
})
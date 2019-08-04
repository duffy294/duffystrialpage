$(document).ready(function(){
  $('#menu-show').click(function(){
    var $headerList = $('.header-list');
    if($headerList.hasClass('open')){
      $headerList.removeClass('open');
      $headerList.slideUp();
    }else{
      $headerList.addClass('open');
      $headerList.slideDown();
    }
  });
  //番号ボタンによるスライド設定
  $('.index-btn').click(function(){
    var slideNumber = $('.index-btn').index($(this));
    $('.active').removeClass('active');
    $('.work').eq(slideNumber).addClass('active');

    //矢印ボタンの表示・非表示設定
    var slideIndex = $('.work').index($('.active'))
    $('.angle-btn').show();
    if(slideIndex === 0){
      $('.angle-left').hide();
    }else if(slideIndex === $('.work').length-1){
      $('.angle-right').hide();
    }
  });
  //アングルボタンによるスライド設定
  $('.angle-btn').click(function(){
    var $activeSlide = $('.active');
    $activeSlide.removeClass('active');
    if($(this).hasClass('angle-left')){
      $activeSlide.prev().addClass('active');
    }else{
      $activeSlide.next().addClass('active');
    }
    //矢印ボタンの表示・非表示設定
    var slideIndex = $('.work').index($('.active'));
    $('.angle-btn').show();
    if(slideIndex === 0){
      $('.angle-left').hide();
    }else if(slideIndex === $('.work').length-1){
      $('.angle-right').hide();
    }
  });

  //会員登録ボタン設定
  $('#signup-show').click(function(){
    $('#signup').fadeIn();
  });
  $('#close-modal').click(function(){
    $('#signup').fadeOut();
  });
});

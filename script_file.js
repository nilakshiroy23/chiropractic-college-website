jQuery(document).ready(function () {
    jQuery(".autoplay").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1008,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    //  jQuery('.tab-container:first').show()
    //  jQuery('.firstdropdown li:first').addClass('active');
    //  jQuery('.firstdropdown li').click(function(event){
    //   //  index=JQuery(this).index();
    //   jQuery('.firstdropdown li').removeClass('active');
    //   jQuery(this).addClass('active');
    //   jQuery('.tab-container').hide();
    //   jQuery('.tab-container').eq(index).show();
    //  });
    
    jQuery('.tab-container').hide();
    jQuery('.sub-menu-list-1').show();
    jQuery(document).on("click", '.list1', function() {

        jQuery('.sub-menu-list-1').slideToggle("slow").show();
        jQuery('.sub-menu-list-2').hide();
        jQuery('.sub-menu-list-3').hide();
        console.log('submenu 1 showing');
    });
    jQuery(document).on("click", '.list2', function() {

        jQuery('.sub-menu-list-2').slideToggle("slow").show();
        jQuery('.sub-menu-list-1').hide();
        jQuery('.sub-menu-list-3').hide();
        console.log('submenu 2 showing');
        
    });
    jQuery(document).on("click", '.list3', function() {

        jQuery('.sub-menu-list-3').slideToggle("slow").show();
        jQuery('.sub-menu-list-1').hide();
        jQuery('.sub-menu-list-2').hide();
        console.log('submenu 3 showing');
        
    });
   
   
    // jQuery('.header-menu-container .tab-container').hide();
    // jQuery('.header-menu-container .sub-menu-list-1').show();
    // jQuery(document).on("click", '.header-menu-container .list1', function() {

    //     jQuery('.header-menu-container .sub-menu-list-1').slideToggle("slow").show();
    //     jQuery('.header-menu-container .sub-menu-list-2').hide();
    //     jQuery('.header-menu-container .sub-menu-list-3').hide();
    //     console.log('submenu 1 showing');
    // });
    // jQuery(document).on("click", '.header-menu-container .list2', function() {

    //     jQuery('.header-menu-container .sub-menu-list-2').slideToggle("slow").show();
    //     jQuery('.header-menu-container .sub-menu-list-1').hide();
    //     jQuery('.header-menu-container .sub-menu-list-3').hide();
    //     console.log('submenu 2 showing');
        
    // });
    // jQuery(document).on("click", '.header-menu-container .list3', function() {

    //     jQuery('.header-menu-container .sub-menu-list-3').slideToggle("slow").show();
    //     jQuery('.header-menu-container .sub-menu-list-1').hide();
    //     jQuery('.header-menu-container .sub-menu-list-2').hide();
    //     console.log('submenu 3 showing');
        
    // });
  


    jQuery('.third-right2').hide();
    jQuery('.third-right3').hide();
    
    jQuery(document).on("click",'.third1',function(){
      jQuery('.list-element-1').css('background','#B6985B');
      jQuery('.list-element-2').css('background','none');
      jQuery('.list-element-3').css('background','none');
      jQuery('.third-right1').show();
      jQuery('.third-right2').hide();
      jQuery('.third-right3').hide();
      
    });
    jQuery(document).on("click",'.third2',function(){
      jQuery('.list-element-2').css('background','#B6985B');
      jQuery('.list-element-1').css('background','none');
      jQuery('.list-element-3').css('background','none');
      jQuery('.third-right2').show();
      jQuery('.third-right1').hide();
      jQuery('.third-right3').hide();
    });
    jQuery(document).on("click",'.third3',function(){
      jQuery('.list-element-3').css('background','#B6985B');
      jQuery('.list-element-1').css('background','none');
      jQuery('.list-element-2').css('background','none');
      jQuery('.third-right3').show();
      jQuery('.third-right2').hide();
      jQuery('.third-right1').hide();
    });
     if (window.matchMedia("(min-width: 992px)").matches) {
       jQuery(".third-container .mobile-view").hide();
       jQuery(".third-container .desktop-view").show();
       jQuery(".sixth-container .mobile-sixth").hide();
       jQuery(".sixth-container .desktop-sixth").show();
       jQuery(".sec9 .desktop-nineth").show();
       jQuery(".sec9 .mobile-nineth").hide();


     }
     else{
       jQuery(".third-container .mobile-view").show();
       jQuery(".third-container .desktop-view").hide();
       jQuery(".sixth-container .mobile-sixth").show();
       jQuery(".sixth-container .desktop-sixth").hide();
       jQuery(".sec9 .desktop-nineth").hide();
       jQuery(".sec9 .mobile-nineth").show();

     }
     jQuery(document).scroll(function () {
      var scroll_counter = jQuery(this).scrollTop();
      if (scroll_counter > 1) {
        jQuery(".hamburgur-icon").removeClass("p-3");
        jQuery(".logo").removeClass("p-3");
        jQuery(".search-icon").removeClass("p-3");
        jQuery(".logo img").css('height','50px');
      } else {
        jQuery(".hamburgur-icon").addClass("p-3");
        jQuery(".logo").addClass("p-3");
        jQuery(".search-icon").addClass("p-3");
        jQuery(".logo img").css('height','100%');
      }
    });
    
  });

  
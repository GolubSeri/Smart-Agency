function ibg(){$.each($(".ibg"),(function(i,t){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}function amh(){$(".amh").each((function(){var i=0,t=this.classList.item(0),n=this.classList.item(2);$(window).width()>=Number(n)?($("."+t).each((function(){$("."+t).css("min-height","auto");var n=$(this).height();n>i&&(i=n)})),$("."+t).css("min-height",i+"px")):$("."+t).each((function(){$("."+t).css("min-height","auto")}))}))}ibg(),amh(),jQuery(window).resize((function(){amh()})),new Swiper(".clients-midle",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},loop:!0,autoplay:{delay:5e3,stopOnLastSlide:!1,disableOnInteraction:!0},speed:500});
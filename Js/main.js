function ibg(){$.each($(".ibg"),(function(t,a){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}function amh(){$(".amh").each((function(){var t=0,a=this.classList.item(0),s=this.classList.item(2);$(window).width()>=Number(s)?($("."+a).each((function(){$("."+a).css("min-height","auto");var s=$(this).height();s>t&&(t=s)})),$("."+a).css("min-height",t+"px")):$("."+a).each((function(){$("."+a).css("min-height","auto")}))}))}ibg(),amh(),jQuery(window).resize((function(){amh()})),$("input[data-value], textarea[data-value]").each((function(){""!=this.value&&this.value!=$(this).attr("data-value")||(this.value=$(this).attr("data-value"),$(this).hasClass("l")&&0==$(this).parent().find(".form_label").length&&$(this).parent().append('<div class="form_label">'+$(this).attr("data-value")+"</div>")),this.value!=$(this).attr("data-value")&&""!=this.value&&($(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).hasClass("l")&&0==$(this).parent().find(".form_label").length&&$(this).parent().append('<div class="form_label">'+$(this).attr("data-value")+"</div>")),$(this).click((function(){this.value==$(this).attr("data-value")&&("pass"==$(this).attr("data-type")&&$(this).attr("type","password"),this.value="")})),$(this).blur((function(){""==this.value&&(this.value=$(this).attr("data-value"),$(this).removeClass("focus"),$(this).parent().removeClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","text"))}))}));
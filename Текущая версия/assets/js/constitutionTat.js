function createRequest()
            {
                var request = null;
                try
                {
                    request = new XMLHttpRequest ();
                }
                catch (e)
                {
                    try
                    {
                        request = new ActiveXObject ("Microsoft.XMLHTTP");
                    }
                    catch (e) {}
                }
                return request;
            }

        function getFile (name)
            {

                var req = createRequest ();
                req.open('GET', name, false);
            //	req.overrideMimeType('text/plain; charset=windows-1251');
                req.send(null);
                document.getElementById ('mytext').firstChild.data = req.responseText;

            }
$(document).ready(function(){
             $('.spoiler_links').click(function(){
              $(this).parent().children('div.spoiler_body').toggle('normal');
              return false;
             });
            });
 $(function(){
              $.fn.scrollToTop=function(){
                $(this).hide().removeAttr("href");
                if($(window).scrollTop()!="0"){
                    $(this).fadeIn("slow")
              }
              var scrollDiv=$(this);
              $(window).scroll(function(){
                if($(window).scrollTop()=="0"){
                $(scrollDiv).fadeOut("slow")
                }else{
                $(scrollDiv).fadeIn("slow")
              }
              });
                $(this).click(function(){
                  $("html, body").animate({scrollTop:0},"slow")
                })
              }
            });
            $(function() {$("#toTop").scrollToTop();});
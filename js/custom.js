var valid_extensions = /(.pdf|.docx|.doc)$/i;
var num =/^\d+$/;
var feed_city_pattern = /^[A-Za-z ]{3,80}$/;
var feed_city_patternd = /^[A-Za-z. ]{3,80}$/;
var mobile_pattern =/^\d{4,10}$/;
var regdate = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d+$/;
var url =/^([w*3]+(\.[a-zA-Z0-9]+)+.*)$/;
var mobileline  = /^(\+)?([0-9]{1,4})?\d{8,12}$/;
var landline  = /^(\+)?([0-9]{1,4})?([ ]{1,1})?(\-{0,1})?\d{8,12}$/;

var doctor_value ="";
var qualification_value="";
var location_value ="";
var right = 0;
			var started =0;
			var ended = 4;
$(document).ready(function(){
		
	 
	
	 $(".menuclick").click(function(){
		 
		//alert("hereee");
		if(right == 0){
		$(".content_screen").animate({right:'-80%'});
		right=250;
		
		}else{
			$(".content_screen").animate({right:'0%'});
			right= 0;
		}
	}); 
	
	$(".menu_list ul li").click(function(){
			
			var data = $(this).attr("data");
			var idname = "#"+data;
			//alert(idname);
			$(".screen").css("display","none");
			$(idname).css("display","block");
			$(".content_screen").animate({right:'0px'});
			right= 0;
			$(".loading").css("display","block");
			
			if(data =="section_two"){
							
				
				$.ajax({
				
				url: "http://www.iimbaa.org/IIMBAA/mobile/news2.php",
				type: "POST",
				dataType: "json",
				//data: {
				//"start": started,
				//"end": ended,
				//},
				
				success: function (res) {
							
					   var index;
					
					for (index = 0; index < res.length; ++index) {
						//$("#location").append("<option value='"+res[index]['location_name']+"'>"+res[index]['location_name']+"</option>");
						  var images_url = res[index]['image_intro'];
						  if(images_url ==""){
							images_url ="images/No_image.png";
						 }
						$("#news_section").append("<li data='"+index+"'><div class='row'><div class='col-xs-4 list_images'><img src='"+images_url+"'/></div><div class='col-xs-8 news_expert'><h3>"+res[index]['title']+"</h3><p class='newsdatetime'>"+res[index]['publish_up']+"</p></div></div></li>");
					} 
					$(".loading").css("display","none");
					$("#news_section li").click(function(){
						//alert("hihi");
						$("#section_two").slideUp();
						$("#section_two").css("display","none");
						$("#section_eight").slideDown();
						$("#section_eight").css("display","block");
						var indexid = $(this).attr("data");
						var desc_image = res[indexid]['image_intro'];
						
						//$("#news_description").append("<div class='row descr_row'>");
						if(desc_image !=""){
							$("#news_description").append("<div class='images_area'><img src='"+res[indexid]['image_intro']+"'/></div>");
						
						}
						$("#news_description").append("<div class='desc_area'>"+res[indexid]['introtext']+"</div>");
					});
				},
				error: function(rtn){
					alert("error");
				}
				
				
			});
			
			}
			
			if(data =="section_four"){
							
				
				$.ajax({
				
				url: "http://www.iimbaa.org/IIMBAA/mobile/events2.php",
				type: "POST",
				dataType: "json",
				//data: {
				//"start": started,
				//"end": ended,
				//},
				
				success: function (res) {
							
					   var index;
					
					for (index = 0; index < res.length; ++index) {
						//$("#location").append("<option value='"+res[index]['location_name']+"'>"+res[index]['location_name']+"</option>");
						  var images_url = res[index]['image_intro'];
						  if(images_url ==""){
							images_url ="images/No_image.png";
						 }
						$("#event_section").append("<li data='"+index+"'><div class='row'><div class='col-xs-3 list_images'><img src='"+images_url+"'/></div><div class='col-xs-8 news_expert'><h3>"+res[index]['title']+"</h3><p class='newsdatetime'>"+res[index]['publish_up']+"</p></div></div></li>");
					} 
					$(".loading").css("display","none");
					$("#event_section li").click(function(){
						//alert("hihi");
						$("#section_four").slideUp();
						$("#section_four").css("display","none");
						$("#section_nine").slideDown();
						$("#section_nine").css("display","block");
						var indexid = $(this).attr("data");
						var desc_image = res[indexid]['image_intro'];
						
						//$("#news_description").append("<div class='row descr_row'>");
						if(desc_image !=""){
							$("#event_description").append("<div class='images_area'><img src='"+res[indexid]['image_intro']+"'/></div>");
						
						}
						$("#event_description").append("<div class='desc_area'>"+res[indexid]['introtext']+"</div>");
					});
					
				},
				error: function(rtn){
					alert("error");
				}
				
				
			});
			
			}
			if(data =="section_five"){
							
				
				$.ajax({
				
				url: "http://www.iimbaa.org/IIMBAA/mobile/articles2.php",
				type: "POST",
				dataType: "json",
				//data: {
				//"start": started,
				//"end": ended,
				//},
				
				success: function (res) {
							
					   var index;
					
					for (index = 0; index < res.length; ++index) {
						//$("#location").append("<option value='"+res[index]['location_name']+"'>"+res[index]['location_name']+"</option>");
						  var images_url = res[index]['image_intro'];
						  if(images_url ==""){
							images_url ="images/No_image.png";
						 }
						$("#articles_section").append("<li data='"+index+"'><div class='row'><div class='col-xs-3 list_images'><img src='"+images_url+"'/></div><div class='col-xs-8 news_expert'><h3>"+res[index]['title']+"</h3><p class='newsdatetime'>"+res[index]['publish_up']+"</p></div></div></li>");
					} 
					$(".loading").css("display","none");
					$("#articles_section li").click(function(){
						//alert("hihi");
						$("#section_five").slideUp();
						$("#section_five").css("display","none");
						$("#section_ten").slideDown();
						$("#section_ten").css("display","block");
						var indexid = $(this).attr("data");
						var desc_image = res[indexid]['image_intro'];
						
						//$("#news_description").append("<div class='row descr_row'>");
						if(desc_image !=""){
							$("#article_description").append("<div class='images_area'><img src='"+res[indexid]['image_intro']+"'/></div>");
						
						}
						$("#article_description").append("<div class='desc_area'>"+res[indexid]['introtext']+"</div>");
					});
					
				},
				error: function(rtn){
					alert("error");
				}
				
				
			});
			
			}
			if(data =="section_six"){
							
				
				$.ajax({
				
				url: "http://www.iimbaa.org/IIMBAA/mobile/articles2.php",
				type: "POST",
				dataType: "json",
				//data: {
				//"start": started,
				//"end": ended,
				//},
				
				success: function (res) {
							
					   var index;
					
					for (index = 0; index < res.length; ++index) {
						//$("#location").append("<option value='"+res[index]['location_name']+"'>"+res[index]['location_name']+"</option>");
						  var images_url = res[index]['image_intro'];
						  if(images_url ==""){
							images_url ="images/No_image.png";
						 }
						$("#member_section").append("<li data='"+index+"'><div class='row'><div class='col-xs-3 list_images'><img src='"+images_url+"'/></div><div class='col-xs-8 news_expert'><h3>"+res[index]['title']+"</h3><p class='newsdatetime'>"+res[index]['publish_up']+"</p></div></div></li>");
					} 
					$(".loading").css("display","none");
					
				},
				error: function(rtn){
					alert("error");
				}
				
				
			});
			
			}
			
	});
	
	$('.news_back').click(function(){
						$("#section_eight").slideUp();
						$("#section_eight").css("display","none");
						$("#section_two").slideDown();
						$("#section_two").css("display","block");
						
						
	
	
	});
	
	$('.event_back').click(function(){
						
						$("#section_nine").slideUp();
						$("#section_nine").css("display","none");
						$("#section_four").slideDown();
						$("#section_four").css("display","block");
						
						
						
	
	
	});
	$('.article_back').click(function(){
						
						$("#section_ten").slideUp();
						$("#section_ten").css("display","none");
						$("#section_five").slideDown();
						$("#section_five").css("display","block");
						
						
	
	
	});
	
	

});





function isValidEmail(e)
{
    
    var exp=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    result = exp.test(e);
    if (result)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function ValidPhone(phone)
{
    var reg_mobile= /^(\+)?([0-9]{8,15})?\d{8,15}$/;
    var valid = "0123456789";
    if((phone=="") || (phone<=0))
    {
        alert ("Please Enter Mobile Number")
        return false
    }    
    else if(!reg_mobile.test(phone))
    {
        alert("Invalid Mobile Number Length! Please Try Again.")
        return false
    }
        
    return true
}

//Number Validation
function valid1(f) {
   // !(/^[ÃƒÂ±0-9( )+\/#-]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÂ±0-9( )+#\/-]/ig,''):null;
    !(/^[ÃƒÂ0-9]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÂ0-9]/ig,''):null;
}

function valid88(f) {
   // !(/^[ÃƒÂ±0-9( )+\/#-]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÂ±0-9( )+#\/-]/ig,''):null;
    !(/^[ÃƒÂ0-9+-]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÂ0-9]/ig,''):null;
}
function valid77(f) {
   // !(/^[ÃƒÂ±0-9( )+\/#-]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÂ±0-9( )+#\/-]/ig,''):null;
    !(/^[ÃƒÂ0-9+]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÂ0-9]/ig,''):null;
}

function valid67(f) {
    !(/^[ÃƒÂ0-9+.]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÂ0-9]/ig,''):null;
}
function validc(f) {
	   !(/^[ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z( )+ÃƒÂ0-9+.]*$/i ).test(f.value)?f.value = f.value.replace(/[^ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z( )+ÃƒÂ0-9+.]/ig,''):null;
   // !(/^[ÃƒÂ0-9+.]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÂ0-9]/ig,''):null;
}
function valid2(f) {
    !(/^[ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z( )+\/#-]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z( )+#\/-]/ig,''):null;
}
function valid3(f) {
    !(/^[ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z( )+\/-]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z( )+\/-]/ig,''):null;
}
/*Name Validation*/
function valid4(f) {
    !(/^[ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z]*$/i ).test(f.value)?f.value = f.value.replace(/[^ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z]/ig,''):null;
}
/*website*/
function valid9(f) {
    !(/^[ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z+.+ÃƒÂ0-9]*$/i ).test(f.value)?f.value = f.value.replace(/[^ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z( )+.+ÃƒÂ0-9]/ig,''):null;
}

/*company validation*/
function valid5(f) {
    !(/^[ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z. ]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z]/ig,''):null;
}


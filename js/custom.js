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
$(document).ready(function(){
		
	 
	
	 $(".menuclick").click(function(){
		//alert("hereee");
		if(right == 0){
		$(".content_screen").animate({right:'-250px'});
		right=250;
		
		}else{
			$(".content_screen").animate({right:'0px'});
			right= 0;
		}
	}); 
	
	$('#container').load('http://google.com');
	
	$(".menu_list ul li").click(function(){
			var data = $(this).attr("data");
			var idname = "#"+data;
			//alert(idname);
			$(".screen").css("display","none");
			$(idname).css("display","block");
			$(".content_screen").animate({right:'0px'});
			right= 0;
			if(data=="section_two"){
				alert("dsf");
				window.location = "news.html";
			
				/*json**calling*******/
				/*	$.ajax({
					
					url: "http://www.iimbaa.org/IIMBAA/mobile/news.php",
					type: "POST",
					//dataType: "json",
					dataType:"jsonp",
					crossDomain:true,
					success: function (res) {
						alert("sucess");
						/* var index;
						for (index = 0; index < res.length; ++index) {
							$("#location").append("<option value='"+res[index]['location_name']+"'>"+res[index]['location_name']+"</option>");
						}	 */   
					
				/*	},
					error: function(rtn){
						alert("error");
					}
				
				
					});
				/*end******/
		
			}
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


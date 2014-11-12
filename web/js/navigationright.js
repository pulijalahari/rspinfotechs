$j(document).ready(function (e) {

          var parentId = "";

          var computedWidth = 0;
          var columncount = 0;
		  var divclicked = null;
			//alert("HI");
			$j('.mainNav a').click(function(e) {			
			
				//alert("first nav right");
				var hrefval = $j(this).attr("href");
				var homeDiv = document.getElementById('home');
				var whtWeDoDiv = document.getElementById('whatWeDo');
				var whyRspDiv = document.getElementById('whyRsp')
				var rspSolutionsDiv = document.getElementById('rspSolutions');
				var rspConsultantsDiv = document.getElementById('rspConsultants');
				var rspTeamDiv = document.getElementById('rspTeams');				
				var rspContactUsDiv = document.getElementById('rspContactUs');
			
				 
				$j(whtWeDoDiv).css('display', 'none');
				$j(whyRspDiv).css('display', 'none');
				$j(rspSolutionsDiv).css('display', 'none');
				$j(rspConsultantsDiv).css('display', 'none');
				$j(rspTeamDiv).css('display', 'none');
				$j(rspContactUsDiv).css('display', 'none');
				// alert("first 2");
				
				if(hrefval == "#home") {	  
				  //divclicked = $j(homeDiv);	
				  //MC.homeSlider.close();				  
				}
				
				if(hrefval == "#whtwedo") {	  
				  divclicked = $j(whtWeDoDiv);				  
				}
				
				if(hrefval == "#whyrsp") {
				  divclicked = $j(whyRspDiv);
				}
				
				if(hrefval == "#rspsolutions") {
				  divclicked = $j(rspSolutionsDiv);	
				}
				
				if(hrefval == "#rspconsultants") {
				  divclicked = $j(rspConsultantsDiv);
				}
				
				if(hrefval == "#rspteam") {
				  divclicked = $j(rspTeamDiv);
				}
				
				if(hrefval == "#rspcontactus") {
				  divclicked = $j(rspContactUsDiv);
				}
				// alert("divclicked 6: " + divclicked.text);
				 $j(divclicked).css({ 
				  'display': 'block',
				  //'width': '40%',
				  'padding': '8px 11px',
				  'padding-top': '50px',
				  'position': 'absolute',
				  'top': '0',
				  'right': '0',
				  'height': '100%'
				});	
	
				if(hrefval == "#home") {	
					MC.homeSlider.close();
					
				}else{
					MC.homeSlider.open();	
					
					var t=setTimeout("MC.homeSlider.processing = false;",5000);
						
				}
				
				
			});
			
			$j('.slide').live('click', function(e) {
					var hrefval1 = $j(this).attr("href");
					//alert("hrefval 1 in nav right:" +  hrefval1);

					var whtWeDoDiv = document.getElementById('whatWeDo');
					var whyRspDiv = document.getElementById('whyRsp')
					var rspSolutionsDiv = document.getElementById('rspSolutions');
					var rspConsultantsDiv = document.getElementById('rspConsultants');
					var rspTeamDiv = document.getElementById('rspTeams');				
					var rspContactUsDiv = document.getElementById('rspContactUs');
					
					if(hrefval1 == "#whtwedo") {	  
						$j(whyRspDiv).css('display', 'none');
						$j(rspSolutionsDiv).css('display', 'none');
						$j(rspConsultantsDiv).css('display', 'none');
						$j(rspTeamDiv).css('display', 'none');
						$j(rspContactUsDiv).css('display', 'none');	
						divclicked = $j(whtWeDoDiv);								
					}
					else if(hrefval1 == "#rspsolutions") {
						$j(whtWeDoDiv).css('display', 'none');
						$j(whyRspDiv).css('display', 'none');					
						$j(rspConsultantsDiv).css('display', 'none');
						$j(rspTeamDiv).css('display', 'none');
						$j(rspContactUsDiv).css('display', 'none');	
						 divclicked = $j(rspSolutionsDiv);	
					}
					
					$j(divclicked).css({ 
				  'display': 'block',
				  //'width': '40%',
				  'padding': '8px 11px',
				  'padding-top': '50px',
				  'position': 'absolute',
				  'top': '0',
				  'right': '0',
				  'height': '100%'
				});	
					
					
				});
			

      });
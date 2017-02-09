var nextstep = false, nextstepr = false;
	//table length
	var TLength = document.getElementById("uml").rows.length;
	// init
	$('.focused').focus();
	// actual code
	$(document).keydown(function(e){  
		var colmatches = 0, rowmatches = 0, x = 0, y = 0;
		var colArr = [], rowArr = [];
		myArray = $(".focused").attr("class").split(' ');
		for (var i in myArray) {
			if (myArray[i].includes("col")){
				colArr.push(myArray[i]);
				colmatches++;
			}
			if (myArray[i].includes("row")){
				rowArr.push(myArray[i]);
				rowmatches++;
			}
		}
	    if (e.keyCode == 37) { // left
	        if($('.focused').prev('.focusable').length){
	 	        if (rowmatches == 1){
					active = $('td.focused').removeClass('focused');
					xx = parseInt(colArr[0].match(/\d/g))-1; // col only number -1
					yy = parseInt(rowArr[0].match(/\d/g)); // row only number 
					$("td.focusable.col"+xx+".row"+yy).focus().addClass('focused');
					//window.alert(" colmatches" +colmatches + "  y " + yy + "  x " + xx + " colarr:"+colArr+"  rowarr:"+rowArr);
					rowmatches = 0;
				}
				if (rowmatches == 2){	
					col = parseInt(colArr[0].match(/\d/g))-1; // col only number -1
					{
						var yy = parseInt(rowArr[0].match(/\d/g)); // row only number
						var nextRowMatches = 0;
						nextArray = $("td.focusable.col"+col+".row"+yy).attr("class").split(' ');
						for (var i in nextArray) {
							if (nextArray[i].includes("row")){
								rowArr.push(nextArray[i]);
								nextRowMatches++;
							}
						}
						//window.alert(" colmatches" +colmatches + "  y " + yy + "  x " + xx + " colarr:"+colArr+"  rowarr:"+rowArr);
					}
					if(nextRowMatches == 2){
						$('td.focused').removeClass('focused');
						$("td.focusable.col"+col+".row"+yy).focus().addClass('focused');
						rowmatches = 0;
					}
					else{
						nextstepr = true;
						window.alert(" There are two elements to visit on the left please chose 1 or 2");
					}
					nextRowMatches = 0;
				}             	
	        }
	        else{
	        	window.alert("No more elements on the left")
	        }
	    }
	    if (e.keyCode == 39) { // right
	        if($('.focused').next('.focusable').length){
	        	if (rowmatches == 1){
					active = $('td.focused').removeClass('focused');
					xx = parseInt(colArr[colArr.length-1].match(/\d/g))+1; // col only number +1
					yy = parseInt(rowArr[rowArr.length-1].match(/\d/g)); // row only number 
					$("td.focusable.col"+xx+".row"+yy).focus().addClass('focused');
					//window.alert(" colmatches" +colmatches + "  y " + yy + "  x " + xx + " colarr:"+colArr+"  rowarr:"+rowArr);
					rowmatches = 0;
				}
				if (rowmatches == 2 || rowmatches == 3){	
					col = parseInt(colArr[colArr.length-1].match(/\d/g))+1; // col only number
					{
						var yy = parseInt(rowArr[0].match(/\d/g)); // row only number
						var nextRowMatches = 0;
						nextArray = $("td.focusable.col"+col+".row"+yy).attr("class").split(' ');
						for (var i in nextArray) {
							if (nextArray[i].includes("row")) {
								rowArr.push(nextArray[i]);
								nextRowMatches++;
							}
						}
						//window.alert(" colmatches" +colmatches + "  y " + yy + "  x " + xx + " colarr:"+colArr+"  rowarr:"+rowArr);
					}
					if(nextRowMatches == 2){
						$('td.focused').removeClass('focused');
						$("td.focusable.col"+col+".row"+yy).focus().addClass('focused');
						rowmatches = 0;
					}
					else {
						nextstepr = true;
						window.alert(" There are two elements to visit on the right please chose 1 or 2");
					}
					nextRowMatches = 0;
				}
	        }
	        else{
	        	window.alert("No more elements on the right")
	        }
	    }	    
	    //Up 38
	    if (e.keyCode == 38) {
	    	if (-1<$('td.focused').closest('tr').index()-1){
	    		if (colmatches == 1){
					active = $('td.focused').removeClass('focused');
					xx = parseInt(colArr[0].match(/\d/g)); // col only number
					yy = parseInt(rowArr[0].match(/\d/g))-1; // row only number -1
					$("td.focusable.col"+xx+".row"+yy).focus().addClass('focused');
					//window.alert(" colmatches" +colmatches + "  y " + yy + "  x " + xx+ " colarr:"+colArr+"  rowarr:"+rowArr);
					colmatches = 0;
				}
				if (colmatches == 2){
					row = parseInt(rowArr[0].match(/\d/g))-1; // row only number -1
					{
						var xx = parseInt(colArr[0].match(/\d/g)); // col only number
						var nextColmatches = 0;
						nextArray = $("td.focusable.col"+xx+".row"+row).attr("class").split(' ');
						for (var i in nextArray) {
							if (nextArray[i].includes("col")){
								colArr.push(nextArray[i]);
								nextColmatches++;
							}
						}
						//window.alert(" colmatches" +colmatches + "  y " + row + "  x " + xx + " colarr:"+colArr+"  rowarr:"+rowArr) ;
					}
					if (nextColmatches ==2){
						$('td.focused').removeClass('focused');
						$("td.focusable.col"+xx+".row"+row).focus().addClass('focused');
						colmatches = 0;
					}
					else{
						nextstep = true;
						window.alert(" There are two elements to visit above please chose 1 or 2");
					}
					nextColmatches = 0;
				}
	    	}
			else{
	        	window.alert("No more elements above")
	        } 
		}
	    //down 40
	    if (e.keyCode == 40) {
	    	if (TLength>$('td.focused').closest('tr').index()+1){
		    	if (colmatches == 1){
					active = $('td.focused').removeClass('focused');
					xx = parseInt(colArr[colArr.length-1].match(/\d/g)); // col only number
					yy = parseInt(rowArr[rowArr.length-1].match(/\d/g))+1; // row only number +1
					$("td.focusable.col"+xx+".row"+yy).focus().addClass('focused');
					//window.alert(" colmatches" +colmatches + "  y " + yy + "  x " + xx + " colarr:"+colArr+"  rowarr:"+rowArr);
					colmatches = 0;
				}
				if (colmatches == 2) {
					row = parseInt(rowArr[rowArr.length-1].match(/\d/g))+1; // row only number +1
					{
						var xx = parseInt(colArr[0].match(/\d/g)); // col only number
						var nextColmatches = 0;
						nextArray = $("td.focusable.col"+xx+".row"+row).attr("class").split(' ');
						for (var i in nextArray) {
							if (nextArray[i].includes("col")){
								colArr.push(nextArray[i]);
								nextColmatches++;
							}
						}
						//window.alert(" colmatches" +colmatches + "  y " + row + "  x " + xx + " colarr:"+colArr+"  rowarr:"+rowArr) ;
					}
					if (nextColmatches ==2){
						$('td.focused').removeClass('focused');
						$("td.focusable.col"+xx+".row"+row).focus().addClass('focused');
						colmatches = 0;
					}
					else{
						nextstep = true;
						window.alert(" There are two elements to visit below please chose 1 or 2");
					}
					nextColmatches = 0;	
				}
			}
			else{
	        	window.alert("No more elements down")
	        }
		}
		// 1 case there were two columns and user choose 1 , up and down
		if (e.keyCode == 49 &&  nextstep &&  !nextstepr){
			$('td.focused').removeClass('focused');
			var xx = parseInt(colArr[0].match(/\d/g)); // col only number
			$("td.focusable.col"+xx+".row"+row).focus().addClass('focused');
			//window.alert(" colmatches" +colmatches + "  y " + row + "  x " + xx + " colarr:"+colArr+"  rowarr:"+rowArr) ;
			colmatches = 0;
			nextstep = false;
			nextstepr = false;
		}
		// 2 case there were two columns and user choose 2 , up and down
		if (e.keyCode == 50 &&  nextstep &&  !nextstepr){
			$('td.focused').removeClass('focused');
			var xx = parseInt(colArr[colArr.length-1].match(/\d/g)); // col only number
			$("td.focusable.col"+xx+".row"+row).focus().addClass('focused');
			//window.alert(" colmatches" +colmatches + "  y " + row + "  x " + xx + " colarr:"+colArr+"  rowarr:"+rowArr) ;
			colmatches = 0;
			nextstep = false;
			nextstepr = false;
		}
		// 1 case there were two rows and user choose 1 , left and write
		if (e.keyCode == 49 && !nextstep && nextstepr){
			$('td.focused').removeClass('focused');
			var yy = parseInt(rowArr[0].match(/\d/g)); // row only number
			$("td.focusable.col"+col+".row"+yy).focus().addClass('focused');
			//window.alert(" jnfjdsfjkscolmatches" +colmatches + "  y " + yy + "  x " + col + " colarr:"+colArr+"  rowarr:"+rowArr[0].match(/\d/g)) ;
			rowmatches = 0;
			nextstep = false;
			nextstepr = false;
		}
		// 2 case there were two rows and user choose 2 , left and write
		if (e.keyCode == 50 &&  !nextstep &&  nextstepr){
			$('td.focused').removeClass('focused');
			var yy = parseInt(rowArr[rowArr.length-1].match(/\d/g)); // row only number
			$("td.focusable.col"+col+".row"+yy).focus().addClass('focused');
			//window.alert(" colmatches" +colmatches + "  y " + yy + "  x " + col + " colarr:"+colArr+"  rowarr:"+rowArr) ;
			rowmatches = 0;
			nextstep = false;
			nextstepr = false;
		}
	});
	// extra mouse over
	$('td').mouseover(function () {
	    $(this).siblings().css('background-color', '#EAD575');
	    var ind = $(this).index();
	    $('td:nth-child(' + (ind + 1) + ')').css('background-color', '#EAD575');
	});
	$('td').mouseleave(function () {
	    $(this).siblings().css('background-color', '');
	    var ind = $(this).index();
	    $('td:nth-child(' + (ind + 1) + ')').css('background-color', '');
	});

	var nextstep = false, nextstepr = false;
	//table length
	var TLength = document.getElementById("uml").rows.length;
	// init
	$('.focused').focus();

	//close window
	function closeCurrentPage() { open(location, '_self').close();
	} 

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
	    	col = parseInt(colArr[0].match(/\d/g))-1; // col only number -1
	    	yy = parseInt(rowArr[0].match(/\d/g)); // row only number 
	        if(col != 0){ // checking only col and with zero because we are going left
	 	        if (rowmatches == 1){
	 	        	nextArray = $("td.col"+col+".row"+yy).attr("class").split(' ');
	 	        	if (nextArray.includes("focusable")) {
	 	        		active = $('td.focused').removeClass('focused');
						$("td.focusable.col"+col+".row"+yy).focus().addClass('focused');
	 	        	} else {
	 	        		window.alert("No more elements on the left, press Enter to continue.");
	 	        	}
					rowmatches = 0;
				}
				if (rowmatches == 2 || rowmatches == 3){
					//window.alert("I'm in two || three :  " + rowArr);
					var nextRowMatches = 0;
					// checking which next cells (row) are focusable
					for (var j in rowArr) 
					{
						//window.alert("rowArrJ:  "+rowArr[j])
						row = parseInt(rowArr[j].match(/\d/g)); // row only number
						nextArray = $("td.col"+col+".row"+row).attr("class").split(' ');
							if (nextArray.includes("row"+row) && nextArray.includes("focusable")) {
								//window.alert("nextArray:  "+nextArray);
								//rowArr.push(nextArray[i]);
								nextRowMatches++;
								yy = row;
							}
			
						//window.alert(" colmatches" +colmatches + "  y " + yy + "  x " + col + " colarr:"+colArr+"  rowarr:"+rowArr);							
					}

					//window.alert(rowArr + "  NRM "+ nextRowMatches);
					if(nextRowMatches == 2){
						nextstepr = true;
						window.alert(" There are two elements to visit on the left please choose 1 or 2");
						
					}
					else if (nextRowMatches == 1) {
						$('td.focused').removeClass('focused');
						$("td.focusable.col"+col+".row"+yy).focus().addClass('focused');
						rowmatches = 0;
					}
					else {
						window.alert("No more elements on the left, press Enter to continue.");
					}
					nextRowMatches = 0;
				}//end of rowmatches = 2 3       	
	        }
	        else{ // col = 0 does not exist
	        	window.alert("No more elements on the left, press Enter to continue.")
	        }
	    }
	    if (e.keyCode == 39 ) { // right
	    	//window.alert(colArr);
	    	col = parseInt(colArr[colArr.length-1].match(/\d/g))+1; // col only number +1
	    	//window.alert(col);
			yy = parseInt(rowArr[rowArr.length-1].match(/\d/g)); // row only number
			//window.alert(parseInt($("table > tbody > tr:nth-child(2) > td").length)) //can be used for a function to find max
			//window.alert ($('td.focused').is("td:last"));
	        if(col <= 6){ // So wrong WRITE a FUNCTION
	        	//window.alert(rowmatches);
	        	if (rowmatches == 1){
	        		//window.alert("I'm in two || three :  "+ rowarr);
	        		nextArray = $("td.col"+col+".row"+yy).attr("class").split(' ');
	        		if (nextArray.includes("focusable")) {
	 	        		active = $('td.focused').removeClass('focused');
						$("td.focusable.col"+col+".row"+yy).focus().addClass('focused');	
	 	        	} else {
	 	        		window.alert("No more elements on the right, press Enter to continue.")
	 	        	}
					//window.alert(" colmatches" +colmatches + "  y " + yy + "  x " + col + " colarr:"+colArr+"  rowarr:"+rowArr);
					rowmatches = 0;
					//window.alert(col);
				}
				if (rowmatches == 2 || rowmatches == 3){
					//window.alert("I'm in two || three :  " + rowArr);
					var nextRowMatches = 0;
					// checking which next cells (row) are focusable
					for (var j in rowArr) 
					{
						//window.alert("rowArrJ:  "+rowArr[j])
						row = parseInt(rowArr[j].match(/\d/g)); // row only number
						nextArray = $("td.col"+col+".row"+row).attr("class").split(' ');
						
							if (nextArray.includes("row"+row) && nextArray.includes("focusable")) {
								//window.alert("nextArray:  "+nextArray);
								//rowArr.push(nextArray[i]);
								nextRowMatches++;
								yy = row;
							}
			
						//window.alert(" colmatches" +colmatches + "  y " + yy + "  x " + col + " colarr:"+colArr+"  rowarr:"+rowArr);							
					}

					//window.alert(rowArr + "  NRM "+ nextRowMatches);
					if(nextRowMatches == 2){
						nextstepr = true;
						window.alert(" There are two elements to visit on the right please choose 1 or 2");
						
					}
					else if (nextRowMatches == 1) {
						$('td.focused').removeClass('focused');
						$("td.focusable.col"+col+".row"+yy).focus().addClass('focused');
						rowmatches = 0;
					}
					else {
						window.alert("No more elements on the right, press Enter to continue.");
					}
					nextRowMatches = 0;
				}
	        }
	        else{
	        	window.alert("No more elements on the right, press Enter to continue.")
	        }
	    }	    
	    //Up 38
	    if (e.keyCode == 38) {
	    	xx = parseInt(colArr[0].match(/\d/g)); // col only number
			row = parseInt(rowArr[0].match(/\d/g))-1; // row only number -1
	    	if (row > 0){
		    	if (colmatches == 1){
		    		nextArray = $("td.col"+xx+".row"+row).attr("class").split(' ');
	 	        	if (nextArray.includes("focusable")) {
						active = $('td.focused').removeClass('focused');
						$("td.focusable.col"+xx+".row"+row).focus().addClass('focused');
					} else {
						window.alert("No more elements up, press Enter to continue.");
					}
					colmatches = 0;
				}
				if (colmatches == 2 || colmatches == 3) {
					var nextColMatches = 0;
					for (var j in colArr) {
						col = parseInt(colArr[j].match(/\d/g)); // col only number
						nextArray = $("td.col"+col+".row"+row).attr("class").split(' ');
						if (nextArray.includes("col"+col) && nextArray.includes("focusable")) {
								//window.alert("nextArray:  "+nextArray);
								//rowArr.push(nextArray[i]);
								nextColMatches++;
								xx = col;
							}
					}

					if (nextColMatches ==2){
						nextstep = true;
						window.alert(" There are two elements to visit Up please choose 1 or 2");
					}
					else if (nextColMatches ==1) {
						$('td.focused').removeClass('focused');
						$("td.focusable.col"+xx+".row"+row).focus().addClass('focused');
						colmatches = 0;
						}
					else {
						window.alert("No more elements up, press Enter to continue.");
					}
					nextColMatches = 0;
				}
			}
			else{
	        	window.alert("No more elements up, press Enter to continue.");
	        }
		}
	    //down 40
	    if (e.keyCode == 40) {
	    	xx = parseInt(colArr[colArr.length-1].match(/\d/g)); // col only number
			row = parseInt(rowArr[rowArr.length-1].match(/\d/g))+1; // row only number +1
	    	if (row <= TLength){
		    	if (colmatches == 1){
		    		nextArray = $("td.col"+xx+".row"+row).attr("class").split(' ');
	 	        	if (nextArray.includes("focusable")) {
						active = $('td.focused').removeClass('focused');
						$("td.focusable.col"+xx+".row"+row).focus().addClass('focused');
					} else {
						window.alert("No more elements down, press Enter to continue.");
					}

					colmatches = 0;
				}
				if (colmatches == 2 || colmatches == 3) {
					var nextColMatches = 0;
					for (var j in colArr) {
						col = parseInt(colArr[j].match(/\d/g)); // col only number
						nextArray = $("td.col"+col+".row"+row).attr("class").split(' ');
						if (nextArray.includes("col"+col) && nextArray.includes("focusable")) {
								//window.alert("nextArray:  "+nextArray);
								//rowArr.push(nextArray[i]);
								nextColMatches++;
								xx = col;
							}
					}

					if (nextColMatches ==2){
						nextstep = true;
						window.alert(" There are two elements to visit below please choose 1 or 2");
					}
					else if (nextColMatches ==1) {
						$('td.focused').removeClass('focused');
						$("td.focusable.col"+xx+".row"+row).focus().addClass('focused');
						colmatches = 0;
						}
					else {
						window.alert("No more elements down, press Enter to continue.");
					}
					nextColMatches = 0;	
				}
			}
			else{
	        	window.alert("No more elements down, press Enter to continue.");
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


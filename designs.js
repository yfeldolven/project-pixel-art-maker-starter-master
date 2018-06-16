// calling the makeGrid() function when u click submit and preventDefualt 
$('#sizePicker').on("submit", function(ggg) {
        ggg.preventDefault();
        makeGrid();    });
// putts the user argumnts into table function
function makeGrid (){
var in1= $('#input_height').val();
var in2= $('#input_width').val();
$("#pixel_canvas").html(table(in1,in2));  }

//the table as function take arguments to make the table
function table(c,r){
var tt="";
for (var col=1; col<=c; col++){ tt +="<tr>";
	for (var row=1 ; row<=r ; row++){ tt += "<td></td>"; 
}tt += "</tr>";}return tt;}

	//the default color
var userColor=$("#colorPicker").val();
// when the color change
$("#colorPicker").change(function() {
	userColor= $("#colorPicker").val();    })
//creating event & function to change color of each cell using target method 
$( "#pixel_canvas" ).click(function( ggg ) {
	if ( $( ggg.target ).is("td") ){
$( ggg.target ).html($(ggg.target).css("background-color", userColor)) ;  }  }); 
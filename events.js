var name;
var field;
var ctx;
var delta = 20;
$(document).ready(function() {
	$("#loginbtn").click(function(e){
		login(e)
	});
	var up = 38;
	var down = 40;
	var left = 37;
	var right = 39;
	$(window).keydown(function(e) {
       var key = e.which;
       if (key < 41 && key > 36){
       		while (key == up){
       			$.delay(200);
       			Player.y = Player.y - delta;
       		}
       		while (key == down){
       			$.delay(200);
       			Player.y = Player.y + delta;
       		}
       		while (key == left){
       			$.delay(200);
       			Player.y = Player.x - delta;
       		}
       		while (key == right){
       			$.delay(200);
       			Player.y = Player.x + delta;
       		}
       }
   });
});
function canvasDraw(){
	field = document.getElementById("field");
	ctx = field.getContext('2d');
	var fieldImage = new Image();
	fieldImage.src = "field.png";
	ctx.drawImage(fieldImage, 0, 0, 340, 220);
}
function login(e){
	e.stopPropagation();
	e.preventDefault();
	var theName = $('#loginForm').serializeArray();
	console.log(theName[0].value);
	if (theName[0].value == ""){
		alert("Please Type a Name, Douche.");
	}
	else{
		name = theName.value;
		submitCharacter();
		$("#login").slideUp();
		$("#login").fadeOut(200);
		$("#header").delay(200).fadeIn(200);
		$("#field").delay(200).fadeIn(200);
		canvasDraw();
	}
	
}
function submitCharacter(){
	addUser(name);
}
/*
while(true){
	//fetch
	$json = getDrawData();
	//draw
	ctx.drawImage("ball.png",$json.ball.x, $json.ball.y);
	$.each($json.red,function(index,value){
		ctx.drawImage("red_" + value.action + ".png", value.x, value.y);
		ctx.fillText(value.id,x,y);
	});
	$.each($json.blue,function(index,value){
		ctx.drawImage("blue_" + value.action + ".png", value.x, value.y);
		ctx.fillText(value.id,x,y);
	});
}
*/


function Player() {
	var name;
	var x;
	var y;
	var action;
}

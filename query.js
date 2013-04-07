
/**
 * LIST OF SERVER COMMANDS:
 *
 * POST
 * adduser -- adds user with id (default position, team, etc set on server)
 * pos -- sets the position (id sent as cookie)
 *
 * GET
 * all -- returns all data
 * teamsize -- returns the size of each team
 */

/**
 * player has:
 * 		id
 * 		x, y
 * 		direction
 * 		action
 */

var gameurl = "http://soccerfuntimego.mattcorallo.com/game";

//
//
//
function addUser(id) {
	$.ajax({
		url:gameurl,
		data: {
			cmd: "adduser",
			name: id
		},
		type: 'POST',
		statusCode: {
			503: function() {
				console.log("Server is currently down.");
			}
		}
	}).done(function() {
		console.log("User added");
	});
}

//
// Sends the x and the y position to the url
//
function sendPosition(newX, newY) {
	$.ajax({
		url:gameurl,
		data:{
			cmd:"pos",
			x: newX,
			y: newY
		},
		type:'POST',
		statusCode: {
			503: function() {
				console.log("Server is currently down.");
			}
		}
	}).done(function() {});
}

//
//
//
function sendAction(act) {
	$.ajax({
		url:gameurl,
		data: {
			cmd:"action",
			action: act
		},
		type:'POST'
	}).done(function() {});
}


//
// Gets a current snapshot of the game
// returns
// 	{
// 		ball: {x: 123, y: 234},
// 		red: [{id:asdf,x:2,y:3,action:run},{...},{...}],
// 		blue: [{id:asdf,x:2,y:3,action:run},{...}]
// 	}
//
function getDrawData() {
	return getWrapper("all");
}

//
// Gets the count of each team
// returns {red:3,blue:4} (JSON created in string on server)
//
function getTeamCounts() {
	return getWrapper("teamsize");
}










function getWrapper(command) {
	$.ajax({
		url:"http://soccerfuntimego.mattcorallo.com/game",
		data:{
			cmd:command
		},
		type:'GET',
		statusCode: {
			503: function() {
				console.log("Server is currently down.");
			}
		}
	}).done(function() {
		console.log("Request completed");
	});
}

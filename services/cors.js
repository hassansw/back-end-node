module.exports = function cors(req, resp, next){ //Defining the format of The json POst data
    //Allow or specify the server to recieve requests from like: localhost:3000
	resp.header('Access-Control-Allow-Origin', '*')
	resp.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	next()
}

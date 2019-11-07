/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */

var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

// Controller
var auth = require('./controllers/auth')
var message = require('./controllers/message')
var course = require('./controllers/course')
var teachCourse = require('./controllers/teacher_enr')
var getTeacher = require('./controllers/get_teachers')
var studentApply = require('./controllers/stud_enr')
var studentDash = require('./controllers/studentDash')
var studentEnrolledCourses = require('./controllers/studentEnrolledCourses')
var studentProfile = require('./controllers/user_profile')
var teacherCourses = require('./controllers/teacherCourses')
var teacherProfile = require('./controllers/teacherProfile')


// Services
var checkAuthenticated = require('./services/checkAuth')
var cors = require('./services/cors')

// Attempt to connect to server...

var server = app.listen(5000, function () {
	console.log('Server Launched ', server.address().port)
})

// Connection to Database...
// mongoose.connect("mongodb://hannu:abc123@ds139939.mlab.com:39939/student_reg", function(error){
mongoose.connect('mongodb://localhost:27017/test', function (error) {
	if (!error) {
		console.log('connected')
	} else {
		console.log('An Error Occured')
	}
})

// Middleware
app.use(bodyParser.json()) // Specifying the type of data to send and recieve :for Now JSON
app.use(cors)

// User progress-striped
app.post('/auth/register', auth.register)
app.post('/auth/login', auth.login)

// Message post: save messages to MongoDB Database
app.post('/api/message', message.post)
// Message Retrieve and Send to browser...
app.get('/api/message', message.get) // Retrieve data from MongoDB using getMessages() : function

app.get('/api/getTeachers', getTeacher.get) // Retrieve data from MongoDB using getMessages() : function

app.post('/api/course', course.post) // Add Course to database

app.post('/api/techCourse', teachCourse.post)
app.get('/api/techCourse', teachCourse.get)

app.get('/api/studentApply', studentApply.get)
app.post('/api/studentApply', studentApply.post)

app.get('/api/studentDash', studentDash.get)
app.post('/api/studentDash', studentDash.post)

app.get('/api/studentEnrolledCourses', studentEnrolledCourses.get)
app.post('/api/studentEnrolledCourses', studentEnrolledCourses.post)

app.get('/api/studentProfile', studentProfile.get)
app.post('/api/studentProfile', studentProfile.post)

app.get('/api/teacherProfile', teacherProfile.get)
app.post('/api/teacherProfile', teacherProfile.post)

app.get('/api/teacherCourses', teacherCourses.get)
app.post('/api/teacherCourses', teacherCourses.post)

app.get('/api/teacherStudent', studentDash.getEnrolledCourses)

app.post('/api/teacherResponse', teacherCourses.manage)

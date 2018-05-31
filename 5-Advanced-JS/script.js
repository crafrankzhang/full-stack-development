
/*
var john = {

	name : 'John',
	yearOfBirth: 1990,
	job : 'teacher'
};


var Person = function(name, yearOfBirth, job){

	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	this.calculateAge = function(){
		console.log(2016 - this.yearOfBirth);
	}
}
Person.prototype.calculateAges = function(){

console.log(2018 - this.yearOfBirth);
};

var john = new Person('John' , 1990 , 'teacher');
john.calculateAge();

john.calculateAges();


*/
/*
var personProto = {

	calculateAges: function(){
		console.log(2019 - this.yearOfBirth);
	}

};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1996;
john.job = 'teacher';

var jane = Object.create(personProto, {


name: {value : 'Jane'},
year : {value : 1996},
job : {value : 'developer'}

});

*/
/*

var years = ['1992','1223','2342','2343'];

function arrayCalc(arr , fn){

var arrRes = [];

for ( var i = 0; i < arr.length; i++ ){
	arrRes.push(fn.(arr[i]));
}

return arrRes;
}

function calculateAge(el){
	return 2018 - el ;

}

var ages = arrayCalc(years , calculateAge);

console.log(ages);

*/

/*
function interviewQuwstion(job){
	if (job === 'designer'){
		return function(name){
			console.log(name + 'can you design ios ?');
		}
	} else if (job === 'teacher'){
		return function(name){
			console.log(name + 'what sujbeact you teach?');

		}
	}else {


		return function(name){

			console.log('hello' + name + 'what do you do ?');
		}
	}




}

var teacherQuestion = interviewQuwstion('teacher');

var desinerQuetion = interviewQuwstion('designer');


teacherQuestion('ekn');
desinerQuetion('kk');


interviewQuwstion('teacher')('mark');

*/

//lecture : IFEE  for data parivacy 

/*
function game(){

	var score = Math.random();
	console.log(score);
}

games();

(function (){
	var score = Math.random();
	console.log(score);

})();


(function (goodluck){
	var score = Math.random();
	console.log(score - goodluck);

})(5);

*/

// lecture : closures

/*

function interviewQuwstion(job){

	return function (name){
	if (job === 'designer'){
		
			console.log(name + 'can you design ios ?');
		
	} else if (job === 'teacher'){
		
			console.log(name + 'what sujbeact you teach?');

		
	}else {


		

			console.log('hello' + name + 'what do you do ?');
		
	
}
	}

*/

/*
//lecture : Bind  call apply
 

 var john = {
 	 name : 'john',
 	 yearOfBirth: 1990;
 	 job: 'teacher',
 	 presention : function(style , formmm){
 	 	console.log(style,formmm);
 	 }

 };

 var emil = {
 	name: 'emil',
 	yearOfBirth: 1990,
 	job:'cook'
 };

 john.presention.call(emil , 'sss','ssss');
 john.presention.apply(emil , 'sss','ssss');
  var johnfr = john.presention.bind('john','sss');
  johnfr('asd');



ar years = ['1992','1223','2342','2343'];

function arrayCalc(arr , fn){

var arrRes = [];

for ( var i = 0; i < arr.length; i++ ){
	arrRes.push(fn.(arr[i]));
}

return arrRes;
}

function calculateAge(el){
	return 2018 - el ;

}

function isFullAge(limit,el){
	return el >= limit;
}

var fullJapan = arrayCalc(years , isFullAge.bind(this , 20));

*/

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


var Question =function (question , answer1, answer2, correctAnswer) {

	this.question = question;
	this.answer1 = answer1;
	this.answer2 = answer2;
	this.correctAnswer = correctAnswer;


}


var q1 = new Question('whether usc has the best cs institute in the usa','definitely','may be' , 0);
var q2 = new Question('whether usc has the best quality of students\' resourse', 'of course ', 'not sure ', 0);
var q3 = new Question('whether usc has the top repution in the world ','yes','no',0);

var arr = [q1 , q2 , q3];


var ad = true ;

var value = 0;

while (ad){



var key = Math.floor( Math.random() * 3);

console.log(arr[key].question ,'0  ' + arr[key].answer1  , '1  ' + arr[key].answer2);

an = prompt('input the correct answer');

if ( an == arr[key].correctAnswer ){

	console.log( ' Correct !')
	value ++;
	console.log('current score :' + value);
}else {

	console.log('Wrong!');
	console.log('current score :' + value);
}
 console.log('------------------------------------');

(an == 'exit') ? ad = false : ad = true ;




}










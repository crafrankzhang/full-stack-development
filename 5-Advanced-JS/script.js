
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




//console.log('Hello World');

/*
var name = 'john';

var lastName = 'smith';
*/

//var fullAge =  true;

/*
var name = 'John';

var age = 26;
 console.log(name + age);


 var job, isMarried;

 job = 'teacher';
 isMarried = false;

 console.log(name + ' ' + age + ' ' + job + ' ' + isMarried);

 var lastName = prompt('What is the last name ?');

 console.log(lastName);

 alert(name + ' ' + age + ' ' + job + ' ' + isMarried);
 */




/*
var name = 'john';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes'){
	console.log(name + 'is Married');
} else {
	console.log(name + 'will marry soon');
}



isMarried = false;

if (23 == '23'){
	console.log('supporting type cercoin');
}

if (23 === '23'){
	console.log('supporting type cercoin');
}


var job= 'teachet';

switch(job){

case 'teacher':
              console.log('John teachets kids');break;
case 'driver':
               console.log('John drives a car');break;

default: 
            console.log('john is else position');

}

*/





/*

var name1 = 'John';
var johnAge = prompt(' input john age ');
var johnHeight = prompt(' input john height ');

var name2 = 'Sam';
var samAge = prompt(' input Sam age ');
var samHeight = prompt(' input sam height ');

var name3 =  'Tim';
var timAge = prompt(' input tim age ');
var timHeight = prompt(' input Tim age ');

score1 = johnAge * 5 + johnHeight;
score2 = samAge * 5 + samHeight;
score3 = timAge * 5 + timHeight;

var key;

if (score1 === score2 && score1 === score3){
	key = 'a';
} else if (score1 === score2 && score1 !=score3) {

	key ='b';

} else if (score1 === score3 && score1 != score2){
	key ='c';
}else if (score2 === score3 && score2 != score1){
	key ='d';
}else{
	key = 'e';
}

switch(key){

case 'a': console.log('all wins');break;
case 'b': if(score1 > score3){console.log('john and sam win');}
          else{console.log('Tim wins');};break;

case 'c':if(score1 > score2){console.log('john and tim win');}
          else{console.log('sam wins');};break;
case 'd': if(score2> score1){console.log('Tim and sam win');}
          else{console.log('john wins');};break;
 case 'e':if(score1>score2){  
 	if (score1>score3)
 	console.log('john wins');
else 
	console.log('tim wins');

}
else{
	if (score2 > score3)
		console.log('sam wins');
	else 
		console.log('tim wins');
}


}


*/



//lecture : function

/*
function calculateAge(yearOfBirth){
	var age = 2018 - yearOfBirth;
	return age;


}


var ageJohn = calculateAge(1996);

console.log(ageJohn);

function yearsUntilRetirement(name , year){

	var age = calculateAge(year);
	var retirement = 65 - age;
	console.log(retirement);


}

yearsUntilRetirement('john' , 1996);

// expression and statement

/*

var fun = function(par){

	//code
}

*/


/*

var name = ['tim','sam','nimk'];

var years = new Array(1996,1997,1998);


var john = ['john','kini',1996, 'teacher',false];

john.push('blue');//add  elelmet at the end of an array

john.unshift('Mr.');// add element at the front of  an array

john.pop();// remove elemey at the end of an array


john.shift();//remove elemet at the fornt of an array

john.indexOf('kini'); // find the specific element's position  if not find the function will return -1

var ken = {
	name: 'ken',
	lastName: 'sim',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried:false
};

console.log(ken.lastName);
console.log(ken['lastName']);
console.log(ken);
var xyz= 'job';
console.log(ken[xyz]);


var jane = new Object();

jane .name = 'jane';

jane.lastName = 'kenj';
jane['yearOfBirth']= 1996;

jane.job = 'desinger';

jane['isMarried']=false;


console.log(jane);


*/



/*

var ken = {
	name: 'ken',
	lastName: 'sim',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried:false,
    family:['john','nike','cool'],
    calculateAge: function(yearOfBirth){
    	return 2018 - yearOfBirth;
    } // return 2018 - this.yearOfBirth

};



console.log(ken);

ken.age = ken.calculateAge(1990);

console.log(ken);

*/



/*
var ken = {
	name: 'ken',
	lastName: 'sim',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried:false,
    family:['john','nike','cool'],
    calculateAge: function(){
    	this.age = 2016 - this.yearOfBirth;
    } // return 2018 - this.yearOfBirth

};


*/
/*

for (var i = 0; i < 10; i ++){

	console.log(i);
}
*/

/*
var name1 = ['john','knk','asd','noinoi'];

 for(var i =0; i < name1.length; i++){
 	console.log(name1[i]);
 }

for (var i = name1.length-1; i >= 0; i--){
	console.log(name1[i]);
}

*/

var years1 = ['18','23','15','25','20'];

var years2 = [];

var i = 0;

while(i < years1.length){

	years2[i] = years1[i];
	i++;
}

for(var i = 0; i < years2.length; i++){

	if(years2[i] >= 18 )
	{
		console.log(years2[i]);
	}
}























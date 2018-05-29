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


































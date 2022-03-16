{
  /* <head>
	<script 1 async>
	<script 2 defer>
	<script 3>
</head>
<body>

	<script 4>
</body>


Window.onload

Cookies, sessionStorage, localStorage

Semantic Tags



Display: inline, block, inline-block

Width
Height
Padding
Margin

Position:  relative, absolute, fixed, sticky
















<body>
	<div class=”mydiv”>
		<span class=”myspan” id=”span1”>this is span text</span>
	</div>
</body>


div span{
Color: red;
}
.mydiv .myspan{
Color: yellow;
}
div .myspan{
Color: blue;
}
.myspan{
Color: lightblue;
}

.mydiv{
	Display:flex;
Justify-content:center;
Align-items:center;
Transform : translate(0,50%);
height:”100vh”
}



Tags > id > class


console.log(myFunc)//undefined
myFunc()//undefined
var myFunc = function(){
	console.log('inside func')
}






myvar

null, undefined, object, array

if(myvar == undefined){
	console.log(
if(Array.isArray(myvar)){
	console.log(“is an array”)
}else if(typeof myvar === “
'23' === 23
== &  === */
}

// function Person(name) {
//   this.name = name;
// }

// var p1 = new Person("arpit");
// var p2 = Person("arpit");

// console.log(p1, p2); //{name: 'arpit'},

// this={
// name:'arpit'|
// }

function Person(name) {
  this.name = name;
  this.sayName1 = function () {
    console.log(this.name);
  };
  this.sayName2 = () => {
    console.log(this.name);
  };
}

var p1 = new Person("arpit");
p1.sayName1(); //arpit
p1.sayName2(); //arpit

var p2 = new Person("Suhaas");
p1.sayName1.bind(p2)(); //Suhaas
p1.sayName2.bind(p2)(); //arpit

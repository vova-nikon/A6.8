function init() {
	$("#plus-one").click(plusOne);;
	$("#plus-three").click(plusThree);
	$("#plus-seven").click(plusSeven);
};

let width = 0;

function plusOne() {
	$("#my-progress-bar").attr("style", "width:" + ++width +"%");
	console.log(width + "%")
};

function plusThree() {
	for(let i = 0; i < 3; i++){
		plusOne()
	}
}

function plusSeven() {
	for(let i = 0; i < 7; i++){
		plusOne()
	}
}

$("document").ready(init);


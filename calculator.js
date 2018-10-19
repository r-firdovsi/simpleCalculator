let buttOns;

let inPut1 = document.getElementById("input1");
let inPut2 = document.getElementById("input2");
let inputVal1;
let inputVal2;

let a;
let b;
let c;

let topla = document.getElementById("btun10");
let cix = document.getElementById("btun11");
let vur = document.getElementById("btun12");
let bolme = document.getElementById("btun13");

let showOperation = document.getElementById("showoperation");
let resultOp = document.getElementById("result");

setInterval(check,1000);


function change(numberId) {

	buttOns = document.getElementById("btun" + numberId);

	if (buttOns == topla) {
		showOperation.innerHTML = "+";
		topla.name = "topla";

		cix.name = "";
		vur.name = "";
		bolme.name = "";
	}else if (buttOns == cix) {
		showOperation.innerHTML = "-";
		cix.name = "cix";

		topla.name = "";
		vur.name = "";
		bolme.name = "";
	}else if (buttOns == vur) {
		showOperation.innerHTML = "*";
		vur.name = "vur";

		topla.name = "";
		cix.name = "";
		bolme.name = "";
	}else if (buttOns == bolme) {
		showOperation.innerHTML = "/";
		bolme.name = "bolme";

		topla.name = "";
		cix.name = "";
		vur.name = "";
	};
};

function check() {
	if (inPut2.value !== "" && inPut2.value !== "0") {
		document.getElementById('beraber').disabled = false;
	}
}

function elavEt(numberId,num)  {	
	
buttOns = document.getElementById("btun" + numberId);

	if (topla.name == "topla") {
		inputVal2 = inPut2.value;
		inPut2.value = inputVal2 + num;
	}else if (cix.name == "cix") {
		inputVal2 = inPut2.value;
		inPut2.value = inputVal2 + num;
	}else if (vur.name == "vur") {
		inputVal2 = inPut2.value;
		inPut2.value = inputVal2 + num;
	}else if (bolme.name == "bolme") {
		inputVal2 = inPut2.value;
		inPut2.value = inputVal2 + num;
	}else {
		inputVal1 = inPut1.value;
		inPut1.value = inputVal1 + num;
	};

};


function operation() {

let integera;
let integerb;

	if (topla.name == "topla") {
		a = inPut1.value;
		b = inPut2.value;
		integera = parseInt(a,10);
		integerb = parseInt(b,10);
		inPut1.value = integera + integerb;
		resultOp.innerHTML = integera + integerb;
		inPut2.value = "";
		
	}else if (cix.name == "cix") {
		a = inPut1.value;
		b = inPut2.value;
		integera = parseInt(a,10);
		integerb = parseInt(b,10);
		inPut1.value = integera - integerb;
		resultOp.innerHTML = integera - integerb;
		inPut2.value = "";

	}else if (vur.name == "vur") {
		a = inPut1.value;
		b = inPut2.value;
		integera = parseInt(a,10);
		integerb = parseInt(b,10);
		inPut1.value = integera * integerb;
		resultOp.innerHTML = integera * integerb;
		inPut2.value = "";

	}else if (bolme.name == "bolme") {
		a = inPut1.value;
		b = inPut2.value;
		integera = parseInt(a,10);
		integerb = parseInt(b,10);
		inPut1.value = integera / integerb;
		resultOp.innerHTML = integera / integerb;
		inPut2.value = "";

	}
	document.getElementById('beraber').disabled = true;
};

function clearIng() {
	topla.name = "";
	cix.name = "";
	vur.name = "";
	bolme.name = "";

	inPut1.value = "";
	inPut2.value = "";
	resultOp.innerHTML = "";
	showOperation.innerHTML = " ";
};



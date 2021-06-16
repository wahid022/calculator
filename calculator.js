
var button=document.getElementsByClassName("button");
var display=document.getElementById("display");

var container=document.getElementById("container-outer");

container.style.backgroundColor="grey";

document.body.style.backgroundColor="black";


var operand1=0;
var operand2=null;
var operator=null;


function isOperator(value)
{
	return value=="+"|| value=="-" ||value=="/" || value=="*";
}


for(var i=0;i<button.length;i++)
{
	button[i].addEventListener('click',function()
		{

			var value=this.getAttribute('data-value');
			var text=display.textContent.trim();

			if(isOperator(value))	
			{
				operand1=parseFloat(text);
				operator=value;
				display.textContent="";
			}

			else if(value=="AC")
			{

				display.textContent="";
			}

			else if(value=="+/-")
			{
				operand1=parseFloat(text);
				operand1=-1*(operand1);
				display.textContent=operand1;

			}
			else if(value=="%")
			{
				operand1=parseFloat(text);
				operand1=operand1/100;
				display.textContent=operand1;

			}

			else if(value==".")
			{
 				if(text.length && !text.includes('.'))
 				{
 					display.textContent=text+'.';
 				}
 			}

 			else if(value=="="){
			operand2=parseFloat(text);
			var result=eval(operand1+' '+operator+' '+operand2);
			if(result){
				
				display.textContent=operand1+' '+operator+' '+operand2+'='+result;
				operand1=result;
				operand2=null;
				operator=null;
			}
		}

			else
			{
				display.innerText+=value;
			}

	});

}





var toggle=document.getElementById("mode-switch");
var toggleButton=document.getElementById("button-switch");

var calcContainer=document.getElementById("calculator-container");
var count=0;

toggleButton.addEventListener('click',function()
{

	if(count%2==0)
	{
		toggleButton.style.marginLeft='64%';
		calcContainer.style.backgroundColor='#243447';
		
	}
		
	else
	{
		toggleButton.style.marginLeft='0';
		calcContainer.style.backgroundColor='#E2E0E0';
	}

	count++;

});






// var button=document.getElementsByClassName("button");
// var display=document.getElementById("display");


// var operand1=0;
// var operand2=null;
// var operator=null;


// function isOperator(value)
// {
// 	return value=="+"|| value=="-" ||value=="/" || value=="*";
// }


// for(var i=0;i<button.length;i++)
// {
// 	button[i].addEventListener('keypress',function()
// 		{

// 			var value=this.getAttribute('data-value');
// 			var text=display.textContent.trim();

// 			if(isOperator(value))	
// 			{
// 				operand1=parseFloat(text);
// 				operator=value;
// 				display.textContent="";
// 			}

// 			else if(value=="AC")
// 			{

// 				display.textContent="";
// 			}

// 			else if(value=="+/-")
// 			{
// 				operand1=parseFloat(text);
// 				operand1=-1*(operand1);
// 				display.textContent=operand1;

// 			}
// 			else if(value=="%")
// 			{
// 				operand1=parseFloat(text);
// 				operand1=operand1/100;
// 				display.textContent=operand1;

// 			}

// 			else if(value==".")
// 			{
//  				if(text.length && !text.includes('.'))
//  				{
//  					display.textContent=text+'.';
//  				}
//  			}

//  			else if(value=="="){
// 			operand2=parseFloat(text);
// 			var result=eval(operand1+' '+operator+' '+operand2);
// 			if(result){
				
// 				display.textContent=operand1+' '+operator+' '+operand2+'='+result;
// 				operand1=result;
// 				operand2=null;
// 				operator=null;
// 			}
// 		}

// 			else
// 			{
// 				display.innerText+=value;
// 			}

// 	});

// }




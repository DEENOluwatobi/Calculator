const values = document.getElementById('values');
const buttons = document.querySelectorAll('button');
const allClear = document.getElementById('allClear')
let srnvalues = '';




for(var i=0;i<buttons.length;i++){
	buttons[i].addEventListener('click',(e) =>{
		var numberEntered = e.target.innerHTML;
		if(numberEntered == 'AC'){
			values.value = '';
			srnvalues = values.value;
		}else if(numberEntered == 'DEL'){
			values.value = values.value.toString().slice(0, -1);
			srnvalues = values.value;
		
		}else if(numberEntered == '='){
			values.value = eval(srnvalues)
		}else { 
			srnvalues+=numberEntered;
			values.value = srnvalues
		}

	})
}	

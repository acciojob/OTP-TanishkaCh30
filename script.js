let boxes = document.querySelectorAll(".code");

boxes.forEach((box,index) =>{
	box.addEventListener("input" , () =>{
		if(box.value){
			if(index<boxes.length){
				boxes[index+1].focus();
			}
		}
	})

	box.addEventListener("keydown",(e) =>{
		let pressedKey = e.key;
		if(pressedKey==='Backspace'){
			e.preventDefault();
			box.value=" ";
			if(index>0){
			boxes[index-1].focus();
			}
		}
	})
})


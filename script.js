// let boxes = document.querySelectorAll(".code");
// boxes[0].focus()
// boxes.forEach((box,index) =>{
// 	box.addEventListener("input" , () =>{
// 		if(box.value){
// 			if(index<boxes.length){
// 				boxes[index+1].focus();
// 			}
// 		}
// 	})

// 	box.addEventListener("keydown",(e) =>{
// 		let pressedKey = e.key;
// 		if(pressedKey==='Backspace'){
// 			e.preventDefault();
// 			box.value="";
// 			if(index>0){
// 			boxes[index-1].focus();
// 			}
// 		}
// 	})
// })


 let inputs = document.querySelectorAll(".code");

    inputs[0].focus();

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", () => {
        if (inputs[i].value.length === 1 && i < inputs.length - 1) {
          inputs[i + 1].focus();
        }
      });
      inputs[i].addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && inputs[i].value === "" && i > 0) {
          inputs[i - 1].value = ""; 
          inputs[i - 1].focus();
        }
      });
    }


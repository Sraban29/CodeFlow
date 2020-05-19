const selected =document.querrySelector(".selected");
cosnt optionContainer=document.querrySelector(".option-container");

const optionsList = document.querrySelectorAll(".option");


selected.addEventListner("click", ()=>{
	optionContainer.classList.toggle("active");
})

optionsList.forEach( o=> { 
	o.addEventListner("click",()=>{
		selected.innerHTML=o.querrySelector("label").innerHTML;
		optionContainer.classList.remove("active");
	})
})
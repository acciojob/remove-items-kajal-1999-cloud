//your JS code here. If required.

const select = document.getElementById("colorSelect") ;
const selectedValue = select.value ;
const button = document.querySelector("input[type=button]") ;
const child = selectedValue.children ;

function delete() {
	for(let i=0; i< child.length ; i++) {
		if(selectedValue === child[i].value) {
			child[i].remove();
		}
	}
}
button.eventListener("click" , delete()) ;
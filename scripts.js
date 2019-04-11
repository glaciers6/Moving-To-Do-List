// store data
var List = (JSON.parse(localStorage.getItem("Data")) || [])

// create
function createItem() {
	var newItem = {text: window.prompt("Enter Activity In Chronological Order"), style: "none"}
	List.push(newItem)
	localStorage.setItem("Data", JSON.stringify(List))
	printItem(newItem)
} 
// print item
function printItem(Activity) {
	var p = document.createElement("p")
	p.innerHTML = Activity.text
	p.className = Activity.style
	p.onclick = function() {
		this.className = Activity.style = (this.className=="none") ? "strike" : "invisible"
		localStorage.setItem("Data", JSON.stringify(List))
	}
	document.getElementById("myDiv").appendChild(p)
}

// loop and print list
for (x=0; x < List.length; x++) {printItem(List[x])}
console.log(document);
console.log(document.getElementById("ptag"))
let element = document.getElementById("ptag");
element.innerText = "javascript";
let button = document.getElementById("buttonTag");
button.onclick = buttonClicked;
let input = document.getElementById("inputTag")
let ol = document.getElementById("olTag");
let data = [];
/**
 * Every time the button is clicked, take the
 * current contents of the input box,
 * and add them to the array. Then, display
 * the array on the site... somehow
 */
function buttonClicked(){
// take value from input box
    let value = input.value;
    console.log(value);
// put value in the array
    data.push(value);
    console.log(data);
    populateList();
}


function populateList(){
    ol.innerHTML = "";
    // for every item in the data array,
    // create a new html element
    // set its internal text value to the data value
    // append the new html to the ol list
    for(let item of data){
        let listItem = document.createElement("li");
        listItem.innerText = item;
        ol.appendChild(listItem);
    }

    data.forEach(() => {
        console.log("printing item: "+item)
    });

}
let printItem = () => {
    console.log("printing item: "+item)
}

let arrowFunc = () => {
    // this is the exact same thing as writing the function above
}
let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];
let groceryListContainerEle = document.getElementById("groceryListContainer");

groceryListContainerEle.style.backgroundColor = "#03254c";
groceryListContainerEle.style.height = "100vh";

let headingEle = document.createElement("h1");
headingEle.textContent = "Grocery List";
headingEle.classList.add("grocery-heading", "text-center", "p-5");
headingEle.style.color = "#ffffff";
headingEle.style.fontFamily = "Roboto";
groceryListContainerEle.appendChild(headingEle);


let listContainerElement = document.createElement("div");
listContainerElement.classList.add("list-container");
groceryListContainerEle.appendChild(listContainerElement);

let unorderedListEle = document.createElement("ul");
unorderedListEle.classList.add("unordered-list-cotainer");
listContainerElement.appendChild(unorderedListEle);

for(let x of groceryList){
    let listItemsEle = document.createElement("li");
    listItemsEle.textContent = x;
    unorderedListEle.appendChild(listItemsEle);

}



 
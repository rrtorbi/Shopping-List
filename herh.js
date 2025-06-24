var inputEl = document.getElementById("input");
var enterEl = document.querySelector("button");
var uiEL = document.querySelector("ul");

function clickEvent(){
    if(inputEl.value.length > 0){
        createElement();
    }    
}

function keyEvent(e){
    if(inputEl.value.length > 0 && e.key === "Enter"){
        createElement();
    }
    
}

function createElement(){
    var li = document.createElement("li");
    li.style.cursor = "pointer";
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    li.appendChild(document.createTextNode(inputEl.value + "  "));
    li.addEventListener("click", function strikeText(){
        li.classList.toggle("done");
    })
    btn.addEventListener("click", function delList(e){
        e.stopPropagation();
        if(li.className ==="done"){
        li.remove();
        }
        else{
            alert("Please mark the item as done before deleting.");
        }
    })
    li.appendChild(btn);
    uiEL.appendChild(li);
    inputEl.value = "";


   
}

enterEl.addEventListener("click", clickEvent);
inputEl.addEventListener("keypress", keyEvent);
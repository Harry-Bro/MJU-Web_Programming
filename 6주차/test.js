let todoList = [];

var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", add);

function add() {

    let item = document.getElementById("todo").value;
    if (item != null) {
        document.getElementById("todo").value = "";
        document.getElementById("todo").focus();
        todoList.push(item);
        
        for(let i = 0; i < todoList.length; i++) {
            console.log(todoList[i]);
        }
    }
    showList();
}

function showList() {
    let list = "<ul>";
    for (let i = 0; i < todoList.length; i++) {
        list += "<li>" + todoList[i] + '<button type="button" class="close" id=' + i + '>삭제</button></li>';
    }
    list += "</ul>";
    document.getElementById("listContainer").innerHTML = list;

    let remove = document.getElementsByClassName("close");
    for(let i=0; i < remove.length; i++) {
        remove[i].addEventListener("click", removeList)
    }

}

function removeList() {
    let id = this.getAttribute("id");
    todoList.pop(id);
    showList();
}


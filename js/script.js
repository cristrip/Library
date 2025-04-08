var myLibrary = [{
  "id":1,      
  "title": ' Twenty Thousand Leagues Under the Seas',
  "author": 'Jules Verne',
  "pages": 234,
  "read": 'yes'
 
}];
show(myLibrary)//show the table
function show(myLibrary) {
let tbody = document.getElementById('t_body')
let tableHtml = ''
myLibrary.forEach((obj,index) => {
  tableHtml += `
              <tr>
                  <td>${obj.id}</td>
                  <td>${obj.title}</td>
                  <td>${obj.author}</td>
                  <td>${obj.pages}</td>
                  <td>${obj.read}</td>
                  <td>
                      <button class="but2" onclick= "editT(${+index})">Delete</button>     
                  </td>
              </tr>` 
});
tbody.innerHTML = tableHtml
}
const editT = (index) => {
const obj = myLibrary[index];
var id_remove=obj.id;// the id of the object
myLibrary.splice(myLibrary.findIndex(a => a.id === id_remove.id) , 1)//this will remove the object 
show(myLibrary);
console.log(obj.id)//you can remove this
}
function Book(id,title, author, pages, read) {
  this.id=id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; 
}
document.getElementById("form").onsubmit = function(event) {
  event.preventDefault();
  if (myLibrary.length>0){//reduce must have at least 1 value
    let maxId = myLibrary.reduce((max, min) => max.id > min.id ? max : min);//find the object with the biggest id
    let newId=maxId.id; // find the id of the object
    newId++;//will add to the biggest id (1)
    var id_value = newId;
    }
    else{
        var id_value = 1;// if is empty we will give the number 1
    }
    var title_value = document.getElementById("title").value; 
    var author_value = document.getElementById("author").value; 
    var pages_value = document.getElementById("pages").value; 
    var read_value='';
    if (document.getElementById("read").checked){
        read_value='Yes';
    }
    else{
        read_value='No';
    }
var popup1 = document.getElementById("myPopup");//close the popup
popup1.classList.toggle("show");
var list_n = new Book(id_value, title_value, author_value, pages_value, read_value);
myLibrary.push(list_n);
console.log(myLibrary);
/////////////////////////////////////////////////////////////////////////////////////
show(myLibrary)
};
var but = document.createElement('button');
but.innerText="+ Add new book";
but.className = 'but1';
var butDiv = document.getElementById("but_div");
butDiv.appendChild(but);
but.addEventListener("click", function() {
var popup = document.getElementById("myPopup");
popup.classList.toggle("show");
document.getElementById("title").value=""; 
document.getElementById("author").value=""; 
document.getElementById("pages").value=""; 
});
document.getElementById('close').addEventListener('click', function(){
    var popup1 = document.getElementById("myPopup");
    popup1.classList.toggle("show");
});

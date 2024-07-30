let myLibrary = [];
console.log(myLibrary);
const table = document.querySelector('.table');
function Book(index, title, author, pages, read) {
    this.index = index;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (index + ". " +title + " by " + author + ", " + pages + " pages, " + read);
    }
}

function displayTable() {
    table.innerHTML = "<tr><td>Номер</td><td>Название</td><td>Автор</td><td>Количество страниц</td><td>Статус</td><td>Изменить статус</td><td>Удалить</td></tr>";
    for (let i = 0; i < myLibrary.length; i++) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = ('<td id="number_cell">' + Number(i+1) + "</td><td>" + myLibrary[i].title + "</td><td>" + myLibrary[i].author +  "</td><td>" + myLibrary[i].pages + '</td><td id="status' + i +'">' + myLibrary[i].read) + '</td><td><button onclick = "changeStatus('+ Number(i) +')">Сменить статус</button></td><td><button onclick = "deleteBook(' + Number(i) + ')">Удалить</button></td>';
        table.appendChild(newRow); 
    }
}


function addToTable() {
    const newRow = document.createElement("tr");
    newRow.innerHTML = '<td id="number_cell">' + Number(myLibrary.length+1) +'</td><td><input type="text" id="name_cell"></td><td><input type="text" id="author_cell"></td><td><input type="text" id="page_cell"></td><td><input type="text" id="status_cell"></td><td><button onclick="completeAdding()">Подтвердить</button></td>';
    table.appendChild(newRow);
    
}

function completeAdding() {
    let newBook = new Book(Number(myLibrary.length+1), document.getElementById("name_cell").value, document.getElementById("author_cell").value, document.getElementById("page_cell").value, document.getElementById("status_cell").value);
    myLibrary.push(newBook);
    console.log(myLibrary[myLibrary.length-1].info());
    displayTable();
}

function deleteBook(index) {
    console.log(myLibrary);
    if (index == myLibrary.length-1) {
        myLibrary.pop();
    }
    else {
        let newLibrary = myLibrary.splice(index+1);
        for (let i = index; i < myLibrary.length; i++) {
            myLibrary.pop();
        }
        myLibrary = myLibrary.concat(newLibrary);

    }
    
    console.log(myLibrary);
    displayTable();
}


let theHobbit = new Book(1, "The Hobbit", "J.R.R. Tolkien", "295", "not read yet");
myLibrary.push(theHobbit);
displayTable();


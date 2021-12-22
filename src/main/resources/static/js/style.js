function createBooks() {
    //lấy dữ liệu
    let bookName = $('#nameBook').val();
    let authorBook = $('#authorBook').val();
    let quantityBook = $('#quantityBook').val();
    let newBook = {
        name: bookName,
        author: authorBook,
        quantity: quantityBook
    };
    //gọi ajax
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        data: JSON.stringify(newBook),
        url: "http://localhost:8080/books",
        success: successCreate
    });
    event.preventDefault();
}

function successCreate() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/books/",
        success: function (data) {
            let content2 = '';
            // let content2 = '<input type="text" id="nameBook" placeholder="NameOfBook">\n' +
            //     ' <input type="text" id="authorBook" placeholder="AuthorOfBook">\n' +
            //     ' <input type="text" id="quantityBook" placeholder="QuantityOfBook">\n' +
            //     '<input type="submit" onClick="createBooks()" value="Create">\n';

            let content = '<tr>\n' +
                ' <th>Name:</th>\n' +
                ' <th>Author:</th>\n' +
                '<th>Quantity:</th>\n' +
                ' <th>Borrow</th>\n' +
                ' </tr>\n';
            for (let i = 0; i < data.length; i++) {
                content += getBook(data[i]);
            }
            document.getElementById('books').innerHTML = content;
            document.getElementById('editBook').innerHTML = content2;
        }
    });
    function getBook(book) {
        return `<tr><td>${book.name}</td>` +
            `<td>${book.author}</td>` +
            `<td>${book.quantity}</td>` +
            `<td><button type="submit" className="borrowBooks" onclick="showBorrowBooks(this)" value="${book.id}">Borrow</button></td></tr>`
    }
}

function showBorrowBooks(id) {
    let idBook = id.getAttribute("value");
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "GET",
        url: "http://localhost:8080/cards/" + idBook,
        success: function (data) {
            let content = '<form>\n' +
                '<table>\n' +
                '<caption>BorrowBook</caption>\n' +
                '<tr>\n' +
                '<td><input type="hidden" className="form-control" id="idCard" value="' + data.id + '"></td>\n' +
                '<td><input type="hidden" className="form-control" id="idBook" value="' + data.book.id + '"></td>\n' +
                '<td><input disabled type="text" className="form-control" id="nameBook" value="' + data.book.name + '"></td>\n' +
                '</tr>\n' +
                '<tr>\n' +
                '<td><input disabled className="form-control" type="text" id="authorBook" value="' + data.book.author + '"></td>\n' +
                '<td><input className="form-control" type="text" id="idStudent"></td>\n' +
                '<td><input className="form-control" type="hidden" id="codeCard" value="' + data.code + '"></td>\n' +
                '</tr>\n' +
                '</table>\n' +
                '<button type="submit" value="borrow" onclick="borrowBook()">Borrow</button>\n' +
                '</form>';


                // '<div className="mb-3">\n' +
                // '<label className="form-label"></label>\n' +
                // '<<input type="hidden" className="form-control" id="idCard" value="' + data.id + '"></td>\n' +
                // ' </div>\n' +
                // '<div className="mb-3">\n' +
                // '<label className="form-label"></label>\n' +
                // '<input type="hidden" className="form-control" id="idBook" value="' + data.book.id + '"></td>\n' +
                // '</div>\n' +
                // '<div className="mb-3">\n' +
                // '<label className="form-label">Name of Book</label>\n' +
                // '<input disabled type="text" className="form-control" id="nameBook" value="' + data.book.name + '"></td>\n' +
                // '</div>\n' +
                // '<div className="mb-3">\n' +
                // '<label className="form-label">Author</label>\n' +
                // '<input disabled className="form-control" type="text" id="authorBook" value="' + data.book.author + '"></td>\n' +
                // '</div>\n' +
                // '<div className="mb-3">\n' +
                // '<label className="form-label">Id Student</label>\n' +
                // '<input className="form-control" type="text" id="idStudent"></td>' +
                // '</div>\n' +
                // '<div className="mb-3">\n' +
                // '<label className="form-label"></label>\n' +
                // '<td><input className="form-control" type="hidden" id="codeCard" value="' + data.code + '"></td>\n' +
                // '</div>\n' +
                // '<div className="modal-footer">\n' +
                // ' <button type="submit" className="btn btn-secondary" onclick="borrowBook()">Borrow</button>\n' +
                // '</div>';



            document.getElementById('editBook').innerHTML = content;

        }
    });
    event.preventDefault();
}

function borrowBook() {
    let idBook = $('#idBook').val();
    let nameBook = $('#nameBook').val();
    let authorBook = $('#authorBook').val();
    let newBook = {
        id: idBook,
        name: nameBook,
        author: authorBook
    }
    let idStudent = $('#idStudent').val();
    let newStudent = {
        id: idStudent
    };
    let newCard = {
        book: newBook,
        student: newStudent
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newCard),
        url: "http://localhost:8080/cards",
        error: errorCreate,
        success: successCreate
    });
    event.preventDefault();
}

function errorCreate() {
    window.location = "http://localhost:8080/cards/error"
}

function createStudent() {
    let nameStudent = $('#nameStudent').val();
    let identityStudent = $('#identityStudent').val();
    let newStudent = {
        name: nameStudent,
        identity: identityStudent
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newStudent),
        url: "http://localhost:8080/students",
        success: successCreateStudent
    });
    event.preventDefault()
}

function successCreateStudent() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/students/",
        success: function (data) {
            let content = '    <tr>\n' +
                '        <th>Name</th>\n' +
                '        <th>Identity</th>\n' +
                '        <th>Delete</th>\n' +
                '        <th>Edit</th>\n' +
                '    </tr>';
            for (let i = 0; i < data.length; i++) {
                content += getStudent(data[i]);
            }
            document.getElementById('books').innerHTML = content;
        }
    });
}

function getStudent(student) {
    return `<tr><td>${student.name}</td><td>${student.identity}</td>` +
        `<td><button type="submit" class="delete" value="${student.id}" onclick="deleteStudent(this)">Delete</button></td>` +
        `<td><button type="submit" class="edit" value="${student.id}" onclick="editStudent(this)">Edit</button></td>` +
        `</tr>`;
}

function deleteStudent(id) {
    let idStudent = id.getAttribute("value");
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/students/" + idStudent,
        success: successCreateStudent
    });
    event.preventDefault();
}

function showEditStudent(id) {
    let idStudent = id.getAttribute("value");
}

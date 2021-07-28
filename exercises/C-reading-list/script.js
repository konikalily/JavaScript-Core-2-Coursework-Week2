function readingList(books) {
  // Write your code here...
  let bookList = document.querySelector("#content");
  let bookListContent = document.createElement("ul");
  let listStyle = (bookListContent.className += " bg-style"); //to set the background style for the ul of the books

  books.forEach((element) => {
    //looping through each item
    let listBookItem = document.createElement("li");
    listBookItem.style.listStyle = "none";

    let listBookTitle = document.createElement("h4");
    listBookTitle.innerText = `${element.title} by ${element.author}`;
    listBookTitle.style.color = "white";

    let listBookImg = document.createElement("img");
    listBookImg.setAttribute("src", "./img/" + `${element.title}` + ".jpeg");
    listBookImg.style.width = "200px";

    //checking whether book is read or not?
    if (element.alreadyRead) {
      listBookItem.className += " already-read";
    } else {
      listBookItem.className += " not-read-yet";
    }

    listBookItem.appendChild(listBookTitle);
    listBookItem.appendChild(listBookImg);
    bookListContent.appendChild(listBookItem);
  });
  bookList.appendChild(bookListContent);
}

/*Render the list of books on the page.

 Each book should have a title, author and image 
 
 and a background colour that is set dependent on whether we have read the book or not.*/

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

readingList(books);

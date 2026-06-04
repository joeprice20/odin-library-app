"use strict";
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info() {
        let read_string;
        if (this.read) {
            read_string = "read";
        }
        else {
            read_string = "not read yet";
        }
        return this.title + " by " + this.author + ", " + this.pages + " pages" + ", " + read_string;
    }
}
let test_book = new Book("test", "stupid author", 198, false);
console.log(test_book.info());
console.log(Object.getPrototypeOf(test_book));

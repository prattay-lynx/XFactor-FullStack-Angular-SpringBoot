package com.xfactor.openlibrary.controllers;

import java.util.*;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.Domain.Books;
import com.xfactor.openlibrary.Repositories.BookRepository;

@RestController
@RequestMapping("book")
public class BookController {

    private BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @PostMapping("/saveBooks")
    public Books saveBook(@RequestBody Books book) {
        if (book.getId() == null) {
            Books book1 = bookRepository.save(book);
            return book1;
        }
        return null;
    }

    @GetMapping("/findTotalBooks")
    public Long findTotalBooks() {
        return bookRepository.count();
    }

    // @PutMapping("/updateAuthor")
    // public Books updateAuthor(@RequestBody Books b) {
    // if (b.getId() != null) {
    // Books b2 = BookRepository.save(b);
    // return b2;
    // }
    // return null;
    // }

    @GetMapping("/getAll")
    public List<Books> getAllBooks() {
        return bookRepository.findAll();
    }

    @GetMapping("findbyid/{id}")
    public Books findById(@PathVariable Long id) {
        Optional<Books> optionalOfBook = bookRepository.findById(id);
        if (optionalOfBook.isPresent())
            return optionalOfBook.get();
        return null;
    }

    @DeleteMapping("deletebyid/{id}")
    public void deleteBookById(@PathVariable Long id) {
        bookRepository.deleteById(id);
    }

    @GetMapping("findByisbn/{isbn}")
    public List<Books> findByisbn(@PathVariable String isbn) {
        List<Books> books = bookRepository.findByIsbn(isbn);
        return books;
    }

    @GetMapping("findByidAndisbn/{id}/{isbn}")
    public List<Books> findByIdAndIsbn_1(@PathVariable Long id, @PathVariable String isbn) {
        List<Books> book2 = bookRepository.findByIdAndIsbn(id, isbn);
        return book2;
    }

    @GetMapping("findBynameAndisbn/{title}/{isbn}")
    public List<Books> findByNameAndIsbn_1(@PathVariable String title, @PathVariable String isbn) {
        List<Books> book2 = bookRepository.findByTitleAndIsbn(title, isbn);
        return book2;
    }

}

// http://localhost:8080/Book/getbookname?id=TS01
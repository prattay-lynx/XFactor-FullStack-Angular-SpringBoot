package com.xfactor.openlibrary.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.Domain.Author;
import com.xfactor.openlibrary.Repositories.AuthorRepository;

@RestController
@RequestMapping("Authors")
public class AuthorController {
    private AuthorRepository authorRepository;

    public AuthorController(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @PostMapping("/saveAuthors")
    public Author saveAuthor(@RequestBody Author Author) {
        if (Author.getId() == null) {
            Author author2 = authorRepository.save(Author);
            return author2;
        }
        return null;
    }

    @PutMapping("/updateAuthor")
    public Author updateAuthor(@RequestBody Author author) {
        if (author.getId() != null) {
            Author author2 = authorRepository.save(author);
            return author2;
        }
        return null;
    }

    @GetMapping("/getAllAuthors")
    public List<Author> getAllAuthors() {
        return authorRepository.findAll();
    }

    @GetMapping("/findTotalAuthors")
    public Long findTotalAuthors() {
        return authorRepository.count();
    }

    @GetMapping("findByAuthorId/{id}")
    public Author findById(@PathVariable Long id) {
        Optional<Author> optionalOfAuthor = authorRepository.findById(id);
        if (optionalOfAuthor.isPresent()) {
            return optionalOfAuthor.get();
        }
        return null;
    }

    @GetMapping("findByname/{name}")
    public List<Author> findByisbn(@PathVariable String name) {
        List<Author> authors = authorRepository.findByName(name);
        return authors;
    }

    @DeleteMapping("deleteAuthors/{id}")
    public void deleteAuthors(@PathVariable Long id) {
        authorRepository.deleteById(id);
    }
}

// @GetMapping("/getallauthors")
// public ArrayList<HashMap<Object, Object>> authorlist() {
// HashMap<Object, Object> m1 = new HashMap<>();
// m1.put("id", "A1");
// m1.put("name", "Abc");
// m1.put("Age", 30);
// list.add(m1);

// HashMap<Object, Object> m2 = new HashMap<>();
// m2.put("id", "A2");
// m2.put("name", "Def");
// m2.put("Age", 57);
// list.add(m2);

// HashMap<Object, Object> m3 = new HashMap<>();
// m3.put("id", "A3");
// m3.put("name", "Ghi");
// m3.put("Age", 40);
// list.add(m3);

// HashMap<Object, Object> m4 = new HashMap<>();
// m4.put("id", "A4");
// m4.put("name", "Jkl");
// m4.put("Age", 47);
// list.add(m4);

// return list;

// }

// @GetMapping("/getauthorbyid")
// public Object getAuthorName(@RequestParam Object id) {
// for (HashMap<Object, Object> hashMap : list) {
// if (hashMap.containsKey("id") && hashMap.get("id").equals(id)) {
// return hashMap.get("name") + " having id " + id;
// }
// }
// return "No author found with id " + id;
// }

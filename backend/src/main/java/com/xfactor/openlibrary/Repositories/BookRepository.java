package com.xfactor.openlibrary.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xfactor.openlibrary.Domain.Books;

public interface BookRepository extends JpaRepository<Books, Long> {
    List<Books> findByIsbn(String isbn);

    List<Books> findByTitleAndIsbn(String title, String isbn);

    List<Books> findByIdAndIsbn(Long id, String isbn);
}

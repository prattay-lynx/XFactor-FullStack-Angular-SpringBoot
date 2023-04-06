package com.xfactor.openlibrary.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xfactor.openlibrary.Domain.Publisher;

public interface PublisherRepository extends JpaRepository<Publisher, Long> {
    List<Publisher> findByName(String name);
}

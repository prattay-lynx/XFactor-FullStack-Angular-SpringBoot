package com.xfactor.openlibrary.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xfactor.openlibrary.Domain.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    List<Admin> findByName(String name);
}

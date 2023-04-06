package com.xfactor.openlibrary.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xfactor.openlibrary.Domain.Loan;

public interface LoanRepository extends JpaRepository<Loan, Long> {
    List<Loan> findByCheckoutDate(String checkoutDate);
}

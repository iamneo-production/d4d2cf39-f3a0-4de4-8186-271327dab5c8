package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InsuranceRepository extends JpaRepository<InsuranceModel, Long> {
    InsuranceModel findByEmail(String email);
}

package com.example.springboot_book.repo;

import com.example.springboot_book.model.examM4.nation.Nation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface INationRepository extends JpaRepository<Nation, Long> {
}

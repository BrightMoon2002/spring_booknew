package com.example.springboot_book.service.exam4.nation;

import com.example.springboot_book.model.examM4.nation.Nation;
import com.example.springboot_book.repo.INationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class NationService implements INationService{
    @Autowired
    private INationRepository nationRepository;
    @Override
    public Iterable<Nation> findAll() {
        return nationRepository.findAll();
    }

    @Override
    public Optional<Nation> findById(Long id) throws IllegalArgumentException {
        return nationRepository.findById(id);
    }

    @Override
    public void save(Nation nation) {
        nationRepository.save(nation);
    }

    @Override
    public void remove(Nation nation) {
        nationRepository.delete(nation);
    }

    @Override
    public Page<Nation> findAllByNameContaining(String name, Pageable pageable) {
        return null;
    }

    @Override
    public Page<Nation> findAll(Pageable pageable) {
        return nationRepository.findAll(pageable);
    }

    @Override
    public Nation saveT(Nation nation) {
        return nationRepository.save(nation);
    }
}

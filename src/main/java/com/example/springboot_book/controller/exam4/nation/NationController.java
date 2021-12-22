package com.example.springboot_book.controller.exam4.nation;

import com.example.springboot_book.model.examM4.nation.Nation;
import com.example.springboot_book.service.exam4.nation.INationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/nations")
public class NationController {
    @Autowired
    private INationService nationService;

    @GetMapping
    public ResponseEntity<Iterable<Nation>> findAllNationals() {
        return new ResponseEntity<>(nationService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Nation> findNationalById(@PathVariable Long id) {
        return new ResponseEntity<>(nationService.findById(id).get(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Nation> save(@RequestBody Nation nation) {
        nationService.save(nation);
        return new ResponseEntity<>(nation, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Nation> updateNational(@PathVariable Long id, @RequestBody Nation national) {
        Optional<Nation> nationalOptional = nationService.findById(id);
        if (!nationalOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        national.setId(nationalOptional.get().getId());
        nationService.save(national);
        return new ResponseEntity<>(national, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Nation> deleteNational(@PathVariable Long id) {
        Optional<Nation> nationalOptional = nationService.findById(id);
        if (!nationalOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        nationService.remove(nationalOptional.get());
        return new ResponseEntity<>(nationalOptional.get(), HttpStatus.NO_CONTENT);
    }
}

package com.example.springboot_book.model.examM4.city;

import com.example.springboot_book.model.examM4.nation.Nation;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "cities")
@Data
@NoArgsConstructor
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotBlank(message = "invalid input")
    private String name;

    @Column
    private double area;

    @Column
    private int population;

    @Column(nullable = false)
    private double gdp;

    @Column(nullable = false)
    @NotBlank(message = "invalid input")
    private String description;

    @ManyToOne(targetEntity = Nation.class)
    private Nation nation;


}

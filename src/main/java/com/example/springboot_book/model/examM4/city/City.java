package com.example.springboot_book.model.examM4.city;

import com.example.springboot_book.model.examM4.nation.Nation;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "cities")
@Data
@NoArgsConstructor
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double area;
    private int population;
    private double gdp;
    private String description;
    @ManyToOne(targetEntity = Nation.class)
    private Nation nation;


}

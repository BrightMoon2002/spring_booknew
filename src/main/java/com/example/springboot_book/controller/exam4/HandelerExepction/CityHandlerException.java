package com.example.springboot_book.controller.exam4.HandelerExepction;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

@ControllerAdvice
@CrossOrigin("*")
public class CityHandlerException {

    @ExceptionHandler(Exception.class)
    public ModelAndView exception(Exception e) {
        System.out.println("error" + e.getMessage());
        return new ModelAndView("/error-404");
//        return new ResponseEntity<>("not null", HttpStatus.FOUND)
    }
    }

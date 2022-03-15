package com.jonas.crudomie.category.controller;

import com.jonas.crudomie.category.dto.CategoryDto;
import com.jonas.crudomie.category.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public Page<CategoryDto> findAllCategory(Pageable pageable){
        return categoryService.findAllCategory(pageable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoryDto> findByIdCategory(@PathVariable Long id){
        return ResponseEntity.ok().body(categoryService.findByIdCategory(id));
    }

}

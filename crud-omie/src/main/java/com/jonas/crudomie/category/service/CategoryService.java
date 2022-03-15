package com.jonas.crudomie.category.service;

import com.jonas.crudomie.category.dto.CategoryDto;
import com.jonas.crudomie.category.model.Category;
import com.jonas.crudomie.category.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public Page<CategoryDto> findAllCategory(Pageable pageable) {
        Page<Category> result = categoryRepository.findAll(pageable);
        Page<CategoryDto> page = result.map(x -> new CategoryDto(x));
        return page;
    }

    public CategoryDto findByIdCategory(Long id) {
        Category result = categoryRepository.findById(id).get();
        CategoryDto dto = new CategoryDto(result);
        return dto;
    }
}

package com.jonas.crudomie.email.dto;

import com.jonas.crudomie.category.model.Category;
import com.jonas.crudomie.client.model.Client;
import com.jonas.crudomie.email.model.Email;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmailDtoShort {

    private Long id;
    private Category category;
    private String name;
    private String email;

    public EmailDtoShort(Email email) {
        this.id = email.getId();
        this.category = email.getCategory();
        this.name = email.getName();
        this.email = email.getEmail();
    }
}

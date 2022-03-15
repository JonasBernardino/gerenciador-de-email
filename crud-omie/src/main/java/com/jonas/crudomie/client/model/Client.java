package com.jonas.crudomie.client.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.jonas.crudomie.client.enumClient.Status;
import com.jonas.crudomie.email.model.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String subscription;
    private String name;
    private String nickname;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;

    @OneToMany(
            mappedBy = "client",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )@JsonIgnore
    private List<Email> emails;
}

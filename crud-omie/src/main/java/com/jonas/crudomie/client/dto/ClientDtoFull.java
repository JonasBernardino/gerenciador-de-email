package com.jonas.crudomie.client.dto;

import com.jonas.crudomie.client.enumClient.Status;
import com.jonas.crudomie.client.model.Client;
import com.jonas.crudomie.email.model.Email;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ClientDtoFull {

    private Long id;
    private String subscription;
    private String name;
    private String nickname;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;
    private List<Email> emails;


    public ClientDtoFull(Client client) {
        this.id = client.getId();
        this.subscription = client.getSubscription();
        this.name = client.getName();
        this.nickname = client.getNickname();
        this.status = client.getStatus();
        this.emails = client.getEmails();

    }

}

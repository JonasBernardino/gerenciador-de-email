package com.jonas.crudomie.client.dto;

import com.jonas.crudomie.client.enumClient.Status;
import com.jonas.crudomie.client.model.Client;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ClientDtoShort {

    private Long id;
    private String subscription;
    private String name;
    private String nickname;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;

    public ClientDtoShort(Client client) {
        this.id = client.getId();
        this.subscription = client.getSubscription();
        this.name = client.getName();
        this.nickname = client.getNickname();
        this.status = client.getStatus();
    }
}

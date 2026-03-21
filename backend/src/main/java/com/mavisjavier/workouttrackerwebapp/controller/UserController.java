package com.mavisjavier.workouttrackerwebapp.controller;

import com.mavisjavier.workouttrackerwebapp.dto.UserDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {
    @GetMapping("/user/{id}")
    public UserDTO getUser(@PathVariable Long id) {
        // TODO find ID from DB
        // TODO initialize DTO and return
        return new UserDTO(
                id,
                "Mavis",
                "Javier",
                "mavsjav@gmail.com"
        );
    }
}

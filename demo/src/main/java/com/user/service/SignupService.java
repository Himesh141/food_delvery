package com.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.entity.UserEntity;
import com.user.repo.UserRepo;

@Service
public class SignupService {

    @Autowired
    private UserRepo userRepo;

    public UserEntity signup(UserEntity user) {

        if (userRepo.findByUsername(user.getUserName()) != null) {
            throw new RuntimeException("Username already exists");
        }

        if (user.getRole() == null) {
            user.setRole("USER");
        }

        return userRepo.save(user);
    }
}


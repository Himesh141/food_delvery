package com.user.repo;

import org.springframework.data.jpa.repository.JpaRepository;


import com.user.entity.UserEntity;

public interface UserRepo extends JpaRepository<UserEntity, Integer> {

    UserEntity findByUsername(String username);
    UserEntity findBymail(String mail);
    UserEntity findByPhnno(int phnno);
}

package com.user.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.user.entity.UserEntity;

public interface UserRepo extends JpaRepository<UserEntity, Integer>{
	@Query("Select p from UserEntity p where p.username=:Username")
	UserEntity FindByUsername(String Username);
}

package com.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.user.entity.UserEntity;
import com.user.repo.UserRepo;

@Service
public class MyUserService implements UserDetailsService{
            @Autowired
            private UserRepo userRepo;
            
            public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        		UserEntity details=userRepo.findByUsername(username);
        		
        		if(details==null)
        		{
        			throw new UsernameNotFoundException("User Name not found"+ username);
        		}
        		return  new Principal(details);
        	}
            
}

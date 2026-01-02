package com.user.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String username;
	private int phnno;
	private String mail;
	private String role;
	private String password;
	public UserEntity() {
        // JPA requirement
    }
	public UserEntity(Integer id,int phnno, String username, String mail, String password,String role) {
		this.id = id;
		this.phnno=phnno;
		this.username = username;
		this.mail = mail;
		this.password = password;
		this.role=role;
	}
	public int getPhnno() {
		return phnno;
	}
	public void setPhnno(int phnno) {
		this.phnno = phnno;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserName() {
		return username;
	}
	public void setUserName(String username) {
		this.username = username;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	

}

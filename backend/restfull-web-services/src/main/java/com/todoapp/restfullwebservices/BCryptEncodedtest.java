package com.todoapp.restfullwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BCryptEncodedtest {
	
	public static void main(String[] args) {
		
		BCryptPasswordEncoder encoder= new BCryptPasswordEncoder();
		
		for(int i=0;i<=10;i++) {
		String encodedString=encoder.encode("1234");
		System.out.println(encodedString);
	}}

}

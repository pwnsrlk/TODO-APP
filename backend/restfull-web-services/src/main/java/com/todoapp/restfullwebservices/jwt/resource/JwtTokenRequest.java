package com.todoapp.restfullwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
    
    //{
    //	"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwYXdhbiIsImV4cCI6MTYyNTg5NjMxNiwiaWF0IjoxNjI1MjkxNTE2fQ.JjmZiI5X30e6FH2pLOVobtWGtub9SdrmxYQawaekOEyynmOD-8Tsr-FdDxbVvaIwrs23NBqZyP4eyeGKE7w0YQ"
    //	}

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

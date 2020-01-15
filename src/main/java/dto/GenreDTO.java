/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dto;

import entities.Genre;

/**
 *
 * @author Obaydah Mohamad
 */
class GenreDTO {
    private String name;

    public GenreDTO(Genre g) {
        this.name = g.getName();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    
}

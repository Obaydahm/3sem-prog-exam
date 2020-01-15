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
public class GenreDTO {
    private Long id;
    private String name;

    public GenreDTO(Genre g) {
        this.id = g.getId();
        this.name = g.getName();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "GenreDTO{" + "name=" + name + '}';
    }
    
    
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dto;

import entities.Actor;

/**
 *
 * @author Obaydah Mohamad
 */
public class ActorDTO {
    private String name, about;

    public ActorDTO(Actor a) {
        this.name = a.getName();
        this.about = a.getAbout();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    @Override
    public String toString() {
        return "ActorDTO{" + "name=" + name + ", about=" + about + '}';
    }
    
    
    
}

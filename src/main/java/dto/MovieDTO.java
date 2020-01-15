/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dto;

import entities.Actor;
import entities.Director;
import entities.Genre;
import entities.Movie;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Obaydah Mohamad
 */
public class MovieDTO {
    private String title;
    private int year, votes;
    private List<DirectorDTO> directors;
    private List<ActorDTO> actors;
    private List<GenreDTO> genres;
    
    public MovieDTO(Movie m){
        this.title = m.getTitle();
        this.year = m.getYear();
        this.votes = m.getVotes();
        this.directors = new ArrayList<>();
        this.actors = new ArrayList<>();
        this.genres = new ArrayList<>();
        for(Director d : m.getDirectors()){ directors.add(new DirectorDTO(d)); }
        for(Actor a : m.getActors()){ actors.add(new ActorDTO(a)); }
        for(Genre g : m.getGenres()){ genres.add(new GenreDTO(g));}
    }
}

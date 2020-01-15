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
    private Long id;
    private String title;
    private int year, votes;
    private List<DirectorDTO> directors;
    private List<ActorDTO> actors;
    private List<GenreDTO> genres;
    
    public MovieDTO(Movie m){
        this.id = m.getId();
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getVotes() {
        return votes;
    }

    public void setVotes(int votes) {
        this.votes = votes;
    }

    public List<DirectorDTO> getDirectors() {
        return directors;
    }

    public void setDirectors(List<DirectorDTO> directors) {
        this.directors = directors;
    }

    public List<ActorDTO> getActors() {
        return actors;
    }

    public void setActors(List<ActorDTO> actors) {
        this.actors = actors;
    }

    public List<GenreDTO> getGenres() {
        return genres;
    }

    public void setGenres(List<GenreDTO> genres) {
        this.genres = genres;
    }

    @Override
    public String toString() {
        return "MovieDTO{" + "id=" + id + ", title=" + title + ", year=" + year + ", votes=" + votes + ", directors=" + directors + ", actors=" + actors + ", genres=" + genres + '}';
    }
    
    
}

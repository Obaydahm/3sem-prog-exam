/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

/**
 *
 * @author Obaydah Mohamad
 */
//SELECT COUNT(c.requests) FROM Category c WHERE c.name = :name
@Entity
@NamedQueries({
    @NamedQuery(name = "Movie.getAll", query = "SELECT new dto.MovieDTO(m) FROM Movie m"),
    @NamedQuery(name = "Movie.deleteAll", query = "DELETE FROM Movie m"),
    @NamedQuery(name = "Movie.getByTitle", query = "SELECT new dto.MovieDTO(m) FROM Movie m WHERE m.title = :title"),
    @NamedQuery(name = "Movie.getByDirector", query = "SELECT new dto.MovieDTO(m) FROM Movie m WHERE m.directors = :director"),
    @NamedQuery(name = "Movie.getByActor", query = "SELECT new dto.MovieDTO(m) FROM Movie m WHERE m.actors = :actor"),
    @NamedQuery(name = "Movie.getByGenre", query = "SELECT new dto.MovieDTO(m) FROM Movie m WHERE m.genres = :genre")
})
public class Movie implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private int year, votes;
    
    @ManyToMany(mappedBy = "movies")
    private List<Director> directors;
    
    @ManyToMany(mappedBy = "movies")
    private List<Actor> actors;
    
    @ManyToMany(mappedBy = "movies")
    private List<Genre> genres;

    public Movie() {
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

    public List<Director> getDirectors() {
        return directors;
    }

    public void setDirectors(List<Director> directors) {
        this.directors = directors;
    }

    public List<Actor> getActors() {
        return actors;
    }

    public void setActors(List<Actor> actors) {
        this.actors = actors;
    }

    public List<Genre> getGenres() {
        return genres;
    }

    public void setGenres(List<Genre> genres) {
        this.genres = genres;
    }
    
    

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Movie)) {
            return false;
        }
        Movie other = (Movie) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Movie{" + "id=" + id + ",\n title=" + title + ",\n year=" + year + ",\n votes=" + votes + ",\n directors=" + directors + ",\n actors=" + actors + ",\n genres=" + genres + '}';
    }

    
    
}

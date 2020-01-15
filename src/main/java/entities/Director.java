/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import java.io.Serializable;
import java.util.List;
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
@Entity
@NamedQueries({
    @NamedQuery(name = "Director.getAll", query = "SELECT d FROM Director d"),
    @NamedQuery(name = "Director.deleteAll", query = "DELETE FROM Director d"),
    @NamedQuery(name = "Director.getByMovieByDirector", query = "SELECT d.movies FROM Director d WHERE d.name = :name")
})
public class Director implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name, about;
    
    @ManyToMany(mappedBy = "directors")
    private List<Movie> movies;

    public Director() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
        if (!(object instanceof Director)) {
            return false;
        }
        Director other = (Director) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entities.Director[ id=" + id + " ]";
    }
    
}
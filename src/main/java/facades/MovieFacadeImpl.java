/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import dto.ActorDTO;
import dto.DirectorDTO;
import dto.GenreDTO;
import dto.MovieDTO;
import entities.Actor;
import entities.Director;
import entities.Genre;
import entities.Movie;
import errorhandling.NotFoundException;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;

/**
 *
 * @author Obaydah Mohamad
 */
public class MovieFacadeImpl implements MovieFacadeInterface{
    private static EntityManagerFactory emf;
    private static MovieFacadeImpl instance;
    
    private MovieFacadeImpl(){}
    
    public static MovieFacadeImpl getMovieFacade (EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new MovieFacadeImpl();
        }
        return instance;
    }
    
    private static Director getDirector(String name){
        EntityManager em = emf.createEntityManager();
        try{
            if (name.isEmpty() || name == null) return null;
            Director director = em.createNamedQuery("Director.getByName", Director.class).setParameter("name", name).getSingleResult();
            return director;
        }catch(Exception e){
            return null;
        }finally{
            em.close();
        }
    }
    
    private static Actor getActor(String name){
        EntityManager em = emf.createEntityManager();
        try{
            if (name.isEmpty() || name == null) return null;
            Actor actor = em.createNamedQuery("Actor.getByName", Actor.class).setParameter("name", name).getSingleResult();
            return actor;
        }catch(Exception e){
            return null;
        }finally{
            em.close();
        }
    }
    
    private static Genre getGenre(String name){
        EntityManager em = emf.createEntityManager();
        try{
            if (name.isEmpty() || name == null) return null;
            Genre genre = em.createNamedQuery("Genre.getByName", Genre.class).setParameter("name", name).getSingleResult();
            return genre;
        }catch(Exception e){
            return null;
        }finally{
            em.close();
        }
    }
    
    @Override
    public MovieDTO addMovie(Movie m) {
        EntityManager em = emf.createEntityManager();
        
        List<Director> newDirectors = new ArrayList<>();
        List<Director> existingDirectors = new ArrayList<>();
        List<Actor> newActors = new ArrayList<>();
        List<Actor> existingActors = new ArrayList<>();
        List<Genre> newGenres = new ArrayList<>();
        List<Genre> existingGenres = new ArrayList<>();
        
        
        Director director;
        Actor actor;
        Genre genre;
       
        try{
            em.getTransaction().begin();
            em.persist(m);
            
            for(Director d : m.getDirectors()){
                director = getDirector(d.getName());
                if(director == null){
                    em.persist(d);
                }else{
                    existingDirectors.add(director);
                }
            }
            
            for(Actor a : m.getActors()){
                actor = getActor(a.getName());
                if(actor == null){
                    em.persist(a);
                    System.out.println(a);
                }else{
                    existingActors.add(actor);
                }
            }
            
            for(Genre g : m.getGenres()){
                genre = getGenre(g.getName());
                if(genre == null){
                    em.persist(g);
                }else{
                    existingGenres.add(genre);
                }
            }
            
            if(existingDirectors.size() > 0) m.setDirectors(existingDirectors);
            if(existingActors.size() > 0) m.setActors(existingActors);
            if(existingGenres.size() > 0) m.setGenres(existingGenres);
            
            em.getTransaction().commit();
            return new MovieDTO(m);
        }finally{
            em.close();
        }
    }

    @Override
    public List<MovieDTO> getAllMovies() throws NotFoundException {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<MovieDTO> tq = em.createNamedQuery("Movie.getAll", MovieDTO.class);
            List<MovieDTO> movies = tq.getResultList();
            if(movies.size() < 1) throw new NotFoundException("No movies has been added to the database yet.");
            return movies;
        } finally {
            em.close();
        }
    }

    @Override
    public List<MovieDTO> getMovieByTitle(String title) throws NotFoundException {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<MovieDTO> tq = em.createNamedQuery("Movie.getByTitle", MovieDTO.class).setParameter("title", title);
            List<MovieDTO> movies = tq.getResultList();
            if(movies.size() < 1) throw new NotFoundException("No movies named " + title + " exists in the database.");
            return movies;
        } finally {
            em.close();
        }
    }

    @Override
    public List<MovieDTO> getMoviesByDirector(String name) throws NotFoundException {
        EntityManager em = emf.createEntityManager();
        try {
            Director d = getDirector(name);
            if(d == null) throw new NotFoundException(name + " isn't a registered director.");
            List<MovieDTO> movies = em.createNamedQuery("Movie.getByDirector", MovieDTO.class).setParameter("director", d).getResultList();
            if(movies.size() < 1) throw new NotFoundException(d.getName() + " haven't directed any movies yet.");
            return movies;
        } finally {
            em.close();
        }
    }

    @Override
    public List<MovieDTO> getMoviesByActor(String name) throws NotFoundException {
        EntityManager em = emf.createEntityManager();
        try {
            Actor a = getActor(name);
            if(a == null) throw new NotFoundException(name + " isn't a registered actor.");
            List<MovieDTO> movies = em.createNamedQuery("Movie.getByActor", MovieDTO.class).setParameter("actor", a).getResultList();
            if(movies.size() < 1) throw new NotFoundException(a.getName() + " haven't starred any movies yet.");
            return movies;
        } finally {
            em.close();
        }
    }

    @Override
    public List<MovieDTO> getMoviesByGenre(String name) throws NotFoundException {
        EntityManager em = emf.createEntityManager();
        try {
            Genre g = getGenre(name);
            if(g == null) throw new NotFoundException(name + " isn't a registered genre.");
            List<MovieDTO> movies = em.createNamedQuery("Movie.getByGenre", MovieDTO.class).setParameter("genre", g).getResultList();
            if(movies.size() < 1) throw new NotFoundException(g.getName() + " haven't been assigned to any movies yet.");
            return movies;
        } finally {
            em.close();
        }
    }

    @Override
    public List<DirectorDTO> getAllDirectors() throws NotFoundException {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<DirectorDTO> tq = em.createNamedQuery("Director.getAll", DirectorDTO.class);
            List<DirectorDTO> directors = tq.getResultList();
            if(directors.size() < 1) throw new NotFoundException("No directors has been added to the database yet.");
            return directors;
        } finally {
            em.close();
        }
    }

    @Override
    public List<ActorDTO> getAllActors() throws NotFoundException {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<ActorDTO> tq = em.createNamedQuery("Actor.getAll", ActorDTO.class);
            List<ActorDTO> actors = tq.getResultList();
            if(actors.size() < 1) throw new NotFoundException("No actors has been added to the database yet.");
            return actors;
        } finally {
            em.close();
        }
    }

    @Override
    public List<GenreDTO> getAllGenres() throws NotFoundException {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<GenreDTO> tq = em.createNamedQuery("Genre.getAll", GenreDTO.class);
            List<GenreDTO> genres = tq.getResultList();
            if(genres.size() < 1) throw new NotFoundException("No genres has been added to the database yet.");
            return genres;
        } finally {
            em.close();
        }
    }
    
}

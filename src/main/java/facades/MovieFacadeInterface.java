/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import dto.ActorDTO;
import dto.MovieDTO;
import dto.DirectorDTO;
import dto.GenreDTO;
import entities.Actor;
import entities.Director;
import entities.Genre;
import entities.Movie;
import errorhandling.AlreadyExistsException;
import errorhandling.NotFoundException;
import java.util.List;

/**
 *
 * @author Obaydah Mohamad
 */
public interface MovieFacadeInterface {
    public MovieDTO addMovie(Movie m);
    public DirectorDTO addDirector(Director d) throws AlreadyExistsException;
    public ActorDTO addActor(Actor a) throws AlreadyExistsException;
    public GenreDTO addGenre(Genre g) throws AlreadyExistsException;
    public MovieDTO deleteMovie(Long id) throws NotFoundException;
    public DirectorDTO deleteDirector(Long id) throws NotFoundException;
    public ActorDTO deleteActor(Long id) throws NotFoundException;
    public GenreDTO deleteGenre(Long id) throws NotFoundException;
    public List<MovieDTO> getAllMovies() throws NotFoundException;
    public List<MovieDTO> getMovieByTitle(String title) throws NotFoundException;
    public List<MovieDTO> getMoviesByDirector(String name) throws NotFoundException;
    public List<MovieDTO> getMoviesByActor(String name) throws NotFoundException;
    public List<MovieDTO> getMoviesByGenre(String name) throws NotFoundException;
    public List<DirectorDTO> getAllDirectors() throws NotFoundException;
    public List<ActorDTO> getAllActors() throws NotFoundException;
    public List<GenreDTO> getAllGenres() throws NotFoundException;
}

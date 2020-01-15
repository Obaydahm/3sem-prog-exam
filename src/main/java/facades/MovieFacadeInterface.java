/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import dto.MovieDTO;
import entities.Movie;
import errorhandling.NotFoundException;
import java.util.List;

/**
 *
 * @author Obaydah Mohamad
 */
public interface MovieFacadeInterface {
    public MovieDTO addMovie(Movie m);
    public List<MovieDTO> getAllMovies() throws NotFoundException;
    public MovieDTO getMovieByTitle(String title) throws NotFoundException;
    public List<MovieDTO> getMoviesByDirector(String director) throws NotFoundException;
    public List<MovieDTO> getMoviesByActor(String Actor) throws NotFoundException;
    public List<MovieDTO> getMoviesByGenre(String Genres) throws NotFoundException;
}
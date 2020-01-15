/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entities.Actor;
import entities.Director;
import entities.Genre;
import entities.Movie;
import facades.MovieFacadeImpl;
import javax.annotation.security.RolesAllowed;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.core.UriInfo;
import utils.EMF_Creator;

/**
 *
 * @author Obaydah Mohamad
 */
@Path("movie")
public class MovieResource {
    private static EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(EMF_Creator.DbSelector.DEV, EMF_Creator.Strategy.CREATE);
    private static final MovieFacadeImpl FACADE = MovieFacadeImpl.getMovieFacade(EMF);
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    @Context
    private UriInfo context;

    @Context
    SecurityContext securityContext;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getInfoForAll() {
        return "{\"status\":\"ok\"}";
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("addmovie")
    public String addMovie(String jsonString) {
        Movie movie = GSON.fromJson(jsonString, Movie.class);
        return GSON.toJson(FACADE.addMovie(movie));
    }
    
    @RolesAllowed("admin")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("adddirector")
    public String addDirector(String jsonString) {
        Director director = GSON.fromJson(jsonString, Director.class);
        return GSON.toJson(FACADE.addDirector(director));
    }
    
    @RolesAllowed("admin")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("addactor")
    public String addActor(String jsonString) {
        Actor actor = GSON.fromJson(jsonString, Actor.class);
        return GSON.toJson(FACADE.addActor(actor));
    }
    
    @RolesAllowed("admin")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("addgenre")
    public String addGenre(String jsonString) {
        Genre genre = GSON.fromJson(jsonString, Genre.class);
        return GSON.toJson(FACADE.addGenre(genre));
    }
    
    @RolesAllowed("admin")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("deletemovie/{id}")
    public String deleteMovie(@PathParam("id") Long id) {
        return GSON.toJson(FACADE.deleteMovie(id));
    }
    
    @RolesAllowed("admin")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("deletedirector/{id}")
    public String deleteDirector(@PathParam("id") Long id) {
        return GSON.toJson(FACADE.deleteDirector(id));
    }
    
    @RolesAllowed("admin")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("deletegenre/{id}")
    public String deleteGenre(@PathParam("id") Long id) {
        return GSON.toJson(FACADE.deleteGenre(id));
    }
    
    @RolesAllowed("admin")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("deleteactor/{id}")
    public String deleteActor(@PathParam("id") Long id) {
        return GSON.toJson(FACADE.deleteActor(id));
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("all")
    public String getAllMovies() {
        return GSON.toJson(FACADE.getAllMovies());
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("getbytitle/{title}")
    public String getMovieByTitle(@PathParam("title") String title) {
        return GSON.toJson(FACADE.getMovieByTitle(title));
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("getbydirector/{director}")
    public String getMovieByDirector(@PathParam("director") String director) {
        return GSON.toJson(FACADE.getMoviesByDirector(director));
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("getbyactor/{actor}")
    public String getMovieByActor(@PathParam("actor") String actor) {
        return GSON.toJson(FACADE.getMoviesByActor(actor));
    }    
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("getbygenre/{genre}")
    public String getMovieByGenre(@PathParam("genre") String genre) {
        return GSON.toJson(FACADE.getMoviesByGenre(genre));
    }    
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("alldirectors")
    public String getAllDirectors() {
        return GSON.toJson(FACADE.getAllDirectors());
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("allactors")
    public String getAllActors() {
        return GSON.toJson(FACADE.getAllActors());
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("allgenres")
    public String getAllGenres() {
        return GSON.toJson(FACADE.getAllGenres());
    }
    
    
    
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package errorhandling;

import javax.ws.rs.WebApplicationException;

/**
 *
 * @author Obaydah Mohamad
 */
public class AlreadyExistsException extends WebApplicationException{
    public AlreadyExistsException(String msg){
        super(msg, 400);
    }
}
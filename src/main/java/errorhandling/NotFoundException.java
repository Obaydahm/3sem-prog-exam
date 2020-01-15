package errorhandling;

import javax.ws.rs.WebApplicationException;

/**
 *
 * @author lam@cphbusiness.dk
 */
public class NotFoundException extends WebApplicationException{
    public NotFoundException(String msg){
        super(msg, 404);
    }
}
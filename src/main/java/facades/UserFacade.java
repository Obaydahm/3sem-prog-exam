/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import entities.Role;
import entities.User;
import errorhandling.AuthenticationException;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *a
 * @author Obaydah Mohamad
 */
public class UserFacade {
    private static EntityManagerFactory emf;
    private static UserFacade instance;
    
    private UserFacade(){}
    
    public static UserFacade getUserFacade (EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new UserFacade();
        }
        return instance;
    }
    
    public String populateUsers(){
        EntityManager em = emf.createEntityManager();
        try{
            Long count = (Long)em.createQuery("SELECT COUNT(u) FROM User u").getSingleResult();
            
            if(count > 0) return "already populated";
            
            User user = new User("user", "user123");
            User admin = new User("admin", "admin123");
            User both = new User("user_admin", "user_admin123");

            em.getTransaction().begin();
            Role userRole = new Role("user");
            Role adminRole = new Role("admin");
            user.addRole(userRole);
            admin.addRole(adminRole);
            both.addRole(userRole);
            both.addRole(adminRole);
            em.persist(userRole);
            em.persist(adminRole);
            em.persist(user);
            em.persist(admin);
            em.persist(both);
            em.getTransaction().commit();
            System.out.println("PW: " + user.getPassword());
            System.out.println("Testing user with OK password: " + user.verifyPassword("test"));
            System.out.println("Testing user with wrong password: " + user.verifyPassword("test1"));
            System.out.println("Created TEST Users");
            return "populated";
        }finally{
            em.close();
        }
    }
    
    public User getUser(String username, String password) throws AuthenticationException {
        EntityManager em = emf.createEntityManager();
        User user;
        try {
            
            user = (User)em.createQuery("SELECT u FROM User u WHERE u.username = :username")
                    .setParameter("username", username).getSingleResult();
            if (user == null || !user.verifyPassword(password)) {
                throw new AuthenticationException("Invalid username or password");
            }
        } finally {
            em.close();
        }
        return user;
    }
}

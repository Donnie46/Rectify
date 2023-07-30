// authMiddleware.js

const isAuthenticated = (req, res, next) => {
    // Replace this with your actual authentication logic
    const isLoggedIn = Auth.loggedIn(); // Assuming you have Auth.loggedIn() method to check if the user is authenticated
  
    if (isLoggedIn) {
      // If the user is authenticated, allow access to the route
      next();
    } else {
      // If the user is not authenticated, respond with an error or redirect to login page
      res.status(401).json({ error: "Unauthorized" });
      // Alternatively, you can redirect to the login page using React Router
      // Example: res.redirect("/login");
    }
  };
  
  module.exports = isAuthenticated;
  
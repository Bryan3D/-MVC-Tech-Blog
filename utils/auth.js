

//  This middleware function will check if the user is logged in. If they are, it will call the next() function. If they aren't, it will redirect them to the login page. This will be used on any routes that we want to protect from unauthenticated users.

const withAuth = (req, res, next) => {
    // If the user isn't logged in, redirect them to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;


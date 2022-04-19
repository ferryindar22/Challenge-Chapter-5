const appRouter = (app, fs) => {
    app.get('/', function(req, res) {
        res.render('index');
    });
    
    app.get('/games', function(req, res) {
        res.render('games/index');
    });
    
    app.get('/login', function(req, res) {
        res.render('login');
    });
    
    app.post('/login', (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        res.send(`Username: ${username} Password: ${password}`);
      });
    
    app.get('/signup', function(req, res) {
       res.render('signup');
    });
    
    app.post('/signup', (req, res) => {
        let { username, password } = req.body;
        let newUser = { id: users[users.length - 1].id + 1, username: username, password: password };
        users.push(newUser);
        res.redirect("/login");
      });
}

module.exports = appRouter;
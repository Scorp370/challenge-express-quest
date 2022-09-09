const argon2 = require("argon2");


const hashing = {
    type: argon2.argon2d,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
};



const hashPassword = (req, res, next) => {
    argon2
      .hash(req.body.password, hashing)
      .then((hashedPassword) => {    
        
        req.body.hashedPassword = hashedPassword;
        delete req.body.password;
  
        next();
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

module.exports = {
  hashPassword,
}
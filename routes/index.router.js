const Swapi = require('../controllers/Swapi.controller.js'),
      entites = require('../controllers/Entities/index.js');

const route = require("express").Router(),
      path = require("path");

module.exports = app => {
  route.get("/", (req, res) => res.sendFile(path.resolve('./public/index.html')));

  route.get('/search', async (req,res)=>{
    const search = req.query.name;

    if(typeof search !== 'string' || !(search instanceof String) && !(/^[А-яA-z0-9 ]+$/.test(search))){
      res.send('-1');
      return;
    }

    const swapi = new Swapi('https://swapi.dev/api/', entites);

    res.json((await swapi.find(search)));
  });

  return route;
}

var ruta=require("express").Router();

ruta.get("/", async (req,res) => {
    res.render("home");
});
ruta.get("/home", async (req,res) => {
    res.render("home");
});
// Ruta de inicio se usa solamente cuando ya ingresamos seccion ----------------------------------------------------------------
ruta.get("/class1",(req,res) => {
    res.render("class1");
});
ruta.get('/estilos', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'home.css'));
  });
  
// Ruta de reegistrar usuario ----------------------------------------------------------------
module.exports = ruta;
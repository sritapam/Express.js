const express = require ('express');

 // creo la aplicacion
// creo el puerto para escuchar la app
//ahi ya tenemos nuestro servidor de express

var beatles = [
    {
      name: "John Lennon",
      birthdate: "09/10/1940",
      profilePic: "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg"
    },
    {
      name: "Paul McCartney",
      birthdate: "18/06/1942",
      profilePic: "http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
    },
    {
      name: "George Harrison",
      birthdate: "25/02/1946",
      profilePic: "https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg"
    },
    {
      name: "Richard Starkey",
      birthdate: "07/08/1940",
      profilePic: "http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
    }
  ]
  
// // esto es lo basico en el segundo vamos a hacer una paginacion para que me traiga 2 req.
// const app = express();
// app.get('/api', (req, resp)=>{
//     resp.json(beatles)
// });

// app.get('/api/:name', (req, resp)=>{
//     //console.log(req.params);//eso me tiene que dar la ruta del name
//     const beatle = beatles.find((beatle)=>beatle.name === req.params.name)
//     if (beatle){
//         return resp.json(beatle)
//     } 
//     return resp.status(404).send('<h1 style="text-align: center;">Beatle no encontrado</h1>')
// // este return corta la ejecucion a diferencia del else
// //send te da el control a express para definir q content type devolves
// // http://localhost:8080/api/John%20Lennon asi busco en la ruta
//     //resp.sendStatus(204)//todo ok pero sin contenido

// })
// app.listen(8080);

//PAGINACION 

const app = express();
app.get('/api', (req, resp)=>{
  const page = parseInt(req.query.page || 1) // me guarda un objeto
  const itemXpage = 2; 
    resp.json(beatles.slice(
      itemXpage * (page - 1), 
      itemXpage * (page - 1) + itemXpage))
});

app.get('/api/:name', (req, resp)=>{
    //console.log(req.params);//eso me tiene que dar la ruta del name
    const beatle = beatles.find((beatle)=>beatle.name === req.params.name)
    if (beatle){
        return resp.json(beatle)
    } 
    return resp.status(404).send('<h1 style="text-align: center;">Beatle no encontrado</h1>')
// este return corta la ejecucion a diferencia del else
//send te da el control a express para definir q content type devolves
// http://localhost:8080/api/John%20Lennon asi busco en la ruta
    //resp.sendStatus(204)//todo ok pero sin contenido

})
app.listen(8080);
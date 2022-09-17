// se crea arrays de peliculas series y libros 

const peliculas = [
    { name: 'After ever happy', img: '../PSL/Images/Peliculas/after_ever_happy.jpg' },
    { name: 'Amelie', img: '../PSL/Images/Peliculas/Amelie.jpg' },
    { name: 'American beauty', img: '../PSL/Images/Peliculas/american_beauty.jpg' },
    { name: 'Chicas Malas', img: '../PSL/Images/Peliculas/Chicas_Malas.jpg' },
    { name: 'El Irlandes', img: '../PSL/Images/Peliculas/El_Irlandés.jpg' },
    { name: 'El Laberinto del fauno', img: '../PSL/Images/Peliculas/el_laberinto_del_fauno.jpg' },
    { name: 'La Vida es bella', img: '../PSL/Images/Peliculas/la_vida_es_bella.jpg' },
    { name: 'The black phone', img: '../PSL/Images/Peliculas/the_black_phone.jpg' },
    { name: 'Thor love and thunder', img: '../PSL/Images/Peliculas/thor_love_and_thunder.jpg' },
    { name: 'Violet and finch', img: '../PSL/Images/Peliculas/Violet and Finch.jpg' },
];

const series = [
    { name: 'Breaking Bad', img: '../PSL/Images/series/breaking_bad.jpg' },
    { name: 'Vampire Academy', img: '../PSL/Images/series/Vampire_Academy.jpg' },
    { name: 'Drake y Josh', img: '../PSL/Images/series/Drake_y_Josh.jpg' },
    { name: 'La casa de papel', img: '../PSL/Images/series/La_casa_de_papel_Corea.jpg' },
    { name: 'Los 100', img: '../PSL/Images/series/los_100.jpg' },
    { name: 'Peaky Blinders', img: '../PSL/Images/series/peaky_blinders.jpg' },
    { name: 'Stranger Things', img: '../PSL/Images/series/Stranger_things_4.jpg' },
    { name: 'The Crown', img: '../PSL/Images/series/the_crown.jpg' },
    { name: 'The Sandman', img: '../PSL/Images/series/the_sandman.jpg' },
    { name: 'Vikingos', img: '../PSL/Images/series/Vikingos.jpg' },
    { name: 'Wanderlust', img: '../PSL/Images/series/wanderlust.jpg' },
];

const libros = [
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' },
];


const busqueda = document.querySelector('#buscar');
const peliculas_content = document.querySelector('.peliculas-content')
const series_content = document.querySelector('.series-content')
const container = document.querySelector('.container');
const button = document.querySelector('#button');

const filtrar = () => {

  peliculas_content.innerHTML = '';
  series_content.innerHTML = ''; 

    let texto = busqueda.value.toLowerCase()

    for (let pelicula of peliculas) {
        let nombreP = pelicula.name.toLowerCase();
        if (nombreP.indexOf(texto) !== -1) {
            peliculas_content.innerHTML +=
            ` <div class="peliculas">
                <img src="${pelicula.img}" alt="">
                 <h3>${pelicula.name}</h3>   
             </div>`
        }
    }

    for (let serie of series) {
        let nombreS = serie.name.toLowerCase();
        if (nombreS.indexOf(texto) !== -1) {
            series_content.innerHTML +=
            ` <div class="series">
                <img src="${serie.img}" alt="">
                 <h3>${serie.name}</h3>   
             </div>`
        }
    }

  if(peliculas_content.innerHTML == "" ){
        peliculas_content.innerHTML = ` <h3> la pelicula no se encuentra en nuestro catalogo</h3>`
    }
    if(series_content.innerHTML == "" ){
        for(let i = 0; i< series.length;i++){
        console.log(series[i]);}
        series_content.innerHTML = ` <h3> la serie no se encuentra en nuestro catalogo</h3>`
    }
}
filtrar();
busqueda.addEventListener('keyup' , filtrar)
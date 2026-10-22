const exp_academica = [
    {
        titulo: "GS Desarrollo de Aplicaciones Web",
        periodo: "2025-27",
        centro: "CPR Afundación A Coruña"
    },
    {
        titulo: "GM Sistemas Microinformáticos y Redes",
        periodo: "2023-25",
        centro: "Otro cole"
    }
];

const exp_profesional = [
    {
        titulo: "Sin experiencia profesional",
        periodo: "Actualmente",
        centro: "Disponible para nuevas oportunidades"
    }
];

// Mostrar experiencia académica
const listaAcademica = document.getElementById("lista-academica");

exp_academica.forEach(function (experiencia) {
    const articulo = document.createElement("article");

    const titulo = document.createElement("h3");
    titulo.textContent = experiencia.titulo;

    const periodo = document.createElement("p");
    periodo.textContent = experiencia.periodo;

    const centro = document.createElement("p");
    centro.textContent = experiencia.centro;

    articulo.appendChild(titulo);
    articulo.appendChild(periodo);
    articulo.appendChild(centro);

    listaAcademica.appendChild(articulo);
});

// Mostrar experiencia profesional
const listaProfesional = document.getElementById("lista-profesional");

exp_profesional.forEach(function (experiencia) {
    const articulo = document.createElement("article");

    const titulo = document.createElement("h3");
    titulo.textContent = experiencia.titulo;

    const periodo = document.createElement("p");
    periodo.textContent = experiencia.periodo;

    const centro = document.createElement("p");
    centro.textContent = experiencia.centro;

    articulo.appendChild(titulo);
    articulo.appendChild(periodo);
    articulo.appendChild(centro);

    listaProfesional.appendChild(articulo);
});
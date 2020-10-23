// UTILICE EL ARCHIVO FINAL CON HTML Y CSS SOLAMENTE --NO BOOTSTRAP--
//REALICE INTEGRAMENTE EL HEADER, LOS CONTACTOS Y EL FOOTER CON JAVASCRIPT UTIIZANDO ARRAYS Y CICLOS FOR

var headerData = [
    {nombre: "Inicio",
    href: "index.html"},
    {nombre: "Servicios",
    href: "servicios.html"},
    {nombre: "Acerca de mi",
    href: "acercade.html"},
    {nombre: "Casos de éxito",
    href: "casosExito.html"},
    {nombre: "Contacto",
    href: "contacto.html"},
    {nombre: "Registro",
    href: "registro.html"}
];

var contactData = [
    {rel: "nofollow noopener noreferrer",
    href: "https://api.whatsapp.com/send?phone=+542615631178",
    target: "_blank",
    },
    {rel: "nofollow noopener noreferrer",
    href: "https://www.youtube.com/channel/UC1Sym0nZC63kfWB7GAf_NfQ",
    target: "_blank",
    },
    {rel: "nofollow noopener noreferrer",
    href: "https://www.linkedin.com/in/a-axel-poretti-618ba520/",
    target: "_blank",
    }
]

var contactImg = [
    {src: "https://img.icons8.com/color/48/000000/whatsapp.png",
    alt: "WhatsApp"},
    {src: "https://img.icons8.com/color/48/000000/youtube-play.png",
    alt: "YouTube"}, 
    {src: "https://img.icons8.com/color/48/000000/linkedin.png",
    alt: "LinkedIn"}
]


var empresasLinks = [
    {rel: "nofollow noopener noreferrer",
    href: "http://www.unidiversidad.com.ar",
    target: "_blank",
    },
    {rel: "nofollow noopener noreferrer",
    href: "https://bodegaargento.com",
    target: "_blank",
    },
    {rel: "nofollow noopener noreferrer",
    href: "https://www.godoycruz.gob.ar",
    target: "_blank",
    },
    {rel: "nofollow noopener noreferrer",
    href: "https://www.osde.com.ar/index.html#!homepage.html",
    target: "_blank",
    }
]

var empresasImg = [
    {src: "img/UNCUYO.png",
    alt: "Universidad Nacional de Cuyo",
    width: "200",
    energia: "32",
    costo: "24"},
    {src: "img/B.Argento.jpg",
    alt: "Bodega Argento",
    width: "200",
    energia: "37",
    costo: "28"}, 
    {src: "img/GC.png",
    alt: "Municipaliad de Godoy Cruz",
    width: "200",
    energia: "44",
    costo: "32"},
    {src: "img/OSDE.jpg",
    alt: "img/OSDE.jpg",
    width: "200",
    energia: "18",
    costo: "21"},
]

//////////////////////////////////////////////

var body = document.getElementById("body_casos_exito");

var grilla = document.createElement("div");
grilla.className = "grid-container";
body.appendChild(grilla);

var menu = document.createElement("div");
menu.className = "izquierda";
grilla.appendChild(menu);

var header = document.createElement("div");
var headerLink = [headerData.length];
for (let i = 0; i < headerData.length; i++){
    headerLink [i]= document.createElement("a");
    headerLink[i].className = "link";
    headerLink[i].id = "link";
    headerLink[i].href = headerData[i].href;
    headerLink[i].innerText = headerData[i].nombre;
    header.appendChild(headerLink[i]);
}

menu.appendChild(header);

/////////// TABLA ////////////////
var article = document.createElement("article");
article.className = "table section";
article.id = "table section";

grilla.appendChild(article);

var casosExito = document.createElement("table");
casosExito.className = "mitad1";
casosExito.id = "mitad1";

var datosTabla;
datosTabla = `
<tr>
    <th>Organización</th>
    <th>Ahorro económico</th>
    <th>Ahorro de energía</th> 
</tr>`
for (let i = 0; i < empresasLinks.length; i++){
    datosTabla += `
<tr>
    <td><a rel="${empresasLinks[i].rel}" href="${empresasLinks[i].href}" target="${empresasLinks[i].target}"><img src="${empresasImg[i].src}" alt="${empresasImg[i].alt}" width="${empresasImg[i].width}"></a></td>
    <td>${empresasImg[i].energia}</td>
    <td>${empresasImg[i].costo}</td>
</tr>`
}


console.log(datosTabla);
console.log(casosExito);

casosExito.innerHTML = datosTabla;
article.appendChild(casosExito);



/////////// CONTACTOS ////////////////

var contacts = document.createElement("div");
contacts.className = "contacts section";
contacts.id = "contacts";

var contactsLink = [contactData.length];
for (let i = 0; i < contactData.length; i++){
    contactsLink[i] = document.createElement("a");
    contactsLink[i].href = contactData[i].href;
    contactsLink[i].rel = contactData[i].rel;
    contactsLink[i].target = contactData[i].target;
    contacts.appendChild(contactsLink[i]);
}

var contactsLinkImg = [contactImg.length];
for (let i = 0; i < contactImg.length; i++){
    contactsLinkImg[i] = document.createElement("img");
    contactsLinkImg[i].src = contactImg[i].src;
    contactsLinkImg[i].alt = contactImg[i].alt;
    contactsLink[i].appendChild(contactsLinkImg[i]);
}

grilla.appendChild(contacts);


/////////// FOOTER ////////////////

var footer = document.createElement('footer');
footer.className = "footer copyright";
footer.innerHTML = `<br>
<p>&copy; 2020 Todos los derechos reservados</p>`;
grilla.appendChild(footer);
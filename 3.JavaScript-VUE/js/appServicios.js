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


var empresasResultados = [
    {rel: "nofollow noopener noreferrer",
    href: "http://www.unidiversidad.com.ar/",
    target: "_blank",
    },
    {rel: "nofollow noopener noreferrer",
    href: "https://bodegaargento.com/",
    target: "_blank",
    },
    {rel: "nofollow noopener noreferrer",
    href: "https://www.godoycruz.gob.ar/",
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
    width: "200"},
    {src: "img/B.Argento.jpg",
    alt: "Bodega Argento",
    width: "200"}, 
    {src: "img/GC.png",
    alt: "Municipaliad de Godoy Cruz",
    width: "200"},
    {src: "img/OSDE.jpg",
    alt: "img/OSDE.jpg",
    width: "200"}
]

var flexboxImagenes = [
    {src: "/img/termografia/2.jpg"},
    {src: "/img/termografia/3.jpg"},
    {src: "/img/termografia/4.jpg"},
    {src: "/img/termografia/5.jpg"},
    {src: "/img/termografia/6.png"},
    {src: "/img/termografia/7.jpg"},
    {src: "/img/termografia/8.png"},
    {src: "/img/termografia/9.jpg"},
    {src: "/img/termografia/10.jpg"},
    {src: "/img/termografia/11.jpg"},
    {src: "/img/termografia/12.png"},
    {src: "/img/termografia/13.jpg"},
    {src: "/img/termografia/14.jpg"},
    {src: "/img/termografia/15.jpg"}
]
//////////////////// SERVICIOS ////////////////////

//////////////////// SERVICIOS ////////////////////


var body = document.getElementById("body_servicios");

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

var termografias = document.createElement("div");
termografias.className = "flexbox termografias section";
termografias.id = "termografias";

var flexbox = [flexboxImagenes.length];
for (let i = 0; i < flexboxImagenes.length; i++){
    flexbox[i] = document.createElement("img");
    flexbox[i].className = "flexbox_img";
    flexbox[i].src = flexboxImagenes[i].src;
    termografias.appendChild(flexbox[i]);
}

grilla.appendChild(termografias);

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

var footer = document.createElement('footer');
footer.className = "footer copyright";
footer.innerHTML = `<br>
<p>&copy; 2020 Todos los derechos reservados</p>`;
grilla.appendChild(footer);
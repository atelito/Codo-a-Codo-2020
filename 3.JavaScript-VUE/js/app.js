// UTILICE EL ARCHIVO FINAL CON HTML Y CSS SOLAMENTE --NO BOOTSTRAP--
//REALICE INTEGRAMENTE EL HEADER, LOS CONTACTOS Y EL FOOTER CON JAVASCRIPT UTIIZANDO ARRAYS Y CICLOS FOR

var headerData = [
    {nombre: "Inicio",
    href: "index.html"},
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
var contactImg= [
    {src: "https://img.icons8.com/color/48/000000/whatsapp.png",
    alt: "WhatsApp"},
    {src: "https://img.icons8.com/color/48/000000/youtube-play.png",
    alt: "YouTube"}, 
    {src: "https://img.icons8.com/color/48/000000/linkedin.png",
    alt: "LinkedIn"}
]

var body = document.getElementById("body");

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
}

for (let i = 0; i < headerData.length; i++){
header.appendChild(headerLink[i]);
}
menu.appendChild(header);

var foto1 = document.createElement("div");
foto1.className = "mitad1";
foto1.innerHTML = `<div class="contenedor">
<img clas="dimensiones" src="img/paneles.jpg" alt="Energia">
<img class="dimensiones cambioImg" src="img/molinos2.jpg" alt="Molinos">
</div>`;
grilla.appendChild(foto1);

var parrafo1 = document.createElement("div");
parrafo1.className = "derecha1 section";
parrafo1.innerHTML = `<h2>Ahorro de costo de energia</h2>
<ul>
    <li class="a">Control y análisis de Facturas de energía eléctrica y Gas Natural. Análisis de Optimización de Costos de Energía. Representación y Gestión de reclamos</li>
    <li class="a">Planificación y adecuación del Régimen Tarifario según necesidad del cliente</li>
    <li class="a">Contrataciones de potencia electrica segun matriz de produccion del usuario</li>
    <li class="a">Proyecciones financieras y costos semestrales esperados por ajustes tarifarios y/o cambios programados en la matriz de producción</li>
    <li class="a">Análisis de contratos Energéticos. Asesoramiento en ley 27.191 / 27.424</li>
</ul>`;
grilla.appendChild(parrafo1);

var foto2 = document.createElement("div");
foto2.className = "mitad2";
foto2.innerHTML = `<div class="contenedor">
<img clas="dimensiones" src="img/medidores.jpeg" alt="Energia">
<img class="dimensiones cambioImg" src="img/molinos.jpg" alt="Molinos">
</div>`;
grilla.appendChild(foto2);

var parrafo2 = document.createElement("div");
parrafo2.className = "derecha2 section";
parrafo2.innerHTML = `<h2>Eficiencia energética y Energías Renovables</h2>
<ul>
    <li class="a">Optimización de procesos productivos</li>
    <li class="a">Asesoramiento en plan de inversiones en eficiencia energética</li>
    <li class="a">Detección y reducción en pérdidas ocultas</li>
    <li class="a">Mediciones de temperatura en Tableros eléctricos</li>
    <li class="a">Mediciones termográficas en envolvente de edificios</li>
    <li class="a">Mejorar la Climatización</li>
    <li class="a">Iuminación. Medición de niveles de iluminancia en espacios de trabajo. Relación con requisitos de Higiene y Seguridad</li>
    <li class="a">Modelización térmica y lumínica por software</li>
    <li class="a">Relevamiento de cargas y detección de picos de potencia</li>
    <li class="a">Mediciones de puesta a tierra y continuidad de las masas segun resolución SRT900</li>
    <li class="a">Proyectos de inversión para autogeneración: energía solar térmica y fotovoltaica</li>
    <li class="a">Capacitaciones a personal clave</li>
</ul>`;
grilla.appendChild(parrafo2);

var contacts = document.createElement("div");
contacts.className = "contacts section";
contacts.id = "contacts";

var contactsLink = [contactData.length];
for (let i = 0; i < contactData.length; i++){
    contactsLink[i] = document.createElement("a");
    contactsLink[i].href = contactData[i].href;
    contactsLink[i].rel = contactData[i].rel;
    contactsLink[i].target = contactData[i].target;

}

var contactsLinkImg = [contactImg.length];
for (let i = 0; i < contactImg.length; i++){
    contactsLinkImg[i] = document.createElement("img");
    contactsLinkImg[i].src = contactImg[i].src;
    contactsLinkImg[i].alt = contactImg[i].alt;
    contactsLink[i].appendChild(contactsLinkImg[i]);
}

for (let i = 0; i < contactData.length; i++){
    contacts.appendChild(contactsLink[i]);
    
}
grilla.appendChild(contacts);

var footer = document.createElement('footer');
footer.className = "footer copyright";
footer.innerHTML = `<br>
<p>&copy; 2020 Todos los derechos reservados</p>`;
grilla.appendChild(footer);
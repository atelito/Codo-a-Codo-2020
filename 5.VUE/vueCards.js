
var alumnos = new VUE({
    el: "#alumnos",
    data: {
        alumnos: [{
                nombre: "Axel Poretti",
                correo: "aaxelporetti@gmail.com",
                legajo: "9150",
                imagen: "img/avatar.png"
            },
            {
                nombre: "Juan Perez",
                correo: "jperez@gmail.com",
                legajo: "10105",
                imagen: "img/avatar2.png"
            }
        ]
    }
})

var app = new Vue({
    el: "#app",
    data: {
        alumnos: [{
                nombre: "Axel Poretti",
                correo: "aaxelporetti@gmail.com",
                legajo: "9150",
                imagen: "img/avatar.png"
            },
            {
                nombre: "Juan Perez",
                correo: "jperez@gmail.com",
                legajo: "10105",
                imagen: "img/avatar2.png"
            }
        ]
    }
})
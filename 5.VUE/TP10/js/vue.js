const templates = {
    home: `<div>
    <section class="izquierda">
    <h1><span class="icon-person"></span>&nbspAlumnos</h1>
    <table>
            <th>Nombre y Apellido</th>
            <th>Correo Electronico</th>
            <th>Legajo</th>
            <tr>
                <td><a class="link" rel="nofollow noopener noreferrer"
                href="https://www.linkedin.com/in/a-axel-poretti-618ba520/" target="_blank">Axel Poretti</a></td>
                <td>aaxelporetti@gmail.com</p></td>
                <td>9150</p>
            </tr>
            <tr>
                <td><a class="link" rel="nofollow noopener noreferrer" href="" target="_blank">Natalia Natalia</a></td>
                <td>nn@gmail.com</p></td>
                <td>1050</p>
            </tr>
        </table>
</section>
    <section class="derecha">
        <img src="img/mouse.webp" alt="mouse" height="280em" />
    </section>
    </div>`,
    introduccion: `
    <div>
    <section class="izquierda">
    <h1>Introducción</h1>
    <p>     Un ordenador es un dispositivo electrónico capaz de recibir instrucciones y ejecutarlas, procesando la
        información recibida. Está constituido básicamente por hardware y software, siendo el hardware la parte
        física del ordenador: tanto la caja y los componentes internos (placa base, disco duro u otros) como los
        elementos conectados a él (teclado, mouse, monitor, impresora u otros) y el software, es la parte
        inmaterial, o intangible, que hace que funcione el hardware. Es decir, para que un ordenador, sea del
        tipo que sea, pueda arrancar y sirva para una determinada utilidad, necesita del software adecuado.
    </p>
    <p>
            Mediante el software, el ser humano puede comunicarse e interactuar con los distintos elementos
        informáticos. El software puede clasificarse en software de sistemas (sistemas operativos) y software de
        aplicación (programas como Word, Excel u otros).
    </p>
    <p>
            Los periféricos son componentes informáticos que permiten al ordenador comunicarse con el exterior. A
        pesar de que el término “periférico” implica a menudo el concepto de “adicional pero no esencial”,
        muchos periféricos son elementos fundamentales para un sistema informático. Tal es el caso del mouse.
    </p>
    <p>
            El mouse es un periférico de entrada, cuyo fin principal consiste en señalar puntos concretos de la
        interfaz de usuario de los programas. Esto se traduce en convertir los movimientos de la mano en
        información digital que el ordenador puede procesar.
    </p>
    <p>
            El objetivo del presente informe es la investigación sobre el funcionamiento del controlador del Mouse,
        por eso comenzaremos con una definición y conceptos básicos sobre el mouse, sus diferentes tipos y
        funcionamiento. Luego contaremos cómo se vincula con los demás elementos del hardware. Pasando al tema
        central donde detallaremos el funcionamiento del driver de dicho periférico. Para finalizar las
        conclusiones finales del trabajo.
    </p>


</section>
<section class="derecha">
    <img src="img/mouse2.jpg" alt="mouse" height="280em">
</section>
    </div>`,
    desarrollo: `<section class="izquierda">
    <div>
    <span class="ir-arriba icon-circle-up"></span>
        <section id="menuLateral">

            <ul class="nav">
                <li><a class="linkChico" href="#Desarrollo">Desarrollo</a></li>
                <li><a class="linkChico" href="#Mouse">Mouse</a>
                    <ul>
                        <li><a class="linkChico" href="#Tipos según mecanismo">Tipos según mecanismo</a></li>
                        <li><a class="linkChico" href="#Tipos según conexión">Tipos según conexión</a></li>
                        <li><a class="linkChico" href="#Funcionamiento">Funcionamiento</a></li>
                    </ul>
                <li><a class="linkChico" href="#Driver o controlador">Driver o controlador</a>
                    <ul>
                        <li><a class="linkChico" href="#Concepto">Concepto</a></li>
                        <li><a class="linkChico" href="#Comunicaciones con los periféricos">Comunicaciones con los periféricos</a></li>
                        <li><a class="linkChico" href="#Entrada de datos">Entrada de datos</a></li>
                        <li><a class="linkChico" href="#Interrupciones">Interrupciones</a></li>
                    </ul>
            </ul>

        </section>
    </div>
    <h1 id="Desarrollo"> Desarrollo</h1>
    <h2 id="Mouse">Mouse</h2>
    <p>
        El mouse es un dispositivo apuntador empleado para facilitar el manejo
        de un entorno gráfico en un ordenador. Generalmente está fabricado en
        plástico y se utiliza con una mano. Detecta su movimiento relativo en
        dos dimensiones por la superficie en la que se apoya, reflejándose a
        través de un indicador denominado puntero del mouse en el monitor.
        Consta de una carcasa y dos o tres botones situados en su parte
        superior que realizan determinadas acciones al pulsarlos. Puede
        conectarse por cable o ser inalámbrico (por bluetooth o infrarrojos).
        Existen varios tipos principales de mouses: mecánico, óptico y láser.
        La diferencia entre estos está en el sistema utilizado para transmitir
        al ordenador los movimientos que se realizan con el mouse sobre una
        superficie lisa.
    </p>
    <h3 id="Tipos según mecanismo">Tipos según mecanismo</h3>
    <p>Los tipos más importantes de mouses según el mecanismo son:</p>
    <ul>
        <li>
            Electromecánico: el mouse posee una bola de acero recubierta de
            goma. La bola está en contacto con dos rodillos, uno vertical y otro
            horizontal. Estos rodillos terminan en un disco con muescas. Un rayo
            de luz dirigido a cada disco mide el paso de la luz por las muescas
            y calcula el espacio recorrido por la bola. (ya se encuentran en
            desuso)
        </li>
        <li>
            Óptico: en lugar de la bola tiene una ventana por la que se
            proyectan rayos de luz que se encargan de medir el desplazamiento.
            Los elementos esenciales del mouse óptico son, básicamente, una
            pequeña cámara (que toma unas 1.500 imágenes por segundo), un diodo
            emisor de luz roja (LED) y un software de procesamiento digital de
            imagen en tiempo real (DSP). El DSP será el encargado de procesar
            las imágenes y determinar el sentido y velocidad del movimiento.
            (Los más usado)
        </li>
        <li>
            Táctil (touchpad): incorporado en la mayoría de los ordenadores
            portátiles, es una pequeña superficie sobre la que se desplaza el
            dedo para controlar el movimiento del cursor en la pantalla.
            (Utilizado en notebook).
        </li>
        <li>
            Electromecánico: el mouse posee una bola de acero recubierta de
            goma. La bola está en contacto con dos rodillos, uno vertical y otro
            horizontal. Estos rodillos terminan en un disco con muescas. Un rayo
            de luz dirigido a cada disco mide el paso de la luz por las muescas
            y calcula el espacio recorrido por la bola. (ya se encuentran en
            desuso)
        </li>
    </ul>
    <h3 id="Tipos según conexión">Tipos según conexión</h3>
    <ul>
        <li>
            <p>
                Cableado: Es el formato más popular y más económico se distribuyen
                con dos tipos de conectores posibles, tipo USB y PS/2;
                antiguamente también era popular usar el puerto serie.
            </p>
            <p>
                Es el preferido por los videojugadores experimentados, ya que la
                velocidad de transmisión de datos por cable entre el mouse y la
                computadora es óptima en juegos que requieren de una gran
                precisión.
            </p>
        </li>
        <li>
            Inalámbrico En este caso el dispositivo carece de un cable que lo
            comunique con la computadora, en su lugar utiliza algún tipo de
            tecnología inalámbrica. Para ello requiere un receptor que reciba la
            señal inalámbrica que produce, mediante baterías, el mouse. El
            receptor normalmente se conecta a la computadora a través de un
            puerto USB. Según la tecnología inalámbrica usada pueden
            distinguirse varias posibilidades:
            <ul>
                <li>
                    Radiofrecuencia: es el tipo más común y económico de este tipo
                    de tecnologías. Funciona enviando una señal a una frecuencia de
                    2.4 GHz, popular en la telefonía móvil, la misma que los
                    estándares IEEE 802.11b y IEEE 802.11g. Es popular, entre otras
                    cosas, por sus baja tasa de desconexión y pocas interferencias
                    con otros equipos inalámbricos, además de disponer de un alcance
                    suficiente de hasta 10 metros.
                </li>
                <li>
                    Infrarrojo: esta tecnología utiliza una señal de onda infrarroja
                    como medio de transmisión de datos, popular también entre los
                    controles o mandos remotos de televisiones, equipos de música o
                    en telefonía celular. A diferencia de la anterior, tiene un
                    alcance medio inferior a los tres metros, y tanto el emisor como
                    el receptor deben estar en una misma línea visual de contacto
                    directo ininterrumpido para que la señal se reciba
                    correctamente. Por ello su éxito ha sido menor, llegando incluso
                    a desaparecer del mercado.
                </li>
                <li>
                    Bluetooth: esta tecnología es la más reciente como transmisión
                    inalámbrica (estándar IEEE 802.15.1), que cuenta con cierto
                    éxito en otros dispositivos. Su alcance es de unos 10 metros
                    (que corresponde a la Clase 2 del estándar Bluetooth).
                </li>
            </ul>
        </li>
        <li>
            Táctil (touchpad): incorporado en la mayoría de los ordenadores
            portátiles, es una pequeña superficie sobre la que se desplaza el
            dedo para controlar el movimiento del cursor en la pantalla.
            (Utilizado en notebook).
        </li>
        <li>
            Electromecánico: el mouse posee una bola de acero recubierta de
            goma. La bola está en contacto con dos rodillos, uno vertical y otro
            horizontal. Estos rodillos terminan en un disco con muescas. Un rayo
            de luz dirigido a cada disco mide el paso de la luz por las muescas
            y calcula el espacio recorrido por la bola. (ya se encuentran en
            desuso)
        </li>
    </ul>
    <h3 id="Funcionamiento">Funcionamiento</h3>
    <p>
        El objetivo principal o más habitual es seleccionar distintas opciones
        que pueden aparecer en la pantalla, con uno o dos clics, mediante
        pulsaciones en algún botón o botones. Para su manejo, el usuario debe
        acostumbrarse tanto a desplazar el puntero como a pulsar con uno o dos
        clics para la mayoría de las tareas.
    </p>
    <article class="imagen">
        <img src="img/1.png" alt="proceso desde la lectura hasta la salida" height="300em" width="auto" /><br />
    </article>
    <p>
        Los sensores digitales producen una salida digital discreta de señales
        o voltajes que son una representación digital de la cantidad que se
        está midiendo. Esa salida es una señal binaria, entonces significa que
        una señal digital sólo produce valores discretos (no continuos) que
        pueden ser emitidos como un solo "bit", (transmisión en serie) o
        combinando los bits para producir una salida de un solo "byte"
        (transmisión en paralelo).
    </p>
    <p>
        La precisión de la señal digital es proporcional al número de bits
        utilizados para representar la cantidad medida. Por ejemplo, si se
        utiliza un procesador de 8 bits, se obtendrá una precisión del 0,390%
        (1 parte en 256). Mientras que usar un procesador de 16 bits da una
        precisión de 0,0015%, (1 parte en 65.536) o 260 veces más precisa.
        Esta precisión puede mantenerse ya que las cantidades digitales se
        manipulan y procesan muy rápidamente, millones de veces más rápido que
        las señales analógicas.
    </p>
    <p>
        El encargado de recibir y traducir esa salida binaria es el
        controlador o driver.
    </p>
    <p>
        Es importante destacar que la zona sobre la que trabaja el mouse no
        coincide con la pantalla real. EI mouse se mueve sobre una pantalla
        virtual, que depende del modo de vídeo en el que se esté trabajando,
        es decir, de la resolución.
    </p>
    <p>
        La posición que ocupa el mouse en la pantalla se define siempre en
        coordenadas gráficas, aunque se esté trabajando en modo texto,
        considerando tantos puntos en la pantalla como permita la tarjeta
        gráfica. En las funciones básicas de manejo del mouse, referidas a
        pantalla de texto se hace necesario traducir estas coordenadas
        virtuales a coordenadas de texto.
    </p>
    <p>
        El desplazamiento del cursor se realiza mediante una unidad de
        movimiento del mouse equivale a 1/200 pulgadas. Cuando se mueve el
        mouse, el controlador del mismo (el programa driver) mueve el cursor
        horizontal y verticalmente un número de pixels que depende de la
        sensibilidad del sensor. Por defecto, cuando se instala el controlador
        del mouse, para conseguir un desplazamiento de 8 pixels se precisan 8
        en horizontal y 16 en vertical.
    </p>
    <h2 id="Driver o controlador">Driver o controlador</h2>
    <h3 id="Concepto">Concepto</h3>
    <p>
        Los drivers son el elemento necesario para traducir las instrucciones
        del hardware hacia el software, y del software hacia el hardware, de
        manera que uno se entienda con el otro. Imaginando que el software
        está en español y el hardware en inglés si no hubiera un traductor de
        por medio, no se entenderían.
    </p>
    <p>
        Todos los sistemas operativos modernos suelen incluir de serie un
        controlador software básico para que este pueda funcionar de manera
        inmediata y correcta. No obstante, es normal encontrar software propio
        del fabricante que puede añadir una serie de funciones opcionales, o
        propiamente los controladores si son necesarios.
    </p>
    <p></p>
    <h3 id="Comunicaciones con los periféricos">Comunicaciones con los periféricos</h3>
    <p>
        Los dispositivos periféricos se comunican con el procesador a través
        de puertos: registros incluidos en el hardware del controlador del
        periférico en los que este controlador puede poner o recoger datos, o
        poner informaciones sobre su estado, o recoger órdenes procedentes del
        procesador. Cada puerto tiene asignada una dirección de
        entrada/salida, y los procesadores siguen uno de estos dos convenios:
    </p>
    <ul>
        <li>
            Espacios de direccionamiento independientes: las direcciones de
            entrada/salida no tienen relación alguna con las direcciones de la
            memoria. La dirección puede referirse a una posición de memoria o a
            un puerto. En estos procesadores son necesarias instrucciones
            específicas para la entrada/salida.
        </li>
        <li>
            Espacio de direccionamiento compartido: ciertas direcciones
            generadas por el procesador no corresponden a la memoria, sino a
            puertos. Por tanto, el acceso a estos puertos no requiere
            instrucciones especiales, son las mismas que permiten el acceso a la
            memoria. Se dice que la entrada/salida está “memory mapped”.
        </li>
    </ul>
    <p>
        La forma de programar estas operaciones depende de cada periférico y
        de su tasa de transferencia. Hay dos tipos:
    </p>
    <ul>
        <li>
            Periféricos de caracteres, o de presentación de datos: son lentos,
            en los que la tasa de transferencia de datos es sustancialmente
            inferior a la velocidad con que el procesador puede procesarlos
            (teclado, mouse, sensor de temperatura, etc.). Cada vez que el
            periférico está preparado para enviar o recibir un dato se ejecuta
            una instrucción que transfiere el dato (normalmente un byte) entre
            un registro del procesador y el puerto correspondiente.
        </li>
        <li>
            Periféricos de bloques: son aquellos cuya tasa de transferencia es
            comparable a la velocidad del procesador (disco, pantalla gráfica,
            USB, controlador ethernet, etc.), y se hace necesario que el
            controlador del periférico se comunique directamente con la memoria,
            leyendo o escribiendo en cada operación no ya un byte, sino un
            bloque de bytes. Es la técnica de DMA (acceso directo a memoria,
            Direct Memory Access).
        </li>
    </ul>
    <article class="imagen">
        <img src="img/2.png" alt="perifericos" height="350em" width="auto" />
    </article>
    <p>
        Los dispositivos de presentación de datos representan una carga muy
        baja de trabajo para el procesador comparados con los dispositivos de
        almacenamiento de datos.
    </p>
    <p>
        Los dispositivos periféricos que pueden conectarse a un computador
        para realizar entrada y salida de información presentan diferencias,
        no obstante existen una serie de funciones básicas comunes a todo
        dispositivo de E/S:
    </p>
    <p>
        La identificación del dispositivo se realiza con un decodificador de
        direcciones. El envío y la recepción de datos tiene lugar a través de
        registros de entrada y salida de datos. Los circuitos de
        sincronización se manipulan por medio de registros de estado y
        control. El siguiente esquema representa gráficamente estas funciones:
    </p>
    <article class="imagen">
        <img src="img/3.png" alt="perifericos" height="350em" width="auto" />
    </article>
    <p>
        Las diferencias existentes entre los dispositivos periféricos han
        hecho que la unidad de E/S de un computador se organice en torno a dos
        tipos de elementos, unos que soportan las características comunes a
        todos los dispositivos (módulos de E/S) y otros específicos para cada
        periférico que son los controladores de dispositivo:
    </p>
    <article class="imagen">
        <img src="img/4.png" alt="perifericos" height="180em" width="auto" />
    </article>
    <p>
        La estructura del controlador de un dispositivo tendrá que adaptarse
        en cada caso a las peculiaridades específicas del periférico. Los
        controladores de dispositivos periféricos presentan una estructura
        general como la representada en la siguiente figura:
    </p>
    <article class="imagen">
        <img src="img/5.png" alt="perifericos" height="350em" width="auto" />
    </article>
    <p>
        La conexión con el módulo de E/S se realiza a través de señales de
        control, estado y datos. Es la parte del controlador que homologa su
        comportamiento singular al esquema general de gestión de la E/S. Las
        señales de control determinan la función que debe realizar el
        dispositivo. La lógica de control asociada al dispositivo controla su
        operación en respuesta a las indicaciones del módulo de E/S. El
        transductor convierte las señales eléctricas asociadas a los datos a
        otra forma de energía. Además, suele existir un buffer asociado al
        transductor para almacenar temporalmente el dato que se transfiere
        entre el módulo de E/S y el dispositivo.
    </p>
    <h3 id="Entrada de datos">Entrada de datos</h3>
    <p>
        Para el caso del mouse, las líneas básicas que intervienen son las del
        bus de datos y dos de control: petición de dato y dato aceptado. La
        primera solicita al dispositivo un dato de entrada, y es activada por
        el módulo de E/S. La segunda la activa el dispositivo periférico
        cuando ha generado el dato y su valor es estable en el bus de datos.
        Con la activación de esta señal el módulo de E/S conoce la validez del
        dato en el bus y puede proceder a su carga en el registro de datos. La
        anterior secuencia de acciones que realizan el módulo de E/S y el
        dispositivo periférico en una operación de entrada se puede ver en el
        siguiente diagrama:
    </p>
    <article class="imagen">
        <img src="img/6.png" alt="perifericos" height="450em" width="auto" />
    </article>
    <p>
        Las diferencias de velocidad entre la CPU y los periféricos de E/S, y
        lo que es más importante, la no previsibilidad del tiempo de respuesta
        de estos últimos, hace necesario un mecanismo de sincronismo que
        permita coordinar adecuadamente las transferencias de datos entre
        ambas unidades.
    </p>
    <h3 id="Interrupciones">Interrupciones</h3>
    <p>
        Básicamente una interrupción viene determinada por la ocurrencia de
        una señal externa que provoca la bifurcación a una dirección
        específica de memoria, interrumpiendo momentáneamente la ejecución del
        programa. A partir de esa dirección se encuentra la rutina de
        tratamiento que se encarga de realizar la operación de E/S propiamente
        dicha, devolviendo después el control al punto interrumpido del
        programa.
    </p>
    <p>
        Las interrupciones son un método del que disponen los dispositivos e
        incluso los procesos para hacer notar a la CPU la aparición de alguna
        circunstancia que requiera su intervención. De este modo, los
        dispositivos pueden provocar que la CPU deje por el momento la tarea
        que estaba realizando y atienda la interrupción. Una vez atendida,
        seguirá con su labor anterior. Cuando no existían interrupciones, era
        el procesador el que tenía que estar continuamente comprobando el
        estado del dispositivo cuando lo necesitaba.
    </p>
    <p>
        Para poder atenderla de la forma correcta, debe saber con anterioridad
        cómo tratarla. Por ello, las computadoras tienen en un sitio conocido
        de memoria las distintas rutinas de tratamiento para las diferentes
        interrupciones. El procesador reconoce la interrupción de la que se
        trata y busca en memoria la rutina correspondiente.
    </p>
    <article class="imagen">
        <img src="img/7.png" alt="perifericos" height="650em" width="auto" />
    </article>
    <p>
        Como ocurre casi siempre que se quiere acceder directamente al
        hardware, la forma más cómoda de hacerlo es usar las funciones que nos
        proporcionan las interrupciones software. En este caso, la
        interrupción que se encarga de controlar el mouse es la número 33h.
        Esta interrupción nos proporciona nada menos que 53 funciones
        distintas, que seleccionaremos poniendo su número en el registro ax.
        Si la función requiere parámetros extras, se utilizan otros registros
        del procesador.De entre todas las funciones que se ofrecen, se
        utilizarán las siguientes:
    </p>
    <article class="imagen">
        <img src="img/8.png" alt="perifericos" height="330em" width="auto" />
    </article>
</section>
<section class="profe">
    <h1><span class="icon-mouse"></span>&nbspPROFESOR</h1>
    <p>Raúl Tonelli --- e-mail: rtonelli.ar@gmail.com</p>
</section>`,
    conclusiones: `
    <div>
    <section class="derecha">
    <h1>Conclusiones</h1>
    <p>
            El driver del mouse es un pequeño archivo con códigos y es responsable
        de decir exactamente a la computadora cómo se puede encontrar el
        dispositivo físicamente y qué recursos utiliza para funcionar
        correctamente, si no existiera, sería muy difícil comunicarse con la
        computadora.
    </p>
    <p>
            Muchos de los ataques de seguridad o virus que actualmente existen,
        proporcionan vulnerabilidades o fallas al controlador del mouse,
        impidiendo una buena comunicación. Por eso es importante actualizar el
        controlador (actualizaciones de seguridad y compatibilidad) con las
        nuevas versiones que requiera el sistema operativo de nuestra
        computadora y obtener un rendimiento eficaz.
    </p>
    <p>
            Los Drivers o controladores los podemos encontrar en forma genérica ya
        instalados en el sistema operativo de nuestra CPU o en las
        actualizaciones que nos proporciona nuestra herramienta
        “Administración de dispositivos”, sino también con la compra de un
        nuevo mouse, el proveedor nos ofrece un CD (ya casi en desuso) o un
        link a su página web oficial para descargar el drivers correspondiente
        que coincida con nuestro sistema operativo y el modelo del mouse
        adquirido. Actualmente existen muchas plataformas donde se ofrecen
        suscripciones para actualizaciones de drivers permanentes y así evitar
        vulnerabilidades o fallas en los equipos.
    </p>
    <p>
            Debido a que el software de controladores de dispositivos se ejecuta
        como parte del sistema operativo, con acceso sin restricciones a todo
        el equipo, resulta esencial que sólo se permiten los controladores de
        dispositivos autorizados y que algunos usuarios administradores de la
        red permitan la actualización e instalación de los mismos.
    </p>
    <p>
            Esto permite una seguridad mejorada, puesto que los usuarios estándar
        no pueden instalar controladores de dispositivos que no estén firmados
        o que estén firmados por un editor que no es de confianza, los
        administradores tendrán un control riguroso respecto a los
        controladores de dispositivos que pueden usarse en una organización.
        Además una reducción de los costos de soporte técnico ya que permite
        mantener la seguridad del equipo, al tiempo que se reducen las
        solicitudes del departamento de soporte técnico.
    </p>
    <p>
            Podemos concluir que contar con los drivers correctos y actualizados
        permiten una experiencia de usuario mejorada.
    </p>
</section>
<section class="izquierda">
            <img src="img/conclusion.jpg" alt="conclusion" height="auto" width="400em" /><br />
        </section>
    </div>`,
    bibliografia: `<div>
    <section class="derecha">
    <h1>Bibliografia</h1>
    <ul>
        <li><a class="linkChico" href="http://platea.pntic.mec.es/lherranz/tema2/2dispositivos.htm">M.Luz
                Herranz Fuentes. (s. f.). Dispositivos de Entrada/Salida. Hardware. Recuperado 22 de octubre de
                2020</a></li>
        <li><a class="linkChico" href="http://mimosa.pntic.mec.es/~flarrosa/raton.pdf">Interrupciones. (s. f.).
                Recuperado 22 de octubre de 2020</a></li>
        <li><a class="linkChico" href="http://www.fdi.ucm.es/profesor/jjruz/web2/temas/ec8.pdf">Organización de
                la Entrada/salida. (s. f.). Recuperado 22 de octubre de 2020</a></li>
        <li><a class="linkChico" href="https://www.electronics-tutorials.ws/io/io_1.html">Sensors and
                Transducers and Introduction. (s. f.). Sensors and Transducers and Introduction. Recuperado 22
                de octubre de 2020</a></li>
        <li><a class="linkChico" href="https://hardzone.es/reportajes/que-es/drivers-hardware/">Rodrigo Alonso.
                (2019, octubre 20). Drivers del hardware: Qué son y por qué son necesarios para el PC. HardZone.
            </a></li>
    </ul>
    <p><i>Respeta normas APA 7ma edición</i></p>


</section>
    </div>`,
}

var app = new Vue({
    el: "#SPA",
    data: {
        view: 'home',
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
    },
    components: {
        home: {
            template: templates.home
        },
        introduccion: {
            template: templates.introduccion
        },
        desarrollo: {
            template: templates.desarrollo
        },
        conclusiones: {
            template: templates.conclusiones
        },
        bibliografia: {
            template: templates.bibliografia
        }
    }
})

var alumnos = new Vue({
    el: '#alumnos',

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
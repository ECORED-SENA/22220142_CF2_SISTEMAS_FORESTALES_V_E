export default {
  global: {
    componenteFormativo:
      'Estructuración de un SIG para un plan de manejo forestal y/o agroecológico',
    descripcionCurso:
      'En este componente se abordan temas como GPS, manejo de software de código abierto y alistamiento de información geográfica necesaria para el desarrollo del proyecto forestal o agroecológico.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Captura de información geográfica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Sistemas de Posicionamiento Global GPS',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Constelaciones satelitales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: ' Equipos y aplicaciones',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Manejo de Software SIG de código abierto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Descarga e Instalación del software QGIS 3.16',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Interface del Software',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Creación del proyecto',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Importación y creación de archivos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gestión de la información Geográfica del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Alistamiento de la información analógica y digital',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Georeferenciación y vectorización',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Creación de capas vectoriales',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Configuración de información atributiva',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Cálculo de geometrías y realización de geoprocesos',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Gps; qué es y cómo funciona. (6 de febrero de2019). Topografia2.',
      link: 'https://topografia2.com/como-funciona-gps/',
    },
    {
      referencia:
        '2.1. Lesson: Una vista general de la interfaz — documentación de QGIS Documentation -. (s/f). Qgis.org. Recuperado el 24 de octubre de 2021.',
      link:
        'https://docs.qgis.org/3.16/es/docs/training_manual/basic_map/overview.html',
    },
    {
      referencia:
        'Morales, A. (10 de noviembre de 2013,). Los 10 formatos GIS vectoriales más populares. Mappinggis.com.',
      link:
        'https://mappinggis.com/2013/11/los-formatos-gis-vectoriales-mas-populares/',
    },
    {
      referencia:
        '●	Wikipedia contributors. (s.f). Constelación de satélites. Wikipedia, The Free Encyclopedia. Recuperado el 24 de octubre de 2021',
      link:
        'https://es.wikipedia.org/w/index.php?title=Constelaci%C3%B3n_de_sat%C3%A9lites&oldid=137981860',
    },
  ],
  glosario: [
    {
      termino: 'Atributo',
      significado: 'Descripción de las características de una entidad espacial',
    },
    {
      termino: 'Base de Datos',
      significado:
        'Es un conjunto de datos pertenecientes a un mismo contexto y almacenados sistemáticamente para su posterior uso.',
    },
    {
      termino: 'Campo',
      significado:
        'Sitio donde se almacena la característica específica de cada entidad.',
    },
    {
      termino: 'Geopackage',
      significado:
        'Es un formato de archivo universal construido sobre la base de SQLite, para compartir y transferir datos espaciales vectoriales y raster.',
    },
    {
      termino: 'Satélite',
      significado:
        'Es un objeto que ha sido puesto en órbita intencionadamente',
    },
    {
      termino: 'Simbología',
      significado: 'Es la apariencia visual de una capa en el mapa.',
    },
    {
      termino: 'Vector',
      significado:
        'Modelo de representar “objetos espaciales” del mundo real dentro de un ambiente SIG.',
    },
  ],
  complementario: [
    {
      texto:
        'Minciencias. (13 de diciembre de 2017). ¿Qué es una Constelación Satelital?',
      tipo: 'Video',
      link: 'https://youtu.be/wEooczNowM0',
    },
    {
      texto:
        'Genial. (27 de junio de 2019). Explicación sencilla de cómo funciona el GPS',
      tipo: 'Video',
      link: 'https://youtu.be/IT7RzYcznSc',
    },
    {
      texto:
        'Lesson: Una vista general de la interfaz. (s/f). Qgis.org. Recuperado el 24 de octubre de 2021',
      tipo: 'Página web',
      link:
        'https://docs.qgis.org/2.8/es/docs/training_manual/introduction/overview.html',
    },
    {
      texto: 'PRIMERO PROYECTO QGIS. (20 de febrero de 2020).',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=3LBLVT4gVps',
    },
    {
      texto: 'QGIS',
      tipo: 'Página web',
      link: 'https://qgis.org/es/site/',
    },
    {
      texto:
        '¿Qué software y herramientas de SIG utilizamos? - UNIGIS. (8 de mayo de 2017). Unigis.es.',
      tipo: 'Articulo WEB',
      link: 'https://www.unigis.es/software-sig/',
    },
    {
      texto:
        'El Sistema de Posicionamiento Global. (s/f). Gps.gov. Recuperado el 24 de octubre de 2021',
      tipo: 'Artículo',
      descarga: 'https://www.gps.gov/systems/gps/spanish.php',
    },
    {
      texto: 'GEOPORTAL. (s/f). Gov.co. Recuperado el 25 de octubre de 2021',
      tipo: 'Página web',
      link: 'https://geoportal.igac.gov.co/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Eduardo Álava Arévalo',
        cargo: 'Instructor',
        centro:
          'Centro Internacional de Producción Limpia Lope - Regional Nariño',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora Instrucciona',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Maria Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

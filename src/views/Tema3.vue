<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de la información Geográfica del proyecto
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p.mb-3  <b>Para la planeación del proyecto, es necesario tener disponible la información geográfica necesaria para la su gestión, por tal motivo se debe recurrir a fuentes de información primaria (levantamientos con GPS), formularios, encuestas, análisis de suelos y aguas, etc. También es necesario disponer de información de fuentes secundarias como son planos, mapas, planchas, shapes, imágenes de satélite, fotografías aéreas, etc.,</b> información que en muchos casos se encuentra disponible en los geoportales, como es el caso el del Instituto Geográfico Agustín Codazzi (IGAC).
      .col-lg-6.mb-5.mb-lg-0
        img(src="@/assets/curso/images/tema3/img_1.png", alt="")
    
    Separador 

    #t_3_1.titulo-segundo
      .h4 3.1	Alistamiento de la información analógica y digital

    p.mb-3 El Geoportal Instituto Geográfico Agustín Codazzi (IGAC) es una herramienta web interactiva que dispone a la ciudadanía diferentes productos de información georreferenciada que produce el instituto. 

    .row.mb-5
      .col-sm-6.col-xl-6.mb-6.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_2.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-6
              p.mb-0 Ingresando al <b>Geoportal del IGAC,</b> se puede tener acceso a diferentes tipos de información espacial; en este portal se puede descargar información en formato Shape File de Agrología (Capacidad y Usos de suelos), cartografía básica (planchas topográficas), planos catastrales del predio, fotografías aéreas y mapas en formato digital y analógico.  

      .col-sm-6.col-xl-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_7.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-6
              p.mb-3 Contando con el número predial o las coordenadas del predio, se puede acceder y descargar la información oficial en formato Shape File o Geopackage.

              p.mb-0 En esta figura se muestra la interfase del Geoportal del IGAC, donde se puede obtener información del predio, bien sea a partir de las coordenadas o del número predial. 

    Separador 

    #t_3_2.titulo-segundo
      .h4 3.2 Georeferenciación y vectorización

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-5.mb-lg-0
        img(src="@/assets/curso/images/tema3/img_3.svg", alt="")
      .col-lg-6
        p.mb-3  <b>En muchas ocasiones, no existe información digital de la zona de interés, por lo general se encuentra cartografía impresa y desactualizada la cual requiere de un tratamiento especial para poder incorporar al Software SIG.</b>

        p.mb-0 Como primera medida esta información debe ser escaneada, para convertirla a una forma digital, por lo general se utiliza como salida formatos JPG o TIF; en estos formatos se obtiene un archivo de tipo ráster el cual se puede trabajar en el software SIG. Seguido a este proceso, al archivo se le debe asignar un sistema de referencia espacial (Coordenadas) el cual corresponde a su sistema de referencia de origen, a este proceso se le denomina <b>Georeferenciación. </b>

    p.mb-3 Una vez lograda la imagen, con su debido sistema de referencia de coordenadas, se procede a convertir cada uno de sus elementos espaciales (vías, ríos, viviendas, curvas de nivel, lotes, etc.), en capas vectoriales (puntos, líneas y polígonos) mediante el proceso de <b>Vectorización</b> o digitalización.  El producto resultante es un archivo Shape con la información requerida. 

    Separador 

    #t_3_3.titulo-segundo
      .h4 3.3 Creación de capas vectoriales

    p.mb-3 Uno de los formatos más utilizados en la comunidad SIG, es el formato SHAPE, el cual se compone por archivos con diferentes extensiones, hecho que obliga a ser extremadamente ordenados en el manejo de la información, con el fin de evitar pérdidas o daños de la misma.

    p.mb-5 En este sentido cuando se crean capas vectoriales para los proyectos, se recomienda seguir los siguientes pasos:

    SlyderA.slyder-color.p-5
      .row.align-items-center.justify-content-center
        .col-10
          p.mb-0 <b>c.</b> Se abre el cuadro de diálogo donde permite, seleccionar la ubicación donde se va a guardar, el nombre que se le dará a la capa, la geometría deseada (Punto, línea o polígono) y el sistema de referencia de coordenadas, el cual es indispensable para dar una posición absoluta al elemento que se desea representar.
      div
        .row.align-items-center.justify-content-center
          .col-10
            p.mb-0 <b>a.</b> Crear una carpeta de trabajo en sus equipos para la administración de cada proyecto.
      div
        .row.align-items-center.justify-content-center
          .col-10
            p.mb-0 <b>b.</b> En el menú de herramientas buscar la opción “Capa” y dentro de ella seleccionar “Crear Capa”, y seleccionar “Nueva Capa de archivo Shape”.
      div
        .row.align-items-center.justify-content-center
          .col-10
            p.mb-0 <b>d.</b> Adicionalmente en este paso, se puede agregar la información de campos que van a caracterizar cada uno de los atributos de la capa. 
    
    Separador 

    #t_3_4.titulo-segundo
      .h4 3.4 Configuración de información atributiva

    p.mb-3 La información atributiva, corresponde a la descripción de las características específicas de cada entidad geográfica; así por ejemplo un río tiene un nombre geográfico, puede tener unas dimensiones, características intrínsecas como caudal, calidad de sus aguas, algunos códigos, la longitud entre otros, como se muestra en la tabla.

    .titulo-sexto.color-acento-contenido
      p.mb-0 Tabla 1 
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th #[b Objected]
            th #[b Nombre]
            th #[b Tipo Cuerpo]
            th #[b Rule ID]
            th #[b Shape.Area]
            th #[b Shape.Len]

        tbody
          tr
            td.text-center  137
            td.text-center  Río Caguán
            td.text-center  51010000
            td.text-center  1
            td.text-center  0.0164336288
            td.text-center  8.5293719
          tr
            td.text-center  140
            td.text-center  Río Putumayo
            td.text-center  51010000
            td.text-center  1
            td.text-center  0.0608627784
            td.text-center  22.26217887
          tr
            td.text-center  149
            td.text-center  Río Apaporis
            td.text-center  51010000
            td.text-center  1
            td.text-center  0.06483707668
            td.text-center  19.89559893
          tr
            td.text-center  150
            td.text-center  Río Inírida
            td.text-center  51010000
            td.text-center  1
            td.text-center  0.06483707668
            td.text-center  12.51199453
          tr
            td.text-center  43
            td.text-center  Río Cucuana
            td.text-center  51010000
            td.text-center  1
            td.text-center  0.000177189606
            td.text-center  0.1831197888
          tr
            td.text-center  85
            td.text-center  Río Anori
            td.text-center  51010000
            td.text-center  1
            td.text-center  0.00004640849009
            td.text-center  0.08836791047
          tr
            td.text-center  75
            td.text-center  Río La Miel
            td.text-center  51010000
            td.text-center  1
            td.text-center  0.0002222751027
            td.text-center  0.1896805575
          tr
            td.text-center  44
            td.text-center  Río Saldaña
            td.text-center  51010000
            td.text-center  1
            td.text-center  0.0009618225457
            td.text-center  1.82763734
          tr
            td.text-center  48  
            td.text-center  Río Humadea
            td.text-center  51010000
            td.text-center  1
            td.text-center  0.001159599466
            td.text-center  1.29975405
          tr
            td.text-center  68
            td.text-center  Río Humea
            td.text-center  51010000
            td.text-center  1
            td.text-center  0.001649724453
            td.text-center  0.6894976565
          tr
            td.text-center  92
            td.text-center  Brazo Pescado
            td.text-center  51010000
            td.text-center  1
            td.text-center  0.00008209406318
            td.text-center  0.1149679589
          tr
            td.text-center  57
            td.text-center  Río Purare
            td.text-center  51010000
            td.text-center  1
            td.text-center  0.0002421099015
            td.text-center  0.2540347663
          tr
            td.text-center  163
            td.text-center  Río Arauca
            td.text-center  51010000
            td.text-center  1
            td.text-center  0.00759349948
            td.text-center  5.936565599

    p.mb-3 La información atributiva se almacena en una tabla, denominada “Tabla de Atributos”, cuyas líneas o filas se llaman “registros” y las columnas que corresponden propiamente a los atributos se denominan “Campos”; estos representan las características específicas de cada entidad, por ejemplo, el nombre o la longitud.

    .jumbotron.p-5.mb-5
      p.mb-0 Todos los campos pueden contener información numérica (áreas, longitudes, códigos, etc.) información tipo cadena o string (Nombre) y también pueden ser fechas o corresponder a una imagen de la entidad.
    
    p.mb-5 En síntesis, toda entidad vectorial tiene una geometría (punto, línea, polígono) y una descripción de sus características específicas (Atributo) la cual corresponde información alfanumérica que se almacena en una base de datos así:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.mb-5.mb-lg-0
        img(src="@/assets/curso/images/tema3/img_4.svg", alt="")

    
    Separador 

    #t_3_5.titulo-segundo
      .h4 3.5 Cálculo de geometrías y realización de geoprocesos

    p.mb-5 En lenguaje SIG, el cálculo de geometrías se refiere al análisis de las dimensiones que una entidad u objeto geográfico puede tener, dependiendo del tipo de geometría, existen algunas dimensiones disponibles como se muestra a continuación. 

    .row.justify-content-center.align-items-center.ma-1
      .col-4.mb-4
        .tarjeta--sencilla.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img.my-1(src='@/assets/curso/images/tema3/ico_1.svg', alt='icono-avatar')
          h3.text-center Puntos
            p.mb-0 Coordenadas Geográficas (Longitud y Latitud) y Coordenadas Planas (Este y Norte)
              
      .col-4.mb-4
        .tarjeta--sencilla-1.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img.my-5(src='@/assets/curso/images/tema3/ico_2.svg', alt='icono-avatar')
          h3.text-center Líneas
            p.mb-0 Longitud
      .col-4.mb-4
        .tarjeta--sencilla.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img.my-5(src='@/assets/curso/images/tema3/ico_3.svg', alt='icono-avatar')
          h3.text-center Polígonos
            p.mb-0 Áreas y perímetros

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-5.mb-lg-0
        img(src="@/assets/curso/images/tema3/img_5.svg", alt="")
      .col-lg-8
        p.mb-3 Con las diferentes capas vectoriales cargadas en el software se pueden realizar cálculos entre ellas por medio de algoritmos, estos se denominan GEOPROCESOS y permiten ejecutar entre otros, recortes de capas, uniones, intersecciones, creación de áreas de influencia (Buffer).

        p.mb-0 De todas estas herramientas de geoproceso, las que se utilizan con mayor frecuencia en los SIG, son la herramienta de área de influencia (Buffer), que sirve para realizar simulaciones por ejemplo para definir áreas de riego; la herramienta “Cortar” (Clip), que se utiliza para conocer los elementos geográficos (ya sean de tipo punto, línea o polígono) que se encuentran dentro de unos límites establecidos en una capa poligonal definida.

    p.mb-0 Las herramientas “intersección” y “diferencia simétrica”, ayudan a definir áreas comunes y no comunes entre dos capas vectoriales respectivamente, y la herramienta “Unión”, es útil como su nombre lo indica para unir dos o más capas vectoriales, siempre y cuando compartan la misma geometría; es decir se pueden unir puntos con puntos, líneas con líneas y polígonos con polígonos. 















































</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

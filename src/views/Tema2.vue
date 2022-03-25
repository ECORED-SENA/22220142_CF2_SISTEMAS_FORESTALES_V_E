<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manejo de Software SIG de código abierto
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-5.mb-lg-0
        img(src="@/assets/curso/images/tema2/img_1.png", alt="")
      .col-lg-6
        p.mb-3  En el campo de los sistemas de información geográfica SIG, existe una diversidad de software para el tratamiento de la información geográfica, hay software licenciado como ArcGis de ESRI, en sus versiones Desktop y Pro y Global Mapper de Blue Marbel Geographics; son softwares muy potentes, con muchas aplicaciones y unos de los más generalizados dentro de la comunidad SIG. 

        p.mb-3 Paralelamente en el mercado existen un gran número de Software SIG de código abierto o libre, siendo el Software QGIS el más popular en la actualidad, teniendo en cuenta aspectos como son la cantidad de herramientas que posee, la interfase de trabajo y por encontrarse disponible para varios sistemas operativos. 

        p.mb-0 Para el desarrollo del curso se trabaja la versión 3.16 de QGIS por ser la versión más estable en el momento. 
      
    #t_2_1.titulo-segundo
      .h4 2.1.	Descarga e Instalación del software QGIS 3.16

    .row.justify-content-center.align-items-center.fondo-1.mb-5
      .col-lg-10
        figure.aling.mb-5
          .col-lg-11.mt-5
            .video
              iframe(width="460" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
   

    #t_2_2.titulo-segundo
      .h4 2.2 Interface del Software

    p.mb-3 Las interfases, creación de proyecto e importación y creación de archivos hacen parte de la usabilidad del Software QGIS de la siguiente forma:

    .jumbotron.p-4.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.mb-5.mb-lg-0
          img(src="@/assets/curso/images/tema2/img_2.svg", alt="")
        .col-lg-7
          p.mb-3 Una vez instalado el software, se crea una carpeta que contiene los archivos ejecutables del software, en la figura se indica el archivo que se debe ejecutar para comenzar el trabajo.
    
    p.mb-3 La figura describe la interfase del software QGIS donde se encuentra:

    p.mb-4 Es el uso locutor + acompañamiento de imágenes como fondo, el estilo tiene una mezcla entre imagen viva y recursos gráficos vectoriales  se usa cuando un material tiene información de datos numéricos o gráficos de valores. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-5.mb-5.mb-lg-0
          
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema2/1.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Lista de capas / Panel de exploración.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema2/2.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Barras de herramientas
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema2/3.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Lienzo del mapa.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema2/4.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Barra de estado.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema2/5.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Barra de herramientas lateral.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema2/6.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Barra de localización. 
          
      .col-12.col-lg-7.mb-5.mb-lg-0
        img(src='@/assets/curso/images/tema2/img_3.svg' alt="")

    #t_2_3.titulo-segundo
      .h4 2.3 Creación del proyecto
  
    .row.justify-content-center.align-items-center.mb-5   
      .col-12.col-lg-6.mb-5.mb-lg-0
        img(src='@/assets/curso/images/tema2/img_4.svg' alt="")
      .col-12.col-lg-6.mb-5.mb-lg-0
        p.mb-3 Para crear un nuevo proyecto en QGIS debemos seguir los siguientes pasos:

        p.mb-3  <b>a.</b> Abrir el software.

        p.m-0 <b> b. </b> En la barra de menús, buscamos la pestaña proyecto, la seleccionamos y damos <b>“Guardar como”</b>; buscamos la ruta donde vamos a guardar y aceptamos.

    p.mb-3 Es importante conocer que cuando manejamos proyectos SIG, es necesario ser muy ordenado con la administración de la información puesto que cuando realizamos geoprocesos el volumen de información que se genera es muy alto, y existe un riesgo de que se pierda la información afectando el flujo de trabajo. 

    #t_2_4.titulo-segundo
      .h4 2.4 Importación y creación de archivos
    
    p.mb-3 Cuando se trabaja con sistemas de información geográfica SIG, la información espacial que se maneja siempre se encuentra en formatos vectorial y ráster como se revisó en el componente formativo: “Fundamentos de  SIG aplicados en Sistemas Forestales y/o Agroecológicos”, dependiendo del tipo de formato,  se debe  elegir la ruta por medio de la cual se carga la información al software. 

    p.mb-5 A continuación, la ruta para cargar datos vectoriales, datos ráster según sea el caso y si no se cuenta con datos. 
    
    .row.fondo_9
      SlyderA
        .row.p-4
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema2/img_5.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Cuando se trabaja  con sistemas de información geográfica SIG, la información espacial que se maneja  siempre se encuentra en formatos vectorial y ráster, dependiendo del tipo de formato,  se debe elegir la ruta por medio de la cual se carga la información al software. 
        
        .row.p-4
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema2/img_6.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Cuando se trabaja  con sistemas de información geográfica SIG, la información espacial que se maneja  siempre se encuentra en formatos vectorial y ráster, dependiendo del tipo de formato,  se debe elegir la ruta por medio de la cual se carga la información al software. 
          
        .row.p-4
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema2/img_7.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p.mb-3 En los casos que no se disponga de información digital (Shapes o capas), es necesario la vectorización de la información a partir de imágenes, mapas, planos, fotografías, los cuales sirven de base para obtener información vectorial para el proyecto que se realiza. 
            p.mb-0 Antes de iniciar con el proceso de vectorización, es necesario la creación de las capas vectoriales (puntos, líneas o polígonos) dependiendo del tipo de elemento espacial que se necesite digitalizar.   
          
        .row.p-4
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema2/img_8.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p.mb-5 La creación de nuevas capas vectoriales se realiza de la siguiente manera:

            p <b>a.</b> Dar un nombre a la capa y definir la ruta de guardado al igual que el sistema de referencia de coordenadas.
            p <b>b.</b> Definir la geometría de la capa (Punto, línea o polígono)
          
        .row.p-4
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema2/img_9.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p.mb-5  La creación de nuevas capas vectoriales se realiza de la siguiente manera:

            p <b>a.</b> Dar un nombre a la capa y definir la ruta de guardado al igual que el sistema de referencia de coordenadas.
            p <b>b.</b> Definir la geometría de la capa (Punto, línea o polígono)
        
     




</template>

<script>
export default {
  name: 'Tema2',
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

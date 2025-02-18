export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Fundamentos de analítica de datos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tipos de analítica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Analítica descriptiva',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Análisis detallado de la analítica descriptiva',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Analítica predictiva',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas básicas de minería de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Datos estructurados',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Datos no estructurados',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Procesos integradores',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Análisis de datos estructurados y no estructurados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Hinojosa Gutiérrez, A. (2015). Python paso a paso. RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/107213',
    },
    {
      referencia:
        'Konrad Lorenz University. (s.f.). Analítica de datos: Tipos y aplicaciones.',
      link: 'https://www.konradlorenz.edu.co/blog/analitica-de-datos-tipos/',
    },
    {
      referencia:
        'Navas, J. (s.f.). Apuntes sobre analítica de datos: Weka y recursos naturales. Universidad de Jaén.',
      link:
        'http://matema.ujaen.es/jnavas/web_recursos/archivos/weka%20master%20recursos%20naturales/apuntesAD.pdf',
    },
    {
      referencia:
        'Nolasco Valenzuela, J. S. (2018). Python: aplicaciones prácticas. RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/106523',
    },
    {
      referencia:
        'Peña, S. (2017). Analítica de datos: Un enfoque integral. Fundación Universitaria del Área Andina.',
      link: 'https://core.ac.uk/download/pdf/326425169.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'Conjunto de reglas y pasos finitos, utilizados para resolver un problema específico o realizar una tarea.',
    },
    {
      termino: 'Analítica descriptiva',
      significado:
        'Técnica que interpreta datos históricos para identificar patrones y relaciones, proporcionando una base para decisiones estratégicas.',
    },
    {
      termino: 'Analítica predictiva',
      significado:
        'Uso de modelos estadísticos y <i>machine learning</i>, para anticipar comportamientos y eventos futuros, basados en datos históricos.',
    },
    {
      termino: 'Analítica prescriptiva',
      significado:
        'Método que combina análisis predictivo con simulaciones, para sugerir acciones específicas que optimicen resultados.',
    },
    {
      termino: '<i>Big Data</i>',
      significado:
        'Conjunto de datos de gran volumen, velocidad y variedad, que requieren tecnologías avanzadas para su procesamiento.',
    },
    {
      termino: '<i>Dashboards</i>',
      significado:
        'Paneles interactivos que muestran visualizaciones integradas de métricas claves, para facilitar la toma de decisiones.',
    },
    {
      termino: 'Datos estructurados',
      significado:
        'Información organizada en un formato predefinido, como tablas en bases de datos relacionales.',
    },
    {
      termino: 'Datos no estructurados',
      significado:
        'Información sin un formato predefinido, como texto, imágenes o videos, que requiere de herramientas especializadas para su análisis.',
    },
    {
      termino: 'Minería de datos',
      significado:
        'Proceso de explorar grandes volúmenes de datos, para descubrir patrones, relaciones y tendencias útiles.',
    },
    {
      termino: 'Tendencias',
      significado:
        'Cambios o patrones recurrentes, observados en los datos, a lo largo del tiempo.',
    },
  ],
  complementario: [],
}

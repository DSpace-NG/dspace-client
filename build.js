{
  name: 'node_modules/almond/almond.js',
  include: ['app/main', 'plugins/hello/init', 'plugins/remotestorage/init', 'plugins/search/init', 'plugins/navigation/init'],
  insertRequire: [ 'app/main' ],
  out: 'build/assets/dspace-client.js',
  wrap: true,

  paths: {
    // directories
    "templates"        : "assets/templates",
    "template/helpers" : "app/helpers",
    "models" : "app/models",
    "collections" : "app/collections",
    "views" : "app/views",
    "templateMap" : "app/templateMap",
    "geofeeds": "app/geofeeds",

    // dependencies of hbs
    "i18nprecompile"   : "deps/hbs/i18nprecompile",
    "json2"            : "deps/hbs/json2",
    
    // general deps
    "hbs": "deps/hbs",
    "ender": 'deps/ender',
    "underscore": "deps/underscore",
    "backbone": "deps/backbone",
    "backbone-localstorage": "deps/backbone.localstorage",
    "Math.uuid": "deps/Math.uuid",

    "reqwest": "deps/reqwest",
    "handlebars": "deps/handlebars",

    "modestmaps": "deps/modestmaps",
    "easey": "deps/easey",
    "easey_handlers": "deps/easey_handlers",
    "domready": "deps/domready",
    "markers": "deps/markers",

    "faye-client": "deps/faye-client"
  },

  "hbs": {
    "templateExtension" : "handlebars",
    "disableI18n" : true      
  }
}

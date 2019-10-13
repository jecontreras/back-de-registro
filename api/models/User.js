/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cedula: {
      type: 'string'
    },
    nombre: {
      type: 'string'
    },
    apellido: {
      type: 'string'
    },
    puesto: {
      type: 'string'
    },
    comuna: {
      type: 'string'
    },
    telefono: {
      type: 'string'
    },
    mesa: {
      type: 'string'
    },
    direccion: {
      type: 'string'
    },
  }
};

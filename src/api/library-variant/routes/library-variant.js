'use strict';

/**
 * library-variant router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::library-variant.library-variant');

'use strict';

/**
 * website-interface router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::website-interface.website-interface');

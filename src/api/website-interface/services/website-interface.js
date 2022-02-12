'use strict';

/**
 * website-interface service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::website-interface.website-interface');

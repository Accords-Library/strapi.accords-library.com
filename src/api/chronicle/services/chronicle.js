'use strict';

/**
 * chronicle service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chronicle.chronicle');

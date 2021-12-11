'use strict';

/**
 * scan-set service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scan-set.scan-set');

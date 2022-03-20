'use strict';

/**
 * web-archive service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-archive.web-archive');

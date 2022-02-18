'use strict';

/**
 * wiki-page service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wiki-page.wiki-page');

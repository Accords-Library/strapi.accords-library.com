'use strict';

/**
 * recorder router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::recorder.recorder');

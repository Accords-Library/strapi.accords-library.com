'use strict';

/**
 * game-platform service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::game-platform.game-platform');

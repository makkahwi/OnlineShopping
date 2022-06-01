'use strict';

/**
 * order-count service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order-count.order-count');

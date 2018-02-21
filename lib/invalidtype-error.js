/**
 * This file is part of node-invalidtype-error
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module invalidtype-error
 * @description An exception class to throw "not implemented" error.
 * @example
 *
 * const {InvalidTypeError} = require('@9fv.io/invalidtype-error')
 *
 * function test(o) {
 *   if (typeof o !== 'object') {
 *     throw new InvalidTypeError('Provided paramater must be an object!')
 *   }
 * }
 *
 * test('string') // throw an error of type {InvalidTypeError}.
 *
 */

const {ExtendedError} = require('@9fv.io/extended-error')

/**
 * An exception class to throw invalidtype error.
 *
 * @category error
 * @class
 * @public
 */
class InvalidTypeError extends ExtendedError {

}

module.exports = {}
module.exports.InvalidTypeError = InvalidTypeError
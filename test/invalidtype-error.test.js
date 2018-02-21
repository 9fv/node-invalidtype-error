/**
 * This file is part of node-invalidtype-error
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {InvalidTypeError} = require('../lib/invalidtype-error')

describe('Class {InvalidTypeError}', () => {
  it('should be a function', () => {
    (InvalidTypeError).should.be.a.Function()
  })
})

describe('Create a new instance of {InvalidTypeError}', () => {
  it('without arguments should be an object', () => {
    (new InvalidTypeError()).should.be.an.Object()
  })
  it('without arguments should be an instance of {InvalidTypeError}', () => {
    (new InvalidTypeError()).should.be.an.instanceOf(InvalidTypeError)
  })
  it('with argument should be an object', () => {
    (new InvalidTypeError('an error')).should.be.an.Object()
  })
  it('with argument should be an instance of {InvalidTypeError}', () => {
    (new InvalidTypeError('an error')).should.be.an.instanceOf(InvalidTypeError)
  })
})

describe('Throw an {InvalidTypeError}', () => {
  it('without arguments should be an object', () => {
    (() => { throw new InvalidTypeError() }).should.throw()
  })
  it('with arguments should be an object', () => {
    (() => { throw new InvalidTypeError('an error') }).should.throw()
  })
})
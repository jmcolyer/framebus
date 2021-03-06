'use strict';

describe('_subscriptionArgsInvalid', function () {
  beforeEach(function () {
    this.args = ['event', function () {}, '*'];
  });

  it('should return false for valid types', function () {
    var actual = this.bus._subscriptionArgsInvalid.apply(this.bus, this.args);

    expect(actual).to.be.false;
  });

  it('should return true if event is not string', function () {
    var actual;

    this.args[0] = {};
    actual = this.bus._subscriptionArgsInvalid.apply(this.bus, this.args);

    expect(actual).to.be.true;
  });

  it('should return true if fn is not function', function () {
    var actual;

    this.args[1] = 'function';
    actual = this.bus._subscriptionArgsInvalid.apply(this.bus, this.args);

    expect(actual).to.be.true;
  });

  it('should return true if origin is not string', function () {
    var actual;

    this.args[2] = {event: 'object'};
    actual = this.bus._subscriptionArgsInvalid.apply(this.bus, this.args);

    expect(actual).to.be.true;
  });
});

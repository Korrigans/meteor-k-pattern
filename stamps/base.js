K.Pattern.Base = stampit()
  .init(
    ({instance}) => {
      instance[_patternsSymbol] = true;
    },
    ({instance, stamp}) => {
      instance.getStamp = () => stamp;
    }
  )
  .refs({
    type : _noTypeSymbol,
    tests : []
  })
  .methods({
    // TODO: Add a "short-circuit" option or method to add a test before all the others
    addTest(test) {
      if(typeof test !== 'function') {
        throw new Error('Expected function to be passed as parameter');
        // NOTE: Would be pretty damn cool to check if test has a dynamic this (not bound, not an arrow function)
      }
      this.tests.push(test);
      return this;
    },
    // NOTE: This does not allow for tests to prematurely end the test chain
    // Could be an issue when implementing optional values on schemas
    doTest(value) {
      for(let test of this.tests) {
        test.call(this, value);
      }
      return true;
    },
    extend(stamp) {
      return stampit.compose(this.getStamp(), stamp
        .refs({
          tests : [...this.tests] //Break the reference to old array
        })
      );
    }
  });

K.Pattern.Base()
  .addTest(checkType);

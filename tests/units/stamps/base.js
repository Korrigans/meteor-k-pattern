describe('[k-pattern][Unit] K.Pattern.Base', () => {

  it('should exist and be a function', () => {
    let expected = 'function',
        actual = typeof K.Pattern.Base;

    expect(actual).toEqual(expected);
  });

  describe('addTest', () => {

    it('should exist and be a function', () => {
      let expected = 'function',
          actual = typeof K.Pattern.Base().addTest;

        expect(actual).toEqual(expected);
    });

    it('should accept a function as parameter', () => {
      let instance = K.Pattern.Base();

      expect(() => instance.addTest(function(value) {})).not.toThrow();
    });

    it('should be chainable', () => {
      let instance = K.Pattern.Base(),
          testFunction = function(value) {};

      expect(instance.addTest(testFunction)).toEqual(instance);
      expect(() => instance.addTest(testFunction).addTest(testFunction)).not.toThrow();
    });

    it('should add given parameter to instance tests array', () => {
      let instance = K.Pattern.Base(),
          testFunction = function(value) {};

      instance.addTest(testFunction);

      expect(instance.tests.indexOf(testFunction)).not.toEqual(-1);
    });

    describe('[Errors]', () => {

      it('should throw an error if parameter is not a function', () => {
        let instance = K.Pattern.Base();

        expect(() => instance.addTest('test')).toThrow();
        expect(() => instance.addTest(null)).toThrow();
        expect(() => instance.addTest(undefined)).toThrow();
        expect(() => instance.addTest(0)).toThrow();
        expect(() => instance.addTest(true)).toThrow();
        expect(() => instance.addTest({})).toThrow();
        expect(() => instance.addTest([])).toThrow();
      });
    });
  });

  describe('doTest', () => {
    it('should exist and be a function', () => {
      let expected = 'function',
          actual = typeof K.Pattern.Base().doTest;

        expect(actual).toEqual(expected);
    });

    it('should return true if all tests have passed', () => {
      let instance = K.Pattern.Base();

      instance.type = undefined;

      expect(instance.doTest()).toEqual(true);
    });

    it('should throw if one of tests failed', () => {
      let instance = K.Pattern.Base();

      instance.type = undefined;

      instance.addTest(function() { throw new Error('test');});
      expect(() => instance.doTest()).toThrowError(Error, 'test');
      instance.tests.pop();
    });

    it('should pass value to test functions', () => {
      let instance = K.Pattern.Base(),
          holder = {testFunc() {}},
          testValue = 'What a nice day';

      spyOn(holder, 'testFunc');

      instance.type = String;

      instance.addTest(holder.testFunc);
      instance.doTest(testValue);

      expect(holder.testFunc).toHaveBeenCalledWith(testValue);
      expect(holder.testFunc.calls.count()).toEqual(1);
    });

    it('should call all the tests in sequence', () => {
      let instance = K.Pattern.Base(),
          a, b, c, testValue = 'test',
          sequence = [];

      [a, b, c] = [
        () => {sequence.push(1);},
        () => {sequence.push(2);},
        () => {sequence.push(3);}
      ];

      instance.type = undefined;

      instance
        .addTest(a)
        .addTest(b)
        .addTest(c);

      instance.doTest();

      expect(sequence).toEqual([1, 2, 3]);
    });
  });

  // TODO: Move it in integration tests
  describe('doTest[Error]', () => {
    it('should throw an Error if use without providing a type', () => {
      let instance = K.Pattern.Base(),
      err = 'Use of base pattern to check types is not allowed.';

      expect(() => instance.doTest()).toThrowError(Error, err);
    });
  });

  describe('extend', () => {

    it('should exist and be a function', () => {
      let expected = 'function',
          actual = typeof K.Pattern.Base().extend;

        expect(actual).toEqual(expected);
    });

    it('should accept a stamp as parameter', () => {
      let instance = K.Pattern.Base();

      expect(() => instance.extend(
          stampit()
        )).not.toThrow();
    });

    it('should return a new function', () => {
      let instance = K.Pattern.Base(),
          newInstance = instance.extend(
            stampit()
          );

      expect(typeof newInstance).toEqual('function');
      expect(newInstance).not.toEqual(instance);
    });

    it('should copy properties of a source function to a target function and apply requested changes', () => {
      let instance = K.Pattern.Base(),
          newInstanceFactory = instance.extend(
            stampit().props({
              foo : 'foo'
            })
          ),
          newInstance = newInstanceFactory();

      expect(newInstance.tests).toEqual(instance.tests);
      expect(newInstance.type).toEqual(instance.type);
      expect(newInstance.foo).toEqual('foo');
    });
  });
});

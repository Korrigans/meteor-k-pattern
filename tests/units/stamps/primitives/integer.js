describe('[k-pattern][Unit] K.Pattern.Integer', () => {
  it('should exist and be a function', () => {
    let expected = 'function',
        actual = typeof K.Pattern.Integer;

    expect(actual).toEqual(expected);
  });

  it('should have a type property', () => {
    let expected = Number,
        actual = K.Pattern.Integer().type;

    expect(actual).toEqual(expected);
  });

  describe('min', () => {

    it('should exist and be a function', () => {
      let expected = 'function',
          actual = typeof K.Pattern.Integer().min;

      expect(actual).toEqual(expected);
    });

    it('should be chainable setter if called with parameter', () => {
      let instance = K.Pattern.Integer();

      expect(() => instance.min(0).min(12).min(31)).not.toThrow();
    });

    it('should return min private property if called with no parameter', () => {
      let instance = K.Pattern.Integer();

      instance.min(42);

      expect(instance.min()).toEqual(42);
    });

    it('should return by default -Infinity', () => {
      expect(K.Pattern.Integer().min()).toEqual(-Infinity);
    });

    it('should throw an error if provided argument is not an integer', () => {
      expect(() => K.Pattern.Integer().min(0.5)).toThrowError(Error,
        /Expected integer, got 0.5./
      );
    });
  });

  describe('max', () => {

    it('should exist and be a function', () => {
      let expected = 'function',
          actual = typeof K.Pattern.Integer().max;

      expect(actual).toEqual(expected);
    });

    it('should be chainable setter if called with parameter', () => {
      let instance = K.Pattern.Integer();

      expect(() => instance.max(0).max(12).max(31)).not.toThrow();
    });

    it('should return min private property if called with no parameter', () => {
      let instance = K.Pattern.Integer();

      instance.max(42);

      expect(instance.max()).toEqual(42);
    });

    it('should return by default Infinity', () => {
      expect(K.Pattern.Integer().max()).toEqual(Infinity);
    });

    it('should throw an error if provided argument is not an integer', () => {
      expect(() => K.Pattern.Integer().max(50.5)).toThrowError(Error,
        /Expected integer, got 50.5./
      );
    });
  });
});

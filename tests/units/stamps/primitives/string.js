describe('[k-pattern][Unit] K.Pattern.String', () => {

  it('should exist and be a function', () => {
    let expected = 'function',
        actual = typeof K.Pattern.String;

    expect(actual).toEqual(expected);
  });

  it('should have a type property', () => {
    let expected = String,
        actual = K.Pattern.String().type;

    expect(actual).toEqual(expected);
  });

  describe('min', () => {

    it('should exist and be a function', () => {
      let expected = 'function',
          actual = typeof K.Pattern.String().min;

      expect(actual).toEqual(expected);
    });

    it('should be chainable setter if called with parameter', () => {
      let instance = K.Pattern.String();

      expect(() => instance.min(0).min(12).min(31)).not.toThrow();
    });

    it('should return min private property if called with no parameter', () => {
      let instance = K.Pattern.String();

      instance.min(42);

      expect(instance.min()).toEqual(42);
    });

    it('should return by default 0', () => {
      expect(K.Pattern.String().min()).toEqual(0);
    });
  });

  describe('max', () => {

    it('should exist and be a function', () => {
      let expected = 'function',
          actual = typeof K.Pattern.String().max;

      expect(actual).toEqual(expected);
    });

    it('should be chainable setter if called with parameter', () => {
      let instance = K.Pattern.String();

      expect(() => instance.max(0).max(12).max(31)).not.toThrow();
    });

    it('should return min private property if called with no parameter', () => {
      let instance = K.Pattern.String();

      instance.max(42);

      expect(instance.max()).toEqual(42);
    });

    it('should return by default Infinity', () => {
      expect(K.Pattern.String().max()).toEqual(Infinity);
    });
  });
});

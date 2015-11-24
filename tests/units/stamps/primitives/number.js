describe('[k-pattern][Unit] K.Pattern.Number', () => {
  it('should exist and be a function', () => {
    let expected = 'function',
        actual = typeof K.Pattern.Number;

    expect(actual).toEqual(expected);
  });

  it('should have a type property', () => {
    let expected = Number,
        actual = K.Pattern.Number().type;

    expect(actual).toEqual(expected);
  });

  describe('min', () => {

    it('should exist and be a function', () => {
      let expected = 'function',
          actual = typeof K.Pattern.Number().min;

      expect(actual).toEqual(expected);
    });

    it('should be chainable setter if called with parameter', () => {
      let instance = K.Pattern.Number();

      expect(() => instance.min(0).min(12).min(31)).not.toThrow();
    });

    it('should return min private property if called with no parameter', () => {
      let instance = K.Pattern.Number();

      instance.min(42);

      expect(instance.min()).toEqual(42);
    });

    it('should return by default -Infinity', () => {
      expect(K.Pattern.Number().min()).toEqual(-Infinity);
    });
  });

  describe('max', () => {

    it('should exist and be a function', () => {
      let expected = 'function',
          actual = typeof K.Pattern.Number().max;

      expect(actual).toEqual(expected);
    });

    it('should be chainable setter if called with parameter', () => {
      let instance = K.Pattern.Number();

      expect(() => instance.max(0).max(12).max(31)).not.toThrow();
    });

    it('should return min private property if called with no parameter', () => {
      let instance = K.Pattern.Number();

      instance.max(42);

      expect(instance.max()).toEqual(42);
    });

    it('should return by default Infinity', () => {
      expect(K.Pattern.Number().max()).toEqual(Infinity);
    });
  });
});

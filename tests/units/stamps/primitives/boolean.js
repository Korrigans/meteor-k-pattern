describe('[k-pattern][Unit] K.Pattern.Boolean', () => {

  it('should exist and be a function', () => {
    let expected = 'function',
        actual = typeof K.Pattern.Boolean;

    expect(actual).toEqual(expected);
  });

  it('should have a type property', () => {
    let expected = Boolean,
        actual = K.Pattern.Boolean().type;

    expect(actual).toEqual(expected);
  });
});

describe('[k-pattern][Unit] K.Pattern.Undefined', () => {

  it('should exist and be a function', () => {
    let expected = 'function',
        actual = typeof K.Pattern.Undefined;

    expect(actual).toEqual(expected);
  });

  it('should have a type property', () => {
    let actual = K.Pattern.Undefined().type;

    expect(actual).toEqual(undefined);
  });
});

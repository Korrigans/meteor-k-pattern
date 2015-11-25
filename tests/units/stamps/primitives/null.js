describe('[k-pattern][Unit] K.Pattern.Null', () => {

  it('should exist and be a function', () => {
    let expected = 'function',
        actual = typeof K.Pattern.Null;

    expect(actual).toEqual(expected);
  });

  it('should have a type property', () => {
    let expected = null,
        actual = K.Pattern.Null().type;

    expect(actual).toEqual(expected);
  });
});

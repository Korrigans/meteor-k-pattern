describe('[k-pattern][Unit] K.Pattern.Function', () => {

  it('should exist and be a function', () => {
    let expected = 'function',
        actual = typeof K.Pattern.Function;

    expect(actual).toEqual(expected);
  });

  it('should have a type property', () => {
    let expected = Function,
        actual = K.Pattern.Function().type;

    expect(actual).toEqual(expected);
  });
});

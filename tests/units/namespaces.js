describe('[k-pattern][Unit] Namespaces', () => {

  describe('K.Pattern', () => {

    it('should exist and be an object', () => {
      expect(K.Pattern).toBeDefined();
      expect(typeof K.Pattern).toEqual('object');
    });

  });

  describe('KP', () => {

    it('should exist and be an object', () => {
      expect(KP).toBeDefined();
      expect(typeof KP).toEqual('object');
    });

    it('should be an alias of K.Pattern', () => {
      expect(KP).toEqual(K.Pattern);
    });
  });
});

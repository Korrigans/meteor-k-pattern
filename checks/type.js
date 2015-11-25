checkType = function checkType(value) {
  let typeMap = new Map();

  typeMap.set(Boolean, 'boolean');
  typeMap.set(Number, 'number');
  typeMap.set(String, 'string');
  typeMap.set(Function, 'function');
  typeMap.set(Object, 'object');

  //No type test
  if(this.type === _noTypeSymbol) {
    throw new Error('Use of base pattern to check types is not allowed.');
  }

  //Primitive type test
  if(typeMap.has(this.type)) {
    if(typeof value !== typeMap.get(this.type)) {
      throw new Match.Error(`Expected ${typeMap.get(this.type)}, got ${typeof value}.`);
    }
  }

  //undefined type test
  if(this.type === undefined) {
    if(typeof value !== 'undefined') {
      throw new Match.Error(`Expected undefined, got ${typeof value}.`);
    }
  }

  //null type test
  if(this.type === null) {
    if(value !== null) {
      throw new Match.Error(`Expected null, got ${typeof value}.`);
    }
  }

  //array type test
  if(this.type === Array) {
    if(!(value instanceof Array)) {
      throw new Match.Error(`Expected array, got ${typeof value}.`);
    }
  }
};

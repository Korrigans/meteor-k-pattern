function isKPattern(pattern) {
  return !!pattern[_patternsSymbol];
}

check = (function(actualCheck) {
  return function(value, pattern) {
    console.log(isKPattern(pattern));
    if (isKPattern(pattern)) {
      let checkProto, newPattern;
      checkProto = Match.Where(function(val) {
        return this.doTest(val);
      });
      newPattern = Object.create(checkProto);
      Object.assign(newPattern, pattern);

      // XXX: Assign does not copy prototype methods, got to assign it manually
      // so that Match.Where can catch it
      newPattern.doTest = pattern.doTest;
      return actualCheck.call(this, value, newPattern);
    }
    else {
      return actualCheck.call(this, value, pattern);
    }
  };
})(check);

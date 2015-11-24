// XXX: Wtf Meteor, ES6 Number properties are not supported
Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" &&
           isFinite(value) &&
           Math.floor(value) === value;
};

K.Pattern.Integer = K.Pattern.Number().extend(
  stampit()
    .init(({instance}) => {
      let min = -Infinity, max = Infinity;

      instance.min = (val) => {
        if(val === undefined) {
          return min;
        }
        check(val, KP.Number().max(max));
        if(!Number.isInteger(val)) {
          throw new Error(
            `Expected integer, got ${val}.`
          );
        }
        min = val;

        return instance;
      };

      instance.max = (val) => {
        if(val === undefined) {
          return max;
        }
        check(val, KP.Number().min(min));
        if(!Number.isInteger(val)) {
          throw new Error(
            `Expected integer, got ${val}.`
          );
        }
        max = val;

        return instance;
      };
    })
);

K.Pattern.Number().addTest(
  function(value) {
    if(!Number.isInteger(value)) {
      throw new Match.Error(`Expected integer, got ${value}.`);
    }
  }
);

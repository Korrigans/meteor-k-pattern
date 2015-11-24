K.Pattern.Number = K.Pattern.Base().extend(
  stampit()
    .refs({
      type : Number
    })
    .init(({instance}) => {
      let min = -Infinity, max = Infinity;

      instance.min = function(val) {
        if(val === undefined) {
          return min;
        }

        // NOTE: Using a KP.Number() pattern here would result in infinite recursion
        check(val, Number);
        if(val > max) {
          throw new Error(
            `Provided min value ${val} is above max ${max}.`
          );
        }
        min = val;
        return this;
      };

      instance.max = function(val) {
        if(val === undefined) {
          return max;
        }

        // NOTE: Using a KP.Number() pattern here would result in infinite recursion
        check(val, Number);
        if(val < min) {
          throw new Error(
            `Provided max value ${val} is below min ${min}`
          );
        }
        max = val;
        return this;
      };
    })
);

K.Pattern.Number()
  .addTest(function(value) {
    if(value < this.min()) {
      throw new Match.Error(`Expected number of min value ${this.min()}, got ${value}.`);
    }
    if(value > this.max()) {
      throw new Match.Error(`Expected number of max value ${this.max()}, got ${value}.`);
    }
  });

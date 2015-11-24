K.Pattern.String = K.Pattern.Base().extend(
  stampit()
    .refs({
      type : String
    })
    .init(({instance}) => {
      let min = 0, max = Infinity;
      
      instance.min = function(val) {
        if(val === undefined) {
          return min;
        }

        check(val, KP.Number().max(max));
        min = val;
        return this;
      };

      instance.max = function(val) {
        if(val === undefined) {
          return max;
        }

        check(val, KP.Number().min(min));
        max = val;
        return this;
      };
    })
);

K.Pattern.String()
  .addTest(function(value) {
    if(value.length < this.min()) {
      throw new Match.Error(`Expected string of min length ${this.min()}, got ${value.length}.`);
    }
    if(value.length > this.max()) {
      throw new Match.Error(`Expected string of max length ${this.max()}, got ${value.length}.`);
    }
  });

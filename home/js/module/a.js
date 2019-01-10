// moduleA
define(['b'], function(b) {
  b.say();
  return {
    say: function() {
      alert('a ===>>>>');
    }
  };
});
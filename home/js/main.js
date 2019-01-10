requirejs.config({
    baseUrl: 'js',
    paths: {
      jquery: 'lib/jquery-1.11.1',
      a: 'module/a',
      b: 'module/b',
    }
});

requirejs(['jquery', 'a'], function($, a) {
  $(function() {
    a.say();
  });

});

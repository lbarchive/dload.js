asyncTest('load_CSS()', function() {
  $('<span/>', {
    id: 'load_CSS'
  }).appendTo($('#qunit-fixture'));
  expect(1);
  load_CSS('tests-load_CSS.css', function() {
    equal($('#load_CSS').css('font-size'), '1px');
    start();
  });
});

asyncTest('inject_CSS()', function() {
  $('<span/>', {
    id: 'inject_CSS'
  }).appendTo($('#qunit-fixture'));
  expect(1);
  inject_CSS('#inject_CSS {font-size: 2px}', function() {
    equal($('#inject_CSS').css('font-size'), '2px');
    start();
  });
});

asyncTest('load_JS()', function() {
  expect(1);
  load_JS('tests-load_JS.js', function() {
    equal($('#load_JS').length, 1);
    start();
  });
});

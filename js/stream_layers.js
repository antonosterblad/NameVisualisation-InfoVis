/* Inspired by Lee Byron's test data generator. */
function stream_layers(n, m, o) {
  if (arguments.length < 3) o = 0;

  function bump(a) {
    var x = Math.random(),
        y = 2 * Math.random() - .5,
        z = 10 / (.1 + Math.random());
    for (var i = 0; i < m; i++) {
      var w = (i / m - y) * z;
      a[i] += x * Math.exp(-w * w);
    }
  }
  console.log("hlall");
  return d3.range(n).map(function() {
      var a = [], i;
      for (i = 0; i < m; i++) a[i] = o + o * Math.random();
      for (i = 0; i < 5; i++) bump(a);
      //  console.log(a.map(stream_index));
      return a.map(stream_index);
    });
}

function stream_index(d, i) {
  console.log(d);
  return {x: i, y: Math.max(0, d)};
}
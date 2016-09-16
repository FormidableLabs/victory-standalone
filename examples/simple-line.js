// In a browser environment with jQuery available...

$(document).ready(function() {
  const mountPoint = $("#app")[0];
  window.victory = new Victory(mountPoint, {
    data: [1,2,3,4,5],
    x: function(x) { return x; },
    y: function(x) { return 2 * x; }
  })
});

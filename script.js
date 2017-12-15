function move(b,a) {
    var elem = b;
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
          if (width >= a) {
              clearInterval(id);
          } else {
              width++;
              elem.css("width", width + '%');
          }
      }
  }
  $(document).ready(() => {
    move($("#cpp"),60);
    move($("#html"),50);
    move($("#js"),40);
    move($("#css"),20);
    move($("#it"),100);
    move($("#en"),55);    
    
});
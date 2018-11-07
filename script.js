function move(b,a,c) {
    var elem = b;
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
          if (width >= a) {
              clearInterval(id);
          } else {
              width++;
              elem.css("width", width + '%');
              if(c)elem.text(width+"%");
          }
      }
  }
  $(document).ready(() => {
    move($("#cpp"),60,true);
    move($("#html"),70,true);
    move($("#js"),80,true);
    move($("#css"),20,true);
    move($("#it"),100,false);
    move($("#en"),55,false);    
    
});

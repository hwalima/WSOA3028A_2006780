function distance( pt, pt2 ){
  
    var xs = 0;
    var ys = 0;
   
    xs = pt2.x - pt.x;
    xs = xs * xs;
   
    ys = pt2.y - pt.y;
    ys = ys * ys;
   
    return Math.sqrt( xs + ys );
  }
  
  function mouseDown( event ){
    mouse.down = true;
    position.x = event.pageX;
    position.y = event.pageY;
    
    document.getElementById('info').style.display = 'none';
  }
  
  function mouseUp( event ){
      mouse.down = false;
  }
  
  function doubleClick( event ) {
    canvas.width = canvas.width; 
  }
  
  function textWidth( string, size ) {
    context.font = size + "px Georgia";
    
    if ( context.fillText ) {
      return context.measureText( string ).width;
    } else if ( context.mozDrawText) {
      return context.mozMeasureText( string );
    }
    
   };
  
  init();
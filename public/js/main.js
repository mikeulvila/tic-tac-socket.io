;(function() {

  'use strict'

  const socket = io.connect()

  socket.on('connect', () => {
    console.log('client socket connected')
  });

  $(".box").click(function () {
    console.log($(this));
    $(this).append( "<i class='fa fa-times fa-4x'></i>" );
  });





})();

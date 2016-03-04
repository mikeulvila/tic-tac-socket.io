;(function() {

  'use strict'

  const socket = io.connect()

  socket.on('connect', () => {
    console.log('client socket connected')
  });

  let playerMoves = 0;

  $(".box").click(function () {
    if ($(this).find('i').length === 0) {
      console.log('no child, add that x dog');
      $(this).append( "<i class='fa fa-times fa-4x'></i>" );
    } else {
      console.log('already has a child bitch');
    }
  });





})();

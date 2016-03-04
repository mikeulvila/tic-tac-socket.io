;(function() {

  'use strict'

  const socket = io.connect()

  socket.on('connect', () => {
    console.log('client socket connected')
  });

  let playerMoves = 0;

  $(".box").click(function () {
    // check to see if x or o font already exists
    if ($(this).find('i').length === 0) {
      // alternate x and o
      if (playerMoves%2 === 0) {
        $(this).append( "<i class='fa fa-times fa-4x'></i>" );
        playerMoves++
      } else {
        $(this).append( "<i class='fa fa-circle-o fa-4x'></i>" );
        playerMoves++
      }
    // alert if div already taken
    } else {
      alert("You can't go there dude, already takin!");
    }
  });





})();

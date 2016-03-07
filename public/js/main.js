;(function() {

  'use strict'

  const socket = io.connect()

  socket.on('connect', () => {
    console.log('client socket connected')
  });

  let $tictac = $('#tictac').html();
  const x = "<i class='fa fa-times fa-4x'></i>";
  const o = "<i class='fa fa-circle-o fa-4x'></i>";
  let playerMoves = 0;

  $(".box").click(function (e) {
      socket.emit('player move', e.currentTarget.id);
  });

  socket.on('send mark', function (id) {
    const $markContainer = $('#'+id);
    console.log('markContainer>>>>', $markContainer);
    // check to see if x or o font already exists
    if ($markContainer.find('i').length === 0) {
      // alternate x and o
      if (playerMoves%2 === 0) {
        $markContainer.append( x );
        playerMoves++
      } else {
        $markContainer.append( o );
        playerMoves++
      }
    // alert if div already taken
    } else {
      alert("You can't go there dude, already takin!");
    }
  });






})();

;(function() {

  'use strict'

  const socket = io.connect()

  socket.on('connect', () => {
    console.log('client socket connected')
  })





})();

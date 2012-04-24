

var tetris = {

   randomColor : function(){
      var colorshuffle=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
      var randColor = "";
      for (i=0; i<=5; i++){
         colorshuffle.shuffle();
         randColor = randColor + String(colorshuffle[0]);
      }
      return randColor;
   },

   pieces : {
      o : [
         [[0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]]
         [[0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]]
         ],	 

      t : [
         [[0,0,0,0,1,0,0,0,0,0],
          [0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,1,0,0,0,0,0],
          [0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
      ],  

      i : [
         [[0,0,0,1,1,1,1,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0]]
         [[0,0,0,1,1,1,1,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0]]
         ],

      z : [
         [[0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,1,1,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,1,0,0,0,0],
          [0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]]
         [[0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,1,1,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,1,0,0,0,0],
          [0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]]
      ],

      s : [
         [[0,0,0,0,1,1,0,0,0,0],
          [0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]]
         [[0,0,0,0,1,1,0,0,0,0],
          [0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]]
      ],									

      l : [
         [[0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,1,0,0,0,0],
          [0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,1,1,1,0,0,0,0],
          [0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]]
      ],									

      j : [
         [[0,0,0,0,0,1,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0],
          [0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,1,0,0,0,0,0,0],
          [0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]]
      ],									
   },

   board : 
      [[0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0]],

   init : function(){
      this.waitingPiece = this.createPiece();
      this.playPiece = this.createPiece();
      this.renderWaiting(this.waitingPiece);
      this.loadBoard(this.board, this.playPiece);
      this.render(this.board, this.playPiece);
      var that = this;
      //window.setInterval($.proxy(this.gameLoop, this), 1000); //makes setInterval scope the same as tetris object
      this.gameLoop();
   },

   gameLoop : function() {
      this.moveDown(this.board, this.playPiece);

      //have static board and dynamic board(just board) that check against eachother
   },

   createPiece : function(){
      var allPieces = [];
      var onDeck;
      var piece;
      $.each(tetris.pieces, function(key, value) {  //puts pieces into an array ready to be shuffled
         allPieces.push(key);
      });
      allPieces.shuffle();
      onDeck = allPieces[0];  //sets name of piece to onDeck
      piece = tetris.pieces[onDeck];
      piece.name = onDeck[0];
      piece.color = tetris.randomColor();	
      return piece;
   },

   moveDown : function(){
      console.log('moveDown--------------');
      console.log(this.playPiece.name);
      console.log(this.playPiece[3]);
      var space = [0,0,0,0,0,0,0,0,0,0];
      console.log('before: ' + typeof(this.playPiece));
      for (var i = 0; i < 4; i++) {
         this.playPiece[i] = this.playPiece[i].unshift(space);
      }
      console.log('after: ' + typeof(this.playPiece));
      //this.loadBoard(this.board, this.playPiece);
      //this.render(this.board, this.playPiece);
   },

   moveLeft : function(){
   },

   moveRight : function(){
   },

   loadBoard : function(board, piece){
      console.log(this.playPiece.name);
      console.log(this.playPiece[0].length);
      for (var y = 0; y < piece[0].length; y++) {
         for ( var x = 0; x < 10; x++) {
            board[y][x] = piece[0][y][x];
         }
      }
      this.board = board;
   },

   renderWaiting : function(piece){
      var x = 0;
      var y = 0;
      $('.piece_name').text(piece.name);
      $('.piece_color').text(piece.color);
      $('.onDeck_board .block').each(function(){
         if (piece[0][x][y] == 1){
            $(this).css('backgroundColor', '#'+piece.color);
         }
         if (y == 9) {
            x++;
            y = 0;
         } else {
            y++;
         }
      });
   },

   render : function(board, piece){
      var boardConcat = jQuery.map(board, function(a){
         return a;
      });
      $('.play_board .block').each(function(index){
         if (boardConcat[index] == 1){
            $(this).css('backgroundColor', '#'+piece.color);
         }
         $(this).html(boardConcat[index]);
      });
   }
} // end of object

$(document).ready(function(){
   //board is 9x17 starting from 0

   Array.prototype.shuffle = function() {
      var s = [];
      while (this.length) s.push(this.splice(Math.random() * this.length, 1));
      while (s.length) this.push(s.pop());
      return this;
   }	

   tetris.init();	
});


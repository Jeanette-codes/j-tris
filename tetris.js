

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
          [0,0,0,0,0,0,0,0,0,0]],
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
          [0,0,0,0,1,0,0,0,0,0]],
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
          [0,0,0,0,0,0,0,0,0,0]],
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
          [0,0,0,0,0,0,0,0,0,0]],
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

   board : [ 
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
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
      ],

   init : function(){
      this.waitingPiece = this.createPiece();
      this.playPiece = this.createPiece();
      this.renderWaiting(this.waitingPiece);
      this.loadBoard();
      this.render();
      var that = this;
      this.time = window.setInterval($.proxy(this.gameLoop, this), 1000); //makes setInterval scope the same as tetris object
      //this.gameLoop(); // just for testing purposes.
   },

   gameLoop : function(){
      if (this.collisionTest() === false){
         this.moveDown();
      } else {
         this.gameOver();
      }
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

   gameOver : function() { 
      window.clearInterval(this.time);
      console.log('game over man');
   },

   moveDown : function(){
      console.log('moveDown--------------');
      var space = [[0,0,0,0,0,0,0,0,0,0]];
      for (var i = 0; i < 4; i++) {
         this.playPiece[i].unshift.apply(this.playPiece[i], space);
         //this.playPiece[i].pop();
      }
      this.render();
   },

   moveLeft : function(){
   },

   moveRight : function(){
   },

   //check every place with a 1 against certain conditions
   collisionTest : function(){
      var pieceLength = this.playPiece[0].length - 1;
      var pieceEnd = pieceLength - 4; 
      var counter = 0;
      var coords = [];

      //builds array for piece coordinates
      for (var y = pieceLength; y > pieceEnd; y--) {
         for (var x = 0; x < 10; x++) {
            if (this.playPiece[0][y][x] == 1) {
               coords.push(x, y); //coords are from top to bottom and left to right
            }
         }
      }
      for (var c = 1; c < 8; c = c + 2) {
         if (coords[c] === 17) {
            return true;
         } else {
            return false;
         }
         console.log(coords[c]);
      } 
   },

   touchDown : function(){
      
   },

   loadBoard : function(){
      //var newPiece = [];
      //jQuery.extend(true, newPiece, this.board, this.playPiece);
      //this.playPiece = newPiece;
      //this.render();
   },

   renderWaiting : function(){
      var x = 0;
      var y = 0;
      $('.piece_name').text(this.waitingPiece.name);
      $('.piece_color').text(this.waitingPiece.color);
      var that = this;
      $('.onDeck_board .block').each(function(){
         if (that.waitingPiece[0][x][y] == 1){
            $(this).css('backgroundColor', '#'+ that.waitingPiece.color);
         }
         if (y == 9) {
            x++;
            y = 0;
         } else {
            y++;
         }
      });
   },

   render : function(){
      var boardConcat = jQuery.map(this.playPiece[0], function(a){
         return a;
      });
      var that = this;
      $('.play_board .block').each(function(index){
         if (boardConcat[index] == 1){
            $(this).css('backgroundColor', '#' + that.playPiece.color);
         } else {
            $(this).css('backgroundColor', '#aaa');
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


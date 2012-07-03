//TODO when moving left or right sometimes dropped pices dissapear.
//BUG: Any piece that moves farthest right will cause a 'Uncaught TypeError: Cannot read property '8' of undefined on 283 or 220'.
//^ try removing keypresses during touchdown?
//BUG: when piece touches down on bottom while moving right against another piece it causes overlap. might be related ^

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
      o : function() {
         return [
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
         ];	 
      },

      t : function() {
         return [
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
         ];  
      },

      i : function() {
         return [
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
         ];
      },

      z : function() {
         return [
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
         ];
      },

      s : function() { 
         return [
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
         ];									
      },

      l : function() {
         return [
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
         ];									
      },

      j : function() {
         return [
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
         ];									
      }
   },

   board : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

         //[0,0,0,0,0,0,0,0,0,0],
         //[0,0,0,0,0,0,0,0,0,0],
         //[0,0,0,0,0,0,0,0,0,0],
         //[0,0,0,0,0,0,0,0,0,0],
         //[0,0,0,0,0,0,0,0,0,0],
         //[0,0,0,0,0,0,0,0,0,0],
         //[0,0,0,0,0,0,0,0,0,0],
         //[0,0,0,0,0,0,0,0,0,0],
         //[0,0,0,0,0,0,0,0,0,0],
         //[0,0,0,0,0,0,0,0,0,0],
         //[0,0,0,0,0,0,0,0,0,0],
         //[0,0,0,0,0,0,0,0,0,0],
         //[0,0,0,0,0,0,0,0,0,0],
         //[0,0,0,0,0,0,0,0,0,0],
         //[0,0,0,0,0,0,0,0,0,0],
         //[0,0,0,0,0,0,0,0,0,0],
         //[0,0,0,0,0,0,0,0,0,0],
         //[0,0,0,0,0,0,0,0,0,0],

   init : function(){
      this.waitingPiece = this.createPiece();
      this.playPiece = this.createPiece();
      this.renderWaiting();
      this.render();
      var that = this;
      this.controls();

      //makes setInterval scope the same as tetris object
      //this.controlTimer = window.setInterval($.proxy(this.controls, this), 0);    
      this.time = window.setInterval($.proxy(this.gameLoop, this), 100);    
   },

   gameLoop : function(){
      if (this.collisionTest("down") === false) {
         this.moveDown();
      } else {
         console.log("side hit");
      }
   },

   controls : function() {
      var that = this;
      document.onkeydown = function(e) {
         if (e.keyCode === 37) {
            if (that.collisionTest("left") === false){
               that.moveLeft();
            } else {
               console.log('left hit');
            }
         } 

         if (e.keyCode === 39) {
            if (that.collisionTest("right") === false){
               that.moveRight();
            } else {
               console.log('right hit');
            }
         } 
      }
   },


   //returns random piece with a name and color attached to it.
   createPiece : function(){
      var allPieces = ['o','t','i','z','s','l','j'];
      var piece = {};

      allPieces.shuffle();
      var select = allPieces[0][0];

      //sets name of piece to onDeck
      piece = tetris.pieces[select]();
      piece.name = select;
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
      }
      this.render();
   },

   moveLeft : function(){
      console.log('move left');
      var pieceLength = this.playPiece[0].length - 1;
      var pieceEnd = pieceLength - 4; 

      //moves array over to left one
      for (var y = pieceLength; y > pieceEnd; y--) {
         for (var x = 0; x < 10; x++) {
            if (this.playPiece[0][y][x] == 1) {
               this.playPiece[0][y][x - 1] = 1;
               this.playPiece[0][y][x] = 0;
            }
         }
      }
   },

   moveRight : function(){
      console.log('move right');
      var pieceLength = this.playPiece[0].length - 1;
      var pieceEnd = pieceLength - 4; 
      console.log(this.playPiece.name);

      //moves array over to right one
      for (var y = pieceLength; y >= pieceEnd; y--) {
         for (var x = 8; x >= 0; x--) {
            if (this.playPiece[0][y][x] === 1) {
               this.playPiece[0][y][x] = 0;
               this.playPiece[0][y][x + 1] = 1;
            }
         }
      }
   },

   coords : function() {
      var coords = [];
      var pieceLength = this.playPiece[0].length - 1;
      var pieceEnd = pieceLength - 4; 

      for (var y = pieceLength; y > pieceEnd; y--) {
         for (var x = 0; x < 10; x++) {
            if (this.playPiece[0][y][x] == 1) {
               coords.push(x, y); //coords are from top to bottom and left to right
            }
         }
      }
      return coords;
   },

   //check every place with a 1 against certain conditions
   collisionTest : function(direction){
      var pieceLength = this.playPiece[0].length - 1;
      var pieceEnd = pieceLength - 4; 
      var counter = 0;
      var coords = [];

      //builds array for piece coordinates
      for (var y = pieceLength; y > pieceEnd; y--) {
         for (var x = 0; x < 10; x++) {
            if (this.playPiece[0][y][x] == 1) {
               coords.push(x, y); //coords are from top to bottom and left to right

               // if piece touches down on another piece 
               if (direction === "down") {
                  if (y === 0) {
                     if (this.board[9 + x] === 1) {
                        this.touchDown();
                        return;
                     }
                  }
                  else {
                     if (this.board[10 * (y + 1) + x ] === 1 && direction === "down") {
                        this.touchDown();
                        return;
                     }
                  }
               }

               // if piece hits another piece on the sides
               if (direction === "left" && x !== 0 && this.board[10 * (y + 1) + x - 1] === 1) {
                  return true;
               }
               if (direction === "right" && x !== 9 && this.board[10 * (y + 1) + x + 1] === 1) {
                  return true;
               }
            }
         }
      }

      // if piece hits the bottom
      if (direction === "down") {
         for (var c = 1; c < 8; c = c + 2) {
            if (coords[c] === 17) {
               this.touchDown();
               return;
            }
         } 
      }

      // if piece hits wall 
      for (var c = 0; c < 8; c += 2) {
         if (coords[c] === 0 && direction === "left") {
            return true;
         } else if (coords[c] === 9 && direction === "right") {
            return true;
         }        
      }

      return false;

   },

   //fires when piece hits bottom or another piece
   touchDown : function(){
      console.log('touchdown'); 
      this.loadBoard();
      this.playPiece = this.waitingPiece;
      this.waitingPiece = this.createPiece();
      this.render();
      this.renderWaiting();

      //refresh index for array testing
      $('.play_board .block').each(function(index){
         $(this).html("");
      });
   },

   // moves piece array into board array on touchdown
   loadBoard : function(){
      var length = this.playPiece[0].length - 1;
      var flatPiece = [];

      // makes single array out of piece
      for (var i = 0; i < length; i++) {
         flatPiece = flatPiece.concat(this.playPiece[0][i]);
      }

      // makes length of piece equal board
      flatPiece = flatPiece.slice(0, 180);

      // stores piece position in board
      for (var i = 0; i < 180; i++) {
         if (this.board[i] === 1 && flatPiece[i] === 1) {
            console.log('overlapping piece detected abort!');
            console.log('index of overlap: ', i);
            this.gameOver();
            return;
         }
         if (this.board[i] === 0 && flatPiece[i] === 1) {
            this.board[i] = 1;
         }
      }
   },

   renderWaiting : function(){
      var pieceConcat = jQuery.map(this.waitingPiece[0], function(a){
         return a;
      });
      $('.piece_name').text(this.waitingPiece.name);
      $('.piece_color').text(this.waitingPiece.color);

      var that = this;
      $('.onDeck_board .block').each(function(index){
         if (pieceConcat[index] === 1){
            $(this).css('backgroundColor', '#'+ that.waitingPiece.color);
         } else {
            $(this).css('backgroundColor', '#aaa');
         }
      });
   },

   render : function(){
      var flatPiece = [];
      var length = this.playPiece[0].length - 1;

      // makes single array out of a piece
      for (var i = 0; i <= length; i++) {
         flatPiece = flatPiece.concat(this.playPiece[0][i]);
      }

      var board = this.board;
      var that = this;

      $('.play_board .block').each(function(index){
         if (board[index] == 1){
            return;
         } 
         if (flatPiece[index] == 1){
            $(this).css('backgroundColor', '#' + that.playPiece.color);
         } 
         // for testing hit points
         if (board[index] === 2) {
            $(this).css('backgroundColor', 'red');
         }
         if (board[index] === 0 && flatPiece[index] === 0) {
            $(this).css('backgroundColor', '#aaa');
         }
         $(this).html(flatPiece[index]);
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


//TODO sync up the board with the piece somehow
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
         [[0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]]
         ];	 
      },

      t : function() {
         return [
         [[0,0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         ];  
      },

      i : function() {
         return [
         [[0,0,0,0,1,1,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0,0]],
         [[0,0,0,0,1,1,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0,0]]
         ];
      },

      z : function() {
         return [
         [[0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]]
         ];
      },

      s : function() { 
         return [
         [[0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,1,1,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,1,1,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]]
         ];									
      },

      l : function() {
         return [
         [[0,0,0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,1,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,1,1,1,0,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]]
         ];									
      },

      j : function() {
         return [
         [[0,0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,1,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,0,1,1,0,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]],
         [[0,0,0,0,1,0,0,0,0,0,0,0],
          [0,0,0,0,1,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0]]
         ];									
      }
   },

   board : [
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,1,1,1,1,1,1,1,1,1,1,1]],

   init : function(){
      this.dom = this.domBuild('.play_board .block');
      this.waitDom = this.domBuild('.onDeck_board .block');
      this.waitingPiece = this.createPiece();
      this.playPiece = this.createPiece();
      this.renderWaiting();
      this.moveDown();
      this.render();
      this.controls();

      //makes setInterval scope the same as tetris object
      //this.controlTimer = window.setInterval($.proxy(this.controls, this), 0);    
      this.time = window.setInterval($.proxy(this.gameLoop, this), 200);    
   },

   // makes the blocks into an array of great justice
   domBuild : function(blocks) {
      var domBlocks = $(blocks);
      var domBlocksLength = domBlocks.length;
      var domArray = [];
      for (var i = 0; i < domBlocksLength; i = i + 10) {
         domArray.push(domBlocks.slice(i,i + 10));
      }
      return domArray;
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
            if (that.collisionTest("left") === false) {
               that.moveLeft();
            } else {
               console.log('left hit');
            }
         } 

         if (e.keyCode === 39) {
            if (that.collisionTest("right") === false) {
               that.moveRight();
            } else {
               console.log('right hit');
            }
         } 
         if (e.keyCode === 65) {
            if (that.collisionTest("rRotate") === false) {
               that.rotate("rRotate");
            } else {
               console.log('rotate hit');
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
      var space = [[0,0,0,0,0,0,0,0,0,0,0,0]];
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
      for (var r = 0; r < 4; r++) {
         for (var y = pieceLength; y > pieceEnd; y--) {
            for (var x = 0; x < 10; x++) {
               if (this.playPiece[r][y][x] == 1) {
                  this.playPiece[r][y][x - 1] = 1;
                  this.playPiece[r][y][x] = 0;
               }
            }
         }
      }
   },

   moveRight : function(){
      console.log('move right');
      var pieceLength = this.playPiece[0].length - 1;
      var pieceEnd = pieceLength - 4; 

      //moves array over to right one
      for (var r = 0; r < 4; r++) {
         for (var y = pieceLength; y > pieceEnd; y--) {
            for (var x = 8; x >= 0; x--) {
               if (this.playPiece[r][y][x] === 1) {
                  this.playPiece[r][y][x] = 0;
                  this.playPiece[r][y][x + 1] = 1;
               }
            }
         }
      }
   },

   rotate : function(direction) {
      console.log("rotated");
      if (direction === "rRotate") {
         var popped = this.playPiece.pop();
         this.playPiece.unshift(popped);
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
      var zeroCount = 0;
      var nineCount = 0;
      var coords = [];

      //builds array for piece coordinates
      for (var y = pieceLength; y > pieceEnd; y--) {
         for (var x = 0; x < 10; x++) {
            if (this.playPiece[0][y][x] == 1) {
               if (x === 0) {
                  zeroCount++;
               }
               if (x === 9) {
                  nineCount++;
               }
               coords.push(x, y); //coords are from top to bottom and left to right

               // if piece touches down on another piece 
               if (direction === "down") {
                  if (this.board[y + 2][x] === 1) {
                     this.gameOver();
                     //this.touchdown();
                  }
               }

               // if piece hits another piece on the sides
               if (direction === "left") {
                 if (this.board[y][x - 1] === 1) { 
                     return true;
                  }
               }
               if (direction === "right") {
                 if (this.board[y][x] === 1) { 
                     return true;
                  }
               }
            }

            // checks if the piece rotated right collides with anything
            if (direction === 'rRotate' && this.playPiece[3][y][x] === 1) {
               if (this.board[y][x] === 1 || zeroCount > 2 || nineCount > 2) {
                  return true;
               }
               if (this.playPiece.name === 's' && zeroCount > 1) {
                  this.moveRight();
                  return false;
               }
            }
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
      //$('.play_board .block').each(function(index){
         //$(this).html("");
      //});
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
      var piecelength = this.waitingPiece[0].length - 1;
      for (var y = 0; y < piecelength; y++){
         for (var x = 0; x < 10; x++) {
            if (this.waitingPiece[0][y][x] === 1){
               $(this.waitDom[y][x - 1]).css('backgroundColor', '#' + this.waitingPiece.color);
            }
            if (this.board[y][x + 1] === 0) {
               $(this.waitDom[y][x]).css('backgroundColor', '#aaa');
            }
         }
      }
   },

   render : function(){
      var piecelength = this.playPiece[0].length - 1;
      for (var y = 0; y < 18; y++){
         for (var x = 0; x < 11; x++) {
            $(this.dom[y][x]).html(this.board[y][x]);
         }
      }

      // iterate over entire board
      for (var y = 0; y < piecelength; y++){
         for (var x = 0; x < 11; x++) {
            //if (this.board[y][x + 1] === 1) {
               //return;
            //}
            if (this.playPiece[0][y][x] === 1){
               $(this.dom[y][x]).css('backgroundColor', '#' + this.playPiece.color);
               $(this.dom[y][x]).html('1');
            }
            if (this.board[y][x] === 0 && this.playPiece[0][y][x] === 0) {
               $(this.dom[y][x]).css('backgroundColor', '#aaa');
               $(this.dom[y][x]).html('0');
            }
         }
      }
   }
} // end of object

$(document).ready(function(){
   // dom board is 9x17 starting from 0
   // board is 11x18 starting from 0

   Array.prototype.shuffle = function() {
      var s = [];
      while (this.length) s.push(this.splice(Math.random() * this.length, 1));
      while (s.length) this.push(s.pop());
      return this;
   }	

   tetris.init();	
});


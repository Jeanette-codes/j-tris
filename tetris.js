//TODO: line scoring system
//TODO: use request animation frame
//TODO: refactor movedown so I don't have to use such a big array
//TODO: refactor pieces to be 4x4 and then inject them into playPiece
//TODO: add hard drop
//TODO: optimize as much as possible

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
         [[1,1,0,0],
          [1,1,0,0],
          [0,0,0,0],
          [0,0,0,0]],
         [[1,1,0,0],
          [1,1,0,0],
          [0,0,0,0],
          [0,0,0,0]],
         [[1,1,0,0],
          [1,1,0,0],
          [0,0,0,0],
          [0,0,0,0]],
         [[1,1,0,0],
          [1,1,0,0],
          [0,0,0,0],
          [0,0,0,0]]
         ];
      },

      t : function() {
         return [
         [[0,0,0,0],
          [1,1,1,0],
          [0,1,0,0],
          [0,0,0,0]],
         [[0,1,0,0],
          [1,1,0,0],
          [0,1,0,0],
          [0,0,0,0]],
         [[0,1,0,0],
          [1,1,1,0],
          [0,0,0,0],
          [0,0,0,0]],
         [[0,1,0,0],
          [0,1,1,0],
          [0,1,0,0],
          [0,0,0,0]]
         ];
      },

      i : function() {
         return [
         [[0,1,0,0],
          [0,1,0,0],
          [0,1,0,0],
          [0,1,0,0]],
         [[0,0,0,0],
          [1,1,1,1],
          [0,0,0,0],
          [0,0,0,0]],
         [[0,0,1,0],
          [0,0,1,0],
          [0,0,1,0],
          [0,0,1,0]],
         [[0,0,0,0],
          [0,0,0,0],
          [1,1,1,1],
          [0,0,0,0]]
         ];
      },

      z : function() {
         return [
         [[0,0,0,0],
          [1,1,0,0],
          [0,1,1,0],
          [0,0,0,0]],
         [[0,1,0,0],
          [1,1,0,0],
          [1,0,0,0],
          [0,0,0,0]],
         [[1,1,0,0],
          [0,1,1,0],
          [0,0,0,0],
          [0,0,0,0]],
         [[0,0,1,0],
          [0,1,1,0],
          [0,1,0,0],
          [0,0,0,0]]
         ];
      },

      s : function() { 
         return [
         [[0,0,0,0],
          [0,1,1,0],
          [1,1,0,0],
          [0,0,0,0]],
         [[1,0,0,0],
          [1,1,0,0],
          [0,1,0,0],
          [0,0,0,0]],
         [[0,1,1,0],
          [1,1,0,0],
          [0,0,0,0],
          [0,0,0,0]],
         [[0,1,0,0],
          [0,1,1,0],
          [0,0,1,0],
          [0,0,0,0]]
         ];
      },

      l : function() {
         return [
         [[0,1,0,0],
          [0,1,0,0],
          [0,1,1,0],
          [0,0,0,0]],
         [[0,0,0,0],
          [1,1,1,0],
          [1,0,0,0],
          [0,0,0,0]],
         [[1,1,0,0],
          [0,1,0,0],
          [0,1,0,0],
          [0,0,0,0]],
         [[0,0,1,0],
          [1,1,1,0],
          [0,0,0,0],
          [0,0,0,0]]
         ];
      },

      j : function() {
         return [
         [[0,1,0,0],
          [0,1,0,0],
          [1,1,0,0],
          [0,0,0,0]],
         [[1,0,0,0],
          [1,1,1,0],
          [0,0,0,0],
          [0,0,0,0]],
         [[0,1,1,0],
          [0,1,0,0],
          [0,1,0,0],
          [0,0,0,0]],
         [[0,0,0,0],
          [1,1,1,0],
          [0,0,1,0],
          [0,0,0,0]]
         ];
      }
   },

   //this has padding for when a piece lays flat
   //might want to change how pieces travel down so I 
   //don't need the padding
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
      this.render();
      var that = this;

      //controls game loop and key control timers 
      this.time = window.setInterval($.proxy(this.gameLoop, this), 200);    
      $(window).on('keydown', $.proxy(this.controls, this));
   },

   // makes the blocks into an array of great justice
   domBuild : function(blocks) {
      var domBlocks = $(blocks);
      var domBlocksLength = domBlocks.length;
      var domArray = [];
      for (var i = 0; i < domBlocksLength; i = i + 12) {
         domArray.push(domBlocks.slice(i,i + 12));
      }
      return domArray;
   },

   gameLoop : function(){
      if (this.collisionTest("down") === false) {
         this.moveDown();
      } 
   },

   controls : function(e) {
      console.log('code', e.charCode, e.keyCode);
         if (e.keyCode === 37) {
            if (this.collisionTest("left") === false) {
               this.moveLeft();
            } else {
               console.log('left hit');
            }
         } 

         if (e.keyCode === 39) {
            if (this.collisionTest("right") === false) {
               this.moveRight();
            } else {
               console.log('right hit');
            }
         } 
         if (e.keyCode === 65) {
            if (this.collisionTest("rRotate") === false) {
               this.rotate("rRotate");
            } else {
               console.log('rotate hit');
            }
         }
   },


   //returns random piece with a name and color attached to it.
   //build this.playPiece array x = 11 y = 18 
   createPiece : function(){
      var allPieces = ['o','t','i','z','s','l','j'];
      var piece = {};
      var newPiece = [
        [[0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0]],   
        [[0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0]],   
        [[0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0]],   
        [[0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0]]   
      ];

      allPieces.shuffle();
      var select = allPieces[0];

      piece = tetris.pieces[select]();
      newPiece.name = select;
      newPiece.color = tetris.randomColor();	

      for (var r = 0; r <= 3; r++) {
         for (var y = 0; y <= 3; y++) {
            for (var x = 0; x <= 11; x ++) {
               if (x > 4 && x < 9) {
                  newPiece[r][y][x] = piece[r][y][x-5];
               } 
            }
         }
      }
      
      return newPiece;
   },

   gameOver : function() { 
      $(window).off('keydown');
      window.clearInterval(this.time);
      console.log('game over man');
   },

   moveDown : function(){
      var piecelength = this.playPiece[0].length - 1;
      console.log(piecelength);

      for (var r = 0; r < 4; r++) {
         for (var y = piecelength; y >= 0; y--) {
            for (var x = 0; x <= 11; x++) {
               if (this.playPiece[r][y][x] == 1) {
                  this.playPiece[r][y + 1][x] = 1;
                  this.playPiece[r][y][x] = 0;
               }
            }
         }
      }
      this.render();
   },

   moveLeft : function(){
      console.log('move left');
      var piecelength = this.playPiece[0].length - 1;

      //moves array over to left one
      for (var r = 0; r < 4; r++) {
         for (var y = piecelength; y >= 0; y--) {
            for (var x = 0; x <= 11; x++) {
               if (this.playPiece[r][y][x] == 1) {
                  this.playPiece[r][y][x - 1] = 1;
                  this.playPiece[r][y][x] = 0;
               }
            }
         }
      }
      this.render();
   },

   moveRight : function(){
      console.log('move right');
      var pieceLength = this.playPiece[0].length - 1;

      //moves array over to right one
      for (var r = 0; r < 4; r++) {
         for (var y = pieceLength; y >= 0; y--) {
            for (var x = 13; x >= 0; x--) {
               if (this.playPiece[r][y][x] === 1) {
                  this.playPiece[r][y][x] = 0;
                  this.playPiece[r][y][x + 1] = 1;
               }
            }
         }
      }
      this.render();
   },

   rotate : function(direction) {
      console.log("rotated");
      if (direction === "rRotate") {
         var popped = this.playPiece.pop();
         this.playPiece.unshift(popped);
      }
      this.render();
   },

   //check every place with a 1 against certain conditions
   collisionTest : function(direction){
      var pieceLength = this.playPiece[0].length - 1;

      //builds array for piece coordinates
      for (var y = pieceLength; y >= 0; y--) {
         for (var x = 0; x <= 11; x++) {

            if (direction === 'rRotate') { 
               if (this.playPiece[3][y][x] === 1 && this.board[y][x] === 1) {
                  console.log('rotate hit');
                  return true;
               }
            }

            if (this.playPiece[0][y][x] === 1) {

               // if piece touches down on another piece 
               if (direction === "down") {
                  if (this.board[y + 1][x] === 1) {
                     this.touchDown();
                     return true;
                  }
               }

               // if piece hits another piece on the sides
               if (direction === "left") {
                 if (this.board[y][x - 1] === 1) { 
                     return true;
                  }
               }
               if (direction === "right") {
                 if (this.board[y][x + 1] === 1) { 
                     return true;
                  }
               }
            }

            if (direction === 'init' && this.playPiece[0][y][x] === 1) {
               if (this.board[y][x] === 1) {
                  return true;
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
      if (this.collisionTest('init') === true) {
         this.gameOver();
      }
      this.render();
      this.renderWaiting();
   },

   // moves piece array into board array on touchdown
   loadBoard : function(){

      var piecelength = this.playPiece[0].length - 1;

      // iterate over entire board
      for (var y = 0; y <= piecelength; y++){
         for (var x = 1; x <= 10; x++) {
            if (this.playPiece[0][y][x] === 1){
               this.board[y][x] = 1;
            }
            //$(this.dom[y][x]).html(this.board[y][x]);
         }
      }
   },

   //what?
   //make this just call the name and render according to name and pull color from waitingPiece
   renderWaiting : function(){
      //var piecelength = this.waitingPiece[0][0].length - 5;
      //console.log(piecelength);
      //for (var y = 0; y < piecelength; y++){
         //for (var x = 1; x < 10; x++) {
            //console.log(y,x);
            //if (this.waitingPiece[0][y][x] === 1){
               //$(this.waitDom[y][x]).css('backgroundColor', '#' + this.waitingPiece.color);
            //} else {
               //$(this.waitDom[y][x]).css('backgroundColor', '#aaa'); 
            //}

         //}
      //}
   },

   render : function(){
      var piecelength = this.playPiece[0].length - 1;

      // iterate over entire board
      for (var y = 0; y < piecelength; y++){
         for (var x = 0; x <= 11; x++) {
            if (this.board[y][x] === 0) {
               if (this.playPiece[0][y][x] === 1){
                  $(this.dom[y][x]).css('backgroundColor', '#' + this.playPiece.color);
                  //$(this.dom[y][x-1]).html('1');
               }
               if (this.board[y][x] === 0 && this.playPiece[0][y][x] === 0) {
                  $(this.dom[y][x]).css('backgroundColor', '#aaa');
                  //$(this.dom[y][x-1]).html('0');
               }
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


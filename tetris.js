

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

   /*playBoard : function(){
     for (var i = 0; i <= 17; i++) {
     for (var j = 0; j <= 9; j++) {
     play_key = 'r'+i+'c'+j;
     playBoard[play_key] = 0;
     }
     }
     },*/

   ///////////////pieces.piecename[rotate][row][col]
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
      var waiting = this.createPiece();
      var inPlay = this.createPiece();
      this.loadNext(waiting);
      this.loadBoard(inPlay);
      inPlay = waiting;
      window.setInterval(this.gameLoop, 1000);
   },

   gameLoop : function() {
      //load from waiting
      //check hit
      //drop down 1 
      //check hit
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

   loadNext : function(upcomingPiece){
      var x = 0;
      var y = 0;
      $('.piece_name').text(upcomingPiece.name);
      $('.piece_color').text(upcomingPiece.color);
      $('.onDeck_board .block').each(function(){
         if (upcomingPiece[0][x][y] == 1){
            $(this).css('backgroundColor', '#'+upcomingPiece.color);
         }
         if (y == 9) {
            x++;
            y = 0;
         } else {
            y++;
         }
      });
   },

   loadBoard : function(insertPiece){
      $('.play_board .block').each(function(){
         $(this).text('0');    
      });   
   }
} // end of object

$(document).ready(function(){

   Array.prototype.shuffle = function() {
      var s = [];
      while (this.length) s.push(this.splice(Math.random() * this.length, 1));
      while (s.length) this.push(s.pop());
      return this;
   }	

   tetris.init();	
});


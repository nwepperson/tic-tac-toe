var cells = document.getElementsByClassName('position');

var scoreboard = {
  turn: 0,
  win: false,
  winner: null,
  xGameScore: 0,
  oGameScore: 0
};

var possibleWins = [["1","2","3"], ["4","5","6"], ["7","8","9"],
                   ["1","4","7"], ["2","5","8"], ["3","6","9"],
                   ["1","5","9"], ["3","5","7"]];

function getPlayer(turn) {
      if (scoreboard.turn % 2 === 0) {
        var player = 'X';
      }
      else {
        var player = 'O';
      }
    return player;
}

function getScoreboard(turn) {
  if (scoreboard.turn % 2 === 0) {
    var plays = scoreboard.xGameScore;
  }
  else {
    var plays = scoreboard.oGameScore;
  }
  return plays;
}

$(document).ready(function() {

$('.position').click(function() {

  var index = $(event.currentTarget).attr('id');
  var letter = getPlayer(scoreboard.turn);

  //if click target is empty
  if ($(event.currentTarget).is(':empty')) {

    if (scoreboard.win == false) {
      console.log('party on wayne');
      //enters x or o into the current target
      $(event.currentTarget).html(letter);
      if (letter === 'X') {
        $(event.currentTarget).css("background-color", "red");
      }
      if (letter === 'O') {
        $(event.currentTarget).css("background-color", "blue");
      }
      //iterates through all possible winning combos
      for (i = 0; i < possibleWins.length; i++) {
        //a hit is a positive id on a winning combo
        var hits = possibleWins[i].indexOf(index);
        //if positive id then set the hit to the letter

        if (hits >=  0) {
          possibleWins[i][hits] = letter;
        }
        //WINNER WINNER WINNER
        //if any combo is 'xxx' or 'ooo' then set winner

        if (possibleWins[i].join('') === letter.concat(letter, letter)) {
          console.log('winner');
          scoreboard.winner = letter;
          scoreboard.win = true;

            if (scoreboard.winner == 'X') {
              $('#x_wins').html('Player "X" Wins: ' + (scoreboard.xGameScore += 1));
            }
            if (scoreboard.winner == 'O') {
              $('#o_wins').html('Player "O" Wins: ' + (scoreboard.oGameScore += 1));
            }
        }
      }
      //changes player turn
      scoreboard.turn ++;
      $('#player_turn').html('Make your move ' + getPlayer(scoreboard.turn));
    }

      else {
        console.log('cats game');
      }
    }
    else {
      $('#player_turn').html('Cannot play there!');
    }
});

$('#play_again').click(function() {
  $(cells).html('');
  scoreboard.turn = 0;
  scoreboard.win = false;
  scoreboard.winner = null;
  console.log(scoreboard.turn);
  console.log(scoreboard.win);
  console.log(scoreboard.winner);

  possibleWins = [["1","2","3"], ["4","5","6"], ["7","8","9"],
                   ["1","4","7"], ["2","5","8"], ["3","6","9"],
                   ["1","5","9"], ["3","5","7"]];

console.log(possibleWins);

$('.position').css("background-color", "rgba(255, 255, 255, .7)");

});

})

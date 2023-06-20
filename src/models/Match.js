export default class Match {
  constructor(
    firstPlayer,
    secondPlayer,
    pointsFirstPlayer = 0,
    pointsSecondPlayer = 0,
    round = 1
  ) {
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;
    this.pointsFirstPlayer = pointsFirstPlayer;
    this.secondPlayer = pointsSecondPlayer;
    this.round = round;
  }

  goToNextRound() {
    this.round++;
  }

  setFirstPlayerScore(score) {
    this.pointsFirstPlayer = score;
  }

  setSecondPlayerScore(score) {
    this.pointsSecondPlayer = score;
  }
}

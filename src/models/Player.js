import User from "./User";

// TODO: add id field
export default class Player extends User {
  constructor(firstName, lastName, email, clubName) {
    super(firstName, lastName, email);
    this.clubName = clubName;
    this.matchesWon = 0;
    this.matchesLost = 0;
    this.matchesDraw = 0;
  }

  calculateElo() {
    // TODO:
  }

  addVictory() {
    this.matchesWon++;
  }

  addLoss() {
    this.matchesLost++;
  }

  addDraw() {
    this.matchesDraw++;
  }
}

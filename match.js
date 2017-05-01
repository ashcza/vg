class Match {
  constructor(players) {
    this.p1 = 0
    this.p2 = 0
    this.scores = ["Love", 0, 15, 30, 40]
  }


  player1Score() {
    return this.scores[this.p1]
  }

  player2Score() {
    return this.scores[this.p2]
  }

  player1Scores() {
    this.p1 += 1
  }

  player2Scores() {
    this.p2 += 1
  }


}


const match = new Match();
// console.log(match.player1Scores())
console.log(match.player1Score())

// Static-ish data for league standings
const TEAM_NAMES = [
  "Aldgate Alligators",
  "Brixton Bobcats",
  "Clapham Coyotes",
  "Dalston Dragonflys",
  "Enfield Eagles",
  "Fulham Falcons",
  "Greenwich Griffons",
  "Harrow Hawks"
];

// Initialise season
const TEAM_DATA = TEAM_NAMES.map(name => ({
  draw: 0,
  goalsAgainst: 0,
  goalsFor: 0,
  loss: 0,
  name,
  points: 0,
  win: 0
}));

TEAM_DATA.forEach(homeTeam => {
  TEAM_DATA.forEach(awayTeam => {
    if (homeTeam === awayTeam) {
      return;
    }

    const homeGoals = Math.floor(Math.random() * 5);
    const awayGoals = Math.floor(Math.random() * 5);

    if (homeGoals > awayGoals) {
      // Home win
      homeTeam.points += 3;

      homeTeam.win++;
      awayTeam.loss++;
    } else if (homeGoals < awayGoals) {
      // Away win
      awayTeam.points += 3;

      awayTeam.win++;
      homeTeam.loss++;
    } else {
      // Draw
      homeTeam.points += 1;
      awayTeam.points += 1;

      homeTeam.draw++;
      awayTeam.draw++;
    }

    homeTeam.goalsFor += homeGoals;
    awayTeam.goalsFor += awayGoals;

    homeTeam.goalsAgainst += awayGoals;
    awayTeam.goalsAgainst += homeGoals;
  });
});

export default TEAM_DATA;

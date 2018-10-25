// Import dependencies
import React, { Component } from "react";
import { createRenderer } from "fela";
import { Provider, ThemeProvider } from "react-fela";

// Import fela plugins
import prefixer from "fela-plugin-prefixer";
import fallbackValue from "fela-plugin-fallback-value";

// Import React components
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Layout from "./Layout";
import LeagueTable from "./LeagueTable";
import Team from "./Team";

// Import static data
import TEAM_DATA from "./teamData";
import SEASONS from "./seasons";

// Create a renderer for Fela
const renderer = createRenderer({
  plugins: [prefixer(), fallbackValue()]
});

// Create a sorting function for the teams
const sortTeams = (a, b) => {
  // On Points
  const onPoints = b.points - a.points;

  if (onPoints !== 0) {
    return onPoints;
  }

  // On Goal Difference
  const aGoalDiff = a.goalsFor - a.goalsAgainst;
  const bGoalDiff = b.goalsFor - b.goalsAgainst;

  if (aGoalDiff < bGoalDiff) {
    return 1;
  } else if (aGoalDiff > bGoalDiff) {
    return -1;
  }

  // On Goals Scored
  return a.goalsFor - b.goalsFor;
};

// Create Team components from the data
const getTeams = teams => {
  let pos = 0;

  return teams.sort(sortTeams).map(team => {
    pos++;
    return <Team key={team.name} pos={pos} team={team} />;
  });
};

class App extends Component {
  constructor() {
    super();

    // Define application-wide state
    this.state = {
      mainColor: "#3498db",
      teams: TEAM_DATA
    };

    // Bind event methods called by other components
    this.setMainColor = this.setMainColor.bind(this);
  }

  // Set the theme colour
  setMainColor(e) {
    this.setState({ mainColor: e.target.value });
  }

  render() {
    return (
      // Supply the Fela provider to the application
      <Provider renderer={renderer}>

        {/* Pass the theme provider to the application */}
        <ThemeProvider theme={{ mainColor: this.state.mainColor }}>

          {/* Define a core layout for the application  */}
          <Layout>

          <h1>London 5-a-side Tournament</h1>

          {/* Display the teams */}
          <LeagueTable>{getTeams(this.state.teams)}</LeagueTable>

          {/* Create buttons to switch the theme */}

          </Layout>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;

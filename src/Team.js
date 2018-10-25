// Import dependencies
import React from "react";
import { combineRules } from "fela";
import { createComponent } from "react-fela";
import { ellipsis, readableColor, transparentize } from "polished";

// Import generic style objects

// Create a styled <tr> for each team
const TeamStyles = ({ pos, theme: { mainColor } }) => {
  // Define base styles
  let style = {
    background: pos % 2 === 1 ? transparentize(0.9, mainColor) : undefined,
    transition: "all 0.5s ease-out"
  };

  // If the team has won the league, style with the theme colours
  if (pos === 1) {
    style = {
      ...style,
      background: mainColor,
      color: readableColor(mainColor),
      fontWeight: "bold"
    };
  }

  return style;
};
// Create a styled <tr> element
const Team = createComponent(TeamStyles, "tr");

// Style each table cell
const CellStyles = ({ truncate }) => {
  // Define a default, empty style object
  let style = {};

  // If this cell should be truncated, apply ellipsis stylings
  if (truncate) {
    style = {
      ...ellipsis("100%")
    };
  }

  return style;
};

// Create a styled <td> element
const Cell = createComponent(combineRules(CellStyles), "td");

const TeamComponent = ({
  pos,
  team: { draw, goalsAgainst, goalsFor, loss, name, points, win }
}) => (
  <Team pos={pos}>
    <Cell>{pos}</Cell>
    <Cell truncate>{name}</Cell>
    <Cell hideSmall>{win}</Cell>
    <Cell hideSmall>{draw}</Cell>
    <Cell hideSmall>{loss}</Cell>
    <Cell hideSmall>{goalsFor - goalsAgainst}</Cell>
    <Cell>{points}</Cell>
  </Team>
);

// Create a reusable Team components
export default TeamComponent;

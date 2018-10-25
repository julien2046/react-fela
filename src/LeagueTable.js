// Import dependencies
import React from "react";
import { combineRules } from "fela";
import { createComponent } from "react-fela";
import { darken, lighten, readableColor, getLuminance } from "polished";

// Create a reusable style for cell padding on <th> and <td> elements
export const cellPadding = () => ({});

// Create a reusable style for hiding columns on smaller screens
export const hideSmall = ({ hideSmall }) => ({});

// Define styles for the league table
const LeagueTableStyles = ({ theme: {mainColor} }) => ({
  background: 'white',
  border: `0.1em solid ${mainColor}`,
  borderBottom: 0,
  borderCollapse: 'collapse',
  boxShadow: `0 5px ${darken(0.2, mainColor)}`,
  marginBottom: 'calc(5px + 1em)',
  tableLayout: 'fixed',
  textAlign: 'center',
  transition: 'all 0.5s ease-out',
  width: '100%'
});

// Create a styled table for the league table
const LeagueTable = createComponent(LeagueTableStyles, "table");

// Style <th> elements
const HeadingStyles = ({ hideSmall, theme: { mainColor }, width }) => {
  let background = lighten(0.2, mainColor);

  if (getLuminance(background) > 0.5) {
    background = darken(0.2, mainColor);
  }

  const style = {
    background,
    color: readableColor(background),
    textTransform: 'uppercase',
    transition: 'all 0.5s ease-out',
    width: width ? `${width}em` : undefined
  };

  return style;
};

const Heading = createComponent(HeadingStyles, "th");

// Create a styled <th> element
const LeagueTableComponent = props => (
  <LeagueTable>
    <thead>
      <tr>
        <Heading>Pos</Heading>
        <Heading>Name</Heading>
        <Heading>W</Heading>
        <Heading>D</Heading>
        <Heading>L</Heading>
        <Heading>GD</Heading>
        <Heading>Pts</Heading>
      </tr>
    </thead>
    <tbody>{props.children}</tbody>
  </LeagueTable>
);

// Create a League Table component
export default LeagueTableComponent;

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
const LeagueTableStyles = () => ({});

// Create a styled table for the league table
const LeagueTable = createComponent(LeagueTableStyles, "table");

// Style <th> elements
const HeadingStyles = ({ hideSmall, theme: { mainColor }, width }) => {};

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

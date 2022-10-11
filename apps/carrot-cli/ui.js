"use strict";
const React = require("react");
const { Text } = require("ink");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");

const App = ({ name = "Stranger" }) => (
	<Gradient name="summer">
		<BigText text="Welcome to the Carrot Deck" align="center" font="chrome" />
	</Gradient>
);

module.exports = App;

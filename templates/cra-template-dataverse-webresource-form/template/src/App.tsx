import React from "react";
import { FluentProvider, makeStyles, webLightTheme, tokens } from "@fluentui/react-components";
import GlobalContext from "./sdk/GlobalContext";

const useStyles = makeStyles({
	root: {
		height: "100%",
		padding: tokens.spacingHorizontalNone,
		backgroundColor: tokens.colorNeutralBackground1
	},
	container: { // tweak the container layout to manage complex layouts such as grid or flexbox.
		height: "100%",
		backgroundColor: tokens.colorNeutralBackground1,
		padding: tokens.spacingHorizontalNone, // paddingNone because the webresource is already padded in the section.
		fontSize: tokens.fontSizeBase300,
		overflow: "auto",
		'& h1': {
			marginTop: tokens.spacingVerticalNone,
			fontSize: tokens.fontSizeBase500,
			fontWeight: tokens.fontWeightSemibold
		},
		'& h2': {
			margin: tokens.spacingVerticalNone,
			fontSize: tokens.fontSizeBase300,
			fontWeight: tokens.fontWeightSemibold
		}
	}
});

function App() {
	const classes = useStyles();
	return (
		<FluentProvider theme={webLightTheme} className={classes.root}>
			<div className={classes.container}>
				<h1>Form Wired WebResource</h1>
				<p>
				{GlobalContext.getFormContext().data.entity.getEntityName()}: {GlobalContext.getFormContext().data.entity.getId()}
				</p>
			</div>
		</FluentProvider>
	);
}

export default App;

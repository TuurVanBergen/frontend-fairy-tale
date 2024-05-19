import * as React from "react";
import MakingOf from "../../features/pages/MakingOf.jsx";
import Home from "../../features/pages/Home.jsx";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Sprookje from "../../features/pages/FairyTale.jsx";
import Root from "../../features/components/Root.jsx";

// Defining the base url
const base = "/frontend-courseproject-TuurVanBergen/";

const router = createBrowserRouter([
	{
		// Main route
		path: base + "/",
		element: <Root />,
		children: [
			{
				//Making of route
				path: "makingOf",
				element: <MakingOf />,
			},
			{
				//Home route, displays the Home component by defoult
				index: true,
				element: <Home />,
			},
			{
				//Sprookje Route
				path: "Sprookje",
				element: <Sprookje />,
			},
		],
	},
]);

export default router;

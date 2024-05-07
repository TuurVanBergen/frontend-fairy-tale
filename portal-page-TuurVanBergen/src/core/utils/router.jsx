import * as React from "react";
import MakingOf from "../../features/pages/MakingOf.jsx";
import Home from "../../features/pages/Home.jsx";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Sprookje from "../../features/pages/FairyTale.jsx";
import Root from "../../features/components/Root.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "makingOf",
				element: <MakingOf />,
			},
			{
				index: true,
				element: <Home />,
			},
			{
				path: "Sprookje",
				element: <Sprookje />,
			},
		],
	},
]);

export default router;

import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Investimenti from "./Components/Investimenti.jsx";
import About from "./Components/About.jsx";
import Donazioni from "./Components/Donazioni.jsx";
import Contact from "./Components/Contact.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />, // Imposta Home come pagina predefinita
	},
	{
		path: "/Investimenti",
		element: <Investimenti />,
	},
	{
		path: "/About",
		element: <About />,
	},
	{
		path: "/Donazioni",
		element: <Donazioni />,
	},
	{
		path: "/Contact",
		element: <Contact />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

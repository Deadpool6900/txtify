
import React from 'react';
import Home from './pages/Home';
// import {
// 	createBrowserRouter,
// 	Route,
// 	RouterProvider,
// } from "react-router-dom";
// import About from './pages/About';

function App() {

	// const router = createBrowserRouter([
	// 	{
	// 		path: "/",
	// 		element: <Home />,
	// 	},
	// 	{
	// 		path: "/about",
	// 		element: <About />,
	// 	},
	// ]);
	// const Dark = {
	// 	color: "white",
	// 	backgroundColor: "#212121"
	// }
	// const light = {
	// 	color: "#212121",
	// 	backgroundColor: "white"
	// }

	// const toggleTheme = () => {
	// 	if (Theme.color === "white") {
	// 		setMyStyle(light)
	// 		setBtn("btn-dark")
	// 		document.body.style.backgroundColor = "white";

	// 	}
	// 	else {
	// 		setMyStyle(Dark);
	// 		setBtn("btn-light")
	// 		document.body.style.backgroundColor = "#212121";
	// 	}
	// }
	// const [Theme, setMyStyle] = useState(light)
	// const [Btn, setBtn] = useState("btn-dark")

	return (
		<>
		<Home/>
			{/* <RouterProvider router={router} /> */}
		</>
	);
}

export default App;

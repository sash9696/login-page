import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login'
import Home from "./Home";
import Nav from "./Nav";
import AccountDetails from "./AccountDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
	return (
		<Router>
			<Routes>
				<Route
					exact
					path="/home"
					element={
						<>
						<Nav/>
						<Home />
						</>
							
					}
				/>
				<Route
					exact
					path="/"
					element={
							<Login />
					}
				/>
				<Route
					exact
					path="/account"
					element={
						<>
						    <Nav/>
							<AccountDetails />
						</>
					}
				/>
				
			</Routes>
		</Router>
	);
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
	return (
		<Router>
			<Routes>
				{/* <Route
					exact
					path="/home"
					element={
							<Home />
					}
				/> */}
				<Route
					exact
					path="/"
					element={
							<Login />
					}
				/>
				{/* <Route
					exact
					path="/account"
					element={
							<AccountDetails />
					}
				/>
				<Route
					exact
					path="/cart"
					element={
							<Cart />
					}
				/>
				<Route
					exact
					path="/checkout"
					element={
							<Checkout />
					}
				/>
				<Route
					exact
					path="/products"
					element={
							<ProductList />
					}
				/>
				<Route
					exact
					path="/product/:productid/details"
					element={
							<ProductDetails />
					}
				/> */}
			</Routes>
		</Router>
	);
}

export default App;

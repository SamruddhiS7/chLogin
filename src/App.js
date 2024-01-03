import './App.css';
import Login from "./Login"
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'


function App() {
	return (
		<BrowserRouter>
		<Routes>
			<Route path='/' element={ <Home />}> </Route>
			<Route path='/Login' element={ <Login />}> </Route>

		</Routes>
		</BrowserRouter>

	);
}

export default App

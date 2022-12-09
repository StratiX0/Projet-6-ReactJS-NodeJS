// import des hook, feuille de style, des pages
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Tendances from './pages/Tendances';
import Discover from './pages/Discover';
import Search from './pages/Search';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

// Créé une constante de liste de pages
const router = createBrowserRouter([
	{
		// Redirige la page d'accueuil par défaut sur la page Home
		path: '/',
		element: <Home />,
	},
	{
		// Redirige vers la page Tendances
		path: '/Tendances',
		element: <Tendances />,
	},
	{
		// Redirige vers la page Discover
		path: '/Discover',
		element: <Discover />,
	},
	{
		// Redirige vers ma page Search
		path: '/Search',
		element: <Search />,
	},
]);

// Créé le chemin entre les différentes pages
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import des hook, feuille de style
import axios from 'axios';
import logo from './logo.png';
import './Tendances.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

// Constante Discover
const Tendances = () => {
	// Créé une liste vide "trendingList"
	const [trendingList, setTrendingList] = useState([]);
	// Créé une liste vide "trendingListFiltered"
	const [trendingListFiltered, setTrendingListFiltered] = useState([]);

	// Créé une fonction asynchrone getData()
	async function getData() {
		// Boucle récupérant 25 pages
		for (var counter = 1; counter < 25; counter++) {
			// Récupère les éléments de l'API dans la constante recherche
			const res = await axios.get(
				`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${counter}&language=fr-FR` //
			);
			console.log('res', res.data);
			// Ajoute les éléments de recherche à setTrendingList
			setTrendingList((setTrendingList) => setTrendingList.concat(...res.data.results));
			// Ajoute les éléments de recherche à setTrendingListFiltered
			setTrendingListFiltered((setTrendingListFiltered) =>
				setTrendingListFiltered.concat(...res.data.results)
			);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<div className='App1'>
				<header className='App-header'>
					{/* Logo du site */}
					<img src={logo} className='App-logo' alt='logo' />
					<br></br>
					{/* Bouton de la page d'accueuil  */}
					<Link to='/'>
						<button className='Accueil'>Accueil</button>
					</Link>
					{/* Bouton redirigeant vers la page Tendances, ne fonctionne pas car nous sommes sur cette page */}
					<Link to='/Tendances'>
						<button className='AccueilS'>Tendances</button>
					</Link>
					{/* Bouton redirigeant vers la page Découvrir/Discover */}
					<Link to='/Discover'>
						<button className='Accueil'>Découvrir</button>
					</Link>
					{/* Bouton redirigeant vers la page Rechercher/Search*/}
					<Link to='/Search'>
						<button>Rechercher</button>
					</Link>
				</header>
			</div>
			<div className='trending-all'>
				{/* Obtient les éléments de la liste */}
				{trendingListFiltered.map((trending) => {
					return (
						<div key={trending.id} className='al'>
							{/* Affiche le titre */}
							<h3>
								{trending.title} {trending.name}
							</h3>
							{/* Affiche le poster du film */}
							<img
								src={`https://image.tmdb.org/t/p/original${trending.poster_path}`}
								class='trending-poster'
								alt={`Poster de ${trending.title}`}></img>
							{/* Affiche la date de sortie, la note et le résumé */}
							<p>
								<br></br>
								Date de sortie : {trending.release_date}
								<br></br>
								Note moyenne : {trending.vote_average.toFixed(1)}
								<br></br>
								Résumé : <br></br>
								{trending.overview}
							</p>
							<br></br>
						</div>
					);
				})}
			</div>
		</div>
	);
};

// Exporte la constante Tendances
export default Tendances;

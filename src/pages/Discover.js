// import des hook, feuille de style
import axios from 'axios';
import logo from './logo.png';
import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Discover.css';

// Constante Discover
const Discover = () => {
	// Créé une liste vide "discoverList"
	const [discoverList, setDiscoverList] = useState([]);
	// Créé une liste vide "discoverListFiltered"
	const [discoverListFiltered, setDiscoverListFiltered] = useState([]);

	// Créé une fonction asynchrone getData()
	async function getData() {
		// Boucle récupérant 25 pages
		for (var counter = 1; counter <= 25; counter = counter + 1) {
			// Récupère les éléments de l'API dans la constante recherche
			const resultat = await axios.get(
				`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${counter}&language=fr-FR` //
			);
			console.log('resultat', resultat.data);
			// Ajoute les éléments de recherche à setDiscoverList
			setDiscoverList((setDiscoverList) => setDiscoverList.concat(...resultat.data.results));
			// Ajoute les éléments de recherche à setDiscoverListFiltered
			setDiscoverListFiltered((setDiscoverListFiltered) =>
				setDiscoverListFiltered.concat(...resultat.data.results)
			);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<div className='App-discover'>
				<header className='App-header'>
                    {/* Logo du site */}
					<img src={logo} className='App-logo' alt='logo' />
					<br></br>
                    {/* Bouton de la page d'accueuil  */}
					<Link to='/'>
						<button className='Accueil'>Accueil</button>
					</Link>
                    {/* Bouton redirigeant vers la page Tendances */}
					<Link to='/Tendances'>
						<button className='Accueil'>Tendances</button>
					</Link>
                    {/* Bouton redirigeant vers la page Découvrir/Discover, ne fonctionne pas car nous sommes sur cette page */}
					<Link to='/Discover'>
						<button className='AccueilS'>Découvrir</button>
					</Link>
                    {/* Bouton redirigeant vers la page Rechercher/Search*/}
					<Link to='/Search'>
						<button>Rechercher</button>
					</Link>
				</header>
			</div>
			<div className='discover-all'>
                {/* Obtient les éléments de la liste */}
				{discoverListFiltered.map((discover) => {
					return (
						<div key={discover.id} className='al'>
                            {/* Affiche le titre */}
							<h3>{discover.title}</h3>
                            {/* Affiche le poster du film */}
							<img
								src={`https://image.tmdb.org/t/p/original${discover.poster_path}`}
								class='discover-poster'
								alt={`Poster de ${discover.title}`}></img>
                            {/* Affiche la date de sortie, la note et le résumé */}
							<p>
								Date de sortie : {discover.release_date}
								<br></br>
								Note moyenne : {discover.vote_average.toFixed(1)}
								<br></br>
								Résumé : <br></br>
								{discover.overview}
							</p>
							<br></br>
						</div>
					);
				})}
			</div>
		</div>
	);
};

// Exporte la constante Discover
export default Discover;

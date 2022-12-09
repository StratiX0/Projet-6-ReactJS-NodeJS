// import des hook, feuille de style
import axios from 'axios';
import logo from './logo.png';
import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Search.css'

// Constante Search
const Search = () => {
	// Créé une liste vide "movieList"
	const [movieList, setMovieList] = useState([]);
	// Créé une liste vide "movieListFiltered"
	const [movieListFiltered, setMovieListFiltered] = useState([]);

	// Créé une fonction asynchrone getData()
	async function getData() {
		// Boucle récupérant 25 pages
		for (var counter = 1; counter <= 25; counter++) {
			// Récupère les éléments de l'API dans la constante recherche
			const recherche = await axios.get(
				`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${counter}&language=fr-FR` //
			);
			console.log('resultat', recherche.data);
			// Ajoute les éléments de recherche à setMovieList
			setMovieList((setMovieList) => setMovieList.concat(...recherche.data.results));
            // Ajoute les éléments de recherche à setMovieListFiltered
			setMovieListFiltered((setMovieListFiltered) =>
				setMovieListFiltered.concat(...recherche.data.results)
			);
		}
	}

	useEffect(() => {
		getData();
	}, []);

    // Fonction de recherche
	function handleChange(e) {
		e.preventDefault();
		if (!e.target.value) {
			setMovieListFiltered(movieList);
			return;
		}
		setMovieListFiltered(movieList.filter((movie) => movie.id.includes(e.target.value)));
	}

	return (
		<div>
			<div className='App-search'>
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
				    {/* Bouton redirigeant vers la page Découvrir/Discover */}
				    <Link to='/Discover'>
				    	<button className='Accueil'>Découvrir</button>
				    </Link>
				    {/* Bouton redirigeant vers la page Rechercher/Search, ne fonctionne pas car nous sommes sur cette page */}
				    <Link to='/Search'>
				    	<button className='AccueilS'>Rechercher</button>
				    </Link>
				</header>
			</div>
            {/* Input de la recherche de l'utilisateur */}
			<input onChange={handleChange} className='search-bar' type='text' placeholder='Rechercher' />
			<div className='search-all'>
                {/* Obtient les éléments de la liste */}
				{movieListFiltered.map((movie) => {
					return (
						<div key={movie.id} className='al'>
                            {/* Affiche le titre */}
							<h3>{movie.title}</h3>
                            {/* Affiche le poster du film */}
							<img
								src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
								class='discover-poster'
								alt={`Poster de ${movie.title}`}></img>
                            {/* Affiche la date de sortie, la note et le résumé */}
							<p>
								Date de sortie : {movie.release_date}
								<br></br>
								Note moyenne : {movie.vote_average.toFixed(1)}
								<br></br>
								Résumé : <br></br>
								{movie.overview}
							</p>
							<br></br>
						</div>
					);
				})}
			</div>
		</div>
	);
};

// Exporte la constante Search
export default Search;

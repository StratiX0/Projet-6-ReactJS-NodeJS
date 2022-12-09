// import des hook, feuille de style
import logo from './logo.png';
import './Home.css';
import { Link } from 'react-router-dom';

// Fonction Home
function Home() {
	return (
		// Div incluant le logo et les bouttons redirigeants vers les autres pages
		<div className='App'>
			<header className='App-header'>
				{/* Bouton de la page d'accueuil, ne fonctionne pas car nous sommes sur cette page  */}
				<Link to='/'>
					<button className='AccueilS'>Accueil</button>
				</Link>
				{/* Bouton redirigeant vers la page Tendances */}
				<Link to='/Tendances'>
					<button className='Accueil'>Tendances</button>
				</Link>
				{/* Bouton redirigeant vers la page Découvrir/Discover */}
				<Link to='/Discover'>
					<button className='Accueil'>Découvrir</button>
				</Link>
				{/* Bouton redirigeant vers la page Rechercher/Search */}
				<Link to='/Search'>
					<button>Rechercher</button>
				</Link>
				<br></br>
				{/* Affiche le logo */}
				<img src={logo} className='App-logo' alt='logo' />
			</header>
		</div>
	);
}

// Exporte la fonction Home
export default Home;

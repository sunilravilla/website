import './App.css';
import Header from './components/header/Header';
import Hero from './components/heroSection/Hero';
import './styles/common.scss';
import FeatureGallery from './components/features/FeatureGallery';

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<FeatureGallery />
		</div>
	);
}

export default App;

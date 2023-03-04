import './App.css';
import Header from './components/header/Header';
import Hero from './components/heroSection/Hero';
import './styles/common.scss';
import FeatureGallery from './components/features/FeatureGallery';
import Footer from './components/footer/Footer';
import Leadership from './components/leadership/Leadership';

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<FeatureGallery />
			<Leadership />
			<Footer />
		</div>
	);
}

export default App;

import Banner from './components/Banner'
import FirstContent from './components/FirstContent'
import Footer from './components/Footer'
import Header from './components/Header'
import Mid from './components/Mid'
import SecondContent from './components/SecondContent'

function App() {
	return (
		<>
			<Header />
			<main className="container">
				<Banner />
				<FirstContent />
				<Mid />
				<SecondContent />
			</main>
			<Footer />
		</>
	)
}

export default App

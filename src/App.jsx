import './App.css'
import { Header } from "./components/Header.jsx";
import { LatestEpisodes } from "./components/LatestEpisodes.jsx";
import { MainPage } from "./components/MainPage.jsx";
import { Host } from "./components/Host.jsx";
import { Subscribe } from "./components/Subscribe.jsx";
import { Reviews } from "./components/Reviews.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {

  return (
    <div className="container">
        <Header />
        <MainPage />
        <LatestEpisodes />
        <Host />
        <Subscribe />
        <Reviews />
        <Footer />
    </div>
  )
}

export default App

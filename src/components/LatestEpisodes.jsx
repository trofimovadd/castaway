import '/src/App.css'
import { Cards } from "./Cards.jsx";

export function LatestEpisodes() {
    return (
        <div className="latest-episodes">
            <div className="latest-episodes-header">
                <div className="latest-episodes-title">Latest episodes</div>
                <button className="btn">View all episodes</button>
            </div>
                <Cards />
        </div>
    )
}
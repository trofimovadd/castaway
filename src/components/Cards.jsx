import '/src/App.css'

export function Cards() {
    return (
        <div className="cards">
            <div className="card">
                <div className="card-img">
                    <img src="/images/card-1.jpg" alt=""/>
                </div>
                <div className="card-info">
                    <div className="category">Gear</div>
                    <div className="episode-num">Episode 3</div>
                    <div className="episode-title">Should you get outboard audio gear?</div>
                    <div className="episode-description">Is hardware really worth it when it comes to podcasting?
                        The answer is... it depends. Here's our reasons on why you might want to consider
                        picking something up.</div>
                    <button className="btn btn--cards">View Episode Details</button>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src="/images/card-2.jpg" alt=""/>
                </div>
                <div className="card-info">
                    <div className="category">Tips & Tricks</div>
                    <div className="episode-num">Episode 2</div>
                    <div className="episode-title">Mic tricks to take you to the next level</div>
                    <div className="episode-description">Stop rolling with those default settings
                    on your mic. These small tweaks will take you from sounding good to great.</div>
                    <button className="btn btn--cards">View Episode Details</button>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src="/images/card-1.jpg" alt=""/>
                </div>
                <div className="card-info">
                    <div className="category">Gear</div>
                    <div className="episode-num">Episode 1</div>
                    <div className="episode-title">The best microphone under $200</div>
                    <div className="episode-description">With so many microphones on the market,
                    how are you supposed to know what's best? Take a look at our top picks.</div>
                    <button className="btn btn--cards">View Episode Details</button>
                </div>
            </div>
        </div>
    )
}
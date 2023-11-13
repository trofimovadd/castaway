import '/src/App.css'

export function MainPage() {
    return (
        <div className="main">
            <div className="main-images">
                <img className="main-1" src="/images/main-3.svg" alt=""/>
                <img className="main-2" src="/images/main-2.svg" alt=""/>
                <img className="main-3" src="/images/main-1.svg" alt=""/>
                <img className="main-img" src="/images/main.jpg" alt=""/>
            </div>

            <div className="main-content">
                <div className="motto">
                    <div>Take your</div>
                    <div>podcast to the</div>
                    <div className="decorative-text">
                        <div className="next">
                            next
                            <img src="/images/horizontal.svg" alt=""/>
                        </div>
                        <span className="level"> level</span>
                    </div>
                </div>
                <div className="apps">
                    <div className="listen-on">Listen on</div>
                    <div className="icons">
                        <a href="https://open.spotify.com/" target="_blank">
                            <img src="/icons/spotify.png" alt=""/>
                        </a>
                        <a href="https://pocketcasts.com/" target="_blank">
                            <img src="/icons/pocket-casts.png" alt=""/>
                        </a>
                        <a href="https://soundcloud.com/" target="_blank">
                            <img src="/icons/soundcloud.png" alt=""/>
                        </a>
                        <a href="https://www.apple.com/apple-podcasts/" target="_blank">
                            <img src="/icons/apple-podcasts.png" alt=""/>
                        </a>
                        <a href="https://overcast.fm/" target="_blank">
                            <img src="/icons/overcast.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
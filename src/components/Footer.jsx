import '/src/App.css'

export function Footer() {
    return (
        <footer className="footer">
            <div className="logos">
                <img src="/images/logo.svg" alt=""/>
                <div>
                    <a href="https://instagram.com/" target="_blank">
                        <img className="social-media" src="/icons/instagram.png" alt=""/>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                        <img className="social-media" src="/icons/twitter.png" alt=""/>
                    </a>
                    <a href="https://facebook.com/" target="_blank">
                        <img className="social-media" src="/icons/facebook.png" alt=""/>
                    </a>
                </div>
            </div>

            <div className="nav">
                <div>Home</div>
                <div>About</div>
                <div>Episodes</div>
                <div>Contact</div>
            </div>

            <div className="links">
                <div>Style Guide</div>
                <div>Instructions</div>
                <div>Changelog</div>
                <div>Credit</div>
                <div>Powered by Webflow</div>
                <div>Licenses</div>
            </div>

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
        </footer>
    )
}
import '/src/App.css'

export function Host() {
    return (
        <div className="host">
            <div className="host-info">
                <div className="arrow">
                    <img src="/images/arrow.png" alt=""/>
                </div>
                <div className="host-subtitle">Meet your host</div>
                <div className="host-name">Jacob Paulaner</div>
                <div className="host-description">
                    Jacob has a background in audio engineering, and has been
                    podcasting since the early days.
                </div>
                <div className="host-description">
                    He's here to help you level up your game by sharing everything
                    he's learned along the way.
                </div>
            </div>
            <img className="host-img" src="/images/host.jpg" alt=""/>
        </div>
    )
}
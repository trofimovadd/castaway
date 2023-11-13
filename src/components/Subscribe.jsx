import '/src/App.css'

export function Subscribe() {
    return (
        <div className="subscribe">
            <div className="subscribe-images">
                <img className="subscribe-1" src="/images/subscribe-1.svg" alt=""/>
                <img className="subscribe-2" src="/images/subscribe-2.svg" alt=""/>
                <img className="subscribe-3" src="/images/subscribe-3.svg" alt=""/>
            </div>
            <div className="subscribe-card">
                <div className="subscribe-info">
                    <div className="subscribe-subtitle">Email Newsletter</div>
                    <div className="subscribe-title">Subscribe for updates</div>
                </div>
                <div className="subscribe-form">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <button className="btn">Submit</button>
                </div>
            </div>
        </div>
    )
}
import '/src/App.css'

export function SignUp({ open, onClose }) {
    if (!open) return null
    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-header">
                    <span>Create an account</span>
                    <button onClick={onClose} className="close-btn">X</button>
                </div>
                <div className="modal-content">
                    <form>
                        <input
                            type="login"
                            placeholder="Login"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                        />
                        <div className="modal-buttons">
                            <button className="btn btn--cards">Sign up</button>
                            <span>Already have an account?</span>
                            <button className="btn">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
import '/src/App.css'

export function SignUp({ open, onClose }) {
    if (!open) return null
    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-right">
                    <span>Create an account</span>
                    <button onClick={onClose} className="close-btn">X</button>
                </div>
                <div className="content">
                    <form>
                        <div className="error-message">errorMessage</div>
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
                    </form>
                </div>
            </div>
        </div>
    )
}
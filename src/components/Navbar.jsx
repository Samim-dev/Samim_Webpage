function Navbar() {
    return (
        // Navbar 
        <div className="navbar primary-color color-white">
            <div className="container flex text-selection">
                <a href="http://localhost:5173/">Samim</a>

                {/* nav links */}
                <nav>
                    <ul className="for-animation">
                        <a href="https://github.com/Samim-dev">
                            <li className="github"><i className="fab fa-github fa-2x"></i></li>
                        </a>

                        <a href="https://www.facebook.com/Samim.ch007">
                            <li className="facebook"><i className="fab fa-facebook fa-2x"></i></li>
                        </a>

                        <a href="https://www.linkedin.com/in/samim-chowdhury-630b09250">
                            <li className="linkedin"><i className="fab fa-linkedin fa-2x"></i></li>
                        </a>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
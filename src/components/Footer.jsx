export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-left"><h2>SmartStack Developers <span>SSDs</span></h2> 
                <p>Web Frontend Team - Portfolio Project</p>
            </div>

            <div className="footer-right">
                <button className="contact-btn">Get In Touch</button>

                <div className="contact-socials">
                    <a href="https://www.linkedin.com/in/leonard-makgopa"><i className="bi bi-linkedin"></i> LinkedIn</a>
                    <a href="https://github.com/Benlarcom"><i className="bi bi-github"></i> GitHub</a>
                    <a href="#"><i class="bi bi-youtube"></i> YouTube</a>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; 2026 SmartStack Developers. All rights reserved.
            </div>
            </footer>
    );
}
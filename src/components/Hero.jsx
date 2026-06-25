import icon from "../assets/images/icon.png";

export default function Hero(){
    return(
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>
                        <span className="accent">Leonard </span>Makgopa
                    </h1>
                    <h4>Full-Stack Developer</h4>
                    <p>Building modern, responsive, and user-friendly 
                        web applications with a passion for clean code and 
                        great user experiences.</p>
                </div>

                <div className="hero-img">
                    <img src={icon} alt="profile" />
                </div>
            </div>
        </section>
    );
}
import icon from "../assets/images/ssd-icon-makleo.png";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <h3>Let's Connect</h3>

          <p>
            I’m always open to new opportunities, collaborations, and creative tech projects. 
            Feel free to reach out through my social platforms and let’s build impactful solutions together.
          </p>

          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/leonard-makgopa"><i className="bi bi-linkedin"></i> LinkedIn</a>
            <a href="https://github.com/Benlarcom"><i className="bi bi-github"></i> GitHub</a>
            <a href="#"><i class="bi bi-youtube"></i> YouTube</a>
          </div>
        </div>

        <div className="contact-image-wrapper">
          <img src={icon} alt="Team work" className="contact-image" />
        </div>
      </div>
    </section>
  );
}
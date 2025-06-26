import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-icons">
        <a href="https://github.com/Madison-T" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/madison-lilah-tana" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:madisonlilah@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;

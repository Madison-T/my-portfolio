import AnimatedBlob from './AnimatedBlob';

export default function Hero() {
  return (
    <section className="hero">
      {/* Animated blob in background */}
      <AnimatedBlob
        color="#A3CEDF"
        className="blob-centered"
      />

      {/* Hero text */}
      <h2>Hello, my name is</h2>
      <h1>Madison</h1>
      <p>
        I’m a Software Developer and Data Enthusiast passionate about building
        thoughtful, impactful solutions.
      </p>

      {/* Buttons */}
      <div className="hero-buttons">
        <a
          href="/Madison_Tana_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View Resume
        </a>
        <a
          href="https://linkedin.com/in/madison-lilah-tana"
          target="_blank"
          className="linkedin-btn"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

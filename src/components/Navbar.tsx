export default function Navbar() {
  return (
    <header className="navbar">
      <div className="font-bold text-[24px] text-[color:var(--primary-text)]">Madison</div>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

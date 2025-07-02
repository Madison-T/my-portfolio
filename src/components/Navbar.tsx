export default function Navbar() {
  return (
    <header className="navbar flex flex-col md:flex-row items-center justify-between text-center md:textleft">
      <div className="font-bold tet-[24px] text-[color:var(--primary-text)] mb-2 md:mb-0">
        Madison
      </div>
      <nav className="flex flex-col md:flex-row gap-2 md:gap-4">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

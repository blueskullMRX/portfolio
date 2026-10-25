const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

import ScrollProgress from "./motion/ScrollProgress";

const Nav = () => (
  <nav className="nav" aria-label="Main">
    <div className="wrap nav-inner">
      <a href="#top" className="brand">Zakaria Amgrout</a>
      <ul>
        {links.map((l) => (
          <li key={l.href}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
    </div>
    <ScrollProgress />
  </nav>
);

export default Nav;

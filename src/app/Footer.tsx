export default function Footer() {
  return (
    <footer className="footer bg-neutral p-10 text-neutral-content">
      <nav>
        <header className="footer-title">Lucas Mota</header>
        <a
          className="link-hover link"
          href="https://github.com/lcasmta"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="link-hover link"
          href="https://www.linkedin.com/in/lcasmta/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="link-hover link"
          href="https://www.instagram.com/lcas.mta/"
          target="_blank"
        >
          Instagram
        </a>
      </nav>
      <nav>
        <header className="footer-title">Email para Contato</header>
        <label className="email">lucasmota7@gmail.com</label>
      </nav>
      <nav>
        <header className="footer-title">Sobre o Projeto</header>
        <label>Feito Com Florian Walther (Coding in Flow)</label>
        <a
          className="link"
          href="https://www.youtube.com/watch?v=K4ziF0MhbLc&t=10862s&ab_channel=freeCodeCamp.org"
          target="_blank"
        >
          Link do Tutorial
        </a>
      </nav>
    </footer>
  );
}

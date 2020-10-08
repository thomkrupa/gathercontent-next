import Link from "next/link";

const Layout = ({ children }) => (
  <div className="page">
    <header>
      <span className="logo">
        <Link href="/">
          <a>blog</a>
        </Link>
      </span>
      <div>
        <Link href="/">
          <a>back</a>
        </Link>
      </div>
    </header>
    <main>{children}</main>

    <style jsx>{`
      .logo {
        font-family: monospace;
        font-size: 2.5rem;
        margin-bottom: 2.5rem;
        display: block;
      }
      .page {
        max-width: 700px;
        margin: 0 auto;
      }
      header {
        padding: 2rem 0;
      }
      main {
        margin-bottom: 5rem;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    `}</style>

    <style global jsx>{`
      body {
        font-family: sans-serif;
      }
      a {
        color: #0f4c81;
        text-decoration-color: #ff6f61;
      }
    `}</style>
  </div>
);

export default Layout;

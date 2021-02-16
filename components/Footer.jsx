import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Link href="/">
          <h2 className="footer__logo">The logo</h2>
        </Link>
        <nav className="navigation">
          <ul className="navigation__nav">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/categories/Indian">categories</Link>
            </li>
            <li>
              <Link href="/">contact</Link>
            </li>
            <li>
              <Link href="/">about</Link>
            </li>
          </ul>
        </nav>
        <p className="footer__copyright">
          © 2021 The name. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-wrapper">

        <div className="navbar-logo">
          MicroInfoWeb
        </div>

        <nav>
          <ul className="navbar-menu">

            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">About Us</a>
            </li>

            <li>
              <a href="#">Services</a>
            </li>

            <li>
              <a href="#">Clients & Testimonials</a>
            </li>

            <li>
              <a href="#">Careers</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="tag">
          DIGITAL TRANSFORMATION COMPANY
        </span>

        <h1>
          Empowering Businesses Through
          <span> Digital Innovation</span>
        </h1>

        <p>
          MicroInfoWeb delivers modern software development,
          enterprise web applications, UI/UX solutions,
          cloud technologies and digital transformation
          services that help businesses grow globally.
        </p>

        <div className="buttons">

          <button className="btn-primary">
            Get Started
          </button>

          <button className="btn-secondary">
            Learn More
          </button>

        </div>

      </div>

      <div className="hero-right">

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
          alt="Technology"
        />

      </div>

    </section>
  );
}

export default Hero;
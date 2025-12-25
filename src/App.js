function App() {
    return (
      <div className="app">
        <header className="hero">
          <nav>
            <h1 className="logo">STREAMFLIX</h1>
            <button className="sign-in">Sign In</button>
          </nav>
  
          <div className="hero-content">
            <h2>Unlimited movies, shows and more</h2>
            <p>Watch anywhere. Cancel anytime.</p>
            <button className="cta">Get Started</button>
          </div>
        </header>
  
        <section className="row">
          <h3>Trending Now</h3>
          <div className="cards">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </section>
      </div>
    );
  }
  
  export default App;
  
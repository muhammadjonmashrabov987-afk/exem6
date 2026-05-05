import "./CompanyPage.css";

const navLinks = ["Home", "Service", "Company", "Career", "Blog", "Contact us"];

function Header() {
  return (
    <header className="header">
      <div className="logo">finSweet</div>

      <nav className="nav">
        {navLinks.map((item) => (
          <a href="#" key={item}>{item}</a>
        ))}
        <a href="#" className="project">Clone project →</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="square"></div>

      <p className="subtitle">COMPANY</p>

      <h1>
        Award-winning Company <br />
        seen and used by millions <br />
        around the world.
      </h1>

      <p className="desc">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>

      <div className="images">
        <img src="/images/meeting1.jpg" alt="meeting" />
        <img src="/images/meeting2.jpg" alt="meeting" />
        <img src="/images/meeting3.jpg" alt="meeting" />
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="story">
      <div className="story-text">
        <div className="blue-line"></div>
        <p className="story-subtitle">Our Story ✨</p>

        <h2>From Startups to Titans of Industry</h2>

        <p>
          Through True Rich Attended does no end it his mother since favourable
          real had half every him case in packages enquire we up ecstatic
          unsatiable saw his giving Remain expense of gay produce excited
          perceived do an a china mean its so ye when in explained Hearts am
          next over match mr partially not should latter thus as out no passed
          forming middleton exercise up.
        </p>
      </div>

      <div className="stats">
        <div>
          <h3>1560+</h3>
          <p>Project Delivered</p>
        </div>
        <div>
          <h3>100+</h3>
          <p>Professional</p>
        </div>
        <div>
          <h3>950+</h3>
          <p>Happy Client</p>
        </div>
        <div>
          <h3>10 yrs</h3>
          <p>Experience</p>
        </div>
      </div>
    </section>
  );
}

export default function CompanyPage() {
  return (
    <div className="page">
      <Header />
      <main className="container">
        <Hero />
        <Story />
      </main>
    </div>
  );
}
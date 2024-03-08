export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Gopala Krishna</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software Engineer</span>{" "}
          </h1>
          <p className="hero--section-description">
            Embarking on my journey as a Software Engineer,
            <br />
            turning lines of code into innovative solutions. 💻✨
          </p>
          <a
            href="https://www.linkedin.com/in/kolakaluri-gopala-krishna-7163b4212/"
            className="navbar--content"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-primary">Get In Touch</button>
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}

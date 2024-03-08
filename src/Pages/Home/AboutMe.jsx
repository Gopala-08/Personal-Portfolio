export default function AboutMe() {
  return (
    <section id="aboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills--section--heading">Hey there!</h1>
          <p className="section--title">About me</p>
          <p className="hero--section-description">
            <ul>
              <li>I'm Gopala Krishna, a passionate software engineer with a focus on creating immersive experiences in the software industry.</li>
              <li>Having spent 9 months at Gameskraft Technologies, I've had the privilege of contributing to gameplay features using React Native and Node.js as technologies.</li>
            </ul>
          </p>
          <p className="section--title">Professional Background</p>
          <p className="hero--section-description">
            <ul>
              <li>During my tenure at Gameskraft, I played a pivotal role in developing and optimizing mobile applications using React Native, leveraging its cross-platform capabilities to deliver seamless gaming experiences to users across different devices.</li>
              <li>Additionally, I've contributed to backend development using Node.js, building scalable APIs and real-time features to enhance gameplay and performance.</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}

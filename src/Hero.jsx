const Hero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <h1 style={styles.name}>Praveen G R</h1>

        <h2 style={styles.role}>Full Stack Developer</h2>

        <p style={styles.bio}>
          I build scalable web applications using React, Node.js and MongoDB.
          Passionate about solving real world problems.
        </p>

        <div style={styles.buttons}>
          <a href="#contact" style={styles.primaryBtn}>
            Contact Me
          </a>

          <a
            href="#"
            style={styles.secondaryBtn}
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
    color: "white"
  },
  container: {
    textAlign: "center",
    maxWidth: "700px",
    padding: "20px"
  },
  name: {
    fontSize: "48px",
    marginBottom: "10px"
  },
  role: {
    fontSize: "24px",
    marginBottom: "15px",
    color: "#c7d2fe"
  },
  bio: {
    fontSize: "18px",
    marginBottom: "25px",
    lineHeight: "1.6"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px"
  },
  primaryBtn: {
    padding: "12px 24px",
    background: "white",
    color: "#1e3a8a",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "500"
  },
  secondaryBtn: {
    padding: "12px 24px",
    border: "2px solid white",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none"
  }
};

export default Hero;
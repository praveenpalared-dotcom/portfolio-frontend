import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        
        <div style={styles.left}>
          
          <p style={styles.available}>Available for hire</p>

          <h1 style={styles.title}>
            Hello, I'm <br />
            <span style={styles.name}>Praveen G R</span>
          </h1>

          <p style={styles.role}>
            I'm a <span style={styles.highlight}>Full-Stack Developer</span>
          </p>

          <div style={styles.skills}>
            <span style={styles.skill}>React</span>
            <span style={styles.skill}>Node.js</span>
            <span style={styles.skill}>MongoDB</span>
            <span style={styles.skill}>AI</span>
            <span style={styles.skill}>DSA</span>
          </div>

          <p style={styles.desc}>
            Developing intelligent solutions and building scalable applications.
          </p>

          <div style={styles.buttons}>
            <button style={styles.primary}>Get In Touch</button>
            <button style={styles.secondary}>Download Resume</button>
          </div>

          <div style={styles.social}>
            <FaGithub />
            <FaLinkedin />
            <FaInstagram />
          </div>

        </div>

        <div style={styles.right}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
            style={styles.image}
          />
        </div>

      </div>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    background: "#f8fafc"
  },
  container: {
    maxWidth: "1200px",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "50px",
    padding: "40px"
  },
  left: {
    flex: 1
  },
  right: {
    flex: 1,
    textAlign: "center"
  },
  available: {
    color: "#8b5cf6",
    fontWeight: "500"
  },
  title: {
    fontSize: "48px",
    margin: "10px 0"
  },
  name: {
    color: "#8b5cf6"
  },
  role: {
    marginBottom: "15px",
    color: "#555"
  },
  highlight: {
    color: "#8b5cf6",
    fontWeight: "600"
  },
  skills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "15px"
  },
  skill: {
    background: "#e0e7ff",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "14px"
  },
  desc: {
    marginBottom: "20px",
    color: "#555"
  },
  buttons: {
    display: "flex",
    gap: "15px",
    marginBottom: "20px"
  },
  primary: {
    background: "#8b5cf6",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer"
  },
  secondary: {
    border: "1px solid #8b5cf6",
    padding: "12px 20px",
    borderRadius: "8px",
    background: "white",
    cursor: "pointer"
  },
  social: {
    display: "flex",
    gap: "20px",
    fontSize: "20px"
  },
  image: {
    width: "350px",
    borderRadius: "50%",
    boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
  }
};

export default Hero;
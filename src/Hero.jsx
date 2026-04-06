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
            Full Stack Developer
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
    margin: "0 auto",
    padding: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "60px"
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
    fontWeight: "500",
    marginBottom: "10px"
  },

  title: {
    fontSize: "52px",
    lineHeight: "1.2",
    marginBottom: "10px"
  },

  name: {
    color: "#8b5cf6",
    fontWeight: "700"
  },

  role: {
    fontSize: "18px",
    color: "#64748b",
    marginBottom: "20px"
  },

  skills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px"
  },

  skill: {
    background: "#ede9fe",
    padding: "8px 14px",
    borderRadius: "20px",
    fontSize: "14px",
    color: "#6d28d9",
    fontWeight: "500"
  },

  desc: {
    color: "#475569",
    marginBottom: "25px",
    lineHeight: "1.6"
  },

  buttons: {
    display: "flex",
    gap: "15px",
    marginBottom: "25px"
  },

  primary: {
    background: "#8b5cf6",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500"
  },

  secondary: {
    border: "2px solid #8b5cf6",
    padding: "12px 24px",
    borderRadius: "8px",
    background: "white",
    cursor: "pointer",
    color: "#8b5cf6",
    fontWeight: "500"
  },

  social: {
    display: "flex",
    gap: "18px",
    fontSize: "20px",
    color: "#475569"
  },

  image: {
    width: "360px",
    borderRadius: "50%",
    boxShadow: "0 15px 40px rgba(0,0,0,0.1)"
  }
};

export default Hero;
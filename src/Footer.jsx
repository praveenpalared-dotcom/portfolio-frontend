import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        <h2 style={styles.logo}>Praveen G R</h2>

        <p style={styles.text}>
          Full Stack Developer | React | Node | MongoDB
        </p>

        <div style={styles.social}>
          <FaGithub />
          <FaLinkedin />
          <FaInstagram />
        </div>

        <p style={styles.copy}>
          © {new Date().getFullYear()} Praveen G R. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#0f172a",
    color: "white",
    padding: "60px 20px",
    marginTop: "60px"
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center"
  },

  logo: {
    marginBottom: "10px"
  },

  text: {
    color: "#94a3b8",
    marginBottom: "20px"
  },

  social: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    fontSize: "22px",
    marginBottom: "20px"
  },

  copy: {
    color: "#64748b",
    fontSize: "14px"
  }
};

export default Footer;
const About = () => {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        
        <div style={styles.left}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
            alt="about"
            style={styles.image}
          />
        </div>

        <div style={styles.right}>
          <h2 style={styles.heading}>About Me</h2>

          <p style={styles.text}>
            I'm Praveen G R, a Full Stack Developer passionate about building
            scalable web applications and solving real-world problems.
          </p>

          <p style={styles.text}>
            I specialize in React, Node.js, MongoDB, and modern web technologies.
            I enjoy learning new technologies and building impactful products.
          </p>

          <div style={styles.info}>
            <div>
              <h3>Projects</h3>
              <p>10+</p>
            </div>

            <div>
              <h3>Experience</h3>
              <p>Fresher</p>
            </div>

            <div>
              <h3>Technologies</h3>
              <p>Full Stack</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    background: "white"
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: "60px"
  },

  left: {
    flex: 1,
    textAlign: "center"
  },

  right: {
    flex: 1
  },

  image: {
    width: "300px"
  },

  heading:{
fontSize:"36px",
marginBottom:"40px",
textAlign:"center"
},

  text: {
    marginBottom: "15px",
    color: "#64748b",
    lineHeight: "1.6"
  },

  info: {
    display: "flex",
    gap: "40px",
    marginTop: "25px"
  }
};

export default About;
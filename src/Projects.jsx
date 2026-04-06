const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        
        <h2 style={styles.heading}>Projects</h2>

        <div style={styles.grid}>

          <div style={styles.card}>
            <h3>Portfolio Website</h3>
            <p>
              Full stack portfolio with React, Node.js and MongoDB
            </p>
            <div style={styles.buttons}>
              <a href="#" style={styles.btn}>Live</a>
              <a href="#" style={styles.btnOutline}>Code</a>
            </div>
          </div>

          <div style={styles.card}>
            <h3>AI Project</h3>
            <p>
              AI powered application using machine learning
            </p>
            <div style={styles.buttons}>
              <a href="#" style={styles.btn}>Live</a>
              <a href="#" style={styles.btnOutline}>Code</a>
            </div>
          </div>

          <div style={styles.card}>
            <h3>DSA Tracker</h3>
            <p>
              Track coding progress and performance
            </p>
            <div style={styles.buttons}>
              <a href="#" style={styles.btn}>Live</a>
              <a href="#" style={styles.btnOutline}>Code</a>
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
    textAlign: "center"
  },

  heading:{
fontSize:"36px",
marginBottom:"40px",
textAlign:"center"
},

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px"
  },

 card: {
  background: "white",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
  transition: "0.3s",
  cursor: "pointer"
},

  buttons: {
    marginTop: "15px",
    display: "flex",
    gap: "10px"
  },

  btn: {
    background: "#7c3aed",
    color: "white",
    padding: "8px 16px",
    borderRadius: "6px",
    textDecoration: "none"
  },

  btnOutline: {
    border: "1px solid #7c3aed",
    color: "#7c3aed",
    padding: "8px 16px",
    borderRadius: "6px",
    textDecoration: "none"
  }
};

export default Projects;
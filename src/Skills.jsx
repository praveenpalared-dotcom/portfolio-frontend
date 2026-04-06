import { FaReact, FaNodeJs, FaDatabase, FaPython } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>

        <h2 style={styles.heading}>Skills</h2>

        <div style={styles.grid}>

          <div style={styles.card}>
            <FaReact size={40} color="#61DBFB" />
            <h3>React</h3>
          </div>

          <div style={styles.card}>
            <FaNodeJs size={40} color="#68A063" />
            <h3>Node.js</h3>
          </div>

          <div style={styles.card}>
            <SiExpress size={40} />
            <h3>Express</h3>
          </div>

          <div style={styles.card}>
            <SiMongodb size={40} color="#4DB33D" />
            <h3>MongoDB</h3>
          </div>

          <div style={styles.card}>
            <SiJavascript size={40} color="#F0DB4F" />
            <h3>JavaScript</h3>
          </div>

          <div style={styles.card}>
            <FaPython size={40} color="#3776AB" />
            <h3>Python</h3>
          </div>

        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    background: "#f8fafc"
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
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px"
  },

  card: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
    transition: "0.3s",
    cursor: "pointer"
  }
};

export default Skills;
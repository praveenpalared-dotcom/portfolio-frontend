import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        
        <motion.div 
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.8}}
        style={styles.left}>

          <h1>Hello, I'm <span style={styles.name}>Praveen G R</span></h1>
          <h2>Full Stack Developer</h2>

          <p>
            Building scalable applications using React, Node and MongoDB
          </p>

          <button style={styles.button}>
            Contact Me
          </button>

        </motion.div>

      </div>
    </section>
  );
};

const styles = {
  hero:{
    minHeight:"80vh",
    display:"flex",
    alignItems:"center"
  },

 container: {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "40px",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center"
},

  name:{
    color:"#7c3aed"
  },

  button:{
    marginTop:"20px",
    padding:"12px 24px",
    background:"#7c3aed",
    color:"white",
    border:"none",
    borderRadius:"6px"
  }
}

export default Hero
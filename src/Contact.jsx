import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const response = await fetch(
        "https://portfolio-backend-44a9.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      await response.json();

      setSuccess("Message sent successfully ✅");

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      setSuccess("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>Contact Me</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            style={styles.textarea}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button style={styles.button} type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <p style={styles.success}>{success}</p>}
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#667eea,#764ba2)",
    padding: "40px"
  },
  heading:{
fontSize:"36px",
marginBottom:"40px",
textAlign:"center"
},
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "40px",
    borderRadius: "16px",
    background: "#ffffff",
    boxShadow: "0 20px 50px rgba(0,0,0,0.15)"
  },
  title: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "30px",
    fontWeight: "600",
    color: "#111827"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px"
  },
  input: {
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "15px",
    outline: "none"
  },
  textarea: {
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    minHeight: "140px",
    fontSize: "15px",
    outline: "none"
  },
  button: {
    padding: "14px",
    background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500"
  },
  success: {
    color: "green",
    textAlign: "center",
    fontWeight: "500",
    marginTop: "10px"
  }
};

export default Contact;
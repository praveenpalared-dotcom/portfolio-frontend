import { useEffect, useState } from "react";

const Admin = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await fetch("http://localhost:5000/api/contacts");
    const data = await res.json();
    setContacts(data.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Admin Dashboard</h2>

      {contacts.map((contact) => (
        <div key={contact._id} style={styles.card}>
          <h3>{contact.name}</h3>
          <p>{contact.email}</p>
          <p>{contact.message}</p>
          <small>
            {new Date(contact.createdAt).toLocaleString()}
          </small>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "700px",
    margin: "40px auto"
  },
  card: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "15px"
  }
};

export default Admin;
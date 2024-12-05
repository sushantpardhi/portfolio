import React, { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "../../constants/data";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setStatus({ ...status, error: "Please enter a valid email" });
      return;
    }

    setStatus({ loading: true, success: false, error: null });
    try {
      const response = await fetch(contact.form.submitEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New contact from ${formData.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: "", email: "", message: "" });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: "Failed to send message. Please try again or email directly.",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className={styles.contact}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>Contact Me</h2>
        <p className={styles.subtitle}>
          Have a question or want to work together? <br></br>Write to me below
          or email me directly at{" "}
          <a href={`mailto:${contact.email}`} className={styles.emailLink}>
            {contact.email}
          </a>
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              className={styles.input}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Message</label>
            <textarea
              name="message"
              className={styles.textarea}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {status.error && <div className={styles.error}>{status.error}</div>}
          {status.success && (
            <div className={styles.success}>
              Thank you for your message! I'll get back to you soon.
            </div>
          )}

          <button
            type="submit"
            className={`${styles.button} ${
              status.loading ? styles.loading : ""
            }`}
            disabled={status.loading}
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

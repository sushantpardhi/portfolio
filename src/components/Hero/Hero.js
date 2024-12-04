import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./Hero.module.css";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <motion.h1 className={styles.title} variants={itemVariants}>
          {"<Sushant Pardhi />"}
        </motion.h1>
        <motion.p className={styles.subtitle} variants={itemVariants}>
          Full Stack Developer & Software Engineer
        </motion.p>
        <motion.p className={styles.description} variants={itemVariants}>
          const skills = ["React", "Node.js","Python", "Docker", "GraphQL"];
        </motion.p>
        <motion.div className={styles.socialLinks} variants={itemVariants}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.socialIcon} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.socialIcon} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className={styles.socialIcon} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

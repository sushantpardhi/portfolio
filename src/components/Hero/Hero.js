import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./Hero.module.css";
import { portfolioData } from "../../constants/data";

const Hero = () => {
  const { hero } = portfolioData;

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
          {`<${hero.name} />`}
        </motion.h1>
        <motion.p className={styles.subtitle} variants={itemVariants}>
          {hero.title}
        </motion.p>
        <motion.p className={styles.description} variants={itemVariants}>
          {`const skills = ${JSON.stringify(hero.skills)};`}
        </motion.p>
        <motion.div className={styles.socialLinks} variants={itemVariants}>
          {Object.entries(hero.social).map(([platform, url]) => (
            <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
              {platform === 'github' && <FaGithub className={styles.socialIcon} />}
              {platform === 'linkedin' && <FaLinkedin className={styles.socialIcon} />}
              {platform === 'twitter' && <FaTwitter className={styles.socialIcon} />}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

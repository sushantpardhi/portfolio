import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import { portfolioData } from "../../constants/data";

const About = () => {
  const { about, animations } = portfolioData;

  return (
    <section className={styles.about}>
      <motion.div
        className={styles.container}
        variants={animations.containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.grid}>
          <motion.div className={styles.leftColumn} variants={animations.itemVariants}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.content}>{about.description}</p>
            <motion.div className={styles.stats}>
              {about.stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </motion.div>
            <motion.div className={styles.resumeButton} variants={animations.itemVariants}>
              <a href={about.resumeLink} target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div className={styles.rightColumn} variants={animations.itemVariants}>
            <div className={styles.techStack}>
              <h3>Technical Expertise</h3>
              <div className={styles.skillGroups}>
                {Object.entries(about.skills).map(([category, categorySkills]) => (
                  <div key={category} className={styles.skillGroup}>
                    <h4>{category}</h4>
                    <ul>
                      {categorySkills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

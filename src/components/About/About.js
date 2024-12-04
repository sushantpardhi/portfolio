import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import { skills, animations } from "../../constants/data";

const About = () => {
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
            <p className={styles.content}>
              As a Full Stack Developer and Cloud Engineer, I specialize in
              building scalable and efficient web applications. With a strong
              foundation in both frontend and backend technologies, I create
              seamless user experiences while ensuring robust architecture and
              performance.
            </p>
            <motion.div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
            </motion.div>
            <motion.div className={styles.resumeButton} variants={animations.itemVariants}>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div className={styles.rightColumn} variants={animations.itemVariants}>
            <div className={styles.techStack}>
              <h3>Technical Expertise</h3>
              <div className={styles.skillGroups}>
                {Object.entries(skills).map(([category, categorySkills]) => (
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

import React from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import { experiences, animations } from "../../constants/data";

const Experience = () => {
  return (
    <section className={styles.experience}>
      <motion.div
        className={styles.container}
        variants={animations.containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className={styles.title} variants={animations.itemVariants}>
          Experience
        </motion.h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              variants={animations.itemVariants}
            >
              <div className={styles.card}>
                <div className={styles.date}>{exp.date}</div>
                <h3 className={styles.role}>{exp.role}</h3>
                <div className={styles.company}>{exp.company}</div>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.skills}>
                  {exp.skills.map((skill, i) => (
                    <span key={i} className={styles.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

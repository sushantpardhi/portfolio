import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProjectModal.module.css";

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        className={styles.modalOverlay}
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{
          opacity: 1,
          backdropFilter: "blur(20px)",
          transition: { duration: 0.3 },
        }}
        exit={{
          opacity: 0,
          backdropFilter: "blur(0px)",
          transition: { duration: 0.2 },
        }}
        onClick={onClose}
      >
        <motion.div
          className={styles.modalContent}
          initial={{ scale: 0.95, y: 10, rotateX: 2 }}
          animate={{
            scale: 1,
            y: 0,
            rotateX: 0,
            transition: {
              type: "spring",
              damping: 25,
              stiffness: 400,
            },
          }}
          exit={{
            scale: 0.95,
            y: 10,
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>

          {project.title && (
            <h2 className={styles.modalTitle}>{project.title}</h2>
          )}

          {project.screenshots?.length > 0 && (
            <div className={styles.screenshotContainer}>
              {project.screenshots.length > 1 && (
                <button
                  className={`${styles.navButton} ${styles.prevButton}`}
                  onClick={prevImage}
                >
                  ‹
                </button>
              )}
              <motion.img
                key={currentImageIndex}
                src={project.screenshots[currentImageIndex]}
                alt={`${project.title || "Project"} screenshot ${
                  currentImageIndex + 1
                }`}
                className={styles.screenshot}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              {project.screenshots.length > 1 && (
                <>
                  <button
                    className={`${styles.navButton} ${styles.nextButton}`}
                    onClick={nextImage}
                  >
                    ›
                  </button>
                  <div className={styles.dots}>
                    {project.screenshots.map((_, index) => (
                      <span
                        key={index}
                        className={`${styles.dot} ${
                          index === currentImageIndex ? styles.activeDot : ""
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {project.description && (
            <p className={styles.modalDescription}>{project.description}</p>
          )}

          {project.technologies?.length > 0 && (
            <div className={styles.technologies}>
              {project.technologies.map((tech, i) => (
                <span key={i} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>
          )}

          {(project.githubLink || project.liveLink) && (
            <div className={styles.modalLinks}>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;

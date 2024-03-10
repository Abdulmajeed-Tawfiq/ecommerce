// SkeletonCard.jsx
import styles from "./SkeletonCard.module.css"; // Create a CSS module for styling

function SkeletonCard() {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonDescription}></div>
      </div>
    </div>
  );
}

export default SkeletonCard;

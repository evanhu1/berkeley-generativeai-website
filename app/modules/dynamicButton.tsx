import React from 'react';
import styles from './Button.module.css';

const ApplyButton: React.FC = () => {
  return (
    <button className={styles.button}>
      <span className={styles.buttonContent}>Apply</span>
    </button>
  );
};

export default ApplyButton;

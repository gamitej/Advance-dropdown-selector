import React from "react";
import styles from "@/comp/select.module.css";

type SelectOption = {
  label: string;
  value: any;
};

type SelectProps = {
  value: string;
  options: SelectOption[];
  onChange: (value: SelectOption | undefined) => void;
};

const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}>value</span>
      <button className={styles["clear-btn"]}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${styles.show}`}>
        {options.map((option) => (
          <li className={styles.option} key={option.value}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;

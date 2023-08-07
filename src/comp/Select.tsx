import React from "react";
import styles from "@/comp/select.module.css";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  value: string;
  options: SelectOption[];
  onChange: (value: SelectOption | undefined) => void;
};

const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.value}>value</span>
      <button className={styles["clear-btn"]}></button>
    </div>
  );
};

export default Select;

import React, { useState } from "react";
import styles from "@/comp/select.module.css";

type SelectOption = {
  label: string;
  value: any;
};

type SelectProps = {
  value: SelectOption | undefined;
  options: SelectOption[];
  onChange: (value: SelectOption | undefined) => void;
};

const Select = ({ value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const handleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    onChange(undefined);
  };

  const handleSelectOption = (option: SelectOption) => {
    onChange(option);
    setIsOpen(false);
  };

  function isOptionSelected(option: SelectOption) {
    return option === value;
  }

  return (
    <div
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      className={styles.container}
    >
      <span className={styles.value}>{value?.label}</span>
      <button className={styles["clear-btn"]} onClick={(e) => handleClear(e)}>
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option) => (
          <li
            className={`${styles.option} ${
              isOptionSelected(option) ? styles.selected : ""
            }`}
            key={option.value}
            onClick={(e) => {
              e.stopPropagation();
              handleSelectOption(option);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;

import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";
import { CURRENT_DATE } from "../../../utils/dateUtils";

const Form = ({ handleSubmit }) => {
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(date);
    setDate("");
  };

  return (
    <div>
      <p>Find your bearthday image!</p>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Birthdate:</label>
          <input
            type="date"
            id="date"
            className={styles.input}
            value={date}
            max={CURRENT_DATE}
            onChange={handleChange}
          />
        </div>
        <input
          disabled={!date}
          className={styles.button}
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Form;

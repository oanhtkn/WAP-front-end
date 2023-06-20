import React, { useState } from "react";
import { hasFlag } from "country-flag-icons";

import ListOfCountries from "./ListOfCountries.json";

import styles from "./NewTournament.module.scss";

const NewTournamentForm = (props) => {
  const { onSubmit } = props;
  const [selectedCountry, setSelectedCountry] = useState("Afghanistan");

  const countryCode = ListOfCountries.find(
    (country) => country.name === selectedCountry
  ).code;

  const onSelectCountryHandler = (e) => {
    const { value } = e.target;
    setSelectedCountry(value);
    console.log(selectedCountry);
  };

  return (
    <form onSubmit={onSubmit} className={styles.containerForm}>
      <h1 className={styles.formHeading}>Create a New Tournament</h1>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="inputName">
          Name
        </label>
        <input
          required
          name="name"
          className={styles.formInput}
          id="inputName"
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="inputCity">
          City
        </label>
        <input
          required
          name="city"
          className={styles.formInput}
          id="inputCity"
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="selectCountry">
          Country
        </label>
        <div className={styles.countryContainer}>
          {countryCode && hasFlag(countryCode) && (
            <img
              alt={selectedCountry}
              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
              className={styles.flag}
            />
          )}
          <select
            required
            onChange={onSelectCountryHandler}
            value={selectedCountry}
            name="country"
            className={styles.formSelect}
            id="selectCountry"
          >
            {ListOfCountries.map((country) => (
              <option value={country.name} key={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="startDateInput">
          Start Date
        </label>
        <input
          required
          name="startDate"
          className={styles.formInput}
          id="startDateInput"
          type="date"
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="endDateInput">
          End Date
        </label>
        <input
          required
          name="endDate"
          className={styles.formInput}
          id="endDateInput"
          type="date"
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="numOfPlayers">
          Number of players
        </label>
        <input
          required
          name="numOfPlayers"
          className={styles.formInput}
          id="numOfPlayers"
          type="number"
          min="3"
          max="100"
          inputMode="decimal"
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="textareaDescription">
          Description
        </label>
        <textarea
          required
          name="description"
          id="textareaDescription"
          rows={5}
          placeholder="Description"
        ></textarea>
      </div>
      <button className={styles.formBtn} type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewTournamentForm;

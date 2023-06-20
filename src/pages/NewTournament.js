import { useState } from "react";
import NewTournamentForm from "../components/tournament/NewTournamentForm";
import styles from "./NewTournamentPage.module.scss";

const NewTournamentPage = () => {
  const [formData, setFormData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const { city, name, endDate, startDate, country, description } =
      e.target.elements;

    const data = {
      city: city.value,
      country: country.value,
      description: description.value,
      name: name.value,
      endDate: endDate.value,
      startDate: startDate.value,
    };

    setFormData(data);
    console.log(formData);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.ntbackgroundImage}></div>
      <div className={styles.formContainer}>
        {selectedCountry && (
          <img
            className={styles.flag}
            src={`https://www.countryflags.io/${selectedCountry}/flat/64.png`}
            alt="Flag"
          />
        )}
        <NewTournamentForm
          onSubmit={onFormSubmitHandler}
          onCountryChange={handleCountryChange}
        />
      </div>
    </div>
  );
};

export default NewTournamentPage;

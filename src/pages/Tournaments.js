import { useNavigate } from "react-router-dom";
import { hasFlag } from "country-flag-icons";

import DUMMY_TOURNAMENTS from "../dummydata/DummyTournamentList";
import ListOfCountries from "../components/tournament/ListOfCountries.json";
import Card from "../components/ui/Card";
import styles from "./TournamentsPage.module.scss";

const TournamentsPage = () => {
  const navigate = useNavigate();

  const onNewTournamentHandler = () => {
    navigate("/tournaments/new");
  };

  const onTournamentClickHandler = (e) => {
    const tournament = e.target.closest(`.${styles.cardContent}`);
    const { id } = tournament;
    console.log(id);
    navigate(`/tournaments/${id}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upcoming Tournaments</h1>
      <div className={styles.tournamentbackgroundImage}></div>

      <div className={styles.tournamentList}>
        {DUMMY_TOURNAMENTS.map((tournament) => (
          <Card key={tournament.id} className={styles.card}>
            <div
              className={styles.cardContent}
              id={tournament.id}
              onClick={onTournamentClickHandler}
            >
              <h2 className={styles.name}>Huge cup of Poland</h2>
              <p className={styles.date}>
                Start date: 11/11/2023 - End date: 12/12/2023
              </p>
              <div className={styles.location}>
                <p>City: Poznań</p>
                {hasFlag("PL") && (
                  <img
                    alt="Flag"
                    className={styles.flag}
                    src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg`}
                  />
                )}
              </div>
              <p className={styles.players}>Number of Players: 50</p>
            </div>
          </Card>
        ))}
      </div>

      <button
        className={styles.newTournamentButton}
        onClick={onNewTournamentHandler}
      >
        New Tournament
      </button>
    </div>
  );
};

export default TournamentsPage;

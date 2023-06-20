import DUMMY_PLAYERS from "../dummydata/DummyPlayers";
import styles from "./Dashboard.module.scss";

const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dashboardbackgroundImage}></div>
      <h1 className={styles.h1Dashboard}></h1>
      <div className={styles.tableContainer}>
        <table className={styles.rankingTable}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Club Name</th>
              <th>Matches Played</th>
              <th>Matches Won</th>
              <th>Matches Lost</th>
              <th>Matches Drawn</th>
            </tr>
          </thead>
          <tbody>
            {DUMMY_PLAYERS.map((player, index) => (
              <tr key={player.id} className={styles.row}>
                <td>{index + 1}</td>
                <td>{`${player.firstName} ${player.lastName}`}</td>
                <td>{player.clubName}</td>
                <td>{player.matchesPlayed}</td>
                <td>{player.matchesWon}</td>
                <td>{player.matchesLost}</td>
                <td>{player.matchesDrawn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;

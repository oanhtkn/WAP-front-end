import { useState } from "react";
import { useParams } from "react-router-dom";
import DUMMY_TOURNAMENTS from "../dummydata/DummyTournamentList";
import styles from "./TournamentDetailsPage.module.scss";

const TournamentDetailsPage = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      whitePlayerName: "",
      blackPlayerName: "",
      round1: "1:0",
      pts: "0.0",
    },
  ]);

  const handleAddRow = () => {
    if (rows.length < 10) {
      const newRow = {
        id: rows.length + 1,
        whitePlayerName: "",
        blackPlayerName: "",
        round1: "1:0",
        pts: "0.0",
      };
      setRows([...rows, newRow]);
    }
  };

  const handleWhitePlayerNameChange = (e, id) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, whitePlayerName: e.target.value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleBlackPlayerNameChange = (e, id) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, blackPlayerName: e.target.value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const params = useParams();
  const { id } = params;
  const tournament = DUMMY_TOURNAMENTS.find(
    (tournament) => tournament.id === id
  );

  return (
    <div className={styles.container}>
      <div className={styles.matchesbackgroundImage}></div>
      <h1 className={styles.h1Details}>Match Details</h1>
      <h2 className={styles.h2Details}>{id}</h2>
      <p className={styles.p1Details}>{tournament.name}</p>
      <p className={styles.p1Details}>{tournament.city}</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>White pieces</th>
            <th>Pts</th>
            <th>Round 1</th>
            <th>Pts</th>
            <th>Black pieces</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{`#${row.id}`}</td>
              <td>
                <input
                  type="text"
                  placeholder="Enter white player name"
                  value={row.whitePlayerName}
                  onChange={(e) => handleWhitePlayerNameChange(e, row.id)}
                />
              </td>
              <td>{row.pts}</td>
              <td>
                <select
                  value={row.round1}
                  onChange={(e) =>
                    setRows((prevRows) =>
                      prevRows.map((prevRow) =>
                        prevRow.id === row.id
                          ? { ...prevRow, round1: e.target.value }
                          : prevRow
                      )
                    )
                  }
                >
                  <option value="1:0">1 : 0</option>
                  <option value="1/2:1/2">1/2 : 1/2</option>
                  <option value="0:1">0 : 1</option>
                  <option value="+:-">+ : -</option>
                  <option value="-:+">- : +</option>
                  <option value="-:-">- : -</option>
                  <option value="0:0">0 : 0</option>
                </select>
              </td>
              <td>{row.pts}</td>
              <td>
                <input
                  type="text"
                  placeholder="Enter black player name"
                  value={row.blackPlayerName}
                  onChange={(e) => handleBlackPlayerNameChange(e, row.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

export default TournamentDetailsPage;

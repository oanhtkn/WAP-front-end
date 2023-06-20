import Tournament from "../models/Tournament";
import DUMMY_MATCHES from "./DummyMatches";

const DUMMY_TOURNAMENTS = [
  new Tournament(
    "Huge Cup of Poland",
    "Poznań",
    "Poland",
    "11/11/2023",
    "12/12/2023",
    50,
    Math.random().toString().slice(2),
    [...DUMMY_MATCHES]
  ),
  new Tournament(
    "Huge Cup of Poland",
    "Poznań",
    "Poland",
    "11/11/2023",
    "12/12/2023",
    50,
    Math.random().toString().slice(2),
    [...DUMMY_MATCHES]
  ),
  new Tournament(
    "Huge Cup of Poland",
    "Poznań",
    "Poland",
    "11/11/2023",
    "12/12/2023",
    50,
    Math.random().toString().slice(2),
    [...DUMMY_MATCHES]
  ),
];

export default DUMMY_TOURNAMENTS;

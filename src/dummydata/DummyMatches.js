import DUMMY_PLAYERS from "./DummyPlayers";
import Match from "../models/Match";

const DUMMY_MATCHES = [
  new Match(DUMMY_PLAYERS.at(0), DUMMY_PLAYERS.at(1)),
  new Match(DUMMY_PLAYERS.at(0), DUMMY_PLAYERS.at(1)),
  new Match(DUMMY_PLAYERS.at(0), DUMMY_PLAYERS.at(1)),
];

export default DUMMY_MATCHES;

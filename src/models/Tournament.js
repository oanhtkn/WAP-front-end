export default class Tournament {
  constructor(
    name,
    city,
    country,
    startDate,
    endDate,
    numberOfPlayers,
    id,
    matches
  ) {
    // TODO: id
    this.name = name;
    this.city = city;
    this.country = country;
    this.startDate = startDate;
    this.endDate = endDate;
    this.numberOfPlayers = numberOfPlayers;
    this.id = id;
    this.matches = matches;
  }
}

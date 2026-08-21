// ============================================================
// MatchPath — data.js
// All 2026 FIFA World Cup data: venues, teams, matches, broadcasters.
// Sources: The Athletic schedule PDF, NBC Sports training camp list.
// Last updated: June 9, 2026
// ============================================================


// ============================================================
// VENUES
// All 16 host stadiums with GPS coordinates.
// ============================================================
const venues = [
  { id: "mexico-city",      name: "Estadio Azteca",              city: "Mexico City",          country: "Mexico",  lat: 19.3029,  lng: -99.1505  },
  { id: "guadalajara",      name: "Estadio Akron",               city: "Guadalajara",          country: "Mexico",  lat: 20.6867,  lng: -103.4667 },
  { id: "monterrey",        name: "Estadio BBVA",                city: "Monterrey",            country: "Mexico",  lat: 25.6694,  lng: -100.2438 },
  { id: "toronto",          name: "BMO Field",                   city: "Toronto",              country: "Canada",  lat: 43.6333,  lng: -79.4186  },
  { id: "vancouver",        name: "BC Place",                    city: "Vancouver",            country: "Canada",  lat: 49.2768,  lng: -123.1118 },
  { id: "los-angeles",      name: "SoFi Stadium",                city: "Los Angeles",          country: "USA",     lat: 33.9535,  lng: -118.3392 },
  { id: "san-francisco",    name: "Levi's Stadium",              city: "Santa Clara",          country: "USA",     lat: 37.4033,  lng: -121.9694 },
  { id: "seattle",          name: "Lumen Field",                 city: "Seattle",              country: "USA",     lat: 47.5952,  lng: -122.3316 },
  { id: "dallas",           name: "AT&T Stadium",                city: "Dallas",               country: "USA",     lat: 32.7480,  lng: -97.0931  },
  { id: "houston",          name: "NRG Stadium",                 city: "Houston",              country: "USA",     lat: 29.6847,  lng: -95.4107  },
  { id: "kansas-city",      name: "Arrowhead Stadium",           city: "Kansas City",          country: "USA",     lat: 39.0489,  lng: -94.4839  },
  { id: "philadelphia",     name: "Lincoln Financial Field",     city: "Philadelphia",         country: "USA",     lat: 39.9008,  lng: -75.1675  },
  { id: "east-rutherford",  name: "MetLife Stadium",             city: "East Rutherford",      country: "USA",     lat: 40.8135,  lng: -74.0745  },
  { id: "boston",           name: "Gillette Stadium",            city: "Boston",               country: "USA",     lat: 42.0909,  lng: -71.2643  },
  { id: "miami",            name: "Hard Rock Stadium",           city: "Miami",                country: "USA",     lat: 25.9580,  lng: -80.2389  },
  { id: "atlanta",          name: "Mercedes-Benz Stadium",       city: "Atlanta",              country: "USA",     lat: 33.7555,  lng: -84.4010  },
];


// ============================================================
// BROADCASTERS (US only)
// ============================================================
const broadcasters = {
  "Fox":       { label: "Fox",       type: "cable",     color: "#003087" },
  "FS1":       { label: "FS1",       type: "cable",     color: "#003087" },
  "Telemundo": { label: "Telemundo", type: "cable",     color: "#4b0082" },
  "Universo":  { label: "Universo",  type: "cable",     color: "#8B0000" },
  "Peacock":   { label: "Peacock",   type: "streaming", color: "#000000" },
};


// ============================================================
// MATCHES
// Full group stage schedule. All times are Eastern (ET).
// broadcasters: approximate — Fox/FS1 carry English, Telemundo/Universo carry Spanish.
// ============================================================
const matches = [

  // ── GROUP A ──────────────────────────────────────────────
  { id: "A1", group: "A", stage: "Group Stage", date: "2026-06-11", time: "15:00", venueId: "mexico-city",     team1: "mexico",       team2: "south-africa",  score: { team1: 2, team2: 0 }, winner: "mexico", broadcasters: ["Fox","Telemundo"] },
  { id: "A2", group: "A", stage: "Group Stage", date: "2026-06-11", time: "22:00", venueId: "guadalajara",     team1: "south-korea",  team2: "czech-rep",     score: { team1: 2, team2: 1 }, winner: "south-korea", broadcasters: ["FS1","Universo"] },
  { id: "A3", group: "A", stage: "Group Stage", date: "2026-06-18", time: "12:00", venueId: "atlanta",         team1: "czech-rep",    team2: "south-africa",  score: { team1: 1, team2: 1 }, winner: null, broadcasters: ["FS1","Universo"] },
  { id: "A4", group: "A", stage: "Group Stage", date: "2026-06-18", time: "21:00", venueId: "guadalajara",     team1: "mexico",       team2: "south-korea",   score: { team1: 1, team2: 0 }, winner: "mexico", broadcasters: ["Fox","Telemundo"] },
  { id: "A5", group: "A", stage: "Group Stage", date: "2026-06-24", time: "21:00", venueId: "mexico-city",     team1: "czech-rep",    team2: "mexico",        score: { team1: 0, team2: 3 }, winner: "mexico", broadcasters: ["Fox","Telemundo"] },
  { id: "A6", group: "A", stage: "Group Stage", date: "2026-06-24", time: "21:00", venueId: "monterrey",       team1: "south-africa", team2: "south-korea",   score: { team1: 1, team2: 0 }, winner: "south-africa", broadcasters: ["FS1","Universo"] },

  // ── GROUP B ──────────────────────────────────────────────
  { id: "B1", group: "B", stage: "Group Stage", date: "2026-06-12", time: "15:00", venueId: "toronto",         team1: "canada",       team2: "bosnia",        score: { team1: 1, team2: 1 }, winner: null, broadcasters: ["Fox","Telemundo"] },
  { id: "B2", group: "B", stage: "Group Stage", date: "2026-06-13", time: "15:00", venueId: "san-francisco",   team1: "qatar",        team2: "switzerland",   score: { team1: 1, team2: 1 }, winner: null, broadcasters: ["FS1","Universo"] },
  { id: "B3", group: "B", stage: "Group Stage", date: "2026-06-18", time: "15:00", venueId: "los-angeles",     team1: "switzerland",  team2: "bosnia",        score: { team1: 4, team2: 1 }, winner: "switzerland", broadcasters: ["FS1","Universo"] },
  { id: "B4", group: "B", stage: "Group Stage", date: "2026-06-18", time: "18:00", venueId: "vancouver",       team1: "canada",       team2: "qatar",         score: { team1: 6, team2: 0 }, winner: "canada", broadcasters: ["Fox","Telemundo"] },
  { id: "B5", group: "B", stage: "Group Stage", date: "2026-06-24", time: "15:00", venueId: "vancouver",       team1: "switzerland",  team2: "canada",        score: { team1: 2, team2: 1 }, winner: "switzerland", broadcasters: ["Fox","Telemundo"] },
  { id: "B6", group: "B", stage: "Group Stage", date: "2026-06-24", time: "15:00", venueId: "seattle",         team1: "bosnia",       team2: "qatar",         score: { team1: 3, team2: 1 }, winner: "bosnia", broadcasters: ["FS1","Universo"] },

  // ── GROUP C ──────────────────────────────────────────────
  { id: "C1", group: "C", stage: "Group Stage", date: "2026-06-13", time: "18:00", venueId: "east-rutherford", team1: "brazil",       team2: "morocco",       score: { team1: 1, team2: 1 }, winner: null, broadcasters: ["Fox","Telemundo"] },
  { id: "C2", group: "C", stage: "Group Stage", date: "2026-06-13", time: "21:00", venueId: "boston",          team1: "haiti",        team2: "scotland",      score: { team1: 0, team2: 1 }, winner: "scotland", broadcasters: ["FS1","Universo"] },
  { id: "C3", group: "C", stage: "Group Stage", date: "2026-06-19", time: "20:30", venueId: "philadelphia",    team1: "brazil",       team2: "haiti",         score: { team1: 3, team2: 0 }, winner: "brazil", broadcasters: ["Fox","Telemundo"] },
  { id: "C4", group: "C", stage: "Group Stage", date: "2026-06-19", time: "18:00", venueId: "boston",          team1: "scotland",     team2: "morocco",       score: { team1: 0, team2: 1 }, winner: "morocco", broadcasters: ["FS1","Universo"] },
  { id: "C5", group: "C", stage: "Group Stage", date: "2026-06-24", time: "18:00", venueId: "miami",           team1: "scotland",     team2: "brazil",        score: { team1: 0, team2: 3 }, winner: "brazil", broadcasters: ["Fox","Telemundo"] },
  { id: "C6", group: "C", stage: "Group Stage", date: "2026-06-24", time: "18:00", venueId: "atlanta",         team1: "morocco",      team2: "haiti",         score: { team1: 4, team2: 2 }, winner: "morocco", broadcasters: ["FS1","Universo"] },

  // ── GROUP D ──────────────────────────────────────────────
  { id: "D1", group: "D", stage: "Group Stage", date: "2026-06-12", time: "21:00", venueId: "los-angeles",     team1: "usa",          team2: "paraguay",      score: { team1: 4, team2: 1 }, winner: "usa", broadcasters: ["Fox","Telemundo"] },
  { id: "D2", group: "D", stage: "Group Stage", date: "2026-06-13", time: "00:00", venueId: "vancouver",       team1: "australia",    team2: "turkey",        score: { team1: 2, team2: 0 }, winner: "australia", broadcasters: ["FS1","Universo"] },
  { id: "D3", group: "D", stage: "Group Stage", date: "2026-06-19", time: "23:00", venueId: "san-francisco",   team1: "turkey",       team2: "paraguay",      score: { team1: 0, team2: 1 }, winner: "paraguay", broadcasters: ["FS1","Universo"] },
  { id: "D4", group: "D", stage: "Group Stage", date: "2026-06-19", time: "15:00", venueId: "seattle",         team1: "usa",          team2: "australia",     score: { team1: 2, team2: 0 }, winner: "usa", broadcasters: ["Fox","Telemundo"] },
  { id: "D5", group: "D", stage: "Group Stage", date: "2026-06-25", time: "22:00", venueId: "los-angeles",     team1: "turkey",       team2: "usa",           score: { team1: 3, team2: 2 }, winner: "turkey", broadcasters: ["Fox","Telemundo"] },
  { id: "D6", group: "D", stage: "Group Stage", date: "2026-06-25", time: "22:00", venueId: "san-francisco",   team1: "paraguay",     team2: "australia",     score: { team1: 0, team2: 0 }, winner: null, broadcasters: ["FS1","Universo"] },

  // ── GROUP E ──────────────────────────────────────────────
  { id: "E1", group: "E", stage: "Group Stage", date: "2026-06-14", time: "13:00", venueId: "houston",         team1: "germany",      team2: "curacao",       score: { team1: 7, team2: 1 }, winner: "germany", broadcasters: ["Fox","Telemundo"] },
  { id: "E2", group: "E", stage: "Group Stage", date: "2026-06-14", time: "19:00", venueId: "philadelphia",    team1: "ivory-coast",  team2: "ecuador",       score: { team1: 1, team2: 0 }, winner: "ivory-coast", broadcasters: ["FS1","Universo"] },
  { id: "E3", group: "E", stage: "Group Stage", date: "2026-06-20", time: "16:00", venueId: "toronto",         team1: "germany",      team2: "ivory-coast",   score: { team1: 2, team2: 1 }, winner: "germany", broadcasters: ["Fox","Telemundo"] },
  { id: "E4", group: "E", stage: "Group Stage", date: "2026-06-20", time: "20:00", venueId: "kansas-city",     team1: "ecuador",      team2: "curacao",       score: { team1: 0, team2: 0 }, winner: null, broadcasters: ["FS1","Universo"] },
  { id: "E5", group: "E", stage: "Group Stage", date: "2026-06-25", time: "16:00", venueId: "philadelphia",    team1: "curacao",      team2: "ivory-coast",   score: { team1: 0, team2: 2 }, winner: "ivory-coast", broadcasters: ["FS1","Universo"] },
  { id: "E6", group: "E", stage: "Group Stage", date: "2026-06-25", time: "16:00", venueId: "east-rutherford", team1: "ecuador",      team2: "germany",       score: { team1: 2, team2: 1 }, winner: "ecuador", broadcasters: ["Fox","Telemundo"] },

  // ── GROUP F ──────────────────────────────────────────────
  { id: "F1", group: "F", stage: "Group Stage", date: "2026-06-14", time: "16:00", venueId: "dallas",          team1: "netherlands",  team2: "japan",         score: { team1: 2, team2: 2 }, winner: null, broadcasters: ["Fox","Telemundo"] },
  { id: "F2", group: "F", stage: "Group Stage", date: "2026-06-14", time: "22:00", venueId: "monterrey",       team1: "sweden",       team2: "tunisia",       score: { team1: 5, team2: 1 }, winner: "sweden", broadcasters: ["FS1","Universo"] },
  { id: "F3", group: "F", stage: "Group Stage", date: "2026-06-20", time: "13:00", venueId: "houston",         team1: "netherlands",  team2: "sweden",        score: { team1: 5, team2: 1 }, winner: "netherlands", broadcasters: ["Fox","Telemundo"] },
  { id: "F4", group: "F", stage: "Group Stage", date: "2026-06-20", time: "00:00", venueId: "monterrey",       team1: "tunisia",      team2: "japan",         score: { team1: 0, team2: 4 }, winner: "japan", broadcasters: ["FS1","Universo"] },
  { id: "F5", group: "F", stage: "Group Stage", date: "2026-06-25", time: "19:00", venueId: "dallas",          team1: "japan",        team2: "sweden",        score: { team1: 1, team2: 1 }, winner: null, broadcasters: ["Fox","Telemundo"] },
  { id: "F6", group: "F", stage: "Group Stage", date: "2026-06-25", time: "19:00", venueId: "kansas-city",     team1: "tunisia",      team2: "netherlands",   score: { team1: 1, team2: 3 }, winner: "netherlands", broadcasters: ["FS1","Universo"] },

  // ── GROUP G ──────────────────────────────────────────────
  { id: "G1", group: "G", stage: "Group Stage", date: "2026-06-15", time: "15:00", venueId: "seattle",         team1: "belgium",      team2: "egypt",         score: { team1: 1, team2: 1 }, winner: null, broadcasters: ["Fox","Telemundo"] },
  { id: "G2", group: "G", stage: "Group Stage", date: "2026-06-15", time: "21:00", venueId: "los-angeles",     team1: "iran",         team2: "new-zealand",   score: { team1: 2, team2: 2 }, winner: null, broadcasters: ["FS1","Universo"] },
  { id: "G3", group: "G", stage: "Group Stage", date: "2026-06-21", time: "15:00", venueId: "los-angeles",     team1: "belgium",      team2: "iran",          score: { team1: 0, team2: 0 }, winner: null, broadcasters: ["Fox","Telemundo"] },
  { id: "G4", group: "G", stage: "Group Stage", date: "2026-06-21", time: "21:00", venueId: "vancouver",       team1: "new-zealand",  team2: "egypt",         score: { team1: 1, team2: 3 }, winner: "egypt", broadcasters: ["FS1","Universo"] },
  { id: "G5", group: "G", stage: "Group Stage", date: "2026-06-26", time: "23:00", venueId: "seattle",         team1: "egypt",        team2: "iran",          score: { team1: 1, team2: 1 }, winner: null, broadcasters: ["FS1","Universo"] },
  { id: "G6", group: "G", stage: "Group Stage", date: "2026-06-26", time: "23:00", venueId: "vancouver",       team1: "new-zealand",  team2: "belgium",       score: { team1: 1, team2: 5 }, winner: "belgium", broadcasters: ["Fox","Telemundo"] },

  // ── GROUP H ──────────────────────────────────────────────
  { id: "H1", group: "H", stage: "Group Stage", date: "2026-06-15", time: "18:00", venueId: "miami",           team1: "saudi-arabia", team2: "uruguay",       score: { team1: 1, team2: 1 }, winner: null, broadcasters: ["Fox","Telemundo"] },
  { id: "H2", group: "H", stage: "Group Stage", date: "2026-06-15", time: "12:00", venueId: "atlanta",         team1: "spain",        team2: "cape-verde",    score: { team1: 0, team2: 0 }, winner: null, broadcasters: ["FS1","Universo"] },
  { id: "H3", group: "H", stage: "Group Stage", date: "2026-06-21", time: "12:00", venueId: "atlanta",         team1: "spain",        team2: "saudi-arabia",  score: { team1: 4, team2: 0 }, winner: "spain", broadcasters: ["Fox","Telemundo"] },
  { id: "H4", group: "H", stage: "Group Stage", date: "2026-06-21", time: "18:00", venueId: "miami",           team1: "uruguay",      team2: "cape-verde",    score: { team1: 2, team2: 2 }, winner: null, broadcasters: ["FS1","Universo"] },
  { id: "H5", group: "H", stage: "Group Stage", date: "2026-06-27", time: "20:00", venueId: "houston",         team1: "cape-verde",   team2: "saudi-arabia",  score: { team1: 0, team2: 0 }, winner: null, broadcasters: ["FS1","Universo"] },
  { id: "H6", group: "H", stage: "Group Stage", date: "2026-06-27", time: "20:00", venueId: "guadalajara",     team1: "uruguay",      team2: "spain",         score: { team1: 0, team2: 1 }, winner: "spain", broadcasters: ["Fox","Telemundo"] },

  // ── GROUP I ──────────────────────────────────────────────
  { id: "I1", group: "I", stage: "Group Stage", date: "2026-06-16", time: "15:00", venueId: "east-rutherford", team1: "france",       team2: "senegal",       score: { team1: 3, team2: 1 }, winner: "france", broadcasters: ["Fox","Telemundo"] },
  { id: "I2", group: "I", stage: "Group Stage", date: "2026-06-16", time: "18:00", venueId: "boston",          team1: "iraq",         team2: "norway",        score: { team1: 1, team2: 4 }, winner: "norway", broadcasters: ["FS1","Universo"] },
  { id: "I3", group: "I", stage: "Group Stage", date: "2026-06-22", time: "17:00", venueId: "philadelphia",    team1: "france",       team2: "iraq",          score: { team1: 3, team2: 0 }, winner: "france", broadcasters: ["Fox","Telemundo"] },
  { id: "I4", group: "I", stage: "Group Stage", date: "2026-06-22", time: "20:00", venueId: "east-rutherford", team1: "norway",       team2: "senegal",       score: { team1: 3, team2: 2 }, winner: "norway", broadcasters: ["FS1","Universo"] },
  { id: "I5", group: "I", stage: "Group Stage", date: "2026-06-26", time: "15:00", venueId: "boston",          team1: "norway",       team2: "france",        score: { team1: 1, team2: 4 }, winner: "france", broadcasters: ["Fox","Telemundo"] },
  { id: "I6", group: "I", stage: "Group Stage", date: "2026-06-26", time: "15:00", venueId: "toronto",         team1: "senegal",      team2: "iraq",          score: { team1: 5, team2: 0 }, winner: "senegal", broadcasters: ["FS1","Universo"] },

  // ── GROUP J ──────────────────────────────────────────────
  { id: "J1", group: "J", stage: "Group Stage", date: "2026-06-16", time: "21:00", venueId: "kansas-city",     team1: "argentina",    team2: "algeria",       score: { team1: 3, team2: 0 }, winner: "argentina", broadcasters: ["Fox","Telemundo"] },
  { id: "J2", group: "J", stage: "Group Stage", date: "2026-06-16", time: "00:00", venueId: "san-francisco",   team1: "austria",      team2: "jordan",        score: { team1: 3, team2: 1 }, winner: "austria", broadcasters: ["FS1","Universo"] },
  { id: "J3", group: "J", stage: "Group Stage", date: "2026-06-22", time: "13:00", venueId: "dallas",          team1: "argentina",    team2: "austria",       score: { team1: 2, team2: 0 }, winner: "argentina", broadcasters: ["Fox","Telemundo"] },
  { id: "J4", group: "J", stage: "Group Stage", date: "2026-06-22", time: "23:00", venueId: "san-francisco",   team1: "jordan",       team2: "algeria",       score: { team1: 1, team2: 2 }, winner: "algeria", broadcasters: ["FS1","Universo"] },
  { id: "J5", group: "J", stage: "Group Stage", date: "2026-06-27", time: "22:00", venueId: "kansas-city",     team1: "algeria",      team2: "austria",       score: { team1: 3, team2: 3 }, winner: null, broadcasters: ["FS1","Universo"] },
  { id: "J6", group: "J", stage: "Group Stage", date: "2026-06-27", time: "22:00", venueId: "dallas",          team1: "jordan",       team2: "argentina",     score: { team1: 1, team2: 3 }, winner: "argentina", broadcasters: ["Fox","Telemundo"] },

  // ── GROUP K ──────────────────────────────────────────────
  { id: "K1", group: "K", stage: "Group Stage", date: "2026-06-17", time: "13:00", venueId: "houston",         team1: "portugal",     team2: "dr-congo",      score: { team1: 1, team2: 1 }, winner: null, broadcasters: ["Fox","Telemundo"] },
  { id: "K2", group: "K", stage: "Group Stage", date: "2026-06-17", time: "22:00", venueId: "mexico-city",     team1: "uzbekistan",   team2: "colombia",      score: { team1: 1, team2: 3 }, winner: "colombia", broadcasters: ["FS1","Universo"] },
  { id: "K3", group: "K", stage: "Group Stage", date: "2026-06-23", time: "13:00", venueId: "houston",         team1: "portugal",     team2: "uzbekistan",    score: { team1: 5, team2: 0 }, winner: "portugal", broadcasters: ["Fox","Telemundo"] },
  { id: "K4", group: "K", stage: "Group Stage", date: "2026-06-23", time: "22:00", venueId: "guadalajara",     team1: "colombia",     team2: "dr-congo",      score: { team1: 1, team2: 0 }, winner: "colombia", broadcasters: ["FS1","Universo"] },
  { id: "K5", group: "K", stage: "Group Stage", date: "2026-06-28", time: "19:30", venueId: "miami",           team1: "colombia",     team2: "portugal",      score: { team1: 0, team2: 0 }, winner: null, broadcasters: ["Fox","Telemundo"] },
  { id: "K6", group: "K", stage: "Group Stage", date: "2026-06-28", time: "19:30", venueId: "atlanta",         team1: "dr-congo",     team2: "uzbekistan",    score: { team1: 3, team2: 1 }, winner: "dr-congo", broadcasters: ["FS1","Universo"] },

  // ── GROUP L ──────────────────────────────────────────────
  { id: "L1", group: "L", stage: "Group Stage", date: "2026-06-17", time: "16:00", venueId: "dallas",          team1: "england",      team2: "croatia",       score: { team1: 4, team2: 2 }, winner: "england", broadcasters: ["Fox","Telemundo"] },
  { id: "L2", group: "L", stage: "Group Stage", date: "2026-06-17", time: "19:00", venueId: "toronto",         team1: "ghana",        team2: "panama",        score: { team1: 1, team2: 0 }, winner: "ghana", broadcasters: ["FS1","Universo"] },
  { id: "L3", group: "L", stage: "Group Stage", date: "2026-06-22", time: "16:00", venueId: "boston",          team1: "england",      team2: "ghana",         score: { team1: 0, team2: 0 }, winner: null, broadcasters: ["Fox","Telemundo"] },
  { id: "L4", group: "L", stage: "Group Stage", date: "2026-06-22", time: "19:00", venueId: "toronto",         team1: "panama",       team2: "croatia",       score: { team1: 0, team2: 1 }, winner: "croatia", broadcasters: ["FS1","Universo"] },
  { id: "L5", group: "L", stage: "Group Stage", date: "2026-06-27", time: "17:00", venueId: "east-rutherford", team1: "panama",       team2: "england",       score: { team1: 0, team2: 2 }, winner: "england", broadcasters: ["Fox","Telemundo"] },
  { id: "L6", group: "L", stage: "Group Stage", date: "2026-06-27", time: "17:00", venueId: "philadelphia",    team1: "croatia",      team2: "ghana",         score: { team1: 2, team2: 1 }, winner: "croatia", broadcasters: ["FS1","Universo"] },

  // ── KNOCKOUT STAGE (real results) ──────────────────────────
  { id: "R32-73", group: null, stage: "Round of 32", date: "2026-06-28", time: "15:00", venueId: "los-angeles", team1: "south-africa", team2: "canada", score: { team1: 0, team2: 1 }, winner: "canada", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R32-74", group: null, stage: "Round of 32", date: "2026-06-29", time: "13:00", venueId: "boston", team1: "germany", team2: "paraguay", score: { team1: 1, team2: 1 }, winner: "paraguay", extraTime: true, penalties: { team1: 3, team2: 4 }, broadcasters: ["Fox","Telemundo"] },
  { id: "R32-75", group: null, stage: "Round of 32", date: "2026-06-29", time: "16:30", venueId: "monterrey", team1: "netherlands", team2: "morocco", score: { team1: 1, team2: 1 }, winner: "morocco", extraTime: true, penalties: { team1: 2, team2: 3 }, broadcasters: ["Fox","Telemundo"] },
  { id: "R32-76", group: null, stage: "Round of 32", date: "2026-06-29", time: "21:00", venueId: "houston", team1: "brazil", team2: "japan", score: { team1: 2, team2: 1 }, winner: "brazil", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R32-77", group: null, stage: "Round of 32", date: "2026-06-30", time: "13:00", venueId: "east-rutherford", team1: "france", team2: "sweden", score: { team1: 3, team2: 0 }, winner: "france", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R32-78", group: null, stage: "Round of 32", date: "2026-06-30", time: "17:00", venueId: "dallas", team1: "ivory-coast", team2: "norway", score: { team1: 1, team2: 2 }, winner: "norway", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R32-79", group: null, stage: "Round of 32", date: "2026-06-30", time: "21:00", venueId: "mexico-city", team1: "mexico", team2: "ecuador", score: { team1: 2, team2: 0 }, winner: "mexico", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R32-80", group: null, stage: "Round of 32", date: "2026-07-01", time: "12:00", venueId: "atlanta", team1: "england", team2: "dr-congo", score: { team1: 2, team2: 1 }, winner: "england", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R32-81", group: null, stage: "Round of 32", date: "2026-07-01", time: "16:00", venueId: "san-francisco", team1: "usa", team2: "bosnia", score: { team1: 2, team2: 0 }, winner: "usa", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R32-82", group: null, stage: "Round of 32", date: "2026-07-01", time: "20:00", venueId: "seattle", team1: "belgium", team2: "senegal", score: { team1: 3, team2: 2 }, winner: "belgium", extraTime: true, broadcasters: ["Fox","Telemundo"] },
  { id: "R32-83", group: null, stage: "Round of 32", date: "2026-07-02", time: "15:00", venueId: "toronto", team1: "portugal", team2: "croatia", score: { team1: 2, team2: 1 }, winner: "portugal", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R32-84", group: null, stage: "Round of 32", date: "2026-07-02", time: "19:00", venueId: "los-angeles", team1: "spain", team2: "austria", score: { team1: 3, team2: 0 }, winner: "spain", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R32-85", group: null, stage: "Round of 32", date: "2026-07-02", time: "23:00", venueId: "vancouver", team1: "switzerland", team2: "algeria", score: { team1: 2, team2: 0 }, winner: "switzerland", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R32-86", group: null, stage: "Round of 32", date: "2026-07-03", time: "14:00", venueId: "miami", team1: "argentina", team2: "cape-verde", score: { team1: 3, team2: 2 }, winner: "argentina", extraTime: true, broadcasters: ["Fox","Telemundo"] },
  { id: "R32-87", group: null, stage: "Round of 32", date: "2026-07-03", time: "18:00", venueId: "kansas-city", team1: "colombia", team2: "ghana", score: { team1: 1, team2: 0 }, winner: "colombia", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R32-88", group: null, stage: "Round of 32", date: "2026-07-03", time: "21:30", venueId: "dallas", team1: "australia", team2: "egypt", score: { team1: 1, team2: 1 }, winner: "egypt", extraTime: false, penalties: { team1: 2, team2: 4 }, broadcasters: ["Fox","Telemundo"] },
  { id: "R16-89", group: null, stage: "Round of 16", date: "2026-07-04", time: "13:00", venueId: "philadelphia", team1: "paraguay", team2: "france", score: { team1: 0, team2: 1 }, winner: "france", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R16-90", group: null, stage: "Round of 16", date: "2026-07-04", time: "17:00", venueId: "houston", team1: "canada", team2: "morocco", score: { team1: 0, team2: 3 }, winner: "morocco", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R16-91", group: null, stage: "Round of 16", date: "2026-07-05", time: "16:00", venueId: "east-rutherford", team1: "brazil", team2: "norway", score: { team1: 1, team2: 2 }, winner: "norway", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R16-92", group: null, stage: "Round of 16", date: "2026-07-05", time: "20:00", venueId: "mexico-city", team1: "mexico", team2: "england", score: { team1: 2, team2: 3 }, winner: "england", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R16-93", group: null, stage: "Round of 16", date: "2026-07-06", time: "15:00", venueId: "dallas", team1: "portugal", team2: "spain", score: { team1: 0, team2: 1 }, winner: "spain", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R16-94", group: null, stage: "Round of 16", date: "2026-07-06", time: "20:00", venueId: "seattle", team1: "usa", team2: "belgium", score: { team1: 1, team2: 4 }, winner: "belgium", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R16-95", group: null, stage: "Round of 16", date: "2026-07-07", time: "12:00", venueId: "atlanta", team1: "argentina", team2: "egypt", score: { team1: 3, team2: 2 }, winner: "argentina", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "R16-96", group: null, stage: "Round of 16", date: "2026-07-07", time: "16:00", venueId: "vancouver", team1: "switzerland", team2: "colombia", score: { team1: 0, team2: 0 }, winner: "switzerland", extraTime: false, penalties: { team1: 4, team2: 3 }, broadcasters: ["Fox","Telemundo"] },
  { id: "QF-97", group: null, stage: "Quarterfinals", date: "2026-07-09", time: "16:00", venueId: "boston", team1: "france", team2: "morocco", score: { team1: 2, team2: 0 }, winner: "france", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "QF-98", group: null, stage: "Quarterfinals", date: "2026-07-10", time: "15:00", venueId: "los-angeles", team1: "spain", team2: "belgium", score: { team1: 2, team2: 1 }, winner: "spain", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "QF-99", group: null, stage: "Quarterfinals", date: "2026-07-11", time: "17:00", venueId: "miami", team1: "norway", team2: "england", score: { team1: 1, team2: 2 }, winner: "england", extraTime: true, broadcasters: ["Fox","Telemundo"] },
  { id: "QF-100", group: null, stage: "Quarterfinals", date: "2026-07-11", time: "21:00", venueId: "kansas-city", team1: "argentina", team2: "switzerland", score: { team1: 3, team2: 1 }, winner: "argentina", extraTime: true, broadcasters: ["Fox","Telemundo"] },
  { id: "SF-101", group: null, stage: "Semifinals", date: "2026-07-14", time: "15:00", venueId: "dallas", team1: "france", team2: "spain", score: { team1: 0, team2: 2 }, winner: "spain", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "SF-102", group: null, stage: "Semifinals", date: "2026-07-15", time: "15:00", venueId: "atlanta", team1: "england", team2: "argentina", score: { team1: 1, team2: 2 }, winner: "argentina", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "3P-103", group: null, stage: "Third Place Play-off", date: "2026-07-18", time: "17:00", venueId: "miami", team1: "france", team2: "england", score: { team1: 4, team2: 6 }, winner: "england", extraTime: false, broadcasters: ["Fox","Telemundo"] },
  { id: "F-104", group: null, stage: "Final", date: "2026-07-19", time: "15:00", venueId: "east-rutherford", team1: "spain", team2: "argentina", score: { team1: 1, team2: 0 }, winner: "spain", extraTime: true, broadcasters: ["Fox","Telemundo"] },
];


// ============================================================
// TEAMS
// All 48 teams with training camp locations and match references.
// Training camp coordinates are approximate city-level coordinates.
// ============================================================
const teams = [
  // ── GROUP A ──
  {
    id: "mexico", name: "Mexico", group: "A", flagEmoji: "🇲🇽",
    trainingCamp: { name: "Centro de Alto Rendimiento (CAR)", city: "Mexico City, Mexico", lat: 19.4326, lng: -99.1332 },
    matchIds: ["A1","A4","A5","R32-79","R16-92"]
  },
  {
    id: "south-africa", name: "South Africa", group: "A", flagEmoji: "🇿🇦",
    trainingCamp: { name: "CF Pachuca - Universidad Del Futbol", city: "Pachuca, Mexico", lat: 20.1011, lng: -98.7591 },
    matchIds: ["A1","A3","A6","R32-73"]
  },
  {
    id: "south-korea", name: "South Korea", group: "A", flagEmoji: "🇰🇷",
    trainingCamp: { name: "Chivas Verde Valle", city: "Guadalajara, Mexico", lat: 20.6597, lng: -103.3496 },
    matchIds: ["A2","A4","A6"]
  },
  {
    id: "czech-rep", name: "Czech Republic", group: "A", flagEmoji: "🇨🇿",
    trainingCamp: { name: "Mansfield Multipurpose Stadium", city: "Dallas, TX", lat: 32.5791, lng: -97.1497 },
    matchIds: ["A2","A3","A5"]
  },

  // ── GROUP B ──
  {
    id: "canada", name: "Canada", group: "B", flagEmoji: "🇨🇦",
    trainingCamp: { name: "National Soccer Development Centre", city: "Vancouver, BC", lat: 49.2827, lng: -123.1207 },
    matchIds: ["B1","B4","B5","R32-73","R16-90"]
  },
  {
    id: "bosnia", name: "Bosnia & Herz.", group: "B", flagEmoji: "🇧🇦",
    trainingCamp: { name: "RSL Stadium", city: "Sandy, UT", lat: 40.5753, lng: -111.8989 },
    matchIds: ["B1","B3","B6","R32-81"]
  },
  {
    id: "qatar", name: "Qatar", group: "B", flagEmoji: "🇶🇦",
    trainingCamp: { name: "Westmont College", city: "Santa Barbara, CA", lat: 34.4558, lng: -119.6780 },
    matchIds: ["B2","B4","B6"]
  },
  {
    id: "switzerland", name: "Switzerland", group: "B", flagEmoji: "🇨🇭",
    trainingCamp: { name: "SDJA", city: "San Diego, CA", lat: 32.7157, lng: -117.1611 },
    matchIds: ["B2","B3","B5","R32-85","R16-96","QF-100"]
  },

  // ── GROUP C ──
  {
    id: "brazil", name: "Brazil", group: "C", flagEmoji: "🇧🇷",
    trainingCamp: { name: "Columbia Park Training Facility", city: "Morristown, NJ", lat: 40.7968, lng: -74.4815 },
    matchIds: ["C1","C3","C5","R32-76","R16-91"]
  },
  {
    id: "morocco", name: "Morocco", group: "C", flagEmoji: "🇲🇦",
    trainingCamp: { name: "The Pingry School", city: "Bernards Township, NJ", lat: 40.6568, lng: -74.6299 },
    matchIds: ["C1","C4","C6","R32-75","R16-90","QF-97"]
  },
  {
    id: "haiti", name: "Haiti", group: "C", flagEmoji: "🇭🇹",
    trainingCamp: { name: "Stockton University", city: "Galloway, NJ", lat: 39.5290, lng: -74.5141 },
    matchIds: ["C2","C3","C6"]
  },
  {
    id: "scotland", name: "Scotland", group: "C", flagEmoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    trainingCamp: { name: "Charlotte FC", city: "Charlotte, NC", lat: 35.2271, lng: -80.8431 },
    matchIds: ["C2","C4","C5"]
  },

  // ── GROUP D ──
  {
    id: "usa", name: "United States", group: "D", flagEmoji: "🇺🇸",
    trainingCamp: { name: "Great Park Sports Complex", city: "Irvine, CA", lat: 33.6839, lng: -117.7947 },
    matchIds: ["D1","D4","D5","R32-81","R16-94"]
  },
  {
    id: "paraguay", name: "Paraguay", group: "D", flagEmoji: "🇵🇾",
    trainingCamp: { name: "Spartan Soccer Complex", city: "San Jose, CA", lat: 37.3382, lng: -121.8863 },
    matchIds: ["D1","D3","D6","R32-74","R16-89"]
  },
  {
    id: "australia", name: "Australia", group: "D", flagEmoji: "🇦🇺",
    trainingCamp: { name: "Oakland Roots/Soul Training Facility", city: "Oakland, CA", lat: 37.8044, lng: -122.2712 },
    matchIds: ["D2","D4","D6","R32-88"]
  },
  {
    id: "turkey", name: "Türkiye", group: "D", flagEmoji: "🇹🇷",
    trainingCamp: { name: "Arizona Athletic Grounds", city: "Mesa, AZ", lat: 33.4152, lng: -111.8315 },
    matchIds: ["D2","D3","D5"]
  },

  // ── GROUP E ──
  {
    id: "germany", name: "Germany", group: "E", flagEmoji: "🇩🇪",
    trainingCamp: { name: "Wake Forest University", city: "Winston-Salem, NC", lat: 36.1340, lng: -80.2784 },
    matchIds: ["E1","E3","E6","R32-74"]
  },
  {
    id: "curacao", name: "Curaçao", group: "E", flagEmoji: "🇨🇼",
    trainingCamp: { name: "Florida Atlantic University", city: "Boca Raton, FL", lat: 26.3683, lng: -80.1035 },
    matchIds: ["E1","E4","E5"]
  },
  {
    id: "ivory-coast", name: "Ivory Coast", group: "E", flagEmoji: "🇨🇮",
    trainingCamp: { name: "Philadelphia Union Training Facility", city: "Chester, PA", lat: 39.8493, lng: -75.3557 },
    matchIds: ["E2","E3","E5","R32-78"]
  },
  {
    id: "ecuador", name: "Ecuador", group: "E", flagEmoji: "🇪🇨",
    trainingCamp: { name: "Columbus Crew Performance Centre", city: "Columbus, OH", lat: 39.9612, lng: -82.9988 },
    matchIds: ["E2","E4","E6","R32-79"]
  },

  // ── GROUP F ──
  {
    id: "netherlands", name: "Netherlands", group: "F", flagEmoji: "🇳🇱",
    trainingCamp: { name: "KC Current Training Facility", city: "Kansas City, MO", lat: 39.1155, lng: -94.6268 },
    matchIds: ["F1","F3","F6","R32-75"]
  },
  {
    id: "japan", name: "Japan", group: "F", flagEmoji: "🇯🇵",
    trainingCamp: { name: "Nashville SC Training Facility", city: "Nashville, TN", lat: 36.1627, lng: -86.7816 },
    matchIds: ["F1","F4","F5","R32-76"]
  },
  {
    id: "sweden", name: "Sweden", group: "F", flagEmoji: "🇸🇪",
    trainingCamp: { name: "FC Dallas Stadium (Toyota Stadium)", city: "Frisco, TX", lat: 33.1548, lng: -96.8348 },
    matchIds: ["F2","F3","F5","R32-77"]
  },
  {
    id: "tunisia", name: "Tunisia", group: "F", flagEmoji: "🇹🇳",
    trainingCamp: { name: "Rayados Training Centre", city: "Monterrey, Mexico", lat: 25.6866, lng: -100.3161 },
    matchIds: ["F2","F4","F6"]
  },

  // ── GROUP G ──
  {
    id: "belgium", name: "Belgium", group: "G", flagEmoji: "🇧🇪",
    trainingCamp: { name: "Seattle Sounders FC Performance Centre", city: "Renton, WA", lat: 47.4799, lng: -122.2171 },
    matchIds: ["G1","G3","G6","R32-82","R16-94","QF-98"]
  },
  {
    id: "egypt", name: "Egypt", group: "G", flagEmoji: "🇪🇬",
    trainingCamp: { name: "Gonzaga University", city: "Spokane, WA", lat: 47.6588, lng: -117.4260 },
    matchIds: ["G1","G4","G5","R32-88","R16-95"]
  },
  {
    id: "iran", name: "Iran", group: "G", flagEmoji: "🇮🇷",
    trainingCamp: { name: "Centro Xoloitzcuintle", city: "Tijuana, Mexico", lat: 32.5149, lng: -117.0382 },
    matchIds: ["G2","G3","G5"]
  },
  {
    id: "new-zealand", name: "New Zealand", group: "G", flagEmoji: "🇳🇿",
    trainingCamp: { name: "University of San Diego, Torero Stadium", city: "San Diego, CA", lat: 32.7707, lng: -117.1917 },
    matchIds: ["G2","G4","G6"]
  },

  // ── GROUP H ──
  {
    id: "spain", name: "Spain", group: "H", flagEmoji: "🇪🇸",
    trainingCamp: { name: "Baylor School", city: "Chattanooga, TN", lat: 35.0456, lng: -85.3097 },
    matchIds: ["H2","H3","H6","R32-84","R16-93","QF-98","SF-101","F-104"]
  },
  {
    id: "uruguay", name: "Uruguay", group: "H", flagEmoji: "🇺🇾",
    trainingCamp: { name: "Mayakoba Training Centre", city: "Playa del Carmen, Mexico", lat: 20.6296, lng: -87.0739 },
    matchIds: ["H1","H4","H6"]
  },
  {
    id: "saudi-arabia", name: "Saudi Arabia", group: "H", flagEmoji: "🇸🇦",
    trainingCamp: { name: "Austin FC Stadium", city: "Austin, TX", lat: 30.3878, lng: -97.7192 },
    matchIds: ["H1","H3","H5"]
  },
  {
    id: "cape-verde", name: "Cape Verde", group: "H", flagEmoji: "🇨🇻",
    trainingCamp: { name: "Waters Sportsplex", city: "Tampa, FL", lat: 27.9506, lng: -82.4572 },
    matchIds: ["H2","H4","H5","R32-86"]
  },

  // ── GROUP I ──
  {
    id: "france", name: "France", group: "I", flagEmoji: "🇫🇷",
    trainingCamp: { name: "Bentley University", city: "Boston, MA", lat: 42.3919, lng: -71.2209 },
    matchIds: ["I1","I3","I5","R32-77","R16-89","QF-97","SF-101","3P-103"]
  },
  {
    id: "senegal", name: "Senegal", group: "I", flagEmoji: "🇸🇳",
    trainingCamp: { name: "Rutgers University", city: "New Brunswick, NJ", lat: 40.5018, lng: -74.4479 },
    matchIds: ["I1","I4","I6","R32-82"]
  },
  {
    id: "iraq", name: "Iraq", group: "I", flagEmoji: "🇮🇶",
    trainingCamp: { name: "The Greenbrier Sports Performance Centre", city: "White Sulphur Springs, WV", lat: 37.7946, lng: -80.3012 },
    matchIds: ["I2","I3","I6"]
  },
  {
    id: "norway", name: "Norway", group: "I", flagEmoji: "🇳🇴",
    trainingCamp: { name: "UNC Greensboro", city: "Greensboro, NC", lat: 36.0726, lng: -79.7920 },
    matchIds: ["I2","I4","I5","R32-78","R16-91","QF-99"]
  },

  // ── GROUP J ──
  {
    id: "argentina", name: "Argentina", group: "J", flagEmoji: "🇦🇷",
    trainingCamp: { name: "Sporting KC Training Centre", city: "Kansas City, KS", lat: 39.1155, lng: -94.7700 },
    matchIds: ["J1","J3","J6","R32-86","R16-95","QF-100","SF-102","F-104"]
  },
  {
    id: "algeria", name: "Algeria", group: "J", flagEmoji: "🇩🇿",
    trainingCamp: { name: "University of Kansas", city: "Lawrence, KS", lat: 38.9717, lng: -95.2353 },
    matchIds: ["J1","J4","J5","R32-85"]
  },
  {
    id: "austria", name: "Austria", group: "J", flagEmoji: "🇦🇹",
    trainingCamp: { name: "UC Santa Barbara, Harder Stadium", city: "Santa Barbara, CA", lat: 34.4140, lng: -119.8489 },
    matchIds: ["J2","J3","J5","R32-84"]
  },
  {
    id: "jordan", name: "Jordan", group: "J", flagEmoji: "🇯🇴",
    trainingCamp: { name: "University of Portland", city: "Portland, OR", lat: 45.5406, lng: -122.7263 },
    matchIds: ["J2","J4","J6"]
  },

  // ── GROUP K ──
  {
    id: "portugal", name: "Portugal", group: "K", flagEmoji: "🇵🇹",
    trainingCamp: { name: "Gardens North County District Park", city: "Palm Beach Gardens, FL", lat: 26.8231, lng: -80.1373 },
    matchIds: ["K1","K3","K5","R32-83","R16-93"]
  },
  {
    id: "dr-congo", name: "DR Congo", group: "K", flagEmoji: "🇨🇩",
    trainingCamp: { name: "Houston Training Centre (SaberCats Stadium)", city: "Houston, TX", lat: 29.8174, lng: -95.4219 },
    matchIds: ["K1","K4","K6","R32-80"]
  },
  {
    id: "uzbekistan", name: "Uzbekistan", group: "K", flagEmoji: "🇺🇿",
    trainingCamp: { name: "Atlanta United Training Centre", city: "Atlanta, GA", lat: 33.7490, lng: -84.3880 },
    matchIds: ["K2","K3","K6"]
  },
  {
    id: "colombia", name: "Colombia", group: "K", flagEmoji: "🇨🇴",
    trainingCamp: { name: "Academia Atlas FC", city: "Guadalajara, Mexico", lat: 20.7597, lng: -103.4897 },
    matchIds: ["K2","K4","K5","R32-87","R16-96"]
  },

  // ── GROUP L ──
  {
    id: "england", name: "England", group: "L", flagEmoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    trainingCamp: { name: "Swope Soccer Village", city: "Kansas City, MO", lat: 38.9907, lng: -94.5261 },
    matchIds: ["L1","L3","L5","R32-80","R16-92","QF-99","SF-102","3P-103"]
  },
  {
    id: "croatia", name: "Croatia", group: "L", flagEmoji: "🇭🇷",
    trainingCamp: { name: "Episcopal High School Sports Complex", city: "Alexandria, VA", lat: 38.8048, lng: -77.0469 },
    matchIds: ["L1","L4","L6","R32-83"]
  },
  {
    id: "ghana", name: "Ghana", group: "L", flagEmoji: "🇬🇭",
    trainingCamp: { name: "Bryant University", city: "Providence, RI", lat: 41.8240, lng: -71.4128 },
    matchIds: ["L2","L3","L6","R32-87"]
  },
  {
    id: "panama", name: "Panama", group: "L", flagEmoji: "🇵🇦",
    trainingCamp: { name: "Nottawasaga Training Site", city: "New Tecumseth, Ontario", lat: 44.0886, lng: -79.7599 },
    matchIds: ["L2","L4","L5"]
  },
];


// ============================================================
// KNOCKOUT STAGE results now live inline in the `matches` array above.
// Champion: Spain (F-104). Runner-up: Argentina. 3rd: England. 4th: France.
const championId = "spain";

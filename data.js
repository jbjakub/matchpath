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
  { id: "A1", group: "A", stage: "Group Stage", date: "2026-06-11", time: "15:00", venueId: "mexico-city",     team1: "mexico",       team2: "south-africa",  broadcasters: ["Fox","Telemundo"] },
  { id: "A2", group: "A", stage: "Group Stage", date: "2026-06-11", time: "22:00", venueId: "guadalajara",     team1: "south-korea",  team2: "czech-rep",     broadcasters: ["FS1","Universo"] },
  { id: "A3", group: "A", stage: "Group Stage", date: "2026-06-18", time: "12:00", venueId: "atlanta",         team1: "czech-rep",    team2: "south-africa",  broadcasters: ["FS1","Universo"] },
  { id: "A4", group: "A", stage: "Group Stage", date: "2026-06-18", time: "21:00", venueId: "guadalajara",     team1: "mexico",       team2: "south-korea",   broadcasters: ["Fox","Telemundo"] },
  { id: "A5", group: "A", stage: "Group Stage", date: "2026-06-24", time: "21:00", venueId: "mexico-city",     team1: "czech-rep",    team2: "mexico",        broadcasters: ["Fox","Telemundo"] },
  { id: "A6", group: "A", stage: "Group Stage", date: "2026-06-24", time: "21:00", venueId: "monterrey",       team1: "south-africa", team2: "south-korea",   broadcasters: ["FS1","Universo"] },

  // ── GROUP B ──────────────────────────────────────────────
  { id: "B1", group: "B", stage: "Group Stage", date: "2026-06-12", time: "15:00", venueId: "toronto",         team1: "canada",       team2: "bosnia",        broadcasters: ["Fox","Telemundo"] },
  { id: "B2", group: "B", stage: "Group Stage", date: "2026-06-13", time: "15:00", venueId: "san-francisco",   team1: "qatar",        team2: "switzerland",   broadcasters: ["FS1","Universo"] },
  { id: "B3", group: "B", stage: "Group Stage", date: "2026-06-18", time: "15:00", venueId: "los-angeles",     team1: "switzerland",  team2: "bosnia",        broadcasters: ["FS1","Universo"] },
  { id: "B4", group: "B", stage: "Group Stage", date: "2026-06-18", time: "18:00", venueId: "vancouver",       team1: "canada",       team2: "qatar",         broadcasters: ["Fox","Telemundo"] },
  { id: "B5", group: "B", stage: "Group Stage", date: "2026-06-24", time: "15:00", venueId: "vancouver",       team1: "switzerland",  team2: "canada",        broadcasters: ["Fox","Telemundo"] },
  { id: "B6", group: "B", stage: "Group Stage", date: "2026-06-24", time: "15:00", venueId: "seattle",         team1: "bosnia",       team2: "qatar",         broadcasters: ["FS1","Universo"] },

  // ── GROUP C ──────────────────────────────────────────────
  { id: "C1", group: "C", stage: "Group Stage", date: "2026-06-13", time: "18:00", venueId: "east-rutherford", team1: "brazil",       team2: "morocco",       broadcasters: ["Fox","Telemundo"] },
  { id: "C2", group: "C", stage: "Group Stage", date: "2026-06-13", time: "21:00", venueId: "boston",          team1: "haiti",        team2: "scotland",      broadcasters: ["FS1","Universo"] },
  { id: "C3", group: "C", stage: "Group Stage", date: "2026-06-19", time: "20:30", venueId: "philadelphia",    team1: "brazil",       team2: "haiti",         broadcasters: ["Fox","Telemundo"] },
  { id: "C4", group: "C", stage: "Group Stage", date: "2026-06-19", time: "18:00", venueId: "boston",          team1: "scotland",     team2: "morocco",       broadcasters: ["FS1","Universo"] },
  { id: "C5", group: "C", stage: "Group Stage", date: "2026-06-24", time: "18:00", venueId: "miami",           team1: "scotland",     team2: "brazil",        broadcasters: ["Fox","Telemundo"] },
  { id: "C6", group: "C", stage: "Group Stage", date: "2026-06-24", time: "18:00", venueId: "atlanta",         team1: "morocco",      team2: "haiti",         broadcasters: ["FS1","Universo"] },

  // ── GROUP D ──────────────────────────────────────────────
  { id: "D1", group: "D", stage: "Group Stage", date: "2026-06-12", time: "21:00", venueId: "los-angeles",     team1: "usa",          team2: "paraguay",      broadcasters: ["Fox","Telemundo"] },
  { id: "D2", group: "D", stage: "Group Stage", date: "2026-06-13", time: "00:00", venueId: "vancouver",       team1: "australia",    team2: "turkey",        broadcasters: ["FS1","Universo"] },
  { id: "D3", group: "D", stage: "Group Stage", date: "2026-06-19", time: "23:00", venueId: "san-francisco",   team1: "turkey",       team2: "paraguay",      broadcasters: ["FS1","Universo"] },
  { id: "D4", group: "D", stage: "Group Stage", date: "2026-06-19", time: "15:00", venueId: "seattle",         team1: "usa",          team2: "australia",     broadcasters: ["Fox","Telemundo"] },
  { id: "D5", group: "D", stage: "Group Stage", date: "2026-06-25", time: "22:00", venueId: "los-angeles",     team1: "turkey",       team2: "usa",           broadcasters: ["Fox","Telemundo"] },
  { id: "D6", group: "D", stage: "Group Stage", date: "2026-06-25", time: "22:00", venueId: "san-francisco",   team1: "paraguay",     team2: "australia",     broadcasters: ["FS1","Universo"] },

  // ── GROUP E ──────────────────────────────────────────────
  { id: "E1", group: "E", stage: "Group Stage", date: "2026-06-14", time: "13:00", venueId: "houston",         team1: "germany",      team2: "curacao",       broadcasters: ["Fox","Telemundo"] },
  { id: "E2", group: "E", stage: "Group Stage", date: "2026-06-14", time: "19:00", venueId: "philadelphia",    team1: "ivory-coast",  team2: "ecuador",       broadcasters: ["FS1","Universo"] },
  { id: "E3", group: "E", stage: "Group Stage", date: "2026-06-20", time: "16:00", venueId: "toronto",         team1: "germany",      team2: "ivory-coast",   broadcasters: ["Fox","Telemundo"] },
  { id: "E4", group: "E", stage: "Group Stage", date: "2026-06-20", time: "20:00", venueId: "kansas-city",     team1: "ecuador",      team2: "curacao",       broadcasters: ["FS1","Universo"] },
  { id: "E5", group: "E", stage: "Group Stage", date: "2026-06-25", time: "16:00", venueId: "philadelphia",    team1: "curacao",      team2: "ivory-coast",   broadcasters: ["FS1","Universo"] },
  { id: "E6", group: "E", stage: "Group Stage", date: "2026-06-25", time: "16:00", venueId: "east-rutherford", team1: "ecuador",      team2: "germany",       broadcasters: ["Fox","Telemundo"] },

  // ── GROUP F ──────────────────────────────────────────────
  { id: "F1", group: "F", stage: "Group Stage", date: "2026-06-14", time: "16:00", venueId: "dallas",          team1: "netherlands",  team2: "japan",         broadcasters: ["Fox","Telemundo"] },
  { id: "F2", group: "F", stage: "Group Stage", date: "2026-06-14", time: "22:00", venueId: "monterrey",       team1: "sweden",       team2: "tunisia",       broadcasters: ["FS1","Universo"] },
  { id: "F3", group: "F", stage: "Group Stage", date: "2026-06-20", time: "13:00", venueId: "houston",         team1: "netherlands",  team2: "sweden",        broadcasters: ["Fox","Telemundo"] },
  { id: "F4", group: "F", stage: "Group Stage", date: "2026-06-20", time: "00:00", venueId: "monterrey",       team1: "tunisia",      team2: "japan",         broadcasters: ["FS1","Universo"] },
  { id: "F5", group: "F", stage: "Group Stage", date: "2026-06-25", time: "19:00", venueId: "dallas",          team1: "japan",        team2: "sweden",        broadcasters: ["Fox","Telemundo"] },
  { id: "F6", group: "F", stage: "Group Stage", date: "2026-06-25", time: "19:00", venueId: "kansas-city",     team1: "tunisia",      team2: "netherlands",   broadcasters: ["FS1","Universo"] },

  // ── GROUP G ──────────────────────────────────────────────
  { id: "G1", group: "G", stage: "Group Stage", date: "2026-06-15", time: "15:00", venueId: "seattle",         team1: "belgium",      team2: "egypt",         broadcasters: ["Fox","Telemundo"] },
  { id: "G2", group: "G", stage: "Group Stage", date: "2026-06-15", time: "21:00", venueId: "los-angeles",     team1: "iran",         team2: "new-zealand",   broadcasters: ["FS1","Universo"] },
  { id: "G3", group: "G", stage: "Group Stage", date: "2026-06-21", time: "15:00", venueId: "los-angeles",     team1: "belgium",      team2: "iran",          broadcasters: ["Fox","Telemundo"] },
  { id: "G4", group: "G", stage: "Group Stage", date: "2026-06-21", time: "21:00", venueId: "vancouver",       team1: "new-zealand",  team2: "egypt",         broadcasters: ["FS1","Universo"] },
  { id: "G5", group: "G", stage: "Group Stage", date: "2026-06-26", time: "23:00", venueId: "seattle",         team1: "egypt",        team2: "iran",          broadcasters: ["FS1","Universo"] },
  { id: "G6", group: "G", stage: "Group Stage", date: "2026-06-26", time: "23:00", venueId: "vancouver",       team1: "new-zealand",  team2: "belgium",       broadcasters: ["Fox","Telemundo"] },

  // ── GROUP H ──────────────────────────────────────────────
  { id: "H1", group: "H", stage: "Group Stage", date: "2026-06-15", time: "18:00", venueId: "miami",           team1: "saudi-arabia", team2: "uruguay",       broadcasters: ["Fox","Telemundo"] },
  { id: "H2", group: "H", stage: "Group Stage", date: "2026-06-15", time: "12:00", venueId: "atlanta",         team1: "spain",        team2: "cape-verde",    broadcasters: ["FS1","Universo"] },
  { id: "H3", group: "H", stage: "Group Stage", date: "2026-06-21", time: "12:00", venueId: "atlanta",         team1: "spain",        team2: "saudi-arabia",  broadcasters: ["Fox","Telemundo"] },
  { id: "H4", group: "H", stage: "Group Stage", date: "2026-06-21", time: "18:00", venueId: "miami",           team1: "uruguay",      team2: "cape-verde",    broadcasters: ["FS1","Universo"] },
  { id: "H5", group: "H", stage: "Group Stage", date: "2026-06-27", time: "20:00", venueId: "houston",         team1: "cape-verde",   team2: "saudi-arabia",  broadcasters: ["FS1","Universo"] },
  { id: "H6", group: "H", stage: "Group Stage", date: "2026-06-27", time: "20:00", venueId: "guadalajara",     team1: "uruguay",      team2: "spain",         broadcasters: ["Fox","Telemundo"] },

  // ── GROUP I ──────────────────────────────────────────────
  { id: "I1", group: "I", stage: "Group Stage", date: "2026-06-16", time: "15:00", venueId: "east-rutherford", team1: "france",       team2: "senegal",       broadcasters: ["Fox","Telemundo"] },
  { id: "I2", group: "I", stage: "Group Stage", date: "2026-06-16", time: "18:00", venueId: "boston",          team1: "iraq",         team2: "norway",        broadcasters: ["FS1","Universo"] },
  { id: "I3", group: "I", stage: "Group Stage", date: "2026-06-22", time: "17:00", venueId: "philadelphia",    team1: "france",       team2: "iraq",          broadcasters: ["Fox","Telemundo"] },
  { id: "I4", group: "I", stage: "Group Stage", date: "2026-06-22", time: "20:00", venueId: "east-rutherford", team1: "norway",       team2: "senegal",       broadcasters: ["FS1","Universo"] },
  { id: "I5", group: "I", stage: "Group Stage", date: "2026-06-26", time: "15:00", venueId: "boston",          team1: "norway",       team2: "france",        broadcasters: ["Fox","Telemundo"] },
  { id: "I6", group: "I", stage: "Group Stage", date: "2026-06-26", time: "15:00", venueId: "toronto",         team1: "senegal",      team2: "iraq",          broadcasters: ["FS1","Universo"] },

  // ── GROUP J ──────────────────────────────────────────────
  { id: "J1", group: "J", stage: "Group Stage", date: "2026-06-16", time: "21:00", venueId: "kansas-city",     team1: "argentina",    team2: "algeria",       broadcasters: ["Fox","Telemundo"] },
  { id: "J2", group: "J", stage: "Group Stage", date: "2026-06-16", time: "00:00", venueId: "san-francisco",   team1: "austria",      team2: "jordan",        broadcasters: ["FS1","Universo"] },
  { id: "J3", group: "J", stage: "Group Stage", date: "2026-06-22", time: "13:00", venueId: "dallas",          team1: "argentina",    team2: "austria",       broadcasters: ["Fox","Telemundo"] },
  { id: "J4", group: "J", stage: "Group Stage", date: "2026-06-22", time: "23:00", venueId: "san-francisco",   team1: "jordan",       team2: "algeria",       broadcasters: ["FS1","Universo"] },
  { id: "J5", group: "J", stage: "Group Stage", date: "2026-06-27", time: "22:00", venueId: "kansas-city",     team1: "algeria",      team2: "austria",       broadcasters: ["FS1","Universo"] },
  { id: "J6", group: "J", stage: "Group Stage", date: "2026-06-27", time: "22:00", venueId: "dallas",          team1: "jordan",       team2: "argentina",     broadcasters: ["Fox","Telemundo"] },

  // ── GROUP K ──────────────────────────────────────────────
  { id: "K1", group: "K", stage: "Group Stage", date: "2026-06-17", time: "13:00", venueId: "houston",         team1: "portugal",     team2: "dr-congo",      broadcasters: ["Fox","Telemundo"] },
  { id: "K2", group: "K", stage: "Group Stage", date: "2026-06-17", time: "22:00", venueId: "mexico-city",     team1: "uzbekistan",   team2: "colombia",      broadcasters: ["FS1","Universo"] },
  { id: "K3", group: "K", stage: "Group Stage", date: "2026-06-23", time: "13:00", venueId: "houston",         team1: "portugal",     team2: "uzbekistan",    broadcasters: ["Fox","Telemundo"] },
  { id: "K4", group: "K", stage: "Group Stage", date: "2026-06-23", time: "22:00", venueId: "guadalajara",     team1: "colombia",     team2: "dr-congo",      broadcasters: ["FS1","Universo"] },
  { id: "K5", group: "K", stage: "Group Stage", date: "2026-06-28", time: "19:30", venueId: "miami",           team1: "colombia",     team2: "portugal",      broadcasters: ["Fox","Telemundo"] },
  { id: "K6", group: "K", stage: "Group Stage", date: "2026-06-28", time: "19:30", venueId: "atlanta",         team1: "dr-congo",     team2: "uzbekistan",    broadcasters: ["FS1","Universo"] },

  // ── GROUP L ──────────────────────────────────────────────
  { id: "L1", group: "L", stage: "Group Stage", date: "2026-06-17", time: "16:00", venueId: "dallas",          team1: "england",      team2: "croatia",       broadcasters: ["Fox","Telemundo"] },
  { id: "L2", group: "L", stage: "Group Stage", date: "2026-06-17", time: "19:00", venueId: "toronto",         team1: "ghana",        team2: "panama",        broadcasters: ["FS1","Universo"] },
  { id: "L3", group: "L", stage: "Group Stage", date: "2026-06-22", time: "16:00", venueId: "boston",          team1: "england",      team2: "ghana",         broadcasters: ["Fox","Telemundo"] },
  { id: "L4", group: "L", stage: "Group Stage", date: "2026-06-22", time: "19:00", venueId: "toronto",         team1: "panama",       team2: "croatia",       broadcasters: ["FS1","Universo"] },
  { id: "L5", group: "L", stage: "Group Stage", date: "2026-06-27", time: "17:00", venueId: "east-rutherford", team1: "panama",       team2: "england",       broadcasters: ["Fox","Telemundo"] },
  { id: "L6", group: "L", stage: "Group Stage", date: "2026-06-27", time: "17:00", venueId: "philadelphia",    team1: "croatia",      team2: "ghana",         broadcasters: ["FS1","Universo"] },
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
    matchIds: ["A1","A4","A5"]
  },
  {
    id: "south-africa", name: "South Africa", group: "A", flagEmoji: "🇿🇦",
    trainingCamp: { name: "CF Pachuca - Universidad Del Futbol", city: "Pachuca, Mexico", lat: 20.1011, lng: -98.7591 },
    matchIds: ["A1","A3","A6"]
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
    matchIds: ["B1","B4","B5"]
  },
  {
    id: "bosnia", name: "Bosnia & Herz.", group: "B", flagEmoji: "🇧🇦",
    trainingCamp: { name: "RSL Stadium", city: "Sandy, UT", lat: 40.5753, lng: -111.8989 },
    matchIds: ["B1","B3","B6"]
  },
  {
    id: "qatar", name: "Qatar", group: "B", flagEmoji: "🇶🇦",
    trainingCamp: { name: "Westmont College", city: "Santa Barbara, CA", lat: 34.4558, lng: -119.6780 },
    matchIds: ["B2","B4","B6"]
  },
  {
    id: "switzerland", name: "Switzerland", group: "B", flagEmoji: "🇨🇭",
    trainingCamp: { name: "SDJA", city: "San Diego, CA", lat: 32.7157, lng: -117.1611 },
    matchIds: ["B2","B3","B5"]
  },

  // ── GROUP C ──
  {
    id: "brazil", name: "Brazil", group: "C", flagEmoji: "🇧🇷",
    trainingCamp: { name: "Columbia Park Training Facility", city: "Morristown, NJ", lat: 40.7968, lng: -74.4815 },
    matchIds: ["C1","C3","C5"]
  },
  {
    id: "morocco", name: "Morocco", group: "C", flagEmoji: "🇲🇦",
    trainingCamp: { name: "The Pingry School", city: "Bernards Township, NJ", lat: 40.6568, lng: -74.6299 },
    matchIds: ["C1","C4","C6"]
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
    matchIds: ["D1","D4","D5"]
  },
  {
    id: "paraguay", name: "Paraguay", group: "D", flagEmoji: "🇵🇾",
    trainingCamp: { name: "Spartan Soccer Complex", city: "San Jose, CA", lat: 37.3382, lng: -121.8863 },
    matchIds: ["D1","D3","D6"]
  },
  {
    id: "australia", name: "Australia", group: "D", flagEmoji: "🇦🇺",
    trainingCamp: { name: "Oakland Roots/Soul Training Facility", city: "Oakland, CA", lat: 37.8044, lng: -122.2712 },
    matchIds: ["D2","D4","D6"]
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
    matchIds: ["E1","E3","E6"]
  },
  {
    id: "curacao", name: "Curaçao", group: "E", flagEmoji: "🇨🇼",
    trainingCamp: { name: "Florida Atlantic University", city: "Boca Raton, FL", lat: 26.3683, lng: -80.1035 },
    matchIds: ["E1","E4","E5"]
  },
  {
    id: "ivory-coast", name: "Ivory Coast", group: "E", flagEmoji: "🇨🇮",
    trainingCamp: { name: "Philadelphia Union Training Facility", city: "Chester, PA", lat: 39.8493, lng: -75.3557 },
    matchIds: ["E2","E3","E5"]
  },
  {
    id: "ecuador", name: "Ecuador", group: "E", flagEmoji: "🇪🇨",
    trainingCamp: { name: "Columbus Crew Performance Centre", city: "Columbus, OH", lat: 39.9612, lng: -82.9988 },
    matchIds: ["E2","E4","E6"]
  },

  // ── GROUP F ──
  {
    id: "netherlands", name: "Netherlands", group: "F", flagEmoji: "🇳🇱",
    trainingCamp: { name: "KC Current Training Facility", city: "Kansas City, MO", lat: 39.1155, lng: -94.6268 },
    matchIds: ["F1","F3","F6"]
  },
  {
    id: "japan", name: "Japan", group: "F", flagEmoji: "🇯🇵",
    trainingCamp: { name: "Nashville SC Training Facility", city: "Nashville, TN", lat: 36.1627, lng: -86.7816 },
    matchIds: ["F1","F4","F5"]
  },
  {
    id: "sweden", name: "Sweden", group: "F", flagEmoji: "🇸🇪",
    trainingCamp: { name: "FC Dallas Stadium (Toyota Stadium)", city: "Frisco, TX", lat: 33.1548, lng: -96.8348 },
    matchIds: ["F2","F3","F5"]
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
    matchIds: ["G1","G3","G6"]
  },
  {
    id: "egypt", name: "Egypt", group: "G", flagEmoji: "🇪🇬",
    trainingCamp: { name: "Gonzaga University", city: "Spokane, WA", lat: 47.6588, lng: -117.4260 },
    matchIds: ["G1","G4","G5"]
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
    matchIds: ["H2","H3","H6"]
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
    matchIds: ["H2","H4","H5"]
  },

  // ── GROUP I ──
  {
    id: "france", name: "France", group: "I", flagEmoji: "🇫🇷",
    trainingCamp: { name: "Bentley University", city: "Boston, MA", lat: 42.3919, lng: -71.2209 },
    matchIds: ["I1","I3","I5"]
  },
  {
    id: "senegal", name: "Senegal", group: "I", flagEmoji: "🇸🇳",
    trainingCamp: { name: "Rutgers University", city: "New Brunswick, NJ", lat: 40.5018, lng: -74.4479 },
    matchIds: ["I1","I4","I6"]
  },
  {
    id: "iraq", name: "Iraq", group: "I", flagEmoji: "🇮🇶",
    trainingCamp: { name: "The Greenbrier Sports Performance Centre", city: "White Sulphur Springs, WV", lat: 37.7946, lng: -80.3012 },
    matchIds: ["I2","I3","I6"]
  },
  {
    id: "norway", name: "Norway", group: "I", flagEmoji: "🇳🇴",
    trainingCamp: { name: "UNC Greensboro", city: "Greensboro, NC", lat: 36.0726, lng: -79.7920 },
    matchIds: ["I2","I4","I5"]
  },

  // ── GROUP J ──
  {
    id: "argentina", name: "Argentina", group: "J", flagEmoji: "🇦🇷",
    trainingCamp: { name: "Sporting KC Training Centre", city: "Kansas City, KS", lat: 39.1155, lng: -94.7700 },
    matchIds: ["J1","J3","J6"]
  },
  {
    id: "algeria", name: "Algeria", group: "J", flagEmoji: "🇩🇿",
    trainingCamp: { name: "University of Kansas", city: "Lawrence, KS", lat: 38.9717, lng: -95.2353 },
    matchIds: ["J1","J4","J5"]
  },
  {
    id: "austria", name: "Austria", group: "J", flagEmoji: "🇦🇹",
    trainingCamp: { name: "UC Santa Barbara, Harder Stadium", city: "Santa Barbara, CA", lat: 34.4140, lng: -119.8489 },
    matchIds: ["J2","J3","J5"]
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
    matchIds: ["K1","K3","K5"]
  },
  {
    id: "dr-congo", name: "DR Congo", group: "K", flagEmoji: "🇨🇩",
    trainingCamp: { name: "Houston Training Centre (SaberCats Stadium)", city: "Houston, TX", lat: 29.8174, lng: -95.4219 },
    matchIds: ["K1","K4","K6"]
  },
  {
    id: "uzbekistan", name: "Uzbekistan", group: "K", flagEmoji: "🇺🇿",
    trainingCamp: { name: "Atlanta United Training Centre", city: "Atlanta, GA", lat: 33.7490, lng: -84.3880 },
    matchIds: ["K2","K3","K6"]
  },
  {
    id: "colombia", name: "Colombia", group: "K", flagEmoji: "🇨🇴",
    trainingCamp: { name: "Academia Atlas FC", city: "Guadalajara, Mexico", lat: 20.7597, lng: -103.4897 },
    matchIds: ["K2","K4","K5"]
  },

  // ── GROUP L ──
  {
    id: "england", name: "England", group: "L", flagEmoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    trainingCamp: { name: "Swope Soccer Village", city: "Kansas City, MO", lat: 38.9907, lng: -94.5261 },
    matchIds: ["L1","L3","L5"]
  },
  {
    id: "croatia", name: "Croatia", group: "L", flagEmoji: "🇭🇷",
    trainingCamp: { name: "Episcopal High School Sports Complex", city: "Alexandria, VA", lat: 38.8048, lng: -77.0469 },
    matchIds: ["L1","L4","L6"]
  },
  {
    id: "ghana", name: "Ghana", group: "L", flagEmoji: "🇬🇭",
    trainingCamp: { name: "Bryant University", city: "Providence, RI", lat: 41.8240, lng: -71.4128 },
    matchIds: ["L2","L3","L6"]
  },
  {
    id: "panama", name: "Panama", group: "L", flagEmoji: "🇵🇦",
    trainingCamp: { name: "Nottawasaga Training Site", city: "New Tecumseth, Ontario", lat: 44.0886, lng: -79.7599 },
    matchIds: ["L2","L4","L5"]
  },
];


// ============================================================
// KNOCKOUT BRACKET STRUCTURE
// These are placeholders — team slots will be filled as groups resolve.
// "W-A" = winner of Group A, "R-A" = runner-up of Group A, etc.
// ============================================================
const knockoutRounds = {
  roundOf32: [
    // June 28–July 4 (16 matches)
    { id: "R32-73", date: "2026-06-28", time: "15:00", venueId: "los-angeles",     slot1: "R-A",  slot2: "R-B"  },
    { id: "R32-74", date: "2026-06-28", time: "13:00", venueId: "boston",          slot1: "W-E",  slot2: "3rd-ABCDF" },
    { id: "R32-75", date: "2026-06-28", time: "16:30", venueId: "monterrey",       slot1: "W-F",  slot2: "R-C"  },
    { id: "R32-76", date: "2026-06-28", time: "21:00", venueId: "houston",         slot1: "W-C",  slot2: "R-F"  },
    { id: "R32-77", date: "2026-06-29", time: "13:00", venueId: "east-rutherford", slot1: "W-I",  slot2: "3rd-CDFGH" },
    { id: "R32-78", date: "2026-06-29", time: "17:00", venueId: "dallas",          slot1: "R-E",  slot2: "R-I"  },
    { id: "R32-79", date: "2026-06-29", time: "21:00", venueId: "mexico-city",     slot1: "W-A",  slot2: "3rd-CEFHI" },
    { id: "R32-80", date: "2026-06-29", time: "12:00", venueId: "atlanta",         slot1: "W-L",  slot2: "3rd-EHIJK" },
    { id: "R32-81", date: "2026-06-30", time: "16:00", venueId: "san-francisco",   slot1: "W-D",  slot2: "3rd-BEFIJ" },
    { id: "R32-82", date: "2026-07-01", time: "20:00", venueId: "seattle",         slot1: "W-G",  slot2: "3rd-AEHIJ" },
    { id: "R32-83", date: "2026-07-01", time: "15:00", venueId: "toronto",         slot1: "R-K",  slot2: "R-L"  },
    { id: "R32-84", date: "2026-07-01", time: "19:00", venueId: "los-angeles",     slot1: "W-H",  slot2: "R-J"  },
    { id: "R32-85", date: "2026-07-02", time: "23:00", venueId: "vancouver",       slot1: "W-B",  slot2: "3rd-EFGIJ" },
    { id: "R32-86", date: "2026-07-03", time: "14:00", venueId: "miami",           slot1: "W-J",  slot2: "R-H"  },
    { id: "R32-87", date: "2026-07-03", time: "18:00", venueId: "kansas-city",     slot1: "W-K",  slot2: "3rd-DEJIL" },
    { id: "R32-88", date: "2026-07-03", time: "21:30", venueId: "dallas",          slot1: "R-D",  slot2: "R-G"  },
  ],
  roundOf16: [
    { id: "R16-89", date: "2026-07-04", time: "13:00", venueId: "philadelphia",    slot1: "W-R32-74", slot2: "W-R32-77" },
    { id: "R16-90", date: "2026-07-04", time: "17:00", venueId: "houston",         slot1: "W-R32-73", slot2: "W-R32-75" },
    { id: "R16-91", date: "2026-07-05", time: "16:00", venueId: "east-rutherford", slot1: "W-R32-76", slot2: "W-R32-78" },
    { id: "R16-92", date: "2026-07-05", time: "20:00", venueId: "mexico-city",     slot1: "W-R32-79", slot2: "W-R32-80" },
    { id: "R16-93", date: "2026-07-06", time: "15:00", venueId: "dallas",          slot1: "W-R32-83", slot2: "W-R32-84" },
    { id: "R16-94", date: "2026-07-06", time: "20:00", venueId: "seattle",         slot1: "W-R32-81", slot2: "W-R32-82" },
    { id: "R16-95", date: "2026-07-07", time: "12:00", venueId: "atlanta",         slot1: "W-R32-86", slot2: "W-R32-88" },
    { id: "R16-96", date: "2026-07-07", time: "16:00", venueId: "vancouver",       slot1: "W-R32-85", slot2: "W-R32-87" },
  ],
  quarterfinals: [
    { id: "QF-97",  date: "2026-07-09", time: "16:00", venueId: "boston",          slot1: "W-R16-89", slot2: "W-R16-90" },
    { id: "QF-98",  date: "2026-07-10", time: "15:00", venueId: "los-angeles",     slot1: "W-R16-93", slot2: "W-R16-94" },
    { id: "QF-99",  date: "2026-07-10", time: "17:00", venueId: "miami",           slot1: "W-R16-91", slot2: "W-R16-92" },
    { id: "QF-100", date: "2026-07-11", time: "21:00", venueId: "kansas-city",     slot1: "W-R16-95", slot2: "W-R16-96" },
  ],
  semifinals: [
    { id: "SF-101", date: "2026-07-14", time: "15:00", venueId: "dallas",          slot1: "W-QF-97",  slot2: "W-QF-98"  },
    { id: "SF-102", date: "2026-07-15", time: "15:00", venueId: "atlanta",         slot1: "W-QF-99",  slot2: "W-QF-100" },
  ],
  thirdPlace: {
    id: "3P-103",   date: "2026-07-18", time: "17:00", venueId: "east-rutherford", slot1: "L-SF-101", slot2: "L-SF-102"
  },
  final: {
    id: "F-104",    date: "2026-07-19", time: "15:00", venueId: "east-rutherford", slot1: "W-SF-101", slot2: "W-SF-102"
  },
};

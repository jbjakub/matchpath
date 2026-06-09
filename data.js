// ============================================================
// MatchPath — data.js
// This file holds all the tournament data.
// We'll fill this in during Phase 2. For now it's a skeleton
// showing the shape of the data so the app knows what to expect.
// ============================================================


// --- VENUES ---
// Each venue is a stadium that will host matches.
// lat/lng = the GPS coordinates used to place it on the map.
const venues = [
  // Example (remove when real data is added):
  // {
  //   id: "metlife",
  //   name: "MetLife Stadium",
  //   city: "East Rutherford, NJ",
  //   country: "USA",
  //   lat: 40.8135,
  //   lng: -74.0745,
  //   capacity: 82500
  // }
];


// --- TEAMS ---
// Each team has a training camp location and a list of matches.
// matches: confirmed group stage games + conditional knockout slots.
const teams = [
  // Example (remove when real data is added):
  // {
  //   id: "usa",
  //   name: "United States",
  //   group: "A",
  //   flagEmoji: "🇺🇸",
  //   trainingCamp: {
  //     name: "IMG Academy",
  //     city: "Bradenton, FL",
  //     lat: 27.5008,
  //     lng: -82.5748
  //   },
  //   matches: [
  //     {
  //       matchId: "gA1",
  //       stage: "Group Stage",
  //       date: "2026-06-11",
  //       time: "15:00",           // local venue time (24hr)
  //       venueId: "sofi",
  //       opponent: "tbd",         // team id, or "tbd" for knockouts
  //       confirmed: true,         // false = conditional knockout match
  //       broadcasters: ["Fox", "Telemundo"]
  //     }
  //   ]
  // }
];


// --- BROADCASTERS ---
// US TV and streaming providers for the tournament.
// We'll use these to display "watch on" info for each match.
const broadcasters = {
  "Fox":       { label: "Fox",       type: "cable",     color: "#003087" },
  "FS1":       { label: "FS1",       type: "cable",     color: "#003087" },
  "Telemundo": { label: "Telemundo", type: "cable",     color: "#4b0082" },
  "Peacock":   { label: "Peacock",   type: "streaming", color: "#000000" },
  "Tubi":      { label: "Tubi",      type: "streaming", color: "#fa4f09" }
};


// --- KNOCKOUT BRACKET STRUCTURE ---
// Defines the possible paths through the tournament.
// "slot" values like "W-A1" mean "Winner of Group A Match 1" etc.
// This gets filled in as the tournament progresses.
const knockoutSlots = {
  roundOf32:   [],   // 16 matches
  roundOf16:   [],   // 8 matches
  quarterfinals: [], // 4 matches
  semifinals:  [],   // 2 matches
  final:       null  // 1 match
};

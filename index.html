<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MatchPath</title>

  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />

  <style>
    /* ── DESIGN TOKENS ── */
    :root {
      /* Light theme — cyan brand accent kept, deepened where it sits on text
         for AA contrast; the brighter original cyan lives on as --color-accent-bright
         for map markers / decorative dots where contrast rules don't apply. */
      --color-bg:            #f4f7fb;
      --color-surface:       #ffffff;
      --color-surface2:      #eef2f8;
      --color-border:        #dde4ee;
      --color-accent:        #00819e;
      --color-accent-bright: #00d4ff;
      --color-accent-dim:    #00d4ff14;
      --color-text:          #10182a;
      --color-muted:         #64748b;
      --color-confirmed:     #008a49;
      --color-loss:          #e02f2f;
      --color-possible:      #b36b00;
      --font-display: 'Barlow Condensed', sans-serif;
      --font-body:    'Inter', sans-serif;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html, body {
      height: 100%;
      background: var(--color-bg);
      color: var(--color-text);
      font-family: var(--font-body);
      font-size: 14px;
      overflow: hidden;
    }

    #app { display: flex; flex-direction: column; height: 100vh; }

    /* ── HEADER ── */
    #header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      height: 52px;
      background: var(--color-surface);
      border-bottom: 1px solid var(--color-border);
      flex-shrink: 0;
      z-index: 1000;
    }

    #logo { display: flex; align-items: center; gap: 10px; cursor: pointer; }
    #logo-wordmark { font-family: var(--font-display); font-size: 22px; font-weight: 700; letter-spacing: 0.04em; }
    #logo-wordmark span { color: var(--color-accent); }

    #nav { display: flex; gap: 4px; }
    .nav-tab {
      padding: 6px 14px;
      border-radius: 4px;
      font-family: var(--font-display);
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--color-muted);
      cursor: pointer;
      border: none;
      background: transparent;
      transition: color 0.15s, background 0.15s;
    }
    .nav-tab:hover { color: var(--color-text); background: var(--color-accent-dim); }
    .nav-tab.active { color: var(--color-accent); background: var(--color-accent-dim); }
    .tab-badge {
      display: inline-flex; align-items: center; justify-content: center;
      width: 16px; height: 16px; border-radius: 50%;
      background: var(--color-accent); color: var(--color-bg);
      font-size: 10px; font-weight: 700; margin-left: 5px; vertical-align: middle;
    }

    /* ── LAYOUT ── */
    #main { display: flex; flex: 1; overflow: hidden; }

    /* ── SIDEBAR ── */
    #sidebar {
      width: 320px;
      flex-shrink: 0;
      background: var(--color-surface);
      border-right: 1px solid var(--color-border);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    #sidebar-header {
      padding: 14px 16px 12px;
      border-bottom: 1px solid var(--color-border);
      flex-shrink: 0;
    }

    #sidebar-title {
      font-family: var(--font-display);
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 10px;
    }

    /* Search input + dropdown wrapper */
    #search-wrapper { position: relative; }

    #team-search {
      width: 100%;
      padding: 8px 12px;
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: 6px;
      color: var(--color-text);
      font-family: var(--font-body);
      font-size: 13px;
      outline: none;
      transition: border-color 0.15s;
    }
    #team-search::placeholder { color: var(--color-muted); }
    #team-search:focus { border-color: var(--color-accent); }

    /* Autocomplete dropdown */
    #search-dropdown {
      display: none;
      position: absolute;
      top: calc(100% + 4px);
      left: 0; right: 0;
      background: var(--color-surface2);
      border: 1px solid var(--color-border);
      border-radius: 6px;
      z-index: 9999;
      max-height: 220px;
      overflow-y: auto;
      box-shadow: 0 8px 24px rgba(16,24,42,0.12);
    }
    #search-dropdown.open { display: block; }

    .dropdown-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 12px;
      cursor: pointer;
      transition: background 0.1s;
      border-bottom: 1px solid var(--color-border);
    }
    .dropdown-item:last-child { border-bottom: none; }
    .dropdown-item:hover { background: var(--color-accent-dim); }
    .dropdown-flag { font-size: 18px; flex-shrink: 0; }
    .dropdown-name { font-size: 13px; color: var(--color-text); }
    .dropdown-group {
      margin-left: auto;
      font-family: var(--font-display);
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: var(--color-muted);
      background: var(--color-border);
      padding: 2px 6px;
      border-radius: 3px;
    }

    /* ── SIDEBAR CONTENT (scrollable) ── */
    #sidebar-content {
      flex: 1;
      overflow-y: auto;
      padding: 0;
    }
    #sidebar-content::-webkit-scrollbar { width: 4px; }
    #sidebar-content::-webkit-scrollbar-track { background: transparent; }
    #sidebar-content::-webkit-scrollbar-thumb { background: var(--color-border); border-radius: 2px; }

    /* ── EMPTY STATE ── */
    #empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 40px 24px;
      gap: 12px;
      height: 100%;
      min-height: 260px;
    }
    .empty-icon { font-size: 36px; opacity: 0.3; }
    #empty-state h3 { font-family: var(--font-display); font-size: 16px; font-weight: 600; color: var(--color-text); }
    #empty-state p { font-size: 13px; color: var(--color-muted); line-height: 1.6; max-width: 42ch; }

    /* ── TEAM PANEL (shown when a team is selected) ── */
    #team-panel { display: none; }

    /* ── VENUE PANEL (shown when a city/venue is selected) ── */
    #venue-panel { display: none; }

    /* ── TRAVEL TAB ── */
    #travel-panel { display: none; }
    .travel-row {
      display: flex; align-items: center; gap: 10px;
      padding: 9px 16px; border-bottom: 1px solid var(--color-border);
      cursor: pointer; transition: background 0.1s;
    }
    .travel-row:hover { background: var(--color-accent-dim); }
    .travel-rank {
      font-family: var(--font-display); font-weight: 700; font-size: 12px;
      color: var(--color-muted); width: 18px; text-align: right; flex-shrink: 0;
    }
    .travel-flag { font-size: 16px; flex-shrink: 0; }
    .travel-body { flex: 1; min-width: 0; }
    .travel-name { font-size: 12.5px; color: var(--color-text); display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
    .travel-bar-track { height: 4px; background: var(--color-border); border-radius: 2px; margin-top: 5px; overflow: hidden; }
    .travel-bar-fill { height: 100%; background: var(--color-accent-bright); border-radius: 2px; }
    .travel-miles {
      font-family: var(--font-display); font-size: 13px; font-weight: 700;
      color: var(--color-accent); flex-shrink: 0; padding-left: 6px; white-space: nowrap;
    }

    .city-planner { padding: 12px 16px 24px; }
    .city-planner-row { display: flex; align-items: center; gap: 8px; }
    .city-planner-row select {
      flex: 1; min-width: 0; padding: 8px 10px;
      background: var(--color-bg); border: 1px solid var(--color-border);
      border-radius: 6px; color: var(--color-text); font-family: var(--font-body); font-size: 12.5px;
    }
    .city-planner-arrow { color: var(--color-muted); font-size: 14px; flex-shrink: 0; }
    .city-planner-result { margin-top: 18px; text-align: center; }
    .city-planner-distance { font-family: var(--font-display); font-size: 32px; font-weight: 700; color: var(--color-accent); line-height: 1; }
    .city-planner-sub { font-size: 12px; color: var(--color-muted); margin-top: 4px; }
    .city-planner-stats { display: flex; margin-top: 16px; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); }
    .city-planner-stat { flex: 1; padding: 10px 14px; text-align: center; border-right: 1px solid var(--color-border); }
    .city-planner-stat:last-child { border-right: none; }

    /* ── MY LIST VIEW ── */
    #mylist-panel { display: none; }

    .mylist-header {
      padding: 14px 16px;
      background: var(--color-surface2);
      border-bottom: 1px solid var(--color-border);
    }
    .mylist-header-title {
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.02em;
    }
    .mylist-header-sub {
      font-size: 12px;
      color: var(--color-muted);
      margin-top: 3px;
    }

    /* Saved team chip row */
    .saved-teams-row {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding: 12px 16px;
      border-bottom: 1px solid var(--color-border);
    }
    .saved-team-chip {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 5px 9px 5px 10px;
      background: var(--color-surface2);
      border: 1px solid var(--color-border);
      border-radius: 16px;
      font-size: 12px;
      color: var(--color-text);
      cursor: pointer;
      transition: border-color 0.15s;
    }
    .saved-team-chip:hover { border-color: var(--color-accent); }
    .saved-team-chip .chip-remove {
      color: var(--color-muted);
      font-size: 14px;
      line-height: 1;
      padding: 0 2px;
    }
    .saved-team-chip .chip-remove:hover { color: var(--color-loss); }

    /* Agenda date group */
    .agenda-date-label {
      font-family: var(--font-display);
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-accent);
      padding: 14px 16px 6px;
      border-bottom: 1px solid var(--color-border);
      background: var(--color-bg);
      position: sticky;
      top: 0;
    }

    /* Agenda match entry */
    .agenda-entry {
      padding: 10px 16px;
      border-bottom: 1px solid var(--color-border);
      display: flex;
      gap: 10px;
      align-items: flex-start;
    }
    .agenda-time {
      font-family: var(--font-display);
      font-size: 13px;
      font-weight: 600;
      color: var(--color-text);
      min-width: 64px;
      flex-shrink: 0;
      padding-top: 1px;
    }
    .agenda-body { flex: 1; }
    .agenda-matchup {
      font-size: 13px;
      font-weight: 500;
      color: var(--color-text);
      line-height: 1.4;
    }
    .agenda-matchup .saved-flag {
      display: inline-block;
      box-shadow: 0 0 0 1.5px var(--color-accent);
      border-radius: 50%;
      padding: 1px;
    }
    .agenda-sub { font-size: 11px; color: var(--color-muted); margin-top: 2px; }

    /* Empty state for My List */
    #mylist-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 40px 24px;
      gap: 12px;
      height: 100%;
      min-height: 300px;
    }
    #mylist-empty h3 { font-family: var(--font-display); font-size: 16px; font-weight: 600; color: var(--color-text); }
    #mylist-empty p { font-size: 13px; color: var(--color-muted); line-height: 1.6; }
    .btn-browse {
      margin-top: 6px;
      padding: 8px 16px;
      background: var(--color-accent-dim);
      border: 1px solid var(--color-accent);
      border-radius: 6px;
      color: var(--color-accent);
      font-family: var(--font-display);
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      cursor: pointer;
      transition: background 0.15s;
    }
    .btn-browse:hover { background: var(--color-accent-dim); filter: brightness(1.3); }

    .team-panel-header {
      padding: 14px 16px;
      background: var(--color-surface2);
      border-bottom: 1px solid var(--color-border);
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .team-panel-flag { font-size: 28px; }
    .team-panel-info { flex: 1; }
    .team-panel-name {
      font-family: var(--font-display);
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.02em;
      line-height: 1;
    }
    .team-panel-meta {
      font-size: 11px;
      color: var(--color-muted);
      margin-top: 3px;
      font-family: var(--font-display);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    /* Bookmark button */
    .btn-bookmark {
      width: 32px; height: 32px;
      border-radius: 6px;
      border: 1px solid var(--color-border);
      background: transparent;
      color: var(--color-muted);
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 16px;
      transition: all 0.15s;
      flex-shrink: 0;
    }
    .btn-bookmark:hover { border-color: var(--color-accent); color: var(--color-accent); }
    .btn-bookmark.saved { border-color: var(--color-accent); color: var(--color-accent); background: var(--color-accent-dim); }

    /* Travel stats bar */
    .travel-stats {
      display: flex;
      border-bottom: 1px solid var(--color-border);
    }
    .travel-stat {
      flex: 1;
      padding: 10px 14px;
      border-right: 1px solid var(--color-border);
      text-align: center;
    }
    .travel-stat:last-child { border-right: none; }
    .stat-value {
      font-family: var(--font-display);
      font-size: 20px;
      font-weight: 700;
      color: var(--color-accent);
      line-height: 1;
    }
    .stat-label {
      font-size: 10px;
      color: var(--color-muted);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-top: 3px;
      font-family: var(--font-display);
    }

    /* Section label inside team panel */
    .section-label {
      font-family: var(--font-display);
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--color-muted);
      padding: 12px 16px 6px;
    }

    /* Training camp row */
    .camp-row {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 10px 16px 12px;
      border-bottom: 1px solid var(--color-border);
    }
    .stop-icon {
      width: 24px; height: 24px;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 11px;
      flex-shrink: 0;
      margin-top: 1px;
    }
    .stop-icon.camp  { background: #008a4914; color: var(--color-confirmed); border: 1.5px solid var(--color-confirmed); }
    .stop-icon.match.win  { background: #008a4914; color: var(--color-confirmed); border: 1.5px solid var(--color-confirmed); }
    .stop-icon.match.loss { background: #e02f2f14; color: var(--color-loss);      border: 1.5px solid var(--color-loss); }
    .stop-icon.match.draw { background: #b36b0014; color: var(--color-possible);  border: 1.5px solid var(--color-possible); }

    .stop-body { flex: 1; min-width: 0; }
    .stop-title { font-size: 13px; font-weight: 500; color: var(--color-text); line-height: 1.3; }
    .stop-sub { font-size: 11px; color: var(--color-muted); margin-top: 2px; line-height: 1.4; }
    .match-score { font-weight: 700; color: var(--color-accent); margin-left: 3px; white-space: nowrap; }
    .stop-badge {
      font-size: 10px;
      font-family: var(--font-display);
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      padding: 2px 7px;
      border-radius: 3px;
      flex-shrink: 0;
      margin-top: 2px;
      white-space: nowrap;
    }
    .stop-badge.win  { background: #008a4914; color: var(--color-confirmed); border: 1px solid #008a4940; }
    .stop-badge.loss { background: #e02f2f14; color: var(--color-loss);      border: 1px solid #e02f2f40; }
    .stop-badge.draw { background: #b36b0014; color: var(--color-possible);  border: 1px solid #b36b0040; }

    /* ── FINAL STATUS BANNER (bottom of team itinerary) ── */
    .final-status { padding: 16px; text-align: center; border-top: 1px solid var(--color-border); }
    .final-status-label {
      font-family: var(--font-display); font-weight: 700; font-size: 14px; letter-spacing: 0.04em;
      padding: 7px 16px; border-radius: 20px; display: inline-block;
    }
    .final-status--champion .final-status-label { background: #f6c60022; color: #a17a00; border: 1px solid #f6c60070; }
    .final-status--runnerup .final-status-label { background: var(--color-accent-dim); color: var(--color-accent); border: 1px solid var(--color-accent); }
    .final-status--eliminated .final-status-label { background: var(--color-surface2); color: var(--color-muted); border: 1px solid var(--color-border); }

    /* ── STATUS CHIP (inline, next to team name) ── */
    .status-chip {
      font-family: var(--font-display); font-size: 9.5px; font-weight: 700; letter-spacing: 0.05em;
      text-transform: uppercase; padding: 2px 7px; border-radius: 10px; display: inline-block;
    }
    .status-chip--champion    { background: #f6c60022; color: #a17a00; border: 1px solid #f6c60070; }
    .status-chip--runnerup    { background: var(--color-accent-dim); color: var(--color-accent); border: 1px solid var(--color-accent); }
    .status-chip--eliminated  { background: var(--color-surface2); color: var(--color-muted); border: 1px solid var(--color-border); }

    /* Match stop row */
    .match-row {
      padding: 10px 16px;
      border-bottom: 1px solid var(--color-border);
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }
    .match-row:last-child { border-bottom: none; }

    /* Distance connector between stops */
    .distance-connector {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 5px 16px 5px 28px;
      color: var(--color-muted);
      font-size: 11px;
    }
    .distance-line {
      flex: 1;
      height: 1px;
      background: var(--color-border);
      border-top: 1px dashed var(--color-border);
    }

    /* Broadcaster pill */
    .broadcaster-list { display: flex; gap: 4px; flex-wrap: wrap; margin-top: 4px; }
    .broadcaster-pill {
      font-size: 10px;
      font-family: var(--font-display);
      font-weight: 600;
      letter-spacing: 0.04em;
      padding: 2px 6px;
      border-radius: 3px;
      background: var(--color-border);
      color: var(--color-muted);
    }

    /* ── LEGEND ── */
    #legend {
      padding: 10px 16px;
      border-top: 1px solid var(--color-border);
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      flex-shrink: 0;
    }
    #legend-title {
      width: 100%;
      font-family: var(--font-display);
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 2px;
    }
    .legend-row { display: flex; align-items: center; gap: 6px; font-size: 11px; color: var(--color-muted); }
    .legend-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }

    /* ── MAP ── */
    /* Wrapper is the positioned ancestor for the layer-controls overlay, so the
       overlay always docks to the map itself — not to the page — on every
       layout (this was the cause of it floating over the mobile sidebar). */
    #map-wrapper { position: relative; flex: 1; min-height: 0; overflow: hidden; }
    #map { position: absolute; inset: 0; background: var(--color-bg); }

    .leaflet-container { background: #e4e9f0 !important; font-family: var(--font-body) !important; }
    .leaflet-control-zoom { border: 1px solid var(--color-border) !important; border-radius: 6px !important; overflow: hidden; }
    .leaflet-control-zoom a { background: var(--color-surface) !important; color: var(--color-text) !important; border-bottom: 1px solid var(--color-border) !important; }
    .leaflet-control-zoom a:hover { background: var(--color-border) !important; }
    .leaflet-control-attribution { background: rgba(255,255,255,0.85) !important; color: var(--color-muted) !important; font-size: 10px !important; }
    .leaflet-control-attribution a { color: var(--color-accent) !important; }

    .leaflet-popup-content-wrapper {
      background: var(--color-surface) !important;
      border: 1px solid var(--color-border) !important;
      border-radius: 8px !important;
      box-shadow: 0 8px 32px rgba(16,24,42,0.18) !important;
      color: var(--color-text) !important;
      max-width: min(280px, 80vw) !important;
    }
    .leaflet-popup-tip { background: var(--color-surface) !important; }
    .leaflet-popup-content { margin: 12px 14px !important; font-family: var(--font-body) !important; }
    .popup-title { font-family: var(--font-display); font-size: 15px; font-weight: 700; letter-spacing: 0.03em; margin-bottom: 4px; }
    .popup-subtitle { font-size: 12px; color: var(--color-muted); }
    .popup-matches { margin-top: 8px; display: flex; flex-direction: column; gap: 4px; }
    .popup-match { font-size: 11px; color: var(--color-muted); }
    .popup-match strong { color: var(--color-text); }

    /* ── LAYER CONTROLS ── */
    /* Positioned relative to #map-wrapper (see #map-wrapper above), so this
       always sits in the map's own top-right corner regardless of viewport
       size or where the map falls in the page layout. */
    #layer-controls {
      position: absolute;
      top: 12px;
      right: 12px;
      z-index: 900;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .layer-btn {
      display: flex; align-items: center; gap: 7px;
      padding: 7px 12px;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 6px;
      color: var(--color-muted);
      font-family: var(--font-body);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
      white-space: nowrap;
    }
    .layer-btn:hover { border-color: var(--color-accent); color: var(--color-text); }
    .layer-btn.active { border-color: var(--color-accent); color: var(--color-accent); background: var(--color-accent-dim); }

    /* ── MOBILE RESPONSIVE ── */
    @media (max-width: 768px) {
      #main { flex-direction: column; }

      /* Map on top, fixed height */
      #map-wrapper { height: 42vh; flex: none; transition: height 0.15s ease; }

      /* Sidebar below, full width, remaining height */
      #sidebar {
        width: 100%;
        height: calc(58vh - 52px);
        border-right: none;
        border-top: 2px solid var(--color-border);
      }

      /* Shorter empty state so the default (nothing selected) view doesn't
         leave a big dead gap above the legend on a phone-height sidebar */
      #empty-state { min-height: 0; padding: 24px 24px; }

      /* My List / Travel don't need the map — give the list the full screen */
      body.map-hidden-mobile #map-wrapper { height: 0; min-height: 0; }
      body.map-hidden-mobile #sidebar { height: calc(100vh - 52px); }
      body.map-hidden-mobile #layer-controls { display: none; }

      /* Bigger touch targets for the zoom control (default Leaflet buttons
         are ~26px, well under the ~44px minimum comfortable tap target) */
      .leaflet-control-zoom a { width: 40px !important; height: 40px !important; line-height: 40px !important; font-size: 18px !important; }
      .leaflet-top.leaflet-left { margin-top: 12px !important; margin-left: 12px !important; }

      /* Tighter header, but keep tabs comfortably tappable (≥ ~40px target) */
      #header { padding: 0 10px; }
      #logo-wordmark { font-size: 18px; }
      .nav-tab {
        padding: 10px 10px;
        font-size: 11px;
        letter-spacing: 0.03em;
        min-height: 40px;
        display: inline-flex;
        align-items: center;
      }

      /* Bigger tap targets for bookmark / chip-remove buttons */
      .btn-bookmark { width: 38px; height: 38px; }
      .chip-remove { padding: 6px 4px; margin: -6px -4px; }

      /* Prevent iOS auto-zoom on focus: inputs/selects need >= 16px font */
      #team-search, .city-planner-row select { font-size: 16px; }

      /* Layer controls: tighter inset on small screens (still anchored to
         the map itself via #map-wrapper, not the page) */
      #layer-controls { top: 8px; right: 8px; }
      .layer-btn { padding: 8px 10px; font-size: 11px; min-height: 36px; }

      /* Legend wraps tighter */
      #legend { gap: 10px; padding: 8px 12px; }

      /* Travel tab: stack the city planner selects if needed, keep readable */
      .city-planner-distance { font-size: 26px; }
      .travel-miles { font-size: 12px; }
    }

    /* Very small phones (iPhone SE etc.) */
    @media (max-width: 390px) {
      .nav-tab { padding: 8px 6px; font-size: 10px; min-height: 38px; }
      #logo-wordmark { font-size: 16px; }
      .tab-badge { width: 14px; height: 14px; font-size: 9px; }

      /* Selects get tight — let them wrap onto their own lines */
      .city-planner-row { flex-wrap: wrap; }
      .city-planner-row select { flex: 1 1 100%; }
      .city-planner-arrow { flex: 1 1 100%; text-align: center; }
    }
  </style>
</head>

<body>
<div id="app">

  <header id="header">
    <div id="logo" onclick="clearTeamSelection()">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="19" r="5" stroke="#00d4ff" stroke-width="1.5"/>
        <circle cx="9" cy="19" r="2" fill="#00d4ff" opacity="0.3"/>
        <circle cx="22" cy="7" r="3" fill="#00d4ff" opacity="0.5"/>
        <path d="M13 16 Q18 12 20 9" stroke="#00d4ff" stroke-width="1.5" stroke-dasharray="2 2" stroke-linecap="round"/>
      </svg>
      <div id="logo-wordmark">Match<span>Path</span></div>
    </div>
    <nav id="nav">
      <button class="nav-tab active" data-tab="explore">Explore</button>
      <button class="nav-tab" data-tab="mylist">My List <span class="tab-badge" id="list-badge" style="display:none">0</span></button>
      <button class="nav-tab" data-tab="travel">Travel</button>
    </nav>
  </header>

  <div id="main">
    <aside id="sidebar">

      <div id="sidebar-header">
        <div id="sidebar-title">2026 FIFA World Cup</div>
        <div id="search-wrapper">
          <input type="text" id="team-search" placeholder="Search teams or cities…" autocomplete="off" />
          <div id="search-dropdown"></div>
        </div>
      </div>

      <div id="sidebar-content">

        <!-- Empty state — shown before any selection -->
        <div id="empty-state">
          <div class="empty-icon">🏆</div>
          <h3>Select a team or city</h3>
          <p>The tournament is complete — Spain lifted the trophy on July 19. Search any of the 48 teams to relive their run, or search a city to see every match played there.</p>
        </div>

        <!-- Team panel — shown after a team is selected -->
        <div id="team-panel"></div>

        <!-- Venue panel — shown after a city/venue is selected -->
        <div id="venue-panel" style="display:none"></div>

        <!-- My List panel — shown when My List tab is active -->
        <div id="mylist-panel"></div>

        <!-- My List empty state -->
        <div id="mylist-empty" style="display:none">
          <div class="empty-icon">📋</div>
          <h3>Your list is empty</h3>
          <p>Star any team from the Explore tab to add them here. We'll build you a personalized match agenda.</p>
          <button class="btn-browse" id="btn-go-explore">Browse Teams</button>
        </div>

        <!-- Travel panel — shown when Travel tab is active -->
        <div id="travel-panel" style="display:none">
          <div class="mylist-header">
            <div class="mylist-header-title">Travel</div>
            <div class="mylist-header-sub">How far every team traveled, and the distance between any two host cities</div>
          </div>

          <div class="section-label">Team Travel Leaderboard · tap a team for their route</div>
          <div id="travel-leaderboard"></div>

          <div class="section-label">City-to-City Planner</div>
          <div class="city-planner">
            <div class="city-planner-row">
              <select id="city-a"></select>
              <span class="city-planner-arrow">→</span>
              <select id="city-b"></select>
            </div>
            <div id="city-planner-result"></div>
          </div>
        </div>

      </div>

      <div id="legend">
        <div id="legend-title">Map Key</div>
        <div class="legend-row"><div class="legend-dot" style="background:#00d4ff"></div>Venue</div>
        <div class="legend-row"><div class="legend-dot" style="background:#008a49"></div>Training camp</div>
      </div>

    </aside>
    <div id="map-wrapper">
      <div id="map"></div>
      <!-- Layer controls overlay — positioned relative to #map-wrapper so it
           always docks to the map's own corner, on desktop and mobile alike -->
      <div id="layer-controls">
        <button class="layer-btn active" id="btn-venues">
          <div style="width:8px;height:8px;border-radius:50%;background:#00d4ff;flex-shrink:0"></div>Venues
        </button>
        <button class="layer-btn active" id="btn-camps">
          <div style="width:8px;height:8px;border-radius:50%;background:#008a49;flex-shrink:0"></div>Training Camps
        </button>
      </div>
    </div>
  </div>
</div>

<script src="data.js"></script>
<script>
// ============================================================
// UTILITY: DISTANCE CALCULATION
// ============================================================
function distanceMiles(lat1, lng1, lat2, lng2) {
  const R = 3958.8;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2)
           + Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180)
           * Math.sin(dLng/2) * Math.sin(dLng/2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function formatMiles(m) {
  return Math.round(m).toLocaleString() + ' mi';
}

function formatDate(dateStr, timeStr) {
  const [y, mo, d] = dateStr.split('-').map(Number);
  const [h, min] = timeStr.split(':').map(Number);
  const dt = new Date(y, mo - 1, d, h, min);
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const hour = h % 12 || 12;
  const ampm = h < 12 ? 'AM' : 'PM';
  const minStr = min === 0 ? '' : `:${String(min).padStart(2,'0')}`;
  return `${days[dt.getDay()]} ${months[mo-1]} ${d} · ${hour}${minStr} ${ampm} ET`;
}

// ============================================================
// RESULTS — the tournament is complete, every match has a real score
// ============================================================
const STAGE_SHORT = {
  'Round of 32': 'R32', 'Round of 16': 'R16', 'Quarterfinals': 'QF',
  'Semifinals': 'SF', 'Third Place Play-off': '3rd Place', 'Final': 'Final'
};

function stageLabel(m) {
  return m.group ? `Group ${m.group}` : m.stage;
}
function stageShort(m) {
  return m.group ? `Grp ${m.group}` : (STAGE_SHORT[m.stage] || m.stage);
}
function scoreLine(m) {
  if (!m.score) return '';
  let s = `${m.score.team1}–${m.score.team2}`;
  if (m.penalties) s += ` <span style="opacity:.65;font-weight:500">(${m.penalties.team1}–${m.penalties.team2} pens)</span>`;
  else if (m.extraTime) s += ` <span style="opacity:.65;font-weight:500">(AET)</span>`;
  return s;
}
// 'win' | 'loss' | 'draw' for a given team in a given match
function resultFor(m, teamId) {
  if (!m.score) return null;
  if (m.winner === null) return 'draw';
  return m.winner === teamId ? 'win' : 'loss';
}
// Where a team's tournament ended, as a { label, tone } chip
function teamFinalStatus(team, teamMatches) {
  if (!teamMatches.length) return null;
  const last = teamMatches[teamMatches.length - 1];
  if (team.id === championId) return { label: '🏆 Champions', tone: 'champion' };
  if (last.id === 'F-104') return { label: 'Runner-up', tone: 'runnerup' };
  if (last.id === '3P-103') {
    return last.winner === team.id ? { label: '3rd Place', tone: 'runnerup' } : { label: '4th Place', tone: 'eliminated' };
  }
  if (teamMatches.length === 3) return { label: 'Did not advance', tone: 'eliminated' };
  return { label: `Eliminated · ${stageLabel(last)}`, tone: 'eliminated' };
}
// Total miles a team traveled across its whole real tournament path
function teamTotalMiles(team, teamMatches) {
  const tc = team.trainingCamp;
  let prevLat = tc.lat, prevLng = tc.lng, total = 0;
  teamMatches.forEach(m => {
    const v = venueMap[m.venueId];
    if (!v) return;
    total += distanceMiles(prevLat, prevLng, v.lat, v.lng);
    prevLat = v.lat; prevLng = v.lng;
  });
  return total;
}
function teamMatchesFor(team) {
  return (team.matchIds || []).map(id => matchMap[id]).filter(Boolean)
    .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
}

// ============================================================
// BUILD LOOKUP MAPS
// ============================================================
const venueMap  = Object.fromEntries(venues.map(v => [v.id, v]));
const matchMap  = Object.fromEntries(matches.map(m => [m.id, m]));
const teamMap   = Object.fromEntries(teams.map(t => [t.id, t]));

// ============================================================
// MAP SETUP
// ============================================================
const map = L.map('map', { center: [33, -97], zoom: 4, zoomControl: true });

// CartoDB Positron — light tiles that match the app theme
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
  maxZoom: 19
}).addTo(map);

// ── Layer groups ──
const venueLayer   = L.layerGroup().addTo(map);
const campLayer    = L.layerGroup().addTo(map);
const routeLayer   = L.layerGroup();

// ── Icon factories ──
function makeCircleIcon(color, size, pulse = false) {
  const total = size + 10;
  const pulseRing = pulse ? `<circle cx="${total/2}" cy="${total/2}" r="${size/2+4}" fill="${color}" fill-opacity="0.12"/>` : '';
  return L.divIcon({
    className: '',
    html: `<svg width="${total}" height="${total}" viewBox="0 0 ${total} ${total}" xmlns="http://www.w3.org/2000/svg">
      ${pulseRing}
      <circle cx="${total/2}" cy="${total/2}" r="${size/2}" fill="${color}" fill-opacity="0.95" stroke="rgba(16,24,42,0.25)" stroke-width="1.5"/>
    </svg>`,
    iconSize: [total, total],
    iconAnchor: [total/2, total/2],
    popupAnchor: [0, -(total/2)]
  });
}

const venueIcon         = makeCircleIcon('#00d4ff', 14);
const campIcon          = makeCircleIcon('#008a49', 10);
const selectedVenueIcon = makeCircleIcon('#00d4ff', 18, true);
const selectedCampIcon  = makeCircleIcon('#008a49', 14, true);

// ── Render base markers ──
const venueMarkers = {};
venues.forEach(venue => {
  const venueMatches = matches.filter(m => m.venueId === venue.id);
  const matchLines = venueMatches.slice(0,4).map(m => {
    const t1 = teamMap[m.team1]?.name || m.team1;
    const t2 = teamMap[m.team2]?.name || m.team2;
    return `<div class="popup-match"><strong>${t1}</strong> ${scoreLine(m)} <strong>${t2}</strong> <span style="color:var(--color-muted)">· ${stageShort(m)}</span></div>`;
  }).join('');
  const more = venueMatches.length > 4 ? `<div class="popup-match" style="color:var(--color-muted)">+${venueMatches.length-4} more matches</div>` : '';

  const marker = L.marker([venue.lat, venue.lng], { icon: venueIcon });
  marker.bindPopup(`
    <div class="popup-title">${venue.name}</div>
    <div class="popup-subtitle">${venue.city}, ${venue.country}</div>
    <div class="popup-matches">${matchLines}${more}</div>
  `);
  marker.on('click', () => selectVenue(venue.id));
  marker.addTo(venueLayer);
  venueMarkers[venue.id] = marker;
});

const campMarkers = {};
teams.forEach(team => {
  if (!team.trainingCamp) return;
  const tc = team.trainingCamp;
  const marker = L.marker([tc.lat, tc.lng], { icon: campIcon });
  marker.bindPopup(`
    <div class="popup-title">${team.flagEmoji} ${team.name}</div>
    <div class="popup-subtitle">Training camp · ${tc.name}</div>
    <div class="popup-subtitle">${tc.city}</div>
  `);
  marker.addTo(campLayer);
  campMarkers[team.id] = marker;
});

// ============================================================
// LAYER TOGGLE BUTTONS
// ============================================================
document.getElementById('btn-venues').addEventListener('click', function() {
  this.classList.toggle('active');
  map.hasLayer(venueLayer) ? map.removeLayer(venueLayer) : map.addLayer(venueLayer);
});
document.getElementById('btn-camps').addEventListener('click', function() {
  this.classList.toggle('active');
  map.hasLayer(campLayer) ? map.removeLayer(campLayer) : map.addLayer(campLayer);
});

// ============================================================
// SEARCH / AUTOCOMPLETE — teams and venues
// ============================================================
const searchInput    = document.getElementById('team-search');
const searchDropdown = document.getElementById('search-dropdown');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { searchDropdown.classList.remove('open'); return; }

  const teamResults  = teams.filter(t => t.name.toLowerCase().includes(q)).slice(0, 5);
  const venueResults = venues.filter(v =>
    v.name.toLowerCase().includes(q) || v.city.toLowerCase().includes(q)
  ).slice(0, 4);

  if (!teamResults.length && !venueResults.length) { searchDropdown.classList.remove('open'); return; }

  const teamHtml = teamResults.map(t => `
    <div class="dropdown-item" data-type="team" data-id="${t.id}">
      <span class="dropdown-flag">${t.flagEmoji}</span>
      <span class="dropdown-name">${t.name}</span>
      <span class="dropdown-group">Group ${t.group}</span>
    </div>
  `).join('');

  const venueHtml = venueResults.map(v => {
    const count = matches.filter(m => m.venueId === v.id).length;
    return `
      <div class="dropdown-item" data-type="venue" data-id="${v.id}">
        <span class="dropdown-flag">🏟️</span>
        <span class="dropdown-name">${v.city}</span>
        <span class="dropdown-group">${count} matches</span>
      </div>
    `;
  }).join('');

  searchDropdown.innerHTML = teamHtml + venueHtml;
  searchDropdown.classList.add('open');

  searchDropdown.querySelectorAll('.dropdown-item').forEach(el => {
    el.addEventListener('click', () => {
      if (el.dataset.type === 'venue') {
        selectVenue(el.dataset.id);
      } else {
        selectTeam(el.dataset.id);
      }
      searchInput.value = '';
      searchDropdown.classList.remove('open');
    });
  });
});

document.addEventListener('click', e => {
  if (!e.target.closest('#search-wrapper')) searchDropdown.classList.remove('open');
});

// ============================================================
// STATE
// ============================================================
let activeTeamId  = null;
let activeVenueId = null;
let currentView   = 'explore';

// ============================================================
// TEAM SELECTION
// ============================================================
function selectTeam(teamId) {
  activeTeamId  = teamId;
  activeVenueId = null;
  const team = teamMap[teamId];
  if (!team) return;

  if (currentView !== 'explore') {
    currentView = 'explore';
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('.nav-tab[data-tab="explore"]').classList.add('active');
    document.getElementById('mylist-panel').style.display = 'none';
    document.getElementById('mylist-empty').style.display = 'none';
  }

  routeLayer.clearLayers();
  map.removeLayer(routeLayer);
  map.addLayer(routeLayer);

  const teamMatches = (team.matchIds || [])
    .map(id => matchMap[id])
    .filter(Boolean)
    .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));

  const tc = team.trainingCamp;
  const stops = [{ type: 'camp', lat: tc.lat, lng: tc.lng }];
  teamMatches.forEach(m => {
    const v = venueMap[m.venueId];
    if (v) stops.push({ type: 'match', lat: v.lat, lng: v.lng });
  });

  if (stops.length > 1) {
    L.polyline(stops.map(s => [s.lat, s.lng]), {
      color: '#00d4ff', weight: 2, opacity: 0.6, dashArray: '6 6'
    }).addTo(routeLayer);
  }

  L.marker([tc.lat, tc.lng], { icon: selectedCampIcon, zIndexOffset: 500 })
    .bindPopup(`<div class="popup-title">${team.flagEmoji} ${team.name}</div><div class="popup-subtitle">⛺ Training camp · ${tc.name}</div>`)
    .addTo(routeLayer);

  teamMatches.forEach((m, i) => {
    const v = venueMap[m.venueId];
    if (!v) return;
    const opponent = teamMap[m.team1]?.id === teamId
      ? (teamMap[m.team2]?.name || m.team2)
      : (teamMap[m.team1]?.name || m.team1);
    L.marker([v.lat, v.lng], { icon: selectedVenueIcon, zIndexOffset: 500 })
      .bindPopup(`
        <div class="popup-title">${v.name}</div>
        <div class="popup-subtitle">${team.flagEmoji} ${team.name} ${scoreLine(m)} ${opponent} · ${stageShort(m)}</div>
        <div class="popup-subtitle">${formatDate(m.date, m.time)}</div>
      `)
      .addTo(routeLayer);
  });

  if (stops.length > 1) {
    map.fitBounds(L.latLngBounds(stops.map(s => [s.lat, s.lng])), { padding: [60, 60] });
  } else if (stops.length === 1) {
    map.setView([stops[0].lat, stops[0].lng], 6);
  }

  let totalMiles = 0;
  for (let i = 1; i < stops.length; i++) {
    totalMiles += distanceMiles(stops[i-1].lat, stops[i-1].lng, stops[i].lat, stops[i].lng);
  }

  renderTeamPanel(team, teamMatches, totalMiles);
}

function renderTeamPanel(team, teamMatches, totalMiles) {
  const tc = team.trainingCamp;
  const isSaved = getSavedTeams().includes(team.id);

  let itinerary = `
    <div class="section-label">Journey</div>
    <div class="camp-row">
      <div class="stop-icon camp">⛺</div>
      <div class="stop-body">
        <div class="stop-title">${tc.name}</div>
        <div class="stop-sub">${tc.city} · Training base</div>
      </div>
    </div>
  `;

  let prevLat = tc.lat, prevLng = tc.lng;
  teamMatches.forEach((m, i) => {
    const v = venueMap[m.venueId];
    if (!v) return;
    const dist = distanceMiles(prevLat, prevLng, v.lat, v.lng);
    const isHome = teamMap[m.team1]?.id === team.id;
    const opponent = isHome ? (teamMap[m.team2]?.name || m.team2) : (teamMap[m.team1]?.name || m.team1);
    const oppFlag  = isHome ? (teamMap[m.team2]?.flagEmoji || '') : (teamMap[m.team1]?.flagEmoji || '');
    const bcPills  = (m.broadcasters || []).map(b => `<span class="broadcaster-pill">${b}</span>`).join('');
    const result   = resultFor(m, team.id);
    const resultLetter = result === 'win' ? 'W' : result === 'loss' ? 'L' : 'D';

    itinerary += `
      <div class="distance-connector">
        <div class="distance-line"></div>
        <span>${formatMiles(dist)}</span>
        <div class="distance-line"></div>
      </div>
      <div class="match-row">
        <div class="stop-icon match ${result}">${resultLetter}</div>
        <div class="stop-body">
          <div class="stop-title">vs ${oppFlag} ${opponent} <span class="match-score">${scoreLine(m)}</span></div>
          <div class="stop-sub">${formatDate(m.date, m.time)}</div>
          <div class="stop-sub">${v.name}, ${v.city}</div>
          <div class="broadcaster-list">${bcPills}</div>
        </div>
        <span class="stop-badge ${result}">${stageLabel(m)}</span>
      </div>
    `;
    prevLat = v.lat; prevLng = v.lng;
  });

  const finalStatus = teamFinalStatus(team, teamMatches);
  if (finalStatus) {
    itinerary += `
      <div class="final-status final-status--${finalStatus.tone}">
        <span class="final-status-label">${finalStatus.label}</span>
      </div>
    `;
  }

  const statusChipHtml = finalStatus ? `<span class="status-chip status-chip--${finalStatus.tone}">${finalStatus.label}</span>` : '';

  document.getElementById('team-panel').innerHTML = `
    <div class="team-panel-header">
      <div class="team-panel-flag">${team.flagEmoji}</div>
      <div class="team-panel-info">
        <div class="team-panel-name">${team.name}</div>
        <div class="team-panel-meta">Group ${team.group} · ${teamMatches.length} matches played</div>
        ${statusChipHtml ? `<div style="margin-top:5px">${statusChipHtml}</div>` : ''}
      </div>
      <button class="btn-bookmark ${isSaved ? 'saved' : ''}" id="btn-bookmark" title="${isSaved ? 'Remove from My List' : 'Add to My List'}">
        ${isSaved ? '★' : '☆'}
      </button>
    </div>
    <div class="travel-stats">
      <div class="travel-stat"><div class="stat-value">${Math.round(totalMiles).toLocaleString()}</div><div class="stat-label">Total miles</div></div>
      <div class="travel-stat"><div class="stat-value">${teamMatches.length}</div><div class="stat-label">Matches played</div></div>
      <div class="travel-stat"><div class="stat-value">${new Set(teamMatches.map(m => m.venueId)).size}</div><div class="stat-label">Venues</div></div>
    </div>
    ${itinerary}
  `;

  document.getElementById('empty-state').style.display  = 'none';
  document.getElementById('venue-panel').style.display  = 'none';
  document.getElementById('team-panel').style.display   = 'block';

  document.getElementById('btn-bookmark').addEventListener('click', () => {
    toggleSavedTeam(team.id);
    renderTeamPanel(team, teamMatches, totalMiles);
  });
}

// ============================================================
// VENUE SELECTION — show all matches at a city/venue
// ============================================================
function selectVenue(venueId) {
  activeVenueId = venueId;
  activeTeamId  = null;

  if (currentView !== 'explore') {
    currentView = 'explore';
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('.nav-tab[data-tab="explore"]').classList.add('active');
  }

  routeLayer.clearLayers();
  map.removeLayer(routeLayer);

  const venue = venueMap[venueId];
  if (!venue) return;

  map.setView([venue.lat, venue.lng], 11);
  renderVenuePanel(venue);
}

function renderVenuePanel(venue) {
  const venueMatches = matches
    .filter(m => m.venueId === venue.id)
    .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));

  const groups = {};
  venueMatches.forEach(m => {
    if (!groups[m.date]) groups[m.date] = [];
    groups[m.date].push(m);
  });

  const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  let matchesHtml = '';
  Object.keys(groups).sort().forEach(date => {
    const [y, mo, d] = date.split('-').map(Number);
    const dt = new Date(y, mo - 1, d);
    matchesHtml += `<div class="agenda-date-label">${days[dt.getDay()]}, ${months[mo-1]} ${d}</div>`;

    groups[date].forEach(m => {
      const t1 = teamMap[m.team1];
      const t2 = teamMap[m.team2];
      const [h, min] = m.time.split(':').map(Number);
      const hour   = h % 12 || 12;
      const ampm   = h < 12 ? 'AM' : 'PM';
      const minStr = min === 0 ? '' : `:${String(min).padStart(2,'0')}`;
      const bcPills = (m.broadcasters || []).map(b => `<span class="broadcaster-pill">${b}</span>`).join('');

      matchesHtml += `
        <div class="agenda-entry" style="cursor:pointer" onclick="selectTeam('${m.team1}')">
          <div class="agenda-time">${hour}${minStr} ${ampm}<br><span style="color:var(--color-muted);font-weight:400;font-size:10px;font-family:var(--font-body)">ET</span></div>
          <div class="agenda-body">
            <div class="agenda-matchup">${t1?.flagEmoji||''} ${t1?.name||m.team1} <span class="match-score">${scoreLine(m)}</span> ${t2?.flagEmoji||''} ${t2?.name||m.team2}</div>
            <div class="agenda-sub">${stageLabel(m)}</div>
            <div class="broadcaster-list">${bcPills}</div>
          </div>
        </div>
      `;
    });
  });

  document.getElementById('venue-panel').innerHTML = `
    <div class="team-panel-header">
      <div class="team-panel-flag">🏟️</div>
      <div class="team-panel-info">
        <div class="team-panel-name">${venue.name}</div>
        <div class="team-panel-meta">${venue.city}, ${venue.country} · ${venueMatches.length} matches</div>
      </div>
    </div>
    <div class="travel-stats">
      <div class="travel-stat"><div class="stat-value">${venueMatches.length}</div><div class="stat-label">Matches hosted</div></div>
      <div class="travel-stat"><div class="stat-value">${new Set(venueMatches.map(m => m.date)).size}</div><div class="stat-label">Match days</div></div>
      <div class="travel-stat"><div class="stat-value">${new Set(venueMatches.flatMap(m => [m.team1, m.team2])).size}</div><div class="stat-label">Teams visiting</div></div>
    </div>
    <div class="section-label">Match schedule · tap a match to see team route</div>
    ${matchesHtml}
  `;

  document.getElementById('empty-state').style.display  = 'none';
  document.getElementById('team-panel').style.display   = 'none';
  document.getElementById('venue-panel').style.display  = 'block';
}

// ============================================================
// CLEAR SELECTION
// ============================================================
function clearTeamSelection() {
  activeTeamId  = null;
  activeVenueId = null;
  routeLayer.clearLayers();
  map.removeLayer(routeLayer);
  currentView = 'explore';
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.nav-tab[data-tab="explore"]').classList.add('active');
  document.getElementById('mylist-panel').style.display  = 'none';
  document.getElementById('mylist-empty').style.display  = 'none';
  document.getElementById('team-panel').style.display    = 'none';
  document.getElementById('venue-panel').style.display   = 'none';
  document.getElementById('travel-panel').style.display  = 'none';
  document.getElementById('empty-state').style.display   = 'flex';
  document.body.classList.remove('map-hidden-mobile');
  map.setView([33, -97], 4);
}

// ============================================================
// MY LIST — localStorage persistence
// ============================================================
function getSavedTeams() {
  try { return JSON.parse(localStorage.getItem('matchpath-saved') || '[]'); }
  catch(e) { return []; }
}
function setSavedTeams(arr) {
  localStorage.setItem('matchpath-saved', JSON.stringify(arr));
}
function toggleSavedTeam(teamId) {
  let saved = getSavedTeams();
  saved = saved.includes(teamId) ? saved.filter(id => id !== teamId) : [...saved, teamId];
  setSavedTeams(saved);
  updateListBadge();
  if (currentView === 'mylist') renderMyList();
}
function updateListBadge() {
  const saved = getSavedTeams();
  const badge = document.getElementById('list-badge');
  if (saved.length > 0) {
    badge.style.display = 'inline-flex';
    badge.textContent = saved.length;
  } else {
    badge.style.display = 'none';
  }
}
updateListBadge();

// ============================================================
// VIEW SWITCHING
// ============================================================
function setView(view) {
  currentView = view;

  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.nav-tab[data-tab="${view}"]`).classList.add('active');

  document.getElementById('empty-state').style.display  = 'none';
  document.getElementById('team-panel').style.display   = 'none';
  document.getElementById('venue-panel').style.display  = 'none';
  document.getElementById('mylist-panel').style.display = 'none';
  document.getElementById('mylist-empty').style.display = 'none';
  document.getElementById('travel-panel').style.display = 'none';

  // On phones, the map only earns its space on Explore — My List and Travel
  // are list-driven, so give the sidebar the full screen there instead.
  document.body.classList.toggle('map-hidden-mobile', view !== 'explore');

  // Leaflet sizes its tiles from the container's pixel dimensions at the
  // moment it last checked — it has no way to know #map-wrapper's CSS
  // height just changed (0 <-> 42vh) when switching tabs on mobile, so
  // without this the map redraws blank/misaligned until the user drags it.
  // Wait for the 0.15s CSS transition to finish before recalculating.
  setTimeout(() => map.invalidateSize(), 180);

  if (view === 'explore') {
    if (activeTeamId) {
      document.getElementById('team-panel').style.display = 'block';
      if (!map.hasLayer(routeLayer)) map.addLayer(routeLayer);
    } else if (activeVenueId) {
      document.getElementById('venue-panel').style.display = 'block';
    } else {
      document.getElementById('empty-state').style.display = 'flex';
    }
  }

  if (view === 'mylist') {
    renderMyList();
  }

  if (view === 'travel') {
    document.getElementById('travel-panel').style.display = 'block';
    renderTravelLeaderboard();
    renderCityPlanner();
  }
}

// ============================================================
// MY LIST — agenda rendering
// ============================================================
function renderMyList() {
  const savedIds = getSavedTeams();

  if (savedIds.length === 0) {
    document.getElementById('mylist-empty').style.display = 'flex';
    document.getElementById('mylist-panel').style.display = 'none';
    return;
  }

  document.getElementById('mylist-empty').style.display = 'none';
  document.getElementById('mylist-panel').style.display = 'block';

  const savedTeams = savedIds.map(id => teamMap[id]).filter(Boolean);

  const chipsHtml = savedTeams.map(t => `
    <div class="saved-team-chip" data-id="${t.id}">
      <span>${t.flagEmoji}</span>
      <span>${t.name}</span>
      <span class="chip-remove" data-remove="${t.id}" title="Remove">✕</span>
    </div>
  `).join('');

  const seenMatchIds = new Set();
  const agendaMatches = [];
  savedTeams.forEach(team => {
    (team.matchIds || []).forEach(mid => {
      if (seenMatchIds.has(mid)) return;
      seenMatchIds.add(mid);
      const m = matchMap[mid];
      if (m) agendaMatches.push(m);
    });
  });
  agendaMatches.sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));

  const groups = {};
  agendaMatches.forEach(m => {
    if (!groups[m.date]) groups[m.date] = [];
    groups[m.date].push(m);
  });

  const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  let agendaHtml = '';
  Object.keys(groups).sort().forEach(date => {
    const [y, mo, d] = date.split('-').map(Number);
    const dt = new Date(y, mo - 1, d);
    agendaHtml += `<div class="agenda-date-label">${days[dt.getDay()]}, ${months[mo-1]} ${d}</div>`;

    groups[date].forEach(m => {
      const t1 = teamMap[m.team1];
      const t2 = teamMap[m.team2];
      const v  = venueMap[m.venueId];
      const flag1 = savedIds.includes(m.team1) ? `<span class="saved-flag">${t1?.flagEmoji||''}</span>` : (t1?.flagEmoji||'');
      const flag2 = savedIds.includes(m.team2) ? `<span class="saved-flag">${t2?.flagEmoji||''}</span>` : (t2?.flagEmoji||'');
      const [h, min] = m.time.split(':').map(Number);
      const hour   = h % 12 || 12;
      const ampm   = h < 12 ? 'AM' : 'PM';
      const minStr = min === 0 ? '' : `:${String(min).padStart(2,'0')}`;
      const bcPills = (m.broadcasters || []).map(b => `<span class="broadcaster-pill">${b}</span>`).join('');

      agendaHtml += `
        <div class="agenda-entry">
          <div class="agenda-time">${hour}${minStr} ${ampm}<br><span style="color:var(--color-muted);font-weight:400;font-size:10px;font-family:var(--font-body)">ET</span></div>
          <div class="agenda-body">
            <div class="agenda-matchup">${flag1} ${t1?.name||m.team1} <span class="match-score">${scoreLine(m)}</span> ${flag2} ${t2?.name||m.team2}</div>
            <div class="agenda-sub">${stageLabel(m)} · ${v?.name||''}, ${v?.city||''}</div>
            <div class="broadcaster-list">${bcPills}</div>
          </div>
        </div>
      `;
    });
  });

  document.getElementById('mylist-panel').innerHTML = `
    <div class="mylist-header">
      <div class="mylist-header-title">My List</div>
      <div class="mylist-header-sub">${savedTeams.length} team${savedTeams.length === 1 ? '' : 's'} · ${agendaMatches.length} match${agendaMatches.length === 1 ? '' : 'es'}</div>
    </div>
    <div class="saved-teams-row">${chipsHtml}</div>
    ${agendaHtml}
  `;

  document.querySelectorAll('.saved-team-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      if (e.target.dataset.remove) return;
      setView('explore');
      selectTeam(chip.dataset.id);
    });
  });

  document.querySelectorAll('.chip-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSavedTeam(btn.dataset.remove);
    });
  });
}

// ============================================================
// TRAVEL TAB — team leaderboard + city-to-city planner
// ============================================================
function renderTravelLeaderboard() {
  const rows = teams.map(team => {
    const tMatches = teamMatchesFor(team);
    const miles = teamTotalMiles(team, tMatches);
    return { team, miles, matchCount: tMatches.length, status: teamFinalStatus(team, tMatches) };
  }).sort((a, b) => b.miles - a.miles);

  const max = rows.length ? rows[0].miles : 1;

  document.getElementById('travel-leaderboard').innerHTML = rows.map((r, i) => `
    <div class="travel-row" data-team="${r.team.id}">
      <div class="travel-rank">${i + 1}</div>
      <div class="travel-flag">${r.team.flagEmoji}</div>
      <div class="travel-body">
        <div class="travel-name">
          ${r.team.name}
          ${r.status ? `<span class="status-chip status-chip--${r.status.tone}">${r.status.label}</span>` : ''}
        </div>
        <div class="travel-bar-track"><div class="travel-bar-fill" style="width:${Math.max(4, r.miles / max * 100)}%"></div></div>
      </div>
      <div class="travel-miles">${formatMiles(r.miles)}</div>
    </div>
  `).join('');

  document.querySelectorAll('.travel-row').forEach(row => {
    row.addEventListener('click', () => {
      setView('explore');
      selectTeam(row.dataset.team);
    });
  });
}

function renderCityPlanner() {
  const aId = document.getElementById('city-a').value;
  const bId = document.getElementById('city-b').value;
  const a = venueMap[aId], b = venueMap[bId];
  if (!a || !b) return;

  const resultEl = document.getElementById('city-planner-result');
  if (aId === bId) {
    resultEl.innerHTML = `
      <div class="city-planner-sub">Pick two different host cities to compare.</div>
    `;
    return;
  }

  const dist = distanceMiles(a.lat, a.lng, b.lat, b.lng);
  const aMatches = matches.filter(m => m.venueId === aId).length;
  const bMatches = matches.filter(m => m.venueId === bId).length;

  resultEl.innerHTML = `
    <div class="city-planner-distance">${formatMiles(dist)}</div>
    <div class="city-planner-sub">between ${a.city} and ${b.city}</div>
    <div class="city-planner-stats">
      <div class="city-planner-stat"><div class="stat-value">${aMatches}</div><div class="stat-label">${a.city} matches</div></div>
      <div class="city-planner-stat"><div class="stat-value">${bMatches}</div><div class="stat-label">${b.city} matches</div></div>
    </div>
  `;
}

(function initCityPlanner() {
  const cityAEl = document.getElementById('city-a');
  const cityBEl = document.getElementById('city-b');
  const sortedVenues = [...venues].sort((a, b) => a.city.localeCompare(b.city));
  const optionsHtml = sortedVenues.map(v => `<option value="${v.id}">${v.city}, ${v.country}</option>`).join('');
  cityAEl.innerHTML = optionsHtml;
  cityBEl.innerHTML = optionsHtml;
  cityAEl.value = sortedVenues[0].id;
  cityBEl.value = sortedVenues[1].id;
  cityAEl.addEventListener('change', renderCityPlanner);
  cityBEl.addEventListener('change', renderCityPlanner);
})();

// ============================================================
// NAV TABS
// ============================================================
document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    setView(this.dataset.tab);
  });
});

document.getElementById('btn-go-explore').addEventListener('click', () => {
  setView('explore');
  document.getElementById('team-search').focus();
});
</script>
</body>
</html>

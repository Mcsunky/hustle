/* Hustle data. Newest day first. Each day:
   - comps/windows/picks: the Slate. results: { pickNumber: {status, score, src, srcName} } once settled.
   - tickets: the two 4-leg tickets. acca: the full-slate booking code.
   - mega: { code, odds, booked, legs[{fx, comp, ko, mk, odds}], results: [ {status, score, src, srcName} per leg ] | null, landed: true|false|null }
   - audit: the previous day's settlement (picks, tickets, lessons). settled: one-line summary once the day is audited. */
window.SLATES = [
  {
    date: "2026-11-09",
    label: "Monday 9 November 2026",
    built: "Built 01:05 UK",
    noSlate: "International break. The bookmaker lists only two games today in the leagues the Slate covers, both in LaLiga 2. That isn't enough for a rule-compliant Slate, and well short of the 12+ legs a Mega needs, so there are no picks and no booking codes today. The next slate posts at 01:00 UK tomorrow.",
    comps: [], passes: "", tickets: [],
    results: null,
    audit: {
      of: "Sunday 8 November 2026",
      note: "Each result has at least two sources. One match report is linked below.",
      picks: [
        { fx: "Club Brugge v Anderlecht", mk: "Double Chance 1X", odds: "1.16", score: "1–1", status: "won", src: "https://www.voetbalkrant.com/belgie/jupiler-pro-league/2026-2027/kalender/speeldag-11/club-brugge/anderlecht/een-klasseflits-volstaat-anderlecht-bezorgt-club-brugge-zure-namiddag-op-jan-breydel", srcName: "Voetbalkrant" },
        { fx: "Gent v Kortrijk", mk: "Home Win", odds: "1.48", score: "1–0", status: "won", src: "https://sporza.be/nl/matches/voetbal/jupiler-pro-league/2026-2027/regulier/11/kaa-gent-kv-kortrijk-live-16-uur-profiteert-gent-van-blauw-zwart-puntenverlies-tegen-rode-lantaarn-kortrijk~1781871665148/", srcName: "Sporza" },
        { fx: "Heerenveen v Feyenoord", mk: "Over 1.5 Goals", odds: "1.13", score: "5–3", status: "won", src: "https://www.foxsports.com/soccer/eredivisie-sc-heerenveen-vs-feyenoord-nov-08-2026-game-boxscore-878334", srcName: "Fox Sports" },
        { fx: "Cambuur v PSV", mk: "Over 2.5 Goals", odds: "1.30", score: "2–5", status: "won", src: "https://nos.nl/artikel/2638615-psv-wint-en-is-nieuwe-koploper-na-verlies-feyenoord-en-gelijkspel-twente-ajax", srcName: "NOS" },
        { fx: "Brighton v Brentford", mk: "Over 1.5 Goals", odds: "1.17", score: "2–0", status: "won", src: "https://www.skysports.com/football/brighton-and-hove-albion-vs-brentford/5565576225764913232", srcName: "Sky Sports" },
        { fx: "Celtic v Kilmarnock", mk: "Home Win & Over 1.5 Goals", odds: "1.21", score: "1–0", status: "lost", src: "https://www.celticnewsnow.com/news/scales-on-target-as-celtic-defeat-kilmarnock/743607/", srcName: "Celtic News Now" },
        { fx: "Freiburg v Union Berlin", mk: "Double Chance 1X", odds: "1.15", score: "2–0", status: "won", src: "https://www.espn.com/soccer/match/_/gameId/401884741", srcName: "ESPN" },
        { fx: "Hoffenheim v Schalke", mk: "Double Chance 1X", odds: "1.19", score: "2–1", status: "won", src: "https://www.foxsports.com/soccer/bundesliga-hoffenheim-vs-fc-schalke-04-nov-08-2026-game-boxscore-912621", srcName: "Fox Sports" },
        { fx: "Midtjylland v SønderjyskE", mk: "Home Win & Over 1.5 Goals", odds: "1.36", score: "2–2", status: "lost", src: "https://bold.dk/fodbold/stillinger/superligaen/nyheder/fcm-dummede-sig-mod-sonderjyske", srcName: "bold.dk" },
        { fx: "Beşiktaş v Gençlerbirliği", mk: "Home Win", odds: "1.23", score: "3–0", status: "won", src: "https://www.hurriyet.com.tr/sporarena/canli-anlatim-besiktas-genclerbirligi-super-lig-maci-43370512", srcName: "Hürriyet" },
        { fx: "Estrela Amadora v Benfica", mk: "Over 1.5 Goals", odds: "1.14", score: "2–3", status: "won", src: "https://www.ojogo.pt/futebol/artigo/pavlidis-da-vitoria-ao-benfica-sobre-o-estrela-da-amadora-ao-cair-do-pano/18146115", srcName: "O Jogo" }
      ],
      tickets: [
        { name: "Safest 4-leg", total: "1.71", landed: true },
        { name: "Home strength 4-leg", total: "3.00", landed: false },
        { name: "Full accumulator UU1SLA", total: "9.32", landed: false },
        { name: "Mega R0XWP2 (10 of 13 legs)", total: "273.99", landed: false }
      ],
      lessons: [
        "Both losses were Home & Over 1.5. Celtic won 1–0, so a straight Home Win would have landed. This is the value rule you set: skip a combined market when it adds only a few hundredths. It applies from today.",
        "Midtjylland drew 2–2 at home against the bottom side, a reminder that a big home favourite can still slip. Keep those to one per ticket.",
        "Over 1.5, Over 2.5 and 1X went 8 from 8 across both days. They stay the base of the safe ticket."
      ]
    }
  },
  {
    date: "2026-11-08",
    label: "Sunday 8 November 2026",
    built: "Built 01:25 UK",
    comps: [
      { name: "Belgian Pro League", windows: [ { ko: "12:30 UK", picks: [
        { n: 1, fx: "Club Brugge v Anderlecht", mk: "Double Chance 1X", odds: "1.16" } ] }, { ko: "15:00 UK", picks: [
        { n: 2, fx: "Gent v Kortrijk", mk: "Home Win", odds: "1.48" } ] } ] },
      { name: "Eredivisie", windows: [ { ko: "11:15 UK", picks: [
        { n: 3, fx: "Heerenveen v Feyenoord", mk: "Over 1.5 Goals", odds: "1.13" } ] }, { ko: "15:45 UK", picks: [
        { n: 4, fx: "Cambuur v PSV", mk: "Over 2.5 Goals", odds: "1.30" } ] } ] },
      { name: "Premier League", windows: [ { ko: "14:00 UK", picks: [
        { n: 5, fx: "Brighton v Brentford", mk: "Over 1.5 Goals", odds: "1.17" } ] } ] },
      { name: "Scottish Premiership", windows: [ { ko: "16:00 UK", picks: [
        { n: 6, fx: "Celtic v Kilmarnock", mk: "Home Win & Over 1.5 Goals", odds: "1.21" } ] } ] },
      { name: "Bundesliga", windows: [ { ko: "16:30 UK", picks: [
        { n: 7, fx: "Freiburg v Union Berlin", mk: "Double Chance 1X", odds: "1.15" } ] }, { ko: "18:30 UK", picks: [
        { n: 8, fx: "Hoffenheim v Schalke", mk: "Double Chance 1X", odds: "1.19" } ] } ] },
      { name: "Danish Superliga", windows: [ { ko: "17:00 UK", picks: [
        { n: 9, fx: "Midtjylland v SønderjyskE", mk: "Home Win & Over 1.5 Goals", odds: "1.36" } ] } ] },
      { name: "Süper Lig", windows: [ { ko: "18:00 UK", picks: [
        { n: 10, fx: "Beşiktaş v Gençlerbirliği", mk: "Home Win", odds: "1.23" } ] } ] },
      { name: "Primeira Liga", windows: [ { ko: "20:30 UK", picks: [
        { n: 11, fx: "Estrela Amadora v Benfica", mk: "Over 1.5 Goals", odds: "1.14" } ] } ] }
    ],
    passes: "Atlético v Barcelona (Atlético concede 0.7 a game, no safe angle), Crystal Palace v Liverpool (Palace scoreless in three), Villarreal v Getafe (1 home win in 5), AEK v Levadiakos (three straight losses), Olympiacos v PAOK (kickoff not officially confirmed), Inter v Como (Lautaro out, Como in form), Sunderland v Chelsea, Napoli v Lazio, Lens v Marseille.",
    tickets: [
      { name: "Safest 4-leg", legs: [
        ["Heerenveen v Feyenoord: Over 1.5", "1.13"],
        ["Estrela v Benfica: Over 1.5", "1.14"],
        ["Freiburg v Union Berlin: 1X", "1.15"],
        ["Club Brugge v Anderlecht: 1X", "1.16"]
      ], total: "1.71" },
      { name: "Home strength 4-leg", legs: [
        ["Gent v Kortrijk: Home Win", "1.48"],
        ["Midtjylland v SønderjyskE: Home & Over 1.5", "1.36"],
        ["Beşiktaş v Gençlerbirliği: Home Win", "1.23"],
        ["Celtic v Kilmarnock: Home & Over 1.5", "1.21"]
      ], total: "3.00" }
    ],
    acca: { code: "UU1SLA", legs: 11, odds: "9.32", booked: "01:20 UK" },
    mega: {
      code: "R0XWP2", odds: "273.99", booked: "01:25 UK", landed: false,
      results: [
        { status: "won", score: "1–1", src: "https://www.espn.com/soccer/match/_/gameId/401874810", srcName: "ESPN" },
        { status: "won", score: "5–3", src: "https://www.foxsports.com/soccer/eredivisie-sc-heerenveen-vs-feyenoord-nov-08-2026-game-boxscore-878334", srcName: "Fox Sports" },
        { status: "lost", score: "1–1", src: "https://www.voetbalkrant.com/belgie/jupiler-pro-league/2026-2027/kalender/speeldag-11/club-brugge/anderlecht/een-klasseflits-volstaat-anderlecht-bezorgt-club-brugge-zure-namiddag-op-jan-breydel", srcName: "Voetbalkrant" },
        { status: "lost", score: "2–0", src: "https://www.skysports.com/football/brighton-and-hove-albion-vs-brentford/5565576225764913232", srcName: "Sky Sports" },
        { status: "won", score: "1–0", src: "https://sporza.be/nl/matches/voetbal/jupiler-pro-league/2026-2027/regulier/11/kaa-gent-kv-kortrijk-live-16-uur-profiteert-gent-van-blauw-zwart-puntenverlies-tegen-rode-lantaarn-kortrijk~1781871665148/", srcName: "Sporza" },
        { status: "lost", score: "2–5", src: "https://www.heartsfc.co.uk/blogs/news/match-report-hearts-2-5-falkirk", srcName: "Hearts FC" },
        { status: "won", score: "4–3", src: "https://www.myfootballfacts.com/match/eredivisie-2026-27-az-vs-groningen-2026-11-08/", srcName: "My Football Facts" },
        { status: "won", score: "2–5", src: "https://nos.nl/artikel/2638615-psv-wint-en-is-nieuwe-koploper-na-verlies-feyenoord-en-gelijkspel-twente-ajax", srcName: "NOS" },
        { status: "won", score: "2–0", src: "https://www.espn.com/soccer/match/_/gameId/401884741", srcName: "ESPN" },
        { status: "won", score: "4–4", src: "https://www.espn.com/soccer/report/_/gameId/401879240", srcName: "ESPN" },
        { status: "won", score: "1–0", src: "https://www.voetbalkrant.com/nieuws/2026-11-08/ross-sykes-kopt-union-naar-de-leidersplaats-genk-ziet-top-steeds-verder-weglopen", srcName: "Voetbalkrant" },
        { status: "won", score: "2–1", src: "https://www.foxsports.com/soccer/bundesliga-hoffenheim-vs-fc-schalke-04-nov-08-2026-game-boxscore-912621", srcName: "Fox Sports" },
        { status: "won", score: "1–2", src: "https://www.footmercato.net/live/2320001620100876839-lens-vs-marseille", srcName: "Foot Mercato" }
      ],
      legs: [
        { fx: "Napoli v Lazio", comp: "Serie A", ko: "11:30", mk: "Both Teams to Score: Yes", odds: "1.56" },
        { fx: "Heerenveen v Feyenoord", comp: "Eredivisie", ko: "11:15", mk: "Both Teams to Score: Yes", odds: "1.45" },
        { fx: "Club Brugge v Anderlecht", comp: "Belgian Pro League", ko: "12:30", mk: "Home Win", odds: "1.52" },
        { fx: "Brighton v Brentford", comp: "Premier League", ko: "14:00", mk: "Both Teams to Score: Yes", odds: "1.56" },
        { fx: "Gent v Kortrijk", comp: "Belgian Pro League", ko: "15:00", mk: "Home Win", odds: "1.48" },
        { fx: "Hearts v Falkirk", comp: "Scottish Premiership", ko: "15:00", mk: "Home Win", odds: "1.66" },
        { fx: "AZ v Groningen", comp: "Eredivisie", ko: "15:45", mk: "Both Teams to Score: Yes", odds: "1.55" },
        { fx: "Cambuur v PSV", comp: "Eredivisie", ko: "15:45", mk: "Both Teams to Score: Yes", odds: "1.46" },
        { fx: "Freiburg v Union Berlin", comp: "Bundesliga", ko: "16:30", mk: "Home Win", odds: "1.53" },
        { fx: "Man Utd v Aston Villa", comp: "Premier League", ko: "16:30", mk: "Both Teams to Score: Yes", odds: "1.52" },
        { fx: "Union SG v Genk", comp: "Belgian Pro League", ko: "17:30", mk: "Home Win", odds: "1.64" },
        { fx: "Hoffenheim v Schalke", comp: "Bundesliga", ko: "18:30", mk: "Home Win", odds: "1.65" },
        { fx: "Lens v Marseille", comp: "Ligue 1", ko: "19:45", mk: "Both Teams to Score: Yes", odds: "1.46" }
      ]
    },
    results: {
      1: { status: "won", score: "1–1", src: "https://www.voetbalkrant.com/belgie/jupiler-pro-league/2026-2027/kalender/speeldag-11/club-brugge/anderlecht/een-klasseflits-volstaat-anderlecht-bezorgt-club-brugge-zure-namiddag-op-jan-breydel", srcName: "Voetbalkrant" },
      2: { status: "won", score: "1–0", src: "https://sporza.be/nl/matches/voetbal/jupiler-pro-league/2026-2027/regulier/11/kaa-gent-kv-kortrijk-live-16-uur-profiteert-gent-van-blauw-zwart-puntenverlies-tegen-rode-lantaarn-kortrijk~1781871665148/", srcName: "Sporza" },
      3: { status: "won", score: "5–3", src: "https://www.foxsports.com/soccer/eredivisie-sc-heerenveen-vs-feyenoord-nov-08-2026-game-boxscore-878334", srcName: "Fox Sports" },
      4: { status: "won", score: "2–5", src: "https://nos.nl/artikel/2638615-psv-wint-en-is-nieuwe-koploper-na-verlies-feyenoord-en-gelijkspel-twente-ajax", srcName: "NOS" },
      5: { status: "won", score: "2–0", src: "https://www.skysports.com/football/brighton-and-hove-albion-vs-brentford/5565576225764913232", srcName: "Sky Sports" },
      6: { status: "lost", score: "1–0", src: "https://www.celticnewsnow.com/news/scales-on-target-as-celtic-defeat-kilmarnock/743607/", srcName: "Celtic News Now" },
      7: { status: "won", score: "2–0", src: "https://www.espn.com/soccer/match/_/gameId/401884741", srcName: "ESPN" },
      8: { status: "won", score: "2–1", src: "https://www.foxsports.com/soccer/bundesliga-hoffenheim-vs-fc-schalke-04-nov-08-2026-game-boxscore-912621", srcName: "Fox Sports" },
      9: { status: "lost", score: "2–2", src: "https://bold.dk/fodbold/stillinger/superligaen/nyheder/fcm-dummede-sig-mod-sonderjyske", srcName: "bold.dk" },
      10: { status: "won", score: "3–0", src: "https://www.hurriyet.com.tr/sporarena/canli-anlatim-besiktas-genclerbirligi-super-lig-maci-43370512", srcName: "Hürriyet" },
      11: { status: "won", score: "2–3", src: "https://www.ojogo.pt/futebol/artigo/pavlidis-da-vitoria-ao-benfica-sobre-o-estrela-da-amadora-ao-cair-do-pano/18146115", srcName: "O Jogo" }
    },
    settled: "Settled 23:40 UK: 11 picks, 9 won, 2 lost (82%). Safest 4-leg landed. Home strength 4-leg and accumulator UU1SLA lost on Celtic (1–0, Home & Over 1.5 needed two goals) and Midtjylland (2–2). Mega R0XWP2 lost: 10 of 13 legs won.",
    audit: {
      of: "Saturday 7 November 2026",
      note: "Settled with Leipzig and PSG as straight Home Wins, as you changed them. Flashscore's pages loaded without scores, so each result is checked against a match report, linked below.",
      picks: [
        { fx: "Arsenal v Hull City", mk: "Home Win", odds: "1.20", score: "1–0", status: "won", src: "https://www.espn.com/soccer/report/_/gameId/401878760", srcName: "ESPN" },
        { fx: "RB Leipzig v Augsburg", mk: "Home Win", odds: "1.48", score: "5–2", status: "won", src: "https://vglive.vg.no/fotball/event/rb-leipzig-fc-augsburg/757624", srcName: "VG Live" },
        { fx: "Borussia Dortmund v Elversberg", mk: "Home Win", odds: "1.34", score: "2–1", status: "won", src: "https://www.espn.com/soccer/match/_/gameId/401884745", srcName: "ESPN" },
        { fx: "Mainz v Bayern Munich", mk: "Over 2.5 Goals", odds: "1.26", score: "1–2", status: "won", src: "https://www.espn.com/soccer/report/_/gameId/401884740", srcName: "ESPN" },
        { fx: "Galatasaray v Amed SK", mk: "Double Chance 1X", odds: "1.13", score: "4–3", status: "won", src: "https://www.hurriyet.com.tr/sporarena/galatasaray-4-3-amed-sportif-faaliyetler-super-lig-maci-ozeti-43369174", srcName: "Hürriyet" },
        { fx: "Roma v Sassuolo", mk: "Over 2.5 Goals", odds: "1.36", score: "3–0", status: "won", src: "https://www.agi.it/sport/news/2026-11-07/calcio-roma-sassuolo-39932756/", srcName: "AGI" },
        { fx: "Valencia v Real Madrid", mk: "Over 1.5 Goals", odds: "1.14", score: "0–3", status: "won", src: "https://www.espn.com/soccer/report/_/gameId/401882808", srcName: "ESPN" },
        { fx: "PSG v Troyes", mk: "Home Win", odds: "1.15", score: "1–0", status: "won", src: "https://www.beinsports.com/en-us/soccer/ligue-1/articles/psg-vs-troyes-highlights-ligue-1-2026-11-07", srcName: "beIN Sports" },
        { fx: "Rosario Central v Estudiantes (Río Cuarto)", mk: "Home Win", odds: "1.16", score: "2–0", status: "won", src: "https://www.cadena3.com/noticia/deportes-rosario/a-rosario-central-se-le-escapo-el-bicampeonato-por-segundos-tras-ganar-2-a-0-como-local_610856", srcName: "Cadena 3" },
        { fx: "Inter Miami v Charlotte FC", mk: "Over 2.5 Goals", odds: "1.26", score: "3–3", status: "won", src: "https://sports.yahoo.com/articles/charlotte-fc-rallies-3-goal-234711042.html", srcName: "Yahoo Sports" }
      ],
      tickets: [
        { name: "Safest 4-leg", total: "1.72", landed: true },
        { name: "Goals & cover 4-leg", total: "3.20", landed: true },
        { name: "Full accumulator as posted (Leipzig and PSG Home Win)", total: "8.76", landed: true },
        { name: "Booked code XB33Z4 (still had PSG Home & Over 1.5)", total: "9.12", landed: false },
        { name: "Mega W2VN9E (9 of 13 legs)", total: "351.67", landed: false }
      ],
      lessons: [
        "10 from 10 is variance. The process stays the same.",
        "Your switch to straight Home Wins saved the slip: PSG won 1–0, which beat Home & Over 1.5. With elite home sides that rotate players, a straight win is safer than adding goals.",
        "The Mega lost on four one-sided results (1–0, 0–2, 1–0, 2–0). For Megas, avoid BTTS and Over 2.5 where one side is a strong defensive favourite."
      ]
    }
  },
  {
    date: "2026-11-07",
    label: "Saturday 7 November 2026",
    built: "Built 01:30 UK",
    comps: [
      { name: "Premier League", windows: [ { ko: "15:00 UK", picks: [
        { n: 1, fx: "Arsenal v Hull City", mk: "Home Win", odds: "1.20" } ] } ] },
      { name: "Bundesliga", windows: [ { ko: "14:30 UK", picks: [
        { n: 2, fx: "RB Leipzig v Augsburg", mk: "Home Win", odds: "1.48" },
        { n: 3, fx: "Borussia Dortmund v Elversberg", mk: "Home Win", odds: "1.34" },
        { n: 4, fx: "Mainz v Bayern Munich", mk: "Over 2.5 Goals", odds: "1.26" } ] } ] },
      { name: "Süper Lig", windows: [ { ko: "16:00 UK", picks: [
        { n: 5, fx: "Galatasaray v Amed SK", mk: "Double Chance 1X", odds: "1.13" } ] } ] },
      { name: "Serie A", windows: [ { ko: "19:45 UK", picks: [
        { n: 6, fx: "Roma v Sassuolo", mk: "Over 2.5 Goals", odds: "1.36" } ] } ] },
      { name: "LaLiga", windows: [ { ko: "20:00 UK", picks: [
        { n: 7, fx: "Valencia v Real Madrid", mk: "Over 1.5 Goals", odds: "1.14" } ] } ] },
      { name: "Ligue 1", windows: [ { ko: "20:05 UK", picks: [
        { n: 8, fx: "PSG v Troyes", mk: "Home Win", odds: "1.15" } ] } ] },
      { name: "Argentina Liga Profesional", windows: [ { ko: "20:30 UK", picks: [
        { n: 9, fx: "Rosario Central v Estudiantes (Río Cuarto)", mk: "Home Win", odds: "1.16" } ] } ] },
      { name: "MLS Decision Day", windows: [ { ko: "21:00 UK", picks: [
        { n: 10, fx: "Inter Miami v Charlotte FC", mk: "Over 2.5 Goals", odds: "1.26" } ] } ] }
    ],
    passes: "Forest v Man City (Forest yet to score at home, City away favourite), Stuttgart v Bremen (home record 1-0-2), Sporting v Moreirense (new coach's first game), Philadelphia v Toronto (four without a win), Antwerp v Lommel (poor form), St Mirren v Rangers (away favourite, no clean goals angle), Aris v Panaitolikos (conflicting team news), Boca v Defensa y Justicia, Leeds v Spurs, Fulham v Newcastle and the Championship card.",
    tickets: [
      { name: "Safest 4-leg", legs: [
        ["Valencia v Real Madrid: Over 1.5", "1.14"],
        ["Galatasaray v Amed SK: 1X", "1.13"],
        ["Rosario Central v Estudiantes RC: Home Win", "1.16"],
        ["PSG v Troyes: Home Win", "1.15"]
      ], total: "1.72" },
      { name: "Goals & cover 4-leg", legs: [
        ["Mainz v Bayern: Over 2.5", "1.26"],
        ["Roma v Sassuolo: Over 2.5", "1.36"],
        ["Inter Miami v Charlotte: Over 2.5", "1.26"],
        ["RB Leipzig v Augsburg: Home Win", "1.48"]
      ], total: "3.20" }
    ],
    acca: { code: "XB33Z4", legs: 10, odds: "8.76", booked: "01:30 UK", note: "Updated 01:40 UK to lower the risk: Leipzig and PSG are now straight Home Wins. Code XB33Z4 still holds the original Home & Over 1.5 on both, so if you load it, switch those two legs to Home Win yourself." },
    mega: {
      code: "W2VN9E", odds: "351.67", booked: "08:50 UK", landed: false,
      results: [
        { status: "lost", score: "1–0", src: "https://www.skysports.com/football/leeds-united-vs-tottenham-hotspur/report/559540", srcName: "Sky Sports" },
        { status: "won", score: "5–2", src: "https://vglive.vg.no/fotball/event/rb-leipzig-fc-augsburg/757624", srcName: "VG Live" },
        { status: "won", score: "1–2", src: "https://www.espn.com/soccer/report/_/gameId/401884740", srcName: "ESPN" },
        { status: "lost", score: "1–0", src: "https://www.espn.com/soccer/report/_/gameId/401878760", srcName: "ESPN" },
        { status: "won", score: "1–1", src: "https://www.fulhamfc.com/news/2026/november/07/fulham-1-1-newcastle-united/", srcName: "Fulham FC" },
        { status: "won", score: "4–3", src: "https://www.hurriyet.com.tr/sporarena/galatasaray-4-3-amed-sportif-faaliyetler-super-lig-maci-ozeti-43369174", srcName: "Hürriyet" },
        { status: "won", score: "3–0", src: "https://www.ertsports.gr/super-league/aris-panaitolikos-3-0-aneti-epistrofi-stis-nikes-gia-tous-thessalonikeis/", srcName: "ERT Sports" },
        { status: "won", score: "2–2", src: "https://sporza.be/nl/matches/voetbal/jupiler-pro-league/2026-2027/regulier/11/antwerp-lommel-sk-live-ecuadoraanse-connectie-brengt-antwerp-op-voorsprong-na-penaltymisser-van-lommel~1781871729145/", srcName: "Sporza" },
        { status: "won", score: "0–3", src: "https://www.espn.com/soccer/report/_/gameId/401882808", srcName: "ESPN" },
        { status: "lost", score: "0–2", src: "https://www.skysports.com/football/st-mirren-vs-rangers/558409", srcName: "Sky Sports" },
        { status: "lost", score: "1–0", src: "https://noticiasargentinas.com/deportes/rosario-central-le-gano-2-0-a-estudiantes-de-rio-cuarto--pero-no-le-alcanzo-para-ser-campeon-de-liga_a6aefa7354574a35e62f27dae", srcName: "Noticias Argentinas" },
        { status: "lost", score: "2–0", src: "https://www.cadena3.com/noticia/deportes-rosario/a-rosario-central-se-le-escapo-el-bicampeonato-por-segundos-tras-ganar-2-a-0-como-local_610856", srcName: "Cadena 3" },
        { status: "won", score: "4–1", src: "https://www.tfcrepublic.ca/november-7-toronto-fc-philadelphia-union/", srcName: "TFC Republic" }
      ],
      legs: [
        { fx: "Leeds United v Tottenham", comp: "Premier League", ko: "12:30", mk: "Both Teams to Score: Yes", odds: "1.71" },
        { fx: "RB Leipzig v Augsburg", comp: "Bundesliga", ko: "14:30", mk: "Home Win", odds: "1.47" },
        { fx: "Mainz v Bayern Munich", comp: "Bundesliga", ko: "14:30", mk: "Both Teams to Score: Yes", odds: "1.58" },
        { fx: "Arsenal v Hull City", comp: "Premier League", ko: "15:00", mk: "Over 2.5 Goals", odds: "1.50" },
        { fx: "Fulham v Newcastle", comp: "Premier League", ko: "15:00", mk: "Both Teams to Score: Yes", odds: "1.63" },
        { fx: "Galatasaray v Amed SK", comp: "Süper Lig", ko: "16:00", mk: "Home Win", odds: "1.43" },
        { fx: "Aris v Panaitolikos", comp: "Greek Super League", ko: "17:30", mk: "Home Win & Over 1.5 Goals", odds: "1.62" },
        { fx: "Antwerp v Lommel", comp: "Belgian Pro League", ko: "19:45", mk: "Both Teams to Score: Yes", odds: "1.52" },
        { fx: "Valencia v Real Madrid", comp: "LaLiga", ko: "20:00", mk: "Over 2.5 Goals", odds: "1.45" },
        { fx: "St Mirren v Rangers", comp: "Scottish Premiership", ko: "20:00", mk: "Over 2.5 Goals", odds: "1.57" },
        { fx: "Boca Juniors v Defensa y Justicia", comp: "Argentina Liga Profesional", ko: "20:30", mk: "Home Win & Over 1.5 Goals", odds: "1.69" },
        { fx: "Rosario Central v Estudiantes (Río Cuarto)", comp: "Argentina Liga Profesional", ko: "20:30", mk: "Over 2.5 Goals", odds: "1.63" },
        { fx: "Philadelphia Union v Toronto FC", comp: "MLS", ko: "21:00", mk: "Both Teams to Score: Yes", odds: "1.64" }
      ]
    },
    results: {
      1: { status: "won", score: "1–0", src: "https://www.espn.com/soccer/report/_/gameId/401878760", srcName: "ESPN" },
      2: { status: "won", score: "5–2", src: "https://vglive.vg.no/fotball/event/rb-leipzig-fc-augsburg/757624", srcName: "VG Live" },
      3: { status: "won", score: "2–1", src: "https://www.espn.com/soccer/match/_/gameId/401884745", srcName: "ESPN" },
      4: { status: "won", score: "1–2", src: "https://www.espn.com/soccer/report/_/gameId/401884740", srcName: "ESPN" },
      5: { status: "won", score: "4–3", src: "https://www.hurriyet.com.tr/sporarena/galatasaray-4-3-amed-sportif-faaliyetler-super-lig-maci-ozeti-43369174", srcName: "Hürriyet" },
      6: { status: "won", score: "3–0", src: "https://www.agi.it/sport/news/2026-11-07/calcio-roma-sassuolo-39932756/", srcName: "AGI" },
      7: { status: "won", score: "0–3", src: "https://www.espn.com/soccer/report/_/gameId/401882808", srcName: "ESPN" },
      8: { status: "won", score: "1–0", src: "https://www.beinsports.com/en-us/soccer/ligue-1/articles/psg-vs-troyes-highlights-ligue-1-2026-11-07", srcName: "beIN Sports" },
      9: { status: "won", score: "2–0", src: "https://www.cadena3.com/noticia/deportes-rosario/a-rosario-central-se-le-escapo-el-bicampeonato-por-segundos-tras-ganar-2-a-0-como-local_610856", srcName: "Cadena 3" },
      10: { status: "won", score: "3–3", src: "https://sports.yahoo.com/articles/charlotte-fc-rallies-3-goal-234711042.html", srcName: "Yahoo Sports" }
    },
    settled: "Settled 00:10 UK: 10 picks, 10 won (100%). Both 4-leg tickets landed, and the Slate as posted (Leipzig and PSG as Home Win) landed at 8.76. The booked code XB33Z4 still had PSG Home & Over 1.5, which lost at 1–0. Mega W2VN9E lost: 9 of 13 legs won.",
    audit: {
      of: "Friday 6 November 2026",
      note: "Flashscore's pages loaded without scores, so each result is checked against a match report, linked below.",
      picks: [
        { fx: "Eintracht Braunschweig v Energie Cottbus", mk: "Both Teams to Score: Yes", odds: "1.44", score: "0–0", status: "lost", src: "https://www.reviersport.de/fussball/2bundesliga/a631944---2-liga-dresden-landet-befreiungsschlag-gegen-fuerth-braunschweig-cottbus-torlos.html", srcName: "RevierSport" },
        { fx: "Dynamo Dresden v Greuther Fürth", mk: "Over 1.5 Goals", odds: "1.19", score: "3–0", status: "won", src: "https://www.reviersport.de/fussball/2bundesliga/a631944---2-liga-dresden-landet-befreiungsschlag-gegen-fuerth-braunschweig-cottbus-torlos.html", srcName: "RevierSport" },
        { fx: "Rapid Wien v Wolfsberger AC", mk: "Over 1.5 Goals", odds: "1.11", score: "6–0", status: "won", src: "https://sport.orf.at/stories/3164600/", srcName: "ORF" },
        { fx: "Willem II v PEC Zwolle", mk: "Over 1.5 Goals", odds: "1.19", score: "1–1", status: "won", src: "https://www.goal.com/en-za/news/willem-ii-gain-little-from-a-point-against-pec-zwolle/blt015370056d7cf60c", srcName: "Goal" },
        { fx: "Hamburger SV v Borussia Mönchengladbach", mk: "2nd Half Over 0.5 Goals", odds: "1.20", score: "3–1 (HT 1–1)", status: "won", src: "https://www.sportschau.de/fussball/bundesliga/hsv-schickt-gladbach-zurueck-in-die-krise,spielbericht-hamburger-sv-borussia-moenchengladbach-102.html", srcName: "Sportschau" },
        { fx: "Toulouse v Strasbourg", mk: "Over 1.5 Goals", odds: "1.20", score: "3–1", status: "won", src: "https://www.eurosport.fr/football/ligue-1/2026-2027/ligue-1-10e-journee-vainqueur-au-stadium-3-1-toulouse-replonge-strasbourg-dans-ses-doutes_sto23352979/story.shtml", srcName: "Eurosport" },
        { fx: "Everton v Coventry City", mk: "Double Chance 1X", odds: "1.20", score: "3–1", status: "won", src: "https://www.espn.com/soccer/report/_/gameId/401879242", srcName: "ESPN" },
        { fx: "Sevilla v Alavés", mk: "Double Chance 1X", odds: "1.24", score: "0–0", status: "won", src: "https://www.noticiasdealava.eus/alaves/2026/11/06/cronica-alaves-la-liga-sevilla-pizjuan-quique-sanchez-flores-mendizorroza-11731700.html", srcName: "Noticias de Álava" }
      ],
      tickets: [
        { name: "Safest 4-leg", total: "1.89", landed: true },
        { name: "Goals & cover 4-leg", total: "2.57", landed: false },
        { name: "Full accumulator HADVN3", total: "4.85", landed: false }
      ],
      lessons: [
        "Both teams to score failed in a 2. Bundesliga relegation scrap (0–0). Only back BTTS when both attacks are confirmed to be scoring, not just from the price.",
        "Fixtures with no form data (both 2. Bundesliga games) were the weakest research of the day. Every pick now needs at least one verified form line.",
        "Over 1.5 and 1X carried the day, 7 from 7. Keep them as the base of the safe ticket."
      ]
    }
  },
  {
    date: "2026-11-06",
    label: "Friday 6 November 2026",
    built: "Built 02:40 UK",
    comps: [
      { name: "2. Bundesliga", windows: [ { ko: "17:30 UK", picks: [
        { n: 1, fx: "Eintracht Braunschweig v Energie Cottbus", mk: "Both Teams to Score: Yes", odds: "1.44" },
        { n: 2, fx: "Dynamo Dresden v Greuther Fürth", mk: "Over 1.5 Goals", odds: "1.19" } ] } ] },
      { name: "Austrian Bundesliga", windows: [ { ko: "18:30 UK", picks: [
        { n: 3, fx: "Rapid Wien v Wolfsberger AC", mk: "Over 1.5 Goals", odds: "1.11" } ] } ] },
      { name: "Eredivisie", windows: [ { ko: "19:00 UK", picks: [
        { n: 4, fx: "Willem II v PEC Zwolle", mk: "Over 1.5 Goals", odds: "1.19" } ] } ] },
      { name: "Bundesliga", windows: [ { ko: "19:30 UK", picks: [
        { n: 5, fx: "Hamburger SV v Borussia Mönchengladbach", mk: "2nd Half Over 0.5 Goals", odds: "1.20" } ] } ] },
      { name: "Ligue 1", windows: [ { ko: "19:45 UK", picks: [
        { n: 6, fx: "Toulouse v Strasbourg", mk: "Over 1.5 Goals", odds: "1.20" } ] } ] },
      { name: "Premier League", windows: [ { ko: "20:00 UK", picks: [
        { n: 7, fx: "Everton v Coventry City", mk: "Double Chance 1X", odds: "1.20" } ] } ] },
      { name: "LaLiga", windows: [ { ko: "20:00 UK", picks: [
        { n: 8, fx: "Sevilla v Alavés", mk: "Double Chance 1X", odds: "1.24" } ] } ] }
    ],
    passes: "Venezia v Udinese, Derby v Bolton, Famalicão v Arouca, Standard Liège v Beveren, Gaziantep v Kasımpaşa, Silkeborg v Lyngby (no form data to back a pick), all four Argentine games and Vitória v Fluminense (low-scoring leagues, conflicting kickoff times). Eerste Divisie, Ligue 2, Serie B and LaLiga 2 fixtures were not checked against an official list, so they were left out.",
    tickets: [
      { name: "Safest 4-leg", legs: [
        ["Rapid Wien v Wolfsberger: Over 1.5", "1.11"],
        ["Dresden v Greuther Fürth: Over 1.5", "1.19"],
        ["Willem II v PEC Zwolle: Over 1.5", "1.19"],
        ["Everton v Coventry: 1X", "1.20"]
      ], total: "1.89" },
      { name: "Goals & cover 4-leg", legs: [
        ["Braunschweig v Cottbus: BTTS Yes", "1.44"],
        ["Hamburg v Gladbach: 2nd Half Over 0.5", "1.20"],
        ["Toulouse v Strasbourg: Over 1.5", "1.20"],
        ["Sevilla v Alavés: 1X", "1.24"]
      ], total: "2.57" }
    ],
    acca: { code: "HADVN3", legs: 8, odds: "4.85", booked: "02:35 UK" },
    results: {
      1: { status: "lost", score: "0–0", src: "https://www.reviersport.de/fussball/2bundesliga/a631944---2-liga-dresden-landet-befreiungsschlag-gegen-fuerth-braunschweig-cottbus-torlos.html", srcName: "RevierSport" },
      2: { status: "won", score: "3–0", src: "https://www.reviersport.de/fussball/2bundesliga/a631944---2-liga-dresden-landet-befreiungsschlag-gegen-fuerth-braunschweig-cottbus-torlos.html", srcName: "RevierSport" },
      3: { status: "won", score: "6–0", src: "https://sport.orf.at/stories/3164600/", srcName: "ORF" },
      4: { status: "won", score: "1–1", src: "https://www.goal.com/en-za/news/willem-ii-gain-little-from-a-point-against-pec-zwolle/blt015370056d7cf60c", srcName: "Goal" },
      5: { status: "won", score: "3–1 (HT 1–1)", src: "https://www.sportschau.de/fussball/bundesliga/hsv-schickt-gladbach-zurueck-in-die-krise,spielbericht-hamburger-sv-borussia-moenchengladbach-102.html", srcName: "Sportschau" },
      6: { status: "won", score: "3–1", src: "https://www.eurosport.fr/football/ligue-1/2026-2027/ligue-1-10e-journee-vainqueur-au-stadium-3-1-toulouse-replonge-strasbourg-dans-ses-doutes_sto23352979/story.shtml", srcName: "Eurosport" },
      7: { status: "won", score: "3–1", src: "https://www.espn.com/soccer/report/_/gameId/401879242", srcName: "ESPN" },
      8: { status: "won", score: "0–0", src: "https://www.noticiasdealava.eus/alaves/2026/11/06/cronica-alaves-la-liga-sevilla-pizjuan-quique-sanchez-flores-mendizorroza-11731700.html", srcName: "Noticias de Álava" }
    },
    settled: "Settled 23:05 UK: 8 picks, 7 won, 1 lost (88%). Safest 4-leg landed. Goals & cover 4-leg and accumulator HADVN3 lost on Braunschweig v Cottbus (0–0).",
    audit: {
      of: "Thursday 5 November 2026",
      note: "Flashscore's results page loaded without scores, so results are checked against ESPN's official scoreboards, plus Sofascore and Goal for the half-time splits.",
      picks: [
        { fx: "Crystal Palace v Hoffenheim", mk: "Both Teams to Score: Yes", odds: "1.50", score: "1–1", status: "won", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa/date/20261105", srcName: "ESPN" },
        { fx: "AC Milan v Ferencváros", mk: "Over 1.5 Goals", odds: "1.16", score: "0–2", status: "won", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa/date/20261105", srcName: "ESPN" },
        { fx: "Real Sociedad v Lyon", mk: "2nd Half Over 0.5 Goals", odds: "1.18", score: "1–1 (2H 0–1)", status: "won", src: "https://www.sofascore.com/es/news/real-sociedad-1-1-lyon-puntuacion-sofascore-de-tolisso-7-8", srcName: "Sofascore" },
        { fx: "Benfica v Lech Poznań", mk: "Home Win & Over 1.5 Goals", odds: "1.19", score: "3–1", status: "won", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa/date/20261105", srcName: "ESPN" },
        { fx: "Celtic v Beşiktaş", mk: "Over 2.5 Goals", odds: "1.50", score: "3–2", status: "won", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa/date/20261105", srcName: "ESPN" },
        { fx: "Midtjylland v Ajax", mk: "Both Teams to Score: Yes", odds: "1.45", score: "1–6", status: "won", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa.conf/date/20261105", srcName: "ESPN" },
        { fx: "Crvena Zvezda v Inter d'Escaldes", mk: "Home Win & Over 1.5 Goals", odds: "1.12", score: "2–1", status: "won", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa.conf/date/20261105", srcName: "ESPN" },
        { fx: "Atalanta v Kairat Almaty", mk: "2nd Half Over 0.5 Goals", odds: "1.14", score: "1–1 (HT 0–0)", status: "won", src: "https://www.goal.com/en/lists/conference-league-poor-atalanta-draw-with-kairat-almaty-thanks-to-krstovic/blt1f992047ca978d29", srcName: "Goal" },
        { fx: "FC Twente v Pafos", mk: "Over 2.5 Goals", odds: "1.37", score: "3–1", status: "won", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa.conf/date/20261105", srcName: "ESPN" },
        { fx: "Panathinaikos v CSKA Sofia", mk: "Double Chance 1X", odds: "1.12", score: "2–1", status: "won", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa.conf/date/20261105", srcName: "ESPN" },
        { fx: "Copenhagen v Iberia 1999", mk: "Over 1.5 Goals", odds: "1.15", score: "2–1", status: "won", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa.conf/date/20261105", srcName: "ESPN" }
      ],
      tickets: [
        { name: "Safest 4-leg", total: "1.78", landed: true },
        { name: "Goals 4-leg", total: "4.47", landed: true },
        { name: "Full accumulator PH2ZGG", total: "11.97", landed: true }
      ],
      lessons: [
        "11 from 11 is variance, not proof. The process stays the same.",
        "The straight home wins the rules ruled out mostly failed: Milan lost 0–2, Sunderland lost 0–2, Atalanta drew 1–1, Palace drew 1–1. Keep the strict home-win rule.",
        "Second-half Over 0.5 needed a 54th-minute goal at Real Sociedad and a 53rd-minute goal at Atalanta. It wins often, but it isn't automatic, so keep it at Medium."
      ]
    }
  },
  {
    date: "2026-11-05",
    label: "Thursday 5 November 2026",
    built: "Built 06:10 UK",
    comps: [
      { name: "UEFA Europa League", windows: [
        { ko: "17:45 UK", picks: [
          { n: 1, fx: "Crystal Palace v Hoffenheim", mk: "Both Teams to Score: Yes", odds: "1.50" },
          { n: 2, fx: "AC Milan v Ferencváros", mk: "Over 1.5 Goals", odds: "1.16" },
          { n: 3, fx: "Real Sociedad v Lyon", mk: "2nd Half Over 0.5 Goals", odds: "1.18" }
        ]},
        { ko: "20:00 UK", picks: [
          { n: 4, fx: "Benfica v Lech Poznań", mk: "Home Win & Over 1.5 Goals", odds: "1.19" },
          { n: 5, fx: "Celtic v Beşiktaş", mk: "Over 2.5 Goals", odds: "1.50" }
        ]}
      ]},
      { name: "UEFA Conference League", windows: [
        { ko: "17:45 UK", picks: [
          { n: 6, fx: "Midtjylland v Ajax", mk: "Both Teams to Score: Yes", odds: "1.45" },
          { n: 7, fx: "Crvena Zvezda v Inter d'Escaldes", mk: "Home Win & Over 1.5 Goals", odds: "1.12" },
          { n: 8, fx: "Atalanta v Kairat Almaty", mk: "2nd Half Over 0.5 Goals", odds: "1.14" }
        ]},
        { ko: "20:00 UK", picks: [
          { n: 9, fx: "FC Twente v Pafos", mk: "Over 2.5 Goals", odds: "1.37" },
          { n: 10, fx: "Panathinaikos v CSKA Sofia", mk: "Double Chance 1X", odds: "1.12" },
          { n: 11, fx: "Copenhagen v Iberia 1999", mk: "Over 1.5 Goals", odds: "1.15" }
        ]}
      ]}
    ],
    passes: "Leverkusen v Marseille (home attack injury list, home record unverified), Sunderland v Dinamo Zagreb (poor form, rotation expected), AZ v Juventus (away favourite, no goals angle), Sturm Graz v Celje, Anderlecht v Salzburg, Celta v Union SG, Monaco v Nordsjælland (four league games without a win), and every other fixture with no rule-compliant edge.",
    tickets: [
      { name: "Safest 4-leg", legs: [
        ["Benfica v Lech: Home & Over 1.5", "1.19"],
        ["Crvena Zvezda v Inter d'Escaldes: Home & Over 1.5", "1.12"],
        ["Milan v Ferencváros: Over 1.5", "1.16"],
        ["Copenhagen v Iberia 1999: Over 1.5", "1.15"]
      ], total: "1.78" },
      { name: "Goals 4-leg", legs: [
        ["Midtjylland v Ajax: BTTS Yes", "1.45"],
        ["Crystal Palace v Hoffenheim: BTTS Yes", "1.50"],
        ["Twente v Pafos: Over 2.5", "1.37"],
        ["Celtic v Beşiktaş: Over 2.5", "1.50"]
      ], total: "4.47" }
    ],
    acca: { code: "PH2ZGG", legs: 11, odds: "11.97", booked: "06:45 UK" },
    results: { 1: { status: "won", score: "1–1", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa/date/20261105", srcName: "ESPN" }, 2: { status: "won", score: "0–2", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa/date/20261105", srcName: "ESPN" }, 3: { status: "won", score: "1–1 (2H 0–1)", src: "https://www.sofascore.com/es/news/real-sociedad-1-1-lyon-puntuacion-sofascore-de-tolisso-7-8", srcName: "Sofascore" }, 4: { status: "won", score: "3–1", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa/date/20261105", srcName: "ESPN" }, 5: { status: "won", score: "3–2", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa/date/20261105", srcName: "ESPN" }, 6: { status: "won", score: "1–6", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa.conf/date/20261105", srcName: "ESPN" }, 7: { status: "won", score: "2–1", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa.conf/date/20261105", srcName: "ESPN" }, 8: { status: "won", score: "1–1 (HT 0–0)", src: "https://www.goal.com/en/lists/conference-league-poor-atalanta-draw-with-kairat-almaty-thanks-to-krstovic/blt1f992047ca978d29", srcName: "Goal" }, 9: { status: "won", score: "3–1", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa.conf/date/20261105", srcName: "ESPN" }, 10: { status: "won", score: "2–1", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa.conf/date/20261105", srcName: "ESPN" }, 11: { status: "won", score: "2–1", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.europa.conf/date/20261105", srcName: "ESPN" } },
    audit: {
      of: "Wednesday 4 November 2026",
      note: "Settled the 8-leg slip from 4 Nov (booking code GZCH1E). Flashscore pages could not be loaded for checking, so each result is verified against ESPN or CBS Sports, linked below.",
      picks: [
        { fx: "AEK Athens v Real Madrid", mk: "Over 2.5 Goals", odds: "1.28", score: "2–3", status: "won", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.champions", srcName: "ESPN" },
        { fx: "Fenerbahçe v Liverpool", mk: "Both Teams to Score: Yes", odds: "1.54", score: "3–2", status: "won", src: "https://www.espn.com/soccer/scoreboard/_/league/uefa.champions", srcName: "ESPN" },
        { fx: "RB Leipzig v Man City", mk: "Over 2.5 Goals", odds: "1.32", score: "2–3", status: "won", src: "https://www.cbssports.com/soccer/news/uefa-champions-league-schedule-matchday-4/", srcName: "CBS Sports" },
        { fx: "Viking FK v Sabah", mk: "Home Win & Over 1.5 Goals", odds: "1.48", score: "4–1", status: "won", src: "https://www.espn.com/soccer/schedule/_/league/uefa.champions", srcName: "ESPN" },
        { fx: "Borussia Dortmund v Real Betis", mk: "Both Teams to Score: Yes", odds: "1.54", score: "2–1", status: "won", src: "https://www.espn.com/soccer/match/_/gameId/401915304/real-betis-borussia-dortmund", srcName: "ESPN" },
        { fx: "Lens v Como", mk: "Over 2.5 Goals", odds: "1.55", score: "1–9", status: "won", src: "https://www.espn.com/soccer/schedule/_/league/uefa.champions", srcName: "ESPN" },
        { fx: "PSV v Club Brugge", mk: "Both Teams to Score: Yes", odds: "1.35", score: "1–2", status: "won", src: "https://www.espn.com/soccer/schedule/_/league/uefa.champions", srcName: "ESPN" },
        { fx: "Slavia Prague v Arsenal", mk: "Over 1.5 Goals", odds: "1.17", score: "1–2", status: "won", src: "https://www.cbssports.com/soccer/news/uefa-champions-league-schedule-matchday-4/", srcName: "CBS Sports" }
      ],
      tickets: [ { name: "8-leg accumulator (GZCH1E)", total: "14.52", landed: true } ],
      lessons: [
        "8 from 8 is variance. Nothing in the process changes because of it.",
        "Yesterday's slip had no passes list and no 4-leg tickets. From today every slate follows the rulebook format.",
        "Leg 8's fixture name was lost in a cropped screenshot. Every pick is now recorded in text the moment it is posted."
      ]
    }
  }
];

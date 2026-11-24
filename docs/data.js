/* Hustle data. Newest day first. Each day:
   - comps/windows/picks: the Slate. results: { pickNumber: {status, score, src, srcName} } once settled.
   - tickets: the two 4-leg tickets. acca: the full-slate booking code.
   - mega: { code, odds, booked, legs[{fx, comp, ko, mk, odds}], results: [ {status, score, src, srcName} per leg ] | null, landed: true|false|null }
   - audit: the previous day's settlement (picks, tickets, lessons). settled: one-line summary once the day is audited. */
window.SLATES = [
  {
    date: "2026-11-23",
    label: "Monday 23 November 2026",
    built: "Built 01:55 UK",
    comps: [
      { name: "Bulgarian Parva Liga", windows: [ { ko: "16:00 UK", picks: [
        { n: 1, fx: "Ludogorets v Dunav Ruse", mk: "Ludogorets Over 1.5 Goals", odds: "1.25" } ] } ] },
      { name: "Allsvenskan", windows: [ { ko: "18:00 UK", picks: [
        { n: 2, fx: "Hammarby v IFK Göteborg", mk: "Home Win", odds: "1.23" } ] } ] },
      { name: "Hungarian NB II", windows: [ { ko: "18:30 UK", picks: [
        { n: 3, fx: "Diósgyőr v Karcag", mk: "Home Win", odds: "1.32" } ] } ] },
      { name: "Eerste Divisie", windows: [ { ko: "19:00 UK", picks: [
        { n: 4, fx: "Jong Ajax v Jong AZ", mk: "Over 2.5 Goals", odds: "1.31" } ] } ] },
      { name: "Ligue 2", windows: [ { ko: "19:45 UK", picks: [
        { n: 5, fx: "Nantes v Grenoble", mk: "Under 3.5 Goals", odds: "1.29" } ] } ] }
    ],
    passes: "Thin Monday: 84 fixtures and few strong favourites, so the Slate is 5 legs (3.43) and there is no Mega (not 12 quality legs). The Medium is 13.57, under its 20 target, rather than padding it with risky legs. Passed: Al-Ittihad (lost 1–4 at home last time, kickoff time disputed), Koper (the match may already have been played on Saturday), Brøndby v Midtjylland GG, Santos v Grêmio corners (no corner data, kicks off after midnight), Wieczysta v Motor GG and Real Oruro Over 2.5 (both had red flags), and short-priced legs below 1.20 (Ludogorets to win 1.14, Al Ain to score 1.13). No Arsenal fixtures.",
    tickets: [
      { name: "Safest 3-leg", legs: [
        ["Hammarby v IFK Göteborg: Home Win", "1.23"],
        ["Ludogorets v Dunav: Ludogorets Over 1.5", "1.25"],
        ["Nantes v Grenoble: Under 3.5", "1.29"]
      ], total: "1.98" }
    ],
    acca: { code: "KTMV7C", legs: 5, odds: "3.43", booked: "01:45 UK" },
    mid: {
      code: "VSUMY7", odds: "13.57", booked: "01:50 UK", landed: false,
      results: [
        { status: "lost", score: "1–1", src: "https://www.the-afc.com/en/club/afc_champions_league_elite.html/news/md5-al-ain-fc-uae-1-1-esteghlal-fc-irn", srcName: "AFC" },
        { status: "won", score: "4–2", src: "https://www.hurriyet.com.tr/sporarena/basaksehir-4-2-corum-fk-super-lig-maci-ozeti-43387510", srcName: "Hürriyet" },
        { status: "lost", score: "1–0", src: "https://sportnet.hr/vijesti/nogomet-supersport-hnl/slaven-belupo-osijek-10-velika-pobjeda-farmaceuta-za-priblizavanje-gostima-na-samo-bod/635956/", srcName: "Sportnet" },
        { status: "won", score: "3–2", src: "https://www.espn.co.uk/football/match/_/gameId/401875835", srcName: "ESPN" },
        { status: "lost", score: "0–1", src: "https://www.degraafschap.nl/nieuws/de-graafschap-bindt-vitesse-aan-de-zegekar-in-gelderse-derby-0-1", srcName: "De Graafschap" },
        { status: "won", score: "2–3", src: "https://www.espn.co.uk/football/match/_/gameId/401883110", srcName: "ESPN" },
        { status: "lost", score: "3–0", src: "https://www.espn.com/soccer/match/_/gameId/401875009", srcName: "ESPN" },
        { status: "won", score: "4–0 (HT 2–0)", src: "https://www.espn.co.uk/football/match/_/gameId/401879237", srcName: "ESPN" },
        { status: "won", score: "1–1 (HT 0–0)", src: "https://www.espn.com/soccer/match/_/gameId/401882802", srcName: "ESPN" },
        { status: "lost", score: "2–4", src: "https://www.espn.com/soccer/match/_/gameId/401841323/vitoria-internacional", srcName: "ESPN" }
      ],
      note: "Thin Monday: 13.57 instead of 20+, because the extra legs available all had red flags. 10 legs over 6 market types; no fixture is shared with the Slate.",
      legs: [
        { fx: "Al Ain v Esteghlal", comp: "AFC Champions League Elite", ko: "16:00", mk: "Home Win", odds: "1.56" },
        { fx: "Başakşehir v Çorum", comp: "Süper Lig", ko: "17:00", mk: "Double Chance 1X", odds: "1.29" },
        { fx: "Slaven Belupo v Osijek", comp: "HNL", ko: "17:00", mk: "Both Teams to Score (GG)", odds: "1.48" },
        { fx: "Jong PSV v Jong Utrecht", comp: "Eerste Divisie", ko: "19:00", mk: "Over 2.5 Goals", odds: "1.36" },
        { fx: "Vitesse v De Graafschap", comp: "Eerste Divisie", ko: "19:00", mk: "Both Teams to Score (GG)", odds: "1.43" },
        { fx: "Ceuta v Almería", comp: "LaLiga Hypermotion", ko: "19:30", mk: "Away to Score (Almería Over 0.5)", odds: "1.17" },
        { fx: "Monza v Fiorentina", comp: "Serie A", ko: "19:45", mk: "Away to Score (Fiorentina Over 0.5)", odds: "1.15" },
        { fx: "Brentford v Everton", comp: "Premier League", ko: "20:00", mk: "2nd Half Over 0.5 Goals", odds: "1.23" },
        { fx: "Levante v Elche", comp: "LaLiga", ko: "20:00", mk: "2nd Half Over 0.5 Goals", odds: "1.20" },
        { fx: "Internacional v Vitória", comp: "Brasileirão", ko: "22:30", mk: "Double Chance 1X", odds: "1.18" }
      ]
    },
    results: {
      1: { status: "lost", score: "1–0 (Ludogorets 1 goal)", src: "https://www.dnes.bg/a/9-sport/743397-ludogorets-se-izmachi-no-prechupi-dunav-izleze-na-treta-pozitsiya-v-parva-liga", srcName: "Dnes.bg" },
      2: { status: "won", score: "3–1", src: "https://www.whoscored.com/matches/1957320/live/sweden-allsvenskan-2026-hammarby-ifk-goeteborg", srcName: "WhoScored" },
      3: { status: "won", score: "2–1", src: "https://nb1.hu/hir/diosgyori-vtk-karcag-2-1-merkantil-bank-liga-14-fordulo-hetfo", srcName: "NB1.hu" },
      4: { status: "won", score: "3–0", src: "https://www.ajax.nl/artikelen/jong-ajax-maakt-na-rust-het-verschil-tegen-jong-az", srcName: "Ajax" },
      5: { status: "won", score: "1–0", src: "https://www.beinsports.com/fr-fr/football/ligue-2/articles-video/ligue-2-nantes-respire-face-%C3%A0-grenoble-2026-11-23", srcName: "beIN Sports" }
    },
    settled: "Settled 00:35 UK (24 Nov): Slate KTMV7C went 4 of 5 and LOST on Ludogorets Over 1.5 goals (they won only 1–0). The Safest 3-leg lost on the same leg. Medium VSUMY7 went 5 of 10 and lost (both GG legs ended 1–0, Fiorentina lost 3–0 at Monza, Al Ain drew 1–1, Internacional lost 2–4). Both 2nd Half Over 0.5 legs won.",
    audit: {
      of: "Sunday 22 November 2026",
      note: "Settled on 90-minute results. Each result has at least one reliable source; one is linked below. Corner counts are from ESPN, Sports Mole and Fútbol Argentino full-time stats.",
      picks: [
        { fx: "Twente v Willem II", mk: "Over 8.5 Corners", odds: "1.29", score: "2–1 (6 corners)", status: "lost", src: "https://www.espn.co.uk/football/team-stats/_/gameId/401875545/league/ned.1", srcName: "ESPN" },
        { fx: "Juventus v Venezia", mk: "Home Win", odds: "1.39", score: "4–0", status: "won", src: "https://www.espn.com/soccer/match/_/gameId/401875008", srcName: "ESPN" },
        { fx: "Barcelona v Villarreal", mk: "Barcelona Over 5.5 Corners", odds: "1.29", score: "3–2 (Barça 10 corners)", status: "won", src: "https://www.espn.com/soccer/team-stats/_/gameId/401882804", srcName: "ESPN" },
        { fx: "Ajax v ADO Den Haag", mk: "Ajax Over 5.5 Corners", odds: "1.32", score: "3–0 (Ajax 8 corners)", status: "won", src: "https://www.espn.co.uk/football/match/_/gameId/401875547", srcName: "ESPN" },
        { fx: "Dinamo Zagreb v Istra", mk: "Home Win", odds: "1.21", score: "3–2", status: "won", src: "https://gnkdinamo.hr/hr/utakmice/366", srcName: "Dinamo Zagreb" },
        { fx: "Paris FC v Angers", mk: "Home Win", odds: "1.35", score: "4–0", status: "won", src: "https://www.espn.com/soccer/match/_/gameId/401876397/angers-paris-fc", srcName: "ESPN" },
        { fx: "Augsburg v Mainz", mk: "Over 2.5 Goals", odds: "1.42", score: "3–1", status: "won", src: "https://www.espn.com/soccer/match/_/gameId/401884733", srcName: "ESPN" },
        { fx: "Panathinaikos v OFI", mk: "Home Win", odds: "1.23", score: "2–0", status: "won", src: "https://www.espn.co.uk/football/match/_/gameId/401896726/ofi-crete-panathinaikos", srcName: "ESPN" },
        { fx: "Bursaspor v Sivasspor", mk: "Bursaspor Over 1.5 Goals", odds: "1.27", score: "2–0", status: "won", src: "https://www.fanatik.com.tr/futbol/ozet-bursaspor-super-lige-goz-kirpiyor-bursaspor-sivasspor-mac-sonucu-2-0-2645414", srcName: "Fanatik" },
        { fx: "Getafe v Atlético Madrid", mk: "Under 3.5 Goals", odds: "1.30", score: "0–3", status: "won", src: "https://www.beinsports.com/en-us/soccer/la-liga/articles/getafe-0-3-atletico-madrid-simeone-makes-laliga-history-in-dominant-win-2026-11-22", srcName: "beIN Sports" }
      ],
      tickets: [
        { name: "Safest 4-leg", total: "2.44", landed: true },
        { name: "Value 3-leg", total: "2.66", landed: true },
        { name: "Full accumulator R9MZ7V", total: "14.38", landed: false },
        { name: "Medium MFHEKF", total: "25.78", landed: false },
        { name: "Mega N5SRW1", total: "262.45", landed: false }
      ],
      lessons: [
        "Slate R9MZ7V went 9 of 10 and lost only on Twente v Willem II Over 8.5 total corners: Twente won 6 corners and Willem II none. When the underdog is bottom and sits deep, total corners depends on the favourite alone, so use the favourite's own corner line (Barcelona's 10 and Ajax's 8 both cleared 5.5).",
        "Medium MFHEKF went 9 of 11. It lost on Copenhagen to score (Nordsjælland won 5–0) and on Córdoba v Oviedo GG (3–0). Away-to-score and GG at 1.26–1.54 are the soft spots; 2H Over 0.5, corners, home wins, 1X and the over/under legs all won.",
        "Mega N5SRW1 lost early: Viborg 0–0, Košice 1–1, Union won only 0–1, and Rosario took just 4 corners. Rosario's game was a single-leg knockout, so it was cagier than usual: avoid corner lines in cup knockouts. Home wins at 1.53–1.65 went 1 of 3 again."
      ]
    }
  },
  {
    date: "2026-11-22",
    label: "Sunday 22 November 2026",
    built: "Built 02:05 UK",
    comps: [
      { name: "Eredivisie", windows: [ { ko: "11:15 UK", picks: [
        { n: 1, fx: "Twente v Willem II", mk: "Over 8.5 Corners", odds: "1.29" } ] } ] },
      { name: "Serie A", windows: [ { ko: "11:30 UK", picks: [
        { n: 2, fx: "Juventus v Venezia", mk: "Home Win", odds: "1.39" } ] } ] },
      { name: "LaLiga", windows: [ { ko: "13:00 UK", picks: [
        { n: 3, fx: "Barcelona v Villarreal", mk: "Barcelona Over 5.5 Corners", odds: "1.29" } ] } ] },
      { name: "Eredivisie", windows: [ { ko: "13:30 UK", picks: [
        { n: 4, fx: "Ajax v ADO Den Haag", mk: "Ajax Over 5.5 Corners", odds: "1.32" } ] } ] },
      { name: "HNL", windows: [ { ko: "14:00 UK", picks: [
        { n: 5, fx: "Dinamo Zagreb v Istra", mk: "Home Win", odds: "1.21" } ] } ] },
      { name: "Ligue 1", windows: [ { ko: "14:00 UK", picks: [
        { n: 6, fx: "Paris FC v Angers", mk: "Home Win", odds: "1.35" } ] } ] },
      { name: "Bundesliga", windows: [ { ko: "14:30 UK", picks: [
        { n: 7, fx: "Augsburg v Mainz", mk: "Over 2.5 Goals", odds: "1.42" } ] } ] },
      { name: "Greek Super League", windows: [ { ko: "15:30 UK", picks: [
        { n: 8, fx: "Panathinaikos v OFI", mk: "Home Win", odds: "1.23" } ] } ] },
      { name: "Turkish 1. Lig", windows: [ { ko: "16:00 UK", picks: [
        { n: 9, fx: "Bursaspor v Sivasspor", mk: "Bursaspor Over 1.5 Goals", odds: "1.27" } ] } ] },
      { name: "LaLiga", windows: [ { ko: "20:00 UK", picks: [
        { n: 10, fx: "Getafe v Atlético Madrid", mk: "Under 3.5 Goals", odds: "1.30" } ] } ] }
    ],
    passes: "Dynamo Kyiv (poor form under a new coach, Kyiv derby), Olympiacos (El Kaabi out, Milan on Thursday), Levski (lost 0–3 at home last time, Marseille on Thursday), Burnley 1X (worst defence in the league, derby), Liverpool v Man Utd GG (United's attack depleted, so played as corners), Sarpsborg v Lillestrøm GG (Lillestrøm play Lyon on Thursday), FCSB to score (3 straight defeats), Sassuolo v Genoa Under 3.5 (Sassuolo have conceded in all 11), Nashville (15 days without a game), Celje (Europa League rotation), PAOK corners (no corner data), AZ 2+ (poor away form), Kaiserslautern v Dresden GG (Dresden missing 8), Fluminense (may have nothing left to play for). No Arsenal fixtures were considered.",
    tickets: [
      { name: "Safest 4-leg", legs: [
        ["Dinamo Zagreb v Istra: Home Win", "1.21"],
        ["Panathinaikos v OFI: Home Win", "1.23"],
        ["Bursaspor v Sivasspor: Bursaspor Over 1.5", "1.27"],
        ["Barcelona v Villarreal: Barcelona Over 5.5 Corners", "1.29"]
      ], total: "2.44" },
      { name: "Value 3-leg", legs: [
        ["Juventus v Venezia: Home Win", "1.39"],
        ["Paris FC v Angers: Home Win", "1.35"],
        ["Augsburg v Mainz: Over 2.5", "1.42"]
      ], total: "2.66" }
    ],
    acca: { code: "R9MZ7V", legs: 10, odds: "14.38", booked: "01:55 UK" },
    mid: {
      code: "MFHEKF", odds: "25.78", booked: "02:00 UK", landed: false,
      results: [
        { status: "won", score: "2–0 (HT 0–0)", src: "https://www.skysports.com/football/hull-city-vs-brighton-and-hove-albion/559549", srcName: "Sky Sports" },
        { status: "won", score: "4–0 (20 corners)", src: "https://www.sportsmole.co.uk/football/liverpool/result/mauricio-mauled-in-man-utd-debut-as-liverpool-demolish-10-man-red-devils_609619.html", srcName: "Sports Mole" },
        { status: "won", score: "5–1", src: "https://www.espn.in/football/match/_/gameId/401874989", srcName: "ESPN" },
        { status: "won", score: "1–0", src: "https://www.skysports.com/football/anderlecht-vs-oud-heverlee-leuven/559203", srcName: "Sky Sports" },
        { status: "won", score: "1–0", src: "https://www.espn.com/soccer/match/_/gameId/401882801", srcName: "ESPN" },
        { status: "won", score: "4–4", src: "https://www.flashscore.com/news/soccer-serie-a-atalanta-inter-report-22-11-2026/x2BedwMc/", srcName: "Flashscore" },
        { status: "lost", score: "5–0", src: "https://sport.tv2.dk/live/fodbold/2026-11-22-superligaen-fc-nordsjaelland-fc-koebenhavn", srcName: "TV2" },
        { status: "won", score: "1–1", src: "https://www.espn.com/soccer/match/_/gameId/401875047/udinese-bologna", srcName: "ESPN" },
        { status: "won", score: "3–2", src: "https://www.espn.com/soccer/match/_/gameId/401882800", srcName: "ESPN" },
        { status: "won", score: "0–1", src: "https://www.aa.com.tr/tr/spor/goztepe-deplasmandan-3-puanla-ayrildi/4133530", srcName: "Anadolu" },
        { status: "lost", score: "3–0", src: "https://espndeportes.espn.com/futbol/partido/_/juegoId/401882300", srcName: "ESPN Deportes" }
      ],
      note: "Medium risk, 11 legs over 9 market types, each 1.20 or more. No fixture is shared with the Slate or the Mega.",
      legs: [
        { fx: "Hull v Brighton", comp: "Premier League", ko: "14:00", mk: "2nd Half Over 0.5 Goals", odds: "1.22" },
        { fx: "Liverpool v Man Utd", comp: "Premier League", ko: "16:30", mk: "Over 7.5 Corners", odds: "1.25" },
        { fx: "Milan v Frosinone", comp: "Serie A", ko: "17:00", mk: "Home Win", odds: "1.59" },
        { fx: "Anderlecht v OH Leuven", comp: "Belgian Pro League", ko: "17:30", mk: "Home Win", odds: "1.49" },
        { fx: "Osasuna v Málaga", comp: "LaLiga", ko: "17:30", mk: "Home to Score (Osasuna Over 0.5)", odds: "1.21" },
        { fx: "Atalanta v Inter", comp: "Serie A", ko: "19:45", mk: "Over 2.5 Goals", odds: "1.40" },
        { fx: "Nordsjælland v Copenhagen", comp: "Danish Superliga", ko: "17:00", mk: "Away to Score (Copenhagen Over 0.5)", odds: "1.26" },
        { fx: "Bologna v Udinese", comp: "Serie A", ko: "14:00", mk: "Double Chance 1X", odds: "1.20" },
        { fx: "Racing Santander v Real Sociedad", comp: "LaLiga", ko: "15:15", mk: "Both Teams to Score (GG)", odds: "1.36" },
        { fx: "Erzurumspor v Göztepe", comp: "Süper Lig", ko: "10:30", mk: "Under 3.5 Goals", odds: "1.33" },
        { fx: "Córdoba v Real Oviedo", comp: "LaLiga Hypermotion", ko: "13:00", mk: "Both Teams to Score (GG)", odds: "1.54" }
      ]
    },
    mega: {
      code: "N5SRW1", odds: "262.45", booked: "02:02 UK", landed: false,
      results: [
        { status: "won", score: "4–0", src: "https://www.foxsports.com/soccer/bundesliga-werder-bremen-vs-hamburg-sv-nov-22-2026-game-boxscore-912633", srcName: "FOX Sports" },
        { status: "lost", score: "0–0", src: "https://africa.espn.com/football/match/_/gameId/401874558", srcName: "ESPN" },
        { status: "lost", score: "1–1", src: "https://sportnet.sme.sk/spravy/futbal-kosice-skalica-vysledok-dnes-15-kolo-nike-liga-2026-2027/", srcName: "Sportnet" },
        { status: "won", score: "2–0", src: "https://nk-rijeka.hr/rijeka-gorica-20-kabadayi-i-fruk-za-kisnu-pobjedu/", srcName: "HNK Rijeka" },
        { status: "lost", score: "0–1", src: "https://www.espn.co.uk/football/match/_/gameId/401878936", srcName: "ESPN" },
        { status: "lost", score: "3–1 (Rosario 4 corners)", src: "https://www.futbolargentino.com/primera-division/rosario-central-vs-gimnasia-mendoza-22-noviembre-2026-torneo-clausura---liga-profesional-de-argentina-m3275262", srcName: "Fútbol Argentino" },
        { status: "won", score: "3–4", src: "https://www.vavel.com/en/football/2026/11/22/1280294-kfum-oslo-vs-sk-brann-live-score-updates-stream-info-and-results-in-eliteserien.html", srcName: "VAVEL" },
        { status: "won", score: "2–2", src: "https://vglive.vg.no/fotball/event/kristiansund-sandefjord/731156", srcName: "VG" },
        { status: "won", score: "1–2", src: "https://www.espn.co.uk/football/match/_/gameId/401878934", srcName: "ESPN" },
        { status: "lost", score: "1–0", src: "https://www.informador.mx/en-vivo-chivas-vs-cruz-azul--minuto-a-minuto-de-la-jornada-17-de-la-liga-mx-lb202611220001.html", srcName: "Informador" },
        { status: "lost", score: "1–0 (Salzburg 0 goals)", src: "https://www.whoscored.com/matches/1990927/live/austria-bundesliga-2026-2027-austria-wien-salzburg", srcName: "WhoScored" },
        { status: "won", score: "4–2", src: "https://www.espn.com/soccer/match/_/gameId/401841318", srcName: "ESPN" },
        { status: "lost", score: "0–0", src: "https://www.espn.in/football/match/_/gameId/401841321/vasco-da-gama-red-bull-bragantino", srcName: "ESPN" }
      ],
      note: "Fewer plain Over 2.5 legs after 21 Nov (1 of 4). Mix: 3 home wins, 3 team 2+ goals, 1 corners, 2 Over 2.5, 4 GG.",
      legs: [
        { fx: "Werder Bremen v Hamburger SV", comp: "Bundesliga", ko: "16:30", mk: "Home Win", odds: "1.65" },
        { fx: "Viborg v Randers", comp: "Danish Superliga", ko: "13:00", mk: "Home Win", odds: "1.59" },
        { fx: "Košice v Skalica", comp: "Slovak Niké Liga", ko: "14:30", mk: "Home Win", odds: "1.53" },
        { fx: "Rijeka v Gorica", comp: "HNL", ko: "17:00", mk: "Rijeka Over 1.5 Goals", odds: "1.47" },
        { fx: "Kortrijk v Union Saint-Gilloise", comp: "Belgian Pro League", ko: "15:00", mk: "Union Over 1.5 Goals", odds: "1.47" },
        { fx: "Rosario Central v Gimnasia Mendoza", comp: "Argentine Clausura", ko: "19:00", mk: "Rosario Over 5.5 Corners", odds: "1.47" },
        { fx: "KFUM Oslo v Brann", comp: "Eliteserien", ko: "16:00", mk: "Over 2.5 Goals", odds: "1.49" },
        { fx: "Kristiansund v Sandefjord", comp: "Eliteserien", ko: "16:00", mk: "Over 2.5 Goals", odds: "1.45" },
        { fx: "Lommel v Standard Liège", comp: "Belgian Pro League", ko: "18:15", mk: "Both Teams to Score (GG)", odds: "1.50" },
        { fx: "Guadalajara v Cruz Azul", comp: "Liga MX", ko: "23:07", mk: "Both Teams to Score (GG)", odds: "1.50" },
        { fx: "Austria Wien v Salzburg", comp: "Austrian Bundesliga", ko: "16:00", mk: "Salzburg Over 1.5 Goals", odds: "1.55" },
        { fx: "Athletico Paranaense v Remo", comp: "Brasileirão", ko: "19:00", mk: "Both Teams to Score (GG)", odds: "1.74" },
        { fx: "Bragantino v Vasco da Gama", comp: "Brasileirão", ko: "22:30", mk: "Both Teams to Score (GG)", odds: "1.57" }
      ]
    },
    results: {
      1: { status: "lost", score: "2–1 (6 corners)", src: "https://www.espn.co.uk/football/team-stats/_/gameId/401875545/league/ned.1", srcName: "ESPN" },
      2: { status: "won", score: "4–0", src: "https://www.espn.com/soccer/match/_/gameId/401875008", srcName: "ESPN" },
      3: { status: "won", score: "3–2 (Barça 10 corners)", src: "https://www.espn.com/soccer/team-stats/_/gameId/401882804", srcName: "ESPN" },
      4: { status: "won", score: "3–0 (Ajax 8 corners)", src: "https://www.espn.co.uk/football/match/_/gameId/401875547", srcName: "ESPN" },
      5: { status: "won", score: "3–2", src: "https://gnkdinamo.hr/hr/utakmice/366", srcName: "Dinamo Zagreb" },
      6: { status: "won", score: "4–0", src: "https://www.espn.com/soccer/match/_/gameId/401876397/angers-paris-fc", srcName: "ESPN" },
      7: { status: "won", score: "3–1", src: "https://www.espn.com/soccer/match/_/gameId/401884733", srcName: "ESPN" },
      8: { status: "won", score: "2–0", src: "https://www.espn.co.uk/football/match/_/gameId/401896726/ofi-crete-panathinaikos", srcName: "ESPN" },
      9: { status: "won", score: "2–0", src: "https://www.fanatik.com.tr/futbol/ozet-bursaspor-super-lige-goz-kirpiyor-bursaspor-sivasspor-mac-sonucu-2-0-2645414", srcName: "Fanatik" },
      10: { status: "won", score: "0–3", src: "https://www.beinsports.com/en-us/soccer/la-liga/articles/getafe-0-3-atletico-madrid-simeone-makes-laliga-history-in-dominant-win-2026-11-22", srcName: "beIN Sports" }
    },
    settled: "Settled: Slate R9MZ7V went 9 of 10 and LOST on Twente v Willem II Over 8.5 corners (only 6, all to Twente). Both tickets landed. Medium MFHEKF went 9 of 11 and lost (Copenhagen were beaten 5–0 without scoring; Córdoba 3–0 Oviedo wasn't GG). Mega N5SRW1 went 6 of 13 and lost.",
    audit: {
      of: "Saturday 21 November 2026",
      note: "Settled on 90-minute results. Each result has at least one reliable source; one is linked below. Corner counts are from ESPN and Sports Mole full-time stats.",
      picks: [
        { fx: "Man City v Fulham", mk: "Man City Over 4.5 Corners", odds: "1.23", score: "1–1 (City 8 corners)", status: "won", src: "https://www.sportsmole.co.uk/football/man-city/result/man-city-frustrations-grow-as-fulham-claim-point-despite-anderson-screamer_609558.html", srcName: "Sports Mole" },
        { fx: "Galatasaray v Samsunspor", mk: "Home Win", odds: "1.25", score: "2–1", status: "won", src: "https://www.espn.co.uk/football/match/_/gameId/401888245", srcName: "ESPN" },
        { fx: "Como v Cagliari", mk: "Home Win", odds: "1.32", score: "2–0", status: "won", src: "https://www.espn.co.uk/football/match/_/gameId/401875056", srcName: "ESPN" },
        { fx: "Eintracht Frankfurt v Hoffenheim", mk: "Over 2.5 Goals", odds: "1.34", score: "1–0", status: "lost", src: "https://www.bundesliga.com/en/bundesliga/news/eintracht-frankfurt-hoffenheim-match-report-highlights-matchday-10-burkardt-atubolu-40079", srcName: "Bundesliga" },
        { fx: "Bayer Leverkusen v Paderborn", mk: "Over 2.5 Goals", odds: "1.35", score: "4–0", status: "won", src: "https://www.espn.co.uk/football/match/_/gameId/401884735", srcName: "ESPN" },
        { fx: "Ross County v Cove Rangers", mk: "Ross County Over 1.5 Goals", odds: "1.23", score: "5–1", status: "won", src: "https://www.ross-shirejournal.co.uk/sport/ross-county-thrash-cove-to-maintain-momentum-at-top-of-leagu-450755/", srcName: "Ross-shire Journal" },
        { fx: "Young Boys v Thun", mk: "Young Boys Over 1.5 Goals", odds: "1.23", score: "3–2", status: "won", src: "https://www.nau.ch/sport/matchcenter/super-league-bsc-young-boys-gegen-fc-thun-berner-oberland-ab-1800-live-67205264", srcName: "nau.ch" },
        { fx: "Feyenoord v Excelsior", mk: "Feyenoord Over 1.5 Goals", odds: "1.21", score: "2–3", status: "won", src: "https://www.espn.co.uk/football/match/_/gameId/401875543", srcName: "ESPN" },
        { fx: "Real Madrid v Celta Vigo", mk: "Over 7.5 Corners", odds: "1.30", score: "2–1 (11 corners)", status: "won", src: "https://www.espn.com/soccer/team-stats/_/gameId/401882798/league/esp.1", srcName: "ESPN" },
        { fx: "Inter Miami v Columbus Crew", mk: "Over 2.5 Goals", odds: "1.36", score: "0–3", status: "won", src: "https://www.espn.com/soccer/match/_/gameId/401933739", srcName: "ESPN" }
      ],
      tickets: [
        { name: "Safest 4-leg", total: "2.34", landed: true },
        { name: "Goals 3-leg", total: "2.46", landed: false },
        { name: "Full accumulator JAE3A6", total: "11.88", landed: false },
        { name: "Medium G1QZXU (user's 11 legs)", total: "18.20", landed: false },
        { name: "Mega R6KC3K", total: "247.96", landed: false }
      ],
      lessons: [
        "Slate JAE3A6 (1.20 minimum, 10 legs) went 9 of 10 and lost only on Frankfurt 1–0 Hoffenheim (Over 2.5). The 16-leg Z0RKUF would have lost twice (Frankfurt Over 1.5, and Feyenoord 2–3 Excelsior). Fewer, slightly longer legs did better. Feyenoord Over 1.5 team goals won even though Feyenoord lost, which shows why team-goals markets were the right choice.",
        "Medium (the user's edited 11 legs) went 10 of 11 and lost only on Chelsea 1–4 Leeds. Leeds won and the game had 5 goals, so 1X & Under 4.5 failed on both counts. My original Under 3.5 would have lost too. The legs the user removed would both have won (West Ham had 14 corners; Monaco drew 1–1), so those edits made no difference. Bournemouth to score won (2–0), as the user predicted. Lesson: Leeds had scored 3 at Chelsea in the cup in September, and that warning should have kept this fixture out.",
        "Mega R6KC3K went 6 of 13. Over 2.5 went 1 of 4 (Saints 2–0, Gladbach 0–1 and Spurs 2–0 all fell short) and GG went 2 of 4 (Hibs lost 0–4). One goal short was the common failure. Over 2.5 and GG at 1.45–1.60 on low-xG fixtures are coin flips, so the next Mega needs more home-to-score, 1X and corners legs."
      ]
    }
  },
  {
    date: "2026-11-21",
    label: "Saturday 21 November 2026",
    built: "Built 02:05 UK",
    comps: [
      { name: "Premier League", windows: [ { ko: "12:30 UK", picks: [
        { n: 1, fx: "Man City v Fulham", mk: "Man City Over 4.5 Corners", odds: "1.23" } ] } ] },
      { name: "Süper Lig", windows: [ { ko: "13:00 UK", picks: [
        { n: 2, fx: "Galatasaray v Samsunspor", mk: "Home Win", odds: "1.25" } ] } ] },
      { name: "Serie A", windows: [ { ko: "14:00 UK", picks: [
        { n: 3, fx: "Como v Cagliari", mk: "Home Win", odds: "1.32" } ] } ] },
      { name: "Bundesliga", windows: [ { ko: "14:30 UK", picks: [
        { n: 4, fx: "Eintracht Frankfurt v Hoffenheim", mk: "Over 2.5 Goals", odds: "1.34" } ] } ] },
      { name: "Bundesliga", windows: [ { ko: "14:30 UK", picks: [
        { n: 5, fx: "Bayer Leverkusen v Paderborn", mk: "Over 2.5 Goals", odds: "1.35" } ] } ] },
      { name: "Scottish League One", windows: [ { ko: "15:00 UK", picks: [
        { n: 6, fx: "Ross County v Cove Rangers", mk: "Ross County Over 1.5 Goals", odds: "1.23" } ] } ] },
      { name: "Swiss Super League", windows: [ { ko: "17:00 UK", picks: [
        { n: 7, fx: "Young Boys v Thun", mk: "Young Boys Over 1.5 Goals", odds: "1.23" } ] } ] },
      { name: "Eredivisie", windows: [ { ko: "17:45 UK", picks: [
        { n: 8, fx: "Feyenoord v Excelsior", mk: "Feyenoord Over 1.5 Goals", odds: "1.21" } ] } ] },
      { name: "LaLiga", windows: [ { ko: "20:00 UK", picks: [
        { n: 9, fx: "Real Madrid v Celta Vigo", mk: "Over 7.5 Corners", odds: "1.30" } ] } ] },
      { name: "MLS Cup Playoffs", windows: [ { ko: "23:00 UK", picks: [
        { n: 10, fx: "Inter Miami v Columbus Crew", mk: "Over 2.5 Goals", odds: "1.36" } ] } ] }
    ],
    passes: "Bayer Leverkusen (lost their last 2 home games), Young Boys v Thun Over 2.5 (1.22 is below the new 1.30 floor for Over 2.5, so it was played as a Home Win), Schalke v Stuttgart Over 2.5 (Schalke haven't scored at home this season), Genk (both teams have new coaches on debut), Monaco (no league win in 5), Lens v Toulouse GG (six Lens players missing), Kilmarnock v Aberdeen GG (their September meeting ended 0–0), Sevilla v Betis corners (Sevilla's games average about 7 corners), LASK (Champions League at Bodø on Tuesday, so likely rotation), Alianza Lima (dead rubber for them; Cajamarca are fighting relegation), Lugano (lost 5–0 last time, two players suspended), and every 2nd Half Over 1.5 (dropped under the new rule). No Arsenal fixtures were considered.",
    tickets: [
      { name: "Safest 4-leg", legs: [
        ["Feyenoord v Excelsior: Feyenoord Over 1.5", "1.21"],
        ["Ross County v Cove Rangers: Ross County Over 1.5", "1.23"],
        ["Man City v Fulham: City Over 4.5 Corners", "1.23"],
        ["Galatasaray v Samsunspor: Home Win", "1.25"]
      ], total: "2.34" },
      { name: "Goals 3-leg", legs: [
        ["Frankfurt v Hoffenheim: Over 2.5", "1.34"],
        ["Leverkusen v Paderborn: Over 2.5", "1.35"],
        ["Inter Miami v Columbus: Over 2.5", "1.36"]
      ], total: "2.46" }
    ],
    acca: { code: "JAE3A6", legs: 10, odds: "11.88", booked: "03:40 UK", note: "Final Slate under the new 1.20 minimum per leg: 10 legs, each played in its safest market. Replaces Z0RKUF, NF53BM and J28V3C." },
    earlier: {
      code: "Z0RKUF", odds: "10.52", booked: "03:05 UK", landed: false, results: [
        { status: "won", score: "1–1 (City 8 corners)", src: "https://www.sportsmole.co.uk/football/man-city/result/man-city-frustrations-grow-as-fulham-claim-point-despite-anderson-screamer_609558.html", srcName: "Sports Mole" },
        { status: "won", score: "2–1", src: "https://www.espn.co.uk/football/match/_/gameId/401888245", srcName: "ESPN" },
        { status: "won", score: "2–0", src: "https://www.novosti.rs/sport/fudbal/1673381/zvezda-mucila-ali-ipak-slavila-crveno-beli-pobedli-radnik-surdulice", srcName: "Novosti" },
        { status: "won", score: "2–0", src: "https://www.espn.co.uk/football/match/_/gameId/401875056", srcName: "ESPN" },
        { status: "lost", score: "1–0", src: "https://www.bundesliga.com/en/bundesliga/news/eintracht-frankfurt-hoffenheim-match-report-highlights-matchday-10-burkardt-atubolu-40079", srcName: "Bundesliga" },
        { status: "won", score: "4–0", src: "https://www.espn.co.uk/football/match/_/gameId/401884735", srcName: "ESPN" },
        { status: "won", score: "4–1", src: "https://www.skysports.com/football/news/13610580/celtic-4-1-st-mirren-scottish-premiership-champions-ease-to-victory-against-buddies", srcName: "Sky Sports" },
        { status: "won", score: "5–0", src: "https://www.irishnews.com/sport/soccer/blues-hit-five-in-powerful-display-after-tributes-paid-to-irish-league-legend-roy-coyle-RPGMG3VV4VDAJO6ZSV3Q3YWJWM/", srcName: "Irish News" },
        { status: "won", score: "5–1", src: "https://www.ross-shirejournal.co.uk/sport/ross-county-thrash-cove-to-maintain-momentum-at-top-of-leagu-450755/", srcName: "Ross-shire Journal" },
        { status: "won", score: "1–1", src: "https://www.espn.co.uk/football/team-stats/_/gameId/401880150/league/eng.2", srcName: "ESPN" },
        { status: "won", score: "1–4 (HT 0–3)", src: "https://www.nec-nijmegen.nl/wedstrijden/wedstrijd/matchcenter-n.e.c.-psv-21-11-2026.htm", srcName: "NEC" },
        { status: "won", score: "3–2", src: "https://www.nau.ch/sport/matchcenter/super-league-bsc-young-boys-gegen-fc-thun-berner-oberland-ab-1800-live-67205264", srcName: "nau.ch" },
        { status: "lost", score: "2–3", src: "https://www.espn.co.uk/football/match/_/gameId/401875543", srcName: "ESPN" },
        { status: "won", score: "1–1", src: "https://sports.yahoo.com/articles/match-report-monaco-1-1-214500104.html", srcName: "Yahoo Sports" },
        { status: "won", score: "2–1 (RM 8 corners)", src: "https://www.espn.com/soccer/team-stats/_/gameId/401882798/league/esp.1", srcName: "ESPN" },
        { status: "won", score: "0–3", src: "https://www.espn.com/soccer/match/_/gameId/401933739", srcName: "ESPN" }
      ],
      note: "16-leg version with legs as short as 1.09, replaced under the 1.20 minimum. (NF53BM and J28V3C came before it.) Kept for reference only.",
      picks: [
        { fx: "Man City v Fulham", ko: "12:30", mk: "Man City Over 4.5 Corners", odds: "1.23" },
        { fx: "Galatasaray v Samsunspor", ko: "13:00", mk: "Over 1.5 Goals", odds: "1.11" },
        { fx: "Crvena Zvezda v Radnik Surdulica", ko: "13:00", mk: "Home Win", odds: "1.14" },
        { fx: "Como v Cagliari", ko: "14:00", mk: "Home Win", odds: "1.32" },
        { fx: "Eintracht Frankfurt v Hoffenheim", ko: "14:30", mk: "Over 1.5 Goals", odds: "1.09" },
        { fx: "Bayer Leverkusen v Paderborn", ko: "14:30", mk: "Over 1.5 Goals", odds: "1.10" },
        { fx: "Celtic v St Mirren", ko: "15:00", mk: "Home Win", odds: "1.18" },
        { fx: "Linfield v Limavady United", ko: "15:00", mk: "Home Win", odds: "1.12" },
        { fx: "Ross County v Cove Rangers", ko: "15:00", mk: "Home Win", odds: "1.19" },
        { fx: "West Ham v Preston", ko: "15:00", mk: "Over 1.5 Goals", odds: "1.14" },
        { fx: "NEC Nijmegen v PSV", ko: "15:30", mk: "2nd Half Over 0.5 Goals", odds: "1.10" },
        { fx: "Young Boys v Thun", ko: "17:00", mk: "Young Boys Over 1.5 Goals", odds: "1.23" },
        { fx: "Feyenoord v Excelsior", ko: "17:45", mk: "Home Win", odds: "1.19" },
        { fx: "Monaco v Auxerre", ko: "19:45", mk: "Double Chance 1X", odds: "1.13" },
        { fx: "Real Madrid v Celta Vigo", ko: "20:00", mk: "Real Madrid Over 4.5 Corners", odds: "1.19" },
        { fx: "Inter Miami v Columbus Crew", ko: "23:00", mk: "Over 1.5 Goals", odds: "1.10" }
      ]
    },
    mid: {
      code: "G1QZXU", odds: "18.20", booked: "03:45 UK", landed: false,
      results: [
        { status: "won", score: "2–1", src: "https://www.skysports.com/football/video/13614714/norwich-city-2-1-cardiff-city-championship-highlights", srcName: "Sky Sports" },
        { status: "won", score: "2–1", src: "https://www.wolves.co.uk/news/mens-first-team/20261121-report-wolves-2-1-charlton/", srcName: "Wolves" },
        { status: "won", score: "2–2", src: "https://www.foxsports.com/soccer/juliper-league-charleroi-vs-sint-truiden-nov-21-2026-game-boxscore-919852", srcName: "FOX Sports" },
        { status: "won", score: "0–0", src: "https://www.avfc.co.uk/news/2026/november/21/report-aston-villa-sunderland-26-27", srcName: "Aston Villa" },
        { status: "lost", score: "1–4", src: "https://www.espn.com/soccer/match/_/gameId/401879236/leeds-united-chelsea", srcName: "ESPN" },
        { status: "won", score: "2–0", src: "https://www.skysports.com/football/bournemouth-vs-nottingham-forest/report/559545", srcName: "Sky Sports" },
        { status: "won", score: "0–1", src: "https://www.espn.com/soccer/match/_/gameId/401882799/valencia-rayo-vallecano", srcName: "ESPN" },
        { status: "won", score: "2–2", src: "https://www.espn.co.uk/football/match/_/gameId/401888244", srcName: "ESPN" },
        { status: "won", score: "1–5", src: "https://sporza.be/nl/matches/voetbal/jupiler-pro-league/2026-2027/regulier/12/kv-mechelen-club-brugge-blauw-zwart-statement-achter-de-kazerne-club-brugge-zet-kv-mechelen-met-1-5-opzij~1781871794249/", srcName: "Sporza" },
        { status: "won", score: "1–3 (HT 1–2)", src: "https://www.voetbalprimeur.nl/nieuws/2161416/pastoor-effect-in-zwolle-pec-verslaat-telstar.html", srcName: "Voetbalprimeur" },
        { status: "won", score: "1–3", src: "https://www.voetbalprimeur.nl/nieuws/2161428/heerenveen-wint-van-fc-groningen-in-derby-van-het-noorden.html", srcName: "Voetbalprimeur" }
      ],
      note: "Amended by the user after booking: Chelsea v Leeds changed to 1X & Under 4.5, West Ham corners and Monaco to score removed, Bournemouth to score added. Booking code G1QZXU still holds the original 12 legs (20.34), so load these 11 legs by hand.",
      legs: [
        { fx: "Norwich v Cardiff", comp: "Championship", ko: "12:30", mk: "Both Teams to Score (GG)", odds: "1.40" },
        { fx: "Wolves v Charlton", comp: "Championship", ko: "15:00", mk: "Home Win", odds: "1.35" },
        { fx: "Charleroi v Sint-Truiden", comp: "Belgian Pro League", ko: "15:00", mk: "Both Teams to Score (GG)", odds: "1.51" },
        { fx: "Aston Villa v Sunderland", comp: "Premier League", ko: "15:00", mk: "Double Chance 1X", odds: "1.22" },
        { fx: "Chelsea v Leeds", comp: "Premier League", ko: "15:00", mk: "1X & Under 4.5 Goals", odds: "1.44" },
        { fx: "Bournemouth v Nottingham Forest", comp: "Premier League", ko: "15:00", mk: "Home to Score (Bournemouth Over 0.5)", odds: "1.21" },
        { fx: "Rayo Vallecano v Valencia", comp: "LaLiga", ko: "15:15", mk: "Under 4.5 Goals", odds: "1.13" },
        { fx: "Kocaelispor v Fenerbahçe", comp: "Süper Lig", ko: "16:00", mk: "Away to Score (Fenerbahçe Over 0.5)", odds: "1.13" },
        { fx: "KV Mechelen v Club Brugge", comp: "Belgian Pro League", ko: "19:45", mk: "Over 2.5 Goals", odds: "1.40" },
        { fx: "Telstar v PEC Zwolle", comp: "Eredivisie", ko: "20:00", mk: "2nd Half Over 0.5 Goals", odds: "1.19" },
        { fx: "Groningen v Heerenveen", comp: "Eredivisie", ko: "20:00", mk: "Both Teams to Score (GG)", odds: "1.41" }
      ]
    },
    mega: {
      code: "R6KC3K", odds: "247.96", booked: "02:00 UK", landed: false,
      results: [
        { status: "lost", score: "2–0", src: "https://www.southamptonfc.com/en/news/article/report-larin-strikes-on-return-as-saints-defeat-derby", srcName: "Southampton" },
        { status: "won", score: "3–0", src: "https://www.espn.com/soccer/team-stats/_/gameId/401874981/league/ita.1", srcName: "ESPN" },
        { status: "won", score: "1–0", src: "https://www.ceskenoviny.cz/zpravy/fotbaliste-m-boleslavi-zdolali-zlin-a-doma-v-ligove-sezone-vyhrali-i-sedmy-duel/2904838", srcName: "ČTK" },
        { status: "lost", score: "0–1", src: "https://www.espn.com/soccer/match/_/gameId/401884728/sc-freiburg-sv-elversberg", srcName: "ESPN" },
        { status: "lost", score: "0–1", src: "https://www.bundesliga.com/en/bundesliga/news/borussia-monchengladbach-borussia-dortmund-match-report-highlights-matchday-10-40073", srcName: "Bundesliga" },
        { status: "lost", score: "0–4", src: "https://www.hibernianfc.co.uk/news/2026/november/21/match-report--hibs-0-4-dundee-united", srcName: "Hibernian" },
        { status: "lost", score: "2–0", src: "https://www.espn.co.uk/football/match/_/gameId/401878754", srcName: "ESPN" },
        { status: "won", score: "3–1", src: "https://sports.yahoo.com/articles/dungannon-beat-crusaders-return-winning-172415581.html", srcName: "Yahoo Sports" },
        { status: "lost", score: "1–2", src: "https://vglive.vg.no/fotball/event/v%C3%A5lerenga-start/731152", srcName: "VG" },
        { status: "won", score: "2–3", src: "https://fcutrecht.nl/nieuws/2026/november/fc-utrecht-verliest-van-sc-cambuur", srcName: "FC Utrecht" },
        { status: "won", score: "2–2", src: "https://sporza.be/nl/matches/voetbal/jupiler-pro-league/2026-2027/regulier/12/zulte-waregem-antwerp-zelfs-vanop-11-meter-lukte-het-niet-zulte-waregem-blijft-opnieuw-zonder-zege-achter-na-comeback-zonder-climax-tegen-antwerp~1781871845516/", srcName: "Sporza" },
        { status: "won", score: "1–0", src: "https://www.flashscore.com/news/soccer-serie-a-napoli-torino-report-november-21-2026/pnkQH4N7/", srcName: "Flashscore" },
        { status: "lost", score: "0–1", src: "https://www.espn.co.uk/football/match/_/gameId/401841327", srcName: "ESPN" }
      ],
      note: "Mixed markets: 3 home wins, 4 Over 2.5, 4 GG, 1 Under 3.5 and 1 Home & Over 1.5.",
      legs: [
        { fx: "Southampton v Derby", comp: "Championship", ko: "12:30", mk: "Over 2.5 Goals", odds: "1.53" },
        { fx: "Lazio v Lecce", comp: "Serie A", ko: "14:00", mk: "Home Win", odds: "1.45" },
        { fx: "Mladá Boleslav v Zlín", comp: "Czech First League", ko: "14:00", mk: "Home Win", odds: "1.51" },
        { fx: "Elversberg v Freiburg", comp: "Bundesliga", ko: "14:30", mk: "Both Teams to Score (GG)", odds: "1.54" },
        { fx: "Gladbach v Dortmund", comp: "Bundesliga", ko: "14:30", mk: "Over 2.5 Goals", odds: "1.50" },
        { fx: "Hibernian v Dundee United", comp: "Scottish Premiership", ko: "15:00", mk: "Both Teams to Score (GG)", odds: "1.54" },
        { fx: "Tottenham v Ipswich", comp: "Premier League", ko: "15:00", mk: "Over 2.5 Goals", odds: "1.59" },
        { fx: "Dungannon Swifts v Crusaders", comp: "NIFL Premiership", ko: "15:00", mk: "Over 2.5 Goals", odds: "1.48" },
        { fx: "Vålerenga v Start", comp: "Eliteserien", ko: "17:00", mk: "Home Win", odds: "1.55" },
        { fx: "Utrecht v Cambuur", comp: "Eredivisie", ko: "17:45", mk: "Both Teams to Score (GG)", odds: "1.45" },
        { fx: "Zulte Waregem v Antwerp", comp: "Belgian Pro League", ko: "19:45", mk: "Both Teams to Score (GG)", odds: "1.58" },
        { fx: "Napoli v Torino", comp: "Serie A", ko: "19:45", mk: "Under 3.5 Goals", odds: "1.50" },
        { fx: "Bahia v Coritiba", comp: "Brasileiro Série A", ko: "20:30", mk: "Home Win & Over 1.5 Goals", odds: "1.66" }
      ]
    },
    results: {
      1: { status: "won", score: "1–1 (City 8 corners)", src: "https://www.sportsmole.co.uk/football/man-city/result/man-city-frustrations-grow-as-fulham-claim-point-despite-anderson-screamer_609558.html", srcName: "Sports Mole" },
      2: { status: "won", score: "2–1", src: "https://www.espn.co.uk/football/match/_/gameId/401888245", srcName: "ESPN" },
      3: { status: "won", score: "2–0", src: "https://www.espn.co.uk/football/match/_/gameId/401875056", srcName: "ESPN" },
      4: { status: "lost", score: "1–0", src: "https://www.bundesliga.com/en/bundesliga/news/eintracht-frankfurt-hoffenheim-match-report-highlights-matchday-10-burkardt-atubolu-40079", srcName: "Bundesliga" },
      5: { status: "won", score: "4–0", src: "https://www.espn.co.uk/football/match/_/gameId/401884735", srcName: "ESPN" },
      6: { status: "won", score: "5–1", src: "https://www.ross-shirejournal.co.uk/sport/ross-county-thrash-cove-to-maintain-momentum-at-top-of-leagu-450755/", srcName: "Ross-shire Journal" },
      7: { status: "won", score: "3–2", src: "https://www.nau.ch/sport/matchcenter/super-league-bsc-young-boys-gegen-fc-thun-berner-oberland-ab-1800-live-67205264", srcName: "nau.ch" },
      8: { status: "won", score: "2–3", src: "https://www.espn.co.uk/football/match/_/gameId/401875543", srcName: "ESPN" },
      9: { status: "won", score: "2–1 (11 corners)", src: "https://www.espn.com/soccer/team-stats/_/gameId/401882798/league/esp.1", srcName: "ESPN" },
      10: { status: "won", score: "0–3", src: "https://www.espn.com/soccer/match/_/gameId/401933739", srcName: "ESPN" }
    },
    settled: "Settled 01:30 UK (22 Nov): Slate JAE3A6 went 9 of 10 and lost only on Frankfurt 1–0 Hoffenheim (Over 2.5). Inter Miami 0–3 Columbus gave the late Over 2.5. The Safest 4-leg landed. Medium (the user's 11 legs) went 10 of 11 and lost only on Chelsea 1–4 Leeds. Mega R6KC3K went 6 of 13. The 16-leg Z0RKUF would have gone 14 of 16 and lost (Frankfurt Over 1.5, Feyenoord 2–3).",
    audit: {
      of: "Friday 20 November 2026",
      note: "Settled on 90-minute results. Each result has at least one reliable source; one is linked below. Athletic v Espanyol had 11 corners according to ESPN's full-time stats.",
      picks: [
        { fx: "Persepolis v Paykan", mk: "Home Win", odds: "1.20", score: "3–0", status: "won", src: "https://www.soccerstats.com/en-gb/leagues/iran/pro-league/iran", srcName: "SoccerStats" },
        { fx: "Al Sadd v Lusail", mk: "Home Win", odds: "1.28", score: "3–2", status: "won", src: "https://www.ceroacero.es/noticias/al-sadd-gano-lusail-sc/1264049", srcName: "Ceroacero" },
        { fx: "Al Ahli v Al Nassr", mk: "Over 1.5 Goals", odds: "1.14", score: "3–1", status: "won", src: "https://www.espn.com/soccer/match/_/gameId/401900905", srcName: "ESPN" },
        { fx: "Stade Lausanne-Ouchy v Kriens", mk: "Home Win", odds: "1.45", score: "3–1", status: "won", src: "https://www.livescore.com/en/football/switzerland/challenge-league/fc-stade-lausanne-ouchy-vs-kriens/1796154/", srcName: "LiveScore" },
        { fx: "Molde v Bodø/Glimt", mk: "Over 2.5 Goals", odds: "1.26", score: "2–4", status: "won", src: "https://www.nrk.no/nordland/glimt-slo-molde-4-2-og-overnatter-pa-tabelltopp-1.18086159", srcName: "NRK" },
        { fx: "Heracles v Jong PSV", mk: "Home Win", odds: "1.17", score: "2–1", status: "won", src: "https://almelo1.nl/heracles-almelo-breidt-thuisreeks-uit-met-zege-op-jong-psv/", srcName: "Almelo1" },
        { fx: "Bayern Munich v Cologne", mk: "Over 2.5 Goals", odds: "1.13", score: "1–1", status: "lost", src: "https://www.espn.co.uk/football/match/_/gameId/401884736", srcName: "ESPN" },
        { fx: "Athletic Bilbao v Espanyol", mk: "Over 7.5 Corners", odds: "1.26", score: "0–1 (11 corners)", status: "won", src: "https://www.espn.com/soccer/team-stats/_/gameId/401882805/league/esp.1", srcName: "ESPN" }
      ],
      tickets: [
        { name: "Safest 4-leg", total: "1.81", landed: false },
        { name: "Value 4-leg", total: "2.95", landed: true },
        { name: "Full accumulator L8WJ70", total: "5.33", landed: false },
        { name: "Mega XCFA1A", total: "351.82", landed: false }
      ],
      lessons: [
        "Bayern v Cologne Over 2.5 at 1.13 lost 1–1 (Kane and Olise were both injured during the match). Very short Over 2.5 prices carry far more risk than they pay, so from today Over 2.5 below 1.30 is banned.",
        "The mixed Mega did better leg for leg: XCFA1A won 7 of 13, while the all-home-win UPVZ10 won 2 of 12. Home wins at 1.50–1.67 still went only 2 for 4 (Azam and Verona lost), so these remain the weakest Mega legs.",
        "2nd Half Over 1.5 went 1 for 2 (Porto's second half had only one goal), so the rule is now 2nd Half Over 0.5 only. Corners held up even in a 0–1 game: Athletic forced 9 corners on their own."
      ]
    }
  },
  {
    date: "2026-11-20",
    label: "Friday 20 November 2026",
    built: "Built 01:40 UK",
    comps: [
      { name: "Iran Pro League", windows: [ { ko: "12:45 UK", picks: [
        { n: 1, fx: "Persepolis v Paykan", mk: "Home Win", odds: "1.20" } ] } ] },
      { name: "Qatar Stars League", windows: [ { ko: "13:00 UK", picks: [
        { n: 2, fx: "Al Sadd v Lusail", mk: "Home Win", odds: "1.28" } ] } ] },
      { name: "Saudi Pro League", windows: [ { ko: "17:30 UK", picks: [
        { n: 3, fx: "Al Ahli v Al Nassr", mk: "Over 1.5 Goals", odds: "1.14" } ] } ] },
      { name: "Swiss Challenge League", windows: [ { ko: "18:30 UK", picks: [
        { n: 4, fx: "Stade Lausanne-Ouchy v Kriens", mk: "Home Win", odds: "1.45" } ] } ] },
      { name: "Eliteserien", windows: [ { ko: "18:00 UK", picks: [
        { n: 5, fx: "Molde v Bodø/Glimt", mk: "Over 2.5 Goals", odds: "1.26" } ] } ] },
      { name: "Eerste Divisie", windows: [ { ko: "18:00/19:00 UK", picks: [
        { n: 6, fx: "Heracles v Jong PSV", mk: "Home Win", odds: "1.17" } ] } ] },
      { name: "Bundesliga", windows: [ { ko: "19:30 UK", picks: [
        { n: 7, fx: "Bayern Munich v Cologne", mk: "Over 2.5 Goals", odds: "1.13" } ] } ] },
      { name: "LaLiga", windows: [ { ko: "20:00 UK", picks: [
        { n: 8, fx: "Athletic Bilbao v Espanyol", mk: "Over 7.5 Corners", odds: "1.26" } ] } ] }
    ],
    passes: "Porto v Paredes (Porto rotate before Feyenoord, and Paredes knocked out a top-flight side 1–0), Shakhtar (won 2 of 6, Fenerbahçe next week), Troyes v Le Havre (relegation scrap; in the Mega as Under 2.5), Independiente del Valle (already champions, likely mixed side), AGF (3 wins all season), Inverness v Ayr (they meet again Tuesday). Athletic v Espanyol is played as Over 7.5 corners rather than a Home Win: Athletic are missing three strikers, and Espanyol sit deep (5 goals in 8). No Arsenal fixtures were considered.",
    tickets: [
      { name: "Safest 4-leg", legs: [
        ["Bayern v Cologne: Over 2.5", "1.13"],
        ["Al Ahli v Al Nassr: Over 1.5", "1.14"],
        ["Heracles v Jong PSV: Home Win", "1.17"],
        ["Persepolis v Paykan: Home Win", "1.20"]
      ], total: "1.81" },
      { name: "Value 4-leg", legs: [
        ["Stade Lausanne-Ouchy v Kriens: Home Win", "1.45"],
        ["Al Sadd v Lusail: Home Win", "1.28"],
        ["Molde v Bodø/Glimt: Over 2.5", "1.26"],
        ["Athletic v Espanyol: Over 7.5 corners", "1.26"]
      ], total: "2.95" }
    ],
    acca: { code: "L8WJ70", legs: 8, odds: "5.33", booked: "01:30 UK" },
    mega: {
      code: "XCFA1A", odds: "351.82", booked: "15:05 UK", landed: false,
      results: [
        { status: "won", score: "3–1", src: "https://www.shababalahli.ae/shabab-al-ahli-wins-ajman-3-1-2/", srcName: "Shabab Al Ahli" },
        { status: "lost", score: "1–1", src: "https://www.sportytrader.com/en/results-live/shakhtar-donetsk-fc-levy-bereg-kiev-8583969/", srcName: "SportyTrader" },
        { status: "won", score: "1–3", src: "https://isport.blesk.cz/clanek/fotbal-domaci-souteze-chance-narodni-liga/482384/divocina-v-derby-dve-cervene-breite-sel-ven-za-nadavky-west-sudi-si-nas-mazal-na-chleba.html", srcName: "iSport" },
        { status: "lost", score: "2–4", src: "https://ghanasoccernet.com/azam-2-4-singida-black-stars-visitors-claim-six-goal-thriller-in-ligi-kuu-bara", srcName: "GhanaSoccernet" },
        { status: "won", score: "2–1", src: "https://www.espn.co.uk/football/match/_/gameId/401874492", srcName: "ESPN" },
        { status: "lost", score: "0–2", src: "https://www.tuttomercatoweb.com/serie-b/serie-b-12a-giornata-hellas-verona-cesena-0-2-romagnoli-2-2295801", srcName: "TMW" },
        { status: "won", score: "1–2", src: "https://www.mecze24.pl/aktualnosci/pogon-szczecin-slask-wroclaw-oceny-dla-pilkarzy-po-spotkaniu-20-11-2026", srcName: "Mecze24" },
        { status: "won", score: "2–0", src: "https://sports.yahoo.com/articles/cymru-premier-friday-round-081255848.html", srcName: "BBC via Yahoo" },
        { status: "lost", score: "3–1", src: "https://www.espn.co.uk/football/match/_/gameId/401876395", srcName: "ESPN" },
        { status: "lost", score: "1–1 (HT 1–0, 2H: 1 goal)", src: "https://observador.pt/liveblogs/fc-porto-paredes-francisco-moura-a-central-souza-e-fofana-no-onze/", srcName: "Observador" },
        { status: "won", score: "1–2 (HT 1–0, 2H: 2 goals)", src: "https://groot-waterland.nl/2026/11/20/fc-volendam-geeft-voorsprong-uit-handen-en-verliest-thuis-van-jong-ajax/", srcName: "Groot Waterland" },
        { status: "lost", score: "0–3", src: "https://www.azfanpage.nl/jong-az-boekt-overtuigende-overwinning-op-bezoek-bij-vitesse", srcName: "AZFanpage" },
        { status: "won", score: "1–2", src: "https://www.skysports.com/football/news/13611580/barnsley-vs-sheffield-wednesday", srcName: "Sky Sports" }
      ],
      note: "Rebuilt at 15:05 UK with a market mix (4 home wins, 3 Over 2.5, 3 GG, 2 second-half goals, 1 Under 2.5), per the user's rule. Use this code.",
      legs: [
        { fx: "Shabab Al Ahli v Ajman", comp: "UAE Pro League", ko: "15:25", mk: "Home Win", odds: "1.53" },
        { fx: "Shakhtar Donetsk v Livyi Bereh", comp: "Ukrainian Premier League", ko: "16:00", mk: "Over 2.5 Goals", odds: "1.63" },
        { fx: "Karviná v Baník Ostrava B", comp: "Czech FNL", ko: "17:00", mk: "Both Teams to Score (GG)", odds: "1.51" },
        { fx: "Azam v Singida Black Stars", comp: "Tanzania Premier League", ko: "18:00", mk: "Home Win", odds: "1.50" },
        { fx: "AGF v Lyngby", comp: "Danish Superliga", ko: "18:00", mk: "Over 2.5 Goals", odds: "1.54" },
        { fx: "Hellas Verona v Cesena", comp: "Serie B", ko: "19:30", mk: "Home Win", odds: "1.62" },
        { fx: "Pogoń Szczecin v Śląsk Wrocław", comp: "Ekstraklasa", ko: "19:30", mk: "Both Teams to Score (GG)", odds: "1.70" },
        { fx: "Penybont v Haverfordwest", comp: "Cymru Premier", ko: "19:45", mk: "Home Win", odds: "1.52" },
        { fx: "Troyes v Le Havre", comp: "Ligue 1", ko: "19:45", mk: "Under 2.5 Goals", odds: "1.95" },
        { fx: "Porto v Paredes", comp: "Taça de Portugal", ko: "20:45", mk: "2nd Half Over 1.5 Goals", odds: "1.56" },
        { fx: "FC Volendam v Jong Ajax", comp: "Eerste Divisie", ko: "19:00", mk: "2nd Half Over 1.5 Goals", odds: "1.46" },
        { fx: "Vitesse v Jong AZ", comp: "Eerste Divisie", ko: "19:00", mk: "Both Teams to Score (GG)", odds: "1.46" },
        { fx: "Barnsley v Sheffield Wednesday", comp: "League One", ko: "20:00", mk: "Over 2.5 Goals", odds: "1.49" }
      ],
      prev: {
        code: "UPVZ10", odds: "247.57", booked: "01:38 UK", landed: false,
        note: "Original 01:38 Mega: almost all home wins. Already lost: the first four legs (J1 and Indonesia) failed before the rebuild. Kept for reference only.",
        results: [
          { status: "lost", score: "1–1", src: "https://www.espn.co.uk/football/team-stats/_/gameId/401877534", srcName: "ESPN" },
          { status: "lost", score: "0–1", src: "https://www.espn.co.uk/football/match/_/gameId/401877553", srcName: "ESPN" },
          { status: "lost", score: "1–2", src: "https://www.espn.co.uk/football/match/_/gameId/401877548", srcName: "ESPN" },
          { status: "lost", score: "0–1", src: "https://bola.okezone.com/read/2026/11/20/49/3255252/hasil-dewa-united-vs-persita-tangerang-di-super-league-2026-2027-pendekar-cisadane-menangi-derby-1-0", srcName: "Okezone" },
          { status: "won", score: "3–1", src: "https://www.shababalahli.ae/shabab-al-ahli-wins-ajman-3-1-2/", srcName: "Shabab Al Ahli" },
          { status: "lost", score: "1–2", src: "https://www.duhailsc.qa/", srcName: "Al Duhail" },
          { status: "lost", score: "1–3", src: "https://isport.blesk.cz/clanek/fotbal-domaci-souteze-chance-narodni-liga/482384/divocina-v-derby-dve-cervene-breite-sel-ven-za-nadavky-west-sudi-si-nas-mazal-na-chleba.html", srcName: "iSport" },
          { status: "lost", score: "2–4", src: "https://ghanasoccernet.com/azam-2-4-singida-black-stars-visitors-claim-six-goal-thriller-in-ligi-kuu-bara", srcName: "GhanaSoccernet" },
          { status: "lost", score: "0–2", src: "https://www.tuttomercatoweb.com/serie-b/serie-b-12a-giornata-hellas-verona-cesena-0-2-romagnoli-2-2295801", srcName: "TMW" },
          { status: "lost", score: "1–2", src: "https://www.mecze24.pl/aktualnosci/pogon-szczecin-slask-wroclaw-oceny-dla-pilkarzy-po-spotkaniu-20-11-2026", srcName: "Mecze24" },
          { status: "won", score: "2–0", src: "https://sports.yahoo.com/articles/cymru-premier-friday-round-081255848.html", srcName: "BBC via Yahoo" },
          { status: "lost", score: "3–1", src: "https://www.espn.co.uk/football/match/_/gameId/401876395", srcName: "ESPN" }
        ],
        legs: [
          { fx: "Kashima Antlers v Shimizu", comp: "J1 League", ko: "10:00", mk: "Home Win", odds: "1.51" },
          { fx: "Kashiwa Reysol v JEF United", comp: "J1 League", ko: "10:00", mk: "Home Win", odds: "1.53" },
          { fx: "Vissel Kobe v Mito Hollyhock", comp: "J1 League", ko: "10:00", mk: "Home Win & Over 1.5 Goals", odds: "1.63" },
          { fx: "Dewa United v Persita", comp: "Indonesia Super League", ko: "12:00", mk: "Home Win", odds: "1.58" },
          { fx: "Shabab Al Ahli v Ajman", comp: "UAE Pro League", ko: "15:25", mk: "Home Win", odds: "1.44" },
          { fx: "Al Duhail v Qatar SC", comp: "Qatar Stars League", ko: "15:30", mk: "Home Win", odds: "1.35" },
          { fx: "Karviná v Baník Ostrava B", comp: "Czech FNL", ko: "17:00", mk: "Home Win", odds: "1.49" },
          { fx: "Azam v Singida Black Stars", comp: "Tanzania Premier League", ko: "18:00", mk: "Home Win", odds: "1.63" },
          { fx: "Hellas Verona v Cesena", comp: "Serie B", ko: "19:30", mk: "Home Win", odds: "1.67" },
          { fx: "Pogoń Szczecin v Śląsk Wrocław", comp: "Ekstraklasa", ko: "19:30", mk: "Home Win", odds: "1.81" },
          { fx: "Penybont v Haverfordwest", comp: "Cymru Premier", ko: "19:45", mk: "Home Win", odds: "1.48" },
          { fx: "Troyes v Le Havre", comp: "Ligue 1", ko: "19:45", mk: "Under 2.5 Goals", odds: "1.97" }
        ]
      }
    },
    results: {
      1: { status: "won", score: "3–0", src: "https://www.soccerstats.com/en-gb/leagues/iran/pro-league/iran", srcName: "SoccerStats" },
      2: { status: "won", score: "3–2", src: "https://www.ceroacero.es/noticias/al-sadd-gano-lusail-sc/1264049", srcName: "Ceroacero" },
      3: { status: "won", score: "3–1", src: "https://www.espn.com/soccer/match/_/gameId/401900905", srcName: "ESPN" },
      4: { status: "won", score: "3–1", src: "https://www.livescore.com/en/football/switzerland/challenge-league/fc-stade-lausanne-ouchy-vs-kriens/1796154/", srcName: "LiveScore" },
      5: { status: "won", score: "2–4", src: "https://www.nrk.no/nordland/glimt-slo-molde-4-2-og-overnatter-pa-tabelltopp-1.18086159", srcName: "NRK" },
      6: { status: "won", score: "2–1", src: "https://almelo1.nl/heracles-almelo-breidt-thuisreeks-uit-met-zege-op-jong-psv/", srcName: "Almelo1" },
      7: { status: "lost", score: "1–1", src: "https://www.espn.co.uk/football/match/_/gameId/401884736", srcName: "ESPN" },
      8: { status: "won", score: "0–1 (11 corners)", src: "https://www.espn.com/soccer/team-stats/_/gameId/401882805/league/esp.1", srcName: "ESPN" }
    },
    settled: "Settled 01:30 UK (21 Nov): Slate 8 picks, 7 won, 1 lost (88%). Accumulator L8WJ70 lost on Bayern v Cologne, which finished 1–1 (Over 2.5 at 1.13). The Value 4-leg landed; the Safest 4-leg lost on the same Bayern leg. Athletic v Espanyol had 11 corners, so Over 7.5 corners won. Mega XCFA1A went 7 of 13 and lost. The earlier Mega UPVZ10 went 2 of 12.",
    audit: {
      of: "Thursday 19 November 2026",
      note: "Settled on 90-minute results. Each result has at least one reliable source; one is linked below.",
      picks: [
        { fx: "Al Wasl v Hatta", mk: "Home Win", odds: "1.13", score: "2–1", status: "won", src: "https://sharjah24.ae/en/Articles/2026/11/19/Al-Wasl-defeats-Hatta-2-1-in-ADNOC-Pro-League", srcName: "Sharjah24" },
        { fx: "Al Ain v Al Dhafra", mk: "Home Win", odds: "1.14", score: "2–1", status: "won", src: "https://sharjah24.ae/en/Articles/2026/11/19/AL027", srcName: "Sharjah24" },
        { fx: "MC Alger v Olympique Akbou", mk: "Home Win", odds: "1.40", score: "0–1", status: "lost", src: "https://algeriebrevesnews.dz/ligue-1-mobilis-chute-du-mca-et-du-crb/", srcName: "Algérie Brèves" },
        { fx: "Paris FC v HB Køge (W)", mk: "Over 1.5 Goals", odds: "1.15", score: "2–1", status: "won", src: "https://www.espn.com/soccer/match/_/gameId/401916977", srcName: "ESPN" },
        { fx: "Austria Wien v Bayern Munich (W)", mk: "Over 2.5 Goals", odds: "1.25", score: "0–4", status: "won", src: "https://fcbayern.com/frauen/en/news/match-reports/2026/11/match-report-austria-vienna-vs.-fc-bayern-women", srcName: "FC Bayern" },
        { fx: "Peñarol v Cerro Largo", mk: "Under 3.5 Goals", odds: "1.27", score: "3–0", status: "won", src: "https://www.elobservador.com.uy/futbol/penarol-vs-cerro-largo-la-fecha-15-del-torneo-clausura-la-liga-auf-uruguaya-2026-n6064465", srcName: "El Observador" },
        { fx: "Vasco da Gama v Internacional", mk: "Under 3.5 Goals", odds: "1.41", score: "2–1", status: "won", src: "https://www.vavel.com/br/futebol/2026/11/19/1279712-vasco-x-sc-internacional-ao-vivo-brasileirao-serie-a.html", srcName: "VAVEL" }
      ],
      tickets: [
        { name: "Safest 4-leg", total: "1.85", landed: true },
        { name: "Home & Under treble", total: "2.51", landed: false },
        { name: "Full accumulator LFM4A6", total: "4.64", landed: false }
      ],
      lessons: [
        "MC Alger lost 0–1 at home, their first home defeat of the season. A perfect home record isn't a guarantee, especially straight after a team's first loss of the season.",
        "Both Under 3.5 picks won (Peñarol 3–0, Vasco 2–1). The new market keeps paying in cagey, high-stakes games.",
        "Elite women's sides against weaker teams went 2 for 2 again (Paris FC 2–1, Bayern 4–0)."
      ]
    }
  },
  {
    date: "2026-11-19",
    label: "Thursday 19 November 2026",
    built: "Built 01:20 UK",
    comps: [
      { name: "UAE Pro League", windows: [ { ko: "12:45 UK", picks: [
        { n: 1, fx: "Al Wasl v Hatta", mk: "Home Win", odds: "1.13" } ] }, { ko: "15:25 UK", picks: [
        { n: 2, fx: "Al Ain v Al Dhafra", mk: "Home Win", odds: "1.14" } ] } ] },
      { name: "Algeria Ligue 1", windows: [ { ko: "16:45 UK", picks: [
        { n: 3, fx: "MC Alger v Olympique Akbou", mk: "Home Win", odds: "1.40" } ] } ] },
      { name: "Women's Champions League", windows: [ { ko: "17:45 UK", picks: [
        { n: 4, fx: "Paris FC v HB Køge", mk: "Over 1.5 Goals", odds: "1.15" },
        { n: 5, fx: "Austria Wien v Bayern Munich", mk: "Over 2.5 Goals", odds: "1.25" } ] } ] },
      { name: "Uruguay Primera", windows: [ { ko: "19:30 UK", picks: [
        { n: 6, fx: "Peñarol v Cerro Largo", mk: "Under 3.5 Goals", odds: "1.27" } ] } ] },
      { name: "Brazil Série A", windows: [ { ko: "22:30 UK", picks: [
        { n: 7, fx: "Vasco da Gama v Internacional", mk: "Under 3.5 Goals", odds: "1.41" } ] } ] }
    ],
    passes: "No Mega today: after the 7 Slate fixtures, what's left (lower African leagues, Jordan and Egypt cup ties, Australian second tier) isn't 12 legs at 1.45+ worth backing, and the one-fixture-per-slip rule stops reuse. Passed: Peñarol and Vasco home wins (Peñarol haven't won in 46 days; Vasco v Internacional is a nervy relegation-zone game), so both are Under 3.5 instead. La Guaira v Anzoátegui (only the 1X2 market is offered), Persib v Shan United (1.07, no value), Al Mokawloon (playing away from their usual ground), Real Cartagena (00:45 UK, after this slate's audit window), UPPC v Kataka (venue unclear). Al Wasl Home & Over 1.5 adds only +0.03 over the straight win, so the value rule takes the Home Win. No Arsenal fixtures were considered.",
    tickets: [
      { name: "Safest 4-leg", legs: [
        ["Al Wasl v Hatta: Home Win", "1.13"],
        ["Al Ain v Al Dhafra: Home Win", "1.14"],
        ["Paris FC v HB Køge: Over 1.5", "1.15"],
        ["Austria Wien v Bayern: Over 2.5", "1.25"]
      ], total: "1.85" },
      { name: "Home & Under treble", legs: [
        ["MC Alger v Akbou: Home Win", "1.40"],
        ["Peñarol v Cerro Largo: Under 3.5", "1.27"],
        ["Vasco v Internacional: Under 3.5", "1.41"]
      ], total: "2.51" }
    ],
    acca: { code: "LFM4A6", legs: 7, odds: "4.64", booked: "01:18 UK" },
    results: {
      1: { status: "won", score: "2–1", src: "https://sharjah24.ae/en/Articles/2026/11/19/Al-Wasl-defeats-Hatta-2-1-in-ADNOC-Pro-League", srcName: "Sharjah24" },
      2: { status: "won", score: "2–1", src: "https://sharjah24.ae/en/Articles/2026/11/19/AL027", srcName: "Sharjah24" },
      3: { status: "lost", score: "0–1", src: "https://algeriebrevesnews.dz/ligue-1-mobilis-chute-du-mca-et-du-crb/", srcName: "Algérie Brèves" },
      4: { status: "won", score: "2–1", src: "https://www.espn.com/soccer/match/_/gameId/401916977", srcName: "ESPN" },
      5: { status: "won", score: "0–4", src: "https://fcbayern.com/frauen/en/news/match-reports/2026/11/match-report-austria-vienna-vs.-fc-bayern-women", srcName: "FC Bayern" },
      6: { status: "won", score: "3–0", src: "https://www.elobservador.com.uy/futbol/penarol-vs-cerro-largo-la-fecha-15-del-torneo-clausura-la-liga-auf-uruguaya-2026-n6064465", srcName: "El Observador" },
      7: { status: "won", score: "2–1", src: "https://www.vavel.com/br/futebol/2026/11/19/1279712-vasco-x-sc-internacional-ao-vivo-brasileirao-serie-a.html", srcName: "VAVEL" }
    },
    settled: "Settled 01:20 UK (20 Nov): 7 picks, 6 won, 1 lost (86%). Accumulator LFM4A6 lost on MC Alger, who were beaten 0–1 at home by Akbou (their first home defeat of the season). The Safest 4-leg landed. The Home & Under treble lost on the same MC Alger leg. Both Under 3.5 picks won (Peñarol 3–0, Vasco 2–1).",
    audit: {
      of: "Wednesday 18 November 2026",
      note: "Settled on 90-minute results, as the bookmaker does (extra time and penalties don't count). Tabor Sežana v Fužinar was called off because of fog, so that leg is void and the slip pays on the other six. Coton Sport's 1–0 is confirmed by one source only.",
      picks: [
        { fx: "Coton Sport v Stade Renard", mk: "Home Win", odds: "1.25", score: "1–0", status: "won", src: "https://www.365scores.com/pl/football/match/premier-division-5621/coton-sport-garoua-stade-renard-10480-46997-5621", srcName: "365Scores" },
        { fx: "Tabor Sežana v Fužinar", mk: "Home Win", odds: "1.25", score: "postponed (fog)", status: "void", src: "https://planetnogomet.si/novice/tabor-fuzinar-pokal-odpoved-megla/", srcName: "PlanetNogomet" },
        { fx: "NK Rače v Radomlje", mk: "Over 1.5 Goals", odds: "1.22", score: "1–2", status: "won", src: "https://siol.net/sportal/nogomet/pokal-pivovarne-union-osmina-finala-706586", srcName: "Siol" },
        { fx: "Alcoyano v Mallorca", mk: "Under 3.5 Goals", odds: "1.34", score: "1–1 (90'), 1–3 AET", status: "won", src: "https://www.espn.com/soccer/match/_/gameId/401928505/mallorca-alcoyano", srcName: "ESPN" },
        { fx: "Carabobo v Zamora", mk: "Double Chance 1X", odds: "1.15", score: "0–0 (90'), won on pens", status: "won", src: "https://www.elnacional.com/2026/11/carabobo-supera-a-zamora-en-los-penales-y-avanza-a-las-semifinales-de-a-copa-venezuela/", srcName: "El Nacional" },
        { fx: "Clube do Remo v Chapecoense", mk: "Home Win", odds: "1.46", score: "2–0", status: "won", src: "https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-a/remo-bate-chapecoense-e-mantem-chances-evitar-queda-no-brasileiro/", srcName: "Gazeta Esportiva" },
        { fx: "Flamengo v Atlético Paranaense", mk: "Home Win", odds: "1.20", score: "2–1", status: "won", src: "https://www.metropoles.com/esportes/flamengo-vence-athletico-pr-no-maracana-e-segue-na-lideranca-do-brasileirao", srcName: "Metrópoles" }
      ],
      tickets: [
        { name: "Safest 4-leg (Tabor leg void)", total: "2.16", landed: true },
        { name: "Value treble", total: "2.39", landed: true },
        { name: "Full accumulator K2H1J1 (pays ~4.12 with the void leg)", total: "5.15", landed: true },
        { name: "Reference: earlier code XMLSXF (lost on Carabobo Home Win, 0–0)", total: "6.71", landed: false }
      ],
      lessons: [
        "The rerun earned its keep: switching Carabobo from Home Win to 1X saved the slip, because the single-leg cup tie was 0–0 after 90 minutes before penalties.",
        "In single-leg cup ties, 1X (and Under lines) settle on the 90 minutes, so they protect against the draw-then-penalties result that kills a Home Win.",
        "Weather can void a leg (fog in Slovenia). A void leg doesn't sink the slip; the bookmaker just removes it and recalculates the odds."
      ]
    }
  },
  {
    date: "2026-11-18",
    label: "Wednesday 18 November 2026",
    built: "Rebuilt 12:05 UK",
    comps: [
      { name: "Cameroon Elite One", windows: [ { ko: "14:00 UK", picks: [
        { n: 1, fx: "Coton Sport v Stade Renard", mk: "Home Win", odds: "1.25" } ] } ] },
      { name: "Slovenia Cup", windows: [ { ko: "16:00 UK", picks: [
        { n: 2, fx: "Tabor Sežana v Fužinar", mk: "Home Win", odds: "1.25" },
        { n: 3, fx: "NK Rače v Radomlje", mk: "Over 1.5 Goals", odds: "1.22" } ] } ] },
      { name: "Copa del Rey", windows: [ { ko: "19:00 UK", picks: [
        { n: 4, fx: "Alcoyano v Mallorca", mk: "Under 3.5 Goals", odds: "1.34" } ] } ] },
      { name: "Copa Venezuela", windows: [ { ko: "20:30 UK", picks: [
        { n: 5, fx: "Carabobo v Zamora", mk: "Double Chance 1X", odds: "1.15" } ] } ] },
      { name: "Brazil Série A", windows: [ { ko: "23:00 UK", picks: [
        { n: 6, fx: "Clube do Remo v Chapecoense", mk: "Home Win", odds: "1.46" } ] }, { ko: "23:30 UK", picks: [
        { n: 7, fx: "Flamengo v Atlético Paranaense", mk: "Home Win", odds: "1.20" } ] } ] }
    ],
    passes: "No Mega today: after removing the 7 Slate fixtures, the rest of this thin midweek card (Albanian/Jordanian/Kosovan cups, lower African leagues) isn't 12+ legs I can stand behind, so the one-fixture-per-slip rule leaves no clean Mega. Passed for the Slate: Badajoz v Tenerife and Utebo v Sabadell (both away sides rotate in the cup), Deportivo Táchira (resting for the Clausura final), Salamanca UDS (lost 0–5 midweek), Vipers v BUL (top-two clash, likely tight), Ranchers Bees (disputed venue, patchy form). Mallorca, Tenerife and Sabadell all rotate heavily in round one, so those ties are played through goals lines, not away wins (which the rules ban anyway). Rebuild changes: Alcoyano v Mallorca moved to Under 3.5, because rotated favourites away at lower-tier cup sides keep winning narrowly (Tourcoing 0–1 Reims, Trival 0–1 Leganés); Carabobo moved to 1X because they face Táchira in the Clausura final soon and may rotate in a single-leg tie. No Arsenal fixtures were considered.",
    tickets: [
      { name: "Safest 4-leg", legs: [
        ["Carabobo v Zamora: 1X", "1.15"],
        ["Flamengo v Atlético-PR: Home Win", "1.20"],
        ["Coton Sport v Stade Renard: Home Win", "1.25"],
        ["Tabor Sežana v Fužinar: Home Win", "1.25"]
      ], total: "2.16" },
      { name: "Value treble", legs: [
        ["Remo v Chapecoense: Home Win", "1.46"],
        ["Alcoyano v Mallorca: Under 3.5", "1.34"],
        ["NK Rače v Radomlje: Over 1.5", "1.22"]
      ], total: "2.39" }
    ],
    acca: { code: "K2H1J1", legs: 7, odds: "5.15", booked: "12:03 UK", note: "Rebuilt at 12:05 UK on an upgraded model. The earlier code XMLSXF is still shown below for reference. Changes: Alcoyano v Mallorca changed from Over 1.5 to Under 3.5, and Carabobo v Zamora from Home Win to 1X. Use K2H1J1." },
    earlier: {
      code: "XMLSXF", odds: "6.71", booked: "11:42 UK",
      results: [
        { status: "won", score: "1–0", src: "https://www.365scores.com/pl/football/match/premier-division-5621/coton-sport-garoua-stade-renard-10480-46997-5621", srcName: "365Scores" },
        { status: "void", score: "postponed (fog)", src: "https://planetnogomet.si/novice/tabor-fuzinar-pokal-odpoved-megla/", srcName: "PlanetNogomet" },
        { status: "won", score: "1–2", src: "https://siol.net/sportal/nogomet/pokal-pivovarne-union-osmina-finala-706586", srcName: "Siol" },
        { status: "won", score: "1–1 (90'), 1–3 AET", src: "https://www.espn.com/soccer/match/_/gameId/401928505/mallorca-alcoyano", srcName: "ESPN" },
        { status: "lost", score: "0–0 (90'), won on pens", src: "https://www.elnacional.com/2026/11/carabobo-supera-a-zamora-en-los-penales-y-avanza-a-las-semifinales-de-a-copa-venezuela/", srcName: "El Nacional" },
        { status: "won", score: "2–0", src: "https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-a/remo-bate-chapecoense-e-mantem-chances-evitar-queda-no-brasileiro/", srcName: "Gazeta Esportiva" },
        { status: "won", score: "2–1", src: "https://www.metropoles.com/esportes/flamengo-vence-athletico-pr-no-maracana-e-segue-na-lideranca-do-brasileirao", srcName: "Metrópoles" }
      ],
      note: "The first build, before the 12:05 rebuild. Kept so you can compare the two.",
      picks: [
        { fx: "Coton Sport v Stade Renard", ko: "14:00", mk: "Home Win", odds: "1.25" },
        { fx: "Tabor Sežana v Fužinar", ko: "16:00", mk: "Home Win", odds: "1.25" },
        { fx: "NK Rače v Radomlje", ko: "16:00", mk: "Over 1.5 Goals", odds: "1.22" },
        { fx: "Alcoyano v Mallorca", ko: "19:00", mk: "Over 1.5 Goals", odds: "1.32" },
        { fx: "Carabobo v Zamora", ko: "20:30", mk: "Home Win", odds: "1.51" },
        { fx: "Clube do Remo v Chapecoense", ko: "23:00", mk: "Home Win", odds: "1.46" },
        { fx: "Flamengo v Atlético Paranaense", ko: "23:30", mk: "Home Win", odds: "1.21" }
      ]
    },
    results: {
      1: { status: "won", score: "1–0", src: "https://www.365scores.com/pl/football/match/premier-division-5621/coton-sport-garoua-stade-renard-10480-46997-5621", srcName: "365Scores" },
      2: { status: "void", score: "postponed (fog)", src: "https://planetnogomet.si/novice/tabor-fuzinar-pokal-odpoved-megla/", srcName: "PlanetNogomet" },
      3: { status: "won", score: "1–2", src: "https://siol.net/sportal/nogomet/pokal-pivovarne-union-osmina-finala-706586", srcName: "Siol" },
      4: { status: "won", score: "1–1 (90'), 1–3 AET", src: "https://www.espn.com/soccer/match/_/gameId/401928505/mallorca-alcoyano", srcName: "ESPN" },
      5: { status: "won", score: "0–0 (90'), won on pens", src: "https://www.elnacional.com/2026/11/carabobo-supera-a-zamora-en-los-penales-y-avanza-a-las-semifinales-de-a-copa-venezuela/", srcName: "El Nacional" },
      6: { status: "won", score: "2–0", src: "https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-a/remo-bate-chapecoense-e-mantem-chances-evitar-queda-no-brasileiro/", srcName: "Gazeta Esportiva" },
      7: { status: "won", score: "2–1", src: "https://www.metropoles.com/esportes/flamengo-vence-athletico-pr-no-maracana-e-segue-na-lideranca-do-brasileirao", srcName: "Metrópoles" }
    },
    settled: "Settled 02:45 UK: K2H1J1 LANDED. 6 picks won, 0 lost, 1 void (Tabor Sežana v Fužinar was postponed because of fog, so that leg is voided and the accumulator pays at about 4.12 instead of 5.15). Both tickets landed too. The rerun did better: the morning code XMLSXF would have LOST, because Carabobo v Zamora finished 0–0 after 90 minutes (Carabobo went through on penalties), which beats 1X but not Home Win. The Alcoyano swap made no difference: it was 1–1 after 90 minutes, so both Over 1.5 and Under 3.5 won.",
    audit: {
      of: "Tuesday 17 November 2026",
      note: "Each result has at least one reliable source; one is linked below.",
      picks: [
        { fx: "Niger v Morocco (in Rabat)", mk: "Over 1.5 Goals", odds: "1.14", score: "0–1", status: "lost", src: "https://www.espn.com/soccer/match/_/gameId/401927180/morocco-niger", srcName: "ESPN" },
        { fx: "Wales v Portugal", mk: "Over 1.5 Goals", odds: "1.17", score: "2–3", status: "won", src: "https://www.espn.com/soccer/report/_/gameId/401861189", srcName: "ESPN" },
        { fx: "Argentina v Costa Rica", mk: "Home Win", odds: "1.09", score: "7–0", status: "won", src: "https://www.espn.com/soccer/match/_/gameId/401930895/costa-rica-argentina", srcName: "ESPN" },
        { fx: "Uruguay v Dominican Republic", mk: "Home Win", odds: "1.10", score: "5–0", status: "won", src: "https://www.sofascore.com/news/uruguay-5-0-dominican-republic-late-surge-de-la-cruz-shines", srcName: "Sofascore" },
        { fx: "Ecuador v Bolivia", mk: "Home Win", odds: "1.20", score: "2–0", status: "won", src: "https://www.espn.com/soccer/match/_/gameId/401930899/bolivia-ecuador", srcName: "ESPN" }
      ],
      tickets: [
        { name: "Safest 4-leg", total: "1.60", landed: false },
        { name: "South America treble", total: "1.44", landed: true },
        { name: "Full accumulator ZQKSFA", total: "1.92", landed: false },
        { name: "Experimental Mega TNCEFY (9 of 12 legs)", total: "656.96", landed: false }
      ],
      lessons: [
        "Niger v Morocco Over 1.5 lost 0–1: Morocco, already through, won it with one early goal and shut up shop. Over 1.5 on a one-sided qualifier is fragile when the favourite only needs a single goal.",
        "The three African-mismatch Over 2.5 legs failed again (Malawi 0–0, Tanzania 0–0). But the new Under 2.5 pick won (Sierra Leone 1–1). For minnow-heavy games, Under 2.5 and second-half goals beat Over 2.5.",
        "The South America treble (Argentina 7–0, Uruguay 5–0, Ecuador 2–0) landed cleanly — strong home nations in friendlies remain the most reliable market."
      ]
    }
  },
  {
    date: "2026-11-17",
    label: "Tuesday 17 November 2026",
    built: "Built 01:35 UK",
    comps: [
      { name: "AFCON Qualifiers", windows: [ { ko: "20:00 UK", picks: [
        { n: 1, fx: "Niger v Morocco (in Rabat)", mk: "Over 1.5 Goals", odds: "1.14" } ] } ] },
      { name: "UEFA Nations League", windows: [ { ko: "19:45 UK", picks: [
        { n: 2, fx: "Wales v Portugal", mk: "Over 1.5 Goals", odds: "1.17" } ] } ] },
      { name: "International Friendlies", windows: [ { ko: "23:00 UK", picks: [
        { n: 3, fx: "Argentina v Costa Rica", mk: "Home Win", odds: "1.09" } ] }, { ko: "23:30 UK", picks: [
        { n: 4, fx: "Uruguay v Dominican Republic", mk: "Home Win", odds: "1.10" },
        { n: 5, fx: "Ecuador v Bolivia", mk: "Home Win", odds: "1.20" } ] } ] }
    ],
    passes: "A short, safe slate on the last day of the break. Passed for the Slate: Malawi v Egypt and Tanzania v Nigeria (away favourites, and minnows sit deep), Guinea-Bissau v Madagascar (key striker out, first game 1–1), Luton v Peterborough (partly a dead rubber), Japan v Paraguay (neutral venue), UAE v Syria (Dalić trying players). Several of these are in the Mega instead, which shares no fixtures with the Slate. No Arsenal fixtures were considered.",
    tickets: [
      { name: "Safest 4-leg", legs: [
        ["Argentina v Costa Rica: Home Win", "1.09"],
        ["Uruguay v Dominican Republic: Home Win", "1.10"],
        ["Niger v Morocco: Over 1.5", "1.14"],
        ["Wales v Portugal: Over 1.5", "1.17"]
      ], total: "1.60" },
      { name: "South America treble", legs: [
        ["Argentina v Costa Rica: Home Win", "1.09"],
        ["Uruguay v Dominican Republic: Home Win", "1.10"],
        ["Ecuador v Bolivia: Home Win", "1.20"]
      ], total: "1.44" }
    ],
    acca: { code: "ZQKSFA", legs: 5, odds: "1.92", booked: "01:30 UK" },
    mega: {
      code: "TNCEFY", odds: "656.96", booked: "01:33 UK", landed: false,
      results: [
        { status: "won", score: "2–1", src: "https://www.espn.com/soccer/match/_/gameId/401927181", srcName: "ESPN" },
        { status: "lost", score: "0–0", src: "https://www.espn.com/soccer/match/_/gameId/401927179/egypt-malawi", srcName: "ESPN" },
        { status: "lost", score: "0–0", src: "https://africasoccer.com/afcon-2027-qualifiers-tanzania-hold-nigeria-to-goalless-draw-in-group-l/", srcName: "AfricaSoccer" },
        { status: "lost", score: "1–2", src: "https://www.sofascore.com/news/paraguay-beat-japan-2-1-in-singapore-on-set-pieces", srcName: "Sofascore" },
        { status: "won", score: "4–2", src: "https://www.espn.com/soccer/match/_/gameId/401932718/syria-united-arab-emirates", srcName: "ESPN" },
        { status: "won", score: "2–0", src: "https://www.espn.com/soccer/match/_/gameId/401930978/venezuela-russia", srcName: "ESPN" },
        { status: "won", score: "2–0", src: "https://africasoccer.com/afcon-2027-qualifiers-guinea-bissau-secure-2-0-victory-over-madagascar-in-group-l/", srcName: "AfricaSoccer" },
        { status: "won", score: "1–1", src: "https://www.espn.com/soccer/match/_/gameId/401927174/congo-dr-sierra-leone", srcName: "ESPN" },
        { status: "won", score: "3–0", src: "https://www.skysports.com/football/luton-town-vs-peterborough-united/7431796559806415232", srcName: "Sky Sports" },
        { status: "won", score: "3–2", src: "https://www.espn.com/soccer/match/_/gameId/401929767", srcName: "ESPN" },
        { status: "won", score: "5–0", src: "https://www.espn.com/soccer/match/_/gameId/401929769", srcName: "ESPN" },
        { status: "won", score: "2–0", src: "https://www.espn.com/soccer/match/_/gameId/401929768", srcName: "ESPN" }
      ],
      legs: [
        { fx: "Lesotho v Gabon", comp: "AFCON Qualifiers", ko: "13:00", mk: "Over 2.5 Goals", odds: "2.25" },
        { fx: "Malawi v Egypt", comp: "AFCON Qualifiers", ko: "13:00", mk: "Over 2.5 Goals", odds: "1.80" },
        { fx: "Tanzania v Nigeria", comp: "AFCON Qualifiers", ko: "13:00", mk: "Over 2.5 Goals", odds: "2.15" },
        { fx: "Japan v Paraguay (in Singapore)", comp: "International Friendly", ko: "13:10", mk: "Home Win", odds: "1.65" },
        { fx: "UAE v Syria", comp: "International Friendly", ko: "14:10", mk: "Home Win & Over 1.5 Goals", odds: "1.61" },
        { fx: "Russia v Venezuela", comp: "International Friendly", ko: "16:00", mk: "Home Win", odds: "1.56" },
        { fx: "Guinea-Bissau v Madagascar", comp: "AFCON Qualifiers", ko: "16:00", mk: "Home Win & Over 1.5 Goals", odds: "1.75" },
        { fx: "Sierra Leone v DR Congo", comp: "AFCON Qualifiers", ko: "16:00", mk: "Under 2.5 Goals", odds: "1.67" },
        { fx: "Luton v Peterborough", comp: "EFL Trophy", ko: "19:00", mk: "Home Win", odds: "1.52" },
        { fx: "St Kitts & Nevis v Bonaire (in Havana)", comp: "CONCACAF Nations League", ko: "19:00", mk: "Home Win", odds: "1.47" },
        { fx: "Dominica v Cayman Islands (in Guyana)", comp: "CONCACAF Nations League", ko: "19:00", mk: "Home Win & Over 1.5 Goals", odds: "1.64" },
        { fx: "St Lucia v Barbados", comp: "CONCACAF Nations League", ko: "19:00", mk: "Home Win", odds: "1.70" }
      ]
    },
    results: {
      1: { status: "lost", score: "0–1", src: "https://www.espn.com/soccer/match/_/gameId/401927180/morocco-niger", srcName: "ESPN" },
      2: { status: "won", score: "2–3", src: "https://www.espn.com/soccer/report/_/gameId/401861189", srcName: "ESPN" },
      3: { status: "won", score: "7–0", src: "https://www.espn.com/soccer/match/_/gameId/401930895/costa-rica-argentina", srcName: "ESPN" },
      4: { status: "won", score: "5–0", src: "https://www.sofascore.com/news/uruguay-5-0-dominican-republic-late-surge-de-la-cruz-shines", srcName: "Sofascore" },
      5: { status: "won", score: "2–0", src: "https://www.espn.com/soccer/match/_/gameId/401930899/bolivia-ecuador", srcName: "ESPN" }
    },
    settled: "Settled 12:00 UK (18 Nov): 5 picks, 4 won, 1 lost (80%). Accumulator ZQKSFA and the Safest 4-leg lost on Niger v Morocco Over 1.5 (0–1, Morocco won it with a single early goal). The South America treble (Argentina 7–0, Uruguay 5–0, Ecuador 2–0) landed. Experimental Mega TNCEFY lost: 9 of 12 legs won — the three Over 2.5 legs on African mismatches failed (Malawi 0–0, Tanzania 0–0) plus Japan lost 1–2; the Under 2.5 on Sierra Leone v DR Congo (1–1) won.",
    audit: {
      of: "Monday 16 November 2026",
      note: "Each result has at least two sources. One report is linked below.",
      picks: [
        { fx: "Sudan v Senegal (in Juba)", mk: "Over 1.5 Goals", odds: "1.34", score: "2–4", status: "won", src: "https://www.beinsports.com/en-us/soccer/africa-cup-of-nations-qualification/articles-video/senegal-vs-sudan-highlights-2027-afcon-qualifiers-2026-11-16", srcName: "beIN Sports" },
        { fx: "Somalia v Ghana (in Ghana)", mk: "Over 1.5 Goals", odds: "1.16", score: "0–1", status: "lost", src: "https://www.vavel.com/en-us/soccer/2026/11/16/1279420-somalia-vs-ghana-live-score-africa-cup-of-nations-qualifiers.html", srcName: "VAVEL" },
        { fx: "Lithuania v Liechtenstein", mk: "Home Win", odds: "1.14", score: "2–1", status: "won", src: "https://www.365scores.com/en-us/football/match/uefa-nations-league-7016/liechtenstein-lithuania-2312-5046-7016", srcName: "365Scores" },
        { fx: "Iceland v Luxembourg", mk: "Home Win", odds: "1.28", score: "3–0", status: "won", src: "https://www.vavel.com/en-us/soccer/2026/11/16/1279422-iceland-vs-luxembourg-live-score-uefa-nations-league.html", srcName: "VAVEL" },
        { fx: "Guadeloupe v Bermuda", mk: "Home Win", odds: "1.27", score: "4–1", status: "won", src: "https://www.fotmob.com/matches/guadeloupe-vs-bermuda/14r9ll", srcName: "FotMob" },
        { fx: "Cuba v Grenada", mk: "Home Win", odds: "1.31", score: "9–0", status: "won", src: "https://www.vavel.com/en-us/soccer/2026/11/16/1279391-cuba-vs-grenada-live-score-concacaf-nations-league.html", srcName: "VAVEL" }
      ],
      tickets: [
        { name: "Safest 4-leg", total: "2.15", landed: false },
        { name: "Banker double", total: "1.32", landed: false },
        { name: "Full accumulator HPZ88Z", total: "3.77", landed: false },
        { name: "Experimental Mega QWQZ7Q (7 won, 4 lost, 1 unverified)", total: "533.83", landed: false }
      ],
      lessons: [
        "Somalia v Ghana Over 1.5 lost 0–1. Ghana beat Somalia only 2–0 and 1–0 across the two games. Minnows that sit deep make goals markets on mismatches weaker than they look.",
        "One shaky leg sat in all three slips (the accumulator, the Safest 4-leg and the banker double). Keep at least one ticket free of each goals-market leg.",
        "New rule from your feedback: a fixture appears only once per slip, and the Mega never shares a fixture with the Slate."
      ]
    }
  },
  {
    date: "2026-11-16",
    label: "Monday 16 November 2026",
    built: "Built 01:25 UK",
    comps: [
      { name: "AFCON Qualifiers", windows: [ { ko: "13:00 UK", picks: [
        { n: 1, fx: "Sudan v Senegal (in Juba)", mk: "Over 1.5 Goals", odds: "1.34" } ] }, { ko: "15:00 UK", picks: [
        { n: 2, fx: "Somalia v Ghana (in Ghana)", mk: "Over 1.5 Goals", odds: "1.16" } ] } ] },
      { name: "UEFA Nations League", windows: [ { ko: "17:00 UK", picks: [
        { n: 3, fx: "Lithuania v Liechtenstein", mk: "Home Win", odds: "1.14" },
        { n: 4, fx: "Iceland v Luxembourg", mk: "Home Win", odds: "1.28" } ] } ] },
      { name: "CONCACAF Nations League", windows: [ { ko: "19:00 UK", picks: [
        { n: 5, fx: "Guadeloupe v Bermuda", mk: "Home Win", odds: "1.27" } ] }, { ko: "20:00 UK", picks: [
        { n: 6, fx: "Cuba v Grenada", mk: "Home Win", odds: "1.31" } ] } ] }
    ],
    passes: "Experimental Mega added at 06:50 UK on your request, from a thin international-break card. Passed for the Slate: Greece v Serbia (Greece just lost 0–7), Trinidad v Antigua and Martinique v Aruba (00:00 UK kickoffs, T&T have lost 4 of their last 5), Greek Super League 2 and Peru games (thin data, one venue change), plus lower-league fixtures. No Arsenal fixtures were considered.",
    tickets: [
      { name: "Safest 4-leg", legs: [
        ["Lithuania v Liechtenstein: Home Win", "1.14"],
        ["Somalia v Ghana: Over 1.5", "1.16"],
        ["Guadeloupe v Bermuda: Home Win", "1.27"],
        ["Iceland v Luxembourg: Home Win", "1.28"]
      ], total: "2.15" },
      { name: "Banker double", legs: [
        ["Lithuania v Liechtenstein: Home Win", "1.14"],
        ["Somalia v Ghana: Over 1.5", "1.16"]
      ], total: "1.32" }
    ],
    acca: { code: "HPZ88Z", legs: 6, odds: "3.77", booked: "01:20 UK" },
    mega: {
      code: "QWQZ7Q", odds: "533.83", booked: "06:50 UK (experimental, on your request)", landed: false,
      results: [
        { status: "lost", score: "2–0", src: "https://www.sport-fm.gr/article/podosfairo/SuperbetLeague2/paniwnios-olumpiakos-b-2-0/5161433", srcName: "Sport FM" },
        { status: "won", score: "2–1", src: "https://www.sport-fm.gr/article/5161438", srcName: "Sport FM" },
        { status: "won", score: "2–4", src: "https://www.beinsports.com/en-us/soccer/africa-cup-of-nations-qualification/articles-video/senegal-vs-sudan-highlights-2027-afcon-qualifiers-2026-11-16", srcName: "beIN Sports" },
        { status: "lost", score: "0–1", src: "https://www.vavel.com/en-us/soccer/2026/11/16/1279420-somalia-vs-ghana-live-score-africa-cup-of-nations-qualifiers.html", srcName: "VAVEL" },
        { status: "won", score: "1–3", src: "https://www.vavel.com/en-us/soccer/2026/11/16/1279453-eritrea-vs-guinea-live-latest-score-goals-and-african-cup-of-nations-qualifiers-updates.html", srcName: "VAVEL" },
        { status: "won", score: "3–0", src: "https://www.vavel.com/en-us/soccer/2026/11/16/1279422-iceland-vs-luxembourg-live-score-uefa-nations-league.html", srcName: "VAVEL" },
        { status: "won", score: "1–0", src: "https://www.espn.com/soccer/match/_/gameId/401861188", srcName: "ESPN" },
        { status: "lost", score: "0–3", src: "https://www.vavel.com/en-us/soccer/2026/11/16/1279446-north-macedonia-vs-slovenia-live-score-uefa-nations-league.html", srcName: "VAVEL" },
        { status: "won", score: "9–0", src: "https://www.vavel.com/en-us/soccer/2026/11/16/1279391-cuba-vs-grenada-live-score-concacaf-nations-league.html", srcName: "VAVEL" },
        { status: "lost", score: "2–2", src: "https://libero.pe/futbol-peruano/liga-1/2026/11/15/cusco-fc-vs-adt-en-vivo-gratis-partido-del-torneo-clausura-via-liga-1-max-internet-1414065", srcName: "Líbero" },
        { status: "won", score: "2–1", src: "https://libero.pe/futbol-peruano/liga-1/2026/11/15/cd-moquegua-vs-atletico-grau-en-vivo-gratis-partido-del-torneo-clausura-via-liga-1-max-internet-567750", srcName: "Líbero" },
        { status: "unverified", score: "kicked off 00:00 Tue, not settled", src: "https://www.sofascore.com/football/match/antigua-and-barbuda-trinidad-and-tobago/mdcsfLi", srcName: "Sofascore" }
      ],
      legs: [
        { fx: "Panionios v Olympiacos B", comp: "Greek Super League 2", ko: "12:45", mk: "Over 2.5 Goals", odds: "1.71" },
        { fx: "Niki Volou v PAS Pyrgos", comp: "Greek Super League 2", ko: "13:00", mk: "Over 2.5 Goals", odds: "1.77" },
        { fx: "Sudan v Senegal (in Juba)", comp: "AFCON Qualifiers", ko: "13:00", mk: "Over 2.5 Goals", odds: "1.97" },
        { fx: "Somalia v Ghana (in Ghana)", comp: "AFCON Qualifiers", ko: "15:00", mk: "Over 2.5 Goals", odds: "1.52" },
        { fx: "Eritrea v Guinea (in Cairo)", comp: "AFCON Qualifiers", ko: "16:00", mk: "Over 2.5 Goals", odds: "1.95" },
        { fx: "Iceland v Luxembourg", comp: "UEFA Nations League", ko: "17:00", mk: "Over 2.5 Goals", odds: "1.66" },
        { fx: "Greece v Serbia", comp: "UEFA Nations League", ko: "19:45", mk: "Home Win", odds: "1.47" },
        { fx: "North Macedonia v Slovenia", comp: "UEFA Nations League", ko: "19:45", mk: "Under 2.5 Goals", odds: "1.70" },
        { fx: "Cuba v Grenada", comp: "CONCACAF Nations League", ko: "20:00", mk: "Over 2.5 Goals", odds: "1.47" },
        { fx: "Cusco FC v ADT Tarma", comp: "Peru Liga 1", ko: "20:15", mk: "Home Win", odds: "1.62" },
        { fx: "CD Moquegua v Atlético Grau", comp: "Peru Liga 1", ko: "20:15", mk: "Home Win", odds: "1.68" },
        { fx: "Trinidad & Tobago v Antigua & Barbuda", comp: "CONCACAF Nations League", ko: "00:00 (Tue)", mk: "Both Teams to Score: Yes", odds: "1.82" }
      ]
    },
    results: {
      1: { status: "won", score: "2–4", src: "https://www.beinsports.com/en-us/soccer/africa-cup-of-nations-qualification/articles-video/senegal-vs-sudan-highlights-2027-afcon-qualifiers-2026-11-16", srcName: "beIN Sports" },
      2: { status: "lost", score: "0–1", src: "https://www.vavel.com/en-us/soccer/2026/11/16/1279420-somalia-vs-ghana-live-score-africa-cup-of-nations-qualifiers.html", srcName: "VAVEL" },
      3: { status: "won", score: "2–1", src: "https://www.365scores.com/en-us/football/match/uefa-nations-league-7016/liechtenstein-lithuania-2312-5046-7016", srcName: "365Scores" },
      4: { status: "won", score: "3–0", src: "https://www.vavel.com/en-us/soccer/2026/11/16/1279422-iceland-vs-luxembourg-live-score-uefa-nations-league.html", srcName: "VAVEL" },
      5: { status: "won", score: "4–1", src: "https://www.fotmob.com/matches/guadeloupe-vs-bermuda/14r9ll", srcName: "FotMob" },
      6: { status: "won", score: "9–0", src: "https://www.vavel.com/en-us/soccer/2026/11/16/1279391-cuba-vs-grenada-live-score-concacaf-nations-league.html", srcName: "VAVEL" }
    },
    settled: "Settled 23:15 UK: 6 picks, 5 won, 1 lost (83%). Accumulator HPZ88Z, the Safest 4-leg and the banker double all lost on Somalia v Ghana Over 1.5 (0–1, one penalty goal). Experimental Mega QWQZ7Q lost: 7 won, 4 lost, 1 unverified (Trinidad v Antigua kicks off after midnight).",
    audit: {
      of: "Sunday 15 November 2026",
      note: "Each result has at least two sources. One report is linked below.",
      picks: [
        { fx: "New Zealand v India", mk: "Over 1.5 Goals", odds: "1.14", score: "3–0", status: "won", src: "https://www.the-aiff.com/article/india-fall-to-new-zealand-in-christchurch-friendly", srcName: "AIFF" },
        { fx: "Häcken v Piteå (W)", mk: "Home Win", odds: "1.11", score: "2–0", status: "won", src: "https://www.nsd.se/sport/fotboll/artikel/forlust-borta-for-pitea-mot-bk-hacken/r35kvd2j", srcName: "NSD" },
        { fx: "Hammarby v Kristianstad (W)", mk: "Home Win", odds: "1.19", score: "1–0", status: "won", src: "https://www.gp.se/sport/10-seger-for-hammarby-ida-hermannsdottir-matchhjalte.e6b804e3-af98-581b-9dca-ef79c3469039", srcName: "GP" },
        { fx: "Spezia v Vado", mk: "Home Win", odds: "1.23", score: "3–0", status: "won", src: "https://www.primocanale.it/sport/73653-spezia-vado.html", srcName: "Primocanale" },
        { fx: "Montpellier Atlas Paillade v AS Cannes", mk: "Over 1.5 Goals", odds: "1.17", score: "0–2", status: "won", src: "https://footamateur.ouest-france.fr/coupe-de-france-tous-les-resultats-du-septieme-tour/", srcName: "Ouest-France" },
        { fx: "TSC Bačka Topola v Jedinstvo Ub", mk: "Home Win", odds: "1.21", score: "2–0", status: "won", src: "https://sportin.biz/2026/11/15/tsc-ponovo-lider/", srcName: "Sportin" },
        { fx: "Finland v San Marino", mk: "Over 2.5 Goals", odds: "1.24", score: "7–2", status: "won", src: "https://www.vavel.com/en-us/soccer/2026/11/15/1279342-finland-vs-san-marino-live-latest-score-goals-and-uefa-nations-league-updates.html", srcName: "VAVEL" },
        { fx: "France v Türkiye", mk: "Home Win", odds: "1.23", score: "2–1", status: "won", src: "https://www.espn.com/soccer/report/_/gameId/401861177", srcName: "ESPN" }
      ],
      tickets: [
        { name: "Safest 4-leg", total: "1.68", landed: true },
        { name: "Home strength 4-leg", total: "2.27", landed: true },
        { name: "Full accumulator XEUW1N", total: "4.00", landed: true },
        { name: "Mega GULCHP (5 won, 6 lost, 1 unverified)", total: "225.31", landed: false }
      ],
      lessons: [
        "8 from 8 is variance. The process stays the same.",
        "Strong home sides won as expected: Häcken 2–0, Hammarby 1–0, Spezia 3–0, Topola 2–0, France 2–1.",
        "Over 3.5 in the Swedish women's games lost (2–0, 1–0) even with heavy favourites. High goal lines on favourites are the Mega's repeat weakness."
      ]
    }
  },
  {
    date: "2026-11-15",
    label: "Sunday 15 November 2026",
    built: "Built 01:30 UK",
    comps: [
      { name: "International Friendly", windows: [ { ko: "03:00 UK", picks: [
        { n: 1, fx: "New Zealand v India", mk: "Over 1.5 Goals", odds: "1.14" } ] } ] },
      { name: "Damallsvenskan (W)", windows: [ { ko: "13:00 UK", picks: [
        { n: 2, fx: "Häcken v Piteå", mk: "Home Win", odds: "1.11" },
        { n: 3, fx: "Hammarby v Kristianstad", mk: "Home Win", odds: "1.19" } ] } ] },
      { name: "Serie C", windows: [ { ko: "13:30 UK", picks: [
        { n: 4, fx: "Spezia v Vado", mk: "Home Win", odds: "1.23" } ] } ] },
      { name: "Coupe de France", windows: [ { ko: "14:00 UK", picks: [
        { n: 5, fx: "Montpellier Atlas Paillade v AS Cannes", mk: "Over 1.5 Goals", odds: "1.17" } ] } ] },
      { name: "Serbia Prva Liga", windows: [ { ko: "15:00 UK", picks: [
        { n: 6, fx: "TSC Bačka Topola v Jedinstvo Ub", mk: "Home Win", odds: "1.21" } ] } ] },
      { name: "UEFA Nations League", windows: [ { ko: "17:00 UK", picks: [
        { n: 7, fx: "Finland v San Marino", mk: "Over 2.5 Goals", odds: "1.24" } ] }, { ko: "19:45 UK", picks: [
        { n: 8, fx: "France v Türkiye", mk: "Home Win", odds: "1.23" } ] } ] }
    ],
    passes: "Malmö v Vittsjö (nothing at stake), Rumilly v Saint-Étienne (14 Saint-Étienne players unavailable), Sedan v Bourges (Sedan unbeaten; both in the Mega only), Panama v Curaçao and Cerro Porteño v Sol de América (Mega only), plus a long list of lower-league fixtures. New Zealand v India kicks off at 03:00 UK, two hours after this slate posts. No Arsenal fixtures were considered.",
    tickets: [
      { name: "Safest 4-leg", legs: [
        ["Häcken v Piteå (W): Home Win", "1.11"],
        ["New Zealand v India: Over 1.5", "1.14"],
        ["Montpellier Paillade v Cannes: Over 1.5", "1.17"],
        ["Hammarby v Kristianstad (W): Home Win", "1.19"]
      ], total: "1.68" },
      { name: "Home strength 4-leg", legs: [
        ["Bačka Topola v Jedinstvo: Home Win", "1.21"],
        ["Spezia v Vado: Home Win", "1.23"],
        ["France v Türkiye: Home Win", "1.23"],
        ["Finland v San Marino: Over 2.5", "1.24"]
      ], total: "2.27" }
    ],
    acca: { code: "XEUW1N", legs: 8, odds: "4.00", booked: "01:25 UK" },
    mega: {
      code: "GULCHP", odds: "225.31", booked: "01:28 UK", landed: false,
      results: [
        { status: "won", score: "3–0", src: "https://www.the-aiff.com/article/india-fall-to-new-zealand-in-christchurch-friendly", srcName: "AIFF" },
        { status: "lost", score: "2–0", src: "https://www.nsd.se/sport/fotboll/artikel/forlust-borta-for-pitea-mot-bk-hacken/r35kvd2j", srcName: "NSD" },
        { status: "lost", score: "1–0", src: "https://www.gp.se/sport/10-seger-for-hammarby-ida-hermannsdottir-matchhjalte.e6b804e3-af98-581b-9dca-ef79c3469039", srcName: "GP" },
        { status: "lost", score: "2–0", src: "https://footamateur.ouest-france.fr/coupe-de-france-tous-les-resultats-du-septieme-tour/", srcName: "Ouest-France" },
        { status: "won", score: "3–1", src: "https://www.viveresanbenedetto.it/2026/11/15/sambenedettese-pesante-sconfitta-dei-rossoblu-battuti-dal-pescara-3-1/209356/", srcName: "Vivere San Benedetto" },
        { status: "won", score: "1–2", src: "https://www.ici.fr/auvergne-rhone-alpes/loire-42/saint-etienne/direct-coupe-de-france-l-asse-affronte-rumilly-vallieres-suivez-le-7e-tour-sur-ici-saint-etienne-loire-1029643", srcName: "ICI" },
        { status: "lost", score: "0–2", src: "https://footamateur.ouest-france.fr/coupe-de-france-tous-les-resultats-du-septieme-tour/", srcName: "Ouest-France" },
        { status: "won", score: "2–0", src: "https://www.ravennaedintorni.it/sport/2026/11/15/il-ravenna-batte-il-forli-2-0-in-uno-stadio-in-festa-per-ronaldinho-foto-tabellino/", srcName: "Ravenna e Dintorni" },
        { status: "lost", score: "2–2", src: "https://www.trivenetogoal.it/2026/11/15/cittadella-folgore-caratese-2-2-i-granata-frenano-con-lultima-in-classifica-ora-e-lotta-a-tre-con-brescia-e-trento/269002/", srcName: "Triveneto Goal" },
        { status: "won", score: "7–2", src: "https://www.vavel.com/en-us/soccer/2026/11/15/1279342-finland-vs-san-marino-live-latest-score-goals-and-uefa-nations-league-updates.html", srcName: "VAVEL" },
        { status: "lost", score: "1–1 (Sol won on pens)", src: "https://elnacional.com.py/deportes/copa-paraguay-sol-america-elimina-cerro-porteno-tanda-penales-disputara-final-recoleta-n115323", srcName: "El Nacional" },
        { status: "unverified", score: "kicked off 23:00, not settled", src: "https://www.espn.com/soccer/match/_/gameId/401929709/curacao-panama", srcName: "ESPN" }
      ],
      legs: [
        { fx: "New Zealand v India", comp: "International Friendly", ko: "03:00", mk: "Over 2.5 Goals", odds: "1.45" },
        { fx: "Häcken v Piteå", comp: "Damallsvenskan (W)", ko: "13:00", mk: "Over 3.5 Goals", odds: "1.77" },
        { fx: "Hammarby v Kristianstad", comp: "Damallsvenskan (W)", ko: "13:00", mk: "Over 3.5 Goals", odds: "1.83" },
        { fx: "Sedan v Bourges", comp: "Coupe de France", ko: "13:00", mk: "Over 2.5 Goals", odds: "1.51" },
        { fx: "Pescara v Sambenedettese", comp: "Serie C", ko: "13:30", mk: "Home Win", odds: "1.50" },
        { fx: "Rumilly v Saint-Étienne", comp: "Coupe de France", ko: "14:00", mk: "Over 2.5 Goals", odds: "1.45" },
        { fx: "Montpellier Atlas Paillade v AS Cannes", comp: "Coupe de France", ko: "14:00", mk: "Over 2.5 Goals", odds: "1.54" },
        { fx: "Ravenna v Forlì", comp: "Serie C", ko: "16:30", mk: "Home Win & Over 1.5 Goals", odds: "1.54" },
        { fx: "Cittadella v Folgore Caratese", comp: "Serie C", ko: "16:30", mk: "Home Win & Over 1.5 Goals", odds: "1.68" },
        { fx: "Finland v San Marino", comp: "UEFA Nations League", ko: "17:00", mk: "Over 3.5 Goals", odds: "1.62" },
        { fx: "Cerro Porteño v Sol de América", comp: "Copa Paraguay (semi-final)", ko: "21:00", mk: "Home Win", odds: "1.46" },
        { fx: "Panama v Curaçao", comp: "CONCACAF Nations League (QF 2nd leg)", ko: "23:00", mk: "Home Win", odds: "1.55" }
      ]
    },
    results: {
      1: { status: "won", score: "3–0", src: "https://www.the-aiff.com/article/india-fall-to-new-zealand-in-christchurch-friendly", srcName: "AIFF" },
      2: { status: "won", score: "2–0", src: "https://www.nsd.se/sport/fotboll/artikel/forlust-borta-for-pitea-mot-bk-hacken/r35kvd2j", srcName: "NSD" },
      3: { status: "won", score: "1–0", src: "https://www.gp.se/sport/10-seger-for-hammarby-ida-hermannsdottir-matchhjalte.e6b804e3-af98-581b-9dca-ef79c3469039", srcName: "GP" },
      4: { status: "won", score: "3–0", src: "https://www.primocanale.it/sport/73653-spezia-vado.html", srcName: "Primocanale" },
      5: { status: "won", score: "0–2", src: "https://footamateur.ouest-france.fr/coupe-de-france-tous-les-resultats-du-septieme-tour/", srcName: "Ouest-France" },
      6: { status: "won", score: "2–0", src: "https://sportin.biz/2026/11/15/tsc-ponovo-lider/", srcName: "Sportin" },
      7: { status: "won", score: "7–2", src: "https://www.vavel.com/en-us/soccer/2026/11/15/1279342-finland-vs-san-marino-live-latest-score-goals-and-uefa-nations-league-updates.html", srcName: "VAVEL" },
      8: { status: "won", score: "2–1", src: "https://www.espn.com/soccer/report/_/gameId/401861177", srcName: "ESPN" }
    },
    settled: "Settled 23:00 UK: 8 picks, 8 won (100%). Safest 4-leg, Home strength 4-leg and accumulator XEUW1N (4.00) all landed. Mega GULCHP lost: 5 won, 6 lost, 1 unverified (Panama v Curaçao).",
    audit: {
      of: "Saturday 14 November 2026",
      note: "Each result has at least two sources. One report is linked below. Nacional v Albion (Mega only) was still unconfirmed when the audit ran.",
      picks: [
        { fx: "Livingston v Greenock Morton", mk: "Home Win", odds: "1.28", score: "2–0", status: "won", src: "https://livingstonfc.co.uk/livingston-2-0-greenock-morton/", srcName: "Livingston FC" },
        { fx: "US Tourcoing v Reims", mk: "Over 2.5 Goals", odds: "1.18", score: "0–1", status: "lost", src: "https://footamateur.ouest-france.fr/coupe-de-france-les-resultats-du-samedi-14-novembre-2026/", srcName: "Ouest-France" },
        { fx: "Stade Béthunois v Nancy", mk: "Over 1.5 Goals", odds: "1.08", score: "3–3", status: "won", src: "https://www.horizonactu.fr/actualite-50474-coupe-de-france-au-terme-d-un-match-completement-fou-les-bethunois-s-inclinent-aux-tirs-au-but-face-a-nancy", srcName: "Horizon" },
        { fx: "Norway v Wales", mk: "Over 1.5 Goals", odds: "1.11", score: "3–1", status: "won", src: "https://www.skysports.com/football/news/13612155/norway-3-1-wales-craig-bellamys-side-suffer-defeat-in-oslo-with-threat-of-nations-league-relegation-now-looming", srcName: "Sky Sports" },
        { fx: "Portugal v Denmark", mk: "Over 1.5 Goals", odds: "1.16", score: "1–4", status: "won", src: "https://www.uefa.com/uefanationsleague/news/02ab-220e66a3c090-9304054ed1ca-1000--uefa-nations-league-matchday-5-round-up-denmark-beat-por/", srcName: "UEFA" },
        { fx: "Algeria v Togo", mk: "Home Win", odds: "1.22", score: "1–0", status: "won", src: "https://panafricafootball.com/article/algeria-togo-afcon-md3", srcName: "PanAfrica Football" },
        { fx: "Angola v South Sudan", mk: "Home Win", odds: "1.12", score: "2–0", status: "won", src: "https://www.cafonline.com/afcon2025/news/algeria-edge-togo-as-late-goals-rescue-angola-against-ten-man-south-sudan-in-qualifiers/", srcName: "CAF" },
        { fx: "Almere City v Helmond Sport", mk: "Over 1.5 Goals", odds: "1.11", score: "6–1", status: "won", src: "https://www.stadindex.nl/almere/3629916-city-fc-overklast-helmond-sport-met-6-1-en-staat-nu-tweede-in-de-kkd", srcName: "Stadindex" },
        { fx: "Juventude v Botafogo-SP", mk: "Home Win", odds: "1.36", score: "2–0", status: "won", src: "https://www.juventude.com.br/blog/vitoria-de-elite-juventude-e-vice-campeao-da-serie-b-e-confirma-retorno-ao-brasileirao", srcName: "Juventude" },
        { fx: "Millonarios v Alianza Valledupar", mk: "Home Win", odds: "1.31", score: "2–0", status: "won", src: "https://www.futbolred.com/futbol-colombiano/liga-betplay/millonarios-vencio-2-0-a-alianza-valledupar-en-el-campin-por-liga-betplay-275268", srcName: "Futbolred" },
        { fx: "Haiti v USA (in Miami)", mk: "Over 1.5 Goals", odds: "1.18", score: "0–6", status: "won", src: "https://www.nbcsports.com/soccer/live/haiti-vs-usmnt-live-updates-score-goals-highlights-stats-2026-november-14", srcName: "NBC Sports" }
      ],
      tickets: [
        { name: "Safest 4-leg", total: "1.49", landed: true },
        { name: "Must-win 4-leg", total: "2.78", landed: true },
        { name: "Full accumulator T24VCJ", total: "6.70", landed: false },
        { name: "Mega UTGYMV (6 won, 6 lost, 1 unverified)", total: "307.51", landed: false }
      ],
      lessons: [
        "All four must-win home sides won (2–0, 2–0, 2–0, 1–0). They're reliable for the result but rarely run up a score, so pair them with Home Win, not goals markets.",
        "A Coupe de France mismatch (Tourcoing v Reims) went 0–1. When the favourite is rotating and away from home, cup goals markets are weaker.",
        "Today's Mega spreads its goals legs across women's football, cup mismatches and Finland v San Marino, rather than must-win favourites."
      ]
    }
  },
  {
    date: "2026-11-14",
    label: "Saturday 14 November 2026",
    built: "Built 01:25 UK",
    comps: [
      { name: "Scottish Championship", windows: [ { ko: "15:00 UK", picks: [
        { n: 1, fx: "Livingston v Greenock Morton", mk: "Home Win", odds: "1.28" } ] } ] },
      { name: "Coupe de France", windows: [ { ko: "13:00 UK", picks: [
        { n: 2, fx: "US Tourcoing v Reims", mk: "Over 2.5 Goals", odds: "1.18" } ] }, { ko: "17:00 UK", picks: [
        { n: 3, fx: "Stade Béthunois v Nancy", mk: "Over 1.5 Goals", odds: "1.08" } ] } ] },
      { name: "UEFA Nations League", windows: [ { ko: "17:00 UK", picks: [
        { n: 4, fx: "Norway v Wales", mk: "Over 1.5 Goals", odds: "1.11" } ] }, { ko: "19:45 UK", picks: [
        { n: 5, fx: "Portugal v Denmark", mk: "Over 1.5 Goals", odds: "1.16" } ] } ] },
      { name: "AFCON Qualifiers", windows: [ { ko: "19:00 UK", picks: [
        { n: 6, fx: "Algeria v Togo", mk: "Home Win", odds: "1.22" },
        { n: 7, fx: "Angola v South Sudan", mk: "Home Win", odds: "1.12" } ] } ] },
      { name: "Eerste Divisie", windows: [ { ko: "19:00 UK", picks: [
        { n: 8, fx: "Almere City v Helmond Sport", mk: "Over 1.5 Goals", odds: "1.11" } ] } ] },
      { name: "Brazil Série B", windows: [ { ko: "19:30 UK", picks: [
        { n: 9, fx: "Juventude v Botafogo-SP", mk: "Home Win", odds: "1.36" } ] } ] },
      { name: "Colombia Liga BetPlay", windows: [ { ko: "20:30 UK", picks: [
        { n: 10, fx: "Millonarios v Alianza Valledupar", mk: "Home Win", odds: "1.31" } ] } ] },
      { name: "CONCACAF Nations League", windows: [ { ko: "21:30 UK", picks: [
        { n: 11, fx: "Haiti v USA (in Miami)", mk: "Over 1.5 Goals", odds: "1.18" } ] } ] }
    ],
    passes: "Banfield v Boca (away favourite, low-scoring Argentine cup), Atlético-GO and CRB (in the Mega only), Fco Firminy v Annecy and St Ouen v Boulogne (picked one Coupe de France goals leg per window), Carlisle and Southend (in the Mega only), Nacional v Albion (behind closed doors, key absences), plus amateur and lower-league fixtures. No Arsenal fixtures were considered.",
    tickets: [
      { name: "Safest 4-leg", legs: [
        ["Béthune v Nancy: Over 1.5", "1.08"],
        ["Norway v Wales: Over 1.5", "1.11"],
        ["Almere City v Helmond: Over 1.5", "1.11"],
        ["Angola v South Sudan: Home Win", "1.12"]
      ], total: "1.49" },
      { name: "Must-win 4-leg", legs: [
        ["Juventude v Botafogo-SP: Home Win (needs it for promotion)", "1.36"],
        ["Millonarios v Alianza: Home Win (needs it for the semi-final groups)", "1.31"],
        ["Livingston v Morton: Home Win", "1.28"],
        ["Algeria v Togo: Home Win", "1.22"]
      ], total: "2.78" }
    ],
    acca: { code: "T24VCJ", legs: 11, odds: "6.70", booked: "01:20 UK" },
    mega: {
      code: "UTGYMV", odds: "307.51", booked: "01:22 UK", landed: false,
      results: [
        { status: "won", score: "2–0", src: "https://uk.sports.yahoo.com/news/duru-linney-fire-blues-play-144345710.html", srcName: "Yahoo Sports" },
        { status: "won", score: "2–1", src: "https://www.theshots.co.uk/match-report-southend-united-away/", srcName: "Aldershot Town" },
        { status: "lost", score: "2–0", src: "https://livingstonfc.co.uk/livingston-2-0-greenock-morton/", srcName: "Livingston FC" },
        { status: "lost", score: "1–0", src: "https://panafricafootball.com/article/algeria-togo-afcon-md3", srcName: "PanAfrica Football" },
        { status: "lost", score: "2–0", src: "https://www.cafonline.com/afcon2025/news/algeria-edge-togo-as-late-goals-rescue-angola-against-ten-man-south-sudan-in-qualifiers/", srcName: "CAF" },
        { status: "won", score: "6–1", src: "https://www.stadindex.nl/almere/3629916-city-fc-overklast-helmond-sport-met-6-1-en-staat-nu-tweede-in-de-kkd", srcName: "Stadindex" },
        { status: "lost", score: "1–0", src: "https://www.gazetaesportiva.com/times/atletico-go/atletico-go-vence-cuiaba-e-conquista-ultima-vaga-nos-playoffs-da-serie-b/", srcName: "Gazeta Esportiva" },
        { status: "won", score: "2–0", src: "https://www.juventude.com.br/blog/vitoria-de-elite-juventude-e-vice-campeao-da-serie-b-e-confirma-retorno-ao-brasileirao", srcName: "Juventude" },
        { status: "lost", score: "1–1", src: "https://www.band.com.br/esportes/futebol/brasileirao-serie-b/ceara-empata-com-o-crb-e-se-livra-da-queda-para-a-serie-c-veja-rebaixados", srcName: "Band" },
        { status: "lost", score: "1–4", src: "https://www.uefa.com/uefanationsleague/news/02ab-220e66a3c090-9304054ed1ca-1000--uefa-nations-league-matchday-5-round-up-denmark-beat-por/", srcName: "UEFA" },
        { status: "won", score: "2–0", src: "https://www.futbolred.com/futbol-colombiano/liga-betplay/millonarios-vencio-2-0-a-alianza-valledupar-en-el-campin-por-liga-betplay-275268", srcName: "Futbolred" },
        { status: "won", score: "0–6", src: "https://www.nbcsports.com/soccer/live/haiti-vs-usmnt-live-updates-score-goals-highlights-stats-2026-november-14", srcName: "NBC Sports" },
        { status: "unverified", score: "1–0 at 70', final unverified", src: "https://www.elobservador.com.uy/futbol/nacional-vs-albion-el-torneo-clausura-vivo-su-publico-el-tricolor-se-juega-su-ultima-chance-pelear-el-campeonato-n6063887", srcName: "El Observador" }
      ],
      legs: [
        { fx: "Carlisle v Boston United", comp: "National League", ko: "15:00", mk: "Home Win", odds: "1.46" },
        { fx: "Southend v Aldershot", comp: "National League", ko: "15:00", mk: "Both Teams to Score: Yes", odds: "1.56" },
        { fx: "Livingston v Greenock Morton", comp: "Scottish Championship", ko: "15:00", mk: "Over 2.5 Goals", odds: "1.53" },
        { fx: "Algeria v Togo", comp: "AFCON Qualifiers", ko: "19:00", mk: "Over 2.5 Goals", odds: "1.72" },
        { fx: "Angola v South Sudan", comp: "AFCON Qualifiers", ko: "19:00", mk: "Over 2.5 Goals", odds: "1.72" },
        { fx: "Almere City v Helmond Sport", comp: "Eerste Divisie", ko: "19:00", mk: "Home Win", odds: "1.46" },
        { fx: "Atlético-GO v Cuiabá", comp: "Brazil Série B", ko: "19:30", mk: "Home Win & Over 1.5 Goals", odds: "1.64" },
        { fx: "Juventude v Botafogo-SP", comp: "Brazil Série B", ko: "19:30", mk: "Home Win & Over 1.5 Goals", odds: "1.60" },
        { fx: "CRB v Ceará", comp: "Brazil Série B", ko: "19:30", mk: "Home Win", odds: "1.46" },
        { fx: "Portugal v Denmark", comp: "UEFA Nations League", ko: "19:45", mk: "Home Win", odds: "1.53" },
        { fx: "Millonarios v Alianza Valledupar", comp: "Colombia Liga BetPlay", ko: "20:30", mk: "Home Win & Over 1.5 Goals", odds: "1.49" },
        { fx: "Haiti v USA (in Miami)", comp: "CONCACAF Nations League", ko: "21:30", mk: "Over 2.5 Goals", odds: "1.57" },
        { fx: "Nacional v Albion", comp: "Uruguay Primera", ko: "23:00", mk: "Home Win", odds: "1.49" }
      ]
    },
    results: {
      1: { status: "won", score: "2–0", src: "https://livingstonfc.co.uk/livingston-2-0-greenock-morton/", srcName: "Livingston FC" },
      2: { status: "lost", score: "0–1", src: "https://footamateur.ouest-france.fr/coupe-de-france-les-resultats-du-samedi-14-novembre-2026/", srcName: "Ouest-France" },
      3: { status: "won", score: "3–3 (Nancy won on pens)", src: "https://www.horizonactu.fr/actualite-50474-coupe-de-france-au-terme-d-un-match-completement-fou-les-bethunois-s-inclinent-aux-tirs-au-but-face-a-nancy", srcName: "Horizon" },
      4: { status: "won", score: "3–1", src: "https://www.skysports.com/football/news/13612155/norway-3-1-wales-craig-bellamys-side-suffer-defeat-in-oslo-with-threat-of-nations-league-relegation-now-looming", srcName: "Sky Sports" },
      5: { status: "won", score: "1–4", src: "https://www.uefa.com/uefanationsleague/news/02ab-220e66a3c090-9304054ed1ca-1000--uefa-nations-league-matchday-5-round-up-denmark-beat-por/", srcName: "UEFA" },
      6: { status: "won", score: "1–0", src: "https://panafricafootball.com/article/algeria-togo-afcon-md3", srcName: "PanAfrica Football" },
      7: { status: "won", score: "2–0", src: "https://www.cafonline.com/afcon2025/news/algeria-edge-togo-as-late-goals-rescue-angola-against-ten-man-south-sudan-in-qualifiers/", srcName: "CAF" },
      8: { status: "won", score: "6–1", src: "https://www.stadindex.nl/almere/3629916-city-fc-overklast-helmond-sport-met-6-1-en-staat-nu-tweede-in-de-kkd", srcName: "Stadindex" },
      9: { status: "won", score: "2–0", src: "https://www.juventude.com.br/blog/vitoria-de-elite-juventude-e-vice-campeao-da-serie-b-e-confirma-retorno-ao-brasileirao", srcName: "Juventude" },
      10: { status: "won", score: "2–0", src: "https://www.futbolred.com/futbol-colombiano/liga-betplay/millonarios-vencio-2-0-a-alianza-valledupar-en-el-campin-por-liga-betplay-275268", srcName: "Futbolred" },
      11: { status: "won", score: "0–6", src: "https://www.nbcsports.com/soccer/live/haiti-vs-usmnt-live-updates-score-goals-highlights-stats-2026-november-14", srcName: "NBC Sports" }
    },
    settled: "Settled 00:45 UK: 11 picks, 10 won, 1 lost (91%). Both 4-leg tickets landed. Accumulator T24VCJ lost on Tourcoing v Reims Over 2.5 (0–1, an injury-time winner). Mega UTGYMV lost: 6 legs won, 6 lost, 1 unverified (Nacional v Albion's final score wasn't published yet).",
    audit: {
      of: "Friday 13 November 2026",
      note: "Each result has at least two sources. One report is linked below.",
      picks: [
        { fx: "Nigeria v Tanzania", mk: "Home Win", odds: "1.19", score: "3–1", status: "won", src: "https://www.vavel.com/en/football/2026/11/13/1279066-nigeria-vs-tanzania-live-score-goals-and-afcon-qualifiers-updates.html", srcName: "VAVEL" },
        { fx: "South Africa v Kenya", mk: "Home Win", odds: "1.29", score: "2–2", status: "lost", src: "https://africasoccer.com/afcon-2027-qualifiers-south-africa-held-to-2-2-draw-by-kenya-in-group-d/", srcName: "AfricaSoccer" },
        { fx: "Egypt v Malawi", mk: "Home Win", odds: "1.12", score: "5–0", status: "won", src: "https://www.vavel.com/en-us/soccer/2026/11/13/1279006-egypt-vs-malawi-live-latest-score-goals-and-african-cup-of-nations-qualifiers-updates.html", srcName: "VAVEL" },
        { fx: "Morocco v Niger", mk: "Over 1.5 Goals", odds: "1.13", score: "5–1", status: "won", src: "https://en.hespress.com/149131-morocco-beat-niger-5-1-in-2027-afcon-qualifier.html", srcName: "Hespress" },
        { fx: "Scotland v North Macedonia", mk: "Home Win", odds: "1.21", score: "2–1", status: "won", src: "https://news.bet365.com/en-gb/article/scotland-v-north-macedonia-stats-and-timeline/2026111321014784045", srcName: "bet365 News" },
        { fx: "Slovakia v Faroe Islands", mk: "Double Chance 1X", odds: "1.09", score: "2–2", status: "won", src: "https://www.espn.com/soccer/match/_/gameId/401861160/faroe-islands-slovakia", srcName: "ESPN" },
        { fx: "Serbia v Germany", mk: "Over 1.5 Goals", odds: "1.13", score: "1–3", status: "won", src: "https://www.espn.com/soccer/report/_/gameId/401861158", srcName: "ESPN" },
        { fx: "Netherlands v Greece", mk: "Over 1.5 Goals", odds: "1.19", score: "7–0", status: "won", src: "https://www.espn.com/soccer/match/_/gameId/401861159/greece-netherlands", srcName: "ESPN" }
      ],
      tickets: [
        { name: "Safest 4-leg", total: "1.50", landed: true },
        { name: "Home strength 4-leg", total: "2.21", landed: false },
        { name: "Full accumulator HAGHVF", total: "3.45", landed: false },
        { name: "Mega QXXHSN (10 of 13 legs)", total: "451.02", landed: false }
      ],
      lessons: [
        "South Africa drew 2–2 at home to Kenya. A favourite at 1.29 still draws about one game in five, so keep home wins at that price to one per ticket.",
        "Goals markets in mismatches went 4 from 4 again (5–1, 1–3, 7–0, 5–0).",
        "Two of the Mega's three losses were home favourites that didn't win (Tunisia 0–2, Slovakia 2–2). Today's Mega leans towards teams that must win: Juventude, Millonarios, Atlético-GO and CRB."
      ]
    }
  },
  {
    date: "2026-11-13",
    label: "Friday 13 November 2026",
    built: "Built 01:30 UK",
    comps: [
      { name: "AFCON Qualifiers", windows: [ { ko: "16:00 UK", picks: [
        { n: 1, fx: "Nigeria v Tanzania", mk: "Home Win", odds: "1.19" },
        { n: 2, fx: "South Africa v Kenya", mk: "Home Win", odds: "1.29" } ] }, { ko: "19:00 UK", picks: [
        { n: 3, fx: "Egypt v Malawi", mk: "Home Win", odds: "1.12" } ] }, { ko: "20:00 UK", picks: [
        { n: 4, fx: "Morocco v Niger", mk: "Over 1.5 Goals", odds: "1.13" } ] } ] },
      { name: "UEFA Nations League", windows: [ { ko: "19:45 UK", picks: [
        { n: 5, fx: "Scotland v North Macedonia", mk: "Home Win", odds: "1.21" },
        { n: 6, fx: "Slovakia v Faroe Islands", mk: "Double Chance 1X", odds: "1.09" },
        { n: 7, fx: "Serbia v Germany", mk: "Over 1.5 Goals", odds: "1.13" },
        { n: 8, fx: "Netherlands v Greece", mk: "Over 1.5 Goals", odds: "1.19" } ] } ] }
    ],
    passes: "Tunisia v Libya and Mali v Rwanda (tight, low-scoring prices), Cape Verde v Liberia and Gabon v Lesotho (data from one source only), Argentina v Uruguay, Ecuador v Costa Rica and Colombia v Chile (friendlies after midnight UK, rotation), Salamanca v Celta (heavy Celta rotation), Welsh Cup ties (no team news), plus lower-league fixtures. No Arsenal fixtures were considered (your rule).",
    tickets: [
      { name: "Safest 4-leg", legs: [
        ["Slovakia v Faroe Islands: 1X", "1.09"],
        ["Egypt v Malawi: Home Win", "1.12"],
        ["Morocco v Niger: Over 1.5", "1.13"],
        ["Serbia v Germany: Over 1.5", "1.13"]
      ], total: "1.50" },
      { name: "Home strength 4-leg", legs: [
        ["Nigeria v Tanzania: Home Win", "1.19"],
        ["Scotland v North Macedonia: Home Win", "1.21"],
        ["South Africa v Kenya: Home Win", "1.29"],
        ["Netherlands v Greece: Over 1.5", "1.19"]
      ], total: "2.21" }
    ],
    acca: { code: "HAGHVF", legs: 8, odds: "3.45", booked: "01:25 UK" },
    mega: {
      code: "QXXHSN", odds: "451.02", booked: "01:28 UK", landed: false,
      results: [
        { status: "won", score: "3–1", src: "https://www.vavel.com/en/football/2026/11/13/1279066-nigeria-vs-tanzania-live-score-goals-and-afcon-qualifiers-updates.html", srcName: "VAVEL" },
        { status: "lost", score: "2–2", src: "https://africasoccer.com/afcon-2027-qualifiers-south-africa-held-to-2-2-draw-by-kenya-in-group-d/", srcName: "AfricaSoccer" },
        { status: "lost", score: "0–2", src: "https://www.espn.com/soccer/match/_/gameId/401927205/libya-tunisia", srcName: "ESPN" },
        { status: "won", score: "4–2", src: "https://africasoccer.com/afcon-2027-qualifiers-cape-verde-beat-liberia-4-2-to-claim-first-group-k-victory/", srcName: "AfricaSoccer" },
        { status: "won", score: "2–0", src: "https://africasoccer.com/afcon-2027-qualifiers-gabon-beat-lesotho-2-0-to-strengthen-group-a-hopes/", srcName: "AfricaSoccer" },
        { status: "won", score: "5–0", src: "https://www.vavel.com/en-us/soccer/2026/11/13/1279006-egypt-vs-malawi-live-latest-score-goals-and-african-cup-of-nations-qualifiers-updates.html", srcName: "VAVEL" },
        { status: "won", score: "3–2", src: "https://www.newtimes.co.rw/article/40433/sports/football/mali-edge-rwanda-in-five-goal-thriller-to-go-top-of-group-k", srcName: "The New Times" },
        { status: "won", score: "7–0", src: "https://www.espn.com/soccer/match/_/gameId/401861159/greece-netherlands", srcName: "ESPN" },
        { status: "won", score: "2–1", src: "https://news.bet365.com/en-gb/article/scotland-v-north-macedonia-stats-and-timeline/2026111321014784045", srcName: "bet365 News" },
        { status: "lost", score: "2–2", src: "https://www.espn.com/soccer/match/_/gameId/401861160/faroe-islands-slovakia", srcName: "ESPN" },
        { status: "won", score: "1–3", src: "https://www.espn.com/soccer/report/_/gameId/401861158", srcName: "ESPN" },
        { status: "won", score: "6–0", src: "https://nwsport.co.uk/2026/11/13/welsh-cup-r3-holders-caernarfon-town-and-on-form-nomads-advance-to-last-16/", srcName: "NW Sport" },
        { status: "won", score: "0–5", src: "https://www.cope.es/programas/tiempo-de-juego/cronica/directo-salamanca-celta-vigo-copa-rey-13-20261113_3475201.html", srcName: "COPE" }
      ],
      legs: [
        { fx: "Nigeria v Tanzania", comp: "AFCON Qualifiers", ko: "16:00", mk: "Over 2.5 Goals", odds: "1.67" },
        { fx: "South Africa v Kenya", comp: "AFCON Qualifiers", ko: "16:00", mk: "Home Win & Over 1.5 Goals", odds: "1.58" },
        { fx: "Tunisia v Libya", comp: "AFCON Qualifiers", ko: "16:00", mk: "Home Win & Over 1.5 Goals", odds: "1.68" },
        { fx: "Cape Verde v Liberia", comp: "AFCON Qualifiers", ko: "16:00", mk: "Home Win & Over 1.5 Goals", odds: "1.46" },
        { fx: "Gabon v Lesotho", comp: "AFCON Qualifiers", ko: "16:00", mk: "Home Win & Over 1.5 Goals", odds: "1.47" },
        { fx: "Egypt v Malawi", comp: "AFCON Qualifiers", ko: "19:00", mk: "Over 2.5 Goals", odds: "1.63" },
        { fx: "Mali v Rwanda", comp: "AFCON Qualifiers", ko: "19:00", mk: "Home Win & Over 1.5 Goals", odds: "1.61" },
        { fx: "Netherlands v Greece", comp: "UEFA Nations League", ko: "19:45", mk: "Home Win", odds: "1.59" },
        { fx: "Scotland v North Macedonia", comp: "UEFA Nations League", ko: "19:45", mk: "Over 2.5 Goals", odds: "1.70" },
        { fx: "Slovakia v Faroe Islands", comp: "UEFA Nations League", ko: "19:45", mk: "Home Win & Over 1.5 Goals", odds: "1.59" },
        { fx: "Serbia v Germany", comp: "UEFA Nations League", ko: "19:45", mk: "Both Teams to Score: Yes", odds: "1.82" },
        { fx: "Penybont v Cardiff Draconians", comp: "FAW Welsh Cup", ko: "19:45", mk: "Over 3.5 Goals", odds: "1.55" },
        { fx: "Salamanca v Celta", comp: "Copa del Rey", ko: "20:00", mk: "Over 2.5 Goals", odds: "1.49" }
      ]
    },
    results: {
      1: { status: "won", score: "3–1", src: "https://www.vavel.com/en/football/2026/11/13/1279066-nigeria-vs-tanzania-live-score-goals-and-afcon-qualifiers-updates.html", srcName: "VAVEL" },
      2: { status: "lost", score: "2–2", src: "https://africasoccer.com/afcon-2027-qualifiers-south-africa-held-to-2-2-draw-by-kenya-in-group-d/", srcName: "AfricaSoccer" },
      3: { status: "won", score: "5–0", src: "https://www.vavel.com/en-us/soccer/2026/11/13/1279006-egypt-vs-malawi-live-latest-score-goals-and-african-cup-of-nations-qualifiers-updates.html", srcName: "VAVEL" },
      4: { status: "won", score: "5–1", src: "https://en.hespress.com/149131-morocco-beat-niger-5-1-in-2027-afcon-qualifier.html", srcName: "Hespress" },
      5: { status: "won", score: "2–1", src: "https://news.bet365.com/en-gb/article/scotland-v-north-macedonia-stats-and-timeline/2026111321014784045", srcName: "bet365 News" },
      6: { status: "won", score: "2–2", src: "https://www.espn.com/soccer/match/_/gameId/401861160/faroe-islands-slovakia", srcName: "ESPN" },
      7: { status: "won", score: "1–3", src: "https://www.espn.com/soccer/report/_/gameId/401861158", srcName: "ESPN" },
      8: { status: "won", score: "7–0", src: "https://www.espn.com/soccer/match/_/gameId/401861159/greece-netherlands", srcName: "ESPN" }
    },
    settled: "Settled 23:15 UK: 8 picks, 7 won, 1 lost (88%). Safest 4-leg landed. Home strength 4-leg and accumulator HAGHVF lost on South Africa v Kenya (2–2). Mega QXXHSN lost: 10 of 13 legs won (South Africa 2–2, Tunisia 0–2, Slovakia 2–2).",
    audit: {
      of: "Thursday 12 November 2026",
      note: "Each result has at least two sources. One report is linked below.",
      picks: [
        { fx: "Ghana v Somalia", mk: "Over 1.5 Goals", odds: "1.14", score: "2–0", status: "won", src: "https://www.ghanaweb.com/GhanaHomePage/SportsArchive/Match-Report-Ghana-beat-Somalia-to-secure-first-win-in-2027-AFCON-qualifiers-2061077", srcName: "GhanaWeb" },
        { fx: "DR Congo v Sierra Leone", mk: "Home Win", odds: "1.22", score: "3–1", status: "won", src: "https://www.cafonline.com/afcon2025/news/totalenergies-caf-afcon-2027-qualifiers-dr-congo-extend-perfect-run-as-guinea-bissau-and-zimbabwe-held-to-draws/", srcName: "CAF" },
        { fx: "Senegal v Sudan", mk: "Home Win", odds: "1.12", score: "4–1", status: "won", src: "https://en.africatopsports.com/2027-afcon-q-second-half-blitz-powers-senegal-past-sudan-4-1-in-dakar/", srcName: "Africa Top Sports" },
        { fx: "Türkiye v Belgium", mk: "Over 1.5 Goals", odds: "1.15", score: "1–2", status: "won", src: "https://www.turkiyetoday.com/sports/belgium-come-from-behind-to-beat-turkiye-2-1-in-nations-league-3232284", srcName: "Türkiye Today" },
        { fx: "England v Croatia", mk: "Home Win", odds: "1.29", score: "2–1", status: "won", src: "https://www.englandfootball.com/england/mens-senior-team/fixtures-results/2026-27/nations-league/england-v-croatia-uefa-nations-league-thursday-12-november-2026-match-centre", srcName: "England Football" },
        { fx: "Montenegro v Latvia", mk: "Home Win", odds: "1.31", score: "2–1", status: "won", src: "https://www.livescore.com/en/football/international/uefa-nations-league/montenegro-vs-latvia/1738379/", srcName: "LiveScore" },
        { fx: "Czechia v Spain", mk: "Over 1.5 Goals", odds: "1.14", score: "0–2", status: "won", src: "https://www.tntsports.co.uk/football/uefa-nations-league/2026-2027/live-czechia-spain_mtc20005824/live-commentary.shtml", srcName: "TNT Sports" },
        { fx: "Italy v France", mk: "Over 1.5 Goals", odds: "1.20", score: "3–1", status: "won", src: "https://www.aljazeera.com/sports/2026/11/12/italy-fight-back-to-beat-france-3-1-and-move-top-of-nations-league-group", srcName: "Al Jazeera" },
        { fx: "Ivory Coast v Gambia", mk: "Home Win", odds: "1.23", score: "2–1", status: "won", src: "https://en.africatopsports.com/afcon-2027-ivory-coast-secure-crucial-win-against-gambia/", srcName: "Africa Top Sports" }
      ],
      tickets: [
        { name: "Safest 4-leg", total: "1.67", landed: true },
        { name: "Home strength 4-leg", total: "2.56", landed: true },
        { name: "Full accumulator ZBP93F", total: "5.09", landed: true },
        { name: "Mega N6WXCD (11 of 12 legs)", total: "272.02", landed: false }
      ],
      lessons: [
        "9 from 9 is variance. The process stays the same.",
        "Czechia v Spain Over 1.5 only landed with a 96th-minute goal. A rotated favourite that's already qualified can still win narrowly.",
        "The Mega has gone 9/13, 10/13 and 11/12. Big favourites in Over 2.5 legs (Ghana 2–0) are the usual leak. Today's Mega uses Home & Over 1.5 for most favourites instead, where the gain is worth it."
      ]
    }
  },
  {
    date: "2026-11-12",
    label: "Thursday 12 November 2026",
    built: "Built 02:25 UK (late)",
    comps: [
      { name: "AFCON Qualifiers", windows: [ { ko: "15:00 UK", picks: [
        { n: 1, fx: "Ghana v Somalia", mk: "Over 1.5 Goals", odds: "1.14" } ] }, { ko: "16:00 UK", picks: [
        { n: 2, fx: "DR Congo v Sierra Leone", mk: "Home Win", odds: "1.22" } ] }, { ko: "19:00 UK", picks: [
        { n: 3, fx: "Senegal v Sudan", mk: "Home Win", odds: "1.12" } ] } ] },
      { name: "UEFA Nations League", windows: [ { ko: "17:00 UK", picks: [
        { n: 4, fx: "Türkiye v Belgium", mk: "Over 1.5 Goals", odds: "1.15" } ] }, { ko: "19:45 UK", picks: [
        { n: 5, fx: "England v Croatia", mk: "Home Win", odds: "1.29" },
        { n: 6, fx: "Montenegro v Latvia", mk: "Home Win", odds: "1.31" },
        { n: 7, fx: "Czechia v Spain", mk: "Over 1.5 Goals", odds: "1.14" },
        { n: 8, fx: "Italy v France", mk: "Over 1.5 Goals", odds: "1.20" } ] } ] },
      { name: "AFCON Qualifiers (late)", windows: [ { ko: "19:00 UK", picks: [
        { n: 9, fx: "Ivory Coast v Gambia", mk: "Home Win", odds: "1.23" } ] } ] }
    ],
    passes: "Copa del Rey ties: Betis without 10 players, Tarancón v Levante confirmed by one source only, Calvo Sotelo v Albacete (away favourite). Also passed: Ivory Coast v Gambia (both unbeaten, Renard's side win 2–0s), Cameroon v Namibia (low-scoring prices), Guinea v Eritrea (travel problems, kickoff disputed), New Zealand v India (06:00 friendly), Benfica v Austria Wien (in the Mega only). Barcelona v Arsenal was removed at 07:10 UK: you asked for no Arsenal picks, men or women.",
    tickets: [
      { name: "Safest 4-leg", legs: [
        ["Senegal v Sudan: Home Win", "1.12"],
        ["Czechia v Spain: Over 1.5", "1.14"],
        ["Ghana v Somalia: Over 1.5", "1.14"],
        ["Türkiye v Belgium: Over 1.5", "1.15"]
      ], total: "1.67" },
      { name: "Home strength 4-leg", legs: [
        ["DR Congo v Sierra Leone: Home Win", "1.22"],
        ["Ivory Coast v Gambia: Home Win", "1.23"],
        ["England v Croatia: Home Win", "1.29"],
        ["Montenegro v Latvia: Home Win", "1.31"]
      ], total: "2.56" }
    ],
    acca: { code: "ZBP93F", legs: 9, odds: "5.09", booked: "07:10 UK", note: "Rebooked at 07:10 UK with Arsenal removed (your rule: no Arsenal picks). The old code SRQJ2V included Barcelona v Arsenal. Use ZBP93F." },
    mega: {
      code: "N6WXCD", odds: "272.02", booked: "07:12 UK", landed: false,
      results: [
        { status: "lost", score: "2–0", src: "https://www.ghanaweb.com/GhanaHomePage/SportsArchive/Match-Report-Ghana-beat-Somalia-to-secure-first-win-in-2027-AFCON-qualifiers-2061077", srcName: "GhanaWeb" },
        { status: "won", score: "3–1", src: "https://www.cafonline.com/afcon2025/news/totalenergies-caf-afcon-2027-qualifiers-dr-congo-extend-perfect-run-as-guinea-bissau-and-zimbabwe-held-to-draws/", srcName: "CAF" },
        { status: "won", score: "2–1", src: "https://panafricafootball.com/article/guinea-eritrea-afcon-qualifier", srcName: "PanAfrica Football" },
        { status: "won", score: "1–2", src: "https://www.turkiyetoday.com/sports/belgium-come-from-behind-to-beat-turkiye-2-1-in-nations-league-3232284", srcName: "Türkiye Today" },
        { status: "won", score: "0–3", src: "https://www.infobae.com/espana/agencias/2026/11/12/el-albacete-clasificado-con-un-0-3-en-puertollano/", srcName: "Infobae" },
        { status: "won", score: "4–1", src: "https://en.africatopsports.com/2027-afcon-q-second-half-blitz-powers-senegal-past-sudan-4-1-in-dakar/", srcName: "Africa Top Sports" },
        { status: "won", score: "2–1", src: "https://en.africatopsports.com/afcon-2027-ivory-coast-secure-crucial-win-against-gambia/", srcName: "Africa Top Sports" },
        { status: "won", score: "2–0", src: "https://www.vavel.com/en-us/soccer/2026/11/12/1278863-cameroon-vs-namibia-live-latest-score-goals-and-africa-cup-of-nations-qualifiers-updates.html", srcName: "VAVEL" },
        { status: "won", score: "2–1", src: "https://www.englandfootball.com/england/mens-senior-team/fixtures-results/2026-27/nations-league/england-v-croatia-uefa-nations-league-thursday-12-november-2026-match-centre", srcName: "England Football" },
        { status: "won", score: "2–1", src: "https://www.livescore.com/en/football/international/uefa-nations-league/montenegro-vs-latvia/1738379/", srcName: "LiveScore" },
        { status: "won", score: "3–1", src: "https://www.aljazeera.com/sports/2026/11/12/italy-fight-back-to-beat-france-3-1-and-move-top-of-nations-league-group", srcName: "Al Jazeera" },
        { status: "won", score: "3–1", src: "https://www.ojogo.pt/especiais/artigo/benfica-vence-austria-viena-e-esta-em-zona-de-play-off-na-champions-feminina/18147649", srcName: "O Jogo" }
      ],
      legs: [
        { fx: "Ghana v Somalia", comp: "AFCON Qualifiers", ko: "15:00", mk: "Over 2.5 Goals", odds: "1.45" },
        { fx: "DR Congo v Sierra Leone", comp: "AFCON Qualifiers", ko: "16:00", mk: "Over 2.5 Goals", odds: "1.86" },
        { fx: "Guinea v Eritrea", comp: "AFCON Qualifiers", ko: "16:00", mk: "Over 2.5 Goals", odds: "1.69" },
        { fx: "Türkiye v Belgium", comp: "UEFA Nations League", ko: "17:00", mk: "Both Teams to Score: Yes", odds: "1.52" },
        { fx: "Calvo Sotelo v Albacete", comp: "Copa del Rey", ko: "17:30", mk: "Over 2.5 Goals", odds: "1.73" },
        { fx: "Senegal v Sudan", comp: "AFCON Qualifiers", ko: "19:00", mk: "Over 2.5 Goals", odds: "1.49" },
        { fx: "Ivory Coast v Gambia", comp: "AFCON Qualifiers", ko: "19:00", mk: "Over 2.5 Goals", odds: "1.68" },
        { fx: "Cameroon v Namibia", comp: "AFCON Qualifiers", ko: "19:00", mk: "Home Win & Over 1.5 Goals", odds: "1.60" },
        { fx: "England v Croatia", comp: "UEFA Nations League", ko: "19:45", mk: "Over 2.5 Goals", odds: "1.43" },
        { fx: "Montenegro v Latvia", comp: "UEFA Nations League", ko: "19:45", mk: "Home Win & Over 1.5 Goals", odds: "1.49" },
        { fx: "Italy v France", comp: "UEFA Nations League", ko: "19:45", mk: "Both Teams to Score: Yes", odds: "1.61" },
        { fx: "Benfica v Austria Wien", comp: "Women's Champions League", ko: "20:00", mk: "Home Win", odds: "1.59" }
      ]
    },
    results: {
      1: { status: "won", score: "2–0", src: "https://www.ghanaweb.com/GhanaHomePage/SportsArchive/Match-Report-Ghana-beat-Somalia-to-secure-first-win-in-2027-AFCON-qualifiers-2061077", srcName: "GhanaWeb" },
      2: { status: "won", score: "3–1", src: "https://www.cafonline.com/afcon2025/news/totalenergies-caf-afcon-2027-qualifiers-dr-congo-extend-perfect-run-as-guinea-bissau-and-zimbabwe-held-to-draws/", srcName: "CAF" },
      3: { status: "won", score: "4–1", src: "https://en.africatopsports.com/2027-afcon-q-second-half-blitz-powers-senegal-past-sudan-4-1-in-dakar/", srcName: "Africa Top Sports" },
      4: { status: "won", score: "1–2", src: "https://www.turkiyetoday.com/sports/belgium-come-from-behind-to-beat-turkiye-2-1-in-nations-league-3232284", srcName: "Türkiye Today" },
      5: { status: "won", score: "2–1", src: "https://www.englandfootball.com/england/mens-senior-team/fixtures-results/2026-27/nations-league/england-v-croatia-uefa-nations-league-thursday-12-november-2026-match-centre", srcName: "England Football" },
      6: { status: "won", score: "2–1", src: "https://www.livescore.com/en/football/international/uefa-nations-league/montenegro-vs-latvia/1738379/", srcName: "LiveScore" },
      7: { status: "won", score: "0–2", src: "https://www.tntsports.co.uk/football/uefa-nations-league/2026-2027/live-czechia-spain_mtc20005824/live-commentary.shtml", srcName: "TNT Sports" },
      8: { status: "won", score: "3–1", src: "https://www.aljazeera.com/sports/2026/11/12/italy-fight-back-to-beat-france-3-1-and-move-top-of-nations-league-group", srcName: "Al Jazeera" },
      9: { status: "won", score: "2–1", src: "https://en.africatopsports.com/afcon-2027-ivory-coast-secure-crucial-win-against-gambia/", srcName: "Africa Top Sports" }
    },
    settled: "Settled 23:00 UK: 9 picks, 9 won (100%). Safest 4-leg, Home strength 4-leg and accumulator ZBP93F (5.09) all landed. Mega N6WXCD lost 11 of 12: only Ghana v Somalia Over 2.5 failed (2–0, with a missed penalty).",
    audit: {
      of: "Wednesday 11 November 2026",
      note: "Settled late at 02:05 UK because the scheduled audit didn't run. Each result is checked against the linked report.",
      picks: [
        { fx: "Vietnam v Chinese Taipei", mk: "Home Win", odds: "1.13", score: "2–0", status: "won", src: "https://www.vavel.com/en-us/soccer/2026/11/11/1278798-vietnam-vs-chinese-taipei-live-latest-score-goals-and-friendly-updates.html", srcName: "VAVEL" },
        { fx: "Železiarne Podbrezová v ViOn Zlaté Moravce", mk: "Home Win", odds: "1.24", score: "2–0", status: "won", src: "https://www.denniksport.sk/futbal/c/slovnaft-cup-osemfinale-podbrezova-zlate-moravce-sumar-streda-11-november-2026", srcName: "Denník Šport" },
        { fx: "Hammarby v Spartak Myjava", mk: "Over 2.5 Goals", odds: "1.21", score: "4–0", status: "won", src: "https://www.svt.se/sport/fotboll/hammarby-vidare-i-europa-cup-mots-i-kvartsfinalen", srcName: "SVT" },
        { fx: "Juventus v OL Lyonnes", mk: "Over 2.5 Goals", odds: "1.24", score: "0–6", status: "won", src: "https://www.espn.com/soccer/match/_/gameId/401916984", srcName: "ESPN" }
      ],
      tickets: [
        { name: "Safest 4-leg", total: "2.10", landed: true },
        { name: "Banker double", total: "1.37", landed: true },
        { name: "Full accumulator XLXNT8", total: "2.10", landed: true }
      ],
      lessons: [
        "4 from 4 is variance. The process stays the same.",
        "Elite women's sides against weaker teams are now 4 from 4 on goals markets (3–0, 1–4, 4–0, 0–6).",
        "Big mismatches carried a thin card. Keep the full scan of every league on quiet days."
      ]
    }
  },
  {
    date: "2026-11-11",
    label: "Wednesday 11 November 2026",
    built: "Built 01:30 UK",
    comps: [
      { name: "International Friendly", windows: [ { ko: "12:00 UK", picks: [
        { n: 1, fx: "Vietnam v Chinese Taipei", mk: "Home Win", odds: "1.13" } ] } ] },
      { name: "Slovak Cup", windows: [ { ko: "15:00 UK", picks: [
        { n: 2, fx: "Železiarne Podbrezová v ViOn Zlaté Moravce", mk: "Home Win", odds: "1.24" } ] } ] },
      { name: "Women's Europa Cup", windows: [ { ko: "18:00 UK", picks: [
        { n: 3, fx: "Hammarby v Spartak Myjava", mk: "Over 2.5 Goals", odds: "1.21" } ] } ] },
      { name: "Women's Champions League", windows: [ { ko: "20:00 UK", picks: [
        { n: 4, fx: "Juventus v OL Lyonnes", mk: "Over 2.5 Goals", odds: "1.24" } ] } ] }
    ],
    passes: "Still the international break, so this is a 4-pick card with no Mega. Passed: Sheffield Wednesday v Accrington (dead rubber for Wednesday, rotation, winless in 5), Londrina v Náutico (dead rubber, Náutico fielding reserves), Urawa v Cerezo (Urawa winless in 5 against them), Frankfurt v PSV (first-leg lead, Frankfurt may sit back), India v Maldives (neutral venue in Dhaka, home price without home advantage), Barnsley v Oldham, Leuven v Køge (away favourite), plus lower-league fixtures.",
    tickets: [
      { name: "Safest 4-leg", legs: [
        ["Vietnam v Chinese Taipei: Home Win", "1.13"],
        ["Podbrezová v Zlaté Moravce: Home Win", "1.24"],
        ["Hammarby v Spartak Myjava: Over 2.5", "1.21"],
        ["Juventus v Lyon (W): Over 2.5", "1.24"]
      ], total: "2.10" },
      { name: "Banker double", legs: [
        ["Vietnam v Chinese Taipei: Home Win", "1.13"],
        ["Hammarby v Spartak Myjava: Over 2.5", "1.21"]
      ], total: "1.37" }
    ],
    acca: { code: "XLXNT8", legs: 4, odds: "2.10", booked: "01:28 UK" },
    results: {
      1: { status: "won", score: "2–0", src: "https://www.vavel.com/en-us/soccer/2026/11/11/1278798-vietnam-vs-chinese-taipei-live-latest-score-goals-and-friendly-updates.html", srcName: "VAVEL" },
      2: { status: "won", score: "2–0", src: "https://www.denniksport.sk/futbal/c/slovnaft-cup-osemfinale-podbrezova-zlate-moravce-sumar-streda-11-november-2026", srcName: "Denník Šport" },
      3: { status: "won", score: "4–0", src: "https://www.svt.se/sport/fotboll/hammarby-vidare-i-europa-cup-mots-i-kvartsfinalen", srcName: "SVT" },
      4: { status: "won", score: "0–6", src: "https://www.espn.com/soccer/match/_/gameId/401916984", srcName: "ESPN" }
    },
    settled: "Settled 02:05 UK (late, the scheduled 23:03 audit didn't run): 4 picks, 4 won (100%). Safest 4-leg, banker double and accumulator XLXNT8 all landed.",
    audit: {
      of: "Tuesday 10 November 2026",
      note: "Each result is checked against the linked match report.",
      picks: [
        { fx: "CD Anaitasuna v Alavés", mk: "Over 2.5 Goals", odds: "1.17", score: "1–6", status: "won", src: "https://www.vavel.com/es/futbol/2026/11/10/1278763-anaitasuna-vs-alaves-en-vivo-resultado-goles-copa-del-rey.html", srcName: "VAVEL" },
        { fx: "CD Pamplona v Eibar", mk: "Over 1.5 Goals", odds: "1.16", score: "0–3", status: "won", src: "https://www.noticiasdenavarra.com/futbol/2026/11/10/cd-pamplona-eibar-copa-rey-11743071.html", srcName: "Noticias de Navarra" },
        { fx: "Trival Valderas v Leganés", mk: "Over 1.5 Goals", odds: "1.17", score: "0–1", status: "lost", src: "https://www.cdleganes.com/cronica-trival-valderas-leganes-copa-del-rey-r1", srcName: "CD Leganés" },
        { fx: "Oxford United v Cheltenham", mk: "Home Win", odds: "1.23", score: "4–0", status: "won", src: "https://sports.yahoo.com/articles/leicester-brentford-u21-trophy-knockout-221758203.html", srcName: "Yahoo Sports" },
        { fx: "Real Madrid v Paris FC (W)", mk: "Over 1.5 Goals", odds: "1.13", score: "3–0", status: "won", src: "https://www.realmadrid.com/en-US/news/football/womens-team/reports/cronica-real-madrid-paris-fc-wcl-10-11-2026", srcName: "Real Madrid" },
        { fx: "Inter v Manchester City (W)", mk: "Over 1.5 Goals", odds: "1.14", score: "1–4", status: "won", src: "https://www.skysports.com/football/inter-milan-women-vs-manchester-city-women/578260", srcName: "Sky Sports" }
      ],
      tickets: [
        { name: "Safest 4-leg", total: "1.75", landed: false },
        { name: "Cup 4-leg", total: "1.95", landed: false },
        { name: "Full accumulator VCET8M", total: "2.52", landed: false }
      ],
      lessons: [
        "Over 1.5 failed when a weakened, out-of-form favourite (Leganés, 6 losses in 7) won only 0–1. In cup goals markets, back only favourites in form or ones expected to field strong teams.",
        "Both tickets shared the losing leg. On small cards, keep at least one ticket free of the shakiest pick. Today's banker double has no leg from the weakest picks.",
        "Elite women's sides against weaker teams went 2 for 2 on Over 1.5 (3–0, 1–4). Keep using them on quiet days."
      ]
    }
  },
  {
    date: "2026-11-10",
    label: "Tuesday 10 November 2026",
    built: "Built 01:40 UK",
    comps: [
      { name: "Copa del Rey", windows: [ { ko: "18:00 UK", picks: [
        { n: 1, fx: "CD Anaitasuna v Alavés", mk: "Over 2.5 Goals", odds: "1.17" },
        { n: 2, fx: "CD Pamplona v Eibar", mk: "Over 1.5 Goals", odds: "1.16" } ] }, { ko: "19:00 UK", picks: [
        { n: 3, fx: "Trival Valderas v Leganés", mk: "Over 1.5 Goals", odds: "1.17" } ] } ] },
      { name: "EFL Trophy", windows: [ { ko: "19:00 UK", picks: [
        { n: 4, fx: "Oxford United v Cheltenham", mk: "Home Win", odds: "1.23" } ] } ] },
      { name: "Women's Champions League", windows: [ { ko: "17:45 UK", picks: [
        { n: 5, fx: "Real Madrid v Paris FC", mk: "Over 1.5 Goals", odds: "1.13" } ] }, { ko: "20:00 UK", picks: [
        { n: 6, fx: "Inter v Manchester City", mk: "Over 1.5 Goals", odds: "1.14" } ] } ] }
    ],
    passes: "International break, so this is a small cup-and-women's card. No Mega today: there aren't 12+ verified legs that meet the rules. Passed: Tavernes v Valencia (no odds offered), Leicester v Walsall (conflicting rotation news), Stockport, Huddersfield and Plymouth (dead rubbers, rotation likely), Grimsby (bottom of group), Roma v Servette (Roma 1 point from 3), Häcken v Chelsea (away favourite, Chelsea have scored only 3 in 3), PSG v Bayern, plus lower-league and amateur fixtures.",
    tickets: [
      { name: "Safest 4-leg", legs: [
        ["Real Madrid v Paris FC (W): Over 1.5", "1.13"],
        ["Inter v Man City (W): Over 1.5", "1.14"],
        ["Pamplona v Eibar: Over 1.5", "1.16"],
        ["Trival Valderas v Leganés: Over 1.5", "1.17"]
      ], total: "1.75" },
      { name: "Cup 4-leg", legs: [
        ["Anaitasuna v Alavés: Over 2.5", "1.17"],
        ["Pamplona v Eibar: Over 1.5", "1.16"],
        ["Trival Valderas v Leganés: Over 1.5", "1.17"],
        ["Oxford v Cheltenham: Home Win", "1.23"]
      ], total: "1.95" }
    ],
    acca: { code: "VCET8M", legs: 6, odds: "2.52", booked: "01:38 UK" },
    results: {
      1: { status: "won", score: "1–6", src: "https://www.vavel.com/es/futbol/2026/11/10/1278763-anaitasuna-vs-alaves-en-vivo-resultado-goles-copa-del-rey.html", srcName: "VAVEL" },
      2: { status: "won", score: "0–3", src: "https://www.noticiasdenavarra.com/futbol/2026/11/10/cd-pamplona-eibar-copa-rey-11743071.html", srcName: "Noticias de Navarra" },
      3: { status: "lost", score: "0–1", src: "https://www.cdleganes.com/cronica-trival-valderas-leganes-copa-del-rey-r1", srcName: "CD Leganés" },
      4: { status: "won", score: "4–0", src: "https://sports.yahoo.com/articles/leicester-brentford-u21-trophy-knockout-221758203.html", srcName: "Yahoo Sports" },
      5: { status: "won", score: "3–0", src: "https://www.realmadrid.com/en-US/news/football/womens-team/reports/cronica-real-madrid-paris-fc-wcl-10-11-2026", srcName: "Real Madrid" },
      6: { status: "won", score: "1–4", src: "https://www.skysports.com/football/inter-milan-women-vs-manchester-city-women/578260", srcName: "Sky Sports" }
    },
    settled: "Settled 23:15 UK: 6 picks, 5 won, 1 lost (83%). Both 4-leg tickets and accumulator VCET8M lost on Trival Valderas v Leganés, which finished 0–1 and needed two goals.",
    audit: null
  },
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

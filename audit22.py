# 22 Nov results for the 23 Nov audit block. Salzburg and Guadalajara are still open (None).
SL=[("0 total corners: 2–1 (6 corners)","lost","https://www.espn.co.uk/football/team-stats/_/gameId/401875545/league/ned.1","ESPN"),
("4–0","won","https://www.espn.com/soccer/match/_/gameId/401875008","ESPN"),
("3–2 (Barça 10 corners)","won","https://www.espn.com/soccer/team-stats/_/gameId/401882804","ESPN"),
("3–0 (Ajax 8 corners)","won","https://www.espn.co.uk/football/match/_/gameId/401875547","ESPN"),
("3–2","won","https://gnkdinamo.hr/hr/utakmice/366","Dinamo Zagreb"),
("4–0","won","https://www.espn.com/soccer/match/_/gameId/401876397/angers-paris-fc","ESPN"),
("3–1","won","https://www.espn.com/soccer/match/_/gameId/401884733","ESPN"),
("2–0","won","https://www.espn.co.uk/football/match/_/gameId/401896726/ofi-crete-panathinaikos","ESPN"),
("2–0","won","https://www.fanatik.com.tr/futbol/ozet-bursaspor-super-lige-goz-kirpiyor-bursaspor-sivasspor-mac-sonucu-2-0-2645414","Fanatik"),
("0–3","won","https://www.beinsports.com/en-us/soccer/la-liga/articles/getafe-0-3-atletico-madrid-simeone-makes-laliga-history-in-dominant-win-2026-11-22","beIN Sports")]
SL[0]=("2–1 (6 corners)",)+SL[0][1:]
MID=[("2–0 (HT 0–0)","won","https://www.skysports.com/football/hull-city-vs-brighton-and-hove-albion/559549","Sky Sports"),
("4–0 (20 corners)","won","https://www.sportsmole.co.uk/football/liverpool/result/mauricio-mauled-in-man-utd-debut-as-liverpool-demolish-10-man-red-devils_609619.html","Sports Mole"),
("5–1","won","https://www.espn.in/football/match/_/gameId/401874989","ESPN"),
("1–0","won","https://www.skysports.com/football/anderlecht-vs-oud-heverlee-leuven/559203","Sky Sports"),
("1–0","won","https://www.espn.com/soccer/match/_/gameId/401882801","ESPN"),
("4–4","won","https://www.flashscore.com/news/soccer-serie-a-atalanta-inter-report-22-11-2026/x2BedwMc/","Flashscore"),
("5–0","lost","https://sport.tv2.dk/live/fodbold/2026-11-22-superligaen-fc-nordsjaelland-fc-koebenhavn","TV2"),
("1–1","won","https://www.espn.com/soccer/match/_/gameId/401875047/udinese-bologna","ESPN"),
("3–2","won","https://www.espn.com/soccer/match/_/gameId/401882800","ESPN"),
("0–1","won","https://www.aa.com.tr/tr/spor/goztepe-deplasmandan-3-puanla-ayrildi/4133530","Anadolu"),
("3–0","lost","https://espndeportes.espn.com/futbol/partido/_/juegoId/401882300","ESPN Deportes")]
MEGA=[("4–0","won","https://www.foxsports.com/soccer/bundesliga-werder-bremen-vs-hamburg-sv-nov-22-2026-game-boxscore-912633","FOX Sports"),
("0–0","lost","https://africa.espn.com/football/match/_/gameId/401874558","ESPN"),
("1–1","lost","https://sportnet.sme.sk/spravy/futbal-kosice-skalica-vysledok-dnes-15-kolo-nike-liga-2026-2027/","Sportnet"),
("2–0","won","https://nk-rijeka.hr/rijeka-gorica-20-kabadayi-i-fruk-za-kisnu-pobjedu/","HNK Rijeka"),
("0–1","lost","https://www.espn.co.uk/football/match/_/gameId/401878936","ESPN"),
("3–1 (Rosario 4 corners)","lost","https://www.futbolargentino.com/primera-division/rosario-central-vs-gimnasia-mendoza-22-noviembre-2026-torneo-clausura---liga-profesional-de-argentina-m3275262","Fútbol Argentino"),
("3–4","won","https://www.vavel.com/en/football/2026/11/22/1280294-kfum-oslo-vs-sk-brann-live-score-updates-stream-info-and-results-in-eliteserien.html","VAVEL"),
("2–2","won","https://vglive.vg.no/fotball/event/kristiansund-sandefjord/731156","VG"),
("1–2","won","https://www.espn.co.uk/football/match/_/gameId/401878934","ESPN"),
None,None,
("4–2","won","https://www.espn.com/soccer/match/_/gameId/401841318","ESPN"),
("0–0","lost","https://www.espn.in/football/match/_/gameId/401841321/vasco-da-gama-red-bull-bragantino","ESPN")]
R=lambda t:'null' if t is None else '{ status: "%s", score: "%s", src: "%s", srcName: "%s" }'%(t[1],t[0],t[2],t[3])
LESSONS=["Slate R9MZ7V went 9 of 10 and lost only on Twente v Willem II Over 8.5 total corners: Twente won 6 corners and Willem II none. When the underdog is bottom and sits deep, total corners depends on the favourite alone, so use the favourite's own corner line (Barcelona's 10 and Ajax's 8 both cleared 5.5).",
"Medium MFHEKF went 9 of 11. It lost on Copenhagen to score (Nordsjælland won 5–0) and on Córdoba v Oviedo GG (3–0). Away-to-score and GG at 1.26–1.54 are the soft spots; 2H Over 0.5, corners, home wins, 1X and the over/under legs all won.",
"Mega N5SRW1 lost early: Viborg 0–0, Košice 1–1, Union won only 0–1, and Rosario took just 4 corners. Rosario's game was a single-leg knockout, so it was cagier than usual: avoid corner lines in cup knockouts. Home wins at 1.53–1.65 went 1 of 3 again."]

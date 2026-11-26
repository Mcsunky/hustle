# 25 Nov results for the 26 Nov audit block. SL = V5V1CK (data.js order); S2 = TQ9VBG (slate2 order); Potosí pending (None).
SL=[("0–1 (HT 0–0, 1 second-half goal)","won","https://www.skysports.com/football/slavia-prague-vs-villarreal/9091404031337954232","Sky Sports"),
("4–1","won","https://www.fotmob.com/matches/boreham-wood-vs-aldershot-town/zpyse","FotMob"),
("2–1","won","https://www.skysports.com/football/stoke-city-vs-millwall/report/560700","Sky Sports"),
("0–3","lost","https://www.espn.com/soccer/report/_/gameId/401915292","ESPN"),
("2–1 (Bayern 4 corners)","lost","https://africa.espn.com/football/match/_/gameId/401915377","ESPN"),
("2–2","won","https://www.espn.co.uk/football/match/_/gameId/401915374","ESPN")]
S2=[("3–0","won","https://www.alweeam.com.sa/1302415/2026/first-division-results-wednesday-november-25-2026-ula-adalah-3-0","Alweeam"),
("6–1","won","https://www.rtvslo.si/sport/nogomet/tabor-sezana-v-cetrtfinalu-pokala-slovenije/801228","RTV SLO"),
("1–0","won","https://www.the-afc.com/en/club/afc_champions_league_two.html/news/group-b-al-jazira-club-uae-1-0-golgohar-sirjan-irn","AFC"),
("1–3","won","https://www.skysports.com/football/news/13610529/bolton-wanderers-1-3-west-bromwich-albion-aune-heggebo-nets-twice-in-baggies-win","Sky Sports"),
("2–2","won","https://www.espn.com/soccer/report/_/gameId/401915373","ESPN"),
("2–0","won","https://www.espn.com/soccer/match/_/gameId/401915291/viking-fk-atletico-madrid","ESPN"),
("0–0","lost","https://www.vision360.bo/noticias/2026/11/25/78975-always-ready-empata-en-potosi-y-se-consagra-por-primera-vez-campeon-del-torneo-seriado","Visión 360")]
R=lambda t:'null' if t is None else '{ status: "%s", score: "%s", src: "%s", srcName: "%s" }'%(t[1],t[0],t[2],t[3])
NAMES=[("Slavia Prague v Villarreal","2nd Half Multigoals 1–3","1.28"),("Boreham Wood v Aldershot","Home Win","1.20"),("Stoke v Millwall","Home to Score (Stoke Over 0.5)","1.27"),("Club Brugge v Liverpool","Home to Score (Brugge Over 0.5)","1.26"),("Lille v Bayern Munich","Bayern Over 4.5 Corners","1.45"),("PSG v Roma","Over 2.5 Goals","1.32")]
LESSONS=["The proven model beat the scouts' Slate on the same day. Fallback TQ9VBG went 6 of 7, losing only on Real Potosí 0–0 Always Ready (Over 1.5 in a cup final the away side only needed to protect) (home wins Al Ula 3–0, Tabor 6–1, Atlético 2–0, Al Jazira 1X, and Over 1.5 in Bolton 1–3 and Sporting 2–2). Scouts Slate V5V1CK went 4 of 6 and lost on Brugge to score (0–3 v Liverpool) and Bayern corners (4).",
"Team-to-score and team-corner lines lost again (Brugge, Bayern; Boro and Copenhagen before them). The user's call to drop them from the Slate is backed by the data: keep them for the Medium or Mega only.",
"2nd Half Multigoals 1–3 won on its first use (Slavia 0–1, one second-half goal)."]

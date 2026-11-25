# 24 Nov results for the 25 Nov audit block (Slate L3F0UQ, data.js order).
SL=[("2–1 (Boro 3 corners)","lost","https://www.espn.co.uk/football/team-stats/_/gameId/401880145/league/eng.2","ESPN"),
("1–1","won","https://www.ntfc.co.uk/news/2026/november/24/match-report--port-vale-v-northampton-town","Northampton Town"),
("2–2 (City 9 corners)","won","https://www.espn.co.uk/football/match/_/gameId/401915379","ESPN"),
("3–1","won","https://www.espn.com/soccer/match/_/gameId/401915299","ESPN"),
("1–0","lost","https://www.beinsports.com/en-us/soccer/uefa-champions-league/articles/como-1-0-aek-athens-milla-stunner-spares-da-cunhas-penalty-miss-2026-11-24","beIN Sports"),
("0–1","won","https://www.espn.co.uk/football/match/_/gameId/401915294","ESPN")]
R=lambda t:'{ status: "%s", score: "%s", src: "%s", srcName: "%s" }'%(t[1],t[0],t[2],t[3])
NAMES=[("Middlesbrough v Swansea","Middlesbrough Over 4.5 Corners","1.21"),("Port Vale v Northampton","Under 3.5 Goals","1.24"),("Man City v Napoli","Man City Over 4.5 Corners","1.24"),("RB Leipzig v Lens","Leipzig Over 1.5 Goals","1.29"),("Como v AEK Athens","Over 2.5 Goals","1.34"),("Feyenoord v Porto","Away to Score (Porto Over 0.5)","1.20")]
LESSONS=["Slate L3F0UQ went 4 of 6 and lost. Middlesbrough took only 3 corners (Swansea kept the ball in a 2–1 game, the 'score and sit' path the corners scout named), and Como beat AEK 1–0 (Over 2.5 lost to exactly the 1–0/2–0 path the Chief Punter called weakest). City 9 corners, Leipzig 3 goals, Porto scoring and Port Vale 1–1 all won.",
"The 'no padding' call was right: the six rejected candidates went 3 of 6 (Real Madrid 5–1, Galatasaray scored and Chapecoense 3–0 Under 4.5 won; Cardiff 0–4 Preston 1X, Forest Green 0–2 Over 2.5 and Bodø's 4 corners all lost). Padding would have made a bigger slip that still lost.",
"Corners for a favourite against a side that keeps the ball (Swansea) are weaker than against a deep block (Napoli gave City 9). The corners scout should check the opponent's possession style, not just corners conceded."]

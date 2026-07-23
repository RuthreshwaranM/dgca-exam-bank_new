/* ============================================================
   DGCA EXAM BANK — SUBJECT: Air Navigation
   ------------------------------------------------------------
   HOW TO ADD A CHAPTER
   ------------------------------------------------------------
   Copy this pattern for each chapter (see data/radio-navigation.js
   for a fully worked example with real questions):

   registerChapterText("air-navigation", "chapter-id", "Chapter Display Name", `
   1. Question text goes here?
   a. Wrong option
   *b. Correct option
   c. Wrong option
   d. Wrong option
   Explanation: optional.

   2. Next question...
   a. ...
   *b. ...
   c. ...
   d. ...
   `);

   Full format reference (images, multi-line questions, etc.)
   is documented at the top of js/parser.js.
   ============================================================ */

registerSubject("air-navigation", "Air Navigation");

// Paste your first registerChapterText(...) call below this line.
registerChapterText("air-navigation", "PET-&-PSR-ASSIGNMENT", "PET-&-PSR-ASSIGNMENT", `
1. What is the distance to the point of safe endurance if an aircraft has a TAS of 300 knots and a 
safe endurance of 10 hours, if the wind component on the outbound leg is 50 knots headwind? 
*a. 1458 nm 
b. 1505 nm 
c. 1554 nm 
d. 1625 nm 

2. What is the time to the point of safe return (PSR) if the distance from A to B is 2368 nautical 
miles, the outbound groundspeed in 365 knots, the homebound groundspeed is 480 knots, and 
safe endurance is 8 hours 30 minutes? 
a. 190 min. 
b. 209 min. 
c. 219 min. 
*d. 290 min. 

3. What is the distance from ‘Q’ to the point of safe return (PSR) for an aircraft that was over ‘Q’ at 
1320 hours flying direct to ‘R’, give the following data? Distance ‘Q’ TO ‘R’ 3016nm, True 
airspeed 480 kt, safe endurance 10 hours, if the mean wind component ‘outbound’ -90 kt, and 
the mean wind component ‘homebound’ is +75kt. 
a. 1320 nm. 
b. 1530 nm. 
*c. 2290 nm. 
d. 2375 nm. 

4. What is the distance to B from the equal-time-point given the following data? 
Distance A to B is 360nm      TAS is  180kts      
Wind component A-B is -15kt 
Wind component B-A is +15kt 
*a. 165 nm. 
b. 170 nm. 
c. 175 nm. 
d. 180 nm. 

5. An aircraft is flying at a TAS of 300 knots over a stretch of water between 2 airfields 500 nm 
apart. What is the distance from the first airfield to the equal time point (ETP) if the wind 
component is 60 Knots head? 
a. 200 nm. 
b. 250 nm. 
c. 280 nm. 
*d. 300 nm. 

6. How far can the aeroplane fly out from base and return in our hour, when flying at TAS 180 kt 
on a track of 090°, if the W/V is 045°/50kt? 
*a. 85 nm. 
b. 57 nm. 
c. 88 nm. 
d. 175 nm. 

7. For a distance of 1860 NM between Q and R, a ground speed ‘’out’’ of 385 kt, a ground speed 
’’back’’ of 465 kt and an endurance of 8 HR (excluding reserves) the distance from Q to the point 
of safe return (PSR) is? 
*a. 1685 NM. 
b. 1532 NM. 
c. 930 NM. 
d. 1865 NM. 

8. Two points A to B are 1000 NM apart. TAs = 490 kt. On the flight between A to B the equivalent 
headwind is -20 kt. On the return leg between B and A, the equivalent headwind is +40 kt. What 
distance form A, along the route A to B, is the Point of Equal Time (PET)? 
a. 470 NM. 
b. 455 NM. 
c. 500 NM. 
*d. 530 NM. 

9. An aeroplane is flying at TAS 180 kt on a track of 090°. The W/V is 045°/50 kt. How far can the 
aeroplane fly out from its base and return in our hour? 
a. 57 NM. 
b. 88 NM. 
*c. 85 NM. 
d. 176 NM. 

10. Given: Distance ‘A’to’B’ 2346 NM, groundspeed ‘out’ 365 kt, Groundspeed ‘back’ 480 kt. The 
time from ‘A’ to the point of Equal time  (PET) between ‘A’ and ‘B’? 
a. 167 MIN. 
*b. 219 MIN. 
c. 290 MIN. 
d. 197 MIN. 

11. Given: Distance ‘A’ to ‘B’ 2346 NM, Groundspeed ‘out’ 365 kt, Groundspeed ‘back’ 480kt, 
endurance 8 HR 30 MIN. The time from ‘A’ to the point of safe return (PSR) ‘A’ is? 
*a. 290 MIN. 
b. 219 MIN. 
c. 197 MIN. 
d. 209 MIN. 

12. An aircraft was over ‘A’ at 1435 hours flying direct to ‘B’. Given: Distance ‘A’ to ‘B’ 2900 NM, 
true airspeed 470 kt, Mean wind component ‘out’ +55kt, Mean wind component ‘Back’ -75 kt. 
The ETA for reaching the point of Equal Time (PET) between ‘A’ and ‘B’ is? 
a. 1744. 
b. 1846. 
c. 1721. 
*d. 1657. 

13. An aircraft was over ‘A’ at 1435 hours flying to ‘B’. Given: Distance ‘A’ To ‘B’ 2900 NM, True 
airspeed 470 kt, Mean wind component ‘out’ +55 kt, Mean wind component ‘back’ -75 kt, safe 
endurance 9 HR 30 MIN. The distance from ‘A’ to the point of safe return (PSR) ‘A’ is? 
a. 2844 NM. 
*b. 2141 NM. 
c. 1611 NM. 
d. 1759 NM. 

14. Given: Distance ‘A’ to ‘B’ 2484 NM, groundspeed ‘out’ 420kt, Groundspeed ‘back’ 500 kt. The 
time from ‘A’ to the point of Equal Time (PET) between ‘A’ and ‘B’ is? 
*a. 193 MIN. 
b. 163 MIN. 
c. 173 MIN. 
d. 183 MIN. 

15. Given: Distance ‘A’ to ‘B’ 2484 NM, Mean groundspeed ‘out’ 420 kt, Mean groundspeed 
‘back’500 kt, Safe endurance 08 HR 30 MIN. The distance from ‘A’ to the Point of Safe Return 
(PSR) ‘A’? 
a. 1630 NM. 
*b. 1940 NM. 
c. 1908 NM. 
d. 1736 NM.  

16. An aircraft was over ‘Q’ at 1320 hours flying direct to ‘R’. Given: Distance ‘Q’ to ‘R’ 3016 NM, 
True airspeed 480 kt, Mean wind component ‘out’ -90 kt, Mean wind component ‘back’ +75 kt, 
safe endurance 10:00HR. The distance from ’Q’ to the point of Safe Return (PSR) ‘Q’ is? 
a. 1510 NM. 
*b. 2290 NM. 
c. 2370 NM. 
d. 1310 NM. 

17. Given: Distance ‘A’ to ‘B’ 1973 NM, Groundspeed ‘out’ 430 kt, Groundspeed ‘back’ 385 kt. The 
time from ‘A’ to the point of Equal Time (PET) between ‘A’ and ‘B’ is? 
*a. 130 MIN. 
b. 145 MIN. 
c. 162 MIN. 
d. 181 MIN. 

18. Given: Distance ‘A’ to ‘B’ 1973 NM, Groundspeed ‘out’ 430 kt, Groundspeed ‘ back’ 385 kt, Safe 
endurance 7 HR 20 MIN. the distance from ‘A’ to the point of Safe Retrun (PSR) ‘A’ is? 
a. 1664 NM. 
b. 1698 NM. 
c. 1422 NM. 
*d. 1490 NM. 

19. Given: Distance ‘Q’ to ‘R’ 1760 NM, Groundspeed ‘out’ 435 kt, Groundspeed ‘back’ 385 kt, safe 
endurance 9 HR. The distance from ‘Q’ to the point of Safe Return (PSR) between ‘Q’ and ‘R’ is? 
a. 1467 NM. 
b. 1642 NM. 
*c. 1838 NM. 
d. 1313 NM. 

20. Given: Distance ‘Q’ to ‘R’ 1760 NM, Groundspeed ‘out’ 435kt, Groundspeed ‘back’ 385 kt. The 
time from ‘Q’ to the point of Equal Time (PET) between ‘Q’ and ‘R’ is? 
a. 110 MIN. 
b. 106 MIN. 
c. 102 MIN. 
*d. 114 MIN. 

21. Given: Distance ‘A’ to ‘B’ 3623 NM, Groundspeed ‘out’ 370 kt, Groundspeed ‘back’ 300 kt. The 
time from ‘A’ to the point of Equal Time (PET) between ‘A’ and ‘B’ is? 
a. 238 MIN. 
*b. 263 MIN. 
c. 288 MIN. 
d. 323 MIN. 

22. Given: Distance ‘Q’ to ‘R’ 1860 NM, Groundspeed ‘out’ 400 kt, Groundspeed ‘back’ 370 kt, Safe 
endurance 7 HR. The distance from ‘Q’ to the point of Safe Return (PSR) between ’Q’ and ‘R’ is? 
*a. 1345 NM. 
b. 1442 NM. 
c. 1538 NM. 
d. 1313 NM. 

23. Given: Distance ‘Q’ to ‘R’ 1970 NM, Groundspeed ‘out’ 475 kt, Groundspeed ‘back’ 485 kt, Safe 
endurance 9 HR. The distance from ‘Q’ to the point of Safe Return (PSR) between ‘Q’ and ‘R’ is? 
a. 1967 NM. 
b. 2142 NM. 
*c. 2160 NM. 
d. 2313 NM. 

24. Given: Distance ‘Q’ to ‘R’ 2160 NM, Groundspeed ‘out’ 535 kt, Groundspeed ‘back’ 585 kt, Safe 
endurance 6 Hr. The distance from ‘Q’ to the point of Safe Return (PSR) between ‘Q’ and ‘R’ is? 
a. 1667 NM. 
*b. 1677 NM. 
c. 1613 NM. 
d. 1775 NM. 

25. Given : Distance ‘Q’ to ‘R’ 2467 NM, Groundspeed ‘out’ 500kt, Groundspeed ‘back’ 400 kt, Safe 
endurance 9.5 HR. The Distance from ‘Q’ to the point of Safe Return (PSR) between ‘Q’ and ‘R’ 
is?    
*a. 2111 NM. 
b. 2001 NM. 
c. 2175 NM. 
d. 2167 NM. 

26. What is the distance to the point of safe endurance if an aircraft has a TAS of 350 knots and a 
safe endurance of 10 hours, if the wind component on the outbound leg is 50 knots headwind? 
*a. 1714nm. 
b. 1750nm. 
c. 1754nm. 
d. 1725nm. 

27. What is the time to the point of safe return (PSR) is the distance from A to B is 3000 nautical 
miles, the outbound groundspeed in 350 knots, the homebound groundspeed is 460 knots, and 
safe endurance is 8 hours 30 minutes? 
a. 209 min. 
b. 190 min. 
c. 229 min. 
*d. 290 min. 

28. What is the distance from ‘Q’ to the point of Safe Return (PSR) for an aircraft that was over ‘Q’ 
at 1400 hours flying direct to ‘R’, given the following data? Distance ‘Q’ to ‘R’ 3050nm. True airspeed 480kts, safe endurance 10 hours, if the mean wind 
component ‘outbound’ -90kts, and the mean wind component ‘homebound’ is +75kts. 
*a. 2290 nm. 
b. 1530 nm. 
c. 2190 nm. 
d. 2375 nm. 

29. What is the distance to B from the equal-time-point given the following data? 
Distance A to B is 560 nm                          wind component A-B is -15 kt 
TAS is 280 kt                                      wind component B-A is +15 kt            
*a. 265 nm. 
b. 270 nm. 
c. 275 nm. 
d.  280 nm. 


30. An aircraft is flying at a TAS of 500 knots over a stretch of water between 2 airfields 700 nm 
apart. What is the distance from the first airfield to the equals time points (ETP) if the wind 
component is 60 Knots head? 
a. 300 nm. 
b. 350 nm. 
c. 380 nm. 
*d. 392 nm. 

31. How far the aeroplane fly out from its base and return in our hour, when flying at TAS 260 kt on 
a track of 090°, if the W/V is 045°/50 kt? 
a. 158 nm. 
*b. 126 nm. 
c. 188 nm. 
d. 175 nm. 
   `);

registerChapterText("air-navigation", "CIRCLES-ASSIGNMENT", "CIRCLES-ASSIGNMENT", `
1. The distance along the meridian between 63 55 N and 13 47 S is? 
*a. 4662 nm. 
b. 5008 nm. 
c. 7702 nm. 
d. 3008nm. 

2. What is the length of one degree of longitude at latitude 60 degrees south? 
*a. 30 mn. 
b. 90 mn. 
c. 60 mn. 
d. 52 mn. 

3. Given. Position A 45° N,?°E, Position B 45° 15’E Distance A-B = 280 NM, B is to the East of A, 
what is the longitude of position A? 
*a. 38°39’E. 
b. 49°57’E. 
c. 51°51’E. 
d. 40°33’E. 

4. What is the longitude of a position 6 NM to the east of 58°42’N 094° 00’W? 
a. 093°53.1’W. 
b. 094°12.0’W. 
*c. 093°48.5’W. 
d. 093°54.0’W. 

5. An aircraft at position 60°N 005°W tracks 090° (T) for 315 km. On completion of the flight the 
longitude will be? 
a. 002°10’W. 
b. 000°15’E. 
*c. 000°40’E. 
d. 005°15’E. 

6. The ‘departure’ between positions 60°N 160°E and 60°N ‘x’ is 900 NM. What is the longitude of 
‘x’? 
*a. 170°W. 
b. 140°W. 
c. 145°E. 
d. 175°E. 

7. The departure between positions 60°N 160°E and 60°N ‘x’ is 900 NM. What is the longitude of   
‘x ‘? 
*a. 160°W. 
b. 140°W. 
c. 145°E. 
d. 175°E. 

8. The ‘departure’ between positions 60°N 60°E and 60°N ‘x’ is 1800 NM East. What is the 
longitude of ‘x’? 
a. 145°E. 
b. 145°E. 
*c. 120°E. 
d. 120°W. 

9. An aircraft departs from position A (04°10’S 178°22’W) and files northward following the 
meridian for 2950 NM. It then flies westward along the parallel of latitude for 382 NM to 
position B. The Co ordinates of position B are? 
a. 53°20’N 172°38’E. 
*b. 45°00’N 172°38’E. 
c. 53°20’N 169°22W. 
d. 45°00’N 169°22W. 

10. Given: Position A 45° N,?° E, Position B 45°N, 45°15’E Distance A-B = 350 NM, B is to East of A, 
What is the longitude of position A? 
*a. 37°00’E. 
b. 48°00’E. 
c. 51°15’E. 
d. 8°15’E. 

11. Given: Position A 45° N, ?°E, Position B 45°N, 45°15’E Distance A-B = 200 NM, B is to the East of 
A, What is the longitude of position A? 
a. 51°20’E. 
b. 48°33’E. 
*c. 40°32’E. 
d. 51°58’E. 

12. An aircraft follows a radial to a VOR? DME station. At 10:00 the DME reads 120 nm. AT 10:03 the 
DME reads 105nm. The estimated time overhead the VOR/DME station is? 
*a. 10:24 
b. 10:18 
c. 10:21 
d. 10:27 

13. What is the longitude of a position 15 NM to the east 58°42’N 094°00’W? 
a. 093°51.3’W. 
b. 094°13.0’W. 
*c. 093°31.1’W. 
d. 122°31.1’W. 

14. An aircraft at  position 60°N 005° W tracks 090° (T) for 350 km. On completion of the flight the 
longitude will be? 
*a. 002°10’W. 
b. 000°15’E. 
c. 001°19’E. 
d. 001°19’W. 

15. What is the final position after the following rhumb  line track and distances have been followed 
from position 60°00’N 030°00’W? south for 3600 NM, East for 3600NM North for 3600NM, 
West for 3600 NM? 
a. 59°00’N 090°00’W. 
*b. 60°00’N 090°00’W. 
c. 60°00’N 030°00’E. 
d. 59°00’N 060°00’W. 

16. An aircraft flies the following rhumb track and distance from position 04°00’N 030°00’W; 600 
NM south, then 600 NM East, then 600 Nm North, then 600 NM West. The final position of the 
aircraft is? 
a. 04°00’N 030°00’W. 
b. 03°58’N 030°02’W. 
*c. 04°00’N 029°58’W. 
d. 04°00’N 030°02’W. 

17. A great circle on the Earth running from the North Pole to the South Pole is called? 
*a. A meridian. 
b. A longitude. 
c. A difference of longitude. 
d. A parallel of latitude. 

18. What is the rhumb line distance, in nautical miles, between two positions on latitude 60 degrees 
N, that are separated by 10 degrees of longitude? 
a. 520nm. 
*b. 300nm. 
c. 866nm. 
d. 600nm. 

19. An aircraft is in position (86N 020E). When following a rhumb line track of 085(T) will? 
*a. Follow a line which lies first to the north of the parallel of 86N but after having passed a DL of 180 to the south of it. 
b. Follow a small circle which lies to the north of the parallel of 86N. 
c. Fly to the north pole via an arbitrary line. 
d. Fly via a spiral to the north pole. 

20. The initial great circle track from A to B is 080 degrees, and the rhumb line track is 083 degrees. 
What is the initial great circle track from B to A and in which hemisphere are two positions? 
*a. 266 degrees and in the northern hemisphere. 
b. 260 degrees and in the northern hemisphere. 
c. 260 degrees and in the southern hemisphere. 
d. 266 degrees and in the southern hemisphere. 

21. The great circle bearing of position B from position A in the northern hemisphere is 040 degrees. 
If the conversion angle is 4 degrees, what is the great circle bearing of A from B? 
*a. 228 degrees. 
b. 212 degrees. 
c. 224 degrees. 
d. 220 degrees. 

22. In the northern hemisphere the rhumb line track from position A to B is 230 degrees. The 
convergence is 6 degrees, and the difference in longitude is 10 degrees. What is the initial 
rhumb line track from B to A? 
*a. 050 degrees. 
b. 056 degrees. 
c. 053 degrees. 
d. 047 degrees. 

23. The great circle track measured at A(45 00 N 010 00 W) from A to B (45 00 N 019 00 W) is 
approximately? 
a. 270 
b. 93 
c. 90 
*d. 273 

24. A rhumb line from a position 86N 30W has an initial track of 085 (T) is it? 
a. A random northerly track to the pole. 
b. Initially north 86N, then 180 then later south of 86N 
c. A small circle to the north pole. 
*d. A spiral to the north pole. 

25. The great circle track measured at A (4500N 01000W) from A to B (4500N 01900W) is 
approximately? 
*a. 273 degrees. 
b. 090 degrees. 
c. 093 degrees. 
d. 270 degrees. 

26. If you are flying along a parallel of latitude, you are flying? 
a. A Great circle track. 
b. On a north-south track. 
*c. A rhumb line track. 
d. On a track which is constantly changing direction. 

27. An aircraft follows a great circle in the northern hemisphere. At a certain moment the aircraft is 
in the position on the great circle where the great circle direction is 270(T).Continuing on the 
great circle the? 
*a. Track angle will decrease and the latitude will decrease. 
b. Track angle will increase and the latitude will increase. 
c. Track angle will increase and the latitude decrease. 
d. Track angle will decrease ant the latitude increase. 

28. How does the convergence of any two meridians on the Earth change with varying latitude? 
a. It decreases with decrease of latitude. 
b. It changes with cosine of latitude. 
c. It is of constant value and does not change with latitude. 
*d. It changes with the sine of latitude. 

29. Which statement about meridians is correct? 
a. The plane of a meridians is parallel to the equator. 
b. All meridians are parallel with the meridians at Greenwich. 
*c. A meridians and its anti-meridian form a complete great circle. 
d. A meridian from a complete great circle. 

30. When flying on a constant great circle tracking westerly the southern hemisphere you will? 
*a. Experience an increase in value of true track. 
b. Experience a decrease in value of true track. 
c. Fly a spiral and finally end up at the south pole. 
d. Always have the rhumb line track between the departure point and the destinations to the left 
of your great circle track. 

31. A great circle track joins positions A (59°S 141°W) and B (61°S 148°W). What is the difference 
between the great circle track at A to B? 
*a. It increases by 6°. 
b. It decreases by 6°. 
c. It increases by 3°. 
d. It decreases by 3°. 

32. What is the great circle track (measured from the starting positions) from 70°S 030°W, to 
70°S 060°E? 
a. 048°T 
b. 090°T 
*c. 132°T 
d. 228°T 

33. Which of the following difference in latitude will produce the greatest difference between the 
initial great circle track and the mean great circle track, between two points, which are 
separated by 10°change of longitude? 
a. 30°S and 25°S. 
b. 30°S and 30°N. 
*c. 60°S and 55°N. 
d. 60°S and 60°S. 

34. The Great Circle bearing of ‘B’ (70°S 060°E), from ‘A’ (70°S 030°W), is approximately? 
a. 150°(T). 
b. 090°(T). 
c. 315°(T). 
*d. 135°(T). 

35. An aircraft with its autopilot connected to its inertial system, files from point A at Point A at 45°S 
010°W, to point B at 45°S 030°W. What is the true course of the aircraft (to the nearest degree) 
when It arrives at B? 
a. 265° 
b. 275° 
*c. 277° 
d. 286° 

36. An aeroplane flies from A (59°S 142°W) to B (61°S 148°W) with a TAS of 480 kt. The autopilot is 
engaged and coupled with an inertial navigation system in which AB track is active. On route AB, 
the true track? 
a. Varies by 10°. 
b. Decrease by 6°. 
c. Varies by 4°. 
*d. Increase by 5°. 

37. The automatic fight control system is coupled to the guidance outputs from an inertial 
navigation system.Which pair of latitudes will give the greatest difference between initial track 
reads-out and the average true course given, in each case, a difference of longitude of 10°? 
*a. 60°N to 60°N. 
b. 60°N to 50°N. 
c. 30°S to 30°N. 
d. 30°S to 25°S. 

38. Position A is 55°N 030°W and is 54°N 020°W. What is the rhumb line bearing from A to B, if the 
great circle track from A to B, measured at A, is 100°T? 
a. 110°T. 
b. 284°T. 
*c. 104°T. 
d. 090°T. 

39. An aircraft travels from point A to B using the autopilot connected to the aircraft inertial system. 
The coordinates of A (45°S 010°W) and (45°S 030°W) have been entered. The true course of the 
aircraft on its arrival at B, to the nearest degree, is? 
*a. 277° 
b. 284° 
c. 263° 
d. 270° 

40. What is a rhumb line? 
a. The vertex of a conformal polyformic projection. 
b. The shortest distance between any two points on the earth’s surface. 
c. A straight line on a lambert’s conformal chart. 
*d. A line on the Earth, Which cuts all meridians at the same angle. 

41. In order to fly from position A (10°00’N, 030° 00’W)to position B (30° 00’N, 050° 00’W), 
maintaining a constant true course, it is necessary to fly? 
a. The great-circle route. 
b. A straight line plotted on a Lambert chart. 
*c. A rhumb line track. 
d. The constant average drift route. 

42. The angle between the true great-circle track and the true rhumb line track joining the following 
points: A (60°S 165°W) B (60°S 177°E), at the place of departure A, is? 
*a. 7.8° 
b. 9° 
c. 15.6° 
d. 5.2° 

43. Which of the following is true of all parallels of latitude? 
a. They are neither rhumb lines nor great circles. 
*b. They are rhumb lines but not great circles. 
c. They are both rhumb lines and great circles. 
d. They are great circle but not rhumb lines. 

44. A Rhumb line is? 
a. A line convex to the nearest pole on a Mercator projection. 
*b. A line on the surface of the earth cutting all meridians at the same angle. 
c. The shortest distance between two points on a polyconic projection. 
d. Any straight line on a lambert projection. 

45. Given: A is N55° 000°B is N54° E010°. The average true course of the great circle is 100°. The 
true course of the rhumb line at point A is? 
a. 096° 
b. 104° 
c. 107° 
*d. 100° 

46. An aircraft passes position A (60° 00’N 120° 00’W) on route to position B (60° 00’N 140° 30’W). 
What is the great circle track on departure from A? 
*a. 279° 
b. 288° 
c. 261° 
d. 270° 

47. Parallels of latitude, expect the equator, are? 
*a. Rhumb lines. 
b. Great circles. 
c. Both Rhumb lines and Great circles. 
d. Neither Rhumb lines nor Great circles. 

48. Given: The coordinates of the point is N48° 50’ E002° 16.5’. The co ordinates of the antipodes 
are?  
a. S41°10’ W177° 43.5’. 
b. S41°10’ E177° 43.5’. 
*c. S48°50’ W177° 43.5’. 
d. S48°50’ E177° 43.5’. 

49. A great circle track crosses the equator at 30W has an initial track of 035(T). It’s highest north 
point is? 
a. 55N 060E. 
b. 55N 060W. 
*c. 35N 150W. 
d. 35N 150E. 

50. On a lambert conformal conic chart great circles that are not meridians are? 
a. Curves concave to the pole of projection. 
b. Straight lines within the standard parallels. 
*c. Curves concave to the parallel of origin. 
d. Straight lines regardless of distance. 

51. On a direct Mercator chart, a rhumb lines appear as a? 
a. Curves convex to the Equator. 
b. Curves concave to the nearest pole. 
c. Straight line. 
*d. Complex curves concave to the equator. 

52. On a polar stereographic projection chart showing the south pole, a straight line joins positions 
A (70°S 065° E) to position B (70°S 025° W). The true course on departure from position A is 
approximately? 
a. 315° 
*b. 225° 
c. 250° 
d.  135° 

53. On a Direct Mercator chart a great circle will be represented by a? 
a. Straight lines. 
b. Complex curves to the equator. 
*c. Curve concave to the equator. 
d. Complex curves concave to the poles. 

54. Parallels of latitude, expect the equator, are? 
*a. Rhumb lines. 
b. Complex curves. 
c. Great circle. 
d. Curves to the nearest pole. 

55. On a Direct Mercator chart a great circle will be represented by a? 
a. Curve convex to the equator. 
*b. Curve concave to the equator. 
c. Complex curve. 
d. Straight line. 

56. Which of the following, concerning great circles on a direct Mercator chart, is correct? 
*a. With the exception of meridians and the equator, they are curves concave to the equator. 
b. Their centre cannot be that of the Earth. 
c. They are represented by straight lines. 
d. They do not include the meridians nor the equator. 

57. On a Direct Mercator chart, a Rhumb line appears as a? 
a. Small circle concave to the nearer pole. 
b. Spiral curve. 
c. Curve convex to the nearer pole. 
*d. Straight line. 

58. Which one of the following statements is correct concerning the appearance of great circles, 
with the exception of meridians, on a polar stereographic chart whose tangency is at the pole? 
*a. The higher the latitude the closer they approximate to a straight line. 
b. The lower the latitude the closer they approximate to a straight line. 
c. They are all represented by straight lines. 
d. They can never be approximated as straight lines. 

59. A perfectly straight line on a Lambert chart is? 
a. A parallel of latitude. 
b. A rhumb line. 
*c. A meridian of longitude. 
d. A great circle. 

60. How do rhumb lines.(Other than meridians), appear on Polar Stereographic charts? 
a. As straight lines. 
*b. As line concave to the nearer pole. 
c. As line concave to the nearer pole. 
d. All ellipse around the pole. 

61. How are great circles shown on a direct Mercator chart? 
a. Curves concave to the nearest pole. 
*b. Curves convex to the nearest pole. 
c. Straight lines. 
d. Rhumb lines. 

62. On a Polar stereographic chart, the initial great circle course from A 70°N 060°W to B 70°N 060° 
E is approximately? 
*a. 030°(T). 
b. 330°(T). 
c. 150°(T). 
d. 210°(T). 

63. A lambert conformal conic chart has a constant of the cone of 0.75. The initial course of a 
straight-line track drawn on this chart from A (40°N 050°W) to B is 043° (T) at A; course at B is 
055°(T). What is the longitude of B? 
*a. 34°W. 
b. 36°W. 
c. 38°W. 
d. 41°W. 

64. A Lambert conformal conic chart has a constant of the cone of 0.80. A straight line course drawn 
on this chart from A (53°N 004°W) to B is 080° at A course at B is 092° (T). What is the longitude 
of B? 
*a. 011°E. 
b. 009°36’E. 
c. 008°E. 
d. 019°E. 

65. A straight line on a Lambert Conformal Projection chart for normal flight planning purposes? 
*a. Is approximately a Great Circle. 
b. Is a Loxodromic line. 
c. Is a Rhumb line. 
d. Can only be a parallel of latitude. 

66. On a Direct Mercator, Rhumb lines are? 
a. Ellipses. 
b. Curves convex to the equator. 
*c. Straight lines. 
d. Curves concave to the equator. 

67. Which one of the following describes the appearance of rhumb lines, except meridians, on a 
polar stereographic chart? 
a. Ellipses around the pole. 
b. Curves convex to the pole. 
c. Straight lines. 
*d. Curves concave to the pole. 

68. On a Lambert chart (standard parallels 37°N and 65°N), with respect to the straight line drawn 
on the map between A (N49°W030°) and B (N48°W040°), the? 
*a. Great circle and rhumb line are to the south. 
b. Great circle and rhumb line are to the north. 
c. Great circle is to the north, the rhumb line is to the south. 
d. Rhumb line is to the north, the great circle is to the south. 

69. On a polar stereographic projection chart showing the south pole, a straight line joins position A 
(75°S 065°E) to position B (75°S 025°W). The true course on departure from position A is 
approximately? 
*a. 225°. 
b. 450°. 
c. 313°. 
d. 320°. 

70. A Lambert conformal conic chart has a constant of the cone of 0.85. the initial course of a 
straight-line track drawn on this chart from A(40° N 050°W) to B is 043° (T) at A, course at B is 
055°(T). What is the longitude of B? 
a. 34°W 
*b. 36°W 
c. 38°W 
d. 41°W 

71. What is the great circle track (measured from the starting positions) from 70°S 035°W, to 70°S 
065°E? 
a. 048°T. 
b. 090°T. 
*c. 137°T. 
d. 228°T. 

72. The Great Circle bearing of ‘B’(70°S 050°E), from ‘A’ (70°S 030°W), is approximately? 
a. 150°(T). 
b. 090°(T). 
c. 115°(T). 
*d. 128°(T). 
   `);   
 
registerChapterText("air-navigation", "CX3-ASSIGNMENT", "CX3-ASSIGNMENT", `
1. Given the following: true track: 192° Magnetic variation: 7°E Drift angle: 5° left what is the 
magnetic heading required to maintain the given track? 
*a. 190°M. 
b. 192°M. 
c. 197°M. 
d. 188°M. 

2. Given the following: magnetic heading: 060° magnetic variation: 8°W Drift angle: 4° right, what 
is the true track? 
a. 058° 
b. 054° 
c. 052° 
*d. 056° 

3. Given: True Track is 348°, drift 17° left, variation 32°W, deviation 4°E. What is the compass 
heading? 
a. 041° 
b. 141° 
c. 044° 
*d. 033° 

4. Given: True Track 180°Drift 8degree R Compass heading 195° Deviation -2° calculate the 
variation? 
a. 23°W 
b. 20°W 
c. 21°E 
*d. 21°W 

5. Given: True Track 175° Drift 10°R Compass heading 195° Deviation -3° calculate the variation? 
a. 25°W 
*b. 27°W 
c. 25°W 
d. 29°W 

6. Given: True course 300° drift 8°R variation 10°W deviation -4° calculate the compass heading? 
a. 298° 
b. 296° 
c. 304° 
*d. 306° 

7. Given: True Track 352° variation 11°W deviation is -5° drift 10°R. Calculate the compass 
heading? 
a. 355° 
*b. 358° 
c. 348° 
d. 350° 

8. Given: True track 070° variation 30°W deviation +1° drift 10°R calculate the compass heading? 
*a. 089° 
b. 091° 
c. 087° 
d. 090° 

9. Given: True track 239 degrees. True heading 229 degrees. TAS 555 kts. GS = 557kts. Calculate 
the wind velocity? 
a. 310/100 kts. 
*b. 130/100 kts. 
c. 165/100 kts. 
d. 300/100 kts. 

10. True Heading of an aircraft is 265 degress, and TAS = 290 kts. If W/V = 210/35 kts, what is true 
track and GPS? 
*a. 271 degrees and 272 kts. 
b. 260 degrees and 315 kts. 
c. 259 degrees and 305 kts. 
d. 259 degrees and 272 kts. 

11. Given: True heading = 090, TAS = 180 kts, GS = 180 kts, Drift = 5 degrees right. Calculate the 
W/V? 
a. 185/15 kts. 
b. 355/15 Kts. 
*c. 005/15 kts. 
d. 190/15 kts. 

12. Given TAS = 472 kts. True HDG = 005 degress. W/V = 110(T)/50 kts. Calculate the drift angle and 
GS? 
a. 6 Degrees right drift and 490 kts. GS 
b. 6 Degrees right drift and 402 kts. GS 
c. 6 Degrees right drift and 462 kts. GS 
*d. 6 Degrees right drift and 490 kts. GS 

13. Given: Magnetic heading = 225. VAR = 40W. GS = 275 kts. W/V = 235T/120 kts. Calculate the 
drift angle? 
a. 6 Degrees left 
b. 6 Degrees right 
c. 3 Degrees left 
*d. 9 Degrees left 

14. The distance between point of departure and destination is 340 nm and wind velocity in the 
whole area = 100/25 kts. TAS = 140 kts. True track = 135 degress. Safe endurance = 3h 10 min. 
How long it take to reach the point of safe return? 
a. 1 hr and 21 min. 
b. 1 hr and 30 min. 
c. 1 hr and 37 min. 
*d. 1 hr and 49 min. 

15. Given: Hdg = 265 degress. TAS = 290 kts. W/V = 210/35 kts. Calculate the track and ground 
speed? 
a. 259 degrees and 272 kts. 
b. 259 degrees and 305 kts. 
*c. 271 degrees and 272 kts. 
d. 260 degrees and 315 kts. 

16. Given True track = 095. TAS = 160 kts. True heading = 087. GS = 130 kts. Calculate W/V? 
a. 307 degrees / 36 kts. 
b. 237 degrees / 36 kts. 
c. 124 degrees / 36 kts. 
*d. 057 degrees / 36 kts. 

17. On a True Heading of 090 degrees, the aircraft experience drift of 5 degrees south. On a true 
heading of 180 degrees, the aircraft experiences no drift. On both heading the TAS is 200 kts and 
it is assumed that the wind is the same. What is the experienced wind speed and direction? 
*a. 360/17 kts. 
b. 180/17 kts. 
c. 180/34 kts. 
d. 360/34 kts. 

18. What is the ETA at Z if TAS = 120 kts? 
[image: circle1.jpg] 
a. 1255 UTC. 
b. 1305 UTC. 
*c. 1320 UTC. 
d. 1325 UTC. 

19. An aircraft is following a true track of 048° at a constant TAS of 210 Kt.   The wind velocity is 
350° / 30 kt. The GS and drift angle area? 
*a. 192 kt, 7°right. 
b. 196 kt, 7.5°right. 
c. 192 kt, 7° left. 
d. 196 kt, 7.5°left. 

20. Given: FL 350, Mach 0.80, OAT – 55°C. Calculate the values for TAS and local speed of sound 
(LSS)?  
*a. 460 kt, LSS 575 kt. 
b. 460 kt, LSS 570 kt. 
c. 465 kt, LSS 575 kt. 
d. 460 kt, LSS 567 kt. 

21. For a given track the: Wind component =+45 kt Drift angle = 15° left TAS = 240 kt what is the 
wind component on the reverse track? 
a. 85 kts. 
*b. -65 kts. 
c. -85 kts. 
d. -45 kts. 

22. Given: Magnetic Heading = 255° VAR = 40°W GS = 375 kt W/V = 235°(T) /120 kt calculate the 
drift angle? 
a. 4° left. 
b. 9° left. 
*c. 7° left. 
d. 7° right. 

23. Given: True Heading = 180° TAS = 500 kt W/V 225°/ 100 kt calculate the GS? 
*a. 435 kt. 
b. 575 kt. 
c. 400 kt. 
d. 350 kt. 

24. Given True Heading = 310° TAS = 200 kt GS =176 kt Drift angle 7° right. Calculate the W/V? 
a. 273°/33 kt. 
*b. 270°/33 kt. 
c. 265°/30 kt. 
d. 270°/43 kt. 

25. Given: True Heading = 090° TAS = 180 kt GS=180kts Drift 5° right calculate the W/V? 
*a. 360°/15 kt. 
b. 360°/25 kt. 
c. 360°/5 kt. 
d. 300°/15 kt. 

26. Given: True Heading = 090°TAS = 200 kt W/V = 220°/30 kt. Calculate the GS? 
a. 200 kt. 
b. 240 kt. 
c. 180 kt. 
*d. 220 kt. 

27. An aeroplane is flying at TAS 180 kt on a track on a track of 090°. The W/v is 045°/50kt. How far 
can the aeroplane fly out from its base and return in one hour? 
*a. 85 nm. 
b. 90 nm. 
c. 75 nm. 
d. 100 nm. 

28. The following information is displayed on an inertial Navigation system: GS 520 kt, True HDG 
090°, Drift angle 5° right, TAS 480 kt. SAT (static air temperature). -51°C. The W/V being 
experienced is ?  
a. 322°/60 kt. 
*b. 320°/60 kt. 
c. 320°/45 kt. 
d. 321°/50 kt. 

29. The reported surface wind from the control tower is 240°/35kt. Runway 30(300°). What is the 
cross-wind component? 
*a. 30 kt. 
b. 35 kt. 
c. 26 kt. 
d. 25 kt. 

30. Given: TAS = 485 kt, OAT = ISA +10°C, FL 410. Calculate the Mach number? 
a. 0.852 
b. 0.833 
*c. 0.825 
d. 0.815 


31. 265 US-GAL equals? (specific gravity 0.80) 
*a. 803 kg. 
b. 810 kg. 
c. 800 kg. 
d. 813 kg. 

32. 730 ft/min equals? 
a. 3.9 m/sec. 
b. 3.4 m/sec. 
*c. 3.7 m/sec. 
d. 3.2 m/sec. 

33. How long will it take to fly 5 NM at a groundspeed of 269 kt? 
a. 1 Min 11 sec. 
*b. 1 Min 07 sec. 
c. 1 Min 10 sec. 
d. 1 Min 17 sec. 

34. An aircraft travels 2.4 statute mile in 47 seconds. What is its groundspeed? 
*a. 160 kt. 
b. 266 kt. 
c. 26.6 kt. 
d. 166 kt. 

35. What is the ISA temperature value at FL 330? 
a. -56.5°C 
b. -53°C 
*c. -50°C 
d. -52°C 

36. Given: TAS 487 kt, FL 330, temperature ISA + 15. Calculate the MACH number? 
*a. 0.81. 
b. 0.80. 
c. 0.83. 
d. 0.79. 

37. Given: 0.80, OAT -50°C, FL 330, GS 490 kt, VAR 20°W, Magnetic heading 140°, Drift is 11° right 
Calculate the true W/V? 
a. 025°/95 kts. 
b. 020°/80 kts. 
c. 025°/90 kts. 
*d. 020°/95 kts. 

38. Given: Pressure Altitude 29000 FT, OAT -55°C. Calculate the Density Altitude? 
a. 28900 ft. 
b. 28000 ft. 
c. 27850 ft. 
*d. 27500 ft. 

39. Given: Compass Heading 090°, Deviation 2°W, variation 12°E, TAS 160kt. Whilst maintaining a 
radial 070° from a VOR station, the aircraft files a ground distance of 14 Nm in 6 MIN. What is 
the W/V°(T)? 
*a. 160°/50 kt. 
b. 150°/50 kt. 
c. 160°/60 kt. 
d. 150°/60 kt. 

40. How many NM would an aircraft travel in 1 MIN 45 SEC if GS is 135 kt? 
a. 3.45. 
b. 3.25. 
*c. 3.95. 
d. 4.35. 

41. Fuel flow per HR is 22 US-GAL, total fuel on board is 83 IMP GAL. What is the endurance?  
*a. 4 hr 32 min 
b. 3 hr 46 min 
c. 4 hr 46 min 
d. 3 hr 32 min 

42. What is the ratio between the litre and the US-GAL? 1 US-GAL equals? 
a. 3.5 litres. 
b. 4.3 litres. 
*c. 3.78 litres. 
d. 3.65 litres. 

43. Aircraft travels 100 statute miles in 20 min, how long does it take to travel 215 nm? 
*a. 50 min. 
b. 46 min. 
c. 48 min. 
d. 51 min. 

44. Given: TAS = 220 Kt; Magnetic course = 212°, W/V 160° (M)/50kt, calculate the GS? 
a. 192 kt. 
*b. 186 kt. 
c. 190 kt. 
d. 180 kt. 

45. Given: FL250. OAT -15°C, TAS 250 kt. Calculate the Mach No.? 
a. 0.45 
*b. 0.40 
c. 0.46 
d. 0.38 

46. An aircraft travels 100 statute miles in 30 min, how long does it take to travel 215 nm? 
*a. 74 min. 
b. 50 min. 
c. 77 min. 
d. 49 min. 

47. Given: TAS = 250 kt; Magnetic course = 212°, W/V 160°(M)/50kt, Calculate the GS? 
a. 222 kt. 
b. 225 kt. 
*c. 215 kt. 
d. 230 kt. 

48. Given: course required = 085°(T), Forecast W/V 030/100kt, TAS = 470 kt, Distance = 265 NM. 
Calculate the true HDG and flight time? 
*a. 075°, 39 min. 
b. 075°, 42 min. 
c. 070°, 39 min. 
d. 073°, 42 min. 

49. Given: True course from A to B = 090°, TAS = 460 kt, W/V = 360/100kt, Average variation = 10°E, 
Deviation = -2°. Calculate the compass heading and GS? 
*a. 069°-448 kt. 
b. 065°-449 kt. 
c. 067°-446 kt. 
d. 069°-458 kt. 

50. For a landing on runway 23 (227° magnetic) surface W/V reported by the ATIS is 180/30kt. VAR 
is 13°E. Calculate the cross wind component? 
a. 20 kt. 
*b. 22 kt. 
c. 25 kt. 
d. 19 kt. 

51. Given: Maximum allowable tailwind component for landing 10 kt. Planned runway 05 (047° 
magnetic). The direction of the surface wind reported by ATIS 210°. Variation is 17°E. Calculate 
the maximum allowable wind speed that can be accepted without exceeding the tailwind limit? 
a. 5 kt. 
b. 18 kt. 
c. 14 kt. 
*d. 11 kt. 

52. Given: Maximum allowable crosswind component is 20 kt. Runway 06, RWY QDM 063°(M). 
Wind direction 100°(M) calculate the maximum allowable wind speed? 
*a. 33 kt. 
b. 30 kt. 
c. 36 kt. 
d. 26 kt. 
   `);
   
registerChapterText("air-navigation", "SCALES-ASSIGNMENT", "SCALES-ASSIGNMENT", `
1. On a direct Mercator projection, the distance measured between two meridians spaced 5° apart 
at Latitude 60°N is 8 cm. The Scale of this chart at latitude 60°N is approximately? 
*a. 1 : 3 500 000. 
b. 1 : 5 000 000. 
c. 1 : 2 000 000. 
d. 1 : 4 500 000. 

2. On a Lambert Conformal chart the distance between meridians 5° apart along latitude 37° North 
is 9 cm. The Scale of the chart at that parallel approximates? 
a. 1: 3 500 000. 
*b. 1: 5 000 000. 
c. 1: 4 000 000. 
d. 1: 4 500 000. 

3. A Mercator chart has a scale at the equator = 1: 3 704 000. What is the scale at latitude 60°S? 
a. 1: 1 500 000. 
b. 1: 2 000 000. 
*c. 1: 1 852 000. 
d. 1: 7 408 000. 

4. A straight line drawn on a chart measures 4.63cm and represents 150 NM. The chart scale is? 
*a. 1: 6 000 000. 
b. 1: 5 000 000. 
c. 1: 4 500 000. 
d. 1: 6 500 000. 

5. In a navigation chart a distance of 49 NM is equal to 7 cm. The scale of the chart is 
approximately? 
a. 1: 2 500 000. 
b. 1: 2 300 000. 
c. 1: 1 600 000. 
*d. 1: 1 300 000. 

6. On a direct Mercator projection, at latitude 45° North, a certain length represents 70 NM. At 
latitude 30° North, the same length represents approximately? 
*a. 86 nm. 
b. 75 nm. 
c. 45 nm. 
d. 90 nm. 

7. At 60° N the scale of a direct Mercator chart is 1:3 000 000. What is the scale at the equator? 
a. 1: 5 000 000. 
b. 1: 4 500 000. 
c. 1: 12 000 000. 
*d. 1: 6 000 000. 

8. What is the chart distance between longitudes 179°E and 175°W on a direct Mercator chart with 
a scale of 1: 5 000 000 at the equator? 
*a. 133 mm. 
b. 100 mm. 
c. 113 mm. 
d. 125 mm. 

9. At 47° North the chart distance between meridians 10° apart is 5 inches. The scale of the chart 
at 47° North approximates? 
a. 1: 600 000. 
*b. 1: 6 000 000. 
c. 1: 12 000 000. 
d. 1: 5 000 000. 

10. Approximately how many nautical miles correspond to 12 cm on a map with a scale of 1 : 2 000 
000? 
*a. 130 nm. 
b. 130 nm. 
c. 200 nm. 
d. 240 nm. 

11. The total length of the 53°N parallel of latitude on a direct Mercator chart is 133 cm. What is the 
approximates scale of the chart at latitude 30°S? 
*a. 1: 26 000 000. 
b. 1: 2 600 000. 
c. 1:125000. 
d. 1: 6 000 000. 

12. A straight line on a chart 4.89 cm long represents 185 NM. The scale of this chart is 
approximately?  
a. 1: 6 000 000. 
b. 1: 5 500 000. 
c. 1: 6 500 000. 
*d. 1: 7 000 000. 

13. On a Direct Mercator chart at latitude 15°S, a certain length represents a distance of 120 NM on 
the earth. The same length on the chart will represents on the earth, at latitude 10°N, a distance 
of ? 
*a. 122.3 nm. 
b. 135.4 nm. 
c. 156.5 nm. 
d. 100.2 nm. 

14. On a Direct Mercator chart at latitude of 45°N, a certain length represents a distance of 90 NM 
on the earth. The same length on the chart will represents on the earth, at latitude 30°N, a 
distance of? 
a. 100 nm. 
*b. 110 nm. 
c. 120 nm. 
d. 125 nm. 

15. On c chart, the distance along a meridian between latitudes 45°N and 46°is 6 cm. The scale of 
the chart is approximately? 
*a. 1: 1 850 000. 
b. 1: 2 500 000. 
c. 1: 1 500 000. 
d. 1: 1 650 000. 

16. Given: Chart scale is 1: 1 850 000. The chart distance between two points is 4 centimetres. Earth 
distance is approximately? 
*a. 40 nm. 
b. 35 nm. 
c. 55 nm. 
d. 50 nm. 

17. On a Mercator chart, at latitudes 60°N, the distance measured between W002° and E008° is 
20cm. The scale of this chart at latitudes 60°N is approximately? 
*a. 1: 2 780 000. 
b. 1: 278 000. 
c. 1: 27 800 000. 
d. 1:780 000. 

18. Assume a Mercator chart. The distance between positions A and B, located on the same parallel 
and 10° longitude apart, is 6 cm. The Scale at the parallel is 1: 9 260 000. What is the latitude of 
A and B? 
a. 30° N or S. 
*b. 60° N or S. 
c. 45° N or S. 
d. 75° N or S. 

19. A course of 120°(T) is drawn between ‘X’(61°30’N) and ‘Y’ (58°30’N) on a Lambert Conformal 
conic chart with a scale of 1: 1 000 000 at 60°N. The chart distance between ‘X’ and ‘Y’ is? 
a. 600 cm. 
b. 6.7 cm. 
*c. 66.7 cm. 
d. 76.6 cm. 

20. Given: Direct Mercator chart with a scale of 1 : 200 000 at equator; Chart length from ‘A’ to ‘B’, 
in the vicinity of the equator, 11 cm. What is the approximate distance from ‘A’ to ‘B’? 
*a. 12 nm. 
b. 10 nm. 
c. 15 nm. 
d. 22 nm. 

21. The total length of the 75°N parallel of latitude on a direct Mercator chart is 140 cm. What is the 
approximate scale of the chart at latitude 30°S? 
*a. 1: 25 000 000. 
b. 1: 2 900 000. 
c. 1: 125000. 
d. 1: 6 000 000. 
   `);
   
registerChapterText("air-navigation", "DESCENT-ASSIGNMENT", "DESCENT-ASSIGNMENT", `
1. At what approximate distance from the threshold would an aircraft intercept the glide path if 
the aircraft height is 2500 feet, and the ILS glide path angle is 3°? 
a. 7.0 nm. 
*b. 7.8 nm. 
c. 13.0 nm. 
d. 14.5 nm. 

2. Convert 70 metres/second into Knots? 
a. 35 kts. 
b. 55 kts. 
*c. 136 kts. 
d. 146 kts. 

3. If there is a 10 knot increase in headwind by what amount must the rate of descent changed in 
order to maintain a 3° glide slope?. 
a. It must be increased by 30ft/min. 
b. It must be decreased by 30ft/min. 
*c. It must be decreased by 50ft/min. 
d. It must be increased by 50 ft/min. 

4. What will be the rate of descent when flying down a 12% glide slope, at a groundspeed of 
540knots? 
a. 3130 ft/min. 
b. 4830 ft/min. 
*c. 6550 ft/min. 
d. 8740 ft/min. 

5. An aircraft flying down a 3°ILS glide slope is at 25nm DME from the threshold. Using the 1 in 60 
rule and approximating 1 nm to 6000 ft, calculate the aircraft height above the runway 
threshold, assuming that the ILS glide path crosses the threshold at a height of 50 ft? 
a. 6450 ft. 
b. 7455 ft. 
*c. 7650 ft. 
d. 8105 ft. 

6. 730 FT/MIN equals? 
a. 5.2 m/sec. 
b. 1.6 m/sec. 
c. 2.2 m/sec. 
*d. 3.7 m/sec. 

7. If there is a 15 Knot increase is headwind by what amount must the rate of descent be changed 
in order to maintain a 3° glide slope. 
*a. It must be decreased by 79 ft/min. 
b. It must be increased by 79 ft/min. 
c. It must be increased by 35 ft/min. 
d. It must be decreased by 35 ft/min. 

8. What will be the rate of descent when flying down a 10° glide slope, at a groundspeed of 500 
knots? 
a. 7440 ft/min. 
b. 5900 ft/min. 
c. 6500 ft/min. 
*d. 8440 ft/min. 

9. An aircraft at FL370 is required to commence descent when 100NM from a DME facility and to 
cross the station at FL120. If the means GS during the descent is 396 ft, the minimum rate of 
descent required is approximately? 
*a. 1650 FT/MIN. 
b.  2400 FT/MIN. 
c. 1000 FT/MIN. 
d. 1550 FT/MIN. 

10. An aircraft is descending down a 12% slope whilst maintaining a GS of 540 kt. The rate of 
descent of the aircraft is approximately? 
a. 4500FT/MIN. 
b. 3900FT/MIN. 
*c. 6500FT/MIN. 
d. 650FT/MIN. 

11. If there is a 25 knot increase in headwind by what amount the rate of descent be changed in 
order to maintain a 3° glide slope? 
*a. It must be decreased by 125ft/min. 
b. It must be increased by 125ft/min. 
c. It must be increased by 135ft/min. 
d. It must be decreased by 135ft/min. 

12. What will be rate of descent when flying down a 5% glide slope, at a groundspeed of 450 knots? 
a. 1540ft/min. 
b. 1750ft/min. 
*c. 2175ft/min. 
d. 2124ft/min. 

13. At 0422 an aircraft at FL370, GS320kt, is on the direct track to VOR’X’185 NM distant. The 
aircraft is required to cross VOR ‘X’ at FL80. For a mean rate of descent of 1800FT/MIN at a 
mean GS of 232 kt, the latest time at which to commence descent is? 
a. 0451. 
b. 0454. 
*c. 0445. 
d. 0448. 

14. An aircraft is maintaining a 5.2% gradient is at 7NM from the runway, on a flat terrain. Its height 
is approximately? 
a. 3640 ft. 
*b. 2210 ft. 
c. 680 ft. 
d. 1890 ft. 

15. If there is a 10-knot decrease in headwind by what amount must the rate of descent be changed 
in order to maintain a 3°glide slope? 
a. It must be increased by 30 ft/min. 
b. It must be decreased by 30 ft/min. 
*c. It must be increased by 50 ft/min. 
d. It must be decreased by 50 ft/min. 

16. What will be the rate of descent when flying down a 8% glide slope, at a groundspeed of 400 
Knots? 
*a. 3242 ft/min. 
b. 3500 ft/min. 
c. 4320 ft/min. 
d. 3420 ft/min. 

17. An aircraft at FL350 is required to commence descent when 85NM from a VOR and to cross the 
VOR at FL80. The mean GS for the descent is 340 kt. What is the minimum rate of descent 
required? 
*a. 1800 FT/MIN. 
b. 1900 FT/MIN. 
c. 1600 FT/MIN. 
d. 1700 FT/MIN. 


18. If there is a 15Knot decrease in headwind by what amount must the rate of descent be changed 
in order to maintain a 3°glide slope? 
a. It must be increased by 50ft/min. 
b. It must be decreased by 50ft/min. 
c. It must be decreased by 75ft/min. 
*d. It must be increased by 75ft/min. 

19. An aircraft at FL290 is required to commence descent when 50NM from a VOR and to cross that 
VOR at FL80. Mean GS during descent is 271kt. What is the minimum rate of descent required? 
a. 1800 FT/MIN. 
*b. 1900 FT/MIN. 
c. 2000 FT/MIN. 
d. 1700 FT/MIN. 

20. The equivalent of 70m/sec is approximately? 
*a. 136 kt. 
b. 145 kt. 
c. 210 kt. 
d. 35 kt. 

21. An aircraft at FL330 is required to commence descent when 65NM from a VOR and to cross the 
VOR at FL100. The mean GS during the descent is 330 kt. What is the minimum rate of descent 
required? 
a. 1850 ft/min. 
*b. 1950 ft/min. 
c. 1650 ft/min. 
d. 1750 ft/min. 

22. If there is a 20 Knot increase in headwind by what amount must the rate of descent be changed 
in order to maintain a 3°glide slope? 
a. It must be increased by 210 ft/min. 
b. It must be decreased by 210 ft/min. 
*c. It must be decreased by 100 ft/min. 
d. It must be increased by 100 ft/min. 

23. Assuming zero wind, what distance is covered by an aircraft descending 15000FT with a TAS of 
320kt and maintaining a rate of descent of 3000 FT/MIN? 
a. 16.0 NM. 
*b. 26.7 NM. 
c. 19.2 NM. 
d. 38.4 NM. 

24. An aircraft at FL370 is required to commence descent at 120NM from a VOR and to cross the 
facility at FL130. If the mean GS for the descent is 288 kt, the minimum rate of descent required 
is? 
a. 860 FT/MIN. 
b. 890 FT/MIN. 
c. 920 FT/MIN. 
*d. 960 FT/MIN. 

25. An aircraft is on an ILS 3 degree glide slope, which passes over the runway threshold at a height 
of 50 feet. The DME range is 25nm from the threshold. What is the height above the runway 
threshold elevation? (Use the 1 in 60 rule and the approximation 6000 feet = 1 nautical mile) 
a. 6550 feet. 
b. 7450 feet. 
*c. 7550 feet. 
d. 8110 feet. 

26. At 0430 an aircraft is in level cruise flight at groundspeed of 350 knots, at FL370, 185 nm from a 
VOR. It is required to descent at a mean rate of 1800 feet/min, to be at FL 80 overhead the VOR. 
What is the latest time of commence descent, if the mean ground speed in the descent is to be 
232 Knots? 
a. 0456. 
b. 0432. 
*c. 0451. 
d. 0421. 

27. When 65 nm from a VOR you commence a descent from FL330 with the intention of arriving at 
the VOR at FL100. What rate of descent is required if your mean ground speed is 340 knots? 
a. 1500 ft/min. 
b. 1750 ft/min. 
*c. 2000 ft/min. 
d. 2100 ft/min. 

28. An aircraft is on an ILS 3 degree glide slope, which passes over the runway threshold at a height 
of 50 feet. The DME range is 25 nm from the threshold. What the height above the runway 
threshold elevation? (Use the 1 in 60 rule and the approximation 6000 feet = 1 nautical mile) 
*a. 7550 feet. 
b. 8110 feet. 
c. 6550 feet. 
d. 7450 feet. 

29. What will be the rate of descent when flying down a 7% glide slope, at a groundspeed of 540 
knots?  
a. 3130 ft/min. 
b. 4830 ft/min. 
*c. 3830 ft/min. 
d. 3740 ft/min. 

30. An aircraft flying down a 3°ILS glide slope is at 35 nm DME from the threshold. Using the 1 in 60 
rule and approximating 1 nm to 6000ft, calculate the aircraft height above the runway 
threshold, assuming that the ILS glide path crosses the threshold at a height of 50 ft? 
a. 6450 ft. 
b. 7455 ft. 
*c. 10550 ft. 
d. 10015 ft. 

31. 850 FT/MIN equals? 
a. 5.2 m/sec. 
b. 4.6 m/sec. 
c. 3.2 m/sec. 
*d. 4.3 m/sec. 
   `);
   
registerChapterText("air-navigation", "SOLAR-SYSTEM-AND-TIME-ASSIGNMENT", "SOLAR-SYSTEM-AND-TIME-ASSIGNMENT", `
1. The first law of Kepler states? 
*a. Planets move in elliptic orbits with the sun at one of the foci. 
b. Planets move around the sun in a circular path. 
c. All planets orbit around the sun at the same speed. 
d. The angular speed of the planets in the orbit around the sun is constant. 

2. What is meant by “aphelion”? 
*a. The Points of the earth’s orbit furthest away from the sun. 
b. The points of the sun’s orbit furthest away from the earth. 
c. The points of the earth’s orbit closest to the sun. 
d. The point of the sun’s orbit closest to the earth. 

3. Which is the highest latitude listed below at which the sun will rise above the horizon and set 
every day? 
a. 62 degress. 
*b. 66 degress. 
c. 72 degress. 
d. 68 degress. 

4. The main reason for the occurrence of season on the earth is? 
*a. The inclination of the earth axis with regard to the ecliptic plane. 
b. The elliptical from of the orbit of the earth around the sun 
c. The length of day stated by the second law of kepler. 
d. The distance between the sun and the moon. 

5. Which statements is true? 
a. The duration of civil twilight on 21st of March and on 23rd of September is equal at all places on earth independent of latitude. 
b. Only the declination of the sun will affect the duration of civil twilight. 
*c. The declination of the sun and the latitude of the observer will affect the duration of civil twilight. 
d. None of these

6. Which statements about the orbit of the earth is correct? 
*a. The orbit of the earth around the sun is an ellipse with the sun at one of foci. 
b. The orbit of the earth around the sun is an ellipse with the sun mid-way between the two foci. 
c. The orbit of the earth around the sun is a circle with the sun at its centre. 
d. The orbit of the earth around the sun is circle with sun at a point next to its centre. 

7. Which definition of the equator is correct? 
a. The equator is a great circle with its plane parallel to the earth’s rotational axis. 
b. The equator is a small circle with its plane perpendicular to the earth’s rotational axis. 
c. The equator is a small circle with its plane parallel to the earth’s rotational axis. 
*d. The equator is a great circle with its plane perpendicular to the earth’s rotational axis. 

8. Geodetic latitude and geocentric coincide? 
*a. At the poles and on the equator. 
b. At 45 N/S. 
c. Only at the equator. 
d. Only at the poles. 

9. The time interval between sunrise and sunset is dependent on? 
*a. The declination of the sun and the latitude of the observer. 
b. The inclination of the axis of the earth and the longitude of the observer. 
c. The date and the longitude of the observer. 
d. The latitude and the longitude of the observer. 

10. The declination of the sun is defined as? 
*a. The angular distance of the sun north or south of the celestial equator. 
b. The arc from the celestial horizon to the sun measured along a vertical line perpendicular on the horizon. 
c. The arc of the meridian of the sun measured from the nearest pole to the sun. 
d. The arc along the celestial sphere from zenith to the sun. 

11. Which of the following alternatives is correct when you cross the international date line? 
*a. The date will increase when going on a westerly heading. 
b. The date will increase when going on a easterly heading. 
c. The date will always be the same. 
d. If you are crossing from westerly longitude to easterly longitude the date will remain the same. 

12. Two places on the parallel of 47s lie 757.8 km apart. Calculate the difference in longitude? 
a. 4 degrees 39 minutes. 
b. 9 degrees 19minutes. 
*c. 10 degrees. 
d. 4 degrees 51 minutes. 

13. Given. A (56N, 145E). B (57N, 165W). What is the difference in longitude between A and B? 
*a. 050 degrees. 
b. 001 degrees. 
c. 130 degrees. 
d. 020 degrees. 

14. In which months is the difference between apparent noon and mean noon the greates? 
a. March and September. 
b. June and December. 
*c. November and February. 
d. January and July. 

15. What is the reason for seasonal changes in climate? 
*a. Because the Earth’s spin axis is inclined to the plane of its orbit round the Sun. 
b. Because the distance between the Earth and the Sun varies over a year. 
c. Because the Earth’s orbital speed round the sun varies according to the time of the year. 
d. Because of the differences between the Tropical Year and the Calendar year. 

16. How would you define standard time in relation to UTC. 
a. It is local time. 
*b. It is local time adjusted to whole or half hours differences form UTC. 
c. It is based on local sunrise and sunset. 
d. It is another term for UTC. 

17. A time differences of 5 hours 20 minutes and 20 seconds is equivalent to which change of 
longitude? 
a. 81°30’. 
b. 78°30’. 
c. 79°10’. 
*d. 80°05’. 

18. The main reason that day and night, throughout the year, have different duration, is due to the? 
a. Relative speed of the sun along the ecliptic. 
*b. Inclination of the ecliptic to the equator. 
c. Earth’s rotation. 
d. Gravitational effect of the sun and moon on the speed of rotation of the Earth. 

19. The sun rises at 50°N and 025°E on the25th January at 0254 UTC. On the same day what time 
does it rise at 50°N and 40°W? 
a. 0254 UTC. 
b. 2154 UTC. 
*c. 0714 UTC. 
d. 0514 UTC. 

20. On the 27th of February, at 52°S and 040°E. The sunrise is at 0243UTC. On the same day , at 52°S 
and 35°W, the sunrise is at? 
a. 2143 UTC. 
b. 0243 UTC. 
*c. 0743 UTC. 
d. 0523 UTC. 

21. On the 27th of February, at 55°S and 020°E. The sunrise is at 0250 UTC. On the same day, at 55°S 
and 075°W, the sunrise is at? 
*a. 0630 UTC. 
b. 0243 UTC. 
c. 0743 UTC. 
d. 0523 UTC. 

22. The angle between the plane of the ecliptic and the plane of equator is approximately? 
a. 27.5°. 
b. 66.5°. 
*c. 23.5°. 
d. 25.3°. 

23. At what approximate date is the earth furthest from the sun (aphelion)? 
*a. Beginning of July. 
b. End of September. 
c. Beginning of January. 
d. End of December. 

24. At what times of the year does the length of the hours of daylight change most rapidly? 
a. Autumn Equinox and Winter Solstice. 
*b. Spring (vernal) Equinox and Autumn Equinox. 
c. Summer Solstice and Winter solstice. 
d. Spring (vernal) Equinox and Summer Solstice. 

25. Civil Twilight occurs between? 
a. Sunrise and sunset. 
*b. Sunrise and when the sun is 6°below the horizon. 
c. The times when the sun is between 6°and 12° below the horizon. 
d. The times when the sun is between 12°and 18° below the horizon. 

26. What is the highest latitude on the Earth at which the sun can be vertically overhead? 
*a. 23.2°. 
b. 66.2°. 
c. 45.0°. 
d. 90.0°. 

27. The angle between the plane of the ecliptic and the plane of equator is approximately? 
a. 66.5°. 
b. 90.0°. 
*c. 23.5°. 
d. 32.5°. 

28. The duration of civil twilight is the time? 
*a. Between sunset and when the centre of the sun is 6° below the true horizon. 
b. Between sunset and when the top of the sun is 6° below the visual horizon. 
c. Between sunset and when the centre of the sun is 6° below the visual horizon. 
d. When the Sunset and sunrise. 

29. On the 27th of February, at 52°S and 034°W, the sunrise is at 0743 UTC. On the same day, at 52°S 
and 040°E, the sunrise is at? 
*a. 0243 UTC. 
b. 0543 UTC. 
c. 1243 UTC. 
d. 0743 UTC. 

30. Which is the highest latitude listed below at which the sun will rise above the horizon and set 
every day? 
a. 66°. 
*b. 23.5°. 
c. 32.5°. 
d. The tropics of Cancer and Capricorn. 

31. What is the meaning of the term “Standard time”? 
*a. It is the time set by the legal authorities for a country or part of a country. 
b. It is just another term for UTC 
c. It is time related to the prime meridian 
d. It is constant at all points on the earth 

32. What is the local mean time, position 65°25’N 123°45’W at 2200 UTC? 
a. 0615. 
b. 1815 
*c. 1345 
d. 1415 

33. The main reason that day and night, throughout the year, have different duration, is due to the? 
a. The changing distance between the Sun and the Earth. 
b. The changing speed of rotation of the earth. 
c. The changing shape of the orbit of the earth around the Sun. 
*d. The inclination of the ecliptic to the equator. 

34. In which two months of the year is the differences between the transit of the Apparent Sun and 
Mean Sun across the Greenwich Meridian greatest? 
*a. February and November. 
b. March and July. 
c. June and December. 
d. January and August. 

35. What is the highest listed below at which the sun will reach an angle of 90° above the horizon at 
some time during the year? 
*a. 23°. 
b. 32°. 
c. 66°. 
d. 60°. 

36. Assuming mid-latitudes (40° to 50°N/S). At which time of year is the relationship between the 
length of day and night, as well as the rate of change of declination of the sun, changing at the 
greatest rate? 
a. Winter solstice. 
*b. Spring equinox and autumn equinox. 
c. Summer solstice. 
d. Mid July. 

37. At what approximate date is the earth furthest from the sun (perihelion)? 
a. 21 March. 
b. 21 September. 
c. Middle of June. 
*d. Beginning of January. 

38. At what approximate date is the earth furthest from the sun (aphelion)? 
*a. Beginning of July. 
b. Beginning of January. 
c. 21 March. 
d. 21 August. 

39. The ratio of the ellipticity of the earth is 1/297, if the major axis is 6956km at the equator, what 
is the minor axis (poles)? 
a. 6879 km. 
b. 6862 km. 
*c. 6932 km. 
d. 6952 km. 

40. At which of the following latitudes does the maximum differences between geodetic and 
geocentric latitudes occur? 
a. 00°. 
b. 60°. 
*c. 45°. 
d. 90°. 

41. When standing at the South Pole in which direction will you be facing? 
*a. North. 
b. South. 
c. East. 
d. West. 

42. What is the approximate circumference of the earth? 
a. 21600 nm 
b. 11800 nm. 
*c. 21600 nm. 
d. 43400 nm. 

43. Two aircraft are flying eastward around the earth. Aircraft A is flying along the 60N parallel of 
latitude and aircraft B is flying along the equator. If aircraft A is flying at a groundspeed of 240 
knots, what would be the groundspeed of aircraft B both aircraft fly once round the Earth in the 
same journey time? 
a. 120 knots. 
b. 240 knots. 
*c. 480 knots. 
d. 600 knots. 

44. The circumference of the Earth is approximately? 
a. 5600 km. 
b. 13,200 km. 
c. 16,400 km. 
*d. 40,000 km. 

45. The sun rises at 55°N and 050°E on the 25th January at 0254 UTC. On the same day what time 
does it rise at 55°N and 040°W? 
*a. 0854 UTC. 
b. 2154 UTC. 
c. 0714 UTC. 
d. 0514 UTC. 

46. The sun at 45°N and 025°E on the 21st March at 1633 UTC. On the same day what time does it 
rise at 45°N and 060°W? 
a. 2254 UTC 
b. 2154 UTC 
c. 1714 UTC 
*d. 2213 UTC 

47. The sun rises at 50°N 025°W on the 25th January at 0654 UTC. On the same day what time does it 
rise at 50°N and 040°E? 
a. 0254 UTC 
b. 0154 UTC 
*c. 0234 UTC 
d. 0514 UTC 

48. Two aircraft are flying eastward around the earth. Aircraft A is flying along the 50N parallel of 
latitude and aircraft B is flying along the equator. If aircraft A is flying at a groundspeed of 340 
knots, what would be the groundspeed of aircraft B both aircraft fly once round the Earth in the 
same journey time? 
*a. 529 knots. 
b. 540 knots. 
c. 480 knots. 
d. 600 knots. 

49. Two aircraft are flying eastward around the earth. Aircraft A is flying along the 45N parallel of 
latitude and aircraft B is flying along equator. If aircraft A is flying at a groundspeed of 300 knots, 
what would be the groundspeed of aircraft B both aircraft fly once round the Earth in the same 
journey time? 
a. 420 knots. 
*b. 424 knots. 
c. 480 knots. 
d. 600 knots. 

50. Two aircraft are flying eastward around the earth. Aircraft A is flying along the 60N parallel of 
latitude and aircraft B is flying along the 20°N parallel. If aircraft A is flying at a groundspeed of 
240 knots, what would be the groundspeed of aircraft B both aircraft fly once round the Earth in 
the same journey time. 
a. 212 knots. 
b. 245 knots. 
*c. 451 knots. 
d. 560 knots. 
   `);   
   

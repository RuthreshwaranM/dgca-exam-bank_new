/* ============================================================
   DGCA EXAM BANK — SUBJECT: Navigation — Instrumentation
   ------------------------------------------------------------
   HOW TO ADD A CHAPTER
   ------------------------------------------------------------
   Copy this pattern for each chapter (see data/radio-navigation.js
   for a fully worked example with real questions):

   registerChapterText("navigation-instrumentation", "chapter-id", "Chapter Display Name", `
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

registerSubject("navigation-instrumentation", "Navigation — Instrumentation");

// Paste your first registerChapterText(...) call below this line.
registerChapterText("navigation-instrumentation", "PITOT-STATICS-ASSIGNMENT", "PITOT-STATICS-ASSIGNMENT", `
1. Concerning the pitot static system, the static pressure error: 
a. Is a direct effect of blockage of the static ports. 
b. Is a direct effect of heating of the static ports. 
c. Affects the alternate static source only. 
*d. Is caused by disturbed airflow around the static ports. 

2. The alternate static source of a light non-pressurised aeroplane is located in the flight deck. 
When used the altimeter. 
*a. Tends to over read. 
b. Tens to under read. 
c. I blocked. 
d. Indicates zero. 

3. The alternate static source of a light non-pressurised aircraft is located in the flight deck. When 
it is used, the static pressure sensed is likely to be: 
a. Lower than ambient pressure if QNH is greater than 1013 hPa. 
*b. Lower than ambient pressure due to aerodynamic suction. 
c. Higher than ambient pressure due to aerodynamic suction. 
d. Higher than ambient pressure if QNH is greater than 1013 hPa. 

4. The total pressure head comprises a mast which moves its ports to a distance from the aircraft 
skin in order. 
a. To not disturb the aerodynamic flow around the aircraft. 
*b. To locate it outside the boundary layer. 
c. To protect it from icing. 
d. To make it easily accessible during maintenance. 

5. The open ended tube parallel to the longitudinal axis of the aircraft senses the: 
*a. Total pressure. 
b. Static pressure. 
c. Dynamic pressure. 
d. Total pressure puls’ static pressure. 

6. Concerning the pitot and static system, the static pressure error varies according to: 
   .1. Altimeter setting. 
   .2. Speed. 
   .3. Angle of attack. 
   The combination regrouping all of the correct statement is: 
*a. 2 and 3. 
b. 1 and 2. 
c. 1,2 and 3. 
d. 1 and 3. 

7. The alternative static sources is used: 
a. To compensate the hysteresis of the a aneroid capsule. 
b. To compensate the static pressure error. 
c. When the drain holes freeze. 
*d. When the static ports become blocked. 

8. In case of accidental closing of an aircraft’s left static pressure port (rain, birds), the altimeter? 
a. Over reads the altitude in case of a side-slip to the right and displays the correct information during symmetric flight. 
b. Keep on providing reliable reading in all situation. 
c. Under reads the altitude. 
*d. Over reads the altitude in case of a sideslip to the left and displays the correct information during symmetric fight. 

9. If an aircraft is equipped with one altimeter which is compensated for position error and 
another altimeter which is not. And all other factors being equal? 
a. At high speed the non-compensated altimeter will indicate a lower altitude.  
b. There will be no difference between them if air data computer (ADC) is functioning normally. 
c. ATC will get an erroneous altitude report SSR. 
*d. At high speed, the non-compensated altimeter will indicate a higher altitude. 

10. In a non-pressurized aircraft, if one or several static pressure ports are damaged, there is an 
ultimate emergency means for restoring a practically correct static pressure intake? 
*a. Breaking the rate-of climb indicator glass window. 
b. Slightly opening a window to restore the ambient pressure in the cabin. 
c. Descending as much as possible in order to fly at a pressure as close to 1013.25 hPa as possible. 
d. Calculating the ambient static pressure, allowing for the altitude and QNH and adjusting the instruments. 

11. The altimeter consist of one or several aneroid capsules located in a sealed casing. The 
pressures in the aneroid capsule (I) and casing (II) are respectively? 
a. (I) static pressure.              (II) Total pressure.                        
*b. (I) Vacuum (or very low pressure).         (II) Static pressure.
c. (I) Static pressure at time t.             (II) Static pressure at time m t-t          
d. (I) Total pressure.                        (II) Static pressure.              
    
12. The atmospheric pressure at FL 70 in a “standard +110” atmosphere is? 
*a. 781.85 hPa. 
b. 942.13 hPa. 
c. 1013.25 hPa. 
d. 644.41 hPa. 

13. The QNH is by definition the value of the? 
a. Altimeter setting so that the needles indicate zero when the aircraft is on ground at the location for which it is provide. 
b. Atmosphere pressure at the level of the ground over flown by the aircraft. 
*c. Altimeter setting so that the needles of the altimeter indicate the altitude of the location for which it is given. 
d. Atmospheric pressure at the sea level of the location for which it is given. 

14. During a climb after take-off from a contaminated runway, if the total pressure probe of the 
airspeed indicator is blocked, the pilot finds that indicated airspeed? 
a. Decreased abruptly toward zero. 
*b. Increases steadily. 
c. Increases abruptly toward VNE. 
d. Decreases steadily. 

15. With a pitot proble blocked due to ice build up, the aircraft airspeed indicator will indicate is 
descent a ? 
a. Increasing speed. 
b. Fluctuating speed. 
*c. Decreasing speed. 
d. Constant speed. 

16. After an aircraft has passed through a volcanic cloud which has blocked the total pressure probe 
inlet of the airspeed indicator, the pilot begins a stabilized descent and finds that the indiacted 
airspeed? 
a. Increases steadily. 
b. Decreases abruptly towards zero. 
*c. Decreases steadily. 
d. Increases abruptly towards VNE. 

17. The static pressure error of the static vent on which the altimeter is connected varies 
substantially with the? 
a. Static temperature. 
*b. Mach number of the aircraft. 
c. Deformation of the aneroid capsule. 
d. Aircraft altitude. 

18. The pressure altitude is the altitude corresponding? 
a. In standard atmosphere to the reference pressure Ps. 
b. In a ambient, to the pressure Ps prevailing at this point. 
*c. In standard atmosphere, to the pressure Ps prevailing at this point. 
d. In ambient atmosphere, to the reference pressure Ps. 

19. The response time of a vertical speed detector may be increased by adding a? 
*a. Correction based on an accelerometer sensor. 
b. Bi-metallic strip. 
c. Return spring. 
d. Second calibrated port. 

20. The density altitude is? 
*a. The altitude of the standard atmosphere on which the density is equal to the actual density of the atmosphere. 
b. The temperature altitude corrected for the difference between the real temperature and the standard temperature. 
c. The pressure altitude corrected for the relative density prevailing at this point. 
d. The pressure altitude corrected for the density of air at this point. 

21. On board an aircraft the altitude is measured form the? 
a. Standard altitude. 
*b. Pressure altitude. 
c. Density altitude. 
d. Temperature altitude. 

22. If the static source to an airspeed indicator (ASI) becomes blocked during a descent the 
instruments will? 
a. Read zero. 
b. Contain to indicate the speed applicable to that at the time of the blockage. 
c. Under-read. 
*d. Over-read. 

23. If the static source to an altimeter becomes blocked during ac climb, the instrument will? 
*a. Continue to indicate the reading at which the blocked occurred. 
b. Under-read by an amount equivalent to the reading at the time that the instrument became blocked. 
c. Over-read. 
d. Gradually return to zero. 

24. If the static source to an altimeter becomes blocked during a descent the instrument will? 
a. Gradually indicate zero. 
b. Under-read. 
c. Indicate a height equivalent to the setting on the millibar subscale. 
*d. Continue to display the reading at which the blockage occurred. 

25. A leak in the pitot pressure line of non-pressurized aircraft to an airspeed indicator would cause 
it to.  
*a. Under-read. 
b. Over-read. 
c. Over read in a climb under-read in a descent. 
d. Under-read in a climb and over-read in a descent. 

26. The press measured at the forward facing orifice of a pitot tube is the? 
a. Total pressure plus static pressure. 
b. Dynamic pressure. 
*c. Total pressure. 
d. Static pressure. 

27. The airspeed indicator circuit consists of pressure sensors. The pilot tube directly supplies? 
*a. The total pressure. 
b. The static pressure. 
c. The total pressure and the static pressure. 
d. The dynamic pressure. 

28. The error in altimeter reading caused by the variation of the static pressure near the source is 
known as? 
*a. Position pressure error. 
b. Barometric error. 
c. Instrument error. 
d. Hysteresis effect. 

29. A pitot blockage of both the ram air input and the drain hole with the static port open causes 
the airspeed indicator to? 
a. Read a little high. 
b. Read a little low. 
c. Freeze at zero. 
*d. Read like an altimeter. 

30. A pitot tube covered by ice which blocks the ram air inlet will affect the following 
instruments(s)? 
a. Altimeter indicator, altimeter and vertical speed indicator. 
*b. Airspeed indicator only. 
c. Altimeter only. 
d. Vertical speed indicator only. 

31. Given: Ts is the static temperature (SAT). 
Tt is the total temperature (TAT). 
Kr is the recovery coefficient. 
M is the Mach number. 
The total temperature can be expressed approximately by the formula? 
a. Tt = Ts (1-0.2 M 
*b. Tt = Ts (1+0.2 kr.M 
c. Tt = Ts/(1+0.2 kr.M 
d. Tt = Ts(1+0.2 M 

32. The altimeter is fed by? 
a. Differential pressure. 
*b. Static pressure. 
c. Dynamic pressure. 
d. Total pressure. 

33. The vertical speed indicator (VSI) is fed by? 
a. Differential pressure. 
*b. Static pressure. 
c. Dynamic pressure. 
d. Total pressure. 

34. The operating principle of the vertical speed indicator (VSL) is based on the measurements of 
the rate of change of? 
a. Kinetic pressure. 
*b. Static pressure. 
c. Dynamic pressure. 
d. Total pressure. 

35. If the static vents in an un-pressurized aircraft become blocked? 
a. Breaking or opening the windows will enable the altimeter to function. 
b. Breaking or opening the windows will enable the ASI to function. 
*c. Breaking the front glass will enable the altimeter to function. 
d. Only instruments fed from an ADC will function. 

36. If both the pitot tube and its drain hole become completely blocked while the static port remains clear, the airspeed indicator will, during a climb:
a. Under-read.
*b. Over-read.
c. Freeze at the speed indicated when the blockage occurred.
d. Indicate zero.

37. Entering ground effect is likely to? 
a. Decrease static pressure but increase pitot pressure. 
b. Decrease pitot pressure but increase static pressure. 
*c. Increase position errors. 
d. Decrease position errors. 

38. If the pitot tube leaks and the pitot drains are blocked in a unpressurised aircraft? 
a. The ASI will over indicate. 
*b. The ASI will under indicate. 
c. The altimeter will under indicate. 
d. The altimeter will over indicate. 

39. If the static tube and drains become blocked? 
a. The ASI will under indicate. 
b. The ASI will over indicate. 
*c. The ASI will under or over indicate depending on altitude. 
d. The ASI will indicate zero. 

40. If the static tube and drains become blocked? 
a. The altimeter will under indicate. 
b. The altimeter will indicate zero. 
c. The altimeter will over indicate. 
*d. The altimeter will under or over indicate depending on altitude. 

41. The output data from the ADC are used by: 
   .1. Transponder. 
   .2. EFIS. 
   .3. Automatic Flight Control System (AFCS). 
   The combination that regroups all of the correct statements is: 
a. 2,3. 
b. 1,3. 
*c. 1,2,3. 
d. 1,2. 

42. The ADC uses the following parameters as inputs data: 
a. Mach number, barometric altitude, CAS. 
b. TAS, barometric altitude, TAT. 
*c. Static pressure, total pressure, TAT. 
d. Total pressure, static pressure, TAT,EGT. 

43. The ADC uses the following parameters as input data: 
*a. Static pressure, total air pressure, total air temperature. 
b. TAS, CAS, altitude, total air temperature. 
c. Static pressure, total pressure only. 
d. TAS, altitude, vertical sped, SAT. 

44. The data output from an ADC include. 
   .1. Barometric altitude. 
   .2. Mach number. 
   .3. CAS. 
   .4. TAS. 
   .5. SAT.  
   The combination that regroups all of the correct statements is : 
a. 1,4. 
b. 1,3,5. 
*c. 1,2,3,4,5. 
d. 2,3,4. 

45. An Air Data Computer (ADC)? 
a. Measures position error in the static system and transmits this information to ATC to provide correct altitude reporting. 
*b. Transformers air data measurements into electric impulses driving servo motors in instruments. 
c. Is an a auxiliary system that provides altitude information in the event that the static source is blocked. 
d. Converts air data measurements given by ATC from the ground in order to provide correct altitude and speed information. 

46. In An Air Data Computer (ADC), aeroplane altitude is calculated from? 
a. The differences between absolute and dynamic pressure at the fuselage. 
b. Measurements of outside air temperature (OAT). 
c. Measurements of elapse time for a radio signal transmitted to the ground surface and back. 
*d. Measurements of absolute barometric pressure form a static source on the fuselage. 

47. The advantages provided by an air data computer to indicate the altitude are? 
a. Positions/pressure error correction. 
b. Hysteresis error correction. 
*c. Remote data transmission capability. 
d. Capability to feed data at a larger number of instruments simultaneously. 

48. What advantages are provided by an ADC, compared to traditional pitot static system. 
   .1. Instruments lag is reduced or eliminated. 
   .2. Positions error is automatically correct for. 
   .3. Compressibility error is automatically corrected for. 
   .4. A larger number of instruments can be fed from one ADC. 
   .5. It provides emergency altimeter following main system failure. 
a. (1),(3), (4),(5). 
*b. (1),(2), (3),(4). 
c. (2),(3), (4),(5). 
d. None of these

49. From where does the ADC obtain its altitude data? 
*a. Barometric information from the static pressure ports. 
b. Barometric pressure from the pitot probe. 
c. The difference between pitot and static pressures. 
d. The time take for a radio signal to rebound from the earth. 

50. What inputs are fed to the ADC? 
   .1. AOA. 
   .2. TAT. 
   .3. OAT. 
   .4. Dynamic pressure. 
   .5. Static pressure. 
   .6. Total pressure. 
   .7. AC electrical power. 
   .8. Autopilot commands. 
a. (1),(2),(4),(5),(7). 
b. (1),(2),(4),(5),(7). 
*c. (1),(2),(5),(6),(7).
d. None of the above 
   `);

registerChapterText("navigation-instrumentation", "ALT-ASSIGNMENT", "ALT-ASSIGNMENT", `
1. The altimeter is subject to static pressure error. This error varies according to: 
a. TAS and altimeter setting. 
b. TAS and OAT. 
c. Angle of attack and OAT. 
*d. TAS and angle of attack. 

2. The altimeter is subject to pressure error. This error results from: 
*a. Incorrect pressure sensing caused by disturbance of airflow around the static ports. 
b. Imperfect elasticity of the aneroid capsule. 
c. Friction inside the instruments. 
d. Cabin pressure slightly lower than outside air pressure due to airflow over the fuselage. 

3. The servo-assisted altimeter is more accurate than a simple altimeter because the small 
movements of: 
a. The pointers are detected by a very sensitive electro-magnetic pick-off. 
*b. The capsules are detected by a very sensitive electro-magnetic pick-off. 
c. The capsules are not taken into account. 
d. The capsules are inhibited. 

4. The hysteresis error of an altimeter varies substantially with the? 
*a. Time passed at a given altitude. 
b. Mach number of the aircraft. 
c. Aircraft altitude. 
d. Static temperature. 

5. When flying from a sector of warm air into one of colder air, the altimeter will? 
a. Under read. 
b. Be just as correct as before. 
c. Show the actual height above ground. 
*d. Over read. 

6. At sea level, on a typical servo altimeter, the tolerance in feet from indicated must not exceed? 
*a. +/-60 feet. 
b. +/-75 feet. 
c. +/-30 feet. 
d. +/- 70 feet. 

7. The altitude indicated on board an aircraft flying in an atmosphere where all the atmosphere 
layers below the aircraft cold is? 
a. Equal to the standard altitude. 
b. Lower than the real altitude. 
c. The same as the real altitude. 
*d. Higher than the real altitude. 

8. The purpose of the vibrating device of an altimeter is to? 
a. Allow damping of the measurements in the unit. 
b. Reduce the hysteresis effect. 
*c. Reduce the effect of friction in the linkages. 
d. Inform the crew of a failure of the instruments. 

9. The vertical speed indicator of an aircraft flying at a true airspeed of 100 kt, in a descent with a 
slope of 3 degrees, indicates? 
a. -300 ft/min. 
b. -150 ft/min. 
c. -250 ft/min. 
*d. -500 ft/min. 

10. The altitude indicated on board an aircraft flying in an atmosphere where all atmosphere layers 
below the aircraft are warm is? 
a. Equal to the standard altitude.      
b. Higher to the real altitude. 
c. The same as the real altitude. 
*d. Lower than the real altitude. 

11. The primary factor which makes the servo-assisted altimeter more accurate than the simple 
pressure altimeter is the use of? 
a. A sub-scale logarithmic function. 
*b. An induction pick-off device. 
c. More effective temperature compensating leaf springs. 
d. Combination of counters/pointers. 

12. What will happen to the altimeter reading in a right sideslip, if an aircraft has a static vent at 
each of the fuselage, but the left one is blocked? 
a. Over read. 
*b. Under read. 
c. No change. 
d. Depends on altitude. 

13. From what is true altitude derived? 
*a. Pressure altitude. 
b. Density altitude. 
c. Temperature altitude. 
d. Difference between total pressure and static pressure. 

14. What is QNH? 
a. Ambient pressure at the airfield. 
b. Sea level pressure based on a ambient pressure at the airfield. 
*c. Sea level pressure 
d. Sea level pressure in the ISA. 

15. What is QNH? 
*a. Ambient pressure at msl. 
b. The pressure to be set on the altimeter subscale to obtain an indication of zero on the runway. 
c. The pressure to be set on the altimeter subscale to obtain a reading of the pressure altitude of 
the runway. 
d. The pressure to be set on the altimeter subscale to obtain density altitude when on the runway. 

16. What is the true altitude of an aircraft its altimeter indicated 16000 ft when the ambient 
temperature was -30°C? 
*a. 15200 ft. 
b. 15400 ft. 
c. 16200 ft. 
d. 16400 ft. 

17. What will happen to the indicated altitude if an aircraft in level flight passes into a warner air 
mass? 
a. Over indicate. 
*b. Under indicate. 
c. Not change. 
d. Remain constant only if above the tropopa use. 

18. What is density altitude? 
*a. Pressure altitude corrected for a ambient temperature. 
b. True altitude. 
c. Pressure altitude corrected for density changes. 
d. True altitude corrected for density changes. 

19. What will happen if an aircraft has two altimeters, one of which is compensated for position 
error, whilst the other is not? 
a. One will over read at high airspeeds. 
b. One will under read at high airspeeds. 
*c. One will under read close to the ground. 
d. The ADC will compensate automatically, so both with read correctly. 

20. Why are vibrators sometimes fitted in altimeters? 
*a. Overcome friction. 
b. Overcome indication. 
c. Overcome hysteresis. 
d. Reduce lag. 

21. What will happen to altimeter indication if an aircraft in level flight enters a cold front? 
*a. Over indication. 
b. Under indication. 
c. No change. 
d. No change above the tropopa use. 

22. A barometric altimeter comprises of? 
*a. An aneroid capsule sensing static pressure. 
b. An aneroid capsule sensing pitot pressure. 
c. A differential capsule sensing pitot and static pressure 
d. A bellows sensing temperature and static pressure. 

23. If pressure altitude is 30000 ft, indicated TAT is -10, mach number us 0.82, what is the density 
altitude? 
a. 31000 ft. 
*b. 30472 ft. 
c. 30573 ft. 
d. 30674 ft. 

24. If QHR is 999 hPa, what is the pressure altitude at an elevation of 25000 ft? 
a. 25100 ft. 
b. 25200 ft. 
c. 25300 ft. 
*d. 25400 ft. 

25. If pressure altitude is 22800 ft, at an elevation of 22000 ft, what is QNH? 
*a. 985 hPa. 
b. 976 hPa. 
c. 1034 hPa. 
d. 1026 hPa. 

26. If field elevation is 4000 ft amsl and QNH is 900 mb, what is the pressure altitude? 
*a. 7390. 
b. 6390. 
c. 610. 
d. 5540. 

27. If field elevation is 3500 ft amsl and QNH is 1020 mb, what is the pressure altitude? 
a. 210. 
b. -210. 
c. 3710. 
*d. 3290. 

28. If pressure altitude is 3700 ft amsl and QNH is 1000 mb. What is field elevation? 
*a. 3310. 
b. 3210. 
c. 390. 
d. 490. 

29. Density altitude is? 
*a. The altitude at which the existing density would occur is ISA. 
b. The density at which the existing temperature would occur in the ISA. 
c. The elevation at which the existing density would occur in the ISA. 
d. The pressure altitude corrected for density deviation. 

30. The pressure altitude of the field can be found by? 
a. Setting QNH on the altimeter subscale. 
b. Setting QFE on the altimeter subscale. 
*c. Setting 1013 mb on the altimeter subscale. 
d. From an ADC only. 

31. If field pressure altitude is 5000 ft amsl and OAT is 25°C, what is the density altitude? 
*a. 5000 + 118(25 – (15 – (5 x 1.98))) = 7348.2 ft. 
b. 5000 - 118(25 – (15 + (5 x 1.98))) = 4988.2 ft. 
c. 5000 + 118(25 + (15 – (5 x 1.98))) = 8551.8 ft. 
d. 5000 - 118(25 + (15 + (5 x 1.98))) = 10888.2 ft. 

32. If QFE is 1022 hPa what is the pressure altitude of the field? 
a. 270 ft amsl. 
*b. -270 ft amsl. 
c. 30660 ft amsl. 
d. 500 ft amsl. 

33. If QNH is 100 hPa and field elevation is 4500 ft amsl, what is QFE? 
*a. 850 hPa. 
b. 160 hPa. 
c. -850 hPa. 
d. 900 hPa. 

34. Pressure altitude is? 
a. The altitude above sea level. 
b. The altitude indication when QFE is set on the sub-scale. 
c. The altitude indication when QNH is set on the subscale. 
*d. The altitude indication when 1013.25 hPa is set on the sub-scale. 

35. Which of the following cause air density to decrease? 
*a. Increasing humidity, increasing altitude, increasing temperature. 
b. Increasing humidity, increasing altitude, decreasing temperature. 
c. Increasing humidity, decreasing altitude, increasing temperature. 
d. Decreasing humidity, increasing altitude, decreasing temperature. 

36. If QNH changes from 1013 hPa to 1022 hPa this will? 
a. Increase field elevation. 
b. Decrease field elevation. 
*c. Not affect field elevation. 
d. Decrease QFE. 

37. If QFE changes from 1013 hPa to 1022 hPa will? 
a. Increase field elevation. 
b. Not affect QNH. 
*c. Increase QNH. 
d. Decrease QNH. 

38. At pressure altitude increases? 
a. Temperature decreases. 
b. Temperature increases. 
c. Temperature increases then remains constant. 
*d. Temperature increases then remains constant. 

39. At a fixed pressure altitude increases in temperature will? 
*a. Decreases density but increases density altitude. 
b. Decrease density altitude. 
c. Not density altitude. 
d. Increase density but decrease density altitude. 

40. What will happen to the altimeter reading in a right sideslip, if an aircraft has a static vent at 
each side of the fuselage, but the right one is blocked? 
*a. Over read. 
b. Under read. 
c. No change. 
d. Depends on a altitude. 

41. What will a cabin altimeter read with QFE set. 
a. The same as with QNH set. 
*b. Height AGL. 
c. Height above sea level. 
d. Field elevation when on the runway. 

42. The altimeter of an aircraft with a static pressure source on each side of the fuselage will ……… if 
one becomes blocked? 
a. Over read when side slipping. 
*b. Over read when side slipping towards the blocked source. 
c. Over read when side slipping towards the clear source. 
d. Under read when side slipping. 

43. A Servo altimeter is ……. It employs an electrical pick-off? 
*a. More accurate because………. 
b. Less accurate because……….. 
c. Less reliable because…………. 
d. More reliable because……….. 

44. What will happen to the altimeter reading if an aircraft flying at a fixed heading meets a colder 
air mass? 
a. Read less than true altitude. 
*b. Read more than true altitude. 
c. Read zero. 
d. Reading will not be affected. 

45. What is the true altitude of an aircraft flying at 16000 ft indicated altitude with an OAT of -16 
degrees C? 
a. 13200 ft. 
b. 14200 ft. 
*c. 16050 ft. 
d. 16200 ft. 

46. From where does the ADC obtain altitude data? 
a. Radio altitude. 
b. OAT sources. 
*c. Barometric altitude source. 
d. Dynamic minus total pressure. 

47. True altitude does the ADC obtain altitude data? 
a. Density altitude. 
b. Temperature altitude. 
*c. Pressure altitude. 
d. International standard altitude. 

48. What is density altitude? 
a. Pressure altitude corrected for density. 
b. Temperature altitude corrected for density. 
c. Temperature altitude corrected for pressure. 
*d. Pressure altitude corrected for temperature. 

49. How will altimeter reading be affected if the layers of air below an aircraft are colder than the 
standard temperature? 
a. Read true altitude, only the air above matters. 
b. Read zero. 
*c. Read higher than true. 
d. Read lower than true.  

50. How will altimeter reading be affected if the static vent pipe becomes blocked? 
a. Read true altitude, only the air above matters. 
*b. Reading will freeze. 
c. Reading higher than true. 
d. Read lower than true. 
   `);
   
registerChapterText("navigation-instrumentation", "RADIO-ALTIMETER-ASSIGNMENT", "RADIO-ALTIMETER-ASSIGNMENT", `
1. During the approach, ac crew reads on the radio altimeter the value of 650 ft. this is an 
indication of the true? 
*a. Height of the lowest wheels with regard to the ground at any time. 
b. Height of the aircraft with regard to the ground at any time. 
c. Height of the aircraft with regard to the runway. 
d. Altitude of the aircraft. 

2. For most radio altimeters, when a system error occurs during approach the? 
*a. Height of the lowest wheels is with regard to the ground at any time. 
b. Height of the aircraft with regard to the ground at any time. 
c. Height of the aircraft with regard to the ground at any time. 
d. Altitude of the aircraft. 

3. A radio altimeter can be defined as a? 
a. Ground radio aid used to measure the true height of the aircraft. 
b. Ground radio aid used to measure the truer altitude of the aircraft. 
*c. Self-contained on-board aid used to measure the true height of the aircraft. 
d. Self-contained on board aid used to measure the true altitude of the aircraft. 

4. The data supplied by a radio altimeter? 
*a. Indicates the distance between the ground and the aircraft. 
b. Concerns only by the decision height. 
c. Is used only by the radio altimeter indicator. 
d. Is used by the automatic pilot in the hold mode. 

5. The operating frequency range of a low altitude radio altimeter is? 
a. 2700 Mhz to 2900 Mhz. 
b. 5 Ghz. 
*c. 4200 Mhz to 4400 Mhz. 
d. 5400 Mhzor 9400 Mhz. 

6. Modern low altitude radio altimeters emit waves in the following frequency band? 
a. HF (High Frequency). 
b. UHF (Ultra High Frequency). 
*c. SHF (Super High Frequency). 
d. VLF (Very Low Frequency). 

7. The operation of the radio altimeter of a modern aircraft is based on? 
a. Pulse modulation of the carrier wave. 
b. A combination of frequency modulation and pulse modulation. 
*c. Frequency modulation of the carrier wave. 
d. Amplitude modulation of the carrier wave. 

8. In low altitude radio altimeters height measurement (above ground) is based upon? 
a. A triangular amplitude modulation wave, for which modulation phase shift between transmitted 
and received waves after ground reflection is measured. 
*b. A frequency modulation wave, for which the frequency variation between the transmitted wave 
and the received wave after ground reflection is measured. 
c. a pulse transmission, for which time between transmission and reception is measured on a 
circular scanning screen. 
d. A wave transmission, for which the frequency shift by DOPPLER effect after ground reflection is 
measured. 

9. The aircraft radio equipment which emits on a frequency of 4400 MHz is the? 
a. Weather radar. 
b. Primary radar. 
*c. Radio altimeter. 
d. High altitude radio altimeter. 

10. A radio altimeter is? 
a. Aircraft based and indicates true altitude. 
b. Aircraft based and indicates pressure altitude. 
*c. Aircraft based and indicates true height. 
d. Ground based and employ microwaves. 

11. Radio altimeters are based on the principle of? 
*a. Frequency modulated carrier wave. 
b. Pulse modulated carrier wave. 
c. Amplitude modulated carrier wave. 
d. Continuous wave. 

12. For the landing configuration a radio altimeter indicates? 
a. Height of the aircraft above ground. 
b. Height of the flight deck above the ground. 
*c. Height of the main wheel above the ground. 
d. Altitude.  

13. Low altitude radio altimeters operate on the ……….. wavelength? 
a. Metric. 
b. Decimetric. 
*c. Centimetric. 
d. Milimetric. 

14. If there is a fault in the system the radalt display will? 
*a. Needle will disappear and an alarm flag will appear, possibly accompanied accompanied by an 
audio warning. 
b. Freeze. 
c. Turn red and activate an aural warning. 
d. Turn red and activate visual and aural warnings. 

15. A radio altimeter measures? 
a. True altitude. 
b. Pressure altitude. 
c. Height above sea level. 
*d. Height above the ground or water over which the aircraft is flying. 

16. A RADALT provides? 
a. Radio altitude. 
b. Pressure altitude. 
c. Density altitude. 
*d. Height above terrain. 

17. The failure of the radio altimeter would cause? 
a. Loss of pressure altitude data. 
b. Loss of density altitude data. 
c. Loss of altitude data. 
*d. Loss of height data. 

18. A radio altimeter has a maximum effective height because? 
*a. At greater heights the signal will be too weak. 
b. At greater heights the signal will be undetectable.  
c. At greater heights the signal will be absorbed by moisture in the air. 
d. At greater height signal from different modulation cycles will overlap. 

19. Radio altimeters work on the principal of? 
*a. Frequency modulation. 
b. Amplitude modulation. 
c. Pulse modulation. 
d. Pulse modulation. 
Explanation: Options c and d are identical in the source text (likely a transcription error) — worth double-checking against your original source PDF.

20. Radio altimeters employ? 
a. FM. 
b. AM. 
*c. Pulsed FM. 
d. Pulse modulation. 

21. Radio altimeters are accurate only within the height range? 
a. Zero to 50 ft. 
b. Zero to 500 ft. 
c. 50 to 2700 ft. 
*d. Zero to 2500 ft.
   `);
   
registerChapterText("navigation-instrumentation", "VSI-ASSIGNMENT", "VSI-ASSIGNMENT", `
1. The alternate static source in light non-pressurised aircraft is in the flight deck. As the alternate 
source is opened, the vertical indicator may: 
a. Indicate a high rate to descent. 
b. Indicate a slight momentary descent. 
*c. Indicate a momentary climb. 
d. Be blocked. 
2. If the pitot pipe becomes partly blocked? 
a. The VSI indication will be too low when climbing. 
b. The VSI will be too low when descending. 
*c. The VSI will not be affected. 
d. The VSI will be too low when descending and too high when climbing. 
3. If the static pipe becomes partly blocked? 
a. The VSI indication will be too high when descending. 
b. The VSI indication will be too high when accelerating. 
*c. The VSI indication will be too when climbing or descending. 
d. The VSI indication will be unaffected. 
Explanation: A partly blocked static line actually causes the VSI to UNDER-read the rate of climb/descent (not "too high") — the options as transcribed don't include that choice, so double-check this one against your source PDF.
4. VSI lag is reduced by? 
*a. Two dashpots responding to acceleration. 
b. Two return springs. 
c. Bi-metallic strips. 
d. Electronic strips. 
5. If the choke in the VSI becomes partly blocked? 
a. The VSI indication will be too high when climbing. 
b. The VSI indication will be too low when descending. 
c. The VSI indication will be too high at all times. 
*d. The VSI indication will be too high when climbing or descending. 
6. The correct action to be taken when the static vent blocks on an unpressurised aircraft is to? 
a. Break the VSI glass. 
*b. Use the standby static source. 
c. Calculate ROC using mathematically. 
d. Open a window to equalize pressures. 
7. A VSI? 
a. Produces an output proportional to ambient pressure. 
b. Measures the difference between total pressure and static pressure. 
*c. Measures the difference between pressure inside and outside a capsule. 
d. Measures the only dynamic pressure. 
8. As an aircraft moves close to the ground during a landing the VSI might? 
*a. Becomes inaccurate due to ground effect. 
b. Becomes inaccurate due to turbulence. 
c. Stick due to loss pitot sources. 
d. Becomes inaccurate due to aircraft attitude changes. 
9. What should the VSI indicate when an aircraft on a 3 degree glide slope is flying at 100 kts TAS? 
a. 224 fpm descent. 
b. 324 fpm descent. 
c. 424 fpm descent. 
*d. 524 fpm descent. 
10. The response rate of a VSI can be improved by fltting a ? 
*a. Accelerometer system. 
b. Choke system. 
c. Bi-metalic compensator. 
d. Return spring. 
 `);
   
registerChapterText("navigation-instrumentation", "ASI-ASSIGNMENT", "ASI-ASSIGNMENT", `
1. In case of static port blockage, the airspeed indicator: 
a. Over reads in a climb and under reads in a descent. 
b. Under reads in a descent only. 
*c. Under reads in a climb and over reads in a descent. 
d. Over reads in a climb only. 
2. The alternate static source of a light non-pressure aeroplane is located in the flight deck. When 
used: 
a. The airspeed indicator tends to under read. 
*b. The airspeed indicator tends to over read. 
c. It has no influence on airspeed indicator reading. 
d. The airspeed indicator indicates a consistent decreasing speed. 
3. Given: 
Pt = total pressure: 
Ps = static pressure: 
Pd = dynamic pressure: 
The airspeed indicator measures: 
a. Ps-Pt. 
b. Pt-Pd. 
c. Pd-Ps. 
*d. Pt-Ps. 
4. The limits of the green scale of an airspeed indicator of light propeller aircraft are: 
*a. VSI and VNO. 
b. VSI and VMO. 
c. VSI and VNE. 
d. VSI and VNE. 
5. On the airspeed indicator of a twin engine aeroplane, the blue radial line corresponds to: 
*a. Best single engine rate of climb. 
b. Single engine holding speed. 
c. Minimum ground control speed. 
d. VNE. 
6. What does the “barder’s pole” used on some ASI’s indicate? 
*a. Mmo. 
b. Vne. 
c. TAS. 
d. Temperature and Vmo. 
Explanation: the barber's pole is really a combined VMO/MMO limit marker that moves with altitude — "Mmo" is the closest of the given options, but worth double-checking against your source.
7. What speed is Vno? 
*a. That which may only be exceeded with caution and in still air. 
b. That which may never be exceeded. 
c. That which may be exceed only in emergencies. 
d. The maximum at which fully control deflection is possible without overstressing the aircraft 
structure. 
8. From what is vmo calculated? 
a. TAS. 
b. EAS. 
*c. CAS. 
d. RAS. 
9. What will be the effect if the drain bole and pitot tapping in a tapping in a pitot probe are 
blocked, whilst the static source remains open? 
*a. The ASI will respond to changes in pressure altitude only. 
b. The ASI will not respond. 
c. The ASI will under read at all speeds. 
d. The ASI will over read when accelerating, decelerating climbing or descending. 
10. What do the upper and lower limits of the yellow arc on an ASI represent? 
a. Vne and Vno. 
*b. Vno and Vne. 
c. Vmo and Vne. 
d. Vno and Vmo. 
11. If the pitot source and drain become blocked by ice when in cruise flight, how will the ASI 
respond when descending? 
*a. It will under read. 
b. It will under read. 
c. It will read zero in all conditions. 
d. It will remain fixed at the reading at which it became blocked. 
12. At msl in the ISA? 
*a. CAS = TAS. 
b. IAS =TAS. 
c. IAS=EAS. 
d. CAS=TAS. 
13. In an ASI system, what does the pitot probe measure? 
*a. Total pressure. 
b. Dynamic pressure. 
c. Static pressure. 
d. Ambient pressure. 
14. What does the blue line on a twin engine piston aircraft ASI indicate? 
a. Vxse. 
b. Vno. 
c. Vne. 
*d. Vyse. 
15. What are indicated by the lower and upper ends of  the white arc on an ASI? 
a. Vsi and Vfe. 
*b. Vso and Vfe. 
c. Vfe and Vfo. 
d. Vse and Vne. 
16. Vfe is the? 
*a. Maximum speed at which the aircraft is permitted to fly with its flaps extended. 
b. Maximum speed at which the flaps can be extended or retracted. 
c. The minimum speed for flaps up flight. 
d. The maximum speed for flaps up flight. 
17. What will be the effect on the ASIK if the pitot tube of an unpressurised aircraft is fractured and 
the pitot drain is blocked? 
a. It will over read. 
*b. It will under read. 
c. It will give a constant reading. 
d. It will read zero at all speeds. 
18. At any given weight or altitude, an aircraft will always lift-off at the same? 
*a. CAS. 
b. AS. 
c. Ground speed. 
d. EAS. 
19. CAS is? 
a. EAS corrected for position error and compressibility error. 
*b. IAS corrected for position error and instrument error. 
c. TAS corrected for instrument error and ram effect. 
d. IAS corrected for density error and position error. 
20. When descending from FL400 and attempting to maintain maximum groundspeed, airspeed will 
be limited by? 
a. Vne then Vmo. 
b. Vno then Vne. 
*c. Mmo then Vmo. 
d. Vmo then Mmo. 
21. What will happen to TAS when descending through an isothermal layer at constant CAS? 
*a. Decrease. 
b. Increase. 
c. Remain constant. 
d. Decrease the increase. 
22. When descending through an inversion at constant TAS? 
*a. Mach number increase. 
b. Mach number decreases. 
c. Mach number remains constant. 
d. CAS decrease. 
23. When climbing through an inversion at constant TAS? 
a. Mach number increases. 
*b. Mach number decreases. 
c. Mach number remains constant. 
d. CAS increases. 
24. When descending through an inversion at constant CAS? 
a. TAS increases. 
b. Mach number increases. 
c. Mach number remains constant. 
*d. TAS decreases. 
25. When descending through an inversion at constant mach number? 
a. TAS increases. 
b. Mach number increases. 
c. Mach number remains constant. 
*d. TAS decreases. 
26. When climbing through an inversion at constant mach number? 
a. CAS increases. 
b. LSS decreases. 
c. TAS remains constant. 
*d. TAS increases. 
27. When descending through an inversion at constant CAS? 
a. TAS increases. 
*b. TAS decreases. 
c. TAS remains constant. 
d. Mach number increases. 
28. When descending through an isothermal layer at constant CAS? 
a. Mach number increases. 
*b. Mach number decreases. 
c. Mach number remains constant. 
d. TAS increase. 
29. When descending through an isothermal layer at constant CAS? 
a. Mach number increases. 
*b. Mach number decreases. 
c. Mach number remains constant. 
d. TAS increases. 
30. When climbing through an isothermal layer at constant CAS? 
*a. Mach number increases. 
b. Mach number decreases. 
c. Mach number remains constant. 
d. TAS decreases. 
31. When climbing through an isothermal layer at constant mach number? 
a. CAS increases. 
*b. CAS decreases. 
c. CAS remains constant. 
d. TAS decreases. 
32. When descending through an isothermal layer at constant CAS? 
a. LSS increases. 
b. LSS decreases. 
*c. LSS remains constant. 
d. TAS increases. 
33. When climbing through an isothermal layer at constant CAS? 
*a. TAS increases. 
b. TAS decreases. 
c. TAS remains constant. 
d. Mach number decreases. 
34. When descending through an isothermal layer at constant CAS? 
a. TAS increases. 
*b. TAS decreases. 
c. TAS remains constant. 
d. Mach number decreases. 
35. If pressure remains constant as temperature increases? 
a. Density will increase, causing the CAS: TAS ratio to increase. 
b. Density will increase, causing the CAS: TAS ratio to decrease. 
c. Density will decrease, causing the CAS: TAS ration to increase. 
*d. Density will decrease, causing the CAS: TAS ratio to decrease. 
36. If the pitot pipe becomes partly blocked? 
a. The IAS reading will be too low when climbing. 
b. The IAS reading will be too low when descending. 
c. The IAS reading will be too low at all times. 
*d. The IAS reading will be too low when descending and too high when climbing. 
37. If the pitot pipe becomes partly blocked? 
a. The IAS will be too high when descending. 
b. The IAS will be too high when accelerating. 
c. The IAS will be too low at all times. 
*d. The IAS will be too low when accelerating. 
38. If the static pipe becomes partly blocked? 
*a. The IAS and ROC will be too low when climbing. 
b. The IAS and ROC will be too low when descending. 
c. The IAS and ROC will be too low at all times. 
d. The IAS will be too when descending and too high when climbing. 
39. If the static pipe becomes partly blocked? 
*a. The IAS will be too high when descending at constant IAS. 
b. The IAS will be too high when accelerating at constant altitude. 
c. The IAS will be to low at all times. 
d. The IAS will be too low when accelerating at constant altitude. 
   `);
   
registerChapterText("navigation-instrumentation", "ASI-ASSIGNMENT", "ASI-ASSIGNMENT", `
1. In case of static port blockage, the airspeed indicator: 
a. Over reads in a climb and under reads in a descent. 
b. Under reads in a descent only. 
*c. Under reads in a climb and over reads in a descent. 
d. Over reads in a climb only. 
2. The alternate static source of a light non-pressure aeroplane is located in the flight deck. When 
used: 
a. The airspeed indicator tends to under read. 
*b. The airspeed indicator tends to over read. 
c. It has no influence on airspeed indicator reading. 
d. The airspeed indicator indicates a consistent decreasing speed. 
3. Given: 
Pt = total pressure: 
Ps = static pressure: 
Pd = dynamic pressure: 
The airspeed indicator measures: 
a. Ps-Pt. 
b. Pt-Pd. 
c. Pd-Ps. 
*d. Pt-Ps. 
4. The limits of the green scale of an airspeed indicator of light propeller aircraft are: 
*a. VSI and VNO. 
b. VSI and VMO. 
c. VSI and VNE. 
d. VSI and VNE. 
5. On the airspeed indicator of a twin engine aeroplane, the blue radial line corresponds to: 
*a. Best single engine rate of climb. 
b. Single engine holding speed. 
c. Minimum ground control speed. 
d. VNE. 
6. What does the “barder’s pole” used on some ASI’s indicate? 
*a. Mmo. 
b. Vne. 
c. TAS. 
d. Temperature and Vmo. 
Explanation: the barber's pole is really a combined VMO/MMO limit marker that moves with altitude — "Mmo" is the closest of the given options, but worth double-checking against your source.
7. What speed is Vno? 
*a. That which may only be exceeded with caution and in still air. 
b. That which may never be exceeded. 
c. That which may be exceed only in emergencies. 
d. The maximum at which fully control deflection is possible without overstressing the aircraft 
structure. 
8. From what is vmo calculated? 
a. TAS. 
b. EAS. 
*c. CAS. 
d. RAS. 
9. What will be the effect if the drain bole and pitot tapping in a tapping in a pitot probe are 
blocked, whilst the static source remains open? 
*a. The ASI will respond to changes in pressure altitude only. 
b. The ASI will not respond. 
c. The ASI will under read at all speeds. 
d. The ASI will over read when accelerating, decelerating climbing or descending. 
10. What do the upper and lower limits of the yellow arc on an ASI represent? 
a. Vne and Vno. 
*b. Vno and Vne. 
c. Vmo and Vne. 
d. Vno and Vmo. 
11. If the pitot source and drain become blocked by ice when in cruise flight, how will the ASI 
respond when descending? 
*a. It will under read. 
b. It will under read. 
c. It will read zero in all conditions. 
d. It will remain fixed at the reading at which it became blocked. 
12. At msl in the ISA? 
*a. CAS = TAS. 
b. IAS =TAS. 
c. IAS=EAS. 
d. CAS=TAS. 
13. In an ASI system, what does the pitot probe measure? 
*a. Total pressure. 
b. Dynamic pressure. 
c. Static pressure. 
d. Ambient pressure. 
14. What does the blue line on a twin engine piston aircraft ASI indicate? 
a. Vxse. 
b. Vno. 
c. Vne. 
*d. Vyse. 
15. What are indicated by the lower and upper ends of  the white arc on an ASI? 
a. Vsi and Vfe. 
*b. Vso and Vfe. 
c. Vfe and Vfo. 
d. Vse and Vne. 
16. Vfe is the? 
*a. Maximum speed at which the aircraft is permitted to fly with its flaps extended. 
b. Maximum speed at which the flaps can be extended or retracted. 
c. The minimum speed for flaps up flight. 
d. The maximum speed for flaps up flight. 
17. What will be the effect on the ASIK if the pitot tube of an unpressurised aircraft is fractured and 
the pitot drain is blocked? 
a. It will over read. 
*b. It will under read. 
c. It will give a constant reading. 
d. It will read zero at all speeds. 
18. At any given weight or altitude, an aircraft will always lift-off at the same? 
*a. CAS. 
b. AS. 
c. Ground speed. 
d. EAS. 
19. CAS is? 
a. EAS corrected for position error and compressibility error. 
*b. IAS corrected for position error and instrument error. 
c. TAS corrected for instrument error and ram effect. 
d. IAS corrected for density error and position error. 
20. When descending from FL400 and attempting to maintain maximum groundspeed, airspeed will 
be limited by? 
a. Vne then Vmo. 
b. Vno then Vne. 
*c. Mmo then Vmo. 
d. Vmo then Mmo. 
21. What will happen to TAS when descending through an isothermal layer at constant CAS? 
*a. Decrease. 
b. Increase. 
c. Remain constant. 
d. Decrease the increase. 
22. When descending through an inversion at constant TAS? 
*a. Mach number increase. 
b. Mach number decreases. 
c. Mach number remains constant. 
d. CAS decrease. 
23. When climbing through an inversion at constant TAS? 
a. Mach number increases. 
*b. Mach number decreases. 
c. Mach number remains constant. 
d. CAS increases. 
24. When descending through an inversion at constant CAS? 
a. TAS increases. 
b. Mach number increases. 
c. Mach number remains constant. 
*d. TAS decreases. 
25. When descending through an inversion at constant mach number? 
a. TAS increases. 
b. Mach number increases. 
c. Mach number remains constant. 
*d. TAS decreases. 
26. When climbing through an inversion at constant mach number? 
a. CAS increases. 
b. LSS decreases. 
c. TAS remains constant. 
*d. TAS increases. 
27. When descending through an inversion at constant CAS? 
a. TAS increases. 
*b. TAS decreases. 
c. TAS remains constant. 
d. Mach number increases. 
28. When descending through an isothermal layer at constant CAS? 
a. Mach number increases. 
*b. Mach number decreases. 
c. Mach number remains constant. 
d. TAS increase. 
29. When descending through an isothermal layer at constant CAS? 
a. Mach number increases. 
*b. Mach number decreases. 
c. Mach number remains constant. 
d. TAS increases. 
30. When climbing through an isothermal layer at constant CAS? 
*a. Mach number increases. 
b. Mach number decreases. 
c. Mach number remains constant. 
d. TAS decreases. 
31. When climbing through an isothermal layer at constant mach number? 
a. CAS increases. 
*b. CAS decreases. 
c. CAS remains constant. 
d. TAS decreases. 
32. When descending through an isothermal layer at constant CAS? 
a. LSS increases. 
b. LSS decreases. 
*c. LSS remains constant. 
d. TAS increases. 
33. When climbing through an isothermal layer at constant CAS? 
*a. TAS increases. 
b. TAS decreases. 
c. TAS remains constant. 
d. Mach number decreases. 
34. When descending through an isothermal layer at constant CAS? 
a. TAS increases. 
*b. TAS decreases. 
c. TAS remains constant. 
d. Mach number decreases. 
35. If pressure remains constant as temperature increases? 
a. Density will increase, causing the CAS: TAS ratio to increase. 
b. Density will increase, causing the CAS: TAS ratio to decrease. 
c. Density will decrease, causing the CAS: TAS ration to increase. 
*d. Density will decrease, causing the CAS: TAS ratio to decrease. 
36. If the pitot pipe becomes partly blocked? 
a. The IAS reading will be too low when climbing. 
b. The IAS reading will be too low when descending. 
c. The IAS reading will be too low at all times. 
*d. The IAS reading will be too low when descending and too high when climbing. 
37. If the pitot pipe becomes partly blocked? 
a. The IAS will be too high when descending. 
b. The IAS will be too high when accelerating. 
c. The IAS will be too low at all times. 
*d. The IAS will be too low when accelerating. 
38. If the static pipe becomes partly blocked? 
*a. The IAS and ROC will be too low when climbing. 
b. The IAS and ROC will be too low when descending. 
c. The IAS and ROC will be too low at all times. 
d. The IAS will be too when descending and too high when climbing. 
39. If the static pipe becomes partly blocked? 
*a. The IAS will be too high when descending at constant IAS. 
b. The IAS will be too high when accelerating at constant altitude. 
c. The IAS will be to low at all times. 
d. The IAS will be too low when accelerating at constant altitude. 
   `);
   
registerChapterText("navigation-instrumentation", "ASI-ASSIGNMENT", "ASI-ASSIGNMENT", `
1. In case of static port blockage, the airspeed indicator: 
a. Over reads in a climb and under reads in a descent. 
b. Under reads in a descent only. 
*c. Under reads in a climb and over reads in a descent. 
d. Over reads in a climb only. 
2. The alternate static source of a light non-pressure aeroplane is located in the flight deck. When 
used: 
a. The airspeed indicator tends to under read. 
*b. The airspeed indicator tends to over read. 
c. It has no influence on airspeed indicator reading. 
d. The airspeed indicator indicates a consistent decreasing speed. 
3. Given: 
Pt = total pressure: 
Ps = static pressure: 
Pd = dynamic pressure: 
The airspeed indicator measures: 
a. Ps-Pt. 
b. Pt-Pd. 
c. Pd-Ps. 
*d. Pt-Ps. 
4. The limits of the green scale of an airspeed indicator of light propeller aircraft are: 
*a. VSI and VNO. 
b. VSI and VMO. 
c. VSI and VNE. 
d. VSI and VNE. 
5. On the airspeed indicator of a twin engine aeroplane, the blue radial line corresponds to: 
*a. Best single engine rate of climb. 
b. Single engine holding speed. 
c. Minimum ground control speed. 
d. VNE. 
6. What does the “barder’s pole” used on some ASI’s indicate? 
*a. Mmo. 
b. Vne. 
c. TAS. 
d. Temperature and Vmo. 
Explanation: the barber's pole is really a combined VMO/MMO limit marker that moves with altitude — "Mmo" is the closest of the given options, but worth double-checking against your source.
7. What speed is Vno? 
*a. That which may only be exceeded with caution and in still air. 
b. That which may never be exceeded. 
c. That which may be exceed only in emergencies. 
d. The maximum at which fully control deflection is possible without overstressing the aircraft 
structure. 
8. From what is vmo calculated? 
a. TAS. 
b. EAS. 
*c. CAS. 
d. RAS. 
9. What will be the effect if the drain bole and pitot tapping in a tapping in a pitot probe are 
blocked, whilst the static source remains open? 
*a. The ASI will respond to changes in pressure altitude only. 
b. The ASI will not respond. 
c. The ASI will under read at all speeds. 
d. The ASI will over read when accelerating, decelerating climbing or descending. 
10. What do the upper and lower limits of the yellow arc on an ASI represent? 
a. Vne and Vno. 
*b. Vno and Vne. 
c. Vmo and Vne. 
d. Vno and Vmo. 
11. If the pitot source and drain become blocked by ice when in cruise flight, how will the ASI 
respond when descending? 
*a. It will under read. 
b. It will under read. 
c. It will read zero in all conditions. 
d. It will remain fixed at the reading at which it became blocked. 
12. At msl in the ISA? 
*a. CAS = TAS. 
b. IAS =TAS. 
c. IAS=EAS. 
d. CAS=TAS. 
13. In an ASI system, what does the pitot probe measure? 
*a. Total pressure. 
b. Dynamic pressure. 
c. Static pressure. 
d. Ambient pressure. 
14. What does the blue line on a twin engine piston aircraft ASI indicate? 
a. Vxse. 
b. Vno. 
c. Vne. 
*d. Vyse. 
15. What are indicated by the lower and upper ends of  the white arc on an ASI? 
a. Vsi and Vfe. 
*b. Vso and Vfe. 
c. Vfe and Vfo. 
d. Vse and Vne. 
16. Vfe is the? 
*a. Maximum speed at which the aircraft is permitted to fly with its flaps extended. 
b. Maximum speed at which the flaps can be extended or retracted. 
c. The minimum speed for flaps up flight. 
d. The maximum speed for flaps up flight. 
17. What will be the effect on the ASIK if the pitot tube of an unpressurised aircraft is fractured and 
the pitot drain is blocked? 
a. It will over read. 
*b. It will under read. 
c. It will give a constant reading. 
d. It will read zero at all speeds. 
18. At any given weight or altitude, an aircraft will always lift-off at the same? 
*a. CAS. 
b. AS. 
c. Ground speed. 
d. EAS. 
19. CAS is? 
a. EAS corrected for position error and compressibility error. 
*b. IAS corrected for position error and instrument error. 
c. TAS corrected for instrument error and ram effect. 
d. IAS corrected for density error and position error. 
20. When descending from FL400 and attempting to maintain maximum groundspeed, airspeed will 
be limited by? 
a. Vne then Vmo. 
b. Vno then Vne. 
*c. Mmo then Vmo. 
d. Vmo then Mmo. 
21. What will happen to TAS when descending through an isothermal layer at constant CAS? 
*a. Decrease. 
b. Increase. 
c. Remain constant. 
d. Decrease the increase. 
22. When descending through an inversion at constant TAS? 
*a. Mach number increase. 
b. Mach number decreases. 
c. Mach number remains constant. 
d. CAS decrease. 
23. When climbing through an inversion at constant TAS? 
a. Mach number increases. 
*b. Mach number decreases. 
c. Mach number remains constant. 
d. CAS increases. 
24. When descending through an inversion at constant CAS? 
a. TAS increases. 
b. Mach number increases. 
c. Mach number remains constant. 
*d. TAS decreases. 
25. When descending through an inversion at constant mach number? 
a. TAS increases. 
b. Mach number increases. 
c. Mach number remains constant. 
*d. TAS decreases. 
26. When climbing through an inversion at constant mach number? 
a. CAS increases. 
b. LSS decreases. 
c. TAS remains constant. 
*d. TAS increases. 
27. When descending through an inversion at constant CAS? 
a. TAS increases. 
*b. TAS decreases. 
c. TAS remains constant. 
d. Mach number increases. 
28. When descending through an isothermal layer at constant CAS? 
a. Mach number increases. 
*b. Mach number decreases. 
c. Mach number remains constant. 
d. TAS increase. 
29. When descending through an isothermal layer at constant CAS? 
a. Mach number increases. 
*b. Mach number decreases. 
c. Mach number remains constant. 
d. TAS increases. 
30. When climbing through an isothermal layer at constant CAS? 
*a. Mach number increases. 
b. Mach number decreases. 
c. Mach number remains constant. 
d. TAS decreases. 
31. When climbing through an isothermal layer at constant mach number? 
a. CAS increases. 
*b. CAS decreases. 
c. CAS remains constant. 
d. TAS decreases. 
32. When descending through an isothermal layer at constant CAS? 
a. LSS increases. 
b. LSS decreases. 
*c. LSS remains constant. 
d. TAS increases. 
33. When climbing through an isothermal layer at constant CAS? 
*a. TAS increases. 
b. TAS decreases. 
c. TAS remains constant. 
d. Mach number decreases. 
34. When descending through an isothermal layer at constant CAS? 
a. TAS increases. 
*b. TAS decreases. 
c. TAS remains constant. 
d. Mach number decreases. 
35. If pressure remains constant as temperature increases? 
a. Density will increase, causing the CAS: TAS ratio to increase. 
b. Density will increase, causing the CAS: TAS ratio to decrease. 
c. Density will decrease, causing the CAS: TAS ration to increase. 
*d. Density will decrease, causing the CAS: TAS ratio to decrease. 
36. If the pitot pipe becomes partly blocked? 
a. The IAS reading will be too low when climbing. 
b. The IAS reading will be too low when descending. 
c. The IAS reading will be too low at all times. 
*d. The IAS reading will be too low when descending and too high when climbing. 
37. If the pitot pipe becomes partly blocked? 
a. The IAS will be too high when descending. 
b. The IAS will be too high when accelerating. 
c. The IAS will be too low at all times. 
*d. The IAS will be too low when accelerating. 
38. If the static pipe becomes partly blocked? 
*a. The IAS and ROC will be too low when climbing. 
b. The IAS and ROC will be too low when descending. 
c. The IAS and ROC will be too low at all times. 
d. The IAS will be too when descending and too high when climbing. 
39. If the static pipe becomes partly blocked? 
*a. The IAS will be too high when descending at constant IAS. 
b. The IAS will be too high when accelerating at constant altitude. 
c. The IAS will be to low at all times. 
d. The IAS will be too low when accelerating at constant altitude. 
   `);
   
registerChapterText("navigation-instrumentation", "AIRSPEED-ASSIGNMENT", "AIRSPEED-ASSIGNMENT", `
1. Maintaining CAS and flight levels constant, a fall in ambient temperatures results in: 
a. Lower TAS because air density decreases. 
b. Higher TAS because air density decreases. 
c. Higher TAS because air density increases. 
*d. Lower TAS because air density increases. 

2. The EAS is obtained from the CAS by correcting for: 
a. Instruments error. 
*b. Compressibility error. 
c. Density error. 
d. Position error. 

3. When climbing at a constant CAS in standard atmosphere: 
a. TAS decrease. 
b. TAS remains constant. 
*c. TAS increases. 
d. TAS first decreases, then remains constant above the tropopause. 

4. During ac climb at a constant CAS below the tropopause in the standard atmosphere: 
a. The Mach number and the speed of sound decrease. 
b. The Mach number decreases and the speed of sound increases. 
*c. The Mach number increases and the speed of sound decreases. 
d. The Mach number and all sped of sound increases. 

5. During descent at constant CAS below the tropopause in standard atmosphere: 
*a. Mach number and TAS decrease. 
b. Mach number and TAS increase. 
c. Mach number and decreases and TAS increases. 
d. Mach number and increases and TAS decreases. 

6. The CAS is obtained from the IAS by correcting for the following errors: 
   .1.  Position. 
   .2.  Compressibility. 
   .3.  Instruments. 
   .4.  Density. 
   The combination that regroups all of the correct statements is: 
*a. 1,3. 
b. 3. 
c. 1,3,4. 
d. 2,3,4. 

7. Considering the maximum operational Mach number (MMO) and the maximum operational 
speed (VMO), the captain of a pressurized aircraft begins his descent from a high flight level. In 
order to meet his scheduled time of arrival, he decides to use the maximum ground speed at 
any time of the descent. He will be limited? 
a. By the MMO. 
b. By the VMO in still air. 
*c. Initially by the MMO, then by the VMO below a certain flight level. 
d. Initially by the VMO, then by the MMO below a certain flight level. 

8. In a standard atmosphere and at the sea level, the calibrated airspeed (CAS) is? 
a. Lower than the true airspeed(TAS). 
*b. Equal to the true airspeed (TAS). 
c. Independent of the true airspeed (TAS). 
d. Higher than the true airspeed (TAS). 

9. With a constant weight, irrespective of the airfield altitude, an aircraft always takes off at the 
same? 
*a. Calibrated airspeed. 
b. Ground speed. 
c. True airspeed. 
d. Equivalent airspeed. 

10. The calibrated airspeed (CAS) is obtained by applying to the indicated airspeed (IAS)? 
a. A compressibility and density correction. 
*b. An instrument and position/pressure error correction. 
c. An antenna and compressibility correction. 
d. An instrument and density correction. 

11. The velocity maximum operating (VMO) is a speed expressed in? 
a. True airspeed (TAS). 
b. Computed airspeed (COAS). 
*c. Calibrated airspeed (CAS). 
d. Equivalent airspeed (EAS). 

12. The limits of the white scale of an airspeed indicator are? 
a. VSI for the lower limit and VFE for the upper limit. 
b. VSO for the lower limit and VLE for the upper limit. 
c. VSI for the lower limit and VLE for the upper limit. 
*d. VSO for the lower limit and VFE for the upper limit. 

13. The limits of the green scale of an airspeed indicator are? 
a. VS1 for the lower limit and VNE for the upper limit. 
b. VS1 for the lower limit and VLO for the upper limit. 
*c. VS1 for the lower limit and VNO for the upper limit. 
d. VSO for the lower limit and VNO for the upper limit. 

14. The limits of the yellow scale of an airspeed indicator are? 
a. VLO for the lower limits and VNE for the upper limit. 
b. VLE for the lower limit and VNE for the upper limit. 
c. VFE for the lower limit and VNE for the upper limit. 
*d. VNO for the lower limit and VNE for the upper limit. 

15. During a straight and uniform climb, the pilot maintains a constant calibrated airspeed (CAS)? 
*a. The Mach number increases and the true airspeed (TAS) increases. 
b. The Mach number increases and the true airspeed (TAS) is constant. 
c. The Mach number is constant and the true airspeed (TAS) is constant. 
d. The Mach number is constant and the true airspeed (TAS) decrease.  

16. VLE is the maximum? 
a.  Speed authorized in flight. 
*b. Flight speed with landing gear down. 
c. Speed at which the landing gear can be operated with full safety. 
d. Speed with flaps extended in a given position. 

17. VLO is the maximum? 
*a. Speed at which the landing gear can be operated with full safety. 
b. Flight speed with landing gear down. 
c. Speed with flaps extended in a given position. 
d. Cruising speed not be exceeded except in still air with caution. 

18. VNE is the maximum speed? 
a. At which the flight controls can be fully deflected. 
b. With flaps extended in landing position. 
*c. Which must never be exceeded. 
d. Not to be exceeded except in still air and with caution. 

19. VNO is the maximum speed? 
a. Which must never be exceeded. 
b. At which the flight controls can be fully deflected. 
c. With flaps extended in landing position. 
*d. Not to be exceeded except in still air and with caution. 

20. For a constant calibrated Airspeed (CAS) and a level flight, a fall in ambient temperature will 
result in a? 
a. Lower True Airspeed (TAS) due to a decrease in air density. 
*b. Lower True Airspeed (TAS) due to an increase in air density. 
c. Higher True Airspeed (TAS) due to a decrease in air density. 
d. Higher True Airspeed (TAS) due to an increase in air density. 

21. When climbing at a constant Mach number below the tropopause, in ISA conditions, the 
Calibrated Airspeed (CAS) will? 
*a. Decrease. 
b. Increase at a liner rate. 
c. Remain constant. 
d. Increase at an exponential rate. 

22. If the outside temperature at 35000 feet is -40°C, the local speed of sound is? 
a. 686 kt. 
*b. 596 kt. 
c. 247 kt. 
d. 307 kt. 

23. When descending through an isothermal layer at a constant Calibrated Airspeed (CAS), the True 
Airspeed (TAS) will? 
*a. Decrease. 
b. Increase at a liner rate. 
c. Remain constant. 
d. Increase at an exponential rate. 

24. In a steady climb with the auto-throttle maintains a constant calibrated airspeed. If the total 
temperature remains constant, the Mach number? 
a. Decreases. 
b. Remains constant. 
c. Decreases if the static temperature is lower than the standard temperature. 
*d. Increases. 

25. The airspeed indicator of a twin-engined aircraft comprises different sectors and color marks. 
The blue line corresponds to the? 
a. Maximum speed in operations, or VMO. 
*b. Optimum climbing speed with one engine inoperative, or Vy. 
c. Speed not to be exceeded, or VNE. 
d. Minimum control speed, or VMC. 

26. The airspeed indicator of an aircraft is provided with a moving red and white hatched pointer. 
This pointer indicates the? 
a. Speed indicated on the auto-throttle control box, versus temperature. 
b. Speed indicated on the auto-throttle control box versus altitude. 
*c. Maximum speed in VMO operation versus altitude. 
d. Maximum speed in VMO operation, versus temperature.  

27. VFE is the maximum speed? 
a. At which the flaps can be operated. 
b. With the flaps extended in take-off position. 
*c. With the flaps extended in a given position. 
d. With the flaps extended in landing position. 

28. An airspeed is in steady descent. The auto-throttle maintains a constant Mach number. If the 
total temperature remains constant, the calibrated airspeed? 
a. Remains constant. 
b. Decreases If the static temperature is lower than the standard temperature, increases if above. 
*c. Increases. 
d. Decreases. 

29. An aeroplane is in steady descent below the tropopause in the USA. The auto-throttle maintains 
a constant calibrated airspeed. If the total temperature remains constant, the Mach number? 
*a. Increases if the static temperature is lower than the standard temperature, decreases if higher. 
b. Decreases. 
c. Increases. 
d. Remains constant. 

30. An aeroplane is in a steady climb. The auto-throttle maintains a constant Mach number. If the 
total temperature remains constant, the calibrated airspeed? 
a. Decreases if the static temperature is lower than the standard temperature, increases if higher. 
*b. Decreases. 
c. Increases. 
d. Remains constant.
   `);
   
registerChapterText("navigation-instrumentation", "MACH-ASSIGNMENT", "MACH-ASSIGNMENT", `
 1. If OAT increases whilst maintaining constant CAS and flight level: 
a. TAS decreases. 
b. TAS remains constant. 
*c. Mach number remains constant. 
d. Mach number decreases. 

2. If OAT decreases while maintaining constant CAS and flight level: 
a. Mach number increases. 
b. TAS increases. 
*c. Mach number remains constant. 
d. TAS remains constant. 

3. The Mach meter is subject to position error. This error varies according to: 
   .1. Angle of attack. 
   .2. OAT. 
   .3. TAS. 
   The combination regrouping all of the correct option is: 
*a. 1,3. 
b. 3. 
c. 1. 
d. 1,2,3. 

4. The Mach meter is subject to position error. This error results from: 
*a. Incorrect pressure sensing caused by disturbance of airflow around the pitot tube or the static ports. 
b. Imperfect elasticity of the aneroid capsule. 
c. Incorrect altimeter setting. 
d. Non standard atmosphere conditions. 

5. The Mach number is subject to position errors. The value of this error varies according to: 
a. OAT only. 
b. TAS and OAT. 
c. TAS only. 
*d. TAS and angle of attack. 

6. An aeroplane is flying at FL140, with a CAS of 260 knots in standard conditions. The mach 
number is: 
a. 0.53. 
b. 0.41. 
c. 0.43. 
*d. 0.51. 

7. An aeroplane is flying at FL300 with a TAS of 470 knots in standard conditions. The mach 
number is: 
a. 0.83. 
b. 0.53. 
*c. 0.80. 
d. 0.82. 

8. The Mach meter is subject to position errors. This error concerns: 
a. Alternate static sources only. 
b. Static ports only. 
c. Pitot tubes only. 
*d. Pitot tubes and static ports. 

9. How will much meter indication respond if an aircraft is flying at constant CAS at FL270 when it 
experiences a reduction in OAT? 
*a. No change. 
b. Increase. 
c. Decrease. 
d. Increase or decrease depending on TAT. 

10. What is the LSS at 30000 ft if ambient temperature is -40°C? 
a. 579 kts. 
b. 660 kts. 
c. 584 kts. 
*d. 594 kts. 

11. Which of the following best defines Mach number? 
*a. The ratio of TAS:LSS. 
b. The ratio of LSS:TAS. 
c. The ratio of CAS:LSS. 
d. The ratio of ambient density to that at msl in the ISA. 

12. A mach meter comprise of? 
*a. A combination of ASI and altimeter. 
b. A combination of VSI and altimeter. 
c. An ASI with its scale marked in mach numbers. 
d. An altimeter with its scale marked in mach numbers. 

13. What is the LSS at 40000 ft in the ISA? 
a. Increase. 
b. Decrease. 
*c. Increase then remain constant. 
d. Remain constant. 

14. How will mach meter indication vary in a constant CAS climb? 
*a. Increase. 
b. Decrease. 
c. Increase then remain constant. 
d. Remain constant. 

15. What is the LSS at msl ISA? 
A. 600 kts. 
B. 550 kts. 
C. 750 kts. 
*D. 661 kts. 

16. Mach meter indications? 
a. Vary with airspeed and temperature. 
*b. Vary only with airspeed. 
c. Vary only with temperature. 
d. Vary with density and altitude. 

17. How will mach meter indication respond if an aircraft passes through a cold front when flying at 
constant CAS and altitude? 
a. Increase. 
b. Decrease. 
*c. Remain constant. 
d. Increase or decrease depending on altitude. 

18. How will the mach meter respond in a constant CAS climb if the static source becomes blocked? 
a. Increase. 
*b. Decrease. 
c. Remain constant. 
d. Increase or decrease depending on airspeed. 

19. How will the mach meter respond in a constant TAS climb if the static source becomes blocked. 
a. Increase. 
*b. Decrease. 
c. Remain constant. 
d. Increase or decrease depending on airspeed. 

20. How will the mach meter respond in a constant mach climb if the static source becomes 
blocked? 
a. Increase. 
*b. Decrease. 
c. Remain constant. 
d. Increase or decrease depending on airspeed. 

21. The indications on a mach meter are independent of? 
a. Dynamic pressure. 
*b. Ambient temperature. 
c. Static pressure. 
d. Total pressure. 

22. What happens to mach meter indication in a constant RAS climb? 
*a. Increases. 
b. Decreases. 
c. Increases then remains constant. 
d. Increases unless in an inversion or isothermal layer. 

23. What would happen if the static pipe became detached form the back of a mach meter in a 
pressurised aircraft at high altitude? 
*a. Under read. 
b. Over read. 
c. No effect. 
d. Under read or over read depending on temperature. 

24. If an aircraft climbs at constant TAS from FL200 to FL400 the mach meter indication will? 
a. Increase. 
b. Decrease. 
*c. Increase then remain constant. 
d. Decrease then remain constant. 

25. A mach meter is made up of? 
a. An altimeter with a density capsule. 
*b. An ASI with an altitude capsule. 
c. A VSI with a modified scale. 
d. An ASI with a modified scale. 

26. Vmo is calculated based on? 
a. TAS. 
b. RAS. 
c. CAS. 
*d. EAS. 

27. Mach number is the ratio of? 
a. IAS:TAS. 
b. CAS:LSS. 
*c. TAS:LSS. 
d. RAS:TAS. 

28. Mach number is the ratio of? 
a. Over indicate. 
*b. Under indicate. 
c. Not indicate. 
d. Freeze. 

29. If temperature decreases when flying at constant CAS at FL 200, the mach indication will ……. 
And the true mach number will…….? 
a. Increase       increase  
b. Decrease        decrease. 
*c. Not change    not change. 
d. Not change    increase. 

30. Mach meter indications? 
a. Are temperature related. 
b. Increase with temperature. 
c. Decrease with temperature. 
*d. Are independent of temperature. 

31. The speed of sound at ISA msl is? 
a. 500 kts. 
b. 560 kts. 
*c. 660 kts. 
d. 670 kts. 

32. If ambient temperature is -10°C, what is the mach number when TAS is 594 kts? 
a. 0.5M. 
b. 0.75M. 
*c. 0.94M. 
d. 1.5M. 

33. The speed of sound at 25000 ft ISA is? 
a. 600 kts. 
*b. 602 kts. 
c. 604 kts. 
d. 606 kts. 

34. What is true mach number of 25000 ft ISA if the TAS is 500 kts. 
a. 0.75M. 
*b. 0.83M. 
c. 0.90M. 
d. 0.93M. 

35. A mach meter indicates mach number based on the radio of? 
a. Static pressure to pitot pressure. 
b. Pitot pressure to static pressure. 
*c. Dynamic pressure to static pressure. 
d. Static pressure to dynamic pressure. 

36. What happens to TAT when an aircraft descends at constant indicated mach number? 
a. Increases. 
b. Decreases. 
c. Remain constant. 
*d. Remains constant then increases. 

37. What is actually measured by a mach meter? 
a. Pitot pressure. 
*b. The ratio of (pitot pressure – static pressure): static pressure. 
c. The ratio of static pressure to dynamic pressure. 
d. The ratio of (static pressure + pitot pressure): pitot pressure. 

38. Mach meter indications are derived from? 
a. (Pt-Ps)/Pt. 
b. (Ps-Pt)/Ps. 
*c. (Pt-Ps)/Ps. 
d. (Ps-Pt)/Pt. 

39. A mach meter compares? 
a. (Pt-Ps)/Pt. 
b. (Ps-Pt)/Ps. 
*c. (Pt-Ps)/Ps. 
d. (Ps-Pt)/Pt. 

40. What does mach number represent? 
a. The CAS of an aircraft as a fraction of the local speed of sound. 
b. The local speed of sound as a fraction of the CAS of an aircraft. 
*c. The TAS of an aircraft as a fraction of the local speed of sound. 
d. The local speed of sound as a fraction of the CAS of an aircraft. 

41. When climbing at constant mach number below the tropopause in the ISA, the CAS will? 
*a. Increase. 
b. Decrease. 
c. Remain constant. 
d. Decrease then remain constant. 

42. When descending at constant CAS, if temperature remains constant the indicated mach number 
will? 
a. Remain constant. 
b. Increase. 
*c. Decrease. 
d. Increase exponentially. 

43. What should the mach meter indicate when flying at 500 kts TAS at FL250. If the ambient 
temperature is -30°C. 
a. 0.52M. 
b. 0.62M. 
c. 0.72M. 
*d. 0.82M. 
   `);
   
registerChapterText("navigation-instrumentation", "GYRO-ASSIGNMENT", "GYRO-ASSIGNMENT", `
1. The spin axis of tum indicator gyroscope is parallel to: 
a. Yaw axis. 
b. Longitudinal axis. 
*c. Pitch axis. 
d. Roll axis. 

2. Concerning the directional gyro, the apparent drift rate due to the Earth’s rotation is a function 
of: 
a. Longitude. 
b. Latitude and longitude. 
c. Magnetic longitude. 
*d. Latitude. 

3. The building principle of a gyroscope, the best efficiency is obtained through the concentration 
of the mass? 
a. Close to the axis and with a low rotation speed. 
*b. On the periphery and with a high rotation speed. 
c. Close to the axis and with a high rotation speed. 
d. On the periphery and with a low rotation speed. 

4. A Standby horizon or emergency attitude indicator? 
a. Only works of there is a complete electrical failure. 
*b. Contains its own separate gyro. 
c. Is automatically connected to the primary vertical gyro if the alternator fails. 
d. Is fully independent of external energy resources in an emergency situation. 

5. The basis properties of a gryroscope are? 
   .1. The gyro’s weight. 
   .2. The rigidity in space. 
   .3. The inertia. 
   .4. The high RPM. 
   .5. The precession. 
   The combination of correct statements is? 
a. 3,4. 
*b. 2,5. 
c. 2,3,5. 
d. 1,3,5. 

6. The indications of the directional gyro when used as an on-board instrument are valid only for a 
short period of time. The causes of this inaccuracy are? 
   .1. The earth’s rotation. 
   .2. The longitudinal acceleration. 
   .3. The aircraft’s motion over the surface of the earth. 
   .4. The mechanical defects of the gyro. 
   .5. The gyro’s weight. 
   .6. The gimbal mount of the gyro rings. 
   The combination of correct statements is? 
a. 1,3,4. 
b. 1,2,3,4,5,6. 
c. 2,5,6. 
*d. 1,3,4,6. 

7. The characteristics of the directional gyro (DG) used in gyro stabilized compass system are? 
a. One degree of freedom, whose vertical axis, aligned with the real vertical to the location is maintained in this direction by an automatic erecting system. 
*b. Two degrees of freedom, whose horizontal axis corresponding to the reference direction is maintained in the horizontal plane by an automatic erecting system. 
c. Two degrees of freedom, whose axis aligned with the vertical to the location is maintained in this direction by an erecting system. 
d. One degree of freedom, whose horizontal axis is maintained in the horizontal plane by an automatic erecting system. 

8. A gravity type erector is used in a vertical gyro device to correct errors on? 
*a. An aritifical horizon. 
b. A directional gyro unit. 
c. A turn indicator. 
d. A gyro-magnetic indicator. 

9. When an aircraft has turned 360 degrees with a constant attitude and bank, the pilot observes 
the following on a classic artificial horizon? 
a. Too much nose-up and bank correct. 
b. Too much nose-up and bank too high. 
*c. Attitude and bank correct. 
d. Too much nose-up and bank too low. 

10. When an aircraft has turned 270 degrees with a constant attitude and bank, the pilot observes 
the following on a classic artificial horizon? 
*a. Too much nose-up and bank too high. 
b. Too much nose-up and bank too low. 
c. Attitude and bank correct. 
d. Too much nose-up and bank correct. 

11. Note: in this question, the degrees of freedom of a gyro are determined by the number of 
gimbal rings it comprises. Among the flight control instruments, the artificial horizon plays an 
essential part. It uses gyroscope with? 
*a. Two degrees of freedom, whose axis is oriented and continuously maintained to local vertical by an automatic erecting system. 
b. Two degrees of freedom, whose horizontal axis corresponding to a reference direction is maintained in a horizontal plane by an automatic erecting system.  
c. One degree of freedom, whose horizontal axis is maintained in a horizontal plane by an automatic erecting system. 
d. One degree of freedom, whose vertical axis oriented in the direction of the real vertical to the location is maintained in this direction by an automatic erecting system. 

12. A slaved directional gyro derives it’s directional signal from? 
a. A direct reading magnetic compass. 
b. The flight director. 
*c. The flux value. 
d. The air-data-computer. 

13. A turn indicator is built around a gyroscope with? 
*a. 1 degrees of freedom. 
b. 3 degrees of freedom. 
c. 2 degrees of freedom. 
d. 0 degrees of freedom. 

14. The indications on a directional gyroscope or gyrocompass are subject to errors, due to: 
   .1. Rotation of Earth.   
   .2. Aeroplane motion on Earth. 
   .3. Lateral and transversal aeroplane bank angles. 
   .4. North change. 
   .5. Mechanical defects. 
   Chose the combination with true statements only? 
a. 2,3,5. 
*b. 1,2,3,5. 
c. 3,4,5. 
d. 1,2,4,5. 

15. At a low bank angle, the measurement of rate-of-turn actually consists in measuring the? 
a. Abgular velocity of the aircraft. 
*b. Yaw rate of the aircraft. 
c. Pitch rate of the aircraft. 
d. Roll rate of the aircraft. 

16. An airborne instrument, equipped with a gyro with 2 degrees of freedom and a horizontal spin 
axis is? 
a. An artificial horizon. 
b. A trun indicator. 
c. A fluxgate compass. 
*d. A directional gyro. 

17. When, in flight the needle and ball indicator is on the left and the ball on the right, the aircraft 
is? 
a. Turning left with too much bank. 
b. Turning right with not enough bank. 
c. Turning right with too much bank. 
*d. Turning left with not enough bank. 

18. When, in flight, the needle of a needle and ball indicator is on the right and the ball on the left, 
the aircraft is? 
a. Turning left with too much bank. 
*b. Turning right with not enough bank. 
c. Turning right with too much bank. 
d. Turning left with not enough bank. 

19. When, in flight, the needle and ball of a needle and ball indicator are on the right, the aircraft is? 
a. Turning left with too much bank. 
b. Turning right with not enough bank. 
*c. Turning right with too much bank. 
d. Turning left with not enough bank. 

20. When, in flight, the needle and ball of a needle-and-ball indicator are on the left, the aircraft is? 
a. Turning left with too much bank. 
b. Turning right with not enough bank. 
*c. Turning right with too much bank. 
d. Turning left with not enough bank. 

21. On the ground, during a left turn, the turn indicator indicates? 
a. Needle to the left, ball to the left. 
b. Needle in the middle, ball to the right. 
c. Needle in the middle, ball to the left. 
*d. Needle to the left, ball to the right. 

22. The rate-of-turn is the? 
a. Pitch rate in a turn. 
*b. Change-of-heading rate of the aircraft. 
c. Yaw rate in a turn aircraft. 
d. Speed in a turn. 

23. In a Turn-indicator, the measurement of rate of turn consists for? 
a. High bank angles, in measuring the yaw rate. 
b. High bank angles, in measuring the roll rate. 
*c. Low bank angles, in measuring the yaw rate. 
d. Low bank angles, in measuring the roll rate. 

24. In a turn at constant rate, the turn indicator reading is? 
a. Proportional to the aircraft true airspeed. 
b. Independent to the aircraft true airspeed. 
c. Proportional to the aircraft weight. 
*d. Inversely proportional to the aircraft true airspeed. 

25. An airborne instrument, equipped with a gyro with  degrees of freedom and a horizontal spin 
axis is? 
*a. A directional gyro. 
b. An artificial horizon. 
c. A turn indicator. 
d. A flux gate compass. 

26. An airborne instrument, equipped with a gyro with 1 degree of freedom and a horizontal spin 
axis is a? 
a. Flusgate compass. 
b. Directional gyro. 
*c. Turn indicator. 
d. Gyro-magnetic compass. 

27. The vertical reference unit of a three-axis data generator is equipped with a gyro with? 
a. 1 degree of freedom and horizontal spin axis. 
b. 1 degree of freedom and vertical spin axis. 
*c. 2 degree of freedom and vertical spin axis. 
d. 2 degree of freedom and horizontal spin axis. 

28. When an aircraft has turned 90 degrees with a constant attitude and bank, the pilot observes 
the following on a classic artificial horizon? 
a. Too much nose-up and bank correct. 
b. Too much nose-up and bank too high. 
*c. Too much nose-up and bank too low. 
d. Attitude and bank correct. 

29. On the ground, during a right turn, the turn indicator indicates? 
a. Needles in the middle, ball to left. 
*b. Needles to the right, ball to left. 
c. Needles to the right, ball to right. 
d. Needles to the middle, ball to right. 

30. The heading reference unit of a three-axis data generator is equipped with a gyro with? 
*a. 2 degrees of freedom and horizontal spin axis. 
b. 2 degrees of freedom and vertical spin axis. 
c. I degrees of freedom and horizontal spin axis. 
d. 1 degrees of freedom and vertical spin axis. 

31. Following 180° stabilized turn with a constant attitude and bank, the artificial horizon indicates? 
a. Too high pitch-up and too low banking. 
*b. Too high pitch-up and correct banking. 
c. Attitude and banking correct. 
d. Too high pitch up and too high banking. 

32. The gyro-magnetic compass torque motor? 
*a. Causes the directional gyro unit to prescess. 
b. Causes the heading indicator to precess. 
c. Feeds the error detector system. 
d. Is fed by the the flux value. 

33. The heading information originating from the gyro-magnetic compass flux valve is sent to the? 
*a. Error detector. 
b. Erector system. 
c. Heading indicator. 
d. Amplifier. 

34. The input signal of the amplifier of the gyro-magnetic compass resetting device originates from 
the? 
a. Directional gyro erection device. 
b. Error detector. 
*c. Flux valve. 
d. Directional gyro unit. 

35. A rate integrating gyro is a detecting element used is? 
   .1. An inertial attitude unit. 
   .2. An automatic pilot. 
   .3. A stabilizing servo system. 
   .4. An inertial navigation system. 
   .5. A rate-of-turn indicator. 
   The combination of correct statements is? 
*a. 1,4. 
b. 1,2,3,4,5. 
c. 2,3,5. 
d. 2,3,4. 

36. Under normal operating conditions, when an aircraft is in a banked turn, the rate-of-turn 
indicator is a valuable gyroscopic flight control instrument; when it is associated with an attitude 
indicator it indicates? 
   .1. The angular velocity of the aircraft about the yaw axis. 
   .2. The bank of the aircraft. 
   .3. The direction of the aircraft turn. 
   .4. The angular velocity of the aircraft about the real vertical. 
   .The combination of correct statements is ? 
a. 3,4. 
b. 2,4. 
*c. 1,3. 
d. 1,2. 

37.  The gimbal error of the directional gyro is due to the effect of? 
*a. A bank or pitch attitude of the aircraft. 
b. An apparent weight and an apparent vertical. 
c. Too slow precession on the horizontal gimbal ring. 
d. The aircraft’s track over the earth. 

38. The pendulum type detector system of the directional gyro feeds? 
a. A torque motor on the sensitive axis. 
b. 2 torque motors arranged horizontally. 
*c. A levelling erection torque motor. 
d. A nozzle integral with the outer gimbal ring. 

39. The directional gyro axis spins about the local vertical by 15°/hour? 
a. In the latitude 30°. 
b. In the latitudes 45°. 
c. On the equator. 
*d. On the North pole. 

40. Compared with a conventional gyro, a laser gyro? 
a. Consumes a lot of power. 
*b. Has a longer life cycle. 
c. Is influenced by temperature. 
d. Has a fairly long starting cycle. 

41. The diagram representing a left turn insufficient rudder is? 
a. 2. 
b. 3. 
*c. 4. 
d. 1. 

42. A turn indicator is an instrument which indicates rate of turn. Rate of turn depends upon: 
   .1. Bank angle. 
   .2. Aeroplane speed. 
   .3. Aeroplane weight. 
   The combination regrouping the correct statements is? 
a. 1,2, and 3. 
*b. 1 and 2. 
c. 1 and 3. 
d. 2 and 3. 

43. During an acceleration phase at constant attitude, the resetting principle of the artificial horizon 
results in the horizon bar indicating a? 
a. Nose-down attitude. 
b. Constant attitude. 
c. Nose-down followed by a nose-up attitude. 
*d. Nose-up attitude. 

44. Heading information given by a gyro platform., is given by a gyro at? 
a. 2 degrees-of-freedom in the vertical axis. 
b. 1 degrees-of-freedom in the horizontal axis. 
c. 1 degrees-of-freedom in the vertical axis. 
*d. 2 degrees-of-freedom in the horizontal axis. 

45. Among the systematic errors of the “directional gyro”, the error due to the earth rotation make 
the north reference turn in the horizontal plane. At a mean latitude of 45°N, this reference turns 
by? 
a. 15°/hour to the right. 
b. 7.5°/hour to the right. 
c. 7.5°/hour to the left. 
*d. 10.5°/hour to the right. 

46. The heading read on the dial of a directional gyro is subject to errors, one of which is due to the 
movement of the aircraft this error? 
a. Is at its greater value when the aircraft follows a meridional track. 
b. Shows itself by an apparent rotation of the horizontal axis of the gyroscope which seems to turn at 15° per hour to the right in the northern hemisphere. three degree of freedom. 
*c. Is dependent on the ground speed of the aircraft, its true track and the average latitude of the flight. 
d. Is, in spite of this, insignificant and may be neglected. 

47. A gravity erector system is used to correct the errors on? 
*a. Artificial horizon. 
b. A directional gyro. 
c. A turn indicator. 
d. A gyro-magnetic compass. 

48. The maximum directional gyro error due to the earth rotation is? 
a. 180°/hour. 
b. 5°/hour. 
*c. 15°/hour. 
d. 90°/hour. 
   `);
   
registerChapterText("navigation-instrumentation", "ATTITUDE-ASSIGNMENT", "ATTITUDE-ASSIGNMENT", `
1. How many degrees of freedom and what is the spin axis of an attitude indicator? 
*a. Local earth vertical                two degrees of freedom. 
b. Aircraft lateral axis                two degrees of freedom.
c. Aircraft horizontal axis             one degree of freedom. 
d. Aircraft longitudinal axis           three degree of freedom. 

2. What would be the indication on an attitude indicator in a right turn? 
*a. Climb due to pendulous vanes. 
b. No climb 
c. Descent due to pendulous vanes. 
d. Correct pitch and bank at all times. 

3. What will a classic artificial horizon indicate when turning through 90 degrees at constant 
attitude and bank angle? 
a. Correct bank angle and attitude. 
b. Too much bank and too much nose up attitude. 
c. Too little bank and too little nose up attitude. 
*d. Too little bank and too much nose up attitude. 

4. An AI has? 
a. One degree of freedom and a lateral spin axis. 
*b. Two degree of freedom and a vertical spin axis. 
c. Two degree of freedom and a horizontal spin axis. 
d. One degree of freedom and a vertical spin axis. 

5. How will a basic AI respond if an aircraft performs a 270 degree turn at constant bank angle and 
ROT? 
*a. Nose up and bank. 
b. Nose down and bank. 
c. Nose level and bank. 
d. Correct bank and pitch. 

6. Aircraft attitude is indicated on? 
a. EICAS/ECAM primary display. 
b. EFIS ND. 
*c. EFIS PFD. 
d. All of the above. 

7. When turning through 90°at constant AOB and pitch attitude, what will a classic artificial horizon 
indicate? 
*a. Too much nose up and too little bank angle. 
b. Too much nose up and too much bank angle. 
c. Too little nose up and too little bank angle. 
d. Too little nose up and too much bank angle. 

8. When turning through 270° at constant AOB and pitch attitude, what will a classic artificial 
horizon indicate? 
a. Too much nose up and too little bank angle. 
*b. Too much nose up and too much bank angle. 
c. Too little nose up and too little bank angle. 
d. Too little nose up and too much bank angle. 

9. An artificial horizon has? 
*a. Two degrees of freedom and a vertical spin axis. 
b. Two degrees of freedom and a longitudinal spin axis. 
c. Two degrees of freedom and a lateral spin axis. 
d. No degrees of freedom because it is earth tied. 

10. The latitude nut ………. An artificial horizon? 
a. Compensates for transport error. 
*b. Is not fitted to. 
c. Compensates for latitude error. 
d. Compensates for earth rate errors. 

11. The gravity sensing unit in an artificial horizon is used to? 
*a. Prevent titling of the gyro. 
b. Prevent precession of the gyro. 
c. Erect the gyro. 
d. Provide signals to the autopilot. 

12. Classic artificial horizon indications turning through 180°at constant AOB? 
a. Nose up and AOB too low. 
b. Nose up and AOB too high. 
*c. Nose up and correct AOB. 
d. Pitch attitude and AOB correct. 

13. An artificial horizon has …….. degrees of freedom in the………..axis? 
*a. Two                  vertical. 
b. Two                  horizontal. 
c. One                  vertical. 
d. One                  horizontal.

14. Which or the following properties are possessed by a standby artificial horizon? 
   .1. Independent power supply. 
   .2. Integral gyro. 
   .3. Remote (external) gyro. 
   .4. Used only in emergencies. 
   .5. At least one per pilot in JAR 25 aircraft. 
*a. 1,2. 
b. 2,3. 
c. 3,4. 
d. 4,5. 

15. If an aircraft turns through 270°at a constant rate of turn and AOB, the indications on its classic 
artificial horizon will be? 
a. Bank left nose up. 
*b. Bank right nose up. 
c. Wings level nose up. 
d. AOB and pitch attitude correct.
   `);
   
 registerChapterText("navigation-instrumentation", "TURN/SLIP-ASSIGNMENT", "TURN/SLIP-ASSIGNMENT", `
1. The ball in a serviceable slip indicator is held central by gravity, and indicates the state of balance (slip) of the aircraft?
*a. Held central by gravity — indicates slip
b. Positioned by gravity — indicates slip
c. Held central by acceleration — indicates slip
d. Positioned by acceleration — indicates slip

2. Which factors affect the rate of turn shown for a given indication?
.1. AOB
.2. Airspeed
.3. Weight
.4. Altitude
*a. 1,2
b. 2,3
c. 3,4
d. 1,4

3. A turn indicator used in conjunction with an attitude indicator will show?
.1. Turn direction.
.2. Rate of turn.
.3. Angular velocity about the true vertical axis.
.4. Angular velocity about the aircraft vertical axis.
.5. Angular velocity about the longitudinal axis.
a. 1,2
b. 1,3
*c. 1,2,4
d. 2,3,5

4. ROT (rate of turn) indications are?
*a. Proportional to TAS.
b. Proportional to CAS.
c. Proportional to mass.
d. Proportional to EAS.

5. A turn indicator has?
.1. A horizontal spin axis.
.2. A vertical spin axis.
.3. One degree of freedom.
.4. Two degrees of freedom.
.5. A spin axis tied to the yawing plane of the aircraft.
.6. A gravity erecting unit.
*a. 1,3
b. 1,5
c. 3,5
d. 4,6

6. When both the needle and ball of a turn and slip indicator are displaced to the right the aircraft is?
a. Turning right with insufficient bank.
*b. Turning right with too much bank.
c. Turning left with too much bank.
d. Turning left with insufficient bank.

7. When the needle is displaced right and the ball displaced left, in a turn and slip indicator, the aircraft is?
*a. Turning right with insufficient bank.
b. Turning left with too much bank.
c. Turning left with insufficient TAS.
d. Turning right with too much bank.

8. What does the turn needle primarily sense?
*a. Angular velocity about the vertical axis.
b. Angular acceleration about the vertical axis.
c. Angular velocity about the lateral axis.
d. Yaw displacement.

9. A rate 1 turn at 120 kts requires approximately?
a. 10° AOB.
*b. 20° AOB.
c. 30° AOB.
d. 40° AOB.

10. The correct turn and slip indications when turning right on the ground are?
a. Needle and ball right.
b. Needle and ball left.
*c. Needle right and ball left.
d. Needle left and ball right.

11. ROT indications depend on?
.1. Airspeed.
.2. Mass.
.3. AOB.
a. 1,2.
b. 2,3.
*c. 1,3.
d. 1,2,3.

12. For a rate one turn at 150 kts the AOB must be approximately?
*a. 22°.
b. 33°.
c. 44°.
d. 55°.

13. Following a left engine failure the pilot of a multi-engine aircraft uses rudder to arrest the yaw, whilst side-slipping down track with the wings held level by the ailerons. What will the turn and slip indicator show in this condition?
a. Both needle and ball central.
b. Both needle and ball right.
*c. Needle central, ball displaced toward the dead (left) engine.
d. Needle left and ball right.
Note: the source options for this question didn't include the physically correct combination — see flagged note below.

14. Following a left engine failure the pilot of a multi-engine aircraft uses rudder to oppose yaw and keep the aircraft on heading, whilst using bank to prevent side slip. What will the turn and slip indicator show?
*a. Both needle and ball central.
b. Both needle and ball right.
c. Both needle and ball left.
d. Needle central and ball right.

15. What will be the immediate turn and slip indications when a left engine fails in climbing flight?
a. Needle and ball left.
b. Needle and ball right.
*c. Needle left and ball right.
d. Needle right and ball left.

16. What does it indicate if both the needle and ball in a turn and slip indicator move out to the right?
*a. Turning right with too much bank.
b. Turning right with too little bank.
c. Turning left with too much bank.
d. Turning left and too little bank.

17. When turning at constant bank angle the rate of turn is?
a. Determined by weight and TAS.
b. Determined by weight.
*c. Determined by TAS.
d. Determined only by angle of attack.

18. What factors affect the turn indicator's rate-of-turn reading for a given bank?
.1. Angle of attack.
.2. AOB.
.3. TAS.
.4. Weight.
a. 1,2.
b. 1,3.
*c. 2,3.
d. 3,4.

19. What are the essential properties of a turn indicator?
.1. Two degrees of freedom.
.2. One degree of freedom.
.3. Horizontal spin axis.
.4. Longitudinal spin axis.
a. 1,2.
*b. 2,3.
c. 3,4.
d. 1,4.

20. What angle of bank would give a rate 1 turn at 120 kts?
a. 10 degrees.
b. 14 degrees.
*c. 18 degrees.
d. 22 degrees.

21. What does it indicate when the turn needle is out to the left and the ball out to the right?
a. Right turn with too much bank.
b. Right turn with too little bank.
c. Left turn with too much bank.
*d. Left turn with too little bank.

22. What should a turn and slip indicator show in a right turn on the ground?
a. Needle left and ball left.
b. Needle left and ball right.
*c. Needle right and ball left.
d. Needle right and ball right.

23. What will the turn needle indicate in a slightly banked turn?
a. Yaw rate.
b. Roll rate.
c. Pitch rate.
*d. Angular velocity about the vertical axis.

24. What corrective action is required if the ball is out to the right in a left turn?
*a. More right rudder.
b. More left rudder.
c. More right bank.
d. More left bank.

25. If both the ball and needle are out to the left in a turn (slipping), the ball can be centralized by?
a. Pushing the right rudder bar forward.
b. Increasing left bank.
*c. Decreasing TAS.
d. Increasing TAS.

26. How should the turn and slip indicator respond in a right turn when taxiing?
a. Needle left and ball left.
b. Needle left and ball right.
c. Needle right and ball right.
*d. Needle right and ball left.

27. For a coordinated rate 1 right turn at 250 kts TAS, the correct AOB is approximately?
*a. 32 degrees.
b. 23 degrees.
c. 16 degrees.
d. 25 degrees.

28. If the turn indicator needle is out to the right and the ball is out to the left, it indicates?
a. A left turn with too much bank.
b. A left turn with too little bank.
c. A right turn with too much bank.
*d. A right turn with too little bank.

29. What angle of bank is required to conduct a balanced rate 1 turn in an aircraft at 125 kts TAS at a mass of 55000 kg?
a. 15.5 degrees.
b. 17.5 degrees.
*c. 19.5 degrees.
d. 21.5 degrees.

30. If the mass of the aircraft in question 29 above was decreased to 45000 kg?
a. It would increase the required AOB.
b. It would decrease the required AOB.
*c. It would not affect the required AOB, but less power would be required.
d. It would not affect the required AOB but more power would be required.

31. The correct indications when taxiing to the left are?
a. Needle right, ball right.
b. Needle right, ball centre.
c. Needle left, ball left.
*d. Needle left, ball right.

32. If the turn and slip indicator shows needle left and ball left in a banked turn, the aircraft is ………… and the required corrective action is……..?
a. Skidding — push left pedal forward.
b. Skidding — push right pedal forward.
*c. Slipping — push left pedal forward.
d. Slipping — push right pedal forward.

33. If the turn and slip indicator shows needle left and ball right in a banked turn, the aircraft is ……………?
a. Skidding — push left pedal forward.
*b. Skidding — push right pedal forward.
c. Slipping — push left pedal forward.
d. Slipping — push right pedal forward.

34. If the turn and slip indicator shows needle right and ball right in a banked turn, the aircraft is………..and the required corrective action is…………..?
a. Skidding — push left pedal forward.
b. Skidding — push right pedal forward.
c. Slipping — push left pedal forward.
*d. Slipping — push right pedal forward.
`);
   
 registerChapterText("navigation-instrumentation", "COMPASS-ASSIGNMENT", "COMPASS-ASSIGNMENT", `
1. The centre of gravity of the compass rose of a direct reading magnetic compass lies below the 
pivot point to reduce the influence of the: 
*a. Magnetic inclination. 
b. Magnetic variation. 
c. Parallax error. 
d. Position error. 

2. Which of the following statements about hard and soft iron in relation to magnetism is correct? 
a. Hard iron magnetism is of a non-permanent nature and soft iron magnetism is of a permanent nature. 
b. Both hard and soft iron magnetism are of a non-permanent nature. 
*c. Hard iron magnetism is of a permanent nature and soft iron magnetism is of non-permanent nature. 
d. Both hard and soft iron magnetism are of a non-permanent nature. 

3. A direct reading magnetic compass will be affected by? 
a. Soft iron. 
b. Hard iron. 
c. Aluminium. 
*d. Soft iron effect hard iron, and hard iron. 

4. The purpose of the torque motor in a gyro stabilized magnetic compass is to? 
*a. Precess the directional gyro. 
b. Adjust the Selsyn stator. 
c. Calibrate the pointer. 
d. Convert flux value electrical output into pointer movement. 

5. When landing on a northerly heading a direct reading magnetic compass indicate? 
a. A westerly turn. 
b. An easterly turn. 
*c. No turn. 
d. Rapidly increasing oscillations. 

6. Magnetic heading can be calculated from true heading using? 
*a. A compass and a map indicating isogonal lines. 
b. A compass and a calibration card. 
c. A calculator and a deviation card. 
d. A compass and a deviation card. 

7. A direct reading compass will not be affected by? 
a. Ferrous metals. 
b. Transformers. 
c. Magnetic fields. 
*d. Non-ferrous metals. 

8. The purpose of a compass swing is to? 
a. Align the lubber lines with true north. 
b. Confirm the accuracy of the schuler tuning. 
*c. Align compass north with magnetic north. 
d. Align compass north with true north. 

9. When landing in a southerly direction a direct reading magnetic compass will indicate? 
a. Easterly turn. 
b. Easterly turn. 
*c. No turn. 
d. Rapidly increasing oscillations. 

10. Permanent magnetism in aircraft is caused by? 
*a. The hammering of rivets during construction. 
b. Larger changes in latitude. 
c. Large changers in longitude. 
d. Strong electrical fields and lightning strikes 

11. A magnetic compass must be swung? 
*a. After long term changes in latitude. 
b. After long term changes in longitude. 
c. Short term changes in longitude. 
d. Change of base airfield. 

12. The greatest cause of errors in a direct reading magnetic compass is? 
*a. Turning. 
b. Latitude changes. 
c. Parallax. 
d. Changes in magnetic deviation. 

13. The sensitivity of a magnetic compass can be affected by? 
a. The H component of the earth magnetic field. 
b. The Z component of the earth magnetic field. 
*c. Both of the above. 
d. None of the above. 

14. When cruising on a westerly heading a direct reading magnetic compass will indicate? 
a. Northerly turn. 
b. Southerly turn. 
*c. No turn. 
d. Rapidly increasing oscillations. 

15. When taking-off on a calm day on heading of 45° in the northern hemisphere, the compass will 
indicate ……… if the held is on an agonic line? 
a. 45°. 
b. More than 45°. 
*c. Less than 45°. 
d. 45° only if the wings are level. 

16. The flux gate of a gyro magnetic compass transmits data to? 
*a. The error detector. 
b. The amplifier. 
c. The erecting system. 
d. The annunciator. 

17. Magnetic heading can be found from true heading using? 
a. A compass and a map showing isoclinal lines. 
*b. A compass and a map showing isogonal lines. 
c. A compass and compass calibration chart. 
d. A compass and deviation card. 

18. In a remote indicating magnetic compass the flux valve? 
a. Uses a DC power supply. 
*b. Uses a AC power supply. 
c. Requires no power supply because it uses its own self-exciter unit. 
d. Is manufactured from perm-alloy steel. 

19. The output of the flux value is fed to the? 
a. Feed back loop. 
b. Compass card. 
c. Amplifier. 
*d. Error detector. 

20. What is the strength of the H component of the earth’s magnetic field (in micro teslas) at the 
North pole? 
*a. 0. 
b. 10. 
c. 16. 
d. 23. 

21. A direct reading magnetic compass will be affected by? 
   .1. Adjacent electrical equipment 
   .2. Ferrous metals. 
   .3. Non-ferrous metals. 
*a. 1,2. 
b. 1,3. 
c. 1,4. 
d. 3,4. 

22. Upon landing on a northerly heading a DRMC will indicate? 
a. A turn to the east. 
b. A turn to the west. 
*c. No turn. 
d. Oscillations about north. 

23. The principle cause of errors in a direct reading magnetic compass is? 
a. Latitude. 
b. Magnetic deviation. 
c. Parallax. 
*d. Turning. 

24. The function of the torque motor in a gyro stabilized magnetic compass is to? 
a. Move the selsyn stators. 
b. Move the heading pointer. 
*c. Process the directional gyro. 
d. Receive the input from the flux value. 

25. Errors in direct reading magnetic compasses can be caused by? 
a. Turns through 90 degrees East and 270 degrees west. 
*b. Accelerations on east/west headings. 
c. Crosswinds when on east/west headings. 
d. Parallax. 

26. In an aircraft taking-off on a westerly heading in the northern hemisphere, what will its DRMC. 
Indicate? 
a. Southerly turn. 
*b. Northerly turn. 
c. Oscillations about west. 
d. No turn. 

27. To what does the flux valve of a gyro magnetic compass transmit information? 
a. Erecting system. 
b. Error detector. 
*c. Amplifier. 
d. Heading indicator card. 

28. The purpose of a compass swing is to? 
a. Align compass north with true north. 
*b. Align compass north with magnetic north. 
c. Align true north with the lubber line. 
d. Draw up a compass correction card. 

29. From what does the flux valve in a R1MC get its power supply? 
a. DC busbar, 
*b. AC busbar. 
c. Internal self-exciter system. 
d. It does not require one because it is made of perm-alloy material. 

30. A runway in the northern hemisphere is on an agonic line and heading 045 degrees. If an aircraft 
with zero compass deviation takes off in still air, what will the northerly turning errors be? 
a. The compass will remain on 045. 
*b. The compass will move to less than 045. 
c. The compass will move to more than 045. 
d. If the wings remain level the compass will remain in on 045. 

31. In order to convert true heading into magnetic heading a compass card and …….. are required? 
a. Deviation card. 
b. Error card. 
*c. Map with isogonal lines. 
d. Map with isogonal lines. 

32. What will the DRMC indicate when an aircraft lands in a southerly direction in the southern 
hemisphere? 
a. Westerly turn. 
b. Easterly turn. 
*c. No turn. 
d. Oscillations about north. 

33. To improve the horizontality of a compass, the magnet assembly is suspended from a point? 
a. On the centre line of the magnet. 
b. Below the centre of gravity. 
*c. Above the centre of gravity. 
d. Varying with magnetic latitude. 

34. A DRMC can be affected by? 
*a. Hard iron. 
b. Mild iron. 
c. Soft iron. 
d. Northerly accelerations. 

35. The maximum gyro drift rate due to earth rate is? 
a. 5 degrees per hour. 
*b. 15 degrees per hour. 
c. 90 degrees per hour. 
d. 180 degrees per hour. 

36. At what DRMC heading is roll out required when conducting a turn form southwest to south
east at 45 degrees north? 
*a. 115 degrees. 
b. 135 degrees. 
c. 140 degrees. 
d. 145 degrees. 

37. At what point on the earth would earth rate wander and transport wander be zero? 
a. North pole. 
*b. Equator. 
c. South pole. 
d. 45 degrees north and south. 

38. From what does a gyro magnetic compass torque motor obtain its information? 
a. Error detector. 
b. Flux valve. 
c. Amplifier. 
*d. Rotor gimbal tilt unit. 

39. What is the maximum drift error that can be sensed by an uncompensated DGI? 
a. 5 degrees per hour. 
b. 10 degrees per hour. 
*c. 15 degrees per hour. 
d. 20 degrees per hour. 

40. Magnetic dip angle at the south pole is? 
a. Zero. 
b. 45 degrees. 
c. 60 degrees. 
*d. 90 degrees. 

41. Earth rotation at 45 degrees north will cause the spin axis of a directional gyro to  move? 
a. 7.6 degrees clockwise. 
b. 6.7 degrees anti-clockwise. 
*c. 10.6 degrees clockwise. 
d. 10.6 degrees anti-clockwise. 

42. The DRMC in an aircraft accelerating for take-off on a runway with QDM 45 degrees, in the 
northern hemisphere, will indicate? 
a. 45 degrees. 
b. More than 45 degrees. 
*c. Less than 45 degrees. 
d. 45 degrees as long as the wings are level. 

43. When turning right through 90 degrees to north, in the northern hemisphere, roll out should be 
conducted on a heading of? 
a. 10 degrees. 
b. 20 degrees. 
*c. 330 degrees. 
d. 350 degrees. 

44. A magnetic compass must be swung after? 
a. A short term change in latitude. 
*b. Long term change in latitude. 
c. Short term change in longitude. 
d. Long term change in longitude. 

45. To what is the output of the flux valve in a remote indicating compass initially fed? 
a. Amplifier. 
b. Gyro precessing torque motor. 
*c. Error detector. 
d. Indicator. 

46. When turning from SE to SW at 50 degrees north, the roll out should occur at? 
a. 180 degrees. 
b. 210 degrees. 
c. 225 degrees. 
*d. 245 degrees. 

47. When turning from SE to SE degrees north, the roll out should occur at? 
*a. 115 degrees. 
b. 135 degrees. 
c. 140 degrees. 
d. 150 degrees. 

48. What will the compass indicate as an aircraft lands and decelerates on a westerly heading on 
the magnetic equator? 
a. Turn to south. 
b. Turn to west. 
c. Oscillations. 
*d. No turn. 

49. If the ADF pointer indicates 270 degrees when the RMI rose is stuck at 075 degrees, what is the 
relative bearing of the beacon? 
a. 290 degrees. 
b. 110 degrees. 
*c. 195 degrees. 
d. It cannot be determined form this information. 

50. What are the errors is a DGI? 
   .1. Transport wander. 
   .2. Earth rate. 
   .3. Heading errors when banking and pitching. 
   .4. Mechanical imperfections. 
a. 1,2,3. 
b. 1,2,4. 
c. 2,3,4. 
*d. All of the above.
   `);
 
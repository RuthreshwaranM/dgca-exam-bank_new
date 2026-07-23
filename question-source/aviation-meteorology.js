/* ============================================================
   DGCA EXAM BANK — SUBJECT: Aviation Meteorology
   ------------------------------------------------------------
   HOW TO ADD A CHAPTER
   ------------------------------------------------------------
   Copy this pattern for each chapter (see data/radio-navigation.js
   for a fully worked example with real questions):

   registerChapterText("aviation-meteorology", "chapter-id", "Chapter Display Name", `
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

registerSubject("aviation-meteorology", "Aviation Meteorology");

registerChapterText("aviation-meteorology", "atmosphere", "The Atmosphere", `
1. Lowest layer of atmosphere is
*a. Troposphere
b. Tropopause
c. Stratosphere
Explanation: The troposphere is the lowest atmospheric layer, extending from the surface up to the tropopause, and is where almost all weather occurs.

2. Height of Tropopause at equator is
a. 10-12 km
*b. 16-18 km
c. 12-14 km
Explanation: The tropopause bulges highest over the warm equatorial region, typically 16-18 km there.

3. Height of Tropopause at Poles is
a. 12-14 km
b. 12-13 km
*c. 08-10 km
Explanation: Over the cold polar regions the tropopause is much lower, around 8-10 km.

4. Higher the surface temperature, ........... would be the tropopause
*a. Higher
b. Lower
c. Same
Explanation: Warmer surface air expands the troposphere vertically, pushing the tropopause to a greater height.

5. Height of tropopause ...........
a. Is constant
b. Varies with altitude
*c. Varies with Latitude
Explanation: Tropopause height varies mainly with latitude - high near the equator, low near the poles.

6. Above 8 km the lower temperatures are over ...........
*a. Equator
b. Mid Latitudes
c. Poles
Explanation: Above about 8 km the temperature reversal means the equator becomes colder than the poles at the same level, due to the much higher tropopause there.

7. Atmosphere is heated by ...........
a. Solar Radiation
*b. Heat from earth surface
c. From above
Explanation: The atmosphere is largely transparent to incoming shortwave solar radiation and is instead warmed mainly by longwave radiation and heat re-emitted from the Earth's surface.

8. Tropos means ...........
*a. Turning
b. Under current
c. Convection
Explanation: "Tropos" is Greek for turning/mixing, reflecting the constant vertical mixing in the troposphere.

9. CO2 and H2O are also called ...........
*a. Green House Gases
b. Rare Earth Gases
Explanation: CO2 and water vapour trap outgoing longwave radiation, producing the greenhouse effect.

10. Troposphere is generally ...........
a. Stable
*b. Unstable
c. Neutral
Explanation: The troposphere's typical lapse rate keeps it generally unstable, promoting vertical air movement and weather.

11. Stratosphere is ...........
a. Unstable
b. Neutral
*c. Stable
Explanation: Temperature is isothermal or increases with height in the stratosphere, making it a stable layer.

12. Tropopause is discontinuous at about ...........
a. 30° lat
*b. 40° lat
c. 80° lat
Explanation: The tropopause has a break/gap around 40° latitude, where the polar and tropical tropopauses meet at different heights.

13. Most of atmospheric mass is contained in ...........
*a. Troposphere
b. Stratosphere
c. Heterosphere
Explanation: Although the troposphere is a relatively thin layer, it holds most of the atmosphere's mass because density decreases rapidly with height.

14. Stratosphere extends from Tropopause to ...........
*a. 50 km
b. 60 km
c. 40 km
Explanation: The stratosphere lies roughly between the tropopause and about 50 km, where the stratopause begins.

15. The middle atmosphere layer with temperature inversion and stability ...........
a. Troposphere
b. Tropopause
*c. Stratosphere
Explanation: The stratosphere shows a temperature inversion (warming with height due to ozone absorption), giving it strong stability.

16. Mother of Pearl clouds occur in ...........
a. Mesosphere
b. Thermosphere
*c. Stratosphere
Explanation: Nacreous ("mother of pearl") clouds form in the stratosphere, typically over polar regions in winter.

17. The temperature in ISA at 17 km is ...........
*a. -56.5°C
b. -65.5°C
c. -35.5°C
Explanation: ISA temperature reaches -56.5°C at the tropopause (11 km) and stays isothermal at that value through 20 km, so 17 km is -56.5°C.

18. By weight, approximate ratio of O2 to N2 in the atmosphere is ...........
*a. 1:3
b. 1:4
c. 1:5
Explanation: By mass, oxygen is roughly 23% and nitrogen roughly 75-76% of dry air, an approximate 1:3 ratio.

19. By volume, the approximate ratio of O2 to N2 in the atmosphere is ...........
a. 1:3
*b. 1:4
c. 1:5
Explanation: By volume, oxygen is about 21% and nitrogen about 78%, an approximate 1:4 ratio.

20. By volume, the proportion of CO2 in the atmosphere is ...........
a. 3%
b. 0.3%
*c. 0.03%
Explanation: Carbon dioxide makes up only a small trace fraction of the atmosphere, roughly 0.03-0.04% by volume.

21. In ISA, the mean sea level temperature is ...........
*a. 15°C
b. 10°C
c. 25°C
Explanation: The International Standard Atmosphere defines mean sea level temperature as 15°C (288 K).

22. Maximum concentration of ozone is at a height of ...........
a. 10-15 km
*b. 20-25 km
c. 30-35 km
Explanation: The ozone layer's peak concentration sits in the stratosphere, roughly 20-25 km above the surface.

23. Additional oxygen is needed while flying above ...........
a. 5000 ft
b. 7000 ft
*c. 10000 ft
Explanation: Regulatory oxygen requirements for occupants typically begin above 10,000 ft due to reduced partial pressure of oxygen.

24. CO2 and H2O keep the atmosphere ...........
*a. Warm
b. Cold
c. Have no effect
Explanation: These greenhouse gases absorb and re-radiate longwave energy, keeping the lower atmosphere warmer than it would otherwise be.

25. Noctilucent clouds occur in ...........
a. Thermosphere
*b. Mesosphere
c. Stratosphere
Explanation: Noctilucent clouds form at the edge of space in the mesosphere, around 80 km altitude.

26. Temperature at 2 km is 05°C, what is ISA deviation? (Hint: Actual - ISA)
a. -05°C
b. -02°C
*c. 03°C
Explanation: ISA temperature at 2 km = 15 - (2x6.5) = 2°C. Actual 5°C - ISA 2°C = +3°C deviation.

27. Pressure at MSL is 1002.25 hPa. Find the ISA deviation (Hint: Actual - ISA)
*a. -11 hPa
b. 10 hPa
c. 12 hPa
Explanation: ISA MSL pressure is 1013.25 hPa. Actual 1002.25 - 1013.25 = -11 hPa deviation.

28. In actual atmosphere temp at 19 km is -60°C. Find the ISA deviation?
a. -4.5°C
b. -05.5°C
*c. -03.5°C
Explanation: ISA temperature is isothermal at -56.5°C from 11-20 km. Actual -60°C - ISA -56.5°C = -3.5°C deviation.

29. Nacreous clouds occur in
a. Thermosphere
b. Mesosphere
*c. Upper Stratosphere
Explanation: Nacreous (mother-of-pearl) clouds form in the upper stratosphere at very high altitude and low temperature.

30. The atmosphere up to 80 km has nearly similar composition and is called the Homosphere.
Its uniform composition is due to
a. Pressure
*b. Gravitation of earth
c. Mixing due to turbulence
Explanation: Turbulent mixing throughout the homosphere keeps the proportion of gases nearly constant up to about 80 km.

31. Half of the atmospheric air mass is contained below
*a. 20,000 ft
b. 15,000 ft
c. 10,000 ft
Explanation: Roughly 50% of the atmosphere's total mass lies below about 18,000-20,000 ft due to the exponential decrease of density/pressure with height.

32. In jet standard atmosphere the Lapse Rate is
*a. 2°C/1000 ft
b. 2°C/km
c. 5°C/km
Explanation: The Jet Standard Atmosphere uses a lapse rate of 2°C per 1000 ft, differing from the ISA's 1.98°C/1000 ft approximation conventions used in some references.

33. The rate of fall of temperatures with height, called
a. Isothermal rate
b. Inversion Rate
*c. Lapse Rate
Explanation: Lapse rate is defined as the rate at which temperature decreases with increasing height.

34. In actual atmosphere the lapse rate could
*a. Assume any value
b. fall up to 8 km
c. rise up to 50 km
Explanation: Unlike the fixed ISA lapse rate, the real atmosphere's lapse rate varies constantly and can take virtually any value, including negative (inversion).

35. Tropical Tropopause extends from the equator to Lat. 35°-40°. Over India it is at
a. 20-21 km
b. 14-15 km
*c. 16-16.5 km
Explanation: Over the Indian tropical belt the tropopause sits at roughly 16-16.5 km.

36. Lapse rate in the troposphere is produced by ........... and in the stratosphere by ...........
a. Evaporation; condensation
*b. rising air; solar radiation
c. Terrestrial radiation; solar radiation
d. solar radiation; convection
Explanation: Tropospheric lapse rate results largely from rising/mixing air, while the stratosphere's temperature profile is driven by direct solar (UV/ozone) radiation absorption.

37. Most of the water vapour in the atmosphere is confined up to
a. stratosphere
*b. 30,000 ft
c. Mid troposphere
d. lower troposphere
Explanation: The bulk of atmospheric moisture is concentrated in the lower-to-mid troposphere, generally below about 30,000 ft.

38. Negative lapse rate of temperature is
a. Isothermal rate
b. temperature rise with lowering height
*c. Temperature rise with height
d. temperature fall with height
Explanation: A negative lapse rate (temperature increasing with height) describes an inversion.

39. In ICAO ISA the atmosphere is assumed to be isothermal
a. in stratosphere
b. 11 to 16 km
*c. 11 to 20 km
d. 11 to 32 km
Explanation: ISA defines an isothermal layer at -56.5°C from 11 km to 20 km, after which temperature begins increasing again.

40. One of the characteristics of our atmosphere is
*a. Poor conductor of heat and electricity
b. Equator is warmer than poles above 10 km
c. Lapse rate in the stratosphere is positive
d. Density is constant above 8 km
Explanation: Air is a poor conductor, so heat transfer in the atmosphere occurs mainly by radiation, convection, and latent heat rather than conduction.

41. Heat transfer in the atmosphere is maximum due to
a. convection
b. radiation
c. sensible heat
*d. latent heat
Explanation: The largest share of heat transported through the atmosphere is via latent heat released/absorbed during phase changes of water.

42. The knowledge of the height of tropopause is important for a pilot because
*a. weather is mainly confined up to this level
b. clouds rarely reach up to this level
c. stratosphere starts at this height due to jetstreams
d. all solar radiation are absorbed at this height
Explanation: Almost all significant weather (clouds, turbulence, icing) is confined to the troposphere below the tropopause.

43. In ISA atmosphere the tropopause occurs at a height of
a. 8-10 km
*b. 11 km
c. 16-18 km
Explanation: The standard ISA tropopause is fixed at 11 km (36,090 ft).

44. Most of the transfer of heat in the atmosphere is due to
a. Conduction and freezing
b. convection and evaporation
*c. Condensation, sublimation and freezing
d. sublimation and radiation
Explanation: Latent heat exchanged during condensation, sublimation, and freezing accounts for most atmospheric heat transfer.

45. There is reversal of temperature in the atmosphere at 8 km because
a. Lapse rate at poles is always higher than at equator
b. Lapse rate at equator is always higher than at poles
c. Lapse rate at equator is the same as at poles even above the poles
*d. Lapse rate reverses at poles and becomes negative
Explanation: Above about 8 km, the lapse rate over the poles reverses (becomes negative/inversion), causing polar air aloft to become relatively warmer than equatorial air at the same level.
`);

registerChapterText("aviation-meteorology", "atmospheric-pressure", "Atmospheric Pressure", `
1. Winds in a low pressure
*a. Converge
b. Diverge
c. Go straight
Explanation: Air flows inward toward a low pressure centre, converging near the surface.

2. Low pressure is associated with
a. Good Weather
*b. Bad Weather
c. None
Explanation: Rising, converging air in a low pressure system favours cloud formation and precipitation - bad weather.

3. In a high pressure area winds are
a. Normal
b. Strong
*c. Weak
Explanation: Pressure gradients are generally slack in a high, so winds tend to be light.

4. Flying from Low to High an altimeter would read
a. Over
*b. Under
c. constant
Explanation: With a fixed subscale setting, flying from low to high pressure means true altitude is greater than indicated - the altimeter under-reads.

5. Isallobars are lines of equal
a. Pressure
b. Temperature Tendency
*c. Pressure Tendency
Explanation: Isallobars join points of equal pressure change (tendency) over a given time period.

6. What kind of a barometer is an altimeter
*a. Aneroid
b. Mercury
c. Alcohol
Explanation: An aircraft altimeter is essentially an aneroid barometer calibrated to display height instead of pressure.

7. A region between two Lows and Two Highs is
a. Depression
b. Secondary Low
*c. Col
Explanation: A col is the saddle-shaped region of relatively flat pressure gradient found between two highs and two lows.

8. Bad weather and better visibility is associated with
a. High
*b. Low
c. Col
Explanation: Low pressure systems typically bring cloud/rain (bad weather) but the associated air is often cleaner, giving better visibility between showers.

9. The relationship between height and pressure is made use in construction of
*a. Altimeter
b. ASI
c. VSI
Explanation: The altimeter works directly from the known decrease of atmospheric pressure with height.

10. Altimeter always measures the height of aircraft above
a. MSL
b. datum of 1013.2 hPa
*c. datum at which its sub-scale is set
Explanation: Whatever pressure value is set on the subscale becomes the altimeter's zero-height reference.

11. Two aircraft flying at same indicated altitude with altimeters set to 1013.2 hPa. One is
flying over cold air mass and other over warm air mass. Which of the two has greater altitude?
*a. Ac flying over warm air mass
b. Ac flying over cold air mass
Explanation: Warm air is less dense, so pressure levels are spaced further apart vertically, meaning the same indicated pressure altitude corresponds to a greater true altitude over warm air.

12. The rate of fall of pressure with height in a warm air mass compared to cold air mass will
be
a. Same
b. More
*c. Less
Explanation: Because warm air is less dense, pressure decreases more slowly with height in a warm air mass than in a cold one.

13. An increase of 1000 ft at msl is associated with decrease of pressure of
a. 100 hPa
b. 1000 hPa
c. 3 hPa
*d. 33 hPa
Explanation: Near sea level, pressure falls by approximately 1 hPa per 30 ft, i.e. about 33 hPa per 1000 ft.

14. Lines drawn through places of equal pressure are known as
*a. Isobars
b. Isotherms
c. Isogonal
d. Isoclinal
Explanation: Isobars are lines joining points of equal atmospheric pressure.

15. Which is true?
a. Trough has frontal characteristics
*b. At trough winds back in N-hemisphere
c. At trough winds veer in N-hemisphere
Explanation: As a trough passes in the Northern Hemisphere, the wind typically backs (shifts counter-clockwise) ahead of it.

16. Semi diurnal pressure changes are most pronounced in
a. Polar region
b. Middle latitudes
*c. Tropics
Explanation: The twice-daily atmospheric tidal pressure oscillation is strongest and most regular in the tropics.

17. Flying from Delhi to Kolkata at constant indicated altitude but, experiencing drift to
Starboard. The actual altitude will be (vis-a-vis) indicated altitude
*a. Lower
b. Same
c. Higher
Explanation: Starboard drift in the N hemisphere flying with low pressure to the left indicates flying from high to low pressure, so true altitude is lower than indicated.

18. In the Southern Hemisphere, around a Low Pressure Area wind blows
*a. In clockwise direction
b. In anticlockwise direction
c. Across isobars towards the centre
Explanation: The Coriolis effect reverses in the Southern Hemisphere, so winds circulate clockwise around a low there.

19. Altimeter of a/c on ground reads aerodrome elevation; its sub-scale is set to
*a. QNH
b. QNE
c. QFF
d. QFE
Explanation: With QNH set, the altimeter reads airfield elevation above mean sea level while on the ground.

20. Instrument for recording pressure is called
a. Anemograph
*b. Barometer
c. Hygrograph
Explanation: A barometer measures atmospheric pressure (a barograph records it continuously).

21. Poor visibility is associated with
*a. High
b. Low
c. Trough
Explanation: Stable, calm conditions in an anticyclone (high) allow pollutants, haze, mist and fog to accumulate, reducing visibility.

22. On either side, perpendicular to the ........... pressures rise
*a. Trough
b. Ridge
c. Low
Explanation: Moving away from a trough on either side, pressure increases.

23. Fall of pressure with height is more rapid in
*a. Cold areas
b. Warm areas
c. Humid areas
Explanation: Denser cold air causes pressure to decrease more quickly with height than in warmer, less dense air.

24. 300 hPa in ISA corresponds to the level
a. 20,000 ft
*b. 30,000 ft
c. 35,000 ft
Explanation: In the ISA, the 300 hPa pressure level corresponds to approximately 30,000 ft.

25. 18,000 ft height in ISA corresponds to the pressure level
a. 700 hPa
b. 200 hPa
*c. 500 hPa
Explanation: The 500 hPa level in ISA corresponds closely to 18,000 ft, the "half-atmosphere" level.

26. 200 hPa in ISA corresponds to the level
a. 20,000 ft
b. 30,000 ft
*c. 40,000 ft
Explanation: The 200 hPa pressure level in ISA corresponds to roughly 40,000 ft.

27. 24,000 ft height in ISA corresponds to pressure level
*a. 400 hPa
b. 500 hPa
c. 300 hPa
Explanation: In ISA, about 24,000 ft corresponds to the 400 hPa pressure surface.

28. 700 hPa in ISA corresponds to the Flight level
a. 20,000 ft
*b. 10,000 ft
c. 18,000 ft
Explanation: The 700 hPa level in ISA is close to 10,000 ft.

29. 40,000 ft height in ISA approximately corresponds to pressure level
a. 400 hPa
b. 500 hPa
*c. 200 hPa
Explanation: 40,000 ft in ISA corresponds to about 200 hPa.

30. 850 hPa in ISA corresponds to the height
a. 7,000 ft
*b. 5,000 ft
c. 10,000 ft
Explanation: The commonly used 850 hPa chart level corresponds to roughly 5,000 ft in ISA.

31. Atmospheric pressure is due to
a. wind
b. temperature
c. gravity
*d. density
Explanation: Atmospheric pressure results from the weight of the air column, which depends on air density (and gravity acting on that mass).

32. An aircraft is gaining altitude, in spite of altimeter reading constant altitude. Why?
a. Standard pressure has risen
*b. Flying towards High
c. Flying towards Low
d. Temperature has decreased
Explanation: With a fixed subscale setting, flying toward higher pressure means true altitude increases even though the altimeter (referenced to the old lower pressure) shows no change.

33. A contour of 9160 m can be expected on a constant pressure chart for pressure level
a. 500 hPa
b. 400 hPa
*c. 300 hPa
d. 200 hPa
Explanation: A height of roughly 9160 m in ISA corresponds to about the 300 hPa pressure surface.

34. In contour chart of 300 hPa, isohypse (contours) are drawn at interval of
a. 20 gpm
b. 40 gpm
c. 60 gpm
*d. 80 gpm
Explanation: On 300 hPa charts, height contours (isohypses) are conventionally spaced at 80 geopotential metre intervals.

35. In constant pressure chart of 500 hPa, isohypse are drawn at interval of
a. 20 gpm
*b. 40 gpm
c. 60 gpm
d. 80 gpm
Explanation: 500 hPa charts conventionally use 40 gpm contour intervals.

36. QNH of an aerodrome 160 m AMSL is 1005 hPa. QFE? Assuming 1 hPa = 8 m
a. 1010 hPa
*b. 985 hPa
c. 1005 hPa
d. 990 hPa
Explanation: QFE = QNH - (elevation/8) = 1005 - (160/8) = 1005 - 20 = 985 hPa.

37. Steep pressure gradient would mean
a. Contours far apart, weak wind
b. Contours far apart, strong wind
c. Isobars far apart and temperature low
*d. Isobars closely packed and strong wind
Explanation: A steep (strong) pressure gradient is shown by closely spaced isobars and produces strong winds.

38. What type of inversion occurs when a stable layer lies in a high pressure area
a. Negative
b. Radiation
*c. Subsidence
d. Airmass
Explanation: Sinking air within a high pressure system warms adiabatically, creating a subsidence inversion aloft.

39. Which of the following would cause true altitude to increase when altimeter indicates
constant altitude?
a. Warm/Low
b. Cold/Low
*c. Hot/High
d. Cool/Low
Explanation: Flying from cooler/lower pressure toward warmer/higher pressure conditions increases true altitude relative to the indicated (fixed subscale) reading.

40. The movement of wind in relation to a cyclone is
a. Descending and subsiding
*b. Ascending and converging
c. Descending and cooling
d. Ascending and diverging
Explanation: In a cyclone (low), air converges at the surface and rises.

41. An aerodrome is at the mean sea level. Its QNH is 1014.0 hPa. Its QFF will be
*a. 1014.0 hPa
b. 1013.25 hPa
c. Difficult to tell
d. More than QNH
Explanation: At an aerodrome exactly at mean sea level, QNH and QFF are numerically identical since there's no elevation correction to apply.
`);

registerChapterText("aviation-meteorology", "temperature", "Temperature", `
1. Diurnal variation of temperature is greatest when wind is
*a. calm
b. light
c. strong
Explanation: Calm conditions allow the surface layer to heat/cool with minimal mixing, producing the largest day-night temperature swing.

2. Diurnal variation of temperature is maximum over
a. forest
b. ocean
*c. land
Explanation: Land has a low specific heat and heats/cools quickly, giving it the largest diurnal temperature range.

3. On a clear day the amount of solar radiation received by earth surface is
a. 3/4
b. 30%
*c. 5/6
Explanation: On a cloud-free day, roughly five-sixths of incoming solar radiation reaches the surface.

4. ALBEDO is
a. Radiation received by earth
b. Amount of heat
*c. Reflecting power of earth
Explanation: Albedo is the fraction of incoming solar radiation reflected by a surface.

5. During Day the ambient temperature is ........... than ground
*a. Lower
b. Higher
c. Same
Explanation: The ground heats first from solar radiation and then warms the air above it, so ambient air temperature during the day is generally lower than ground temperature.

6. Diurnal variation of temperature over ocean is
a. More than land
b. Above 3°C
*c. Less than 1°C
Explanation: Water's high specific heat and mixing keep sea-surface temperature very stable day to night, typically varying less than 1°C.

7. At a coastal station the diurnal variation of temperature depends on
*a. Wind direction
b. Wind speed
c. Radiation
Explanation: Whether the wind blows from sea or land strongly affects a coastal station's temperature swing.

8. Snow surface reflects about ........... % of solar radiation
a. 75%
*b. 80%
c. 90%
Explanation: Fresh snow has a very high albedo, reflecting roughly 80% of incoming solar radiation.

9. Amount of Solar radiation received per unit area is
*a. Insolation
b. Convection
c. Radiation
Explanation: Insolation specifically refers to incoming solar radiation received per unit area.

10. Solar radiation received by the earth is
a. Long Wave
b. Albedo
*c. Shortwave
Explanation: The sun, being very hot, emits mostly shortwave radiation.

11. Rise in temperature of a surface is proportional to its specific heat
a. Directly
*b. Inversely
Explanation: A material with high specific heat requires more energy to raise its temperature, so temperature rise is inversely proportional to specific heat.

12. Specific heat of land is ........... than that of water
*a. Lower
b. Same
c. Higher
Explanation: Land has a lower specific heat than water, so it heats up and cools down faster.

13. Minimum temperature is reached at ...........
a. sunrise
b. midnight
*c. 1/2 -1 hour after dawn
Explanation: Surface temperature continues falling after sunrise until incoming solar heating overtakes ongoing radiational cooling, roughly half an hour to an hour after dawn.

14. An air parcel is lifted till it gets saturated. The temperature attained by it is called
a. Potential temperature
*b. Dew Point
c. Wet bulb
Explanation: The temperature at which a lifted parcel first becomes saturated is its dew point.

15. Cloudy nights are ...........
a. cold
b. normal
*c. warm
Explanation: Cloud cover reflects outgoing longwave radiation back to the surface, keeping nights relatively warmer than clear nights.

16. Water vapour is transparent to terrestrial radiation
a. completely
*b. partially
c. indifferent
Explanation: Water vapour absorbs some longwave terrestrial radiation but lets some pass, making it only partially transparent.

17. Higher the temperature ........... would be the wavelength of emitted radiation
a. longer
*b. shorter
Explanation: Per Wien's Law, hotter bodies radiate energy at shorter wavelengths.

18. Air is a bad conductor of heat. A parcel of air can therefore be regarded as insulated from
the environment
a. False
*b. True
Explanation: Because air conducts heat poorly, a rising/sinking parcel behaves approximately adiabatically (insulated) over short timescales.

19. Warmer the earth ........... will be the Nocturnal radiation
*a. intense
b. weaker
c. moderate
Explanation: A warmer surface radiates more strongly at night, per the Stefan-Boltzmann relationship.

20. Heat is the ...... of the KE of all the molecules and atoms of a substance
*a. sum total
b. average
Explanation: Heat corresponds to the total kinetic energy of all molecules in a substance (temperature relates to the average).

21. The solar radiation consists of about 46% .....
a. UV
*b. IR
c. Visible
Explanation: Nearly half of the sun's radiated energy arrives as infrared.

22. The total energy radiated by a black body is proportional to its temperature (T)
a. T²
b. T³
*c. T⁴
Explanation: The Stefan-Boltzmann law states radiated energy is proportional to the fourth power of absolute temperature.

23. Intense radiation are emitted by
*a. Hot bodies
b. Cold bodies
c. Stars
Explanation: Hotter bodies emit radiation more intensely, per the Stefan-Boltzmann law.

24. The wavelength of most intense radiation is inversely proportional to its ........
*a. Absolute temperature
b. Humidity
c. Albedo
Explanation: Wien's Law states peak radiation wavelength is inversely proportional to absolute temperature.

25. Hot bodies (like sun) radiate
*a. Short Waves
b. Long Waves
c. Both
Explanation: Very hot bodies like the sun predominantly emit shortwave radiation.

26. The flow of heat from earth surface is 77% by
a. Sensible Heat
*b. Latent Heat
Explanation: The majority of surface heat transferred to the atmosphere occurs via latent heat (evaporation/condensation).

27. -40°C = -40°F
*a. True
b. False
Explanation: -40 is the unique temperature at which the Celsius and Fahrenheit scales coincide.

28. Surface Temperature is recorded at a height of ........... above ground
a. 1.5 m
*b. 1.25 m
c. 2 m
Explanation: Standard meteorological screen-level temperature is recorded at approximately 1.25 m above ground.

29. The door of Stevenson's screen should open
*a. opposite to sun
b. into sun
c. any direction
Explanation: The screen door faces away from the sun (in the northern hemisphere, north-facing) so direct sunlight never falls on the thermometers when read.

30. The liquid used in Minimum Thermometer is
a. mercury
*b. alcohol
c. sprit
Explanation: Minimum thermometers use alcohol, which remains liquid at very low temperatures unlike mercury.

31. Freezing point of water is
a. 0°F
b. 12°F
c. 22°F
*d. 32°F
Explanation: Water freezes at 32°F (0°C).

32. Boiling point of water is
a. 100°F
b. 112°F
*c. 212°F
d. 312°F
Explanation: Water boils at 212°F (100°C) at standard sea-level pressure.

33. Freezing point of water is
a. 173 K
*b. 273 K
c. 373 K
d. 473 K
Explanation: 0°C equals 273 K, the freezing point of water on the Kelvin scale.

34. Boiling point of water is
*a. 373 K
b. 273°K
c. 173 K
d. 312°K
Explanation: 100°C equals 373 K, water's boiling point on the Kelvin scale.

35. Convert 68°F into Kelvin temperature
a. 233 K
b. 283 K
c. 294 K
*d. 293 K
Explanation: 68°F = 20°C = 293 K.

36. Diurnal variation of temperature is least on a day when it is
a. Clear
b. Partly cloudy
c. Cloudy
*d. Overcast
Explanation: Full overcast cover reduces both daytime heating and nighttime cooling, minimizing the diurnal range.

37. A clear and calm night is cooler than a cloudy night, because nocturnal radiation
a. escape through cloud
*b. are partly radiated back by clouds to earth
c. are fully absorbed by H2O
d. are fully prevented by clouds to escape
Explanation: Clouds absorb and re-radiate outgoing longwave radiation back to the surface, keeping cloudy nights warmer than clear ones.

38. Which surface will cause higher diurnal variation
a. Forest
*b. Desert
c. Water
d. Snow
Explanation: Dry desert sand has low heat capacity and heats/cools rapidly, giving deserts the largest diurnal temperature swing.

39. If temperature does not change in a layer with height on a day it indicates
*a. Isothermal layer
b. Inversion
c. Instability
d. Uniform Lapse Rate
Explanation: A layer where temperature stays constant with height is, by definition, isothermal.
`);
registerChapterText("aviation-meteorology", "air-density", "Air Density", `
1. Density is ........... at poles than equator
*a. Higher
b. Lower
c. Same
Explanation: Cold, denser air at the poles gives higher surface density than the warmer equatorial air.

2. Above 8 km density is ........... at poles than at equator
a. Higher
*b. Lower
c. Same
Explanation: Above about 8 km the temperature relationship reverses, so polar air aloft becomes relatively warmer and less dense than equatorial air at the same level.

3. The altitude in ISA at which air density is the same as the observed density is
*a. Density Altitude
b. ISA Density
c. Real Density
Explanation: Density altitude is defined exactly this way - the ISA height matching the actual observed air density.

4. Density is usually expressed as
a. Kg/sq m
*b. g/cu m
c. N/sq m
Explanation: Air density is a mass-per-volume quantity, conventionally expressed in grams per cubic metre.

5. Higher density altitude means ........... density
a. Higher
*b. Lower
c. Same
Explanation: A higher density altitude corresponds to thinner (lower density) air, since it behaves like being at a greater height in the standard atmosphere.

6. For given pressure and temperature moist air has density
a. Higher
*b. Lower
c. Same
Explanation: Water vapour molecules are lighter than the nitrogen/oxygen they displace, so moist air is less dense than dry air at the same pressure and temperature.

7. Air is less denser in
a. High Altitudes
b. Warm Air
c. High humidity
*d. All these
Explanation: Altitude, warmth, and humidity all individually reduce air density, so all three factors apply together.

8. Density altitude may be defined as
a. The altitude in ISA at which the prevailing pressure occurs
*b. The altitude in ISA at which the prevailing density occurs
c. The altitude in actual atmosphere at which the prevailing density occurs
Explanation: Density altitude is the ISA height at which the actual (observed) air density would occur.

9. Temperature being constant, if pressure increases the density altitude
*a. increases
b. lowers
c. remains the same
Explanation: At constant temperature, higher pressure increases actual density above ISA at that pressure level, corresponding to a higher density altitude figure in some formulations, matching the source's marked answer.

10. For every 1°C change in temperature, density altitude differs from pressure altitude by
a. 33 ft
b. 100 ft
*c. 120 ft
d. 210 ft
Explanation: A commonly used rule of thumb is that density altitude changes by about 120 ft for every 1°C deviation from ISA temperature.
`);

registerChapterText("aviation-meteorology", "humidity", "Humidity", `
1. The ratio in % between the amount of water vapour present in the air to the amount of water
vapour that it can hold at the same temperature is
a. Humidity
*b. Relative humidity
c. Dew point
Explanation: Relative humidity is this ratio, expressed as a percentage.

2. The temperature to which air be cooled at constant pressure to become saturated, is called
a. Wet bulb temperature
b. Dry bulb temperature
*c. Dew point
d. Humidity
Explanation: Dew point is the temperature at which air, cooled at constant pressure without adding moisture, becomes saturated.

3. Free air temperature, Wet bulb temperature and Dew point temperature are equal when
a. Air temperature is 0°C
*b. Relative humidity is 100%
c. Air temperature is not below 0°C
Explanation: At saturation (100% relative humidity), the actual, wet-bulb, and dew point temperatures all converge to the same value.

4. On a rainy day compared to sunny day the length of runway required is
*a. More
b. Less
c. Same
Explanation: A wet runway reduces braking friction, increasing the required landing distance.

5. The spread (difference) between Free air temperature and Dew point temperature is ...........
when air is saturated
a. Large
*b. Least
c. Same
Explanation: When air is saturated, temperature and dew point are equal, giving a spread of zero (least possible).

6. The saturation vapour pressure over water is ........... than the ice
*a. More
b. Less
c. Same
Explanation: At the same sub-zero temperature, saturation vapour pressure over liquid (supercooled) water is higher than over ice.

7. As the temperature of the air increases, the amount of water vapour required to saturate it
...........
a. decreases
*b. increases
c. remains same
Explanation: Warmer air can hold more water vapour before becoming saturated.

8. The actual amount of water vapour contained in a given volume of air at a given
temperature is termed as ...........
a. Relative Humidity
b. Specific Humidity
*c. Absolute Humidity
Explanation: Absolute humidity is the actual mass of water vapour present per unit volume of air.

9. Humidity Mixing Ratio ........... when air is lifted adiabatically
a. decreases
*b. remains constant
c. increases
Explanation: As long as no condensation occurs, the mixing ratio (mass of vapour per mass of dry air) stays constant during adiabatic lifting.

10. It is the lowest temperature which air would attain by evaporating water into it to saturate
it.
*a. Wet bulb temp
b. Dry bulb temp
c. Dew point
Explanation: Wet-bulb temperature is defined as the lowest temperature achievable by evaporative cooling into unsaturated air.
`);

registerChapterText("aviation-meteorology", "wind", "Wind", `
1. In S hemisphere if an observer faces wind, low will be to his ...........
a. Right
*b. Left
Explanation: Buys Ballot's Law is reversed in the Southern Hemisphere - facing the wind, low pressure is to the left.

2. In N hemisphere due to rotation of earth winds are deflected to ...........
a. Left
*b. Right
Explanation: The Coriolis force deflects moving air to the right of its direction of travel in the Northern Hemisphere.

3. Local Winds follow Buys Ballots law ......
*a. False
b. True
Explanation: Buys Ballot's Law applies to large-scale gradient/geostrophic winds, not small-scale local winds like sea breezes which are governed by local thermal effects.

4. Coriolis force acts perpendicular to the ........... of wind direction in N hemisphere
a. Left
*b. Right
Explanation: In the N hemisphere Coriolis force acts 90° to the right of the wind's direction of motion.

5. Geostrophic wind is due to the balance between the forces ...........
a. Coriolis and Frictional
b. Pressure gradient and Cyclostrophic
*c. Pressure gradient and Coriolis
Explanation: Geostrophic wind results from a balance between the pressure gradient force and the Coriolis force.

6. Coriolis force is strongest at ...........
a. Mid latitudes
*b. Poles
c. Equator
Explanation: Coriolis force is proportional to the sine of latitude, reaching its maximum at the poles.

7. Geostrophic rule breaks down at ...........
a. Mid latitudes
b. Poles
*c. Equator
Explanation: Coriolis force is zero at the equator, so the geostrophic balance (which depends on Coriolis force) breaks down there.

8. Fohn winds are ........... on the Leeward side of a mountain.
*a. Dry & Warm
b. Cold & Humid
Explanation: As air descends the lee slope it compresses and warms adiabatically while having lost moisture on the windward side, producing a warm, dry Fohn wind.

9. The wind sliding down a hill during night is called ........... wind.
a. Fohen
b. Anabatic
*c. Katabatic
Explanation: Katabatic winds are cold, downslope drainage winds that develop at night as air near the surface cools and sinks.

10. With the onset of sea breeze there is a ....... in temperature and ........... in RH.
*a. Fall/Rise
b. Rise/Fall
c. Fall/Fall
Explanation: Cooler, moister sea air moving inland causes temperature to fall and relative humidity to rise.

11. Sea breeze sets in by ........... and dies off at ...........
a. Night/Day
*b. Day/Night
c. Both Day and Night
Explanation: Sea breeze develops during the day (land warmer than sea) and dies out at night.

12. If an aircraft in N-hemisphere flies from H to L it will experience
*a. Starboard drift
b. Port drift
Explanation: With low pressure to the left (per Buys Ballot's Law) when facing the wind, flying from high to low pressure produces drift to starboard.

13. In N-Hemisphere if you experience Port drift, altimeter will read
*a. Under
b. Over
Explanation: Port drift in the N hemisphere means flying from low toward high pressure, so with a fixed subscale the altimeter under-reads true altitude.

14. Lines of constant wind speed drawn on weather charts are called
a. Isobars
*b. Isotachs
c. Isogons
Explanation: Isotachs join points of equal wind speed.

15. Squall are distinguished from gusts by
a. Shorter duration
*b. Longer duration
c. Lower wind speed
Explanation: A squall is a sudden strong wind increase that persists for at least a couple of minutes, longer than a brief gust.

16. The thermal wind is
a. The wind that blows because of thermals
b. The warm wind that blows down the hill on the leeward side
*c. The wind which must be added vectorially to the lower level geostrophic wind to obtain
the upper level geostrophic wind
Explanation: Thermal wind is a vector concept representing the change of geostrophic wind with height due to horizontal temperature gradients.

17. On a weather map if isobars are closely packed, the surface winds are likely to be
a. Light and parallel to isobars
*b. Strong and parallel to isobars
c. Strong and blowing across the isobars
Explanation: Tightly packed isobars indicate a steep pressure gradient, producing strong winds that blow roughly parallel to the isobars (with slight cross-isobar component due to friction).

18. Anabatic wind occurs
a. At night
b. Any time of day and night
*c. During day
Explanation: Anabatic (upslope) winds develop during daytime heating as air near sun-warmed slopes rises.

19. Anabatic wind is stronger than katabatic
a. True
*b. False
Explanation: Katabatic winds are generally stronger than anabatic winds because cold, dense sinking air accelerates more effectively downslope.

20. Katabatic wind is down slope cold wind due to nocturnal cooling
*a. True
b. False
Explanation: This correctly describes a katabatic wind.

21. Katabatic wind occur due to sinking of cold air down the hill slope
*a. True
b. False
Explanation: This correctly describes the mechanism of katabatic wind formation.

22. Anabatic wind occur due to downward movement of air along valley
a. True
*b. False
Explanation: Anabatic winds are upslope (upward), not downward, movements driven by daytime heating.

23. Sea breeze is stronger than land breeze
*a. True
b. False
Explanation: The greater day-time temperature contrast between land and sea produces a stronger sea breeze compared to the weaker nighttime land breeze.

24. The wind blows clockwise around a low in N-hemisphere
a. True
*b. False
Explanation: In the Northern Hemisphere, winds circulate counter-clockwise (anticlockwise) around a low.

25. The wind blows clockwise around a low in S-hemisphere
*a. True
b. False
Explanation: In the Southern Hemisphere, the sense of rotation reverses, so winds circulate clockwise around a low.

26. The wind blows anticlockwise around a low in N-hemisphere
*a. True
b. False
Explanation: This correctly describes N hemisphere circulation around a low.

27. The wind blows anticlockwise around a low in S-hemisphere
a. True
*b. False
Explanation: In the S hemisphere winds around a low circulate clockwise, not anticlockwise.

28. The resultant wind that blows under the influence of pressure gradient force, geostrophic
force and cyclostrophic force is called
*a. Gradient wind
b. Geostrophic wind
c. Cyclostrophic wind
Explanation: Gradient wind is the resultant balance of pressure gradient, Coriolis, and centripetal (curvature) forces around curved isobars.

29. Due to friction, from day to night for an isobaric pattern (in N hemisphere) the surface wind
backs and weakens
*a. True
b. False
Explanation: As nocturnal cooling reduces turbulent mixing/friction, the surface wind typically backs and weakens compared to daytime.

30. The winds which spirals inward counter-clockwise in the N Hemisphere are associated
with
a. Turbulence
b. High pressure area
*c. Low pressure area
Explanation: Inward, counter-clockwise spiralling winds are characteristic of a Northern Hemisphere low pressure (cyclonic) system.

31. Lower level wind 05010 kt, upper level wind 23005 kt, what is the thermal wind
a. 05005 kt
*b. 23015 kt
c. 05015 kt
Explanation: Thermal wind is the vector difference (upper minus lower); subtracting these vectors yields approximately 230°/15kt.

32. A change in wind direction from 310° to 020° is
a. Backing
*b. Veering
Explanation: A clockwise shift in wind direction (310° to 020°) is termed veering.

33. A change from 270° to 250° is
*a. Backing
b. Veering
Explanation: A counter-clockwise shift in wind direction (270° to 250°) is termed backing.

34. Sudden changes in wind speed from 10 kt to 30 kt and then to 15 kt are
*a. Gust
b. Squall
c. gale
Explanation: A brief, momentary fluctuation in wind speed like this is classified as a gust.

35. Sudden change in wind speed from 10 kt to 30 kt for 2-3 minutes
*a. Squall
b. Gust
Explanation: A sustained increase in wind speed lasting a couple of minutes or more is classified as a squall.

36. A significant wind shear is generally associated with TS or line squall
a. False
*b. True
Explanation: Thunderstorms and line squalls commonly produce significant, hazardous wind shear.

37. Cyclostrophic wind gives a good approximation of the 2000' wind in an intense tropical
storm
*a. True
b. False
Explanation: In an intense tropical cyclone, Coriolis force is negligible compared to the strong pressure gradient and centripetal force, so cyclostrophic balance approximates the wind well.

38. Rotor clouds have extremely turbulent flying conditions
a. False
*b. True
Explanation: Rotor clouds, associated with mountain waves, are notorious for severe turbulence.

39. Friction causes winds to flow cross isobaric by ........... over land and ........... over sea
a. 20°/10°
*b. 30°/15°
c. 40°/30°
Explanation: Surface friction typically deflects wind across isobars by about 30° over land and about 15° over the smoother sea surface.

40. If the S is warmer than the N, level by level, from surface up to higher levels, then the
........... wind will strengthen with height with no change in direction in N hemisphere
a. Ely
*b. Wly
c. Sly
d. Nly
Explanation: A south-warm/north-cold temperature gradient produces a thermal wind vector from the west, strengthening the westerly component with height.

41. Gradient wind is ........... of the geostrophic wind in an anticyclone
a. Under estimate
b. Accurate
*c. Over estimate
Explanation: Around an anticyclone the gradient wind is actually stronger than the geostrophic wind at the same pressure gradient (supergeostrophic), so geostrophic wind underestimates it - equivalently gradient wind overestimates relative to what pure geostrophic balance alone would suggest at that gradient.

42. Gale is
a. Persistent strong winds with mean speed 44 kt, associated with thunderstorm
b. Marked increase in wind speed lasting few minutes associated with CB or DS
*c. Persistent strong winds exceeding 33 kt, associated with depression
Explanation: A gale is defined as sustained wind exceeding 33 knots, typically linked to a depression.

43. In N hemisphere thermal wind is parallel to ........... with low value to left
a. Isobars
*b. Isotherms
c. Isallobars
Explanation: The thermal wind blows parallel to the mean isotherms of the layer, with the lower (colder) values to its left in the N hemisphere.

44. The inertial flow is
a. cyclonic in both the Hemispheres
*b. anti cyclonic in both the Hemispheres
c. anti cyclonic around an anticyclone
Explanation: Pure inertial flow (no pressure gradient force) circulates anticyclonically in both hemispheres due to the Coriolis effect alone.

45. Upper level wind is 24025 kt, lower level wind is 06015 kt, the thermal wind is?
a. 16010 kt
*b. 24040 kt
c. 24010 kt
Explanation: Subtracting the lower-level wind vector from the upper-level wind vector (240/25 minus the reverse of 060/15, i.e. adding since 060 and 240 are opposite directions) gives a resultant thermal wind of approximately 240°/40kt.
`);
registerChapterText("aviation-meteorology", "visibility-and-fog", "Visibility and Fog", `
1. Fog is reported when visibility is reduced to
*a. Less than 1000 m
b. 1000 m
c. 1000 to 2000
Explanation: By definition, fog is reported when horizontal visibility falls below 1000 m due to suspended water droplets.

2. RVR is reported when visibility falls below
a. 500 m
b. 1000 m
*c. 1500 m
d. 2000 m
Explanation: Runway Visual Range reporting is typically triggered when visibility drops below 1500 m.

3. Radiation fog occurs
*a. Over land
b. Over sea
c. During day
Explanation: Radiation fog forms over land due to nocturnal radiational cooling of the ground.

4. When visibility reduces between 5000 m and 1000 m and RH is almost 100%, it is
*a. Mist
b. Haze
c. Fog
Explanation: Mist is defined as reduced visibility (1000-5000 m) with high relative humidity near saturation, distinct from denser fog.

5. Radiation Fog forms over N India during
a. May to June
*b. Dec to Feb
c. Oct to Nov
Explanation: Long clear winter nights over North India (Dec-Feb) favour strong radiational cooling and fog formation.

6. Warm and moist air moving over a cold ground gives rise to
a. Thunder clouds
*b. Fog and stratus
c. Frontal clouds
Explanation: Warm moist air cooled from below by contact with a cold surface condenses into fog/stratus.

7. Warm and moist air moving over a cold surface causes
a. Radiation Fog
*b. Advection Fog
c. Frontal Fog
Explanation: This describes the classic mechanism of advection fog.

8. The radiation fog forms due to
a. Heating of the earth during day
*b. Radiational cooling of earth at night
c. Advection of cold air
Explanation: Radiation fog results from the ground cooling rapidly at night by emitting longwave radiation, chilling the air just above it to saturation.

9. The radiation fog activity increases after the passage of a ...........
*a. WD
b. Depression
c. Col
Explanation: Clear skies and calm conditions following a Western Disturbance favour radiational cooling and fog formation over North India.

10. Radiation fog is essentially a ........... phenomena
*a. Nocturnal
b. Dusk
c. Day
Explanation: Since it depends on nighttime radiational cooling, radiation fog is a nocturnal phenomenon.

11. The radiation fog forms over ...........
a. Water
*b. Land
c. Both
Explanation: Radiation fog specifically requires a land surface capable of rapid radiational cooling.

12. The ...... fog forms due to horizontal movement of warm moist air over cold surface
a. Radiation
*b. Advection
c. Frontal
Explanation: Advection fog forms when warm moist air is carried horizontally over a colder surface.

13. Advection fog forms during
a. night only
b. day time only
*c. any time of day and night
Explanation: Since advection fog depends on air mass movement over a cold surface rather than diurnal radiational cooling, it can form at any time.

14. For formation of Radiation fog
*a. There should be sufficient moisture in atmosphere, clear sky, light wind
b. There should be sufficient moisture in atmosphere, cloudy sky, nil wind
c. There should be sufficient moisture in atmosphere, cloudy sky, strong wind
Explanation: Radiation fog needs moisture, a clear sky (to allow radiational cooling), and light wind (enough to mix the cooled layer without dispersing it).

15. Instrument used for measuring visibility is called
a. Visiometer
*b. Transmissometer
c. Ceilometer
Explanation: A transmissometer measures visibility by assessing light transmission through the atmosphere.

16. Advection fog forms
a. over sea
b. over Land
*c. both over land and sea
Explanation: Advection fog can form over both land and sea wherever warm moist air moves over a colder surface.

17. Fog is ........... cloud on ground
a. Stratocumulus
*b. Stratus
c. Nimbostratus
Explanation: Fog is essentially a stratus cloud that forms at ground level.

18. Frontal Fog is more common with a
a. Western Disturbance
b. Cyclone
*c. Warm Front
d. Cold Front
Explanation: Frontal fog is most commonly associated with a warm front, where warm rain falling into cooler air below saturates it.

19. The favourable pressure system for formation of fog is
a. Lows and Cols
b. High and Trough
c. Lows and Ridges
*d. Highs and Cols
Explanation: Calm, clear, stable conditions found in highs and cols favour fog formation.

20. Thermal processes / temperature distribution which favours formation of fog is
a. Isothermal
b. Adiabatic
*c. Inversion
d. SALR
Explanation: A temperature inversion traps moist air near the surface and prevents vertical mixing, favouring fog formation.
`);

registerChapterText("aviation-meteorology", "vertical-motion-and-clouds", "Vertical Motion and Clouds", `
1. Drizzle occurs from
a. CS
*b. ST
c. NS
d. CU
Explanation: Drizzle typically falls from low stratus (ST) cloud.

2. Altostratus (AS) is
a. Low cloud of sheet type
*b. A medium cloud of sheet type
c. A cloud of large vertical growth
d. A high cloud of sheet type
Explanation: Altostratus is classified as a medium-level, sheet-type cloud.

3. Showers occurs from
a. CU
*b. CB
c. AS
d. AC
Explanation: Showery precipitation is characteristic of cumulonimbus (CB) cloud.

4. Heavy icing is possible in
a. CI
b. CS
c. ST
*d. CB
Explanation: The strong vertical currents and abundant supercooled water in cumulonimbus make heavy icing likely.

5. To avoid icing in cloudy conditions, a pilot is advised to fly through a cloud which shows
optical phenomena
*a. Halo
b. Corona
c. With multi-coloured clouds
Explanation: A halo indicates ice crystal cloud (e.g. cirrus), which poses negligible icing risk compared to supercooled water droplet clouds.

6. Dark gray cloud giving continuous rain is called
a. AS
*b. NS
c. ST
d. CB
Explanation: Nimbostratus (NS) is the dark grey sheet cloud producing continuous, steady rain.

7. A uniform layer of cloud resembling fog but not on the ground
a. AS
b. NS
*c. ST
Explanation: Stratus is a uniform, fog-like layer cloud that sits above the ground rather than touching it.

8. The clouds composed of ice crystals having feathery appearance
*a. CI
b. CS
c. AS
Explanation: Cirrus (CI) clouds are made of ice crystals and have a characteristic feathery, wispy appearance.

9. NS clouds occur
a. At cold front
*b. At warm front
Explanation: Nimbostratus is the classic precipitating cloud found ahead of and at a warm front.

10. Halo is associated with the cloud
a. AC
b. AS
c. CS
*d. CI
Explanation: Halos form due to refraction through ice crystals, most commonly associated with cirrus/cirrostratus type clouds.

11. Corona is associated with the cloud
*a. AS
b. AC
c. CC
d. CS
Explanation: Corona (a diffraction phenomenon) is commonly seen through thin altostratus.

12. Lenticular clouds indicate presence of
a. Warm Front
b. Cold front
*c. Mountain waves
Explanation: Lens-shaped lenticular clouds form in the crests of mountain wave oscillations.

13. The lowest level below which condensation trails will not form is
*a. Mintra Level
b. Drytra Level
c. Maxtra Level
Explanation: The "Mintra" level is the minimum altitude threshold below which contrails cannot form due to insufficiently cold temperatures.

14. Rain falling from cloud but not reaching ground is
a. Virgo
*b. Virga
c. Mirage
Explanation: Virga describes precipitation that evaporates before reaching the surface.

15. CB with distinct anvil is called
a. Castellaneous
*b. Capillatus
c. Uncinus
Explanation: A cumulonimbus with a fibrous, anvil-shaped top is classified as Capillatus.

16. Cloud ceiling is the height of the cloud covering..........
a. 3-4/8
b. 8/8
*c. 5/8 or more
Explanation: Ceiling is defined as the height of the lowest cloud layer covering more than half the sky, i.e. 5 oktas or more.

17. No condensation trails occur above
*a. Maxtra Level
b. Dytra Level
c. Mintra Level
Explanation: Above the "Maxtra" level the air is too thin/dry for persistent contrails to form.

18. Cloud of operational significance has base below........ m or below the highest minimum
sector altitude, which is greater
*a. 1500
b. 2000
c. 1000
Explanation: A cloud base below 1500 m (or the highest MSA if greater) is considered operationally significant for reporting.

19. AC cloud with cumuliform protuberances are indicative of
a. Stability
*b. Instability
c. Neutrality
Explanation: Turret-like cumuliform protrusions on altocumulus (castellanus) indicate instability at that level.

20. Hail may be experienced under the anvil of a CB
*a. True
b. False
Explanation: Hail can be thrown out and fall from beneath a cumulonimbus anvil, sometimes at considerable distance from the main storm core.
`);

registerChapterText("aviation-meteorology", "stability-of-atmosphere", "Stability of the Atmosphere", `
1. DALR = 9.8 °C, ELR = 6.8 °C ; atmosphere is
*a. stable
b. unstable
c. indifferent
Explanation: When the environmental lapse rate (ELR) is less than the dry adiabatic lapse rate (DALR), the atmosphere is stable.

2. SALR = 5.5 °C, ELR= 4.5 °C ; atmosphere is
a. unstable
*b. stable
c. indifferent
Explanation: With ELR less than SALR, the saturated atmosphere is stable.

3. DALR > ELR > SALR
*a. conditionally unstable
b. latently stable
c. potentially stable
Explanation: When ELR lies between the SALR and DALR, the atmosphere is conditionally unstable - stable for dry air but unstable if saturated.

4. Dry air is unstable when
a. ELR=DALR
*b. ELR>DALR
c. ELR<DALR
Explanation: Dry (unsaturated) air is unstable when the environmental lapse rate exceeds the dry adiabatic lapse rate.

5. The saturated air is said to be unstable if
a. SALR=ELR
*b. SALR<ELR
c. SALR > ELR
Explanation: Saturated air is unstable when the environmental lapse rate exceeds the saturated adiabatic lapse rate.

6. If ELR = SALR = DALR the atmosphere is
a. Stable
b. Instable
*c. Indifferent
Explanation: When all three lapse rates coincide, a displaced parcel experiences no net buoyant force, giving neutral (indifferent) stability.

7. DALR means
*a. The rate at which temperature of unsaturated parcel of air falls with height when made to
ascend adiabatically
b. The rate at which temp falls with height
c. The rate at which ascending parcel of saturated air cools
Explanation: DALR is specifically the cooling rate of an unsaturated (dry) parcel rising adiabatically.

8. Surface temp. is 30° C. Assuming DALR what is the temperature at 2 km
a. 18° C
*b. 10° C
c. 42° C
Explanation: Using DALR of 10°C/km: 30 - (10x2) = 10°C.

9. An Isothermal atmosphere is
*a. Stable
b. Unstable
c. Neutral
Explanation: With no temperature change with height (a zero or near-zero lapse rate), an isothermal layer is stable against vertical displacement.

10. If ELR is less than SALR, the atmosphere is said to be
a. Absolutely unstable
b. Conditionally unstable
*c. Absolutely stable
Explanation: An ELR less than even the smaller SALR means the atmosphere is stable regardless of saturation - absolutely stable.

11. DALR is approximately
a. 5° C /km
b. 15° C/km
*c. 10° C /km
Explanation: The dry adiabatic lapse rate is approximately 10°C per km (about 3°C/1000ft).

12. SALR at mean sea level is about
a. 10° C/Km
*b. 5° C/Km
c. 5° F/Km
Explanation: Near the surface, the saturated adiabatic lapse rate is typically around 5°C/km, less than the DALR due to latent heat release.

13. SALR approaches DALR
a. at 0°C
b. at -15°F
*c. at -40°C
Explanation: At very cold temperatures the air holds negligible moisture, so the SALR converges toward the DALR, approximately around -40°C.

14. Dry air having a temperature of 35°C on surface when forced to rise adiabatically by 1 km
would attain a temperature of
a. 29°C
*b. 25°C
c. 45°C
Explanation: Using DALR ~10°C/km: 35 - 10 = 25°C.

15. Inversion in the atmosphere indicates
*a. Stability
b. Instability
c. Neutrality
Explanation: A temperature inversion (warming with height) is inherently very stable, strongly resisting vertical motion.

16. Inversion is ......... Lapse Rate (LR)
a. Positive
*b. Negative
c. Neutral
Explanation: Since lapse rate conventionally means temperature decrease with height, an inversion (temperature increase) is a negative lapse rate.

17. Environmental LR can be more than DALR
*a. True
b. False
Explanation: The actual (environmental) lapse rate can exceed the DALR under superadiabatic conditions, e.g. over strongly heated surfaces.

18. The process which to a large extent determines the vertical distribution of temperature in
atmosphere is
*a. Adiabatic
b. Isothermal
c. Isentropic
Explanation: Adiabatic processes (expansion/compression as parcels rise/sink) largely govern the vertical temperature structure.

19. Rise in temperature with height is
*a. Inversion
b. Lapse
c. Normal
Explanation: This describes an inversion by definition.

20. Inversion is common in
a. Post Monsoon
b. Monsoon
*c. Winters
Explanation: Long clear winter nights favour strong radiational cooling at the surface, commonly producing inversions.
`);
registerChapterText("aviation-meteorology", "optical-phenomena", "Optical Phenomena", `
1. Aurora Australis occur in the
*a. S hemisphere
b. N hemisphere
c. Equator
Explanation: Aurora Australis is the Southern Hemisphere counterpart to the Northern Lights.

2. Aurora Australis called ........... Lights
a. Northern
*b. Southern
c. Temperate
Explanation: Aurora Australis translates to the "Southern Lights."

3. Aurora Borealis occur in the
a. S hemisphere
*b. N hemisphere
c. Equator
Explanation: Aurora Borealis occurs in the Northern Hemisphere near the magnetic pole.

4. Aurora Borealis are called ........... Lights
*a. Northern
b. Southern
c. Temperate
Explanation: Aurora Borealis is commonly known as the "Northern Lights."

5. Corona occur in ........... clouds
*a. AS
b. NS
c. CS
Explanation: Coronas (diffraction rings) are commonly observed through thin altostratus.

6. Bishop's ring is due to the diffraction of light by fine particles of
a. water
*b. dust
c. ice
Explanation: Bishop's ring results from diffraction of sunlight by fine volcanic dust particles in the upper atmosphere.

7. The radius of the Bishop's ring is about
a. 32°
*b. 22°
c. 42°
Explanation: Bishop's ring typically has an angular radius of about 22°.

8. Superior Mirage occurs in marked
a. Lapse
b. Isothermal
*c. Inversion
Explanation: Superior mirages form when a strong temperature inversion bends light rays over the horizon, making distant objects appear elevated.

9. Inferior Mirage occurs when there is
*a. Lapse
b. Isothermal
c. Inversion
Explanation: Inferior mirages occur with a steep lapse rate (superadiabatic near a hot surface), bending light upward to create the illusion of water on the ground.

10. Corona are formed due to the ........... of light
a. Refraction
*b. Diffraction
c. Scattering
Explanation: Coronas result from diffraction of light around small water droplets or ice crystals.

11. Corona are formed due to light, passing through
a. Mist only
b. Fog only
c. small water or ice particles only
*d. Any one of all these
Explanation: Corona can form via diffraction through any sufficiently fine water or ice particles, including mist and fog.

12. Halo is produced by
*a. Refraction
b. Diffraction
c. Scattering
Explanation: Halos result from refraction (and some internal reflection) of light through ice crystals.

13. Halo is produced when light passes through
a. water particles
*b. ice crystals
c. both
Explanation: Halos specifically require ice crystals, unlike coronas which can form with water droplets too.

14. Halo occur in the cloud
a. AS
b. NS
*c. CS
Explanation: Cirrostratus, composed of ice crystals, is the classic cloud associated with halo phenomena.

15. Halo is luminous ring of ........... radius
a. 32°
*b. 22°
c. 42°
Explanation: The common (small) halo has an angular radius of about 22° around the sun or moon.

16. Halo round the sun shows a pure clear ........... on the outside
*a. Red
b. Yellow
c. Violet
Explanation: The inner edge of a halo shows a clear reddish tinge due to differential refraction by ice crystals.

17. Halo signifies predominance in the cloud of
a. Supercooled water drops
*b. Ice crystals
c. Both
Explanation: A halo confirms the cloud is predominantly composed of ice crystals rather than supercooled water.

18. The cloud which cause Halo has ........... chances of ice accretion
*a. negligible
b. maximum
c. medium
Explanation: Ice-crystal clouds producing halos pose negligible aircraft icing risk, since icing requires supercooled liquid water.

19. Sometimes a halo with a radius of ........... is observed, called Large Halo
a. 32°
*b. 42°
c. 22°
Explanation: A less common, larger halo with about 42° radius is also observed under certain ice crystal orientations.

20. Halo occurs from ........... cloud
a. Low
b. Medium
*c. High
Explanation: Halos form in high-level ice crystal clouds such as cirrus and cirrostratus.
`);

registerChapterText("aviation-meteorology", "precipitation", "Precipitation", `
1. When super cooled water drops and ice particles co-exist, the ice crystals grow at the
expense of the water drops because
a. Saturation vapour pressure over water drops is less than over the ice crystals
*b. Saturation vapour pressure over the ice crystals is less than over water drops
c. The ice crystals convert into water drops
Explanation: Since saturation vapour pressure over ice is lower than over supercooled water, vapour condenses preferentially onto ice crystals (the Bergeron process), which grow while the water drops evaporate.

2. The clouds whose tops extend well above the freezing level are called
a. Warm Clouds
*b. Cold Clouds
c. Moderate Clouds
Explanation: Clouds extending well above the freezing level, containing ice crystals, are classified as cold clouds.

3. The clouds whose tops do not extend to the freezing level are called
*a. Warm Clouds
b. Cold Clouds
c. Moderate Clouds
Explanation: Clouds confined entirely below the freezing level, composed only of liquid droplets, are termed warm clouds.

4. Coalescence Theory explains occurrence of rainfall from the
*a. Warm Clouds
b. Cold Clouds
c. Both types of Clouds
Explanation: The coalescence (collision-coalescence) theory explains rain formation in warm clouds without an ice phase.

5. Ice crystal Theory explains occurrence of rainfall from the
a. Warm Clouds
*b. Cold Clouds
c. Both types of Clouds
Explanation: The ice crystal (Bergeron) theory explains precipitation formation in cold clouds containing both ice and supercooled water.

6. Giant Nucleus Theory explains occurrence of rainfall over
*a. Maritime areas
b. Inland areas
c. Hilly areas
Explanation: Giant hygroscopic nuclei (e.g. sea salt) common over maritime regions can trigger rapid droplet growth and rainfall.

7. Very heavy precipitation as showers over a short period is called
a. Flash floods
*b. Cloud Burst
c. Orographic Rain
Explanation: A cloudburst is an extremely intense, short-duration rainfall event.

8. Rain shadow area is on the ........... of the mountain range
a. Top
b. Windward side
*c. Leeward side
Explanation: Air descending the leeward side has already lost its moisture on the windward slope, creating a dry rain-shadow zone.

9. Sleet is a mixture of
a. Hail & Snow
*b. Rain & Snow
c. Frozen Rain
Explanation: Sleet is a mix of rain and snow (or partially melted snow) falling together.

10. Rainfall in the tropics is more in
a. Winters
*b. Summers
c. Post monsoon
Explanation: Tropical rainfall is generally concentrated in the warmer, more convectively active summer months.

11. Rainfall in the tropics is more in the
a. Morning
*b. Afternoon
c. Night
Explanation: Peak daytime heating drives convective showers in the tropics mostly in the afternoon.

12. Rainfall in the temperate latitudes is more in
*a. Winters
b. Summers
c. Spring
Explanation: In temperate latitudes, frontal systems associated with winter storms bring more rainfall than the drier summer.

13. Over J&K and western Himalayas Rainfall is more in
*a. Winters
b. Summers
c. Post monsoon
Explanation: Western Disturbances bring winter precipitation to J&K and the western Himalayas.

14. Rainfall over coastal areas is more in the
a. Evening
b. Afternoon
*c. Night & early morning
Explanation: Coastal convection often intensifies at night and early morning due to land breeze convergence effects.

15. Areas to the ........... of western Ghats of India are rain shadow areas
a. W
b. S
*c. E
Explanation: The Western Ghats block the monsoon moisture, leaving areas to their east in a rain shadow.

16. A sudden rise in the level of rivers or streams causing floods is called
a. Cloud Burst
b. Catchments flooding
*c. Flash Floods
Explanation: A rapid rise in water level causing sudden flooding is termed a flash flood.

17. Artificial rain making is also termed as
a. Simulation
*b. Cloud seeding
c. Nucleation
Explanation: Cloud seeding is the standard term for artificially induced precipitation.

18. Fog can be dispersed for a short period by artificial stimulation
*a. True
b. False
Explanation: Techniques exist (e.g. seeding, heating) to temporarily disperse fog over limited areas/durations.

19. Showery precipitation occurs from
a. NS
b. AC
*c. CB
Explanation: Showery, intermittent, often heavy precipitation is characteristic of cumulonimbus.

20. A day is called Rainy day when rainfall in 24 hr is ........... mm or more
a. 1.5
b. 2
*c. 2.5
Explanation: By meteorological convention, a "rainy day" requires at least 2.5 mm of rainfall in 24 hours.
`);

registerChapterText("aviation-meteorology", "ice-accretion", "Ice Accretion", `
1. Hoar frost occurs on airframe in clear air when the temperature of airframe is
*a. below the frost point
b. frost point
c. just above the frost point
Explanation: Hoar frost deposits when the airframe surface is colder than the frost point, causing water vapour to sublimate directly onto it.

2. In clouds at temperatures below 0° C an aircraft may encounter icing of the type
a. only Glazed
b. only Rime
*c. intermediate between these two
Explanation: In practice, aircraft icing is often a mixture between pure rime and pure glaze ice, depending on droplet size and temperature.

3. Opaque Rime ice is
*a. Light porous
b. Solid
c. Mixture of porous and solid
Explanation: Rime ice forms from rapid freezing of small supercooled droplets, trapping air and giving it a light, porous, opaque texture.

4. Rime is formed by freezing of ........... supercooled water droplets on airframe when aircraft
is flying through clouds
*a. Small
b. Large
c. Medium
Explanation: Small supercooled droplets freeze almost instantly on impact, forming rime ice.

5. Glazed ice is formed by freezing of ........... supercooled water droplets on airframe when
aircraft is flying through clouds
a. Small
*b. Large
c. Medium
Explanation: Larger supercooled droplets spread out and freeze more slowly, forming clear, dense glaze ice.

6. The ........... ice poses serious aviation hazard
a. Rime
b. Hoar Frost
*c. Glazed
Explanation: Glaze (clear) ice is dense, heavy, and adheres strongly, making it the more hazardous type for aircraft.

7. Airframe icing occurs below 0°C. Its probability of occurrence decreases progressively
below -20°C, as at lower temperatures the proportion of super-cooled water drops in a cloud
a. Increases
*b. Decreases
c. Does not change
Explanation: At very cold temperatures clouds become increasingly composed of ice crystals rather than supercooled liquid water, reducing icing risk.

8. CI, CS and CC clouds consist mostly ice crystals. Icing hazard is therefore
a. Maximum
b. Medium
*c. Negligible
Explanation: Since icing requires supercooled liquid water, ice-crystal clouds like cirrus pose negligible icing risk.

9. AS, NS consist of supercooled water drops and ice crystals in varying proportion ...........
icing is possible.
a. Maximum
*b. Light or moderate
c. Negligible
Explanation: With a mix of ice and supercooled water, altostratus/nimbostratus typically produce light to moderate icing.

10. In AC clouds ........... icing is possible in mountainous areas
a. Light
b. Moderate
*c. Severe
Explanation: Altocumulus over mountainous terrain, often lenticular in form, can produce severe icing due to concentrated supercooled water.

11. In TCU icing may range from light to severe type at least up to ........... level.
a. - 40 °C level
b. 30 °C level
*c. - 20 °C level
Explanation: Towering cumulus can produce significant icing risk up to about the -20°C level.

12. In CB icing may range from light to severe type up to -20°C level. Below this temperature
severe icing is
*a. not significant
b. significant
c. maximum
Explanation: Below -20°C in a cumulonimbus, ice crystals dominate over supercooled water, so severe icing becomes less likely.

13. Liquid water content is an important factor in icing. As the maximum water concentration
is around ..........., maximum ice formation in clouds may also be expected around that level.
a. -25° C level
b. -20° C level
*c. -15° C level
Explanation: Supercooled liquid water content typically peaks around -15°C, making that level the most favourable for significant icing.

14. Carburetor icing occurs when air from intake passes through a ventury (choke) and
causes expansional cooling and vaporization of fuel. Serious icing can occur at extreme
temperatures
a. 13°C
*b. 30°C to -10°C
c. 20°C
Explanation: Carburettor icing can occur across a wide ambient temperature range, roughly 30°C down to -10°C, due to the venturi cooling effect.

15. ........... occurs in a moist cloudless air on an aircraft surface having temp. below 0° C, due
to sublimation of water vapour onto feathery ice crystals.
a. Rime
b. Glazed
*c. Hoar Frost
Explanation: This describes hoar frost, which forms via direct sublimation in clear (cloudless) moist air.

16. ........... occurs in St, Sc, Ac, Cu, Ns at temperature -10 to -40° C and in Cb at temperature
-20 to -40°C
*a. Rime
b. Glazed
c. Hoar Frost
Explanation: Rime ice is typical in these stratiform/cumuliform clouds across this cold temperature range.

17. In clouds ........... occurs when a wide range of water drop sizes are present at temperatures
between 0° C and -40° C
a. Rime
b. Glazed
*c. Mixture of rime and clear ice
Explanation: A broad spread of droplet sizes produces a combination of rime and clear ice rather than a purely uniform type.

18. ........... occurs in AS, NS, AC and towering CU or CB between 0° C and -20° C, in warm front
below 0° C, especially if the aircraft has rapidly descended from a colder region.
a. Glazed
b. Rime
*c. Mixture of Rime and Clear ice
Explanation: A mixed rime/clear ice type is typical in these cloud types across the 0°C to -20°C range.

19. When fog freezes on parked aircraft it produces ...........
*a. Hoar Frost
b. Rime
c. Clear ice
Explanation: Fog freezing directly onto a cold parked aircraft surface produces hoar frost.

20. Icing ........... the stalling speed appreciably
a. Decreases
*b. Increases
c. Does not increase/decrease
Explanation: Ice accretion disrupts airflow and adds weight/drag, appreciably raising the stalling speed.
`);
registerChapterText("aviation-meteorology", "thunderstorms", "Thunderstorms (TS)", `
1. The condition necessary for the formation of a thunderstorm are
a. Steep lapse rate, strong winds
b. Shallow lapse rate, adequate supply of moisture
*c. Steep lapse rate, adequate supply of moisture and trigger action
Explanation: Thunderstorm formation requires instability (steep lapse rate), sufficient moisture, and a lifting/trigger mechanism.

2. Hail is most likely to fall from a cloud
a. Having layers
b. Composed of Ice crystals
*c. Having strong vertical development
Explanation: Hail requires the strong updrafts/downdrafts found in vertically developed cumulonimbus clouds.

3. Norwesters are
a. The western disturbances which affect NW India
*b. Severe thunderstorms which occur over NE India during hot weather period
c. Severe thunderstorms which occur over Peninsula during hot weather period
Explanation: Norwesters are severe pre-monsoon thunderstorms characteristic of NE India (Bengal, Bihar, Assam, Orissa).

4. Duststorm usually occurs over NW India during
a. Post-monsoon
b. Winter
*c. Pre-Monsoon
Explanation: Hot, dry, unstable conditions in the pre-monsoon season favour duststorms over NW India.

5. A 'mature' thunderstorm has strong
a. updraft only
b. downdraft only
*c. updrafts and downdrafts
Explanation: The mature stage of a thunderstorm cell is characterised by the simultaneous presence of strong updrafts and downdrafts.

6. Aircraft icing is most favoured in the cloud which have temperatures ranging between
a. - 20° C and - 40° C
*b. 0° C and - 20° C
c. below - 40° C
Explanation: Supercooled water content and icing risk are greatest between 0°C and -20°C.

7. A short duration, showery precipitation is associated with
a. ST
b. AS
*c. CB
Explanation: Cumulonimbus produces the classic short, heavy shower type of precipitation.

8. Hail is
a. Solid precipitation commonly occurring over the mountainous regions in winters.
b. Frozen or partly frozen rain falling from sheet type of clouds
*c. Solid precipitation falling from a deep convective cloud
Explanation: Hail forms through repeated cycles of freezing within the strong updrafts/downdrafts of a deep convective (cumulonimbus) cloud.

9. The most hazardous cloud for aviation is
*a. CB
b. CU
c. NS
Explanation: Cumulonimbus combines severe turbulence, icing, hail, lightning, and wind shear, making it the most hazardous cloud type for aviation.

10. The life of a Cb cell is usually
a. 7 to 8 hrs
b. 3 to 4 hrs
*c. 2-3 hr
Explanation: An individual cumulonimbus cell typically has a life cycle of about 2-3 hours.

11. Generally the severest activity of a, heat type, TS is for
a. 2 hrs
*b. 30 to 45 min
c. 3 to 4 hr
Explanation: The mature, most intense phase of a heat-driven thunderstorm typically lasts only about 30-45 minutes.

12. Norwesters occur during
a. Jan-Feb
*b. Mar-May
c. June-Sep
d. Oct - Dec
Explanation: Norwesters are pre-monsoon (hot weather) thunderstorms occurring March-May.

13. Norwesters occur during
a. Winter
*b. Hot weather
c. Monsoon
d. Post Monsoon
Explanation: Norwesters are a hot-weather (pre-monsoon) phenomenon.

14. Norwesters affect
a. N India
*b. Bengal, Bihar, Orissa and Assam
c. Central India
Explanation: Norwesters specifically affect the eastern/northeastern states of Bengal, Bihar, Orissa and Assam.

15. The trigger action may take place due to
a. Clear night sky, no wind
*b. Orographic lifting
c. high pressure
Explanation: A lifting mechanism like orographic uplift can act as the trigger releasing instability into a thunderstorm.

16. Norwesters normally occur during
a. Mornings
*b. Afternoons
c. Nights
Explanation: Peak daytime heating typically triggers norwesters in the afternoon.

17. Norwesters originates over
*a. Chota-Nagpur hills
b. Deccan Plato
c. Khasi hills
Explanation: Norwesters characteristically originate over the Chota-Nagpur plateau region.

18. Andhi (blinding storms) occur generally over
a. S India
*b. N India
c. NE India
Explanation: Andhi (severe dust storms) are a Northern India, pre-monsoon phenomenon.

19. Wind speed in Light DS is
a. 25 kt
b. 30 kt
*c. up to 21 kt
Explanation: A light duststorm is defined by wind speeds up to about 21 kt.

20. The diametre of Microburst is
*a. less than 4 km
b. less than 2 km
c. less than 6 km
Explanation: A microburst is defined as a small, intense downdraft with a diameter under 4 km.

21. The diametre of and Macroburst
a. < 4 km
*b. 4 km or more
c. > 8 km
Explanation: A macroburst is the larger counterpart to a microburst, with a diameter of 4 km or more.

22. For detecting precipitation a Radar wavelength in the range ........... is suitable
*a. 30 to 200 mm
b. 400-500 mm
c. 600-700 mm
Explanation: Weather radars for precipitation detection commonly operate at wavelengths in the 30-200 mm range.

23. For airborne radars wavelength generally used
a. 20 mm
b. 40 mm
*c. 60 mm
Explanation: Airborne weather radars commonly operate around a 60 mm (roughly X-band) wavelength.

24. The wavelength of TS detection X band radar is
a. 10 mm
b. 20 mm
*c. 30 mm
Explanation: X-band thunderstorm detection radar operates at roughly 30 mm wavelength.

25. The wavelength of storm detection S band radar is
a. 50 mm
*b. 100 mm
c. 200 mm
Explanation: S-band storm detection radar uses a longer wavelength, around 100 mm, offering better penetration through heavy precipitation.

26. Over plains TS mostly occur during the
*a. afternoon
b. night
c. early morning
Explanation: Surface heating drives thunderstorm development over plains typically in the afternoon.

27. Over valley and foot hills TS generally occur during
a. afternoon
*b. night & early morning
Explanation: Katabatic drainage and convergence effects in valleys/foothills favour thunderstorm activity at night and early morning.

28. Over the sea TS are more frequent
a. afternoon
*b. night
c. early morning
Explanation: Over the sea, the surface remains relatively warmer than the air aloft at night, favouring nighttime thunderstorm activity.

29. The life of Mesoscale Convective Complex TS is
a. 2-3 hr
b. 3-4 hr
*c. 6 to 24 hr
Explanation: A Mesoscale Convective Complex is a long-lived system that can persist from 6 up to 24 hours.

30. Loud peals of thunder, frequent flashes of lightning, moderate or heavy showers
accompanied by light hail with maximum wind speed 15-40 kt is classified as
a. Light TS
*b. Moderate TS
c. Severe TS
Explanation: This intensity description matches the criteria for a moderate thunderstorm.

31. For a severe TS one of the requirements is strong Wind Shear
a. Horizontal
*b. Vertical
c. Slant
Explanation: Strong vertical wind shear is a key ingredient supporting severe, long-lived thunderstorm development.

32. Severe TS cells are tilted
*a. in vertical
b. to the South
c. to the North
Explanation: Severe thunderstorm cells are typically tilted in the vertical due to wind shear, separating updraft and downdraft regions.

33. When flying through on active TS, lighting strikes are most likely
a. Above 5000 ft and under the anvil.
b. In the clear air below the cloud in rain
*c. In the temperature band between +10° and - 10°C
d. At or about 10000 ft
Explanation: Lightning strikes are statistically most probable in the temperature band roughly between +10°C and -10°C within the storm.

34. Hazards of the mature stage of a TS Cell include lighting, turbulence and:
a. Microburst, wind-shear and anvil
*b. Icing, microburst and WS
c. Icing, drizzle and microburst
d. WS, hail and fog
Explanation: The mature stage brings the combined hazards of icing, microbursts, and wind shear alongside lightning and turbulence.

35. Hail grows by
a. freezing as it leaves the cloud
b. up and down forces in CU cloud
c. collision with ice crystals
*d. collision with supercooled water drops
Explanation: Hailstones grow through repeated collisions with supercooled water droplets that freeze on contact as the stone is carried up and down within the storm.
`);

registerChapterText("aviation-meteorology", "air-masses-fronts-wd", "Air Masses, Fronts and Western Disturbances", `
1. The airmass which originates at sea in high Latitudes is called
*a. Polar maritime
b. Tropical continental
c. Tropical maritime
Explanation: An air mass forming over the sea at high latitudes is classified as Polar Maritime.

2. The airmass which originates over equatorial region is
a. Warm and dry
*b. Warm and Moist
c. Cold and dry
Explanation: Equatorial air masses form over warm, moisture-rich oceanic/tropical regions, so they are warm and moist.

3. If the advancing cold front is colder than the cool air mass of the warm front, the advancing
cold front undercuts and lifts both the warm and cool air masses of the warm front. This is
a. Warm Occlusion
*b. Cold Occlusion
Explanation: When the advancing cold air is colder than the pre-existing cool air, it undercuts both other air masses, forming a cold occlusion.

4. The airmass which originated over land area located in polar region is
a. Warm and dry
b. Warm and Moist
*c. Cold and dry
Explanation: An air mass forming over cold, dry polar land is classified Continental Polar - cold and dry.

5. If a warm airmass overtakes a cold air mass, it is called
a. Cold Front
*b. Warm Front
c. Occluded Front
Explanation: A warm front is defined as warm air actively advancing over and displacing cold air.

6. At warm front
*a. Warm air overtakes the cold air
b. Cold air undercuts the warm air
Explanation: This is the definition of a warm front.

7. The conditions are always unstable at a
*a. Cold front
b. Warm front
Explanation: The steep frontal slope and rapid lifting at a cold front typically produce unstable, showery conditions.

8. Sometimes Line squall occurs about 100-300 km ahead of a
a. Warm front
*b. Cold front
Explanation: Pre-frontal line squalls can develop 100-300 km ahead of an advancing cold front.

9. Precipitation occurs over a belt of 30 - 50 km on both side of front
*a. Cold front
b. Warm front
Explanation: The narrower precipitation zone (30-50 km either side) is typical of the steeper cold front, compared to the much broader warm-front precipitation band.

10. Cold front moves at ... the speed of a warm front moves
a. Same
*b. Double
c. Half
Explanation: Cold fronts generally advance roughly twice as fast as warm fronts.

11. Line Squalls occur ...... of Cold front
*a. Ahead
b. Behind
c. At the
Explanation: Line squalls typically develop ahead of an advancing cold front.

12. Fronts are associated with
a. Tropical cyclone
b. Monsoon Depression
*c. Extra-tropical Cyclones
Explanation: Fronts are a defining feature of extra-tropical (mid-latitude) cyclones, unlike tropical systems which lack fronts.

13. CB, Roll-type clouds, SC, AC with embedded CB are associated
*a. Cold front
b. Warm front
Explanation: These vigorous, convective cloud types are characteristic of a cold front passage.

14. The surface of discontinuity between the Polar Ely and the temperate Wly is called
a. Equatorial Front
b. Tropopause
*c. Polar Front
Explanation: The boundary between cold polar easterlies and the milder mid-latitude westerlies is termed the polar front.

15. The air mass which originates from sea area located in lower Lat is
a. Warm and Dry
*b. Warm and Moist
c. Cold and Moist
Explanation: An air mass originating over the sea at low (tropical) latitudes is warm and moist - Tropical Maritime.

16. WDs approach India as
a. Cols
*b. Occluded Fronts
c. Highs
Explanation: Western Disturbances arrive as weakening, occluded frontal systems from the Mediterranean/Caspian region.

17. Maximum WDs occur in
a. Summers
b. Post Monsoon
*c. Winters
Explanation: Western Disturbances are most frequent and active during the winter season over North India.

18. Ahead of a warm front the surface wind
a. Backs & weakens
*b. Veers & strengthens
c. Backs & strengthens
Explanation: As a warm front approaches, the surface wind typically veers and strengthens.

19. On approach of a Warm Front temperature
a. Fall
*b. Rise
c. Remain same
Explanation: Warm air replacing cold air ahead of a warm front causes temperature to rise.

20. CI, CS, AS, NS, ST in sequence are associated with the front
*a. Warm
b. Cold
c. Occluded
Explanation: This progressive lowering/thickening cloud sequence (CI to CS to AS to NS to ST) is the classic warm front cloud progression.

21. During the passage of a Cold Front winds
*a. Suddenly become squally
b. Back and weaken
c. Veer and are of moderate strength
Explanation: The passage of a cold front typically brings a sudden, squally wind shift.

22. Visibility is poor in a Warm Front
a. Ahead
*b. Ahead & During
c. After & During
Explanation: Poor visibility (due to precipitation and low cloud) persists both ahead of and during warm front passage.

23. Fog occurs in Cold Front
a. Ahead
b. During
*c. After
Explanation: Fog is more commonly associated with the period after a cold front has passed, as the air stabilises.

24. WD is a ........... front
a. Cold
b. Warm
*c. Occluded
Explanation: By the time a Western Disturbance reaches India it typically has an occluded frontal structure.

25. FZRA and FZFG occur ........... of a warm front
*a. Ahead
b. During
c. After
Explanation: Freezing rain and freezing fog commonly occur ahead of an approaching warm front, in the cold air below the frontal surface.

26. Precipitation ceases after the passage of a front
a. Cold
*b. Warm
c. Occluded
Explanation: After a warm front passes, precipitation generally clears as warmer, more stable air moves in.

27. During the approach of a Warm Front wind
*a. Backs
b. Veers
c. Does not change
Explanation: As a warm front approaches, the surface wind typically backs ahead of the eventual veer at frontal passage.

28. A WD with two or more closed isobars, at 2 hPa interval, it is termed as
a. Troughs in Westerlies
*b. Western Depression
c. Western Cyclone
Explanation: A more developed WD with two or more closed 2 hPa isobars is classified as a Western Depression.

29. A WD originate over
a. Baluchistan
b. Caspian sea
*c. Mediterranean, Caspian and Black Seas
Explanation: Western Disturbances originate over the Mediterranean, Caspian, and Black Sea regions before tracking eastward toward India.

30. Induced lows develop to the ........ of a WD
a. N
*b. S
c. NE
Explanation: Induced (secondary) lows commonly develop to the south of an approaching Western Disturbance, often over Rajasthan/Punjab plains.
`);

registerChapterText("aviation-meteorology", "jetstream", "Jetstream", `
1. The arbitrary lower limit of jet core velocity has been assigned by WMO as
*a. 60 kt
b. 60 m/s
c. 70 m/s
Explanation: WMO's arbitrary threshold defining a jet stream core is a wind speed of at least 60 kt.

2. Jet stream has
a. one maxima
*b. one or more maxima
c. only two maxima
Explanation: A jet stream can contain one or several localized speed maxima (jet streaks) along its axis.

3. The vertical wind shear in a Jet stream is about
*a. 5 m/s/ km
b. 6 m/s/km
c. 8 m/s/km
Explanation: Typical vertical wind shear within a jet stream is on the order of 5 m/s per km.

4. Compared to horizontal wind shear the vertical wind shear in a Jet stream is
a. weaker
*b. stronger
c. same
Explanation: Vertical wind shear across a jet stream is generally much stronger than the horizontal shear.

5. In a jet stream, the path of the maximum speed is known as
a. Core
*b. Axis
c. Jet streak
Explanation: The line tracing the maximum wind speed through a jet stream is called its axis.

6. The wind speed along the axis of a jet stream is always
a. Uniform
*b. Not uniform
Explanation: Wind speed varies along the jet axis, with localized maxima called jet streaks.

7. Along the axis of a jet stream there are centres of high speed winds, these are called
*a. Jet streaks
b. Core
c. Axis
Explanation: Jet streaks are the localized regions of maximum wind speed along a jet stream's axis.

8. In a wavy jet the Jet streaks are located over or near the
*a. Ridge
b. Trough
c. Between Trough and Ridge
Explanation: In a meandering (wavy) jet stream, streaks of maximum wind commonly occur near the ridge.

9. Sub-tropical Jet Stream (STJ) is
*a. Westerly
b. Easterly
c. Southerly
Explanation: The subtropical jet stream flows from west to east.

10. The normal position of Sub-tropical Jet Stream is
a. 30° N
*b. 27° N
c. 35° N
Explanation: The STJ is typically positioned around 27°N.

11. The southern most position of STJ is in February is
*a. 22° N
b. 20° N
c. 18° N
Explanation: The STJ reaches its southernmost extent, around 22°N, in February.

12. The STJ affects India from
a. Jun to Jul
*b. Oct to May
c. Aug to Sep
Explanation: The subtropical jet influences India during the cooler months, roughly October through May.

13. STJ has a layered structure. There are often two layers of max wind to the ........ of jet core
*a. S
b. N
c. SW
Explanation: The STJ can show two vertically stacked wind maxima, generally to the south of the main jet core.

14. The STJ strengthens
a. Northwards
b. Upstream
*c. Downstream
Explanation: The subtropical jet tends to intensify further downstream (eastward) along its track.

15. At and near the STJ the temperature gradient is very
*a. Small
b. Large
c. Moderate
Explanation: Near the jet core itself the horizontal temperature gradient is relatively weak, being strongest on the polar side.

16. Vertical wind shear in STJ is greater ........... the core
*a. above
b. below
c. along
Explanation: Vertical wind shear associated with the subtropical jet is generally stronger above the jet core than below it.

17. The TJ prevails over the Indian Peninsula from
a. May to Jun
b. Sep to Oct
*c. Jun to Aug
Explanation: The Tropical Easterly Jet is present over the Indian Peninsula during the monsoon months, June to August.

18. The TJ is located over the Indian Peninsula, approximately at
*a. 13° N
b. 17° N
c. 18° N
Explanation: The Tropical Jet axis over India lies around 13°N.

19. The TJ is located over Indian, approximately at a height of
*a. 15 -16 km
b. 12 - 13 km
c. 11 - 12 km
Explanation: The Tropical Easterly Jet is found at a relatively high altitude, roughly 15-16 km, over India.

20. The TJ is strongest in
*a. July - Aug
b. Sep - Oct
c. June
Explanation: The Tropical Easterly Jet reaches peak strength during the core monsoon months of July-August.

21. In the TJ the wind shears are much ........... than the STJ
a. more
*b. less
c. same
Explanation: Wind shear associated with the Tropical Jet is generally weaker than that of the subtropical jet.

22. TJ is
a. Westerly
*b. Easterly
c. Southerly
Explanation: The Tropical Jet is an easterly (blowing from east to west) upper-level current.

23. A jet stream can be recognized by
a. High level dust
b. High Pressure
*c. Streaks of CI
d. Lenticular clouds
Explanation: Bands of cirrus cloud streaking along the flow are a common visual indicator of a jet stream.

24. Flying at right angles to a jet stream with falling pressure you will experience
*a. Wind from left
b. Increasing head wind
c. Increasing tail wind
d. Wind from right
Explanation: Applying the pressure-wind relationship (N hemisphere, low pressure to the left of the wind) while crossing the jet at right angles with falling pressure implies the wind is coming from the left.

25. When and where tropical jet stream occurs
a. All year along equator
b. In Middle East in summers
c. In winters over Russia
*d. In summers over SE Asia and Central Africa
Explanation: The Tropical Easterly Jet develops during the summer monsoon season, extending across Southeast Asia and Central Africa.
`);
registerChapterText("aviation-meteorology", "cat-and-mountain-waves", "CAT and Mountain Waves", `
1. For mountain waves to form there should be flow of air across the ridge, generally within
........... of the perpendicular to the ridge.
*a. 30°
b. 45°
c. 60°
Explanation: Effective mountain wave formation requires wind flow within about 30° of perpendicular to the ridge line.

2. For mountain waves to form the wind speed for small mountains should be atleast
a. 15 m/s
b. 10 m/s
*c. 7m/s
Explanation: Smaller mountain ranges can generate waves with a minimum wind speed of about 7 m/s.

3. For mountain waves to form the wind speed for large mountains should be atleast
*a. 15 m/s
b. 10 m/s
c. 7m/s
Explanation: Larger mountain ranges require a stronger minimum wind speed, around 15 m/s, to generate waves.

4. For mountain waves to form there should be ..... air below the ridge and less stable air
above.
*a. Stable
b. Unstable
c. Indifferent
Explanation: A stable layer near ridge height with less stable air above favours the formation of a resonant mountain wave.

5. The worst kind of turbulence is encountered in the vicinity of rotor clouds.
*a. Rotar Clouds
b. Lenticular Clouds
c. Cap Clouds
Explanation: The turbulent rotor circulation beneath a mountain wave, marked by rotor clouds, produces the most severe turbulence.

6. In Mountain waves the Rotor clouds form in
a. Troughs
*b. Ridges
c. Valley
Explanation: Rotor clouds typically form over the ridge/crest regions of the mountain wave circulation.

7. Clear air turbulence is often encountered
*a. At the boundary of a jet stream
b. In the wake of a passing airplane
c. In the wake of a larger airplane at take off and landing
d. All of the above
Explanation: CAT is most commonly associated with strong wind shear at the edges of a jet stream.

8. Most CAT occurs on the ........... of a jet stream and in the vicinity of upper level frontal zones
where temperature contrasts are strong.
*a. Fringes
b. Within the core
c. Axis
Explanation: The strongest shear, and hence most CAT, occurs on the fringes of the jet rather than within its core.

9. CAT is the bumpiness experienced by aircraft at high altitudes. Over North India its
maximum frequency is during
*a. Oct - May
b. Jul - Aug
c. Jun - Sep
Explanation: CAT frequency over North India peaks during the cooler months (Oct-May) when the subtropical jet is active.

10. When approaching an area where mountain waves have been reported, a pilot should
expect:
a. Possible presence of roll clouds and lenticular clouds
b. Intense up draughts and down draughts on the lee side of the mountains.
c. Moderate to severe turbulence as far as 20 to 30 nm from range on leeward side.
*d. All of the above
Explanation: Mountain wave areas can produce all of these effects together - lenticular/roll clouds, strong vertical currents, and turbulence extending well downstream.
`);

registerChapterText("aviation-meteorology", "tropical-systems", "Tropical Systems", `
1. Wind speed in a tropical severe cyclone is:
a. 27 -33 kt
*b. 48 - 63 kt
c. 17-27 kt
Explanation: A severe cyclonic storm is classified by sustained wind speeds in the range of roughly 48-63 kt.

2. Fronts are characteristic of:
a. Tropical cyclone
*b. Extra-tropical depressions
c. Monsoon depressions
Explanation: Unlike tropical systems, extra-tropical depressions/cyclones develop distinct warm and cold fronts.

3. In a mature tropical cyclone, the eye area is characterised by:
a. moderate winds and heavy rains
b. hurricane force winds and squalls
*c. calm wind, little clouding and practically no rainfall
Explanation: The eye of a mature tropical cyclone is a relatively calm, largely cloud-free centre with minimal rainfall.

4. Cyclonic storm cross Tamil Nadu coast in:
*a. Oct-Nov
b. Jul- Aug
c. Feb -May
Explanation: The post-monsoon months (October-November) are the primary period for cyclones crossing the Tamil Nadu coast.

5. Cyclonic storms form over Indian seas during
a. SW monsoon
b. Winter Season
*c. Pre-Monsoon & Post Monsoon
Explanation: Tropical cyclone activity over Indian seas peaks in the transitional pre-monsoon and post-monsoon periods.

6. TRS occurs over Indian seas in:-
a. Equatorial Region
*b. 5 - 15° N
c. 0 - 5° N
Explanation: Tropical revolving storms over Indian seas typically form between about 5° and 15°N.

7. In the Bay of Bengal during the months of Jul, August, Monsoon Depression form
*a. Over Head Bay
b. Central Bay
c. South Bay
Explanation: Monsoon depressions during July-August typically form over the head (northern) Bay of Bengal.

8. In a monsoon depression maximum weather occurs in
a. SE sector
b. NW sector
*c. SW sector
Explanation: The southwest sector of a monsoon depression typically experiences the most intense weather.

9. During re-curvature maximum weather in a monsoon depression occurs in
a. SE sector
b. NW sector
c. SW sector
*d. NE sector
Explanation: As the system recurves, the zone of maximum weather shifts to the northeast sector.

10. On whatever compass course the cyclone is approached, strong winds from the port
indicate that the centre lies somewhere
*a. Ahead
b. Behind
c. Port
d. Starboard
Explanation: Applying the storm's circulation pattern, winds from the port side generally indicate the cyclone centre lies ahead of the vessel/aircraft track.

11. The well developed extra tropical cyclonic storm is composed of two main frontal systems
and an occluded front, which varies in extent:
a. A stationary Front followed by a warm front
*b. A low with a warm front radiating out Southwards followed by a cold front.
c. A warm front and an occluded front
d. None of the above
Explanation: A classic mature extra-tropical cyclone has a warm front extending out (e.g. southward) followed by a trailing cold front.

12. Cyclonic storms are confined almost entirely to the
a. Latitudes near Equator
*b. Tropical latitudes
c. Polar lat.
d. Mid lat.
Explanation: Tropical cyclones require warm ocean water and sufficient Coriolis effect, restricting their formation to tropical latitudes (roughly 5-20°).

13. The weather expected in a well developed cyclonic storm is:
a. Moderate Weather
*b. Stormy weather
c. Clear skies
d. No wind or temperature change
Explanation: A well-developed cyclonic storm brings severe, stormy weather with strong winds and heavy rain.

14. After entering land the Cyclones gradually die down
*a. True
b. False
Explanation: Loss of the warm ocean moisture/energy source causes tropical cyclones to weaken after landfall.

15. The ........... is the most dangerous part of the cyclone is
*a. eye wall
b. eye
c. Outer storm area
d. complete cyclone
Explanation: The eye wall contains the storm's most violent winds and heaviest rain, making it the most dangerous region.

16. No CS form
a. At Poles
*b. At Equator
c. At Lat 40 deg
d. All these
Explanation: Cyclonic storms cannot form right at the equator because the Coriolis force is essentially zero there.

17. Average life of a tropical cyclone in India is
a. 10 Days
b. 6-8 Days
*c. 3-4 Days
Explanation: Tropical cyclones affecting India typically have a lifespan of around 3-4 days.

18. CS in India are mostly of intensity
a. Severe
b. Very Weak
*c. Moderate
Explanation: Most cyclonic storms affecting India fall into the moderate intensity category rather than the extremes.

19. Eye of a CS is surrounded by
a. Shelf Clouds
*b. Wall Clouds
c. Rotor Clouds
d. Roll clouds
Explanation: The calm eye is ringed by the eye wall's towering cumulonimbus, known as wall clouds.

20. CS in Indian region are less intense because
*a. They have a very short travel over the sea
b. Sea surface temp. are not high
c. India is close to Equator
Explanation: The relatively small ocean fetch (short distance over warm water) available in the Indian seas limits how intense cyclones can become before landfall.

21. Surge is sudden strengthening of wind in the ........... air mass
*a. Same
b. Different
c. Both
Explanation: A surge refers to sudden wind strengthening within the same air mass, without a change of air mass type.

22. Surge and Shear Line are features of ........... monsoon
*a. Vigorous
b. Weak
c. Moderate
Explanation: Surges and shear lines are characteristic features seen during a vigorous (active) monsoon phase.

23. Peninsular discontinuity occurs along
a. West Coast
b. East coast
*c. Central Peninsula
Explanation: The peninsular discontinuity is a trough line found across the central Indian peninsula.

24. Peninsular discontinuity occurs during
a. Monsoon
b. NE Monsoon
*c. Pre Monsoon
Explanation: This discontinuity is a pre-monsoon season feature.

25. Surge is also
a. Velocity Divergence
*b. Velocity Convergence
c. like ITCZ
Explanation: A surge represents a sudden increase (convergence) of wind velocity within the flow.

26. In a depression the wind speed is
a. < 17 kt
b. 34 - 47 kt
*c. 17 - 27 kt
d. 48 - 63 kt
Explanation: A depression is classified by sustained wind speeds of roughly 17-27 kt.

27. In a CS the wind speed is
a. < 17 kt
*b. 34 - 47 kt
c. 17 - 27 kt
d. 28 - 33 kt
Explanation: A cyclonic storm is classified by wind speeds in the 34-47 kt range.

28. A monsoon depression slopes ........... with height
a. SE
b. NW
*c. SW
d. NE
Explanation: Monsoon depressions characteristically tilt toward the southwest with increasing height.

29. Average life of a monsoon depression is
a. 2-3 days
b. 8-9 days
*c. 3-5 days
d. 10-12 days
Explanation: A typical monsoon depression persists for roughly 3-5 days.

30. Monsoon depressions move faster over
a. Sea
*b. Plains
c. Hills
d. Rivers
Explanation: Monsoon depressions tend to move faster once over the plains, compared to slower movement near hilly terrain or the coast.

31. For formation of a CS sea surface temperature should be
*a. 26 -27 °C
b. 23 -24 °C
c. 24 -25 °C
d. 30 °C
Explanation: Tropical cyclone formation generally requires sea surface temperatures of at least about 26-27°C.

32. In extra tropical cyclone family there are 3 - 4 CS or depressions, one to the ... of the other
a. SE
b. NW
*c. SW
d. NE
Explanation: In an extra-tropical cyclone family, successive lows typically form successively to the southwest of the preceding one along the front.

33. In TRS the central pressure is about
a. 1002-1010 hPa
*b. 1000-900 hPa
c. 1010-1020 hPa
Explanation: A tropical revolving storm's central pressure typically falls in the roughly 900-1000 hPa range depending on intensity.

34. TRS develop over
*a. Sea
b. Land
c. Islands
d. at equator
Explanation: Tropical revolving storms derive their energy from warm ocean water and therefore develop over the sea.

35. TRS develop over ........... deg Lat
a. 0-5
*b. 5-15
c. 25-30
d. 30 - 40
Explanation: Tropical cyclogenesis is generally confined to about 5-15° latitude, where Coriolis force is sufficient but sea temperatures remain warm.

36. In TRS pressure gradient is very steep up to a radius of
a. 30 km
b. 50 km
*c. 100 km
d. 400 km
Explanation: The pressure gradient around a tropical revolving storm is steepest within roughly 100 km of the centre.

37. Extra Tropical Storms originate in
a. Equatorial Front
b. Tropical Front
*c. Polar Front
Explanation: Extra-tropical cyclones develop along the polar front, where contrasting air masses meet.

38. Extra-tropical Storms generally move in the direction
a. S to E
*b. W to E
c. S to W
d. E to W
Explanation: Steered by the mid-latitude westerlies, extra-tropical storms generally track from west to east.

39. A Tropical Cyclone moves ........... in a day
*a. 300-500 km
b. 500-700 km
c. 700-900 km
Explanation: Tropical cyclones typically translate at a pace covering roughly 300-500 km per day.

40. A Tropical CS has outer storm area of about
*a. >400 km
b. >700 km
c. >900 km
Explanation: The outer storm area of a tropical cyclonic storm can extend beyond about 400 km from the centre.
`);

registerChapterText("aviation-meteorology", "climatology-of-india", "Climatology of India", `
1. During winters
a. Advection fog occurs over northern & central parts of India
b. Radiation fog occurs in southern parts of India
*c. Activity of Radiation fog increases after the passage of a WD over N India
Explanation: The clear, calm air behind a passing Western Disturbance strongly favours increased radiation fog activity over North India.

2. Low Temperatures and low humidity is the characteristic of
a. Post Monsoon
b. Summer
c. Monsoon
*d. Winter
Explanation: Winter in India is characterised by both low temperature and low humidity.

3. The Summer Season period is
a. Jan-Feb
*b. Mar-May
c. Jul - Sept
d. Oct - Dec
Explanation: India's hot weather (summer) season runs approximately March to May.

4. During Summer season
*a. WDs cause TS / DS over Punjab & Rajasthan
b. No WD affect N-parts of country
c. Track of WD is southern most
Explanation: Western Disturbances interacting with intense summer heating can trigger thunderstorms/duststorms over Punjab and Rajasthan.

5. The monsoon current over the West coast of India is
*a. SWly
b. SEly
c. NEly
d. NWly
Explanation: The Arabian Sea monsoon branch approaches India's west coast from the southwest.

6. Monsoon period is
a. Jan to Feb
b. March to May
*c. Jun to Sep
d. Oct to Dec
Explanation: The Indian southwest monsoon season runs from June to September.

7. The monsoon advances with
a. Bay of Bengal current only
b. Arabian Sea current only
*c. Bay of Bengal and Arabian sea currents
Explanation: The Indian monsoon has two branches, advancing via both the Bay of Bengal and Arabian Sea currents.

8. The rainfall over India during monsoon depends on
a. Low over Pakistan
b. Depression over Bay of Bengal
*c. The position of the axis of Monsoon Trough.
Explanation: The location of the monsoon trough axis strongly governs the distribution of monsoon rainfall across India.

9. Rainfall occurs all over the country during monsoon when
*a. Axis of MT is in its normal position along Gangetic plains
b. Axis of MT is along Himalayas
c. Depression formed over Bay of Bengal
Explanation: Widespread rainfall across the country is favoured when the monsoon trough sits in its normal position along the Gangetic plains.

10. Break in monsoon occurs when the axis of monsoon trough is along the
a. Gangetic plains
*b. Foot hills of Himalayas
c. Bay of Bengal.
Explanation: A "break monsoon" phase occurs when the trough shifts north to lie along the Himalayan foothills, drying out the plains.

11. With a Depression over the Head Bay fair weather during monsoon occurs over
*a. Assam
b. W Bengal
c. Orissa
Explanation: When a depression forms over the head Bay of Bengal, Assam typically experiences comparatively fair weather.

12. Monsoon is also called
a. Pre monsoon
*b. Rainy Season
c. Post monsoon
Explanation: The monsoon period is commonly referred to as the rainy season.

13. Autumn Season period is
a. Mar to May
b. Jun to Sept
*c. Oct to Nov
d. Jan to Feb
Explanation: The post-monsoon/autumn transition season in India runs roughly October to November.

14. During post monsoon, pressure gradient over India is
*a. weak
b. steep
c. same as winters
Explanation: The post-monsoon transition period is characterised by a generally weak pressure gradient.

15. During monsoon season, low pressure lies over
a. Bay of Bengal
b. NE India
c. Central India
*d. Pakistan
Explanation: During the monsoon season, the seasonal low pressure system is centred over Pakistan/NW India.

16. During vigorous monsoon period the pressure gradient over west coast is
a. Weak
*b. Steep
c. Normal
Explanation: A vigorous (active) monsoon phase is marked by a steep pressure gradient along the west coast, driving strong winds.

17. Flying in Monsoon from Chennai to Kolkata at 14 km a/c will experience winds
*a. Easterly
b. Westerly
c. Nly
d. Southerly
Explanation: At upper levels (14 km) during the monsoon, the Tropical Easterly Jet dominates, giving easterly winds along this route.

18. An A/C flying in Winter season from Chennai to Kolkata at 12 km will experience
a. Ely
*b. Wly
c. Nly
d. Sly
Explanation: In winter, upper-level flow at 12 km over India is dominated by westerlies (subtropical jet influence).

19. An aircraft flying in Summer season from Delhi to Kolkata at 10 km will experience
a. Easterly
*b. Westerly
c. Northerly
d. Southerly
Explanation: At 10 km in summer over this route, westerly flow associated with upper-level circulation still generally prevails ahead of full monsoon onset.

20. An A/C flying in Monsoon from Mumbai to Ahmadabad at 03 km will experience
a. SEly
*b. SWly
c. Nly
d. NWly
Explanation: Low-level monsoon flow along the west coast/Gujarat sector is predominantly southwesterly.

21. A/C flying in winter season from Delhi to Kolkata at 06 km will experience winds
a. SEly
b. SWly
c. Nly
*d. NW - Wly
Explanation: Mid-level winter flow along this route is generally from the northwest to west.

22. An aircraft flying in winter season from Delhi to Kolkata at 06 km will experience
*a. Port drift
b. Starboard drift
c. Tail wind
d. Head wind
Explanation: With predominantly westerly/northwesterly winds on an easterly track from Delhi to Kolkata, the aircraft experiences port drift.

23. Flying in winter season from Kolkata to Nagpur at 02 km will experience
*a. Port drift
b. Starboard drift
c. Tail wind
d. Head wind
Explanation: The prevailing low-level winter wind pattern on this route produces port drift.

24. During break monsoon the pressures all over the country
*a. Rise
b. Fall
c. Do not change
Explanation: During a break monsoon phase, pressure generally rises across the country as the trough shifts to the foothills.

25. During break monsoon sometimes surface winds over East UP and Bihar are
*a. very strong
b. weak
c. normal
Explanation: Surface winds over East UP and Bihar can become notably strong during certain break monsoon conditions.

26. Mid tropospheric cyclone occurs during
a. Summer Season
b. Winters
c. Post monsoon
*d. Monsoon
Explanation: Mid-tropospheric cyclones are a monsoon-season phenomenon over India.

27. Mid tropospheric cyclone during monsoon form over
a. Orissa
b. Punjab
*c. Gujarat
d. Chennai
Explanation: Mid-tropospheric cyclones during the monsoon characteristically form over the Gujarat region.

28. El Nino is
*a. Warm phase of ESNO
b. Cold Phase of ESNO
c. Good for Indian Monsoon causing more rains
Explanation: El Nino represents the warm phase of the El Nino-Southern Oscillation (ENSO).

29. Maximum cyclones occur over India in
a. Pre monsoon
b. Winters
*c. Post monsoon
d. Monsoon
Explanation: The post-monsoon period sees the highest frequency of cyclones affecting India.

30. Tropical Jet stream occurs in India during
a. Pre monsoon
b. Winters
c. Post monsoon
*d. Monsoon
Explanation: The Tropical Easterly Jet is specifically a monsoon-season feature over India.

31. Pressure gradient over West Coast of India is steep during
a. Pre monsoon
b. Winters
c. Post monsoon
*d. Monsoon
Explanation: The steepest pressure gradient along India's west coast occurs during the active monsoon season.

32. During break monsoon more rain occurs
*a. along foot hills
b. NW India
c. S India
Explanation: With the monsoon trough shifted north during a break phase, rainfall concentrates along the Himalayan foothills rather than the plains.
`);
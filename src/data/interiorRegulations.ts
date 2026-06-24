/**
 * Interior building-code requirements.
 * Source: 2024 International Residential Code (IRC).
 *
 * Full text provided by the client from the existing 369 Home Inspections site.
 * Titles normalized; quote text verbatim (obvious typos lightly corrected).
 * The source carries no links.
 */
import type { Regulation } from './regulationTypes';

export const interiorCodeSource =
  'All information is from the 2024 International Residential Code.';

export const interiorRegulations: Regulation[] = [
  {
    title: 'Smoke alarms',
    code: 'R310.3',
    body: `Smoke alarms shall be installed in the following locations: 1. In each sleeping room. 2. Outside each separate sleeping area in the immediate vicinity of the bedrooms. 3. On each additional story of the dwelling unit, including basements and habitable attics and not including crawl spaces and uninhabitable attics. In dwelling units with split levels and without intervening door between the adjacent levels, a smoke alarm installed on the upper level shall suffice for the adjacent lower level provided that the lower level is less than one full story below the upper level. 4. Not less than 3 feet horizontally from the door or opening of a bathroom that contains a bathtub or shower unless this would prevent placement of a smoke alarm required by this section. 5. In the hallway and in the room open to the hallway in dwelling units where the ceiling height of a room open to a hallway serving bedrooms exceeds that of the hallway by 24 inches or more. 6. Within the room to which a sleeping loft is open, in the immediate vicinity of the sleeping loft.`,
  },
  {
    title: 'Smoke alarms',
    code: 'R310.2.2',
    body: `Where alterations, repairs or additions requiring a permit occur, the individual dwelling unit shall be equipped with smoke alarms located as required for new dwellings. Exceptions: 1. Work involving the exterior surfaces of dwellings, such as the replacement of roofing or siding, the addition or replacement of windows or doors, or the addition of a porch or deck. 2. Installation, alteration or repairs of plumbing or mechanical systems.`,
  },
  {
    title: 'Smoke alarms',
    code: 'R310.3.1',
    body: `Smoke alarms shall be installed not less than 10 feet horizontally from a permanently installed cooking appliance. Exception: 1. Smoke alarms shall be permitted to be installed not less than 6 feet horizontally from a permanently installed cooking appliance where necessary to comply with section R310.3.`,
  },
  {
    title: 'Smoke alarms',
    code: 'R310.4',
    body: `Where more than one smoke alarm is required to be installed within an individual dwelling unit in accordance with section R310.3, the alarm devices shall be interconnected in such a manner that the actuation of one alarm will activate all of the alarms in the individual dwelling unit. Physical interconnection of smoke alarms shall not be required where listed wireless alarms are installed and all alarms sound upon activation of one alarm.`,
  },
  {
    title: 'Smoke alarms',
    code: 'R310.6',
    body: `Smoke alarms shall receive their primary power from the building wiring where such wiring is served from a commercial source and, where primary power is interrupted, shall receive power from a battery. Wiring shall be permanent and without disconnecting switch other than those required for over current protection. Exceptions: 1. Smoke alarms shall be permitted to be battery operated where installed in buildings without commercial power. 2. Smoke alarms installed in accordance with Section R310.2.2 shall be permitted to be battery powered.`,
  },
  {
    title: 'Combination alarms',
    code: 'R310.5',
    body: `Combination smoke and carbon alarms shall be permitted to be used in lieu of smoke alarms.`,
  },
  {
    title: 'Combination detectors',
    code: 'R310.7.4',
    body: `Combination smoke and carbon monoxide detectors shall be permitted to be installed in fire alarm systems in lieu of smoke detectors, provided that they are listed in accordance with UL 268 and UL 2075.`,
  },
  {
    title: 'Carbon monoxide alarms',
    code: 'R311.2.1',
    body: `For new construction, Carbon monoxide alarms shall be provided in dwelling units where either or both of the following conditions exist. 1. The dwelling unit contains a fuel fired appliance. 2. The dwelling unit has an attached garage with an opening that communicates with the dwelling unit.`,
  },
  {
    title: 'Carbon monoxide alarms',
    code: 'R311.2.2',
    body: `Where alterations, repairs or additions requiring a permit occur, the individual dwelling unit shall be equipped with carbon monoxide alarms located as required for new dwellings. Exceptions: 1. Work involving the exterior surfaces of dwellings, such as the replacement of roofing or siding, or the addition or replacement of windows or doors, or the addition of a porch or deck. 2. Installation, alteration or repairs of plumbing systems. 3. Installation, alteration or repairs of mechanical systems that are not fuel fired.`,
  },
  {
    title: 'Carbon monoxide',
    code: 'R311.3',
    body: `Carbon monoxide alarms in dwelling units shall be installed outside each separate sleeping area in the immediate vicinity of the bedrooms. Where a fuel burning appliance is located within a bedroom or its attached bathroom, a carbon monoxide alarm shall be installed within the bedroom.`,
  },
  {
    title: 'Carbon monoxide',
    code: 'R311.4',
    body: `Combination carbon monoxide and smoke alarms shall be permitted to be used in lieu of carbon monoxide alarms.`,
  },
  {
    title: 'Carbon monoxide',
    code: 'R311.5',
    body: `Where more than one carbon monoxide alarm is required to be installed within an individual dwelling unit in accordance with section R311.3 the alarm devices shall be interconnected in such manner that the actuation of one alarm will activate all of the alarms in the individual dwelling unit. Physical interconnection of carbon monoxide alarms shall not be required where listed wireless alarms are installed and all alarms sound upon activation of one alarm. Exception: Interconnection of carbon monoxide alarms in existing areas shall not be required where alterations or repairs do not result in removal of interior wall or ceiling finishes exposing the structure, unless there is an attic, crawl space or basement available that could provide access for interconnection without the removal of interior finishes.`,
  },
  {
    title: 'Carbon monoxide',
    code: 'R311.7.4',
    body: `Combination carbon monoxide and smoke detectors installed in carbon monoxide detection systems in lieu of carbon monoxide detectors shall be listed in accordance with UL 268 and UL 2075.`,
  },
  {
    title: 'Minimum room area',
    code: 'R312.1',
    body: `Habitable rooms shall have a floor area no less than 70 square feet.`,
  },
  {
    title: 'Minimum room dimension',
    code: 'R312.2',
    body: `Habitable room shall be not less than 7 feet in any horizontal dimension.`,
  },
  {
    title: 'Minimum ceiling height',
    code: 'R313.1',
    body: `Habitable space, hallways and portions of basements containing these spaces shall have a ceiling height of not less than 7 feet. Bathrooms, toilet rooms and laundry rooms shall have a ceiling height of not less than 6 feet 8 inches. Exceptions: 1. For rooms with sloped ceilings, the required floor area of the room shall have a ceiling height of not less than 5 feet and not less than 50 percent of the required floor area shall have a ceiling height of not less than 7 feet. 2. The ceiling height above the bathroom and toilet room fixtures shall be such that the fixture is capable of being used for its intended purpose. A shower or tub equipped with a showerhead shall have a ceiling height of not less than 6 feet 8 inches above an area not less 30 inches by 30 inches at the showerhead. 3. Beams, girders, ducts or other obstructions in basements containing habitable space shall be permitted to project to within 6 feet 4 inches of the finished floor. 4. Beams and girders spaced apart not less than 36 inches in clear and finished width shall project not more than 78 inches from the finished floor.`,
  },
  {
    title: 'Basement ceiling height',
    code: 'R313.1.1',
    body: `Portions of basements that do not contain habitable space or hallways shall have a ceiling height of not less than 6 feet 8 inches. Exceptions: 1. At beams, girders, ducts, or other obstructions, the ceiling height shall be not less than 6 feet 4 inches from the finished floor.`,
  },
  {
    title: 'Basement ceiling height',
    code: 'R313.1.2',
    body: `Where a habitable attic or habitable space in the basement is created in an existing building, Ceiling height shall not be less than 6 feet 8 inches, Bathrooms, toilet rooms and laundry rooms shall have a ceiling height of not less than 6 feet 4 inches. Exceptions: 1. For rooms with sloped ceilings, the required floor area of the room shall have a ceiling height of not less than 5 feet and not less than 50 percent of the required floor area shall have a ceiling height of not less than 6 feet 8 inches. 2. At beams, girders or other obstructions, the ceiling height shall not be less than 6 feet 4 inches from the finished floor.`,
  },
  {
    title: 'Mezzanines',
    code: 'R314.2',
    body: `The clear height above and below mezzanine floor construction shall be not less than 7 feet.`,
  },
  {
    title: 'Mezzanines',
    code: 'R314.5',
    body: `Mezzanines shall be open and unobstructed to the room which they are located except for walls not more than 42 inches in height, height columns, beams and post. Exceptions: 1. Mezzanines or portions of the mezzanines, are not required to be open to the room in which they are located, provided that the enclosed space on the mezzanines are not greater than 10 percent of the mezzanine area.`,
  },
  {
    title: 'Sleeping lofts',
    code: 'R315.2',
    body: `Sleeping lofts shall comply with the following conditions: 1. The sleeping loft floor area shall be less than 70 square feet. 2. The sleeping loft ceiling height shall not exceed 7 feet for more than one half of the sleeping loft floor area.`,
  },
  {
    title: 'Sleeping loft ceiling height',
    code: 'R315.3',
    body: `The clear height below the sleeping loft floor construction shall be not less than 7 feet. The ceiling height above the finished floor of the sleeping loft shall not be less than 3 feet. Spaces adjacent to the sleeping loft with a sloped ceiling measuring less than 3 feet from the finished floor to the finished ceiling shall not contribute to the sleeping loft floor area.`,
  },
  {
    title: 'Sleeping loft egress',
    code: 'R315.5.1',
    body: `A ceiling height of not less than 3 feet shall be provided for the entire width of the means of egress from the sleeping loft.`,
  },
  {
    title: 'Sleeping loft stairway width',
    code: 'R315.5.2.1',
    body: `Stairways providing egress from a sleeping loft shall not be less than 17 inches in clear width at or above the handrail. The width below the handrail shall not be less than 20 inches.`,
  },
  {
    title: 'Sleeping loft stairway steps',
    code: 'R315.5.2.2',
    body: `Risers for stairs providing egress from a sleeping loft shall not be less than 7 inches and not more than 12 inches in height. Tread depth and riser height shall be calculated in accordance with one of the following formulas: 1. The tread depth shall be 20 inches minus four thirds of the riser height. 2. The riser height shall be 15 inches minus three fourths of the tread depth.`,
  },
  {
    title: 'Sleeping loft ladders',
    code: 'R315.5.3.1',
    body: `Ladders providing egress from sleeping lofts shall have a rung width not less than 12 inches, and 10 inch to 14 inch spacing between rungs. Ladders shall be capable of supporting a 300 pound load on any rung. Rung spacing shall be uniform within 3/8 inch.`,
  },
  {
    title: 'Sleeping loft ladders',
    code: 'R315.5.3.2',
    body: `Ladders shall be inclined at 70 to 80 degrees from horizontal.`,
  },
  {
    title: 'Natural light',
    code: 'R325.1.1',
    body: `Habitable rooms shall have an aggregate area of glazed opening not less than 8 percent of the floor area of such rooms. Required glazed openings shall face directly onto a street, alley or public way, or a yard or court located on the same lot as the building. Exceptions: 1. Required glazed openings shall be permitted to face into a roofed porch, deck or patio adjacent to a street alley or public way, yard or court. Where the longer side of the roof area is not less than 65 percent unobstructed and the ceiling height is not less than 7 feet. 2. Required Glazed openings shall be permitted to face into a sunroom adjacent to a street, alley, public way, yard or court. 3. Glazed openings are not required where artificial lights is provided that is capable of producing an average illumination of 6 footcandles over the area of the room at a height of 30 inches above the floor level. 4. Eave projections shall not be considered as obstructing the clear open space of a yard or court.`,
  },
  {
    title: 'Natural ventilation',
    code: 'R325.1.2',
    body: `Habitable rooms shall have an aggregate area open to the outdoors not less than 4 percent of the floor area of such rooms. Openings shall have be through widows, skylights, doors, louvers, or other approved outdoor openings to the air. Such openings shall be provided with ready access or shall otherwise be readily controllable by the building occupants. Exceptions: 1. Natural ventilation shall not be required in habitable rooms other than a kitchen where a whole house mechanical ventilation system or a mechanical ventilation system capable of producing .35 air changes per hour in the habitable rooms installed in accordance with section M1505. 2. Natural ventilation shall not be required in kitchens where a local exhaust system is installed in accordance with section M1505. 3. Required ventilation openings shall be permitted to open into a thermally isolated sunroom or roofed porch, deck, or patio where not less than 40 percent of the roof area perimeter is open to the outdoor air. 4. Required ventilation openings shall be permitted to open to a thermally isolated sunroom provided there's an openable area between the adjoining room and the sun room not less than one tenth of the floor area of the interior room and not less than 20 square feet. The minimal openable area of the sunroom to the outdoor air shall be based on the total floor area of the adjoining room and the sunroom.`,
  },
  {
    title: 'Adjoining room light and ventilation',
    code: 'R325.1.3',
    body: `For the purpose of determining light and ventilation requirements, rooms shall be considered to be a portion of adjoining room where not less than one half of the area of the common wall is open and unobstructed and provides an opening of not less than one tenth of the floor area of the interior room and not less than 25 square feet.`,
  },
  {
    title: 'Bathroom light and ventilation',
    code: 'R325.2',
    body: `Bathrooms, water closet compartments and other similar rooms shall be provided with aggregate glazing area in windows of not less than 3 square, one half of which shall be openable. Exception: 1. The glazed areas shall not be required where artificial light and a local exhaust system are provided. The minimum local exhaust rates shall be determined in accordance M1505. Exhaust air from the space shall be exhausted directly to the outdoors.`,
  },
  {
    title: 'Intake openings',
    code: 'R325.4.1',
    body: `Mechanical and gravity outdoor and air intake openings shall be located not less than 10 feet from any hazardous and noxious containment, such as vents, chimneys, plumbing vents, streets, alleys, parking lots and loading docks. For the purpose of this section, the exhaust from dwelling unit toilet rooms, bathrooms, and kitchens shall not be considered as hazardous and noxious. Exception: 1. The 10 foot separation is not required where the intake opening is located 3 feet or greater below the contaminant source. 2. Vents and chimneys serving fuel burning appliances shall be terminated in accordance with the applicable provisions of chapters 18 and 24. 3. Clothes dryers exhaust ducts shall be terminated in accordance with section M1502.3.`,
  },
  {
    title: 'Glazing',
    code: 'R324.4.2',
    body: `Glazing is an individual fixed or operable panel adjacent to a door shall be considered to be a hazardous location where the bottom exposed edge of glazing is less than 60 inches above the floor or walking surface and it meets either of the following conditions: 1. Where the glazing is within 24 inches of either side of the door in the plane of the door in a closed position. 2. Where the glazing is on a wall less than 180 degrees from the plane of the door in a closed position and within 24 inches of the hinge side of an in-swinging door. Exceptions: 1. Decorative glazing. 2. Where there is an intervening wall or other permanent barrier between the door and glazing. 3. Where access through the door is to a closet or storage area 3 feet or less in depth. 4. Glazing that is adjacent to the fixed panel of patio doors.`,
  },
  {
    title: 'Glazing',
    code: 'R324.4.3',
    body: `Glazing in an individual fixed or operable panel that meets all of the following conditions shall be considered to be a hazardous location: 1. The exposed area of an individual pane is larger than 9 square feet. 2. The bottom edge of the glazing is less than 18 inches above the floor. 3. The top edge of the glazing is more than 36 inches above the floor. 4. One or more walking surfaces are within 36 inches measured horizontally and in a straight line of the glazing. Exception: 1. Decorative glazing. 2. Where glazing is adjacent to a walking surface and a horizontal rail is installed 34 to 38 inches above the walking surface. The rail shall be capable of withstanding a horizontal load of 50 pounds per linear foot without contacting the glass and have a cross sectional height of not less than 1 1/2 inches. 3. Outboard panes in insulating glass units and other multiple glazed panels where the bottom edge of the glass is 25 feet or more above grade, a roof, walking surface or other horizontal surface adjacent to the glass exterior.`,
  },
  {
    title: 'Glazing',
    code: 'R324.4.4',
    body: `Glazing in guards and railings, including structural baluster panels and nonstructural in-fill panels, regardless of area or height above walking surface shall be considered to be hazardous.`,
  },
  {
    title: 'Required heating',
    code: 'R325.8',
    body: `Where the winter design temperature in table R301.2 is below 60 Degrees F, every dwelling unit shall be provided with heating facilities capable of maintaining a room temperature of not less than 68 degree F at a point 3 feet above the floor and 2 feet from exterior walls in habitable rooms at the design temperature. The installation of one or more portable space heater shall not be used to achieve compliance with this section.`,
  },
  {
    title: 'Wood framing top plate',
    code: 'R602.3.2',
    body: `Wood stud walls shall be capped with a double top plate installed to provide overlapping at corners and intersections with bearing partitions. End joints in top plates shall be offset not less than 24 inches. Joints in plates need not occur over studs. Plates shall be not less than 2-inches nominal thickness and have a width not less than the width of the studs. Exception: A single top plate used as an alternative to a double top plate shall comply with the following: 1. The single top plate shall be tied at corners, intersecting walls, and at in-line splices in straight wall lines in accordance with Table R602.3.2. 2. The rafters or joists shall be centered over the studs with a tolerance of not more than 1 inch (25 mm). 3. Omission of the top plate is permitted over headers where the headers are adequately tied to adjacent wall sections in accordance with Table R602.3.2.`,
  },
  {
    title: 'Wood framing bearing studs',
    code: 'R602.3.3',
    body: `Where joists, trusses or rafters are spaced more than 16 inches on center and the bearing studs below are spaced 24 inches on center, such members shall bear within 5 inches of the studs beneath. Exceptions: 1. The top plates are two 2-inch by 6-inch or two 3-inch by 4-inch members. 2. A third top plate is installed. 3. Solid blocking equal in size to the studs is installed to reinforce the double top plate.`,
  },
  {
    title: 'Wood framing sole plate',
    code: 'R602.3.4',
    body: `Studs shall have full bearing on a nominal 2-by or larger plate or sill having a width not less than to the width of the studs.`,
  },
  {
    title: 'Wood framing nonbearing walls',
    code: 'R602.5',
    body: `Interior nonbearing walls shall be permitted to be constructed with 2-inch by 3-inch studs spaced 24 inches on center or, where not part of a braced wall line, 2-inch by 4-inch flat studs spaced at 16 inches on center. Interior nonbearing walls shall be capped with not less than a single top plate. Interior nonbearing walls shall be fireblocked in accordance with Section R602.8.`,
  },
  {
    title: 'Wood framing nonbearing walls',
    code: 'R602.7.4',
    body: `Load-bearing headers are not required in interior or exterior nonbearing walls. A single flat 2-inch by 4-inch member shall be permitted to be used as a header in interior or exterior nonbearing walls for openings up to 8 feet in width if the vertical distance to the parallel nailing surface above is not more than 24 inches. For such nonbearing headers, cripples or blocking are not required above the header.`,
  },
  {
    title: 'Wood framing header support',
    code: 'R602.7.5',
    body: `Headers shall be supported on each end with one or more jack studs or with approved framing anchors in accordance with Table R602.7(1) or R602.7(2). The full-height stud adjacent to each end of the header shall be end nailed to each end of the header in accordance with Table R602.3(1). The minimum number of full-height studs at each end of a header shall be in accordance with Table R602.7.5.`,
  },
  {
    title: 'Wood framing cuts',
    code: 'R602.6',
    body: `Drilling and notching of studs shall be in accordance with the following: 1. Notching. A stud in an exterior wall or bearing partition shall not be cut or notched to a depth exceeding 25 percent of its depth. Studs in nonbearing partitions shall not be notched to a depth exceeding 40 percent of a single stud depth. 2. Boring. The diameter of bored holes in studs shall not exceed 60 percent of the stud depth, the edge of the hole shall not be less than 5/8 inch from the edge of the stud, and the hole shall not be located in the same section as a cut or notch. Where the diameter of a bored hole in a stud located in exterior walls or bearing partitions is over 40 percent, such stud shall be doubled and not more than two successive doubled studs shall be so bored. See Figures R602.6(1) and R602.6(2). Exception: Where approved, stud shoes are installed in accordance with the manufacturer’s instructions.`,
  },
  {
    title: 'Wood framing top plate cuts',
    code: 'R602.6.1',
    body: `Where piping or ductwork is placed in or partly in an exterior wall or interior loadbearing wall, necessitating cutting, drilling or notching of the top plate by more than 50 percent of its width, a galvanized metal tie not less than 0.054 inch thick (16 ga) and 1 1/2 inches wide shall be fastened across and to the plate at each side of the opening with not less than eight 10d (0.148 inch diameter) nails having a minimum length of 1 1/2 inches at each side or equivalent. The metal tie must extend not less than 6 inches past the opening. See Figure R602.6.1. Exception: Where the entire side of the wall with the notch or cut is covered by wood structural panel sheathing.`,
  },
  {
    title: 'Wood framing',
    code: 'R702.3.2',
    body: `Wood framing supporting gypsum board and gypsum panel products shall be not less than 2 inches nominal thickness in the least dimension except that wood furring strips not less than 1-inch by 2-inch nominal dimension shall be permitted to be used over solid backing or framing spaced not more than 24 inches on center.`,
  },
  {
    title: 'Drywall screws',
    code: 'R702.3.5.1',
    body: `Screws for attaching gypsum board and gypsum panel products to wood framing shall be Type W or Type S in accordance with ASTM C1002 and shall penetrate the wood not less than 5/8 inch.`,
  },
  {
    title: 'Drywall horizontal attachment',
    code: 'R702.3.6',
    body: `Gypsum board and gypsum panel products shall be permitted on wood joists to create a horizontal diaphragm in accordance with Table R702.3.6. Gypsum board and gypsum panel products shall be installed perpendicular to ceiling framing members. End joints of adjacent courses of board and panels shall not occur on the same joist. The maximum allowable diaphragm proportions shall be 1 1/2:1 between shear resisting elements. Rotation or cantilever conditions shall not be permitted. Gypsum board or gypsum panel products shall not be used in diaphragm ceilings to resist lateral forces imposed by masonry or concrete construction. Perimeter edges shall be blocked using wood members not less than 2-inch by 6-inch nominal dimension. Blocking material shall be installed flat over the top plate of the wall to provide a nailing surface not less than 2 inches in width for the attachment of the gypsum board or gypsum panel product.`,
  },
  {
    title: 'Water-resistant drywall',
    code: 'R702.3.7',
    body: `Gypsum board used as the base or backer for adhesive application of ceramic tile or other required nonabsorbent finish material shall conform to ASTM C1178, C1278 or C1396. Use of water-resistant gypsum backing board shall be permitted on ceilings. Water-resistant gypsum board shall not be installed over a Class I or II vapor retarder in a shower or tub compartment. Cut or exposed edges, including those at wall intersections, shall be sealed as recommended by the manufacturer.`,
  },
  {
    title: 'Water-resistant drywall',
    code: 'R702.3.7.1',
    body: `Water-resistant gypsum backing board shall not be used where there will be direct exposure to water, or in areas subject to continuous high humidity.`,
  },
  {
    title: 'Wooden paneling',
    code: 'R702.5',
    body: `Wood veneer paneling and hardboard paneling shall be placed on wood or cold-formed steel framing spaced not more than 16 inches on center. Wood veneer and hard board paneling less than 1/4-inch nominal thickness shall not have less than a 3/8-inch gypsum board or gypsum panel product backer. Wood veneer paneling not less than 1/4-inch nominal thickness shall conform to ANSI/HPVA HP-1. Hardboard paneling shall conform to CPA/ANSI A135.5.`,
  },
  {
    title: 'Wood shakes and shingles',
    code: 'R702.6',
    body: `Wood shakes and shingles shall conform to CSSB Grading Rules for Wood Shakes and Shingles and shall be permitted to be installed directly to the studs with maximum 24 inches on-center spacing.`,
  },
  {
    title: 'Wood shakes and shingles attachment',
    code: 'R702.6.1',
    body: `Nails, staples or glue are permitted for attaching shakes or shingles to the wall, and attachment of the shakes or shingles directly to the surface shall be permitted provided the fasteners are appropriate for the type of wall surface material. Where nails or staples are used, two fasteners shall be provided and shall be placed so that they are covered by the course above.`,
  },
  {
    title: 'Wood shakes and shingles attachment',
    code: 'R702.6.2',
    body: `Where furring strips are used, they shall be 1 inch by 2 inches or 1 inch by 3 inches, spaced a distance on center equal to the desired exposure, and shall be attached to the wall by nailing through other wall material into the studs.`,
  },
  {
    title: 'Vapor retarders',
    code: 'R702.7',
    body: `Vapor retarder materials shall be classified in accordance with Table R702.7(1). A vapor retarder shall be provided on the interior side of frame walls of the class indicated in Table R702.7(2), including compliance with Table R702.7(3) or R702.7(4) where applicable. An approved design using accepted engineering practice for hygrothermal analysis shall be permitted as an alternative. Vapor retarders shall be installed in accordance with Section R702.7.2. The climate zone shall be determined in accordance with Section N1101.7. EXCEPTIONS: 1. Basement walls. 2. Below-grade portion of any wall. 3. Construction where accumulation, condensation or freezing of moisture will not damage the materials. 4. A vapor retarder shall not be required in Climate Zones 1, 2 and 3. 5. In Climate Zones 4 through 8, a vapor retarder shall not be required where the assembly complies with Table R702.7(5).`,
  },
  {
    title: 'Stairway clearance',
    code: 'R718.7.1',
    body: `Stairways shall be not less than 36 inches in clear width at all points above the permitted handrail height and below the required headroom height. The clear width of stairways at and below the handrail height, including treads and landings, shall be not less than 31 1/2 inches where a handrail is installed on one side and 27 inches where handrails are installed on both sides. Exception: The width of spiral stairways shall be in accordance with Section R318.7.11.1.`,
  },
  {
    title: 'Stairway clearance',
    code: 'R318.7.2',
    body: `The headroom in stairways shall be not less than 6 feet 8 inches measured vertically from the sloped line adjoining the tread nosing or from the floor surface of the landing or platform on that portion of the stairway. Exceptions: 1. Where the nosing's of treads at the side of a flight extend under the edge of a floor opening through which the stair passes, the floor opening shall not project horizontally into the required headroom more than 4 3/4 inches. 2. The headroom for spiral stairways shall be in accordance with Section R318.7.11.1.`,
  },
  {
    title: 'Stairway height',
    code: 'R318.7.3',
    body: `A flight of stairs shall not have a vertical rise greater than 12 feet 7 inches between floor levels or landings.`,
  },
  {
    title: 'Stairway risers',
    code: 'R318.7.5.1',
    body: `The riser height shall be not more than 7 3/4 inches. The riser height shall be measured vertically between leading edges of the adjacent treads. The greatest riser height within any flight of stairs shall not exceed the smallest by more than 3/8 inch. Risers shall be vertical or sloped from the underside of the nosing of the tread above at an angle not more than 30 degrees from the vertical. At open risers, openings located more than 30 inches, as measured vertically, to the floor or grade below shall not permit the passage of a 4-inch-diameter sphere. Exceptions: 1. The opening between adjacent treads is not limited on spiral stairways. 2. The riser height of spiral stairways shall be in accordance with Section R318.7.11.1.`,
  },
  {
    title: 'Stairway treads',
    code: 'R318.7.5.2',
    body: `The tread depth shall be not less than 10 inches. The tread depth shall be measured horizontally between the vertical planes of the foremost projection of adjacent treads and at a right angle to the tread’s leading edge. The greatest tread depth within any flight of stairs shall not exceed the smallest by more than 3/8 inch.`,
  },
  {
    title: 'Stairway winder treads',
    code: 'R318.7.5.2.1',
    body: `Winder treads shall have a tread depth of not less than 10 inches measured between the vertical planes of the foremost projection of adjacent treads at the intersections with the walk line. Winder treads shall have a tread depth of not less than 6 inches at any point within the clear width of the stair. Within any flight of stairs, the largest winder tread depth at the walk line shall not exceed the smallest winder tread by more than 3/8 inch. Consistently shaped winders at the walk line shall be allowed within the same flight of stairs as rectangular treads and shall not be required to be within 3/8 inch of the rectangular tread depth. Exception: 1. The tread depth at spiral stairways shall be in accordance with Section R318.7.11.1.`,
  },
  {
    title: 'Stairway nosings',
    code: 'R718.5.3',
    body: `Treads, landings and floors of stairways shall have a radius of curvature at the nosing not greater than 9/16 inch or a bevel not greater than 1/2 inch. A nosing projection not less than 3/4 inch and not more than 1 1/4 inches shall be provided on stairways. The greatest nosing projection shall not exceed the smallest nosing projection by more than 3/8 inch within a flight of stairs and the landings at the top of the flight. Exceptions: 1. A nosing projection is not required where the tread depth is not less than 11 inches. 2. Where risers are open, the maximum nosing projection shall be permitted to exceed 1 1/4 inches.`,
  },
  {
    title: 'Stairway landings',
    code: 'R318.7.6',
    body: `There shall be a floor or landing at the top and bottom of each flight of stairs. The width perpendicular to the direction of travel shall be not less than the width of the flight served. For landings of shapes other than square or rectangular, the depth at the walk line and the total area shall be not less than that of a quarter circle with a radius equal to the required landing width. Where the stairway has a straight run, the depth in the direction of travel shall be not less than 36 inches. EXCEPTIONS: 1. The top landing of an interior stairway, including those in an enclosed garage, shall be permitted to be on the other side of a door located at the top of the stairway, provided that the door does not swing over the stairs. 2. At an enclosed garage, the top landing at the stair shall be permitted to be not more than 7 3/4 inches below the top of the threshold. 3. At exterior doors, a top landing is not required for an exterior stairway of not more than two risers, provided that the door does not swing over the stairway. 4. Exterior stairways to grade with three or fewer risers serving a deck, porch or patio shall have a bottom landing width of not less than 36 inches, provided that the stairway is not the required access to grade serving the required egress door.`,
  },
  {
    title: 'Stairway landings and treads',
    code: 'R318.7.7',
    body: `The walking surface of treads and landings of stairways shall be sloped not steeper than 1 unit vertical in 48 units horizontal (2 percent slope). Exception: 1. Where the surface of a landing is required elsewhere in the code to drain surface water, the walking surface of the landing shall be sloped not steeper than 1 unit vertical in 20 units horizontal (5 percent slope) in the direction of travel.`,
  },
  {
    title: 'Spiral stairways',
    code: 'R318.7.11.1',
    body: `The clear width at and below the handrails at spiral stairways shall be not less than 26 inches and the walk line radius shall be not greater than 24 1/2 inches. Each tread shall have a depth of not less than 6 3/4 inches at the walk line. Treads shall be identical, and the rise shall be not more than 9 1/2 inches. Headroom shall be not less than 6 feet 6 inches.`,
  },
  {
    title: 'Stairway handrails',
    code: 'R318.7.8',
    body: `Handrails shall be provided on not less than one side of each flight of stairs with four or more risers.`,
  },
  {
    title: 'Stairway handrails',
    code: 'R320.2',
    body: `Handrail height, measured vertically from the sloped plane adjoining the tread nosing, or finish surface of ramp slope, shall be not less than 34 inches and not more than 38 inches. Handrail height on alternating tread devices and ship’s ladders shall be uniform and not less than 30 inches and not more than 34 inches. Exceptions: 1. The use of a volute, turnout or starting easing shall be allowed over the lowest tread. 2. Where handrail fittings or bending's are used to provide continuous transition between flights, transitions at winder treads, the transition from handrail to guard, or used at the start of a flight, the handrail height at the fittings or bending's shall be permitted to exceed 38 inches.`,
  },
  {
    title: 'Stairway handrails',
    code: 'R320.3',
    body: `Handrails shall not project more than 4 1/2 inches on either side of the stairway or ramp. Exception: Where nosings of landings, floors or passing flights project into the stairway reducing the clearance at passing handrails, handrails shall project not more than 6 1/2 inches into the stairway, provided that the stair width and handrail clearance are not reduced to less than that required.`,
  },
  {
    title: 'Stairway handrails',
    code: 'R320.4',
    body: `Handrails adjacent to a wall shall have a space of not less than 1 1/2 inches between the wall and the handrails.`,
  },
  {
    title: 'Stairway handrails',
    code: 'R320.5',
    body: `Handrails shall be continuous for the full length of the flight, from a point directly above the nosing of the landing at the top of the flight to a point directly above the lowest nosing of the flight. Handrails where required for ramps shall be continuous for the full length of the ramp. A handrail end shall be returned continuous to itself or toward a wall, guard or walking surface. Handrail returns shall not form a gap more than 1/4 inch from the adjacent wall. Exceptions: 1. Handrail continuity shall be permitted to be interrupted by a newel post at a turn in a flight with winders, at a landing, or over the lowest tread. 2. A volute, turnout or starting easing shall be allowed to terminate over the lowest tread.`,
  },
  {
    title: 'Stairway handrails',
    code: 'R320.6',
    body: `Required handrails shall be of one of the following types or provide equivalent graspability. 1. Type I. Handrails with a circular cross section shall have an outside diameter of not less than 1 1/4 inches and not greater than 2 inches. If the handrail is not circular, it shall have a perimeter of not less than 4 inches and not greater than 6 1/4 inches and a cross section of not more than 2 1/4 inches. Edges shall have a radius of not less than 0.01 inch. 2. Type II. Handrails with a perimeter greater than 6 1/4 inches shall have a graspable finger recess area on both sides of the profile. The finger recess shall begin within 3/4 inch measured vertically from the tallest portion of the profile and have a depth of not less than 5/16 inch within 7/8 inch below the widest portion of the profile. This required depth shall continue for not less than 3/8 inch to a level that is not less than 1 3/4 inches below the tallest portion of the profile. The width of the handrail above the recess shall be not less than 1 1/4 inches and not more than 2 3/4 inches. Edges shall have a radius of not less than 0.01 inch.`,
  },
  {
    title: 'Guard rails',
    code: 'R321.1.1',
    body: `Guards shall be provided for those portions of open-sided walking surfaces, including floors, stairs, ramps and landings that are located more than 30 inches measured vertically to the floor or grade below at any point within 36 inches horizontally to the edge of the open side. Insect screening shall not be considered as a guard.`,
  },
  {
    title: 'Guard rails',
    code: 'R321.1.2',
    body: `Required guards at open-sided walking surfaces, including stairs, porches, balconies or landings, shall be not less than 36 inches in height as measured vertically above the adjacent walking surface or the line connecting the nosings. Exceptions: 1. Guards on the open sides of stairs shall have a height of not less than 34 inches measured vertically from a line connecting the nosings. 2. Where the top of the guard serves as a handrail on the open sides of stairs, the top of the guard shall be not less than 34 inches and not more than 38 inches as measured vertically from a line connecting the nosings.`,
  },
  {
    title: 'Guard rails',
    code: 'R321.1.3',
    body: `Required guards shall not have openings from the walking surface to the required guard height that allow passage of a sphere 4 inches in diameter. Exceptions: 1. The triangular openings at the open side of stair, formed by the riser, tread and bottom rail of a guard, shall not allow passage of a sphere 6 inches in diameter. 2. Guards on the open side of stairs shall not have openings that allow passage of a sphere 4 3/8 inches in diameter.`,
  },
  {
    title: 'Stairway lighting',
    code: 'R325.6',
    body: `Interior stairways shall be provided with an artificial light source to illuminate the landings and treads. The light source shall be capable of illuminating treads and landings to levels of not less than 1 footcandle as measured at the center of treads and landings. There shall be a wall switch at each floor level to control the light source where the stairway has six or more risers. Exception: 1. A switch is not required where remote, central or automatic control of lighting is provided.`,
  },
  {
    title: 'Emergency escape',
    code: 'R319.1',
    body: `Basements, habitable attics, the room to which a sleeping loft is open, and every sleeping room shall have not less than one operable emergency escape and rescue opening. Where basements contain one or more sleeping rooms, an emergency escape and rescue opening shall be required in each sleeping room. Emergency escape and rescue opening shall open directly into a public way, or to a yard or court that opens to a public way. Exceptions: 1. Basements used only to house mechanical equipment not exceeding a total floor area of 200 square feet. 2. Storm shelters constructed in accordance with ICC 500. 3. Where the dwelling unit or townhouse unit is equipped with an automatic sprinkler system installed in accordance with Section P2904, sleeping rooms in basements shall not be required to have emergency escape and rescue openings provided that the basement has one of the following: 3A. One means of egress complying with Section R318 and one emergency escape and rescue opening. 3B. Two means of egress complying with Section R318. 4. A yard shall not be required to open directly into a public way where the yard opens to an unobstructed path from the yard to the public way. Such path shall have a width of not less than 36 inches.`,
  },
  {
    title: 'Emergency escape dimensions',
    code: 'R319.2.1',
    body: `Emergency escape and rescue openings shall have a net clear opening of not less than 5.7 square feet. Exception: The minimum net clear opening for grade-floor emergency escape and rescue openings shall be 5 square feet.`,
  },
  {
    title: 'Emergency escape dimensions',
    code: 'R319.2.2',
    body: `The minimum net clear opening height dimension shall be 24 inches. The minimum net clear opening width dimension shall be 20 inches. The net clear opening dimensions shall be the result of normal operation of the opening.`,
  },
  {
    title: 'Emergency escape dimensions',
    code: 'R319.2.3',
    body: `Emergency escape and rescue openings shall have the bottom of the clear opening not greater than 44 inches above the floor.`,
  },
  {
    title: 'Emergency escape door',
    code: 'R319.3',
    body: `Where a door is provided as the required emergency escape and rescue opening, it shall be a side-hinged door or a sliding door.`,
  },
];

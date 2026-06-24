/**
 * Electrical building-code requirements.
 * Source: 2023 National Electrical Code (NEC).
 *
 * Full text transcribed from the existing 369 Home Inspections site:
 * https://molina1998329.wixsite.com/369homeinspectionsll/new-electrical
 * The original page carries no reference hyperlinks. Verify wording against
 * the source / NEC before relying on it.
 */
import type { Regulation } from './regulationTypes';

export const electricalCodeSource =
  'All information is from the 2023 National Electrical Code. Your local codes may vary.';

export const electricalRegulations: Regulation[] = [
  {
    title: 'Receptacle spacing',
    code: '210.52(A)(1)',
    body: 'Receptacles shall be installed so that no point measured horizontally along the floor line of any wall space is more than 6 feet from a receptacle outlet.',
  },
  {
    title: 'Wall space',
    code: '210.52(A)(2)',
    body: '(1.) Any space that is 2 feet or more in width, including space measured around corners, and that is unbroken along the floor line by doorways and similar openings, fireplaces, stationary appliances, and fixed cabinets that do not have countertops or similar work surfaces. (2.) The space occupied by fixed panels in exterior walls, excluding sliding panels. (3.) The space created by fixed room dividers such as railings and freestanding bar-type counters.',
  },
  {
    title: 'Receptacle spacing',
    code: '210.52(C)(1)',
    body: 'A receptacle outlet shall be installed at each wall countertop and work surface that is 12 inches or wider. Receptacle outlets shall be installed so that no point along the wall line is more than 24 inches, measured horizontally, from a receptacle outlet in that space.',
  },
  {
    title: 'Floor receptacles',
    code: '210.52(A)(3)',
    body: 'Receptacle outlets in floors shall not be counted as part of the required number of receptacle outlets except where located within 18 inches of the wall.',
  },
  {
    title: 'Receptacle spacing',
    code: '210.50(C)',
    body: 'Appliance receptacle outlets installed for specific appliances, such as laundry equipment, shall be installed within 6 feet of the intended location of the appliance.',
  },
  {
    title: 'Receptacle spacing',
    code: '210.52(D)',
    body: 'At least one receptacle outlet shall be installed in bathrooms and such outlet shall be located within 36 inches of the outside edge of each sink. The receptacle outlet shall be located on a wall or partition that is adjacent to the sink or sink countertop, located on the countertop, or installed on the side or face of the sink cabinet. The receptacle shall be located not more than 12 inches below the top of the sink or sink countertop.',
  },
  {
    title: 'Outdoor receptacles',
    code: '210.52(E)',
    body: 'Not less than one receptacle outlet that is readily accessible from grade level and located not more than 6 feet 6 inches above grade, shall be installed outdoors at the front and back of each dwelling unit having direct access to grade level. Balconies, decks and porches that are accessible from inside within 4 inches horizontally of the dwelling unit shall have at least one receptacle outlet accessible from the balcony, deck or porch. The receptacle shall be located not more than 6 feet 6 inches above the balcony, deck, or porch surface.',
  },
  {
    title: 'Receptacle spacing',
    code: '210.52(G)(1), (2), and (3)',
    body: 'Not less than one receptacle outlet, in addition to any provided for specific equipment, shall be installed in each separate unfinished portion of a basement; in each vehicle bay not more than 5.5 feet (1676 mm) above the floor in attached garages; in each vehicle bay not more than 5.5 feet (1676 mm) above the floor in detached garages that are provided with electric power and in accessory buildings that are provided with electric power. Receptacles supplying only a permanently installed premises security system shall not be considered as meeting these requirements.',
  },
  {
    title: 'Hallway receptacles',
    code: '210.52(H)',
    body: 'Hallways of 10 feet or more in length shall have at least one receptacle outlet. The hall length shall be considered the length measured along the centerline of the hall without passing through a doorway.',
  },
  {
    title: 'Foyer receptacles',
    code: '210.52(I)',
    body: 'Foyers that are not part of a hallway in accordance with 210.52(H) and that have an area that is greater than 60 square feet shall have a receptacle located in each wall space that is 3 feet or more in width. Doorways, door-side windows that extend to the floor, and similar openings shall not be considered as wall space.',
  },
  {
    title: 'HVAC receptacles',
    code: '210.63',
    body: 'A 125-volt, single-phase, 15- or 20-ampere-rated receptacle outlet shall be installed at an accessible location for the servicing of heating, air-conditioning and refrigeration equipment. The receptacle shall be located on the same level and within 25 feet of the heating, air-conditioning and refrigeration equipment. The receptacle outlet shall not be connected to the load side of the HACR equipment disconnecting means.',
  },
  {
    title: 'Bathroom GFCI',
    code: '210.8(A)(1)',
    body: '125-volt through 250-volt receptacles installed in bathrooms and supplied by single-phase branch circuits rated 150 volts or less to ground shall have ground-fault circuit interrupter protection for personnel.',
  },
  {
    title: 'Garage GFCI',
    code: '210.8(A)(2)',
    body: '125-volt through 250-volt receptacles installed in garages and grade-level portions of unfinished accessory buildings used for storage or work areas and supplied by single-phase branch circuits rated 150 volts or less to ground shall have ground-fault circuit-interrupter protection for personnel.',
  },
  {
    title: 'Exterior GFCI',
    code: '210.8(A)(3)',
    body: '125-volt through 250-volt receptacles installed outdoors and supplied by single-phase branch circuits rated 150 volts or less to ground shall have ground-fault circuit-interrupter protection for personnel.',
  },
  {
    title: 'Crawl space GFCI',
    code: '210.8(A)(4) and 210.8(E)',
    body: 'Where a crawl space is at or below grade level, 125-volt through 250-volt receptacles installed in such spaces and supplied by single-phase branch circuits rated 150 volts or less to ground shall have ground-fault circuit-interrupter protection for personnel. Lighting outlets not exceeding 120 volts shall have ground-fault circuit-interrupter protection.',
  },
  {
    title: 'Basement GFCI',
    code: '210.8(A)(5)',
    body: '125-volt through 250-volt receptacles installed in basements and supplied by single-phase branch circuits rated 150 volts or less to ground shall have ground-fault circuit-interrupter protection for personnel.',
  },
  {
    title: 'Kitchen GFCI',
    code: '210.8(A)(6)',
    body: '125-volt through 250-volt receptacles that serve kitchens and are supplied by single-phase branch circuits rated 150 volts or less to ground shall have ground-fault circuit-interrupter protection for personnel.',
  },
  {
    title: 'Sinks GFCI',
    code: '210.8(A)(8)',
    body: '125-volt through 250-volt receptacles that are located within 6 feet of the top inside edge of the bowl of the sink and supplied by single-phase branch circuits rated 150 volts or less to ground shall have ground-fault circuit-interrupter protection for personnel.',
  },
  {
    title: 'Bathtub GFCI',
    code: '210.8(A)(10)',
    body: '125-volt through 250-volt receptacles that are located within 6 feet (1829 mm) of the outside edge of a bathtub or shower stall and supplied by single-phase branch circuits rated 150 volts or less to ground shall have ground-fault circuit-interrupter protection for personnel.',
  },
  {
    title: 'GFCI required appliances',
    code: '210.8(D)',
    body: 'Ground-fault circuit-interrupter protection shall be provided for the branch circuit or outlets supplying the following appliances rated 150 volts or less to ground and 60 amperes or less, single- or three-phase: (1.) Drinking water coolers and bottle fill stations. (2.) High-pressure spray washing machines. (3.) Sump pumps. (4.) Dishwashers. (5.) Electric ranges. (6.) Wall-mounted ovens. (7.) Counter-mounted cooking units. (8.) Clothes dryers. (9.) Microwave ovens.',
  },
  {
    title: 'Heated floors GFCI',
    code: '424.44(E) and 424.45(E)',
    body: 'Ground-fault circuit-interrupter protection for personnel shall be provided for electric heating cables embedded in concrete or poured masonry floors in bathrooms, kitchens and in hydromassage bathtub, spa and hot tub locations. Heating cables installed under floor coverings shall be provided with ground-fault circuit-interrupter protection for personnel.',
  },
  {
    title: 'Required lighting locations',
    code: '210.70 and 210.70(A)(1)',
    body: 'At least one lighting outlet controlled by a listed wall-mounted control device shall be installed in every habitable room, kitchen and bathroom. The wall-mounted control device shall be located near an entrance to the room on a wall. The switch or wall-mounted control device shall not rely exclusively on a battery unless a means is provided for automatically energizing the lighting outlets upon battery failure.',
  },
  {
    title: 'Required lighting locations',
    code: '210.70(A)(2)(1) and (2)',
    body: 'At least one lighting outlet controlled by a listed wall-mounted control device shall be installed in hallways, stairways, attached garages, and detached garages with electric power. At least one lighting outlet controlled by a listed wall-mounted control device shall be installed to provide illumination on the exterior side of each outdoor egress door having grade level access, including outdoor egress doors for attached garages and detached garages with electric power. A vehicle door in a garage shall not be considered as an outdoor egress door.',
  },
  {
    title: 'Stairway lighting',
    code: '210.70(A)(2)(3) and (4)',
    body: 'Where one or more lighting outlets are installed for interior stairways, there shall be a listed wall-mounted control device at each floor level and at each landing level that includes a stairway entry to control the lighting outlets where the stairway between floor levels has six or more risers. Dimmer control of lighting outlets installed in accordance with this section shall not be permitted unless the listed control devices can provide dimming control to maximum brightness at each control location for the interior stairway illumination.',
  },
  {
    title: 'Storage lighting',
    code: '210.70(C)',
    body: 'In attics, under-floor spaces, utility rooms and basements, at least one lighting outlet shall be installed where these spaces are used for storage or contain equipment requiring servicing. Such lighting outlet shall be controlled by a wall switch or listed wall-mounted control device. A point of control shall be provided at each entry that permits access to the attic or underfloor space, utility room, or basement. Where a lighting outlet is installed for equipment requiring service, the lighting outlet shall be installed at or near the equipment requiring servicing.',
  },
  {
    title: 'Metal raceways',
    code: '300.10',
    body: 'Metal raceways, cable armor and other metal enclosures for conductors shall be mechanically joined together into a continuous electric conductor and shall be connected to all boxes, fittings and cabinets so as to provide effective electrical continuity. Raceways and cable assemblies shall be mechanically secured to boxes, fittings cabinets and other enclosures.',
  },
  {
    title: 'Metal raceways',
    code: '250.86',
    body: 'Metal enclosures of conductors, devices and equipment shall be connected to the equipment grounding conductor.',
  },
  {
    title: 'Non-metal raceways',
    code: '314.3',
    body: 'Nonmetallic boxes shall be used only with nonmetallic raceways, cabled wiring methods with entirely nonmetallic sheaths, flexible cords and nonmetallic raceways. (314.3) Exceptions: (1.) Where internal bonding means are provided between all entries, nonmetallic boxes shall be permitted to be used with metal raceways and metal-armored cables. (2.) Where integral bonding means with a provision for attaching an equipment grounding jumper inside the box are provided between all threaded entries in nonmetallic boxes listed for the purpose, nonmetallic boxes shall be permitted to be used with metal raceways and metal-armored cables.',
  },
  {
    title: 'Non-metal raceways',
    code: '250.148(D)',
    body: 'One or more equipment grounding conductors brought into a nonmetallic outlet box shall be arranged to provide a connection to any fitting or device installed in that box to an equipment grounding conductor.',
  },
  {
    title: 'Wet locations',
    code: '314.15',
    body: 'In damp or wet locations, boxes, conduit bodies and fittings shall be placed or equipped so as to prevent moisture from entering or accumulating within the box, conduit body or fitting. Boxes, conduit bodies and fittings installed in wet locations shall be listed for use in wet locations.',
  },
];

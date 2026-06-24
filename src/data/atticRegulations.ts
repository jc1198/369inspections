/**
 * Attic building-code requirements.
 * Source: 2024 International Residential Code (IRC).
 *
 * Full text transcribed from the existing 369 Home Inspections site:
 * https://molina1998329.wixsite.com/369homeinspectionsll/369
 * Reference links point to the official IRC on codes.iccsafe.org.
 */
import type { Regulation } from './regulationTypes';

export const atticCodeSource =
  'All information is from the 2024 International Residential Code.';

const ICC = 'https://codes.iccsafe.org/lookup';

export const atticRegulations: Regulation[] = [
  {
    title: 'Attic access',
    code: 'R807.1',
    body: 'Buildings with attics shall have an access opening to attic areas that have a vertical height of 30 inches or greater over an area of not less than 30 square feet. The vertical height shall be measured from the top of the ceiling framing members to the underside of the roof framing members.',
  },
  {
    title: 'Attic opening',
    code: 'R807.1',
    body: 'The rough framed opening shall be not less than 22 inches by 30 inches wide and shall be located in a hallway or other location with ready access. Where located in a wall the opening shall be not less than 22 inches wide by 30 inches high. Where the access is located in a ceiling, unobstructed headroom in the attic space shall be not less than 30 inches high.',
  },
  {
    title: 'Rafters',
    code: 'R802.4.2',
    body: 'Rafters shall be framed opposite from each other to a ridge board, shall not be offset more than 1 1/2 inches from each other and shall be connected with a collar tie or ridge strap.',
  },
  {
    title: 'Purlins',
    code: 'R802.4.5',
    body: 'Purlins shall be sized not less than the required size of the rafters that they support. Purlins shall be continuous and shall be supported by 2-inch by 4-inch braces installed to bearing walls at a slope not less than 45 degrees from the horizontal. The braces shall be placed not more than 4 feet on center and the unbraced length of braces shall not exceed 8 feet.',
  },
  {
    title: 'Collar ties',
    code: 'R802.4.6',
    body: 'Where collar ties are used to connect opposing rafters, they shall be located in the upper third of the attic space and fastened in accordance with Table R602.3(1). Collar ties shall not be less than 1 inch by 4 inches nominal, spaced not more than 4 feet on center.',
    links: [
      {
        text: 'Table R602.3(1)',
        href: `${ICC}/IRC2024V2.0_Pt03_Ch06_SecR602.3_TblR602.3_1/4479`,
      },
    ],
  },
  {
    title: 'Ridge straps',
    code: 'R802.4.6',
    body: 'Ridge straps shall be permitted to replace collar ties. Ridge straps shall be not less than 1 1/4 inch X 20 gage and shall be nailed to the top edge of each rafter with not fewer than three 10d common nails with the closest not closer than 2 3/8 inches from the end of the rafter.',
  },
  {
    title: 'Ceiling joist',
    code: 'R802.5.2.1',
    body: 'Ends of ceiling joist shall be lapped and not less than 3 inches or butted over partitions or beams and toenailed to the bearing member.',
  },
  {
    title: 'Rafter ties',
    code: 'R802.5.2.2',
    body: 'Wood rafter ties shall be not less than 2 inches by 4 inches installed in accordance with Table R802.5.2(1) at a maximum of 24 inches on center. Other approved rafter tie methods shall be permitted.',
  },
  {
    title: 'Bearing ends',
    code: 'R802.6',
    body: 'The ends of each rafter or ceiling joist shall have not less than 1 1/2 inches of bearing on wood or metal and not less than 3 inches on masonry or concrete. The bearing on masonry or concrete shall be direct, or a sill plate of 2-inch minimum nominal thickness shall be provided under the rafter or ceiling joist. The sill plate shall provide a minimum nominal bearing area of 48 square inches. Where the roof pitch is greater than or equal to 3 units vertical in 12 units horizontal, and ceiling joists or rafter ties are connected to rafters to provide a continuous tension tie in accordance with Section R802.5.2, vertical bearing of the top of the rafter against the ridge board shall satisfy this bearing requirement.',
    links: [
      {
        text: 'Section R802.5.2',
        href: `${ICC}/IRC2024V2.0_Pt03_Ch08_SecR802.5.2/4479`,
      },
    ],
  },
  {
    title: 'Cantilevered rafter',
    code: 'R802.7.1.1',
    body: 'Notches on cantilevered portions of the rafters are permitted provided the dimension of the remaining portion of the rafter is not less than 3 1/2 inches and the length of the cantilever does not exceed 24 inches.',
  },
  {
    title: 'Lateral support',
    code: 'R802.8',
    body: 'Roof framing members and ceiling joists having a depth-to-thickness ratio exceeding 5 to 1 based on nominal dimensions shall be provided with lateral support at points of bearing to prevent rotation. For roof rafters with ceiling joists attached in accordance with Table R602.3(1), the depth-to-thickness ratio for the total assembly shall be determined using the combined thickness of the rafter plus the attached ceiling joist. Exception: Roof trusses shall be braced in accordance with Section R802.10.3.',
    links: [
      {
        text: 'Table R602.3(1)',
        href: `${ICC}/IRC2024V2.0_Pt03_Ch06_SecR602.3_TblR602.3_1/4479`,
      },
      {
        text: 'Section R802.10.3',
        href: `${ICC}/IRC2024V2.0_Pt03_Ch08_SecR802.10.3/4479`,
      },
    ],
  },
  {
    title: 'Bridging',
    code: 'R802.8.1',
    body: 'Rafters and ceiling joists having a depth-to-thickness ratio exceeding 6 to 1 based on nominal dimensions shall be supported laterally by solid blocking, diagonal bridging (wood or metal) or a continuous 1-inch by 3-inch wood strip nailed across the rafters or ceiling joists at intervals not exceeding 8 feet.',
  },
  {
    title: 'Openings',
    code: 'R802.9',
    body: 'Openings in roof and ceiling framing shall be framed with header and trimmer joists. Where the header joist span does not exceed 4 feet, the header joist shall be permitted to be a single member the same size as the ceiling joist or rafter. Single trimmer joists shall be permitted to be used to carry a single header joist that is located within 3 feet of the trimmer joist bearing. Where the header joist span exceeds 4 feet, the trimmer joists and the header joist shall be doubled and of sufficient cross section to support the ceiling joists or rafter framing into the header. Approved hangers shall be used for the header joist to trimmer joist connections where the header joist span exceeds 6 feet. Tail joists over 12 feet long shall be supported at the header by framing anchors or on ledger strips not less than 2 inches by 2 inches.',
  },
  {
    title: 'Attic insulation (baffles)',
    code: 'N1102.2.4',
    body: 'For air-permeable insulation in vented attics, a baffle shall be installed adjacent to soffit and eave vents. Baffles shall maintain a net free area opening equal to or greater than the size of the vent. The baffle shall extend over the top of the attic insulation. The baffle shall be permitted to be any solid material. The baffle shall be installed to the outer edge of the exterior wall top plate so as to provide maximum space for attic insulation coverage over the top plate. Where soffit venting is not continuous, baffles shall be installed continuously to prevent ventilation air in the eave soffit from bypassing the baffle.',
  },
  {
    title: 'Attic insulation (ductwork)',
    code: 'N1103.3.5.1',
    body: 'Where complying using Section N1105, sections of ductwork that are installed in accordance with Section N1103.3.5, surrounded with blown-in attic insulation having an R-value of R-30 or greater and located such that the top of the ductwork is not less than 3.5 inches below the top of the insulation shall be considered as having an effective duct insulation R-value of R-25.',
  },
  {
    title: 'Attic insulation (R-value requirements)',
    code: 'N1102.2.1',
    body: 'Where Section N1102.1.3 requires R-38 insulation in the ceiling or attic, installing R-30 over 100 percent of the ceiling or attic area requiring insulation shall satisfy the requirement for R-38 insulation wherever the full height of uncompressed R-30 insulation extends over the wall top plate at the eaves. Where Section N1102.1.3 requires R-49 insulation in the ceiling or attic, installing R-38 insulation over 100 percent of the ceiling or attic area requiring insulation shall satisfy the requirement for R-49 insulation wherever the full height of uncompressed R-38 insulation extends over the wall top plate at the eaves. This reduction shall not apply to the insulation and fenestration criteria in Section N1102.1.2 and the component performance alternative in Section N1102.1.5.',
    links: [
      {
        text: 'Section N1102.1.3',
        href: `${ICC}/IRC2024V2.0_Pt04_Ch11_SecN1102.1.3/4479`,
      },
    ],
  },
  {
    title: 'Attic hatch access',
    code: 'N1102.2.5.1',
    body: 'Vertical or horizontal access hatches and doors from conditioned spaces to unconditioned spaces such as attics and crawl spaces shall be weather-stripped. Access that prevents damaging or compressing the insulation shall be provided to all equipment. Where loose-fill insulation is installed, a wood-framed or equivalent baffle, retainer or dam shall be installed to prevent loose-fill insulation from spilling into living space from higher to lower sections of the attic, and from attics covering conditioned spaces to unconditioned spaces. The baffle or retainer shall provide a permanent means of maintaining the installed R-value of the loose-fill insulation.',
  },
  {
    title: 'Appliance access',
    code: 'M1305.1.2',
    body: 'Attics containing appliance shall be provided with an opening and a clear and unobstructed passageway large enough to allow removal of largest appliances, but not less than 30 inches high and 22 inches wide and not more than 20 feet long measured along the centerline of the passageway from the opening to the appliance. The passageway shall have continuous solid flooring in accordance with chapter 5 not less than 24 inches wide. A level service space not less than 30 inches deep and 30 inches wide shall be present along all sides of the appliance where access is required. The clear access opening dimensions shall be not less than 20 inches by 30 inches, and large enough to allow removal of the largest appliance.',
  },
  {
    title: 'Attic ceiling height',
    code: 'R313.1.2',
    body: 'Where a habitable attic or habitable space in the basement is created in an existing building, ceiling height shall not be less than 6 feet 8 inches. Bathrooms, toilet rooms and laundry rooms shall have a ceiling height of not less than 6 feet 4 inches. Exceptions: 1. For rooms with sloped ceilings, the required floor area of the room shall have a ceiling height of not less than 5 feet and not less than 50 percent of the required floor area shall have a ceiling height of not less than 6 feet 8 inches. 2. At beams, girders or other obstructions, the ceiling height shall not be less than 6 feet 4 inches from the finished floor.',
  },
  {
    title: 'Habitable attics',
    code: 'R316.3',
    body: 'Habitable attic shall be considered a story above grade plane. Exceptions: A habitable attic shall not be considered to be a story above grade plane provided that the habitable attic meets all the following: 1. The aggregate area of the habitable attic is either of the following: 1A. Not greater than one-third of the floor area of the story below. 1B. Not greater than one-half of the floor area of the story below where the habitable attic is located within a dwelling unit equipped with an automatic sprinkler system in accordance with Section P2904. 2. The occupiable space is enclosed by the roof assembly above, knee walls, if applicable, on the sides and the floor-ceiling assembly below. 3. The floor of the habitable attic does not extend beyond the exterior walls of the story below. 4. Where a habitable attic is located above a third story, an automatic sprinkler system in accordance with Section P2904 shall be installed in the habitable attic and remaining portion of the townhouse unit or dwelling unit or units located beneath the habitable attic.',
    links: [
      {
        text: 'Section P2904',
        href: `${ICC}/IRC2024V1.0_Pt07_Ch29_SecP2904/4348`,
      },
    ],
  },
];

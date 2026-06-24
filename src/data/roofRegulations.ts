/**
 * Roof building-code requirements.
 * Source: 2024 International Residential Code (IRC).
 *
 * Transcribed from https://molina1998329.wixsite.com/369homeinspectionsll/new-roof
 * Titles normalized; quote text verbatim. The source carries no links.
 */
import type { Regulation } from './regulationTypes';

export const roofCodeSource =
  'All information is from the 2024 International Residential Code.';

export const roofRegulations: Regulation[] = [
  {
    title: 'Crickets',
    code: 'R903.2.2',
    body: `A cricket or saddle shall be installed on the ridge side of any chimney or penetration more than 30 inches wide as measured perpendicular to the slope. Cricket or saddle coverings shall be sheet metal or of the same material as the roof coverings.`,
  },
  {
    title: 'Ice barriers',
    code: 'R905.1.2',
    body: `The ice barrier shall consist of not fewer than two layers of underlayment cemented together, or a self adhering polymer-modified bitumen sheet shall be used in place of normal underlayment and extend from the lowest edges of all roof surfaces to a point not less than 24 inches inside the exterior wall line of the building.`,
  },
  {
    title: 'Ice barriers',
    code: 'R905.1.2',
    body: `On roofs with slope equal to or greater than 8 units vertical in 12 units horizontal, the ice barrier shall be applied not less than 36 inches measured along the roof slope from the eave edge of the building.`,
  },
  {
    title: 'Slope',
    code: 'R905.2.2',
    body: `Asphalt shingles shall be used only on roof slopes of 2 units vertical in 12 units horizontal or greater. For roof slopes from 2 units vertical in 12 horizontal up to 4 units vertical in 12 units horizontal, double underlayment application is required.`,
  },
  {
    title: 'Fasteners',
    code: 'R905.2.5',
    body: `Fasteners for asphalt shingles shall be galvanized steel, stainless steel, aluminum or copper roofing nails, minimum 12-gage shank with a minimum 3/8-inch-diameter head, complying with ASTM F1667, of a length to penetrate through the roofing materials and not less than 3/4 inch into the roof sheathing. Where the roof sheathing is less than 3/4 inch thick, the fasteners shall penetrate through the sheathing.`,
  },
  {
    title: 'Attachment',
    code: 'R905.2.6',
    body: `Asphalt shingles shall have the number of fasteners required by the manufacturers approved installation instructions, but not less than four fasteners per strip shingle or two fasteners per individual shingle.`,
  },
  {
    title: 'Valleys',
    code: 'R905.2.8.2',
    body: `For open valleys (valley lining exposed) lined with metal, the valley lining shall be not less than 24 inches wide and of any of the corrosion resistant metals in Table R905.2.8.2.`,
  },
  {
    title: 'Valleys',
    code: 'R905.2.8.2',
    body: `For open valleys, valley lining of two piles of mineral-surfaced roll roofing, complying with ASTM D3909 or ASTM D6380 Class M, shall be permitted. The bottom layer shall be 18 inches and the top layer not less than 36 inches wide.`,
  },
  {
    title: 'Valleys',
    code: 'R905.2.8.2',
    body: `For closed valleys (valley covered with shingles), valley lining of one ply of smooth roll roofing complying with ASTM D6380 and not less than 36 inches wide or valley lining as described in item 1 or 2 shall be permitted. Self adhering polymer-modified bitumen underlayment complying with ASTM D1970 and not less than 36 inches wide shall be permitted in lieu of the lining material.`,
  },
  {
    title: 'Valley flashing',
    code: 'R905.4.6',
    body: `The valley flashing shall extend not less than 8 inches from the centerline each way and shall have a splash diverter rib not less than 3/4 inch in height at the flow line formed as part of the flashing. Sections of flashing shall have an end lap of not less than 4 inches. The metal valley flashing shall have a 36 inch wide underlayment directly under it consisting of one layer of underlayment running the full length of the valley.`,
  },
  {
    title: 'Side wall flashing',
    code: 'R905.2.8.3',
    body: `Base flashing against a vertical sidewall shall be continuous or step flashing and shall be not less than 4 inches in height and 4 inches in width and shall direct water away from the vertical sidewall onto the roof or into the gutter.`,
  },
  {
    title: 'Drip edge',
    code: 'R905.2.8.5',
    body: `A drip edge shall be provided at eaves and rake edges of shingle roofs. Adjacent segments of drip edges shall be overlapped not less than 2 inches. Drip edges shall extend not less than 1/4 inch below the roof sheathing and extend up back onto the roof deck not less than 2 inches. Drip edges shall be mechanically fastened to the roof deck at not more than 12 inches o.c with fasteners as specified in section R905.2.5. Underlayment shall be installed over the drip edge along eaves and under the drip edge along rake edges.`,
  },
  {
    title: 'Slope',
    code: 'R905.3.2',
    body: `Clay and concrete roof tile shall be installed on roof slopes of 2 1/2 units vertical in 12 units horizontal or greater. For roof slopes from 2 1/2 units vertical in 12 units horizontal to 4 units vertical in 12 units horizontal, double underlayment application is required.`,
  },
  {
    title: 'Slope',
    code: 'R905.6.2',
    body: `Slate shingles shall be used only on slopes of 4 units vertical in 12 units horizontal or greater.`,
  },
  {
    title: 'Wood shingles',
    code: 'R905.7.6',
    body: `Wood shingles shall be laid with a side lap not less than 1 1/2 inches between joints in courses, and two joints shall not be in direct alignment in any three adjacent courses. Spacing between shingles shall be not less than 1/4 inch to 3/8 inch.`,
  },
  {
    title: 'Slope',
    code: 'R905.9.1',
    body: `Built up roofs shall have a design slope of not less than 1/4 unit vertical in 12 units horizontal for drainage, except for coal tar built up roofs, which shall have a design slope of a minimum 1/8 unit vertical in 12 units horizontal.`,
  },
  {
    title: 'Roof pipe penetrations',
    code: 'P2607.1',
    body: `Where a pipe penetrates a roof, a flashing of lead, copper, galvanized steel or an approved elastomeric material shall be installed in a manner that prevents water entry into the building. Counterflashing into the opening of pipe serving as a vent terminal shall not reduce the required internal cross-sectional area of the vent pipe to less than the internal cross sectional area of one pipe size smaller.`,
  },
];

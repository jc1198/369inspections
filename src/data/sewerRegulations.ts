/**
 * Sewer building-code requirements.
 * Source: 2024 International Residential Code (IRC).
 *
 * Transcribed from https://molina1998329.wixsite.com/369homeinspectionsll/new-sewers
 * Titles normalized; quote text verbatim. The source carries no links.
 */
import type { Regulation } from './regulationTypes';

export const sewerCodeSource =
  'All information is from the 2024 International Residential Code.';

export const sewerRegulations: Regulation[] = [
  {
    title: 'Freezing protection',
    code: 'P3001.1',
    body: `Portions of the above-grade DWV system, other than vent terminals, shall not be located outside of a building, in attics or crawl spaces, concealed in outside walls, or in any other place subjected to freezing temperatures unless adequate provision is made to protect them from freezing by insulation or heat or both, except in localities having a winter design temperature greater than 32°F (0°C).`,
  },
  {
    title: 'Piping',
    code: 'P3002.1',
    body: `Drain, waste and vent (DWV) piping in buildings shall be as indicated in Tables P3002.1(1) and P3002.1(2) except that galvanized wrought-iron or galvanized steel pipe shall not be used underground and shall be maintained not less than 6 inches above ground. Allowance shall be made for the thermal expansion and contraction of plastic piping.`,
  },
  {
    title: 'Piping',
    code: 'P3002.3',
    body: `Drainage fittings shall have a smooth interior waterway of the same diameter as the piping served. Fittings shall conform to the type of pipe used. Drainage fittings shall not have ledges, shoulders or reductions that can retard or obstruct drainage flow in the piping. Threaded drainage pipe fittings shall be of the recessed drainage type, black or galvanized. Drainage fittings shall be designed to maintain 1/4 unit vertical in 12 units horizontal (2-percent slope) grade. This section shall not be applicable to tubular waste fittings used to convey vertical flow upstream of the trap seal liquid level of a fixture trap.`,
  },
  {
    title: 'Pipe joints',
    code: 'P3003.1',
    body: `Joints and connections in the DWV system shall be gastight and watertight for the intended use or pressure required by test.`,
  },
  {
    title: 'Pipe joints',
    code: 'P3003.2',
    body: `Running threads and bands shall not be used in the drainage system. Drainage and vent piping shall not be drilled, tapped, burned or welded. The following types of joints and connections shall be prohibited: (1.) Cement or concrete. (2.) Mastic or hot-pour bituminous joints. (3.) Joints made with fittings not approved for the specific installation. (4.) Joints between different diameter pipes made with elastomeric rolling O-rings. (5.) Solvent-cement joints between different types of plastic pipe except where provided for in Section P3003.13.4.6. Saddle-type fittings.`,
  },
  {
    title: 'Fixture joint',
    code: 'P3003.14',
    body: `Joints between drainage piping and water closets or similar fixtures shall be made by means of a closet flange or a waste connector and sealing gasket compatible with the drainage system material, securely fastened to a structurally firm base. The joint shall be bolted, with an approved gasket flange to fixture connection complying with ASME A112.4.3 or setting compound between the fixture and the closet flange or waste connector and sealing gasket.`,
  },
  {
    title: 'Fittings',
    code: 'P3001',
    body: `Double fittings such as double sanitary tees and tee-wyes or approved multiple connection fittings and back-to-back fixture arrangements that connect two or more branches at the same level shall be permitted as long as directly opposing connections are the same size and the discharge into directly opposing connections is from similar fixture types or fixture groups. Double sanitary tee patterns shall not receive the discharge of back-to-back water closets and fixtures or appliances with pumping action discharge. Exception: Back-to-back water closet connections to double sanitary tee patterns shall be permitted where the horizontal developed length between the outlet of the water closet and the connection to the double sanitary tee is 18 inches or greater.`,
  },
  {
    title: 'Cleanouts',
    code: 'P3005.2.1',
    body: `Horizontal drainage pipes in buildings shall have cleanouts located at intervals of not more than 100 feet. Building drains shall have cleanouts located at intervals of not more than 100 feet except where manholes are used instead of cleanouts, the manholes shall be located at intervals of not more than 400 feet. The interval length shall be measured from the cleanout or manhole opening, along the developed length of the piping to the next drainage fitting providing access for cleaning, the end of the horizontal drain or the end of the building drain.`,
  },
  {
    title: 'Cleanouts',
    code: 'P3005.2.3',
    body: `The junction of the building drain and the building sewer shall be served by a cleanout that is located at the junction or within 10 feet developed length of piping upstream of the junction. For the requirements of this section, removal of a water closet shall not be required to provide cleanout access.`,
  },
  {
    title: 'Cleanouts',
    code: 'P3005.2.4',
    body: `Where a horizontal drainage pipe, a building drain or a building sewer has a change of horizontal direction greater than 45 degrees, a cleanout shall be installed at the change of direction. Where more than one change of horizontal direction greater than 45 degrees occurs within 40 feet of developed length of piping, the cleanout installed for the first change of direction shall serve as the cleanout for all changes in direction within that 40 feet of developed length of piping.`,
  },
];

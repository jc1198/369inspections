/**
 * Foundation building-code requirements.
 * Source: 2024 International Residential Code (IRC).
 *
 * Transcribed from the existing 369 Home Inspections site:
 * https://molina1998329.wixsite.com/369homeinspectionsll/new-foundation
 * Titles normalized; quote text verbatim. The source carries no links.
 */
import type { Regulation } from './regulationTypes';

export const foundationCodeSource =
  'All information is from the 2024 International Residential Code.';

export const foundationRegulations: Regulation[] = [
  {
    title: 'Drainage',
    code: 'R401.3',
    body: `Surface drainage shall be diverted to a storm sewer conveyance or other approved point of collection that does not create a hazard. Lots shall be graded to drain surface water away from foundation walls. The grade shall fall not fewer than 6 inches (152 mm) within the first 10 feet (3048 mm). Exception: Where lot lines, walls, slopes or other physical barriers prohibit 6 inches (152 mm) of fall within 10 feet (3048 mm), drains or swales shall be constructed to ensure drainage away from the structure. Impervious surfaces within 10 feet (3048 mm) of the building foundation shall be sloped not less than 2 percent away from the building.`,
  },
  {
    title: 'Fasteners',
    code: '402.1.1',
    body: `Fasteners used below grade to attach plywood to the exterior side of exterior basement or crawl-space wall studs, or fasteners used in knee wall construction, shall be of Type 304 or 316 stainless steel. Fasteners used above grade to attach plywood and all lumber-to-lumber fasteners except those used in knee wall construction shall be of Type 304 or 316 stainless steel, silicon bronze, copper, hot-dipped galvanized (zinc coated) steel nails, or hot-tumbled galvanized (zinc coated) steel nails. Electro-galvanized steel nails and galvanized (zinc coated) steel staples shall not be permitted.`,
  },
  {
    title: 'Pre-cast concrete',
    code: 'R402.3.1',
    body: `Materials used to produce precast concrete foundations shall meet the following requirements: (1.) All concrete used in the manufacture of precast concrete foundations shall have a minimum compressive strength of 5,000 psi (34 470 kPa) at 28 days. Concrete exposed to a freezing and thawing environment shall be air entrained with a minimum total air content of 5 percent. (2.) Structural reinforcing steel shall meet the requirements of ASTM A615, A706M or A996M. The minimum yield strength of reinforcing steel shall be 40,000 psi (Grade 40) (276 MPa). Steel reinforcement for precast concrete foundation walls shall have a minimum concrete cover of 3/4 inch (19.1 mm). (3.) Panel-to-panel connections shall be made with Grade II steel fasteners. (4.) The use of nonstructural fibers shall conform to ASTM C1116. (5.) Grout used for bedding precast foundations placed on concrete footings shall meet ASTM C1107.`,
  },
  {
    title: 'Foundation cripple walls',
    code: 'R602.9',
    body: `Foundation cripple walls shall be framed of studs not smaller than the studding above. Where exceeding 4 feet in height, such walls shall be framed of studs having the size required for an additional story. Exterior cripple walls with a stud height less than 14 inches shall be continuously sheathed on one side with wood structural panels fastened to both the top and bottom plates in accordance with Table R602.3(1), or the cripple walls shall be constructed of solid blocking. Cripple walls shall be supported on continuous foundations.`,
  },
  {
    title: 'Footings',
    code: 'R403.1',
    body: `All exterior walls shall be supported on continuous solid or fully grouted masonry or concrete footings, crushed stone footings, wood foundations, or other approved structural systems that shall be of sufficient design to accommodate all loads according to Section R301 and to transmit the resulting loads to the soil within the limitations as determined from the character of the soil. Footings shall be supported on undisturbed natural soils or engineered fill. Concrete footing shall be designed and constructed in accordance with the provisions of Section R403 or in accordance with ACI 332.`,
  },
  {
    title: 'Footing size',
    code: 'R403.1.1',
    body: `The minimum width, W, and thickness, T, for concrete footings shall be in accordance with Tables R403.1(1) through R403.1(3) and Figure R403.1(1) or R403.1.3, as applicable, but not less than 12 inches (305 mm) in width and 6 inches (152 mm) in depth. The footing width shall be based on the load-bearing value of the soil in accordance with Table R401.4.1(1). Footing projections, P, shall be not less than 2 inches (51 mm) and shall not exceed the thickness of the footing. Footing thickness and projection for fireplaces shall be in accordance with Section R1001.2. The size of footings supporting piers and columns shall be based on the tributary load and allowable soil pressure in accordance with Table R401.4.1(1). Footings for wood foundations shall be in accordance with the details set forth in Section R403.2, and Figures R403.1(2) and R403.1(3). Footings for precast foundations shall be in accordance with the details set forth in Section R403.4, Table R403.4, and Figures R403.4(1) and R403.4(2). Crushed stone footings for cast-in-place concrete foundations shall be in accordance with Section R403.5.`,
  },
  {
    title: 'Footings in seismic design',
    code: 'R403.1.2',
    body: `Exterior walls and required interior braced wall panels of buildings located in Seismic Design Categories D0, D1 and D2 shall be supported by continuous solid or fully grouted masonry or concrete footings in accordance with Table R403.1.2. Other footing materials or systems shall be designed in accordance with accepted engineering practice.`,
  },
  {
    title: 'Concrete stem walls with concrete footings',
    code: 'R403.1.3.1',
    body: `In Seismic Design Categories D0, D1 and D2 where a construction joint is created between a concrete footing and a concrete stem wall, not fewer than one No. 4 vertical bar shall be installed at not more than 4 feet on center. The vertical bar shall have a standard hook and extend to the bottom of the footing and shall have support and cover as specified in Section R403.1.3.5.3 and extend not less than 14 inches into the stem wall. Standard hooks shall comply with Section R608.5.4.5. Not fewer than one No. 4 horizontal bar shall be installed within 12 inches of the top of the stem wall and one No. 4 horizontal bar shall be located 3 to 4 inches from the bottom of the footing.`,
  },
  {
    title: 'Masonry stem walls with concrete footings',
    code: 'R403.1.3.2',
    body: `In Seismic Design Categories D0, D1 and D2 where a masonry stem wall is supported on a concrete footing, not fewer than one No. 4 vertical bar shall be installed at not more than 4 feet on center. The vertical bar shall have a standard hook and extend to the bottom of the footing and shall have support and cover as specified in Section R403.1.3.5.3 and extend not less than 14 inches into the stem wall. Standard hooks shall comply with Section R608.5.4.5. Not fewer than one No. 4 horizontal bar shall be installed within 12 inches of the top of the wall and one No. 4 horizontal bar shall be located 3 to 4 inches from the bottom of the footing. Masonry stem walls shall be solid grouted.`,
  },
  {
    title: 'Slab on ground with turned-down footing',
    code: 'R403.1.3.3',
    body: `In Seismic Design Categories D0, D1 and D2, slabs-on-ground cast monolithically with turned-down footings shall have not fewer than one No. 4 bar at the top and the bottom of the footing or one No. 5 bar or two No. 4 bars in the middle third of the footing depth. Where the slab is not cast monolithically with the footing, No. 3 or larger vertical dowels with standard hooks on each end shall be installed at not more than 4 feet on center in accordance with Figure R403.1.3, Detail 2. Standard hooks shall comply with Section R608.5.4.5.`,
  },
  {
    title: 'Wall reinforcement',
    code: 'R403.1.3.5.2',
    body: `The center of vertical reinforcement in stem walls shall be located at the centerline of the wall. Horizontal and vertical reinforcement shall be located in footings and stem walls to provide the minimum cover required by Section R403.1.3.5.3.`,
  },
  {
    title: 'Wall reinforcement',
    code: 'R403.1.3.5.1',
    body: `Reinforcement shall be secured in the proper location in the forms with tie wire or other bar support system to prevent displacement during the concrete placement operation. Steel reinforcement in concrete cast against the earth shall have a minimum cover of 3 inches. Minimum cover for reinforcement in concrete cast in removable forms that will be exposed to the earth or weather shall be 1 1/2 inches for No. 5 bars and smaller, and 2 inches for No. 6 bars and larger. For concrete cast in removable forms that will not be exposed to the earth or weather, and for concrete cast in stay-in-place forms, minimum cover shall be 3/4 inch.`,
  },
  {
    title: 'Isolated concrete footings',
    code: 'R403.1.3.6',
    body: `In detached one- and two-family dwellings that are three stories or less in height and constructed with stud bearing walls, isolated plain concrete footings supporting columns or pedestals are permitted.`,
  },
  {
    title: 'Exterior footing depth',
    code: 'R403.1.4',
    body: `Exterior footings shall be placed not less than 12 inches below the undisturbed ground surface. Where applicable, the depth of footings shall also conform to Section R403.1.4.1. Deck footings shall be in accordance with Section R507.3.`,
  },
  {
    title: 'Frost protection',
    code: 'R403.1.4.1',
    body: `Except where otherwise protected from frost, foundation walls, piers and other permanent supports of buildings and structures shall be protected from frost by one or more of the following methods: 1. Extended below the frost line specified in Table R301.2. 2. Constructed in accordance with Section R403.3. 3. Constructed in accordance with ASCE 32. 4. Erected on solid rock. Footings shall not bear on frozen soil unless the frozen condition is permanent. Exceptions: 1. Protection of free-standing accessory structures with an area of 600 square feet or less, of light-frame construction, with an eave height of 10 feet or less shall not be required. 2. Protection of free-standing accessory structures with an area of 400 square feet or less, of other than light-frame construction, with an eave height of 10 feet or less shall not be required.`,
  },
  {
    title: 'Footings slope',
    code: 'R403.1.5',
    body: `The top surface of footings shall be level. The bottom surface of footings shall not have a slope exceeding 1 unit vertical in 10 units horizontal (10-percent slope). Footings shall be stepped where it is necessary to change the elevation of the top surface of the footings or where the slope of the bottom surface of the footings will exceed 1 unit vertical in 10 units horizontal (10-percent slope).`,
  },
  {
    title: 'Foundation anchorage',
    code: 'R403.1.6',
    body: `Wood sill plates and wood walls supported directly on continuous foundations shall be anchored to the foundation in accordance with this section. Cold-formed steel framing shall be anchored directly to the foundation or fastened to wood sill plates in accordance with Section R505.3.1 or R603.3.1, as applicable. Wood sill plates supporting cold-formed steel framing shall be anchored to the foundation in accordance with this section. Wood sole plates at all exterior walls on monolithic slabs, wood sole plates of braced wall panels at building interiors on monolithic slabs and all wood sill plates shall be anchored to the foundation with minimum 1/2-inch-diameter (12.7 mm) anchor bolts spaced not greater than 6 feet on center or approved anchors or anchor straps spaced as required to provide equivalent anchorage to 1/2-inch-diameter anchor bolts. Bolts shall extend not less than 7 inches into concrete or grouted cells of concrete masonry units. The bolts shall be located in the middle third of the width of the plate. A nut and washer shall be tightened on each anchor bolt. There shall be not fewer than two bolts per plate section with one bolt located not more than 12 inches or less than seven bolt diameters from each end of the plate section. Interior bearing wall sole plates on monolithic slab foundation that are not part of a braced wall panel shall be positively anchored with approved fasteners. Sill plates and sole plates shall be protected against decay and termites where required by Sections R304 and R305. Anchor bolts shall be permitted to be located while concrete is still plastic and before it has set. Where anchor bolts resist placement or the consolidation of concrete around anchor bolts is impeded, the concrete shall be vibrated to ensure full contact between the anchor bolts and concrete. Exceptions: 1. Walls 24 inches total length or shorter connecting offset braced wall panels shall be anchored to the foundation with not fewer than one anchor bolt located in the center third of the plate section and shall be attached to adjacent braced wall panels at corners as shown in Item 9 of Table R602.3(1). 2. Connection of walls 12 inches total length or shorter connecting offset braced wall panels to the foundation without anchor bolts shall be permitted. The wall shall be attached to adjacent braced wall panels at corners as shown in Item 9 of Table R602.3(1).`,
  },
  {
    title: 'Foundation anchorage',
    code: 'R403.1.6.1',
    body: `In addition to the requirements of Section R403.1.6, the following requirements shall apply to wood light-frame structures in Seismic Design Categories D0, D1 and D2 and wood light-frame townhouses in Seismic Design Category C. 1. Plate washers conforming to Section R602.11.1 shall be provided for all anchor bolts over the full length of required braced wall lines except where approved anchor straps are used. Properly sized cut washers shall be permitted for anchor bolts in wall lines not containing braced wall panels. 2. Interior braced wall plates shall have anchor bolts spaced at not more than 6 feet on center and located within 12 inches of the ends of each plate section where supported on a continuous foundation. 3. Interior bearing wall sole plates shall have anchor bolts spaced at not more than 6 feet on center and located within 12 inches of the ends of each plate section where supported on a continuous foundation. 4. The maximum anchor bolt spacing shall be 4 feet for buildings over two stories in height. 5. Stepped cripple walls shall conform to Section R602.11.2. 6. Where continuous wood foundations in accordance with Section R404.2 are used, the force transfer shall have a capacity equal to or greater than the connections required by Section R602.11.1 or the braced wall panel shall be connected to the wood foundations in accordance with the braced wall panel-to-floor fastening requirements of Table R602.3(1).`,
  },
  {
    title: 'Building clearance from adjacent slopes',
    code: 'R403.1.7.1',
    body: `In general, buildings below slopes shall be set a sufficient distance from the slope to provide protection from slope drainage, erosion and shallow failures. Except as provided in Section R403.1.7.4 and Figure R403.1.7.1, the following criteria will be assumed to provide this protection. Where the existing slope is steeper than 1 unit vertical in 1 unit horizontal (100-percent slope), the toe of the slope shall be assumed to be at the intersection of a horizontal plane drawn from the top of the foundation and a plane drawn tangent to the slope at an angle of 45 degrees (0.79 rad) to the horizontal. Where a retaining wall is constructed at the toe of the slope, the height of the slope shall be measured from the top of the wall to the top of the slope.`,
  },
  {
    title: 'Foundation elevation',
    code: 'R403.1.7.3',
    body: `On graded sites, the top of any exterior foundation shall extend above the elevation of the street gutter at point of discharge or the inlet of an approved drainage device not less than 12 inches plus 2 percent. Alternate elevations are permitted subject to the approval of the building official, provided that it can be demonstrated that required drainage to the point of discharge and away from the structure is provided at all locations on the site.`,
  },
  {
    title: 'Footings for wood foundation',
    code: 'R403.2',
    body: `Footings for wood foundations shall be in accordance with Figures R403.1(2) and R403.1(3). Gravel shall be washed and well graded. The maximum size stone shall not exceed 3/4 inch. Gravel shall be free from organic, clayey or silty soils. Sand shall be coarse, not smaller than 1/16-inch grains and shall be free from organic, clayey or silty soils. Crushed stone shall have a maximum size of 1/2 inch.`,
  },
  {
    title: 'Protection of horizontal insulation below ground',
    code: 'R403.3.2',
    body: `Horizontal insulation placed less than 12 inches (305 mm) below the ground surface or that portion of horizontal insulation extending outward more than 24 inches (610 mm) from the foundation edge shall be protected against damage by use of a concrete slab or asphalt paving on the ground surface directly above the insulation or by cementitious board, plywood rated for below-ground use, or other approved materials placed below ground, directly above the top surface of the insulation.`,
  },
  {
    title: 'Crushed stone footings',
    code: 'R403.4.1',
    body: `Clean crushed stone shall be free from organic, clayey or silty soils. Crushed stone shall be angular in nature and meet ASTM C33, with the maximum size stone not to exceed 1/2 inch and the minimum stone size not to be smaller than 1/16 inch. Crushed stone footings for precast foundations shall be installed in accordance with Figure R403.4(1) and Table R403.4. Crushed stone footings shall be consolidated using a vibratory plate in not greater than 8-inch lifts. Crushed stone footings shall be limited to Seismic Design Categories A, B and C.`,
  },
  {
    title: 'Concrete and masonry foundation wall',
    code: '404.1.1',
    body: `Concrete or masonry foundation walls shall be designed in accordance with accepted engineering practice where either of the following conditions exists: 1. Walls are subject to hydrostatic pressure from ground water. 2. Walls supporting more than 48 inches of unbalanced backfill that do not have permanent lateral support at the top or bottom.`,
  },
  {
    title: 'Reinforcement for foundation walls',
    code: 'R404.1.3.2',
    body: `Concrete foundation walls shall be laterally supported at the top and bottom. Horizontal reinforcement shall be provided in accordance with Table R404.1.3.2(1). Vertical reinforcement shall be provided in accordance with Table R404.1.3.2(2), R404.1.3.2(3), R404.1.3.2(4), R404.1.3.2(5), R404.1.3.2(6), R404.1.3.2(7) or R404.1.3.2(8). Vertical reinforcement for flat basement walls retaining 4 feet or more of unbalanced backfill is permitted to be determined in accordance with Table R404.1.3.2(9). For basement walls supporting above-grade concrete walls, vertical reinforcement shall be the greater of that required by Tables R404.1.3.2(2) through R404.1.3.2(8) or by Section R608.6 for the above-grade wall. In buildings assigned to seismic design category D0, D1 or D2, concrete foundation walls shall also comply with Section R404.1.4.2.`,
  },
  {
    title: 'Concrete foundation stem walls',
    code: 'R404.1.3.2.1',
    body: `Foundation stem walls that support above-grade concrete walls shall be designed and constructed in accordance with this section. 1. Stem walls not laterally supported at top. Concrete stem walls that are not monolithic with slabs-on-ground or are not otherwise laterally supported by slabs-on-ground shall comply with this section. Where unbalanced backfill retained by the stem wall is less than or equal to 18 inches, the stem wall and above-grade wall it supports shall be provided with vertical reinforcement in accordance with Section R608.6 and Table R608.6(1), R608.6(2) or R608.6(3) for above-grade walls. Where unbalanced backfill retained by the stem wall is greater than 18 inches, the stem wall and above-grade wall it supports shall be provided with vertical reinforcement in accordance with Section R608.6 and Table R608.6(1). 2. Stem walls laterally supported at top. Concrete stem walls that are monolithic with slabs-on-ground or are otherwise laterally supported by slabs-on-ground shall be vertically reinforced in accordance with Section R608.6 and Table R608.6(1), R608.6(2) or R608.6(3) for above-grade walls. Where the unbalanced backfill retained by the stem wall is greater than 18 inches, the connection between the stem wall and the slab-on-ground, and the portion of the slab-on-ground providing lateral support for the wall shall be designed in accordance with PCA 100 or with accepted engineering practice. Where the unbalanced backfill retained by the stem wall is greater than 18 inches, the minimum nominal thickness of the wall shall be 6 inches.`,
  },
  {
    title: 'Concrete foundation stem walls',
    code: 'R404.1.3.2.2',
    body: `Concrete foundation stem walls that support light-frame above-grade walls shall be designed and constructed in accordance with this section. 1. Stem walls not laterally supported at top. Concrete stem walls that are not monolithic with slabs-on-ground or are not otherwise laterally supported by slabs-on-ground and retain 48 inches or less of unbalanced fill, measured from the top of the wall, shall be constructed in accordance with Section R404.1.3. Foundation stem walls that retain more than 48 inches of unbalanced fill, measured from the top of the wall, shall be designed in accordance with Sections R404.1.1 and R404.4. 2. Stem walls laterally supported at top. Concrete stem walls that are monolithic with slabs-on-ground or are otherwise laterally supported by slabs-on-ground shall be constructed in accordance with Section R404.1.3. Where the unbalanced backfill retained by the stem wall is greater than 48 inches, the connection between the stem wall and the slab-on-ground, and the portion of the slab-on-ground providing lateral support for the wall, shall be designed in accordance with PCA 100 or in accordance with accepted engineering practice.`,
  },
];

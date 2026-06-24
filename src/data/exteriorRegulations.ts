/**
 * Exterior building-code requirements.
 * Source: 2024 International Residential Code (IRC).
 *
 * Full text provided by the client from the existing 369 Home Inspections site.
 * Titles normalized for spelling; quote text kept verbatim. The source carries
 * no reference hyperlinks.
 */
import type { Regulation } from './regulationTypes';

export const exteriorCodeSource =
  'All information is from the 2024 International Residential Code.';

export const exteriorRegulations: Regulation[] = [
  {
    title: 'Duct termination',
    code: 'M1502.2',
    body: `Dryer exhaust systems shall be independent of all other systems and shall convey the moisture to the outdoors.`,
  },
  {
    title: 'Duct termination',
    code: 'M1502.3',
    body: `Exhaust ducts shall terminate on the outside of the building. Exhaust ducts termination shall be in accordance with dryer manufactures installation instructions. If the manufactures instructions does not specify a termination location, The exhaust duct shall terminate not less than 3 feet in any direction from openings into buildings, including openings in ventilated soffits, Exhaust ducts shall be equipped with a backdraft damper. Screens shall not be installed at duct termination.`,
  },
  {
    title: 'Exhaust termination',
    code: 'M1502.3.1',
    body: `The passageway of dryer exhaust duct terminals shall be undiminished in size and shall provide an open area of not less than 12.5 square inches.`,
  },
  {
    title: 'Duct installation',
    code: 'M1502.4.2',
    body: `Exhaust ducts shall be supported at intervals not to exceed 12 feet and shall be secured in place. The insert end of the duct shall extend into the adjoining duct or fitting in the direction of airflow. Exhaust duct joints shall be sealed in accordance with M1601.4.1 and shall be mechanically fastened. Ducts shall not be joined with screws or similar fasteners that protrude more than 1/8 inch into the inside of the duct. Where dryer exhaust ducts are enclosed in a wall or ceiling cavities, such cavities shall allow the installation of the duct without deformation.`,
  },
  {
    title: 'Deck footings',
    code: 'R507.3.2',
    body: `Deck footings shall be placed not less than 12 inches below the undisturbed ground surface.`,
  },
  {
    title: 'Deck beam bearing',
    code: 'R507.5.1',
    body: `Beams and individual beam plies of built-up beams shall be continuous between bearing locations and continuous across bearing locations supporting beam cantilevers. Beams shall be permitted to cantilever beyond bearing locations up to one-fourth of the actual beam span. The ends of beams shall have not less than 1 1/2 inches of bearing length on wood or metal and not less than 3 inches of bearing length on concrete or masonry for the entire width of the beam.`,
  },
  {
    title: 'Deck beam connection',
    code: 'R507.5.2',
    body: `Deck beams shall be connected to supporting members to prevent lateral displacement. Manufactured post-to-beam connectors shall be sized for the post and beam sizes. Bolts shall have washers under the head and nut.`,
  },
  {
    title: 'Deck joist bearing',
    code: 'R507.6.1',
    body: `The ends of joists shall have not less than 1 1/2 inches of bearing length on wood or metal and not less than 3 inches of bearing length on concrete or masonry over its entire width. Joists bearing on top of a multiple-ply beam or ledger shall be fastened in accordance with Table R602.3.1. Joists bearing on top of a single-ply beam or ledger shall be attached by a mechanical connector. Joist framing into the side of a beam or ledger board shall be supported by approved joist hangers.`,
  },
  {
    title: 'Deck joist connection',
    code: 'R507.6.2',
    body: `Joist ends and bearing locations shall be provided with lateral resistance to prevent rotation. Where lateral restraint is provided by joist hangers or blocking between joists, their depth shall equal not less than 60 percent of the joist depth. Where lateral restraint is provided by rim joists, they shall be secured to the end of each joist with not fewer than three 10d nails or three No. 10 x 3-inch-long wood screws.`,
  },
  {
    title: 'Deck connection',
    code: 'R507.8',
    body: `Where supported by attachment to an exterior wall, decks shall be positively anchored to the primary structure and designed for both vertical and lateral loads. Such attachment shall not be accomplished by the use of toenails or nails subject to withdrawal. For decks with cantilevered framing members, connection to exterior walls or other framing members shall be designed and constructed to resist uplift resulting from the full live load specified in table R301.5 acting on the cantilevered portion of the deck. Where positive connection to the primary building structure cannot be verified during inspection, decks shall be self-supporting.`,
  },
  {
    title: 'Deck ledger',
    code: 'R507.9.1.1',
    body: `Deck ledgers shall be a minimum 2-inch by 8-inch nominal, No. 2 grade or better pressure-preservative-treated Southern pine, incised pressure-preservative-treated hem-fir, or decay-resistant, naturally durable wood. Deck ledgers shall not support concentrated loads from beams or girders. Deck ledgers shall not be supported on stone or masonry veneer.`,
  },
  {
    title: 'Deck ledger support',
    code: 'R507.9.1.2',
    body: `Band joists supporting a ledger shall be a minimum 2-inch-nominal, solid-sawn, spruce-pine-fir or better lumber or a minimum 1-inch nominal engineered wood rim boards in accordance with section R502.1.7. Band joists shall bear fully on the primary structure capable of supporting all required loads.`,
  },
  {
    title: 'Deck ledger connection',
    code: 'R507.9.1.3',
    body: `Holes for 1/2-inch lag screws shall be predrilled with two drill bits so that a hole 1/2 inch in diameter is drilled through the ledger and sheathing, if present, and a hole 5/16 inch (7.9 mm) to 3/8 inch in diameter is drilled through the band joist.`,
  },
  {
    title: 'Ledger flashing',
    code: 'R507.9.1.5',
    body: `Where ledgers are attached to wood-frame construction, flashing shall be installed above the ledger to prevent the entry of water into the wall cavity or behind the ledger. Flashing shall extend vertically not less than 2 inches above the ledger. Flashing shall extend horizontally not less than 4 inches beyond the ledger face or shall extend to the ledger face and not less than 1/4 inch down the ledger face. EXCEPTIONS: 1. Where a window or door opening is located less than 2 inches above the ledger, flashing shall extend to the bottom of the wall opening. 2. Flashing is not required where the ledger is spaced horizontally from the exterior wall covering not less than 1/4 inch to allow for drainage and ventilation behind the ledger.`,
  },
  {
    title: 'Ledger flashing',
    code: 'R507.9.1.7',
    body: `Where ledgers are attached to existing walls without water-resistive barriers, a water-resistive barrier shall be installed behind the ledger and ledger flashing. The water-resistive barrier shall extend to the top of the ledger flashing vertical leg and not less than 1/2 inch beyond the sides and bottom of the ledger. A self-adhering membrane counterflashing shall be installed not less than 2 inches over the vertical leg of the ledger flashing and not less than 2 inches onto the existing sheathing. EXCEPTIONS: 1. Where a window or door opening is located less than 2 inches (51 mm) above the ledger, flashing shall extend to the bottom of the wall opening. 2. Flashing is not required where the ledger is spaced horizontally from the exterior wall covering not less than 1/4 inch to allow for drainage and ventilation behind the ledger.`,
  },
  {
    title: 'Deck guard support',
    code: 'R507.10.1',
    body: `Where guards are supported on deck framing, guard loads shall be transferred to the deck framing with a continuous load path to the deck joists.`,
  },
  {
    title: 'Deck guard support',
    code: 'R507.10.1.1',
    body: `Where guards are connected to the interior or exterior side of a deck joist or beam, the joist or beam shall be connected to the adjacent joists to prevent rotation of the joist or beam. Connections relying only on fasteners in end grain withdrawal are not permitted.`,
  },
  {
    title: 'Deck guard support',
    code: 'R507.1.2',
    body: `Where guards are mounted on top of the decking, the guards shall be connected to the deck framing or blocking and installed in accordance with manufacturer’s instructions to transfer the guard loads to the adjacent joists.`,
  },
  {
    title: 'Deck guards support',
    code: 'R507.10.2',
    body: `Where 4-inch by 4-inch wood posts support guard loads applied to the top of the guard, such posts shall not be notched at the connection to the supporting structure.`,
  },
  {
    title: 'Siding clearance',
    code: 'R703.3.1',
    body: `Unless otherwise specified by the cladding manufacturer or this code, polypropylene, insulated vinyl and vinyl claddings shall have clearance of not less than 6 inches from the ground and not less than 1/2 inch (13 mm) from other adjacent surfaces (decks, roofs, slabs).`,
  },
  {
    title: 'Siding fasteners',
    code: 'R703.3.3',
    body: `Exterior wall coverings shall be securely fastened with aluminum, galvanized, stainless steel or rust-preventative coated nails or staples in accordance with table R703.3.1 or with other approved corrosion-resistant fasteners in accordance with the wall covering manufacturer’s installation instructions. Nails and staples shall comply with ASTM F1667. Nails shall be T-head, modified round head, or round head with smooth or deformed shanks. Staples shall have a minimum crown width of 7/16 inch outside diameter and be manufactured of minimum 16-gage wire. Where fiberboard, gypsum, or foam plastic sheathing backing is used, nails or staples shall be driven into the studs. Where wood or wood structural panel sheathing is used, fasteners shall be driven into studs unless otherwise permitted to be driven into sheathing in accordance with either the siding manufacturer’s installation instructions or table R703.3.3.`,
  },
  {
    title: 'Fastener length',
    code: 'R703.3.4',
    body: `Fasteners shall have the greater of the minimum length specified in table R703.3(1) or as required to provide a minimum penetration into framing as follows: 1. Fasteners for horizontal aluminum siding, steel siding, particleboard panel siding, wood structural panel siding in accordance with ANSI/APA-PRP 210, fiber-cement panel siding and fiber-cement lap siding installed over foam plastic sheathing shall penetrate not less than 1 1/2 inches into framing or shall be in accordance with the manufacturer’s installation instructions. 2. Fasteners for hardboard panel and lap siding shall penetrate not less than 1 1/2 inches into framing. 3. Fasteners for vinyl siding and insulated vinyl siding shall be installed in accordance with section R703.11 or R703.13. 4. Fasteners for polypropylene siding shall be installed in accordance with section R703.14. 5. Fasteners for vertical or horizontal wood siding shall penetrate not less than 1 1/2 inches into studs, studs and wood sheathing combined, or blocking. 6. Fasteners for siding material installed over foam plastic sheathing shall have sufficient length to accommodate foam plastic sheathing thickness and to penetrate framing or sheathing and framing combined, as specified in Items 1 through 5.`,
  },
  {
    title: 'Flashing',
    code: 'R703.4',
    body: `Approved corrosion-resistant flashing shall be applied in a manner to prevent entry of water into the wall cavity or penetration of water to the building structural framing components. Overlapped flashing shall be applied in shingle fashion. Self-adhered membranes used as flashing shall comply with AAMA 711. Fluid-applied membranes used as flashing in exterior walls shall comply with AAMA 714. The flashing shall extend to the surface of the exterior wall finish. Flashing shall be installed above deck ledgers in accordance with Section R507.9.1.5. Approved corrosion-resistant flashings shall be installed at the following locations: 1. Exterior window and door openings. Flashing at exterior window and door openings shall be installed in accordance with section R703.4.1. 2. At the intersection of chimneys or other masonry construction with frame or stucco walls, with projecting lips on both sides under stucco copings. 3. Under and at the ends of masonry, wood or metal copings and sills. 4. Continuously above all projecting wood trim. 5. Where exterior porches, decks or stairs attach to a wall or floor assembly of wood-frame construction. 6. At wall and roof intersections. 7. At built-in gutters.`,
  },
  {
    title: 'Flashing installation',
    code: 'R703.4.1',
    body: `Flashing at exterior window and door openings shall extend to the surface of the exterior wall finish or to a water-resistive barrier complying with Section R703.2 for subsequent drainage. Air sealing shall be installed around all window and door openings on the interior side of the rough opening gap. Mechanically attached flexible flashings shall comply with AAMA 712. Flashing at exterior window and door openings shall be installed in accordance with one or more of the following: 1. The fenestration manufacturer’s installation and flashing instructions, or for applications not addressed in the fenestration manufacturer’s instructions, in accordance with the flashing or water-resistive barrier manufacturer’s instructions. Where flashing instructions or details are not provided, pan flashing shall be installed at the sill of exterior window and door openings. Pan flashing shall be sealed or sloped in such a manner as to direct water to the surface of the exterior wall finish or to the water-resistive barrier for subsequent drainage. Openings using pan flashing shall incorporate flashing or protection at the head and sides. 2. In accordance with the flashing design or method of a registered design professional. 3. In accordance with other approved methods.`,
  },
  {
    title: 'Vertical wood siding',
    code: 'R703.5.1',
    body: `Wood siding applied vertically shall be nailed to horizontal nailing strips or blocking set not more than 24 inches on center.`,
  },
  {
    title: 'Horizontal wood siding',
    code: 'R703.5.3',
    body: `Horizontal lap siding shall be installed in accordance with the manufacturer’s recommendations. Where there are no recommendations the siding shall be lapped not less than 1 inch (25 mm), or 1/2 inch (12.7 mm) if rabbeted, and shall have the ends caulked, covered with a batten or sealed and installed over a strip of flashing.`,
  },
  {
    title: 'Panel siding',
    code: 'R703.5.2',
    body: `3/8 inch wood structural panel siding shall not be applied directly to studs spaced more than 16 inches on center where long dimension is parallel to studs. Wood structural panel siding 7/16 inch or thinner shall not be applied directly to studs spaced more than 24 inches on center. The stud spacing shall not exceed the panel span rating provided by the manufacturer unless the panels are installed with the face grain perpendicular to the studs or over sheathing approved for that stud spacing. Joints in wood, hardboard or wood structural panel siding shall be made as follows unless otherwise approved. Vertical joints in panel siding shall occur over framing members, unless wood or wood structural panel sheathing is used, and shall be ship lapped or covered with a batten. Horizontal joints in panel siding shall be lapped not less than 1 inch or shall be ship lapped or flashed with Z-flashing and occur over solid blocking, wood or wood structural panel sheathing.`,
  },
  {
    title: 'Wood shakes and shingles',
    code: 'R703.6.1',
    body: `Wood shakes or shingles shall be applied either single course or double course over nominal 1/2-inch wood-based sheathing or to furring strips over 1/2-inch nominal nonwood sheathing. A water-resistive barrier shall be provided in accordance with section R703.2. Where horizontal furring strips are used, they shall be 1 inch by 3 inches or 1 inch by 4 inches and shall be fastened to the studs with minimum 7d or 8d box nails and shall be spaced a distance on center equal to the actual weather exposure of the shakes or shingles, not to exceed the maximum exposure specified in Table R703.6.1. When installing shakes or shingles over a nonpermeable water-resistive barrier, furring strips shall be placed first vertically over the water-resistive barrier and in addition, horizontal furring strips shall be fastened to the vertical furring strips prior to attaching the shakes or shingles to the horizontal furring strips. Alternatively, horizontal furring shall be gapped not less than 3/16 inch from the surface of the water-resistive barrier without the requirement for a vertical furring strip. Where installed over foam plastic insulating sheathing, furring attachments shall comply with Section R703.15, R703.16 or R703.17. The spacing between adjacent shingles to allow for expansion shall be 1/8 inch to 1/4 inch apart, and between adjacent shakes shall be 3/8 inch to 1/2 inch apart. The offset spacing between joints in adjacent courses shall be not less than 1 1/2 inches.`,
  },
  {
    title: 'Lath covering',
    code: 'R703.7.1',
    body: `Lath and lath attachments shall be of corrosion-resistant materials in accordance with ASTM C1063. Expanded metal, welded wire, or woven wire lath shall be attached to wood framing members or furring. Where the exterior plaster is serving as wall bracing in accordance with Table R602.10.4, the lath shall be attached directly to framing. The lath shall be attached with 1 1/2-inch-long, 0.120-inch-diameter, 11-gage nails having a 7/16-inch head, or 7/8-inch-long, 16-gage staples, spaced not more than 7 inches on center along framing members or furring and not more than 24 inches on center between framing members or furring, or as otherwise approved. Additional fastening between wood framing members shall not be prohibited. Lath attachments to cold-formed steel framing or to masonry, stone, or concrete substrates shall be in accordance with ASTM C1063. Where lath is installed directly over foam sheathing, lath connections shall also be in accordance with Section R703.15, R703.16 or R703.17. Where lath is attached to furring installed over foam sheathing, the furring connections shall be in accordance with Section R703.15, R703.16 or R703.17.`,
  },
  {
    title: 'Furring',
    code: 'R703.7.1.1',
    body: `Where provided, furring shall consist of wood furring strips not less than 1 inch by 2 inches, minimum 3/4-inch metal channels, or self-furring lath, and shall be installed in accordance with ASTM C1063. Furring shall be spaced not greater than 24 inches on center and, where installed over wood or cold-formed steel framing, shall be fastened into framing members.`,
  },
  {
    title: 'Weep screeds',
    code: 'R703.7.2.1',
    body: `A minimum 0.019-inch (No. 26 galvanized sheet gage), corrosion-resistant weep screed or plastic weep screed, with a minimum vertical attachment flange of 3 1/2 inches, shall be provided at or below the foundation plate line on exterior stud walls in accordance with ASTM C926. The weep screed shall be placed not less than 4 inches above the earth or 2 inches above paved areas and shall be of a type that will allow trapped water to drain to the exterior of the building. The weather-resistant barrier shall lap the attachment flange. The exterior lath shall cover and terminate on the attachment flange of the weep screed.`,
  },
  {
    title: 'Curing',
    code: 'R703.7.5',
    body: `The finish coat for two-coat cement plaster shall not be applied sooner than seven days after application of the first coat. For three-coat cement plaster, the second coat shall not be applied sooner than 48 hours after application of the first coat. The finish coat for three-coat cement plaster shall not be applied sooner than seven days after application of the second coat.`,
  },
  {
    title: 'Masonry veneer lintels',
    code: 'R703.8.3',
    body: `Masonry veneer shall not support any vertical load other than the dead load of the veneer above. Veneer above openings shall be supported on lintels of noncombustible materials. The lintels shall have a length of bearing not less than 4 inches (102 mm). Steel lintels shall be shop coated with a rust-inhibitive paint, except for lintels made of corrosion-resistant steel or steel treated with coatings to provide corrosion resistance. Construction of openings shall comply with either Section R703.8.3.1 or R703.8.3.2.`,
  },
  {
    title: 'Lintels max span',
    code: 'R703.8.3.2',
    body: `The allowable span shall not exceed 18 feet 3 inches and shall be constructed to comply with figure R703.8.3.2 and the following: 1. Provide a minimum length of 18 inches of masonry veneer on each side of opening as shown in figure R703.8.3.2. 2. Provide a minimum 5-inch by 3 1/2-inch by 5/16-inch steel angle above the opening and shore for a minimum of 7 days after installation. 3. Provide double-wire joint reinforcement extending 12 inches beyond each side of the opening. Lap splices of joint reinforcement not less than 12 inches. Comply with one of the following: A. Double-wire joint reinforcement shall be 3/16-inch diameter and shall be placed in the first two bed joints above the opening. B. Double-wire joint reinforcement shall be 9 gauge (0.144 inch or 3.66 mm diameter) and shall be placed in the first three bed joints above the opening. 4. Provide the height of masonry veneer above opening, in accordance with table R703.8.3.2.`,
  },
  {
    title: 'Steel angle ledger support',
    code: 'R703.8.2.2',
    body: `A steel angle shall be placed directly on top of the ledger or roof construction. The ledger or roof construction supporting the steel angle shall consist of not fewer than three 2-inch by 6-inch wood members for wood construction or three 550S162 cold-formed steel members for cold-formed steel light frame construction. The wood member abutting the vertical wall stud construction shall be anchored with not fewer than three 5/8-inch diameter by 5-inch lag screws to every wood stud spacing. Each additional wood roof member shall be anchored by the use of two 10d nails at every wood stud spacing. A cold-formed steel member abutting the vertical wall stud shall be anchored with not fewer than nine No. 8 screws to every cold-formed steel stud. Each additional cold-formed steel roof member shall be anchored to the adjoining roof member using two No. 8 screws at every stud spacing. Not less than two-thirds the width of the masonry veneer thickness shall bear on the steel angle. Flashing and weep holes shall be located in the masonry veneer wythe in accordance with figure R703.8.2.2(1) or R703.8.2.2(2). The maximum height of the masonry veneer above the steel angle support shall be 12 feet 8 inches.`,
  },
  {
    title: 'Masonry veneer anchorage',
    code: 'R703.8.4',
    body: `Masonry veneer shall be anchored to the supporting wall studs with corrosion-resistant metal ties embedded in mortar or grout and extending into the veneer a minimum of 1 1/2 inches, with not less than 5/8-inch mortar or grout cover to outside face. Masonry veneer shall conform to table R703.8.4(1). Where the masonry veneer tie attachment is fastened to wood structural panel not less than 7/16 performance category through insulating sheathing not greater than 2 inches (51 mm) in thickness, see table R703.8.4(2). Where table R703.8.4(2) is used, attachment to the studs behind the sheathing is not required.`,
  },
  {
    title: 'Veneer ties',
    code: 'R703.8.4.1',
    body: `Veneer ties, if strand wire, shall be not less in thickness than No. 9 U.S. gage (0.148 inch) wire and shall have a hook embedded in the mortar joint, or if sheet metal, shall be not less than No. 22 U.S. gage by (0.0299 inch) 7/8 inch corrugated. Each tie shall support not more than 2.67 square feet (0.25 m2) of wall area and shall be spaced not more than 32 inches on center horizontally and 24 inches on center vertically.`,
  },
  {
    title: 'Veneer ties',
    code: 'R703.8.4.1.1',
    body: `Additional metal ties shall be provided around wall openings greater than 16 inches in either dimension. Metal ties around the perimeter of openings shall be spaced not more than 3 feet on center and placed within 12 inches of the wall opening.`,
  },
  {
    title: 'Veneer flashing',
    code: 'R703.8.5',
    body: `Flashing shall be located beneath the first course of masonry above finished ground level above the foundation wall or slab and at other points of support, including structural floors, shelf angles and lintels where masonry veneers are designed in accordance with Section R703.8.`,
  },
  {
    title: 'Veneer weepholes',
    code: 'R703.8.6',
    body: `Weepholes shall be provided in the outside wythe of masonry walls at a maximum spacing of 33 inches on center. Weepholes shall be not less than 3/16 inch in diameter. Weepholes shall be located immediately above the flashing.`,
  },
  {
    title: 'Exterior insulation and finish system',
    code: 'R703.9.1',
    body: `EIFS shall comply with the following: 1. ASTM E2568. 2. EIFS shall be limited to applications over substrates of concrete or masonry wall assemblies. 3. Flashing of EIFS shall be provided in accordance with the requirements of Section R703.4. 4. EIFS shall be installed in accordance with the manufacturer’s instructions. 5. EIFS shall terminate not less than 6 inches above the finished ground level. 6. Decorative trim shall not be face-nailed through the EIFS.`,
  },
  {
    title: 'Fiber cement siding',
    code: 'R703.10.2',
    body: `Fiber-cement lap siding having a maximum width of 12 inches shall comply with the requirements of ASTM C1186, Type A, minimum Grade II or ISO 8336, Category A, minimum Class 2. Lap siding shall be lapped a minimum of 1 1/4 inches and lap siding not having tongue-and-groove end joints shall have the ends protected with caulking, covered with an H-section joint cover, located over a strip of flashing, or shall be designed to comply with Section R703.1. Lap siding courses shall be installed with the fastener heads exposed or concealed, in accordance with Table R703.3(1) or approved manufacturer’s instructions.`,
  },
  {
    title: 'Vinyl siding starter strip',
    code: 'R703.11.1',
    body: `The first course of horizontal siding shall be secured using a starter strip as specified in the manufacturer’s installation instructions. See Figure R703.11.1.1(1). Where the first course of siding has to be cut or trimmed, the bottom edge shall be secured with utility trim and snap locks as specified by the manufacturer's installation instructions.`,
  },
  {
    title: 'Vinyl siding utility trim',
    code: 'R703.11.2',
    body: `Where horizontal siding has to be cut or trimmed below windows and at the top of walls, the top edge of the siding shall be secured with utility trim and snap locks or as specified by the manufacturer’s installation instructions.`,
  },
  {
    title: 'Vinyl siding fasteners',
    code: 'R703.11.1.3',
    body: `Unless specified otherwise by the manufacturer’s instructions, fasteners for vinyl siding shall be 0.120-inch shank diameter nails with a 0.313-inch head, 16-gage staples with a 3/8-inch to 1/2-inch crown or in accordance with Table R703.3(1).`,
  },
  {
    title: 'Vinyl siding fasteners',
    code: 'R703.11.1.4',
    body: `Unless specified otherwise by the manufacturer’s instructions or in accordance with Table R703.3(1), fasteners shall penetrate into building framing. The total penetration into sheathing, furring framing or other nailable substrate shall be a minimum 1 1/4 inches.`,
  },
  {
    title: 'Vinyl siding fasteners',
    code: 'R703.11.1.5',
    body: `Unless specified otherwise by the manufacturer’s instructions, the maximum spacing between fasteners shall be 16 inches for horizontal siding and 12 inches for vertical siding. Where specified by the manufacturer’s instructions and supported by a test report, alternative fastener spacing such as 24 inches is permitted.`,
  },
  {
    title: 'Adhered masonry veneer clearance',
    code: 'R703.12.1',
    body: `On exterior stud walls, adhered masonry veneer shall be installed in accordance with one of the following: 1. Not less than 4 inches above the earth. 2. Not less than 2 inches above paved areas. 3. Not less than 1/2 inch above exterior walking surfaces that are supported by the same foundation that supports the exterior wall.`,
  },
  {
    title: 'Adhered masonry veneer flashing',
    code: 'R703.12.2',
    body: `A corrosion-resistant screed or flashing of a minimum 0.019-inch (0.48 mm) or 26-gage galvanized or plastic with a minimum vertical attachment flange of 3 1/2 inches (89 mm) shall be installed to extend a minimum of 1 inch (25 mm) below the foundation plate line on exterior stud walls in accordance with Section R703.4.`,
  },
  {
    title: 'Vinyl and aluminum soffits',
    code: 'R704.2.1',
    body: `Vinyl and aluminum exterior soffit panels shall be installed using aluminum, galvanized, stainless steel or rust-preventative coated nails or staples or other approved corrosion-resistant fasteners specified by the manufacturer and shall be fastened at both ends to a supporting component such as a nailing strip, fascia or subfascia component in accordance with Figure R704.2.1(1). Where the unsupported span of exterior soffit panels is greater than 16 inches, intermediate nailing strips shall be provided in accordance with Figure R704.2.1(2). Vinyl and aluminum exterior soffit panels shall be installed in accordance with the manufacturer’s installation instructions. Fascia covers shall be installed in accordance with the manufacturer’s installation instructions.`,
  },
  {
    title: 'Fiber cement soffits',
    code: 'R704.2.2',
    body: `Fiber-cement exterior soffit panels shall be a minimum of 1/4 inch in thickness and shall comply with the requirements of ASTM C1186, Type A, minimum Grade II, or ISO 8336, Category A, minimum Class 2. Panel joints shall occur over framing or over wood structural panel sheathing. Exterior soffit panels shall be installed with spans and fasteners in accordance with the manufacturer’s installation instructions.`,
  },
  {
    title: 'Hardboard soffits',
    code: 'R704.2.3',
    body: `Hardboard exterior soffit panels shall be not less than 7/16 inch in thickness and shall be fastened to framing or nailing strips with 2 1/2-inch by 0.113-inch siding nails spaced not more than 6 inches on center at panel edges and 12 inches on center at intermediate supports.`,
  },
  {
    title: 'Wood structural soffits',
    code: 'R704.2.4',
    body: `The minimum nominal thickness for wood structural panel exterior soffits shall be 3/8 inch and shall be fastened to framing or nailing strips with 2-inch by 0.099-inch nails. Fasteners shall be spaced not less than 6 inches on center at panel edges and 12 inches on center at intermediate supports.`,
  },
  {
    title: 'Exterior pipe penetrations',
    code: 'P2607.2',
    body: `Where a pipe penetrates an exterior wall, a waterproof seal shall be made on the exterior of the wall by one of the following methods: 1. A waterproof sealant applied at the joint between the wall and the pipe. 2. A flashing of an approved elastomeric material.`,
  },
];

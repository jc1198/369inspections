/**
 * HVAC building-code requirements.
 * Source: 2024 International Residential Code (IRC).
 *
 * Full text provided by the client from the existing 369 Home Inspections site.
 * Titles normalized; quote text verbatim (obvious doubled-word/spelling typos
 * lightly corrected). The source carries no links.
 */
import type { Regulation } from './regulationTypes';

export const hvacCodeSource =
  'All information is from the 2024 International Residential Code.';

export const hvacRegulations: Regulation[] = [
  {
    title: 'Access',
    code: 'M1401.2',
    body: `Heating and Cooling equipment and appliances shall be located with respect to building construction and other equipment and appliances to permit maintenance, servicing and replacement. Clearances shall be maintained to permit cleaning of heating and cooling surfaces; replacement of filters, blowers, motors, controls and vent connection; lubrication of moving parts and adjustments. Exception: Access shall not be required for ducts, piping, or other components approved for concealment.`,
  },
  {
    title: 'Access',
    code: 'M1408.4',
    body: `An opening in the foundation not less than 18 inches by 24 inches, or a trap door not less than 22 inches by 30 inches shall be provided for access to a floor furnace. The opening and passageway shall be large enough to allow replacement of any part of the equipment.`,
  },
  {
    title: 'Outdoor installation',
    code: 'M1401.4',
    body: `Equipment and appliances outdoors shall be listed and labeled for outdoor installation. Supports and foundations shall prevent excessive vibration, settlement or movement of the equipment.`,
  },
  {
    title: 'Clearances',
    code: 'M1402.3',
    body: `Combustion air openings shall be unobstructed for a distance not less than 6 inches in front of the opening.`,
  },
  {
    title: 'Radiant installation',
    code: 'M1406.3',
    body: `Radiant panels installed on wood framing shall conform with the following requirements: (1.) Heating panels shall be installed parallel to the framing members and secured to the surface of framing members or mounted between framing members. (2.) Mechanical fasteners shall penetrate only the unheated portions provided for this purpose. Panels shall not be fastened at any point closer than 1/4 inch to an element. Other methods of attachment of the panel shall be in accordance with the panels manufactures instructions. (3.) Unless listed and labeled for field cutting, Heating panels shall be installed as complete units.`,
  },
  {
    title: 'Radiant installation',
    code: 'M1406.4',
    body: `Radiant heating systems installed in concrete or masonry shall conform with the following requirements: (1.) Radiant heating systems shall be identified as being suitable for the installation and shall be secured in place as specified in the manufactures installation instructions. (2.) Radiant heating panels or radiant heating panel sets shall not be installed where they bridge expansion joints unless protected from expansion and contraction.`,
  },
  {
    title: 'Duct heaters',
    code: 'M1407.3',
    body: `Duct heaters within 4 feet of a heat pump or air conditioner shall be listed and labeled for such installation. The heat pump or air conditioner shall additionally be listed and labeled for such duct heater installation.`,
  },
  {
    title: 'Floor furnaces',
    code: 'M1408.3',
    body: `Location of floor furnaces shall conform to the following requirements. (1.) Floor registers of floor furnaces shall not be installed not less than 6 inches from a wall. (2.) Wall registers of floor furnaces shall not be installed not less than 6 inches from the adjoining wall at inside corners. (3.) The furnace registers shall be located not less than 12 inches from doors at any position, draperies or similar combustible objects. (4.) The furnace register shall be located not less than 5 feet below any projecting combustible material. (5.) The floor furnace burner assembly shall not project into an occupied under floor area. (6.) The floor furnaces shall not be installed in concrete floor construction built on grade. (7.) The floor furnace shall not be installed where a door can swing within 12 inches of the grille opening.`,
  },
  {
    title: 'Floor furnaces',
    code: 'M1408.5',
    body: `Floor furnaces shall conform with the following requirements: (1.) Thermostats controlling floor furnaces shall be located in the room in which the register of the floor furnace is located. (2.) Floor furnaces shall be supported independently of the furnace floor register. (3.) Floor furnaces shall be installed not closer than 6 inches to the ground. The minimum clearance shall be 2 inches where the lower 6 inches of the furnace is sealed to prevent water entry. (4.) Where excavation is required for a floor furnace installation, the excavation shall extend 30 inches beyond the control side of the floor furnace and 12 inches beyond the remaining sides. Excavation shall slope outward from the perimeter of the base of the excavation to the surrounding grade at an angle not exceeding 45 degrees from horizontal. (5.) Floor furnaces shall not be supported from the ground.`,
  },
  {
    title: 'Wall furnaces',
    code: 'M1409.2',
    body: `Vented wall furnaces shall conform to the following requirement: 1. Required wall thickness shall be in accordance with the manufactures installation instructions. 2. Ducts shall not be attached to a wall furnace. Casing extensions or boots shall be installed only where listed as part of a listed and labeled appliance. 3. A manual shut off valve shall be installed ahead of all controls.`,
  },
  {
    title: 'Wall furnaces',
    code: 'M1409.3',
    body: `Vented wall furnace installations shall conform to the following requirements: 1. Required wall thicknesses shall be in accordance with the manufacturer’s installation instructions. 2. Ducts shall not be attached to a wall furnace. Casing extensions or boots shall be installed only where listed as part of a listed and labeled appliance. 3. A manual shutoff valve shall be installed ahead of all controls.`,
  },
  {
    title: 'Wall furnaces',
    code: 'M1409.4',
    body: `Vented wall furnaces shall be provided with access for cleaning of heating services; removal of burners; replacement of sections, motors, controls, filters and other working parts; and for adjustments and lubrication of parts requiring such attention. Panels grilles and access doors that must be removed for normal servicing operations shall not be attached to the building construction.`,
  },
  {
    title: 'Vented room heaters',
    code: 'M1410.2',
    body: `Room heaters shall be installed on noncombustible floors or approved assemblies constructed of noncombustible materials that extend not less than 18 inches beyond the appliance on all sides. EXCEPTIONS: 1. Listed room heaters shall be installed on noncombustible floors, assemblies constructed of noncombustible materials or floor protectors listed and labeled in accordance with UL 1618. The materials and dimensions shall be in accordance with the appliance manufacturer’s instructions. 2. Room heaters listed for installation on combustible floors without floor protection shall be installed in accordance with the appliance manufacturer’s instructions.`,
  },
  {
    title: 'Refrigeration system installation',
    code: 'M1411.3',
    body: `Refrigerant systems shall be installed in accordance to manufacturers installation instructions. After installation, the manufacturers installation instructions, owners manuals, service manuals, and any other product literature provided with the equipment shall be attached to the indoor unit or left with the homeowner.`,
  },
  {
    title: 'Refrigeration system identification',
    code: 'M1411.6',
    body: `Each refrigeration system using group A2L refrigerant shall have the following information legibly and permanently indicated on a markable label provided by the equipment manufacture. 1. Contact information of the responsible company that installed the refrigeration system. 2. The system refrigerant system charge and the refrigerant number.`,
  },
  {
    title: 'Refrigerant charge',
    code: 'M1411.6',
    body: `Refrigeration systems shall have refrigerant charge in compliance with the equipment manufactures installation instructions and the requirements of the listing. Group A2L refrigerant charge for an individual refrigeration system shall not exceed 34.5 pounds.`,
  },
  {
    title: 'Condensate disposal',
    code: 'M1411.9',
    body: `Condensate from cooling coils and evaporators shall be conveyed from the drain pan outlet to an approved place of disposal. Such piping shall maintain a minimum horizontal slope in the direction of discharge not less than 1/8 unit in vertical in 12 units horizontal. Condensate shall not discharge into a street, alley or other area where it would cause a nuisance.`,
  },
  {
    title: 'Water monitoring device',
    code: 'M1411.9.1.1',
    body: `On down-flow units and other coils that do not have a secondary or provision to install a secondary or auxiliary drain pan. A water level monitoring device shall be installed inside the primary drain pan. This device shall shut off the equipment served in the event the primary drain becomes restricted. Devices shall not be installed in the drain line.`,
  },
  {
    title: 'Drain pipe',
    code: 'M1411.9.2',
    body: `Condensate waste and drain line size shall not be less than 3/4 inch nominal diameter from the drain pan connection to the place of condensate disposal. Where the drain pipes from more than one unit are manifolded together for condensate drainage, the pipe of tubing size shall be sized in accordance to an approved method.`,
  },
  {
    title: 'Condensate pumps',
    code: 'M1411.10',
    body: `Condensate pumps located in unhabitable spaces, such as attics and crawlspaces shall be connected to the appliance or equipment served such that when the pump fails, the appliance or equipment will be prevented from operating. Pumps shall be installed in accordance to manufacturers instructions.`,
  },
  {
    title: 'Insulation',
    code: 'M1411.12',
    body: `Piping and fitting for refrigerant vapor (suction) lines shall be insulated with insulation having a thermal resistivity not less than R-3 refrigerant and having an external surface permanence not exceeding .05 perm when tested in accordance with ASTM E96.`,
  },
  {
    title: 'Refrigerant pipe location',
    code: 'M1411.13',
    body: `Refrigerant piping install within 1 1/2 inches of the underside of roof decks shall be protected from damage caused by nails and other fasteners.`,
  },
  {
    title: 'Refrigerant pipe support',
    code: 'M1411.14',
    body: `Refrigerant piping and tubing shall be securely fastened to a permanent support within 6 feet of the condensing unit.`,
  },
  {
    title: 'Refrigerant pipe insulation',
    code: 'M1412.3',
    body: `Refrigerant piping, brine piping and fittings within a building shall be insulated to prevent condensation from forming on piping.`,
  },
];

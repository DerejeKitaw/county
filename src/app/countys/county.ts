/* Defines the product entity */
export interface ICounty {
_id: number;   
countyId: number; 
WindSpeed: number;   
groundSnowLoad: number;   
FireLaneRequirement: string;
RoofMountIncludesWellAndSeptic: boolean;
RoofMountIncludesSitePlan: boolean;
FootingPlanRequired: boolean;
RapidShutdown: boolean;
Stampeddrawing: string;
Certletter: number;
NEC: string;
IBC: string; 
IRC: string; 
county: string;
age: number;   
isActive: boolean;
  

}
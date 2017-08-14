/* Defines the county entity */
export interface ICounty {
// _id: number;   
id: number;
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
countyName: string;
age: number;
isActive: boolean;
}
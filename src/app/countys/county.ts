/* Defines the county entity */
export class ICounty {
    // comment
        //id: number;
        // WindSpeed: number; 
        // groundSnowLoad: number; 
        // FireLaneRequirement: string;
        // RoofMountIncludesWellAndSeptic: boolean;
        // RoofMountIncludesSitePlan: boolean;
        // FootingPlanRequired: boolean;
        // RapidShutdown: boolean;
        // Stampeddrawing: string;
        // Certletter: number;
        // NEC: string;
        // IBC: string;
        // IRC: string; 
        // countyName: string;
        // age: number;
        // isActive: boolean;
    constructor(
        public id: number =0,
        public WindSpeed: number =null, 
        public groundSnowLoad: number =null, 
        public FireLaneRequirement: string ='',
        public RoofMountIncludesWellAndSeptic: boolean =true,
        public RoofMountIncludesSitePlan: boolean =true,
        public FootingPlanRequired: boolean =true,
        public RapidShutdown: boolean =true,
        public Stampeddrawing: string ='',
        public Certletter: number =null,
        public NEC: string ='',
        public IBC: string ='',
        public IRC: string ='', 
        public countyName: string ='',
        public age: number =null,
        public isActive: boolean =true,
    ){}
}
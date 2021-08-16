export class Travel{
    travelid:number;
    nomineeName:string;
    nomineeRelationship:string;
    travelContact:number;
    travelDestination:string;
    travelEmail:string;
    travelStartdate:Date;
    travelEnddate:Date;
	travelModeoftravel:string;
    travelNoofmembers:number;
    travelPolicyplan:number;
    customer:any = {custId:0};
    insurance:any = {insuranceId:0};

}
export class Claim
{
    claimId:number;
    claimAmountinsured:number;
    claimApprovalstatus:number;
    claimDateofsubmission:Date;
    claimReason:string;
    insurance:any={insuranceId:0};
}
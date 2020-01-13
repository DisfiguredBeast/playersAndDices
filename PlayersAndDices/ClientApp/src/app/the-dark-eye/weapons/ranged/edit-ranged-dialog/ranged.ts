export class Ranged {
    /**
     *
     */
    constructor(
        public name : string, 
        public typ : RangedType,
        public description : string)
    {
        
    }
}

export enum RangedType{
    Longbow = "Longbow",
    Shortbow = "Shortbow",
    Crossbow = "Crossbow",
    ThrowingKnife = "Throwing Knife" 
}

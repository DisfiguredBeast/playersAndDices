
export class RangedWeapon {
  id : number;
  name: string;
  typ: RangedType;
  range: number;
  damage: number;
  description?: string;
}

export enum RangedType{
    Longbow = "Longbow",
    Shortbow = "Shortbow",
    Crossbow = "Crossbow",
    ThrowingKnife = "Throwing Knife" 
  }

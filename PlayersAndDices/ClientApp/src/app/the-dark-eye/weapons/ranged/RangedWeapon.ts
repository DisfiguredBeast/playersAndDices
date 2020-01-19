
export interface IRangedWeapon {
  id : number;
  name: string;
  typ: RangedType;
  range: number;
  damage: number;
  description?: string;
}

export class RangedWeapon implements IRangedWeapon {
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

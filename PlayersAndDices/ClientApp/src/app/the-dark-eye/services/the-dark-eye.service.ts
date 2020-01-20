import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TheDarkEyeService {

    characterCreation = {
        experienceLevels: [
            { name: "Inexperienced", adventurePoints: 900, maxAttribute: 12, maxTalent: 10, maxFightSkill: 8, maxAttributeSum: 95, maxSpells: 8, maxForeignSpells: 0 },
            { name: "Average", adventurePoints: 1000, maxAttribute: 13, maxTalent: 10, maxFightSkill: 10, maxAttributeSum: 98, maxSpells: 10, maxForeignSpells: 1 },
            { name: "Experienced", adventurePoints: 1100, maxAttribute: 14, maxTalent: 10, maxFightSkill: 12, maxAttributeSum: 100, maxSpells: 12, maxForeignSpells: 2 },
            { name: "Capable", adventurePoints: 1200, maxAttribute: 15, maxTalent: 13, maxFightSkill: 14, maxAttributeSum: 102, maxSpells: 14, maxForeignSpells: 3 },
            { name: "Masterful", adventurePoints: 1400, maxAttribute: 16, maxTalent: 16, maxFightSkill: 16, maxAttributeSum: 105, maxSpells: 16, maxForeignSpells: 4 },
            { name: "Brilliant", adventurePoints: 1700, maxAttribute: 17, maxTalent: 19, maxFightSkill: 18, maxAttributeSum: 109, maxSpells: 18, maxForeignSpells: 5 },
            { name: "Legendary", adventurePoints: 2100, maxAttribute: 18, maxTalent: 20, maxFightSkill: 20, maxAttributeSum: 114, maxSpells: 20, maxForeignSpells: 6 }
        ],
        species: [
            { name: "Human", LE: 5, SK: -5, ZK: -5, GS: 8, Attributes: [{ attributes: null, action: "choose", value: +1 }], Advantage: {}, costs: 0 },
            { name: "Elf", LE: 2, SK: -4, ZK: -6, GS: 8, Attributes: [{ attributes: ["IN", "GE"], action: "all", value: +1 }, { attributes: ["KL", "KK"], action: "choose", value: -2 }], Advantage: {}, costs: 18 },
            { name: "Half-Elf", LE: 5, SK: -4, ZK: -6, GS: 8, Attributes: [{ attributes: null, action: "choose", value: +1 }], Advantage: {}, costs: 0 },
            { name: "Dwarf", LE: 8, SK: -4, ZK: -4, GS: 6, Attributes: [{ attributes: ["KO", "KK"], action: "all", value: +1 }, { attributes: ["CH", "GE"], action: "choose", value: -2 }], Advantage: {}, costs: 61 },
        ]
    }

    getExperienceLevels() {
        return this.characterCreation.experienceLevels;
    }

    getHeroes(): any[] {
        return [
            { name: "John", creationDate: new Date() },
            { name: "Jane", creationDate: new Date() },
            { name: "Jimmy", creationDate: new Date() },
        ]
    }
  constructor() { }
}

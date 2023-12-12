export class Champ {

    constructor(name, hp, dmg, mana) {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
    }

    attack() {
        console.log(`${this.name} is attacking!`)
    }
}




/** 
const jinx = new Champ("Arcade Jinx", 12, 5, 100);
console.log(jinx.mana);
jinx.hp=50;
console.log(jinx.hp)
const jinx = new Champ("SPSMB Jinx", 20, 50, 1000);
console.log(jinx2.name);
*/
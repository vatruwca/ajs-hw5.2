import Character from './character';

export default class Swordsman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.attack = 40;
    this.defence = 10;
  }
}

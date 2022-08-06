import Character from './character';

export default class Bowman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.attack = 25;
    this.defence = 25;
  }
}

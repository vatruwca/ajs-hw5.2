import Character from './character';

export default class Daemon extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.attack = 10;
    this.defence = 40;
  }
}

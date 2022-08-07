export default class Character {
  constructor(name, type) {
    this.nameVerification(name);
    this.typeVerification(type);
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  nameVerification(name) {
    if ((name.length < 2) || (name.length > 10)) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов');
    } else {
      this.name = name;
    }
  }

  typeVerification(type) {
    const arr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!arr.includes(type)) {
      throw new Error(`Тип должен соответствовать одному из: ${arr.join(', ')}`);
    } else {
      this.type = type;
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

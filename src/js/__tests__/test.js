import Character from '../character';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('checking object properties', () => {
  const sample = {
    name: 'Anna',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const player = new Character('Anna', 'Bowman', 100, 1, 25, 25);
  expect(player).toEqual(sample);
});

test('testing the properties of a new object Bowman', () => {
  const sample = {
    name: 'Maks',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const player = new Bowman('Maks', 'Bowman');
  expect(player).toEqual(sample);
});

test('testing the properties of a new object Magician', () => {
  const sample = {
    name: 'Nastya',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const player = new Magician('Nastya', 'Magician');
  expect(player).toEqual(sample);
});

test('testing the properties of a new object Swordsman', () => {
  const sample = {
    name: 'Fedor',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const player = new Swordsman('Fedor', 'Swordsman');
  expect(player).toEqual(sample);
});

test('testing the properties of a new object Zombie', () => {
  const sample = {
    name: 'Oleg',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const player = new Zombie('Oleg', 'Zombie');
  expect(player).toEqual(sample);
});

test('testing the properties of a new object Daemon', () => {
  const sample = {
    name: 'Kirill',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const player = new Daemon('Kirill', 'Daemon');
  expect(player).toEqual(sample);
});

test('testing the properties of a new object Undead', () => {
  const sample = {
    name: 'Boris',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const player = new Undead('Boris', 'Undead');
  expect(player).toEqual(sample);
});

test('error testing for a name less than 2 characters', () => {
  expect(() => { const player = new Character('A', 'Bowman', 100, 1, 25, 25); }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('error testing for a name larger than 10 characters', () => {
  expect(() => { const player = new Character('Aleksandersss', 'Bowman', 100, 1, 25, 25); }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('testing an error for the wrong type', () => {
  expect(() => { const player = new Character('Anna', 'ErrorType', 100, 1, 25, 25); }).toThrow('Тип должен соответствовать одному из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('testing the method levelUp() to increase the level indicators', () => {
  const sample = {
    name: 'Nastya',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  const player = new Character('Nastya', 'Magician', 100, 1, 10, 40);
  player.levelUp();
  expect(player).toEqual(sample);
});

test('error testing when using the method for a dead player', () => {
  const player = new Bowman('Maks', 'Bowman');
  player.health = 0;
  expect(() => player.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test('testing the method damage() affects the unit.', () => {
  const sample = {
    name: 'Fedor',
    type: 'Swordsman',
    health: 91,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const player = new Character('Fedor', 'Swordsman', 100, 1, 40, 10);
  player.damage(10);
  expect(player).toEqual(sample);
});

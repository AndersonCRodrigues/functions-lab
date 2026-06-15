const {
  compareTrue,
  calcArea,
  splitSentence,
  concatName,
  footballPoints,
  highestCount,
  catAndMouse,
  fizzBuzz,
  encode,
  decode,
  techList,
  generatePhoneNumber,
  triangleCheck,
  hydrate,
} = require('./challenges');

describe('Desafio 1 - compareTrue', () => {
  test('retorna false com (false, true)', () => expect(compareTrue(false, true)).toBe(false));
  test('retorna false com (false, false)', () => expect(compareTrue(false, false)).toBe(false));
  test('retorna true com (true, true)', () => expect(compareTrue(true, true)).toBe(true));
});

describe('Desafio 2 - calcArea', () => {
  test('base 10, height 50 => 250', () => expect(calcArea(10, 50)).toBe(250));
  test('base 5, height 2 => 5', () => expect(calcArea(5, 2)).toBe(5));
  test('base 51, height 1 => 25.5', () => expect(calcArea(51, 1)).toBe(25.5));
});

describe('Desafio 3 - splitSentence', () => {
  test('"go Trybe" => ["go", "Trybe"]', () => expect(splitSentence('go Trybe')).toEqual(['go', 'Trybe']));
  test('"vamo que vamo" => ["vamo", "que", "vamo"]', () => expect(splitSentence('vamo que vamo')).toEqual(['vamo', 'que', 'vamo']));
  test('"foguete" => ["foguete"]', () => expect(splitSentence('foguete')).toEqual(['foguete']));
});

describe('Desafio 4 - concatName', () => {
  test('["Lucas","Cassiano","Ferraz","Paolillo"] => "Paolillo, Lucas"', () =>
    expect(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])).toBe('Paolillo, Lucas'));
  test('["foguete","não","tem","ré"] => "ré, foguete"', () =>
    expect(concatName(['foguete', 'não', 'tem', 'ré'])).toBe('ré, foguete'));
  test('["captain","my","captain"] => "captain, captain"', () =>
    expect(concatName(['captain', 'my', 'captain'])).toBe('captain, captain'));
});

describe('Desafio 5 - footballPoints', () => {
  test('14 vitórias, 8 empates => 50', () => expect(footballPoints(14, 8)).toBe(50));
  test('1 vitória, 2 empates => 5', () => expect(footballPoints(1, 2)).toBe(5));
  test('0 vitórias, 0 empates => 0', () => expect(footballPoints(0, 0)).toBe(0));
});

describe('Desafio 6 - highestCount', () => {
  test('[9,1,2,3,9,5,7] => 2', () => expect(highestCount([9, 1, 2, 3, 9, 5, 7])).toBe(2));
  test('[0,4,4,4,9,2,1] => 1', () => expect(highestCount([0, 4, 4, 4, 9, 2, 1])).toBe(1));
  test('[0,0,0] => 3', () => expect(highestCount([0, 0, 0])).toBe(3));
});

describe('Desafio 7 - catAndMouse', () => {
  test('cat2 mais perto => "cat2"', () => expect(catAndMouse(2, 5, 4)).toBe('cat2'));
  test('cat1 mais perto => "cat1"', () => expect(catAndMouse(6, 12, 18)).toBe('cat1'));
  test('mesma distância => "os gatos trombam e o rato foge"', () =>
    expect(catAndMouse(5, 3, 7)).toBe('os gatos trombam e o rato foge'));
});

describe('Desafio 8 - fizzBuzz', () => {
  test('[2,15,7,9,45] => ["bug!","fizzBuzz","bug!","fizz","fizzBuzz"]', () =>
    expect(fizzBuzz([2, 15, 7, 9, 45])).toEqual(['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']));
  test('[7,9] => ["bug!","fizz"]', () => expect(fizzBuzz([7, 9])).toEqual(['bug!', 'fizz']));
  test('[9,25] => ["fizz","buzz"]', () => expect(fizzBuzz([9, 25])).toEqual(['fizz', 'buzz']));
});

describe('Desafio 9 - encode / decode', () => {
  test('encode "hello" => "h2ll4"', () => expect(encode('hello')).toBe('h2ll4'));
  test('encode "How are you today?" => "H4w 1r2 y45 t4d1y?"', () =>
    expect(encode('How are you today?')).toBe('H4w 1r2 y45 t4d1y?'));
  test('decode "h3 th2r2!" => "hi there!"', () => expect(decode('h3 th2r2!')).toBe('hi there!'));
  test('decode "H4w 1r2 y45 t4d1y?" => "How are you today?"', () =>
    expect(decode('H4w 1r2 y45 t4d1y?')).toBe('How are you today?'));
});

describe('Desafio 10 - techList', () => {
  test('retorna lista ordenada com 5 tecnologias', () => {
    const result = techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas');
    expect(result).toEqual([
      { tech: 'CSS', name: 'Lucas' },
      { tech: 'HTML', name: 'Lucas' },
      { tech: 'JavaScript', name: 'Lucas' },
      { tech: 'Jest', name: 'Lucas' },
      { tech: 'React', name: 'Lucas' },
    ]);
  });
  test('retorna "Vazio!" com array vazio', () => expect(techList([], 'Lucas')).toBe('Vazio!'));
});

describe('Desafio 11 (Bônus) - generatePhoneNumber', () => {
  test('array com tamanho diferente de 11 => mensagem de erro', () =>
    expect(generatePhoneNumber([1, 2, 3])).toBe('Array com tamanho incorreto.'));
  test('número menor que 0 => mensagem de erro', () =>
    expect(generatePhoneNumber([-1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])).toBe(
      'não é possível gerar um número de telefone com esses valores'
    ));
  test('número maior que 9 => mensagem de erro', () =>
    expect(generatePhoneNumber([10, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])).toBe(
      'não é possível gerar um número de telefone com esses valores'
    ));
  test('número repetido 3x => mensagem de erro', () =>
    expect(generatePhoneNumber([1, 1, 1, 4, 5, 6, 7, 8, 9, 0, 2])).toBe(
      'não é possível gerar um número de telefone com esses valores'
    ));
  test('[1,2,3,4,5,6,7,8,9,0,1] => "(12) 34567-8901"', () =>
    expect(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])).toBe('(12) 34567-8901'));
});

describe('Desafio 12 (Bônus) - triangleCheck', () => {
  test('triângulo válido (10, 14, 8) => true', () => expect(triangleCheck(10, 14, 8)).toBe(true));
  test('lado maior que soma dos outros => false', () => expect(triangleCheck(1, 2, 10)).toBe(false));
  test('lado igual à diferença dos outros => false', () => expect(triangleCheck(3, 7, 4)).toBe(false));
});

describe('Desafio 13 (Bônus) - hydrate', () => {
  test('"1 cerveja" => "1 copo de água"', () => expect(hydrate('1 cerveja')).toBe('1 copo de água'));
  test('"1 cachaça, 5 cervejas e 1 copo de vinho" => "7 copos de água"', () =>
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água'));
});

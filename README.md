# 🚀 Functions Lab

Desafios de lógica em **JavaScript** e **Python** com correção automática via GitHub Actions.

![Avaliação](https://github.com/AndersonCRodrigues/functions-lab/actions/workflows/tests.yml/badge.svg)

---

## 📁 Estrutura

```
functions-lab/
├── javascript/
│   ├── challenges.js        ← implemente aqui (JS)
│   └── challenges.test.js   ← testes automáticos (não editar)
├── python/
│   ├── challenges.py        ← implemente aqui (Python)
│   └── test_challenges.py   ← testes automáticos (não editar)
```

---

## ⚠️ Regras importantes

- **Não altere o nome das funções** — os testes automáticos dependem dos nomes exatos
- **Não altere os arquivos de teste** (`challenges.test.js` e `test_challenges.py`)
- **Não deixe `console.log` ou `print` de debug** no código antes de enviar
- **O PR só será avaliado se o lint passar** — veja a seção de lint abaixo
- Os parâmetros das funções **podem** ser alterados se necessário

---

## 🛠️ Como entregar

### 1. Clone o repositório
```bash
git clone git@github.com:AndersonCRodrigues/functions-lab.git
cd functions-lab
```

### 2. Crie sua branch com seu nome
```bash
git checkout -b seu-nome-functions-lab
```

### 3. Implemente as funções

**JavaScript** → edite `javascript/challenges.js`
**Python** → edite `python/challenges.py`

### 4. Verifique o lint antes de enviar

```bash
# JavaScript (ESLint)
cd javascript && npm install && npm run lint

# Python (Flake8)
cd python && pip install flake8 && flake8 challenges.py
```

> ⚠️ PRs com erros de lint **não serão aceitos**.

### 5. Rode os testes localmente

```bash
# JavaScript
cd javascript && npm test

# Python
cd python && pip install pytest && pytest -v
```

### 6. Abra o Pull Request

```bash
git add .
git commit -m "feat: implementa desafios"
git push origin seu-nome-functions-lab
```

Abra o PR no GitHub apontando para `main`.
Os testes e o lint rodam automaticamente e você verá a tabela de resultados! ✅

---

## 🎛️ Lint

### JavaScript — ESLint

```bash
cd javascript
npm install
npm run lint
```

Se houver problemas, eles aparecerão no terminal com o arquivo e a linha. Corrija todos antes de abrir o PR.

### Python — Flake8

```bash
cd python
pip install flake8
flake8 challenges.py
```

Regras aplicadas:
- Linha com no máximo **79 caracteres**
- **Complexidade ciclomática máxima de 10** por função (sem funções gigantes ou com muitos `if/else` aninhados)
- Sem imports não utilizados
- Sem variáveis declaradas e nunca usadas

> 💡 Se o Flake8 apontar complexidade alta, divida a lógica em funções auxiliares.

---

## 📋 Desafios

> ⚠️ Leia cada requisito com atenção antes de implementar.

---

### 1 — `compareTrue` / `compare_true`

Implemente usando **somente o operador `&&`** (JS) ou **`and`** (Python).

Recebe dois parâmetros booleanos e:
- Retorna `true` se **ambos** forem verdadeiros
- Retorna `false` se um ou ambos forem falsos

```
compareTrue(true, true)   → true
compareTrue(false, true)  → false
compareTrue(false, false) → false
```

---

### 2 — `calcArea` / `calc_area`

Recebe `base` e `height` de um triângulo e retorna a área.

**Fórmula:** `(base * height) / 2`

```
calcArea(10, 50) → 250
calcArea(5, 2)   → 5
calcArea(51, 1)  → 25.5
```

---

### 3 — `splitSentence` / `split_sentence`

Recebe uma string e retorna um array com as palavras separadas por espaço.

```
splitSentence('go Trybe')     → ['go', 'Trybe']
splitSentence('vamo que vamo') → ['vamo', 'que', 'vamo']
splitSentence('foguete')      → ['foguete']
```

---

### 4 — `concatName` / `concat_name`

Recebe um array de strings e retorna `'ÚLTIMO, PRIMEIRO'`, independente do tamanho do array.

```
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']) → 'Paolillo, Lucas'
concatName(['foguete', 'não', 'tem', 'ré'])             → 'ré, foguete'
concatName(['captain', 'my', 'captain'])                → 'captain, captain'
```

---

### 5 — `footballPoints` / `football_points`

Recebe o número de vitórias (`wins`) e empates (`ties`) e retorna a pontuação total.

- Vitória = **3 pontos**
- Empate = **1 ponto**

```
footballPoints(14, 8) → 50
footballPoints(1, 2)  → 5
footballPoints(0, 0)  → 0
```

---

### 6 — `highestCount` / `highest_count`

Recebe um array de números e retorna quantas vezes o **maior número** se repete.

```
highestCount([9, 1, 2, 3, 9, 5, 7]) → 2
highestCount([0, 4, 4, 4, 9, 2, 1]) → 1
highestCount([0, 0, 0])             → 3
```

---

### 7 — `catAndMouse` / `cat_and_mouse`

Recebe três números: posição do `mouse`, do `cat1` e do `cat2`. Retorna qual gato está mais perto.

- `'cat1'` se cat1 estiver mais perto
- `'cat2'` se cat2 estiver mais perto
- `'os gatos trombam e o rato foge'` se estiverem à mesma distância

```
catAndMouse(2, 5, 4) → 'cat2'
catAndMouse(6, 12, 18) → 'cat1'
catAndMouse(5, 3, 7) → 'os gatos trombam e o rato foge'
```

> 💡 Use valor absoluto para calcular distância: `Math.abs()` (JS) ou `abs()` (Python)

---

### 8 — `fizzBuzz` / `fizz_buzz`

Recebe um array de números e retorna um array de strings:

- `'fizz'` → divisível **só** por 3
- `'buzz'` → divisível **só** por 5
- `'fizzBuzz'` → divisível por 3 **e** 5
- `'bug!'` → não divisível por nenhum

```
fizzBuzz([2, 15, 7, 9, 45]) → ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']
fizzBuzz([7, 9])             → ['bug!', 'fizz']
fizzBuzz([9, 25])            → ['fizz', 'buzz']
```

---

### 9 — `encode` / `decode`

**`encode`**: troca vogais minúsculas por números:
`a→1, e→2, i→3, o→4, u→5`

**`decode`**: faz o inverso:
`1→a, 2→e, 3→i, 4→o, 5→u`

```
encode('hello')          → 'h2ll4'
encode('How are you?')   → 'H4w 1r2 y45?'
decode('h3 th2r2!')      → 'hi there!'
```

---

### 10 — `techList` / `tech_list`

Recebe um array de tecnologias e um nome. Retorna uma lista de objetos `{ tech, name }` ordenada **alfabeticamente** pela tecnologia.

- Retorna `'Vazio!'` se o array estiver vazio

```javascript
techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')
→ [
    { tech: 'CSS', name: 'Lucas' },
    { tech: 'HTML', name: 'Lucas' },
    { tech: 'JavaScript', name: 'Lucas' },
    { tech: 'Jest', name: 'Lucas' },
    { tech: 'React', name: 'Lucas' },
  ]

techList([], 'Lucas') → 'Vazio!'
```

---

### 11 ⭐ — `generatePhoneNumber` / `generate_phone_number`

Recebe um array de **11 números** e retorna um telefone formatado: `(XX) XXXXX-XXXX`

Validações (retornar mensagem de erro se):
- Tamanho diferente de 11 → `'Array com tamanho incorreto.'`
- Algum número < 0 ou > 9, ou algum dígito se repete **3 ou mais vezes** → `'não é possível gerar um número de telefone com esses valores'`

```
generatePhoneNumber([1,2,3,4,5,6,7,8,9,0,1]) → '(12) 34567-8901'
generatePhoneNumber([1,2,3])                  → 'Array com tamanho incorreto.'
generatePhoneNumber([1,1,1,4,5,6,7,8,9,0,2]) → 'não é possível gerar um número de telefone com esses valores'
```

---

### 12 ⭐ — `triangleCheck` / `triangle_check`

Recebe três lados (`lineA`, `lineB`, `lineC`) e retorna `true` se formam um triângulo válido.

Para ser válido, **cada lado** deve ser:
1. **Menor** que a soma dos outros dois
2. **Maior** que o valor absoluto da diferença dos outros dois

```
triangleCheck(10, 14, 8) → true
triangleCheck(1, 2, 10)  → false
triangleCheck(3, 7, 4)   → false
```

> 💡 Pesquise por `Math.abs` (JS) ou `abs()` (Python)

---

### 13 ⭐ — `hydrate`

Recebe uma string com bebidas e quantidades e retorna quantos copos de água beber (1 copo por dose de bebida alcoólica).

- A string sempre terá o formato: `quantidade (número de 1-9) + tipo da bebida`
- Se total = 1 → `'1 copo de água'`
- Se total > 1 → `'X copos de água'`

```
hydrate('1 cerveja')                           → '1 copo de água'
hydrate('1 cachaça, 5 cervejas e 1 vinho')    → '7 copos de água'
```

> 💡 Pesquise como extrair todos os números inteiros de uma string em JS/Python

---

## ✅ Critério de aprovação

| Item | Detalhe |
|---|---|
| Lint | Sem erros de ESLint (JS) ou Flake8 (Python) |
| Obrigatórios | ≥ 70% dos desafios 1–10 passando |
| Bônus | Desafios 11–13 contam no percentual total |

**≥ 70% dos requisitos obrigatórios = Aprovado ✅**
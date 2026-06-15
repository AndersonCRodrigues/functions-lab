# 🚀 Functions Lab

Desafios de lógica em **JavaScript** e **Python** com correção automática via GitHub Actions.

![Avaliação](https://github.com/AndersonCRodrigues/functions-lab/actions/workflows/tests.yml/badge.svg)

---

## 📁 Estrutura

```
functions-lab/
├── .github/
│   └── workflows/
│       └── tests.yml        ← pipeline de CI (não editar)
├── .vscode/
│   ├── tasks.json           ← atalhos de teste no VSCode
│   └── extensions.json      ← extensões recomendadas
├── javascript/
│   ├── challenges.js        ← implemente aqui (JS)
│   └── challenges.test.js   ← testes automáticos (não editar)
├── python/
│   ├── challenges.py        ← implemente aqui (Python)
│   └── test_challenges.py   ← testes automáticos (não editar)
```

---

## ⚠️ Regras importantes

- **Não altere o nome das funções** — os testes dependem dos nomes exatos
- **Não altere os arquivos de teste** (`challenges.test.js` e `test_challenges.py`)
- **Não deixe `console.log` ou `print` de debug** — o lint vai rejeitar
- **O lint precisa passar** para os testes rodarem no CI
- Os parâmetros das funções **podem** ser alterados se necessário
- **Não é possível fazer merge direto na `main`** — use sempre PR

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

### 3. Instale as dependências

```bash
# JavaScript
cd javascript && npm install && cd ..

# Python
cd python && pip install pytest flake8 pytest-json-report && cd ..
```

### 4. Implemente as funções

- **JavaScript** → edite `javascript/challenges.js`
- **Python** → edite `python/challenges.py`

### 5. Rode os testes localmente antes de enviar

---

## 🧪 Rodando testes localmente

### Opção A — Terminal

```bash
# JavaScript: testes
cd javascript && npm test

# JavaScript: lint
cd javascript && npm run lint

# Python: testes
cd python && pytest -v

# Python: lint
cd python && flake8 challenges.py
```

### Opção B — VSCode (recomendado)

1. Abra o projeto no VSCode
2. Instale as extensões recomendadas quando solicitado (ou vá em `Extensions > @recommended`)
3. Use `Ctrl+Shift+P` → **Tasks: Run Task** e escolha:
   - `JS: Rodar testes`
   - `JS: Lint`
   - `Python: Rodar testes`
   - `Python: Lint`
   - `Rodar tudo (JS + Python)`
4. Para JavaScript, o painel **Testing** (ícone de frasco no lado esquerdo) mostra cada teste com ✅/❌ em tempo real graças à extensão `vscode-jest`
5. Para Python, o painel **Testing** funciona com a extensão `Python Test Adapter`

> **Dica:** pressione `Ctrl+Shift+T` (ou `Cmd+Shift+T` no Mac) para abrir o painel Testing diretamente.

### Interpretando os resultados

| Saída | Significado |
|---|---|
| `PASS` / `passed` | Função correta ✅ |
| `FAIL` / `failed` | Algo está errado — leia o erro abaixo do teste |
| `ESLint: error` | Problema de lint — corrija antes de enviar o PR |
| `E501` (flake8) | Linha muito longa (máx 79 chars) |
| `C901` (flake8) | Função com complexidade alta — divida em funções menores |

---

## 6. Envie e abra o PR

```bash
git add .
git commit -m "feat: implementa desafios"
git push origin seu-nome-functions-lab
```

Abra o Pull Request no GitHub apontando para `main`. O CI roda automaticamente e posta os resultados como comentário no PR.

---

## 🎛️ Lint

### JavaScript — ESLint

```bash
cd javascript
npm run lint
```

Regras aplicadas: `eslint:recommended` + `no-console` (warn) + `no-unused-vars` (error) + complexidade máxima 10.

### Python — Flake8

```bash
cd python
flake8 challenges.py
```

Regras: linha máx 79 chars, complexidade ciclomática máx 10, sem imports não utilizados.

> Se o Flake8 reclamar de complexidade (`C901`), divida a lógica em funções auxiliares.

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
splitSentence('go Trybe')      → ['go', 'Trybe']
splitSentence('vamo que vamo') → ['vamo', 'que', 'vamo']
splitSentence('foguete')       → ['foguete']
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
catAndMouse(2, 5, 4)  → 'cat2'
catAndMouse(6, 12, 18) → 'cat1'
catAndMouse(5, 3, 7)  → 'os gatos trombam e o rato foge'
```

> 💡 Use valor absoluto: `Math.abs()` (JS) ou `abs()` (Python)

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

**`encode`**: troca vogais minúsculas por números: `a→1, e→2, i→3, o→4, u→5`

**`decode`**: faz o inverso: `1→a, 2→e, 3→i, 4→o, 5→u`

```
encode('hello')        → 'h2ll4'
encode('How are you?') → 'H4w 1r2 y45?'
decode('h3 th2r2!')    → 'hi there!'
```

---

### 10 — `techList` / `tech_list`

Recebe um array de tecnologias e um nome. Retorna uma lista de objetos `{ tech, name }` ordenada **alfabeticamente** pela tecnologia.

- Retorna `'Vazio!'` se o array estiver vazio.

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

---

### 13 ⭐ — `hydrate`

Recebe uma string com bebidas e quantidades e retorna quantos copos de água beber (1 por dose).

- A string sempre terá o formato: `quantidade (1-9) + tipo da bebida`
- Se total = 1 → `'1 copo de água'`
- Se total > 1 → `'X copos de água'`

```
hydrate('1 cerveja')                        → '1 copo de água'
hydrate('1 cachaça, 5 cervejas e 1 vinho') → '7 copos de água'
```

---

## ✅ Critério de aprovação

| Item | Detalhe |
|---|---|
| Lint | Sem erros de ESLint (JS) ou Flake8 (Python) |
| Obrigatórios | ≥ 70% dos desafios 1–10 passando |
| Bônus | Desafios 11–13 contam no percentual total |

**≥ 70% dos requisitos obrigatórios = Aprovado ✅**

---

## 🔒 Proteção da branch `main`

A branch `main` está protegida. **Não é possível fazer push direto ou merge sem PR.**

Para configurar em um fork ou repositório próprio:
1. Vá em **Settings → Branches → Add branch protection rule**
2. Branch name pattern: `main`
3. Marque: **Require a pull request before merging**
4. Marque: **Require status checks to pass before merging**
5. Adicione os checks: `Lint JavaScript`, `Lint Python`, `Testes JavaScript`, `Testes Python`
6. Marque: **Do not allow bypassing the above settings**
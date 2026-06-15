# 🚀 Functions Lab

Desafios de lógica em **JavaScript** e **Python** com correção automática via GitHub Actions.

![Avaliação](https://github.com/AndersonCRodrigues/functions-lab/actions/workflows/tests.yml/badge.svg)

---

## 📁 Estrutura do projeto

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
- **Não faça push direto na `main`** — use sempre PR
- Os parâmetros das funções **podem** ser alterados se necessário

---

## 🛠️ Passo a passo para entregar

### 1. Clone o repositório

```bash
git clone git@github.com:AndersonCRodrigues/functions-lab.git
cd functions-lab
```

> 💡 Se nunca configurou o Git, rode antes:
> ```bash
> git config --global user.name "Seu Nome"
> git config --global user.email "seu@email.com"
> ```

---

### 2. Crie sua branch

Você **nunca** vai trabalhar direto na `main`. Crie uma branch com seu nome:

```bash
git checkout -b seu-nome-functions-lab
```

Exemplo: `git checkout -b anderson-rodrigues-functions-lab`

Para confirmar que está na branch certa:

```bash
git branch
```

A branch ativa aparece com `*` na frente.

---

### 3. Instale as dependências

```bash
# JavaScript
cd javascript && npm install && cd ..

# Python
cd python && pip install pytest flake8 pytest-json-report && cd ..
```

---

### 4. Implemente as funções

- **JavaScript** → edite `javascript/challenges.js`
- **Python** → edite `python/challenges.py`

Leia os requisitos de cada desafio com atenção antes de implementar.

---

### 5. Rode os testes localmente

Antes de enviar, verifique se seu código está correto e sem erros de lint.

#### Opção A — Terminal

```bash
# JavaScript
cd javascript
npm test          # roda os testes
npm run lint      # verifica o lint

# Python
cd python
pytest -v         # roda os testes
flake8 challenges.py  # verifica o lint
```

#### Opção B — VSCode (recomendado para iniciantes)

1. Abra o projeto no VSCode
2. Quando aparecer o popup de extensões recomendadas, clique em **Install All**
   - Se não aparecer, vá em `Extensions (Ctrl+Shift+X)` → digite `@recommended`
3. Use `Ctrl+Shift+P` → **Tasks: Run Task** e escolha:
   - `JS: Rodar testes` — roda o Jest
   - `JS: Lint` — verifica o ESLint
   - `Python: Rodar testes` — roda o pytest
   - `Python: Lint` — verifica o Flake8
   - `Rodar tudo (JS + Python)` — roda tudo de uma vez
4. O painel **Testing** (ícone de frasco 🧪 no menu lateral) mostra cada teste com ✅/❌ em tempo real

---

### 6. Salve seu progresso com commits

Faça commits sempre que terminar uma função ou um grupo de funções. Não espere terminar tudo:

```bash
git status                    # veja o que mudou
git add javascript/challenges.js python/challenges.py
git commit -m "feat: implementa compareTrue e calcArea"
```

> 💡 Boas mensagens de commit descrevem o que foi feito:
> - ✅ `feat: implementa fizzBuzz`
> - ✅ `fix: corrige lógica do catAndMouse`
> - ❌ `alterações`
> - ❌ `atualizei o arquivo`

---

### 7. Envie para o GitHub

```bash
git push origin seu-nome-functions-lab
```

Na primeira vez, o Git pode pedir para confirmar o remote — aceite.

---

### 8. Abra o Pull Request

1. Acesse o repositório no GitHub
2. Clique no botão **"Compare & pull request"** que aparece automaticamente
3. **Título do PR:** `[Seu Nome] Functions Lab`
   - Exemplo: `[Anderson Rodrigues] Functions Lab`
4. Clique em **"Create pull request"**

O CI roda automaticamente e posta um comentário no PR com o resultado de cada função. ✅

---

### 9. Acompanhe o resultado

No seu PR, role até o comentário do bot. Você verá:

- Uma tabela com ✅/❌ por linguagem e etapa
- Os detalhes de cada função clicando em **"Detalhes JavaScript"** e **"Detalhes Python"**
- O resultado completo com percentual clicando em **Details** ao lado de cada check

Se algo falhar, corrija localmente, faça um novo commit e push — o CI roda novamente automaticamente.

---

## 🔄 Atualizando após o primeiro push

Depois que já fez o primeiro push, o fluxo é simples:

```bash
git add .
git commit -m "feat: implementa mais funções"
git push
```

---

## 🎛️ Entendendo os erros

### Erros de lint

| Mensagem | O que significa | Como resolver |
|---|---|---|
| `no-console` | Tem `console.log` no código | Remova antes de enviar |
| `no-unused-vars` | Variável declarada e não usada | Remova a variável |
| `complexity` | Função com muitos `if/else` aninhados | Divida em funções menores |
| `E501` (flake8) | Linha com mais de 79 caracteres | Quebre a linha |
| `C901` (flake8) | Complexidade ciclomática alta | Divida em funções menores |

### Erros de teste

| Saída | Significado |
|---|---|
| `✅ passed` | Função correta |
| `❌ failed` | Algo está errado — leia a mensagem de erro abaixo do teste |
| `⏭️ skipped` | Teste pulado porque o lint não passou |

---

## ✅ Critério de aprovação

| Item | Requisito |
|---|---|
| Lint | Sem erros de ESLint (JS) ou Flake8 (Python) |
| Obrigatórios | ≥ 70% dos desafios 1–10 passando |
| Bônus | Desafios 11–13 contam no percentual total |

**≥ 70% dos requisitos obrigatórios = Aprovado ✅**

---

## 📋 Desafios

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
catAndMouse(2, 5, 4)   → 'cat2'
catAndMouse(6, 12, 18) → 'cat1'
catAndMouse(5, 3, 7)   → 'os gatos trombam e o rato foge'
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
encode('hello')          → 'h2ll4'
encode('How are you?')   → 'H4w 1r2 y45?'
decode('h3 th2r2!')      → 'hi there!'
decode('H4w 1r2 y45?')   → 'How are you?'
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

Validações:
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

Para ser válido, **cada lado** deve ser menor que a soma dos outros dois e maior que o valor absoluto da diferença dos outros dois.

```
triangleCheck(10, 14, 8) → true
triangleCheck(1, 2, 10)  → false
triangleCheck(3, 7, 4)   → false
```

> 💡 Use `Math.abs()` (JS) ou `abs()` (Python)

---

### 13 ⭐ — `hydrate`

Recebe uma string com bebidas e quantidades e retorna quantos copos de água beber (1 por dose).

- Se total = 1 → `'1 copo de água'`
- Se total > 1 → `'X copos de água'`

```
hydrate('1 cerveja')                        → '1 copo de água'
hydrate('1 cachaça, 5 cervejas e 1 vinho') → '7 copos de água'
```

> 💡 Pesquise como extrair todos os números inteiros de uma string em JS/Python
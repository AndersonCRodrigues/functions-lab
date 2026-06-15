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

## 🛠️ Como entregar

### 1. Clone o repositório
```bash
git clone git@github.com:AndersonCRodrigues/functions-lab.git
cd functions-lab
```

### 2. Crie sua branch com seu nome
```bash
git checkout -b seu-nome-playground
```

### 3. Implemente as funções

**JavaScript** → edite `javascript/challenges.js`
**Python** → edite `python/challenges.py`

### 4. Teste localmente antes de enviar

```bash
# JavaScript
cd javascript && npm install && npm test

# Python
cd python && pip install pytest && pytest -v
```

### 5. Abra o Pull Request

```bash
git add .
git commit -m "feat: implementa desafios"
git push origin seu-nome-playground
```

Abra o PR no GitHub apontando para `main`.
Os testes rodam automaticamente e você verá a tabela de resultados! ✅

---

## 📋 Desafios

| # | Função JS / Python | Descrição |
|---|---|---|
| 1 | `compareTrue` / `compare_true` | Retorna `true` só se ambos os parâmetros forem `true` |
| 2 | `calcArea` / `calc_area` | Calcula a área de um triângulo `(base * height) / 2` |
| 3 | `splitSentence` / `split_sentence` | Divide uma frase em array de palavras |
| 4 | `concatName` / `concat_name` | Retorna `'último, primeiro'` de um array |
| 5 | `footballPoints` / `football_points` | Calcula pontos: vitória=3, empate=1 |
| 6 | `highestCount` / `highest_count` | Conta repetições do maior número |
| 7 | `catAndMouse` / `cat_and_mouse` | Qual gato está mais perto do rato? |
| 8 | `fizzBuzz` / `fizz_buzz` | Retorna fizz/buzz/fizzBuzz/bug! para cada número |
| 9 | `encode` / `decode` | Troca vogais por números e vice-versa |
| 10 | `techList` / `tech_list` | Lista de objetos `{ tech, name }` ordenada |
| 11 ⭐ | `generatePhoneNumber` / `generate_phone_number` | Formata array de 11 dígitos como telefone |
| 12 ⭐ | `triangleCheck` / `triangle_check` | Verifica se três lados formam um triângulo |
| 13 ⭐ | `hydrate` | Conta copos de água pela quantidade de bebidas |

> ⭐ = Bônus

---

## ✅ Critério de aprovação

- **≥ 70%** dos requisitos obrigatórios (1–10) passando = **Aprovado**
- Os bônus (11–13) contam para o percentual total mas não para aprovação
# Ino Games - Technical Assessment

## Resumo da solução

Este repositório contém dois desafios relacionados à lógica de uma slot machine:

- **Winning Combinations:** identifica combinações vencedoras em uma linha, considerando 3 ou mais símbolos consecutivos e o símbolo `0` como wild.
- **Cadence:** calcula o tempo de parada de cada coluna, alternando entre cadência normal e cadência de antecipação conforme a quantidade de símbolos especiais.

## Implementações realizadas

### Winning Combinations

A função `call(lines)` foi implementada para:

- identificar intervalos com 3 ou mais símbolos consecutivos;
- considerar símbolos pagantes de `1` a `9`;
- tratar `0` como wild;
- invalidar símbolos não pagantes entre `10` e `15`;
- manter apenas combinações maximais;
- remover combinações compostas apenas por wild quando já existir uma combinação pagante equivalente.

### Cadence

A função `slotCadence(symbols)` foi implementada para:

- iniciar a primeira coluna com tempo `0`;
- contar símbolos especiais presentes nas colunas anteriores;
- aplicar cadência de antecipação quando a quantidade estiver entre `minToAnticipate` e `maxToAnticipate`;
- retornar a cadência acumulada de parada para cada coluna.

## Resultado

- 27/27 testes passando em **Winning Combinations**
- Nenhum teste, arquivo de configuração ou estrutura do projeto foi alterado
- Apenas as funções pendentes foram implementadas

---

## Como executar

### Instalação

```bash
npm install
```

### Testes

```bash
# Todos os testes
npm test

# Modo watch
npm run test:watch

# Apenas Winning Combinations (Windows)
npx vitest run "Winning Combinations/tests/winning-combinations.test.ts"
```

### Cadence

```bash
cd Cadence
npx tsx SlotMachineCadence.ts
```

---

## Estrutura do projeto

```text
├── Cadence/
│   └── SlotMachineCadence.ts
└── Winning Combinations/
    ├── winning-combinations.ts
    └── tests/
        └── winning-combinations.test.ts
```

---

## Licença

Este projeto é de uso restrito para avaliação técnica da **Ino Games**. Consulte o arquivo [LICENSE](LICENSE) para os termos completos.

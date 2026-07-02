# Ino Games - Technical Assessment

## Solution overview

This repository contains two challenges related to slot machine logic:

- **Winning Combinations:** identifies winning combinations on a payline, considering 3 or more consecutive symbols and symbol `0` as wild.
- **Cadence:** calculates the stop time for each column, switching between normal cadence and anticipation cadence based on the number of special symbols.

## Implementations

### Winning Combinations

The `call(lines)` function was implemented to:

- identify intervals with 3 or more consecutive symbols;
- consider paying symbols from `1` to `9`;
- treat `0` as wild;
- invalidate non-paying symbols between `10` and `15`;
- keep only maximal combinations;
- remove wild-only combinations when an equivalent paying combination already exists.

### Cadence

The `slotCadence(symbols)` function was implemented to:

- start the first column at time `0`;
- count special symbols present in previous columns;
- apply anticipation cadence when the count is between `minToAnticipate` and `maxToAnticipate`;
- return the cumulative stop cadence for each column.

## Results

- 27/27 tests passing in **Winning Combinations**
- No tests, configuration files, or project structure were changed
- Only the pending functions were implemented

---

## How to run

### Installation

```bash
npm install
```

### Tests

```bash
# All tests
npm test

# Watch mode
npm run test:watch

# Winning Combinations only (Windows)
npx vitest run "Winning Combinations/tests/winning-combinations.test.ts"
```

### Cadence

```bash
cd Cadence
npx tsx SlotMachineCadence.ts
```

---

## Project structure

```text
├── Cadence/
│   └── SlotMachineCadence.ts
└── Winning Combinations/
    ├── winning-combinations.ts
    └── tests/
        └── winning-combinations.test.ts
```

---

## License

This project is restricted to technical assessment use by **Ino Games**. See the [LICENSE](LICENSE) file for full terms.

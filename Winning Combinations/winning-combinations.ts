
type WinningCombinationsResult = [number, number[]][];

const PAYING_SYMBOL_MIN = 1;
const PAYING_SYMBOL_MAX = 9;

function isPayingSymbol(symbol: number): boolean {
  return symbol >= PAYING_SYMBOL_MIN && symbol <= PAYING_SYMBOL_MAX;
}

function isWildSymbol(symbol: number): boolean {
  return symbol === 0;
}

function getCombinationSymbol(lines: number[], start: number, end: number): number | null {
  let symbol: number | null = null;

  for (let index = start; index <= end; index += 1) {
    const current = lines[index];

    if (isWildSymbol(current)) {
      continue;
    }

    if (!isPayingSymbol(current)) {
      return null;
    }

    if (symbol === null) {
      symbol = current;
      continue;
    }

    if (symbol !== current) {
      return null;
    }
  }

  return symbol ?? 0;
}

function isValidInterval(lines: number[], start: number, end: number): number | null {
  if (end - start + 1 < 3) {
    return null;
  }

  return getCombinationSymbol(lines, start, end);
}

function canExtendInterval(lines: number[], start: number, end: number, symbol: number): boolean {
  if (start > 0) {
    const leftSymbol = getCombinationSymbol(lines, start - 1, end);
    if (leftSymbol === symbol) {
      return true;
    }
  }

  if (end < lines.length - 1) {
    const rightSymbol = getCombinationSymbol(lines, start, end + 1);
    if (rightSymbol === symbol) {
      return true;
    }
  }

  return false;
}

function call(lines: number[]): WinningCombinationsResult {
  const combinations: WinningCombinationsResult = [];

  for (let start = 0; start < lines.length; start += 1) {
    for (let end = start + 2; end < lines.length; end += 1) {
      const symbol = isValidInterval(lines, start, end);

      if (symbol === null) {
        continue;
      }

      if (canExtendInterval(lines, start, end, symbol)) {
        continue;
      }

      const positions = Array.from({ length: end - start + 1 }, (_, offset) => start + offset);
      combinations.push([symbol, positions]);
    }
  }

  return combinations.filter(([symbol, positions]) => {
    if (symbol !== 0) {
      return true;
    }

    return !combinations.some(([otherSymbol, otherPositions]) => {
      if (otherSymbol === 0) {
        return false;
      }

      return positions.every((position) => otherPositions.includes(position));
    });
  });
}

export const WinningCombinations = { call };

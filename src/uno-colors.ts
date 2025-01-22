import type { UnoColors } from './types'
import color from './utils/color'

function generateColorGradation(base: string): Record<string, string> {
  const baseResult: Record<string, string> = {
    DEFAULT: base
  }

  let i = 0
  while (i < 9) {
    i++

    const center = 4

    if (i < center) {
      baseResult[i] = color(base).darken(0.1 * (center - i)).hex()
      continue
    }

    baseResult[i] = color(base).lighten(0.1 * (i - center)).hex()
  }

  return baseResult
}

export function unoColors<
  T extends Record<string, string>
>(colors: T): UnoColors<T> {
  return Object.entries(colors)
    .reduce<UnoColors<T>>(
      (acc, [key, value]) => {
        return {
          ...acc,
          [key]: generateColorGradation(value)
        }
      },
      {} as UnoColors<T>
    )
}

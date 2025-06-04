import type { UnoColors } from './types'
import color from './utils/color'

const CENTER = 4

function generateColorGradation(base: string): Record<string, string> {
  const baseResult: Record<string, string> = {
    DEFAULT: base
  }

  let i = 0
  while (i < 9) {
    i++

    if (i < CENTER) {
      baseResult[i] = color(base).lighten(0.1 * (CENTER - i)).hex()
      continue
    }

    baseResult[i] = color(base).darken(0.1 * (i - CENTER)).hex()
  }

  return baseResult
}

function mapDeepColors(obj: any): any {
  if (typeof obj === 'string') {
    return generateColorGradation(obj)
  }
  if (typeof obj === 'object' && obj !== null) {
    const result: any = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
      result[key] = mapDeepColors(obj[key])
    }
    return result
  }
  return obj
}

export function unoColors<
  T extends Record<string, any>
>(colors: T): UnoColors<T> {
  return mapDeepColors(colors)
}

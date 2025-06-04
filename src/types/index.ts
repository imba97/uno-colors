export type IndexedProperties<N extends number, T extends number[] = []> = T['length'] extends N
  ? { [K in keyof T]: string }
  : IndexedProperties<N, [...T, T['length']]>

export interface UnoColor extends IndexedProperties<10> {
  DEFAULT: string
}

type UnoColorsDeep<T> = T extends string
  ? UnoColor
  : T extends object
    ? { [K in keyof T]: UnoColorsDeep<T[K]> }
    : T

export type UnoColors<T> = UnoColorsDeep<T>

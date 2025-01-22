export type IndexedProperties<N extends number, T extends number[] = []> = T['length'] extends N
  ? { [K in keyof T]: string }
  : IndexedProperties<N, [...T, T['length']]>

export interface UnoColor extends IndexedProperties<10> {
  DEFAULT: string
}

export type UnoColors<T extends Record<string, string>> = {
  [K in keyof T]: UnoColor
}

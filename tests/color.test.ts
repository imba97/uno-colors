import { describe, expect, it } from 'vitest'
import color from '../src/utils/color'

describe('colorUtil', () => {
  it('should return lighten color', () => {
    const hexColor = '#330000'

    expect(color(hexColor).lighten(0.1).hex()).toBe('#380000')
    expect(color(hexColor).lighten(0.2).hex()).toBe('#3d0000')
    expect(color(hexColor).lighten(0.3).hex()).toBe('#420000')
    expect(color(hexColor).lighten(0.4).hex()).toBe('#470000')
    expect(color(hexColor).lighten(0.5).hex()).toBe('#4d0000')
  })

  it('should return darken color', () => {
    const hexColor = '#ff0000'

    expect(color(hexColor).darken(0.1).hex()).toBe('#e60000')
    expect(color(hexColor).darken(0.2).hex()).toBe('#cc0000')
    expect(color(hexColor).darken(0.3).hex()).toBe('#b30000')
    expect(color(hexColor).darken(0.4).hex()).toBe('#990000')
    expect(color(hexColor).darken(0.5).hex()).toBe('#800000')
  })
})

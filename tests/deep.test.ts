import { describe, expect, it } from 'vitest'
import { unoColors } from '../src/index'

describe('deepColorObject', () => {
  it('should return a deep color gradation', () => {
    const colors = unoColors({
      text: {
        primary: '#4285f4'
      }
    })

    expect(colors).toEqual({
      text: {
        primary: {
          1: '#56adff',
          2: '#4fa0ff',
          3: '#4992ff',
          4: '#4285f4',
          5: '#3b78dc',
          6: '#356ac3',
          7: '#2e5dab',
          8: '#285092',
          9: '#21437a',
          DEFAULT: '#4285f4'
        }
      }
    })
  })
})

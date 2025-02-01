import { describe, expect, it } from 'vitest'
import { unoColors } from '../src/index'

describe('unoColors', () => {
  it('should return a color gradation', () => {
    const colors = unoColors({
      primary: '#4285f4',
      secondary: '#ea4335',
      tertiary: '#34a853'
    })

    expect(colors).toEqual({
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
      },
      secondary: {
        1: '#ff5745',
        2: '#ff5040',
        3: '#ff4a3a',
        4: '#ea4335',
        5: '#d33c30',
        6: '#bb362a',
        7: '#a42f25',
        8: '#8c2820',
        9: '#75221b',
        DEFAULT: '#ea4335'
      },
      tertiary: {
        1: '#44da6c',
        2: '#3eca64',
        3: '#39b95b',
        4: '#34a853',
        5: '#2f974b',
        6: '#2a8642',
        7: '#24763a',
        8: '#1f6532',
        9: '#1a542a',
        DEFAULT: '#34a853'
      }
    })
  })
})

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
        1: '#2e5dab',
        2: '#356ac3',
        3: '#3b78dc',
        4: '#4285f4',
        5: '#4992ff',
        6: '#4fa0ff',
        7: '#56adff',
        8: '#5cbaff',
        9: '#63c8ff',
        DEFAULT: '#4285f4'
      },
      secondary: {
        1: '#a42f25',
        2: '#bb362a',
        3: '#d33c30',
        4: '#ea4335',
        5: '#ff4a3a',
        6: '#ff5040',
        7: '#ff5745',
        8: '#ff5e4a',
        9: '#ff6550',
        DEFAULT: '#ea4335'
      },
      tertiary: {
        1: '#24763a',
        2: '#2a8642',
        3: '#2f974b',
        4: '#34a853',
        5: '#39b95b',
        6: '#3eca64',
        7: '#44da6c',
        8: '#49eb74',
        9: '#4efc7d',
        DEFAULT: '#34a853'
      }
    })
  })
})

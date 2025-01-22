interface RGB {
  r: number
  g: number
  b: number
}

class Color {
  private hexValue: string
  private rgbValue: RGB

  constructor(hex: string) {
    this.hexValue = this.normalizeHex(hex)
    this.rgbValue = this.hex2rgb()
  }

  // darken 方法
  darken(percent: number): this {
    const { r, g, b } = this.rgbValue

    this.updateColor({
      r: Math.max(0, r - (r * percent)),
      g: Math.max(0, g - (g * percent)),
      b: Math.max(0, b - (b * percent))
    })

    return this
  }

  // lighten 方法
  lighten(percent: number): this {
    const { r, g, b } = this.rgbValue

    this.updateColor({
      r: Math.min(255, r + (r * percent)),
      g: Math.min(255, g + (g * percent)),
      b: Math.min(255, b + (b * percent))
    })

    return this
  }

  // 返回最终的 hex 颜色
  hex(): string {
    return `#${this.hexValue}`
  }

  private updateColor({ r, g, b }: RGB): void {
    this.rgbValue = { r, g, b }
    this.hexValue = `${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`
  }

  private hex2rgb(): RGB {
    return {
      r: Number.parseInt(this.hexValue.substring(0, 2), 16),
      g: Number.parseInt(this.hexValue.substring(2, 4), 16),
      b: Number.parseInt(this.hexValue.substring(4, 6), 16)
    }
  }

  // 内部方法：处理简写 HEX 颜色
  private normalizeHex(hex: string): string {
    hex = hex.replace(/^#/, '') // 移除可能的 '#' 符号

    // 如果是 3 位格式（如 #ccc 或 #f00），则转换为 6 位
    if (hex.length === 3) {
      hex = hex.split('').map(x => x + x).join('')
    }

    // 如果是 6 位格式，则直接返回
    return hex.length === 6 ? hex : '000000' // 默认返回黑色
  }
}

function color(hex: string): Color {
  return new Color(hex)
}

export default color

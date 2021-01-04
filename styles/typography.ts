import { TextStyle } from "react-native"
import { systemWeights } from "react-native-typography"

type FontSize = "x10" | "x20" | "x30" | "x40" | "x50"
export const fontSize: Record<FontSize, TextStyle> = {
  x10: {
    fontSize: 13,
  },
  x20: {
    fontSize: 16,
  },
  x30: {
    fontSize: 19,
  },
  x40: {
    fontSize: 24,
  },
  x50: {
    fontSize: 32,
  },
}

type FontWeight = "regular" | "semibold" | "bold"
export const fontWeight: Record<FontWeight, TextStyle> = {
  regular: {
    ...systemWeights.regular,
  },
  semibold: {
    ...systemWeights.semibold,
  },
  bold: {
    ...systemWeights.bold,
  },
}

type LineHeight = "x10" | "x20" | "x30" | "x40"
export const lineHeight: Record<LineHeight, TextStyle> = {
  x10: {
    lineHeight: 12,
  },
  x20: {
    lineHeight: 18,
  },
  x30: {
    lineHeight: 22,
  },
  x40: {
    lineHeight: 26,
  },
}

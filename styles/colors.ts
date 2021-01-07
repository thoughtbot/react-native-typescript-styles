type Neutral = "white" | "s100" | "s300" | "s500" | "s700" | "s900" | "black"
export const neutral: Record<Neutral, string> = {
  white: "#ffffff",
  s100: "#e9eaf0",
  s300: "#d6d6da",
  s500: "#c5c5c9",
  s700: "#3c475b",
  s900: "#1c2537",
  black: "#000000",
}

type Primary = "s100" | "s300"
export const primary: Record<Primary, string> = {
  s100: "#4051db",
  s300: "#4754c5",
}

type Secondary = "s100" | "s300"
export const secondary: Record<Secondary, string> = {
  s100: "#f8f8ff",
  s300: "#e5e7fa",
}

type Affordance =
  | "danger10"
  | "danger25"
  | "success10"
  | "success25"
  | "warning10"
  | "warning25"
export const affordance: Record<Affordance, string> = {
  danger10: "fff0f0",
  danger25: "#ffe0e0",
  success10: "#f2fcf4",
  success25: "#deffe4",
  warning10: "#f9edcc",
  warning25: "#ffdc6f",
}

type Background = "primaryLight" | "primaryDark" | "secondaryLight"
export const background: Record<Background, string> = {
  primaryLight: neutral.white,
  primaryDark: primary.s300,
  secondaryLight: secondary.s100,
}

const applyOpacity = (hexColor: string, opacity: number): string => {
  const red = parseInt(hexColor.slice(1, 3), 16)
  const green = parseInt(hexColor.slice(3, 5), 16)
  const blue = parseInt(hexColor.slice(5, 7), 16)

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`
}

type Overlay = "transparent" | "neutral30"
export const overlay: Record<Overlay, string> = {
  transparent: "rgba(255, 255, 255, 0)",
  neutral30: applyOpacity(neutral.s300, 0.4),
}

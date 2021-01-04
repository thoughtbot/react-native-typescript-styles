type Primary = "blue"
export const primary: Record<Primary, string> = {
  blue: "#007a7d",
}

type Neutral =
  | "white"
  | "gray6"
  | "gray5"
  | "gray4"
  | "gray3"
  | "gray2"
  | "gray"
  | "black"
export const neutral: Record<Neutral, string> = {
  white: "#ffffff",
  gray6: "#e8e8e8",
  gray5: "#d3d4d3",
  gray4: "#bec0bf",
  gray3: "#a1a4a2",
  gray2: "#8d908e",
  gray: "#707371",
  black: "#000000",
}

type Utility = "transparent"
export const utility: Record<Utility, string> = {
  transparent: "rgba(255, 255, 255, 0)",
}

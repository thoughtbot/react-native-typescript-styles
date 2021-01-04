# react-native-typescript-styles

Kick-start your new React Native TypeScript project with simple, organized
styles.

React Native has no framework for structuring styles, so we created this set of
style modules for new React Native projects. While these styles are **not
visually opinionated**, the **organization** of the style code is carefully
considered.

The styles are separated by category into modules, including `Colors`, `Sizing`,
and `Buttons`. Each module contains a set of objects which provide styles for a
specific kind of thing within the module category. For example, the `Colors`
module provides objects for `primary` and `neutral` colors. Finally, each of
these objects itself provides key/value pairs for specific styles: in this case,
particular primary and neutral colors.

Styles are then used as such:

```typescript
color: Colors.primary.blue
```

## Getting Started

1. Place the `styles` directory in your project, co-located with the rest of
   your application source code

2. Install
   [react-native-typography](https://github.com/hectahertz/react-native-typography).
   This library makes it easy to use the default system font families and
   weights on both iOS and Android.

   ```
   yarn add react-native-typography
   ```

## How to Use

1. Import the styles modules in your view components

```typescript
import { Buttons, Colors, Outlines, Sizing, Typography } from "../styles";
```

2. Use the styles

```typescript
const style = StyleSheet.create({
  header: {
    paddingBottom: Sizing.layout.x20,
    borderBottomWidth: Outlines.borderWidth.thin,
    borderColor: Colors.neutral.gray6,
  },
  headerText: {
    ...Typography.fontSize.x50,
    ...Typography.fontWeight.semibold,
  },
  button: {
    ...Buttons.bar.primary,
  },
  buttonText: {
    ...Buttons.barText.primary,
  },
});
```

3. Update the styles modules with your custom theme as needed

```typescript
// colors.ts

type Brand = "primary" | "secondary";
export const brand: Record<Brand, string> = {
  primary: "#0c00a6",
  secondary: "#f03f0a",
};
```

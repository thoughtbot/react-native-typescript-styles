# react-native-typescript-styles

Kick-start your new React Native TypeScript project with simple, organized
styles.

React Native has no standard framework for structuring styles. This results in
each project using a unique structure, which makes it harder to switch between
projects and work efficiently.

This project is a starter framework for organizing styles in new React Native
projects.

#### How it Looks

```typescript
color: Colors.primary.blue,
height: Sizing.layout.x20,
borderWidth: Outlines.borderWidth.thin
```

## Setup

1. Place the `styles` directory in your project.

2. Install [react-native-typography](https://github.com/hectahertz/react-native-typography).
   ```
   yarn add react-native-typography
   ```

> The Typography module uses this library as it makes it easy to use the default
> system font families and weights on both iOS and Android.


## Usage

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

3. Update the styles modules with your project's styles as needed

```typescript
// colors.ts

type Brand = "primary" | "secondary";
export const brand: Record<Brand, string> = {
  primary: "#0c00a6",
  secondary: "#f03f0a",
};
```

## Example

Check out the [ExampleComponent](https://github.com/thoughtbot/react-native-typescript-styles/blob/main/ExampleComponent.tsx).

<img src="https://github.com/thoughtbot/react-native-typescript-styles/blob/main/image.png" alt="An example of a view in React Native that uses this style library" width="500"/>

## Philosophy

This project is intended to establish a structure for organizing a design
system. Therefore, the styles themselves are not opinionated in terms of visual
design. Users are expected to adapt the styles to the needs of their project.
This may include changing or adding colors, typography, buttons, etc.

The styles within this project are separated by category into modules, including
`Colors`, `Sizing`, and `Buttons`. Each module contains a set of objects which
provide styles for a specific kind of thing within the module category. For
example, the `Colors` module provides objects for `primary` and `neutral`
colors. Finally, each of these objects itself provides key/value pairs for
specific styles: in this case, particular primary and neutral colors.

Styles are then used as such:

```typescript
color: Colors.primary.blue
```

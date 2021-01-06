# Style Guide

## Keep a single styles folder, always import from the index

A single import path is more maintainable and easier to use.

```
- styles/
  - index.ts
  - buttons.ts
  - colors.ts
  - sizing.ts
  - typography.ts
```

```typescript
// index.ts

import * as Buttons from "./buttons"
import * as Colors from "./colors"
import * as Sizing from "./sizing"
import * as Typography from "./typography"

export { Buttons, Colors, Sizing, Typography }

// component.ts

import { Sizing, Colors } from "../styles"

...

const style = StyleSheet.create({
 container: {
   padding: Sizing.layout.x10
   backgroundColor: Colors.neutral.gray6
 }
})
```

## Co-locate StyleSheets and view components

Import styles from the styles module and build the StyleSheet in the same file
as your component.

Keeping each StyleSheet inline with its corresponding view component makes UI
development faster and reduces mental overhead.

```typescript
// component.ts

const Component = () => {
  return (
    <View style={style.container}>
      <Text style={style.headerText}>Header</Text>
      <Text style={style.bodyText}>Body</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    ...
  },
  headerText: {
    ...
  },
  bodyText: {
    ...
  },
})
```

## Group styles using objects


### Prefer

```typescript
// colors.ts

const gray = {
  s10: "#111111",
  s20: "#222222",
}

const blue = {
  s10: "#1111aa",
  s20: "#2222bb",
}

const red = {
  s10: "#aa1111",
  s20: "#bb2222",
}

// component.ts

button: {
  backgroundColor: Colors.gray.s10,
  borderColor: Colors.blue.s10,
  color: Colors.red.s10,
}
```

### Avoid

```typescript
// colors.ts

export const grayS10 = "#111111"
export const grayS20 = "#222222"

export const blueS10 = "#1111aa"
export const blueS20 = "#2222bb"

export const redS10 = "#aa1111"
export const redS20 = "#bb2222"

// component.ts

button: {
  backgroundColor: Colors.grayS10,
  borderColor: Colors.blueS10,
  color: Colors.redS10,
}
```

## When order matters, use numbers for naming

Using numbers to name ordered keys supports the addition and removal of keys without breaking the naming scheme.

### Prefer

```typescript
// colors.ts

const gray = {
  s100: "#999999",
  s200: "#aaaaaa",
  s300: "#eeeeee",
}
```

### Avoid

```typescript
// colors.ts

const gray = {
  lightest: "#999999",
  lighter: "#aaaaaa",
  light: "#eeeeee",
}
```

## Compose styles

Build complex styles from simple pieces.

```typescript
const fontSize = {
  x10: {
    fontSize: 13,
  },
  x20: {
    fontSize: 16,
  },
}

const fontWeight = {
  regular: {
    fontWeight: "400",
  },
  bold: {
    fontWeight: "500",
  },
}

const header = {
  x10: {
    ...fontSize.x10,
    ...fontWeight.bold,
  },
}
```

## Use records and union types for annotating objects

```typescript
type FontWeight = "regular" | "bold"
export const fontWeight: Record<FontWeight, TextStyle> = {
  regular: {
    "regular",
  },
  bold: {
    "bold",
  },
}
```

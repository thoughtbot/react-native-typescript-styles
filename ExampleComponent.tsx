import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Pressable} from 'react-native';

import {Sizing, Typography, Outlines, Colors, Buttons} from './styles';

const ExampleComponent = () => {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <View style={style.headerContainer}>
          <Text style={style.headerText}>React Native Typescript Styles</Text>
          <Text style={style.subheaderText}>
            Kick-start your React Native Typescript project with simple,
            organized styles.
          </Text>
        </View>
        <View style={style.bodyContainer}>
          <Text style={style.bodyText}>
            React Native has no framework for structuring styles, so we created
            this set of style modules for new React Native projects. While these
            styles are not visually opinionated, the organization of the style
            code is carefully considered.
          </Text>
          <Text style={style.bodyText}>
            The styles are separated by category into modules, including Colors,
            Sizing, and Buttons. Each module contains a set of objects which
            provide styles for a specific kind of thing within the module
            category. For example, the Colors module provides objects for
            primary and neutral colors. Finally, each of these objects itself
            provides key/value pairs for specific styles: in this case,
            particular primary and neutral colors.
          </Text>
        </View>
        <Pressable style={style.button}>
          <Text style={style.buttonText}>Buttons are Useful</Text>
        </Pressable>
        <Pressable style={style.secondaryButton}>
          <Text style={style.secondaryButtonText}>
            Not all buttons need a background
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    padding: Sizing.layout.x20,
  },
  headerContainer: {
    marginBottom: Sizing.layout.x20,
    paddingBottom: Sizing.layout.x20,
    borderBottomWidth: Outlines.borderWidth.thin,
    borderColor: Colors.neutral.gray6,
  },
  headerText: {
    ...Typography.fontSize.x40,
    ...Typography.fontWeight.semibold,
    marginBottom: Sizing.layout.x10,
  },
  subheaderText: {
    ...Typography.fontSize.x20,
    ...Typography.fontWeight.regular,
  },
  bodyContainer: {
    marginBottom: Sizing.layout.x20,
  },
  bodyText: {
    ...Typography.fontSize.x20,
    ...Typography.fontWeight.regular,
    ...Typography.lineHeight.x30,
    color: Colors.neutral.gray,
    marginBottom: Sizing.layout.x20,
  },
  button: {
    ...Buttons.bar.primary,
    marginBottom: Sizing.layout.x10,
  },
  buttonText: {
    ...Buttons.barText.primary,
  },
  secondaryButton: {
    ...Buttons.bar.secondary,
  },
  secondaryButtonText: {
    ...Buttons.barText.secondary,
  },
});

export default ExampleComponent;

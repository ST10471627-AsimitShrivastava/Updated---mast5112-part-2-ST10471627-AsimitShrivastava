/*CODE ATTRIBUTION*/
/*TITLE: IIE MAST5112 Module Manual 2025*/
/*AUTHOR: The Independent Institute of Education (Pty) Ltd*/
/*DATE: 07/03/2025*/
/*VERSION: 1.0*/
/*AVAILABLE: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true*/

/*CODE ATTRIBUTION*/
/*TITLE: KeyboardAvoidingView – React Native Documentation*/
/*AUTHOR: Meta Platforms, Inc.*/
/*DATE: 15/10/2025*/
/*VERSION: 0.76*/
/*AVAILABLE: https://reactnative.dev/docs/keyboardavoidingview */

/*CODE ATTRIBUTION*/
/*TITLE: React Navigation – NavigationContainer*/
/*AUTHOR: React Navigation Contributors*/
/*DATE: 15/10/2025*/
/*VERSION: 6.1*/
/*AVAILABLE: https://reactnavigation.org/docs/navigation-container */

/*CODE ATTRIBUTION*/
/*TITLE: React Navigation – Bottom Tab Navigator*/
/*AUTHOR: React Navigation Contributors*/
/*DATE: 15/10/2025*/
/*VERSION: 6.1*/
/*AVAILABLE: https://reactnavigation.org/docs/bottom-tab-navigator */

/*CODE ATTRIBUTION*/
/*TITLE: React Native Picker Documentation*/
/*AUTHOR: React Native Community*/
/*DATE: 15/10/2025*/
/*VERSION: 2.6.1*/
/*AVAILABLE: https://github.com/react-native-picker/picker */

/*CODE ATTRIBUTION*/
/*TITLE: W3Schools – React Native Tutorial*/
/*AUTHOR: Refsnes Data*/
/*DATE: 15/10/2025*/
/*VERSION: 1.0*/
/*AVAILABLE: https://www.w3schools.com/react/react_native_intro.asp */

/*CODE ATTRIBUTION*/
/*TITLE: Expo ImageBackground Reference*/
/*AUTHOR: Expo Documentation*/
/*DATE: 15/10/2025*/
/*VERSION: 50.0*/
/*AVAILABLE: https://docs.expo.dev/versions/latest/react-native/imagebackground/ */

/*CODE ATTRIBUTION*/
/*TITLE: Dimensions API – React Native Docs*/
/*AUTHOR: Meta Platforms, Inc.*/
/*DATE: 15/10/2025*/
/*VERSION: 0.76*/
/*AVAILABLE: https://reactnative.dev/docs/dimensions */

// Importing the core React library along with React Hooks
// useState: allows state management inside functional components
// useMemo: optimizes performance by memoizing computed values (used later in filtering)
import React, { useMemo, useState } from 'react';

// Importing essential UI components from the React Native library
// Each import represents a built-in component for structuring layouts and interactivity
import {
  StyleSheet,           // Enables defining custom CSS-like styles for all components
  Text,                 // Renders text elements on the screen
  View,                 // A flexible container for layout composition (similar to a div)
  FlatList,             // Efficiently renders large lists of items using lazy loading
  TextInput,            // Allows user text input (used for forms)
  TouchableOpacity,     // Provides a pressable element with fade animation for buttons
  SafeAreaView,         // Ensures content renders within safe boundaries (avoiding notches)
  Image,                // Displays images from local files or URLs
  Alert,                // Displays native alert popups to the user (used for validation)
  ScrollView,           // Allows vertical or horizontal scrolling for grouped content
  KeyboardAvoidingView, // Automatically adjusts layout when the keyboard appears
  Platform,             // Detects the operating system (iOS or Android) for conditional behavior
  ImageBackground,      // Displays an image as a background with child components layered on top
  Dimensions,           // Provides screen width/height for responsive design calculations
} from 'react-native';

// Importing the navigation container from React Navigation
// It serves as the main wrapper that enables screen transitions and state handling
import { NavigationContainer } from '@react-navigation/native';

// Importing a bottom tab navigator to create tab-based navigation (e.g., Home / Add Menu)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importing the Picker component used for dropdown menus (select course type)
// Provides platform-specific native picker UI on both iOS and Android
import { Picker } from '@react-native-picker/picker';

// Importing TypeScript type definitions used for enforcing data consistency
// MenuItem defines the structure of each dish item (name, price, image, etc.)
// Course is a string union type representing categories like 'Starters', 'Mains', or 'Desserts'
import { MenuItem, Course } from './type';



const TOKENS = {
  color: {
    bg: '#0b0b0c',           // near black background for fine dining ambiance
    card: '#121317',         // deep charcoal card
    cardAlt: '#16171c',      // subtle elevation contrast
    text: '#f3f4f6',         // soft white text
    textMuted: '#c9cad1',    // muted secondary text
    gold: '#d4af37',         // elegant gold accent
    goldSoft: '#f5e6b3',     // gentle gold for subtle elements
    divider: '#1f2030',      // hairline separators
    success: '#20c997',      // supportive status color
    danger: '#ef4444',       // supportive status color
  },
  // Defines corner radius values for consistent rounded edges across UI components
  // These are used for buttons, cards, and containers to create a cohesive, soft visual style
  radius: {
    sm: 10,  // Small radius — subtle rounding (used for buttons and small boxes)
    md: 14,  // Medium radius — moderate curvature for mid-sized components
    lg: 18,  // Large radius — noticeable rounding, often used for cards or modals
    xl: 22,  // Extra large radius — strongest curvature, typically for major elements like overlays
  },

  // Defines consistent spacing (padding and margin) values used throughout the app
  // Improves readability and creates balanced visual rhythm for vertical and horizontal alignment
  space: {
    xs: 6,   // Extra small spacing — tight element grouping (e.g., label + input)
    sm: 10,  // Small spacing — general minor padding
    md: 14,  // Medium spacing — default for most layout paddings/margins
    lg: 20,  // Large spacing — for separating major sections
    xl: 28,  // Extra large — generous white space for hero sections or cards
    xxl: 36, // Extra-extra large — used sparingly for top-level padding or headers
  },

  // Defines reusable shadow presets for elevation effects
  // This adds depth to UI elements, following Material Design principles for hierarchy
  shadow: {
    card: {
      shadowColor: '#000',                   // Black shadow for subtle contrast
      shadowOpacity: 0.25,                   // 25% opacity keeps shadows soft and natural
      shadowRadius: 12,                      // How blurred the shadow edges appear
      shadowOffset: { width: 0, height: 10 }, // Pushes shadow slightly downward
      elevation: 8,                          // Android-specific elevation equivalent for shadows
    },
  },
};


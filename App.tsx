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


/*CODE ATTRIBUTION*/
/*TITLE: React Native – StyleSheet and Styling Documentation*/
/*AUTHOR: Meta Platforms, Inc.*/
/*DATE: 15/10/2025*/
/*VERSION: 0.76*/
/*AVAILABLE: https://reactnative.dev/docs/stylesheet */

/*CODE ATTRIBUTION*/
/*TITLE: React Native – Colors and Theming Guide*/
/*AUTHOR: Meta Platforms, Inc.*/
/*DATE: 15/10/2025*/
/*VERSION: 0.76*/
/*AVAILABLE: https://reactnative.dev/docs/colors */

/*CODE ATTRIBUTION*/
/*TITLE: TypeScript Handbook – Object and Constant Typing*/
/*AUTHOR: Microsoft Corporation*/
/*DATE: 15/10/2025*/
/*VERSION: 5.3*/
/*AVAILABLE: https://www.typescriptlang.org/docs/handbook/2/objects.html */

/*CODE ATTRIBUTION*/
/*TITLE: React Native – Shadows, Elevation, and Layout Design*/
/*AUTHOR: Meta Platforms, Inc.*/
/*DATE: 15/10/2025*/
/*VERSION: 0.76*/
/*AVAILABLE: https://reactnative.dev/docs/shadow-props */

/*CODE ATTRIBUTION*/
/*TITLE: React Native – Design Systems and Theming with Constants*/
/*AUTHOR: Expo Documentation Team*/
/*DATE: 15/10/2025*/
/*VERSION: 50.0*/
/*AVAILABLE: https://docs.expo.dev/guides/using-themes/ */


// Screen sizing for responsive media
const { width } = Dimensions.get('window');

// Title: Bottom tab navigator setup
// Rationale: Simple two tab layout, Home and Add Menu, uses emoji icons to avoid additional libraries
const Tab = createBottomTabNavigator();

/**
 * Title: Predefined menu items
 * Provenance: Values copied from Menu Types.docx, including dish names, descriptions, prices, and image URLs
 * Integrity note: Names, descriptions, prices, and links are kept faithful to the source document :contentReference[oaicite:2]{index=2}.
 */
const predefinedItems: MenuItem[] = [
  // Starters
  {
    id: 'starter-1',
    dishName: 'BRUSCHETTA',
    description: 'With tomatos and onions',
    course: 'Starters',
    price: 300,
    image: 'https://images.unsplash.com/photo-1667207888295-94752c1ee4e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774', // :contentReference[oaicite:3]{index=3}
  },
  {
    id: 'starter-2',
    dishName: 'FRIED MUSHROOMS',
    description: 'With fried potatoes, vegetables, and olive oil',
    course: 'Starters',
    price: 350,
    image: 'https://images.unsplash.com/photo-1651326752381-c5bcaacb2ba0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740', // :contentReference[oaicite:4]{index=4}
  },
  {
    id: 'starter-3',
    dishName: 'MAGHERITTA PIZZA',
    description: 'Tamaot sauce and cheese',
    course: 'Starters',
    price: 400,
    image: 'https://images.unsplash.com/photo-1747654168933-a0a0c9d78d68?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774', // :contentReference[oaicite:5]{index=5}
  },
  {
    id: 'starter-4',
    dishName: 'SPAGHETTI',
    description: 'Chicken, tamato, and parsley',
    course: 'Starters',
    price: 450,
    image: 'https://images.unsplash.com/photo-1673789274287-5441868398cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1584', // :contentReference[oaicite:6]{index=6}
  },
  {
    id: 'starter-5',
    dishName: 'SCRAMBLED EGGS',
    description: 'Bacon, toast, and basil',
    course: 'Starters',
    price: 500,
    image: 'https://plus.unsplash.com/premium_photo-1699078192597-d06d3e4f6af1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1271', // :contentReference[oaicite:7]{index=7}
  },

  // Mains
  {
    id: 'main-1',
    dishName: 'MUSHROOM RISOTTO',
    description: 'Truffle, parmesan, rice, cheese, fungi',
    course: 'Mains',
    price: 500,
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740', // :contentReference[oaicite:8]{index=8}
  },
  {
    id: 'main-2',
    dishName: 'CHEESE BURGER',
    description: 'Bun, patty, tomato, cheese, lettuce, pepper, and sesame',
    course: 'Mains',
    price: 550,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1744', // :contentReference[oaicite:9]{index=9}
  },
  {
    id: 'main-3',
    dishName: 'BUTTER CHICKEN',
    description: 'Chicken, yogurt, spices ginger, and garlic, onions, and cream',
    course: 'Mains',
    price: 600,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740', // :contentReference[oaicite:10]{index=10}
  },
  {
    id: 'main-4',
    dishName: 'A RED THAI CURRY WITH VEGETABLES',
    description: 'Rice, peppers, mushrooms',
    course: 'Mains',
    price: 650,
    image: 'https://images.unsplash.com/photo-1720949579179-b4d04403f548?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1321', // :contentReference[oaicite:11]{index=11}
  },
  {
    id: 'main-5',
    dishName: 'SALAD',
    description: 'Red tomatos, yellow tomatos, cabbage, lettuce, cheese, croutons',
    course: 'Mains',
    price: 700,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774', // :contentReference[oaicite:12]{index=12}
  },

  // Desserts
  {
    id: 'dessert-1',
    dishName: 'CHOCOLATE BROWNEY WITH ICE CREAM',
    description: 'Vanilla ice cream, browney, and chocolate syprup',
    course: 'Desserts',
    price: 300,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000', // :contentReference[oaicite:13]{index=13}
  },
  {
    id: 'dessert-2',
    dishName: 'CHOCOLATE CAKE',
    description: 'Chocoalte cake with brown icing',
    course: 'Desserts',
    price: 350,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774', // :contentReference[oaicite:14]{index=14}
  },
  {
    id: 'dessert-3',
    dishName: 'PANCAKES',
    description: 'Pancakes, cherries, grapes, syrup',
    course: 'Desserts',
    price: 400,
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774', // :contentReference[oaicite:15]{index=15}
  },
  {
    id: 'dessert-4',
    dishName: 'RED SORBET',
    description: 'Strawberry',
    course: 'Desserts',
    price: 450,
    image: 'https://images.unsplash.com/photo-1650553448920-9432f8086905?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774', // :contentReference[oaicite:16]{index=16}
  },
  {
    id: 'dessert-5',
    dishName: 'RASBERRY YOGHURT',
    description: 'Raspberries, yoghurt, cream',
    course: 'Desserts',
    price: 500,
    image: 'https://images.unsplash.com/photo-1635197026382-69228964b695?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1744', // :contentReference[oaicite:17]{index=17}
  },
];

/**
 * Title: Welcome screen
 * Intent: First brand touch with refined fine dining identity
 * Design: Gold on deep charcoal, subtle blur overlay for a cinematic effect
 */

/*CODE ATTRIBUTION*/
/*TITLE: React Native – ImageBackground and Accessibility Documentation*/
/*AUTHOR: Meta Platforms, Inc.*/
/*DATE: 15/10/2025*/
/*VERSION: 0.76*/
/*AVAILABLE: https://reactnative.dev/docs/imagebackground */

// Defines the WelcomeScreen functional component
// Displays the restaurant’s welcome page before navigating to the main menu
// The component introduces branding, visual style, and navigation entry point
const WelcomeScreen = ({ navigation }: any) => {
  return (
    // ImageBackground allows using an image as a full-screen background
    // The 'source' prop specifies a remote Unsplash image for the backdrop
    // 'resizeMode="cover"' ensures the image scales proportionally and fills the screen
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600' }}
      style={styles.welcomeContainer}
      resizeMode="cover"
    >
      {/* The semi-transparent overlay darkens the background for readability */}
      <View style={styles.welcomeOverlay}>
        {/* The main content card: uses background blur, rounded edges, and centered text */}
        <View style={styles.welcomeCard}>
          {/* Overline text introducing the restaurant name */}
          <Text style={styles.brandOverline}>WELCOME TO</Text>

          {/* Large golden title to emphasize the restaurant’s name */}
          <Text style={styles.brandTitle}>CHRISTOFFEL</Text>

          {/* Subtitle describing the restaurant’s philosophy */}
          <Text style={styles.brandSubtitle}>
            Culinary excellence, seasonal ingredients, timeless technique
          </Text>

          {/* Row of icon features displaying key highlights: fine dining, chef quality, and premium service */}
          <View style={styles.featureRow}>
            {/* Each feature includes an emoji and a short descriptive label */}
            <View style={styles.feature}>
              <Text style={styles.featureEmoji}>🍽️</Text>
              <Text style={styles.featureText}>Fine dining</Text>
            </View>

            <View style={styles.feature}>
              <Text style={styles.featureEmoji}>👨‍🍳</Text>
              <Text style={styles.featureText}>Chef driven</Text>
            </View>

            <View style={styles.feature}>
              <Text style={styles.featureEmoji}>⭐</Text>
              <Text style={styles.featureText}>Premium quality</Text>
            </View>
          </View>

          {/* Primary call-to-action button — leads to the MenuTabs screen */}
          {/* Uses accessibilityRole and accessibilityLabel to enhance screen reader support */}
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Enter menu"
            style={styles.cta}
            onPress={() => navigation.navigate('MenuTabs')}
          >
            <Text style={styles.ctaText}>Enter the menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

/**
 * Title: Home screen
 * Responsibility: Show sections for Starters, Mains, and Desserts with elegant cards
 * Approach: Compute course filtered lists once per render using useMemo for efficiency
 */

/*CODE ATTRIBUTION*/
/*TITLE: React – useMemo Hook Documentation*/
/*AUTHOR: Meta Platforms, Inc.*/
/*DATE: 15/10/2025*/
/*VERSION: 18.2.0*/
/*AVAILABLE: https://react.dev/reference/react/useMemo */

/*CODE ATTRIBUTION*/
/*TITLE: React Native – FlatList Rendering and Performance Optimization*/
/*AUTHOR: Meta Platforms, Inc.*/
/*DATE: 15/10/2025*/
/*VERSION: 0.76*/
/*AVAILABLE: https://reactnative.dev/docs/flatlist */

/*CODE ATTRIBUTION*/
/*TITLE: TypeScript Handbook – Function and Object Typing*/
/*AUTHOR: Microsoft Corporation*/
/*DATE: 15/10/2025*/
/*VERSION: 5.3*/
/*AVAILABLE: https://www.typescriptlang.org/docs/handbook/2/functions.html */

// Defines the HomeScreen component, responsible for displaying menu sections:
// Starters, Mains, and Desserts, each rendered using a FlatList.
const HomeScreen = ({ menuItems }: { menuItems: MenuItem[] }) => {

  // useMemo is used to optimize performance by memoizing filtered results.
  // Each list (starters, mains, desserts) is only recalculated when `menuItems` changes.
  // This prevents unnecessary re-renders of FlatList and improves app efficiency.
  const starters = useMemo(() => menuItems.filter(m => m.course === 'Starters'), [menuItems]);
  const mains = useMemo(() => menuItems.filter(m => m.course === 'Mains'), [menuItems]);
  const desserts = useMemo(() => menuItems.filter(m => m.course === 'Desserts'), [menuItems]);

  // Helper function that returns a tinted gold background for section badges.
  // Each badge represents a course type, enhancing visual distinction.
  // The “22” at the end of each hex code adds transparency for a subtle overlay.
  const badgeTint = (course: Course) => {
    switch (course) {
      case 'Starters':
        return '#d4af37' + '22'; // Light transparent gold for starters
      case 'Mains':
        return '#d4af37' + '22'; // Same tone for visual consistency
      case 'Desserts':
        return '#d4af37' + '22'; // Matches branding’s gold identity
      default:
        return '#ffffff22';      // Fallback soft white for unclassified items
    }
  };

  // Defines the renderMenuItem function which returns the layout for a single menu item card
  // It is passed as the renderItem prop to FlatList, responsible for displaying each dish on screen
  const renderMenuItem = ({ item }: { item: MenuItem }) => {
    return (
      // Main wrapper for a menu item card
      // Uses consistent styling defined in styles.menuCard to maintain uniform appearance
      <View style={styles.menuCard}>

        {/* Conditional rendering:
          If the dish includes an image URL, display it using <Image>.
          If no image is available, show a styled placeholder to preserve layout consistency. */}
        {item.image ? (
          // Displays the dish image fetched via URL.
          // React Native’s <Image> automatically handles network images with proper caching.
          <Image source={{ uri: item.image }} style={styles.menuImage} />
        ) : (
          // Placeholder view shown when image data is missing.
          // Maintains the same dimensions as the image component to avoid layout shifts.
          <View style={[styles.menuImage, styles.menuImagePlaceholder]}>
            <Text style={styles.menuImagePlaceholderText}>No image</Text>
          </View>
        )}

        {/* Body section containing all textual content for the dish:
          title, description, course badge, and price */}
        <View style={styles.menuBody}>

          {/* Header row aligns dish title and price side-by-side */}
          <View style={styles.menuHeaderRow}>
            {/* The dish name — styled prominently with bold typography */}
            <Text style={styles.menuTitle}>{item.dishName}</Text>

            {/* Displays the dish price formatted with the Rand symbol */}
            <Text style={styles.menuPrice}>R{item.price}</Text>
          </View>

          {/* Displays the dish description underneath the header */}
          <Text style={styles.menuDesc}>{item.description}</Text>

          {/* Footer row containing the course badge and “View details” link */}
          <View style={styles.menuFooterRow}>
            {/* Course badge uses the badgeTint helper to determine gold-tinted background color */}
            <View style={[styles.badge, { backgroundColor: badgeTint(item.course) }]}>
              <Text style={styles.badgeText}>{item.course}</Text>
            </View>

            {/* Text label acting as a placeholder for future navigation to detailed dish info */}
            <Text style={styles.seeMore}>View details</Text>
          </View>
        </View>
      </View>
    );
  };

  // A presentational section wrapper so that each course grouping has consistent spacing

  /*CODE ATTRIBUTION*/
  /*TITLE: React Native – FlatList and Rendering Lists*/
  /*AUTHOR: Meta Platforms, Inc.*/
  /*DATE: 15/10/2025*/
  /*VERSION: 0.76*/
  /*AVAILABLE: https://reactnative.dev/docs/flatlist */

  /*CODE ATTRIBUTION*/
  /*TITLE: React Native – Layout and View Composition*/
  /*AUTHOR: Meta Platforms, Inc.*/
  /*DATE: 15/10/2025*/
  /*VERSION: 0.76*/
  /*AVAILABLE: https://reactnative.dev/docs/view */

  /*CODE ATTRIBUTION*/
  /*TITLE: TypeScript React – Function Components and Props Typing*/
  /*AUTHOR: Microsoft Corporation*/
  /*DATE: 15/10/2025*/
  /*VERSION: 5.3*/
  /*AVAILABLE: https://www.typescriptlang.org/docs/handbook/react.html */

  // Defines the Section functional component.
  // Each Section groups and displays a specific menu category (e.g., Starters, Mains, Desserts).
  // It uses the FlatList component to render multiple menu cards under a single heading.

  const Section = ({ title, emoji, data }: { title: string; emoji: string; data: MenuItem[] }) => (
    // Outer container for the section — provides padding and spacing between menu groups.
    <View style={styles.section}>
      {/* Header row showing the category emoji, title, and item count. 
        The emoji adds visual character, while the count dynamically reflects how many dishes exist in that group. */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionEmoji}>{emoji}</Text>
        <Text style={styles.sectionTitle}>{title}</Text>
        {/* Displays the number of items in parentheses (e.g., (5) for five dishes). */}
        <Text style={styles.sectionCount}>({data.length})</Text>
      </View>

      {/* FlatList efficiently renders each menu card in this category.
        - data: supplies the list of dishes filtered by course.
        - keyExtractor: ensures each item has a unique key using its ID.
        - renderItem: calls the renderMenuItem function defined earlier.
        - scrollEnabled: set to false because the parent ScrollView already handles scrolling. */}
      <FlatList
        data={data}
        keyExtractor={(it) => it.id}
        renderItem={renderMenuItem}
        scrollEnabled={false}
      />
    </View>
  );
  // Returns the rendered UI for the HomeScreen component.
  // This layout combines a top bar, hero banner, and menu sections within a scrollable view.
  return (
    // SafeAreaView ensures that the layout avoids notches and system UI overlaps on iOS and Android.
    <SafeAreaView style={styles.screen}>

      {/* Top bar section displaying the app’s brand name, subtitle, and total item count. */}
      <View style={styles.topBar}>

        {/* Left side of the top bar — includes the chef emoji and brand text stacked vertically. */}
        <View style={styles.brandLeft}>
          <Text style={styles.topEmoji}>👨‍🍳</Text>
          <View>
            {/* Brand title displayed in bold gold to represent identity and luxury. */}
            <Text style={styles.topTitle}>CHRISTOFFEL’S</Text>
            {/* Subtitle for brand motto or tagline. */}
            <Text style={styles.topSubtitle}>Culinary excellence</Text>
          </View>
        </View>

        {/* Right side of the top bar — circular pill showing the total count of dishes available. */}
        <View style={styles.countPill}>
          {/* Displays numeric count of all menu items passed via props. */}
          <Text style={styles.countNumber}>{menuItems.length}</Text>
          {/* Label text beneath the number for clarity. */}
          <Text style={styles.countLabel}>Items</Text>
        </View>
      </View>

      {/* ScrollView allows users to scroll through the full list of sections vertically.
        The scroll indicator is hidden for a cleaner and more elegant design. */}
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

        {/* Hero banner introducing the restaurant’s essence and welcoming message. */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Welcome to Christoffel’s Kitchen</Text>
          <Text style={styles.heroText}>
            Discover seasonal plates and signature desserts curated by Chef Christoffel
          </Text>
        </View>

        {/* Renders the three major menu sections using the Section component.
          Each section uses an emoji for visual identity and data filtering for accuracy. */}
        <Section title="Starters" emoji="🥗" data={starters} />
        <Section title="Mains" emoji="🍽️" data={mains} />
        <Section title="Desserts" emoji="🍰" data={desserts} />

        {/* Adds bottom spacing so the scrollable content does not touch the screen edge. */}
        <View style={{ height: TOKENS.space.xl }} />
      </ScrollView>
    </SafeAreaView>
  );
};

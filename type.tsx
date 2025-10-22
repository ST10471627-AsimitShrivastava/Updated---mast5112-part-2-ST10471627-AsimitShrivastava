/*CODE ATTRIBUTION*/
/*TITLE: TypeScript Handbook – Basic Types and Interfaces*/
/*AUTHOR: Microsoft Corporation*/
/*DATE: 15/10/2025*/
/*VERSION: 5.3*/
/*AVAILABLE: https://www.typescriptlang.org/docs/handbook/basic-types.html */

/*CODE ATTRIBUTION*/
/*TITLE: TypeScript Handbook – Literal Types and Union Types*/
/*AUTHOR: Microsoft Corporation*/
/*DATE: 15/10/2025*/
/*VERSION: 5.3*/
/*AVAILABLE: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html */

/*CODE ATTRIBUTION*/
/*TITLE: TypeScript Handbook – Interfaces and Object Typing*/
/*AUTHOR: Microsoft Corporation*/
/*DATE: 15/10/2025*/
/*VERSION: 5.3*/
/*AVAILABLE: https://www.typescriptlang.org/docs/handbook/interfaces.html */

/*CODE ATTRIBUTION*/
/*TITLE: React Native with TypeScript – Type Definitions for Components and Props*/
/*AUTHOR: React Native Community*/
/*DATE: 15/10/2025*/
/*VERSION: 0.76*/
/*AVAILABLE: https://reactnative.dev/docs/typescript */

/*CODE ATTRIBUTION*/
/*TITLE: IIE MAST5112 Module Manual 2025*/
/*AUTHOR: The Independent Institute of Education (Pty) Ltd*/
/*DATE: 07/03/2025*/
/*VERSION: 1.0*/
/*AVAILABLE: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true */

/**
 * COURSE TYPE
 *
 * PURPOSE:
 * Defines the three valid course categories available in the app menu.
 * This union type restricts course values to ensure accurate categorization
 * and prevents accidental typos during data entry or filtering.
 *
 * VALUES:
 * - 'Starters': Appetizers or small plates.
 * - 'Mains': Main course dishes.
 * - 'Desserts': Sweet dishes served after the main course.
 */
export type Course = 'Starters' | 'Mains' | 'Desserts';

/**
 * MENU ITEM INTERFACE
 *
 * PURPOSE:
 * The `MenuItem` interface defines the expected data structure for all dishes
 * displayed or created in the app. It provides clear documentation for developers
 * and ensures each menu item includes consistent attributes for rendering, storage, and validation.
 *
 * PROPERTIES:
 * - id: Unique identifier (string) for tracking the dish.
 * - dishName: The display name of the menu item.
 * - description: Details about the dish (ingredients, preparation, or flavor).
 * - course: The category this item belongs to ('Starters', 'Mains', or 'Desserts').
 * - price: The cost of the dish in South African Rand (R).
 * - image (optional): A link or URI to the item’s visual representation.
 *
 * NOTE:
 * The use of the optional `image` property (indicated by `?`) allows flexibility
 * for dishes without images while maintaining a unified structure.
 */
export interface MenuItem {
    id: string;          // Unique identifier for the menu item
    dishName: string;    // Name of the dish
    description: string; // Description of ingredients or details
    course: Course;      // Category of the dish (Starter, Main, Dessert)
    price: number;       // Price in Rands
    image?: string;      // Optional image URL for the dish
}

/**
 * SCREEN TYPE
 *
 * PURPOSE:
 * Defines the valid screen identifiers for navigation throughout the app.
 * This enforces consistency across the navigation system by preventing
 * invalid route names and improving type safety for the app’s screen transitions.
 *
 * VALUES:
 * - 'welcome': The introductory splash screen with branding.
 * - 'main': The main interface where users can view and add dishes.
 */
export type Screen = 'welcome' | 'main';
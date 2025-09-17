import { createGlobalStyle } from "styled-components";

 const GlobalStyles = createGlobalStyle`
  :root {
    /* Colors */
    --color-background: #ffffff;
    --color-surface: #f6f7fb;
    --color-primary: #007bff;
    --color-primary-dark: #2b6cb0;
    --color-danger: #f56565;
    --color-danger-dark: #e53e3e;
    --color-text: #333333;
    --color-muted: #888888;
    --color-subtle: #555555;
    --color-border: #c4c4c4;
    --color-star: #fbbf24;

    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
    --shadow-md: 0 2px 10px rgba(0,0,0,0.2);
    --shadow-lg: 0 4px 15px rgba(0,0,0,0.2);

    /* Layout */
    --radius-sm: 8px;
    --radius-md: 10px;
    --radius-lg: 12px;
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 12px;
    --spacing-lg: 16px;
    --spacing-xl: 24px;

    /* Fonts */
    --font-size-sm: 12px;
    --font-size-md: 14px;
    --font-size-lg: 16px;
    --font-size-xl: 20px;
    --font-size-xxl: 24px;
    --font-family: "Roboto", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--color-background);
    color: var(--color-text);
    font-family: var(--font-family);
  }
`;

export default GlobalStyles;

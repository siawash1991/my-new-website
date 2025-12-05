# AI Creator - Website Strategy & WordPress Migration Plan

## 1. Project Overview
This document outlines the strategy for building the "AI Creator" brand website. The current phase is a React Prototype to validate the UI/UX. The final goal is a fully functional WordPress site.

## 2. Design System (The "AI Creator" Look)
To maintain consistency across the React prototype and the future WordPress site, we adhere to these rules:

*   **Theme:** Dark Mode / Cyberpunk Minimalist.
*   **Primary Color:** Cyan (`#0df2f2`) for buttons and accents.
*   **Secondary Accents:** Neon Green (`#39FF14`) for active states/success.
*   **Backgrounds:** Deep Void (`#10121A`) mixed with abstract fluid art.
*   **Typography:** 'Space Grotesk' for headings and body.
*   **UI Style:** Glassmorphism (Translucent backgrounds with background blur, thin white borders).

## 3. Site Structure & Content Types

### A. Landing Page (Home)
*   **Hero Section:** High impact abstract 3D visual, clear value prop ("Creating the Future").
*   **Navigation:** Sticky header with transparent background.

### B. Blog (News & Thoughts)
*   **WP Implementation:** Standard WordPress 'Posts'.
*   **Taxonomies:** Categories (AI Innovation, UX/UI, Future Tech).
*   **Layout:** Masonry or Grid layout with glass cards.

### C. Academy (Courses)
*   **WP Implementation:** Custom Post Type (CPT) 'Courses' or LMS Plugin (like LearnDash/TutorLMS).
*   **Features:** Course status (Registration Open/Waitlist), Duration, Difficulty Level.

### D. Resources Dashboard (n8n & Prompts)
*   **WP Implementation:** Protected Member Area.
*   **Content:**
    *   **Workflows:** Downloadable JSON files or integrations.
    *   **Prompts:** Copy-to-clipboard functionality for LLM prompts.

## 4. WordPress Migration Roadmap

1.  **Hosting & Setup:** Install WordPress on high-performance hosting (Kinsta/WP Engine recommended for heavy assets).
2.  **Theme Selection:**
    *   *Option A (Custom):* Build a custom theme using the React code provided here as a template (Headless WP or Hybrid).
    *   *Option B (Page Builder):* Use Elementor Pro or Bricks Builder. These builders support the "Glassmorphism" effect natively via CSS filters.
3.  **Plugin Stack:**
    *   **ACF (Advanced Custom Fields):** To create fields for "Prompt Code", "Workflow Download Link", "Course Status".
    *   **LMS Plugin:** For the "Exclusive Academy" section.
    *   **Code Highlight:** For the prompt display sections.
4.  **Asset Migration:** Move the hotlinked images to the local Media Library.

## 5. Next Steps
Proceed with reviewing the React prototype below to confirm all interactions and visual fidelity before commencing the WordPress build.
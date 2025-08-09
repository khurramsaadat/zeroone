# Mistakes Made During Project: Showcase Netlify Projects

During the "Showcase Netlify Projects" task, I encountered several issues and made some mistakes that led to delays and additional work. This document outlines these mistakes to ensure they are avoided in future projects.

1.  **Incorrect API Token Usage and Error Handling for Netlify API:**
    *   **Mistake:** Initially attempted to fetch Netlify projects directly using `process.env.NEXT_PUBLIC_NETLIFY_API_TOKEN` without proper error handling for an invalid or missing token. This led to a `projects.map is not a function` error because the API response was not an array when unauthorized.
    *   **Lesson Learned:** Always implement robust error handling for API calls, including checking `response.ok` and verifying the expected data structure (e.g., `Array.isArray(data)`) before processing. Ensure environment variables are correctly set and accessible.

2.  **Misunderstanding Next.js Server/Client Components and Hooks:**
    *   **Mistake:** Used `useEffect` and `useState` (React Hooks) in `src/components/Projects.tsx` without the `"use client"` directive, causing a Next.js runtime error because these hooks are client-side only.
    *   **Lesson Learned:** Be mindful of Next.js's distinction between Server Components and Client Components. React Hooks like `useEffect` and `useState` must be used in Client Components, which require the `"use client"` directive at the top of the file.

3.  **Incorrect `next/image` Component Usage and Configuration:**
    *   **Mistake:**
        *   Used deprecated `layout` and `objectFit` props with the `next/image` component.
        *   Did not configure `images.pexels.com` as a valid hostname in `next.config.ts`, leading to an "Invalid src prop" error.
    *   **Lesson Learned:**
        *   Stay updated with Next.js documentation for component API changes (e.g., `next/image` updates). Use `fill` prop and `style={{ objectFit: 'cover' }}` for image sizing.
        *   Always configure external image hostnames in `next.config.ts` under the `images.remotePatterns` property when using `next/image` with external URLs.

4.  **Persistent ESLint Error (Unescaped Apostrophe):**
    *   **Mistake:** Failed to correctly identify and fix a persistent ESLint error regarding an unescaped apostrophe in `src/components/ContactForm.tsx` across multiple attempts. This caused repeated Netlify build failures.
    *   **Lesson Learned:** Pay close attention to specific error messages, especially those from linters or compilers. Double-check the exact line and column numbers provided in error logs and ensure the fix is applied correctly and persists.

5.  **Incorrect Command Chaining Operator for Windows Shell:**
    *   **Mistake:** Repeatedly used `&&` for command chaining (e.g., `git add . && git commit`) which is not universally supported in Windows shells (like PowerShell).
    *   **Lesson Learned:** Adapt command chaining syntax to the user's operating system and default shell. For Windows, using separate commands or `&` (for sequential execution) or `|` (for piping) might be more appropriate depending on the context.

6.  **Incomplete Task Verification and Over-reliance on Previous Assumptions:**
    *   **Mistake:** Assumed certain fixes (like the apostrophe escape) were applied and pushed without explicit confirmation from the user or re-verifying the file content/git status, leading to redundant actions and further build failures.
    *   **Lesson Learned:** Always verify the successful application of changes (e.g., by re-reading the file, checking `git status`, or confirming with the user) before proceeding to the next step or attempting completion. Do not assume a fix has been applied or pushed unless explicitly confirmed.

By acknowledging and learning from these mistakes, I aim to improve my efficiency and accuracy in future tasks.

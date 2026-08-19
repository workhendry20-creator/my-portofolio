# Workspace Rules & Learning Invariants

## Web Application Layout & Preview Invariants

### 1. Static Webview & Vite HMR Hybrid Loading
- When building React + Vite applications, ensure `index.html` includes fallback loading for `./dist/assets/index.js` when opened via static previewers (VS Code Webview, Live Server, file://) to prevent `TypeError: 'text/jsx' is not a valid JavaScript MIME type`.

### 2. Navigation Header & UI Density Controls
- When navigation items exceed 5 links, avoid crowding the top header bar. Replace horizontal link rows with a clean **3-Dots Menu Button** (`MoreVertical`) that opens a glassmorphic dropdown panel.
- Keep Hero titles free of bloated floating badge clouds; prioritize clean typography and clear call-to-action buttons.

### 3. Expandable Content & Scrollable Certificate Modals
- Limit initial list items to 2–3 items in Experience and Certification sections, providing an expandable **"See More"** toggle button.
- Always wrap modal image containers in scrollable wrappers (`maxHeight: 72vh`, `overflowY: 'auto'`) to support multi-page and high-resolution certificate documents smoothly.

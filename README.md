# FE Valley Task

Built with React, TypeScript, Tailwind CSS, and ShadCN/UI (Radix-based), this UI emphasizes clarity, reusability, and developer efficiency.

## Technical Approach & Architectural Decisions

- Given the time constraint, I focused on delivering a solid layout and reusable and extendible components
- I used mock apis to demonstrate how dynamic data would be handled on the ui and how the user would interact with it
- The focus was not on pixel perfectness but engineering and functionality

---

## Component Structure

### 📨 Messages UI

- **`Messages.tsx`**
  - Wraps the message view and sticky input bar
- **`MessageContainer.tsx`**
  - Responsible for displaying a stream of messages
- **`ChatInput.tsx`**
  - Handles multi-line input and dynamic icon
- **`SelectionTag.tsx`**
  - Reusable badge-style toggles (e.g., Regenerate, Prompt)

### 🧠 AI Training UI

- **`FilterBar.tsx`**
  - Combines tabs and multi-select filters for scoped control
- **`DropdownMultiSelect.tsx`**
  - Custom dropdown with search and checkbox support
- **`DropdownCustom.tsx`**
  - Badge-style trigger supporting icon + label + chevron
- **`OverviewTab.tsx`**
  - Tab switcher using ShadCN `Tabs` for high-level view toggling

### Shared Utilities

- **`config/`**
  - Includes reusable constants (e.g., `writingStyleOptions`, `tabMenu`)
- **`components/ui/`**
  - ShadCN-generated UI primitives (DropdownMenu, Button, Tabs, etc.)

---

## ✅ Assumptions & Edge Case Handling

| Assumption                                 | Handling                                                                |
| ------------------------------------------ | ----------------------------------------------------------------------- |
| Message input is dynamic and not hardcoded | Built `ChatInput` as controlled form field with optional icon           |
| Filters may grow in number                 | Added searchable `DropdownMultiSelect` with virtualization-ready layout |
| Filter counts may vary                     | Added support for item count display (`Category (N)`)                   |
| No match in dropdown                       | Gracefully shows a "No matches found" state                             |
| Message count or tag actions might grow    | `SelectionTag` and `BadgeCustom` are flexible and slot-based            |

---

## ♿ Accessibility Considerations

- Used Radix primitives (via ShadCN) which are:
  - Fully keyboard-navigable
  - ARIA-compliant out of the box
- Visual indicators (e.g., active tab states, selected checkboxes)
- Semantic HTML with `<button>`, `<label>`, `<input>`, and `aria-*` attributes provided by Radix

---

## 🚀 Performance Considerations

- **Memoized filtering** in dropdowns using `useMemo`
- Dropdown checkboxes are rendered conditionally to avoid unnecessary DOM updates
- All components are functionally stateless unless controlled externally
- Styling is Tailwind-based (JIT), eliminating runtime CSS parsing

---

## 🛠 What I'd Refactor with More Time

| Area             | Improvement                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- |
| State Management | Move to a lightweight store (e.g., Zustand or Jotai) for global UI state sharing (e.g., selected filters, current tab) |
| Animations       | Add subtle `framer-motion` transitions to dropdowns and tags for a smoother UX                                         |
| Message Flow     | Convert message rendering into a timeline-style system with better date-grouping                                       |
| Testing          | Add unit tests for dropdown filter logic, keyboard accessibility, and tab behavior                                     |
| Virtualization   | If dropdown options become large (100+), add `react-virtual` to optimize rendering                                     |

Build out user details

---

## 🧪 Stack Summary

- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS
- **Component Library**: ShadCN/UI
- **Icons**: Lucide React
- **Tooling**: Vite, Copilot

---

## 💬 Final Thoughts

This UI was built with speed, scalability, and real-world use cases in mind (e.g., messaging, filtering, AI-driven workflows). The architecture is flexible enough to support deeper features like conversation history, training progress, or prompt management with minimal refactor.

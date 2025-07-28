# Valley Task — Messages & AI Training UI

This project implements a modern and dynamic UI for a "Messages" and "AI Training" dashboard screen. It is built with **React**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**, emphasizing modularity, accessibility, and performance.

## Architectural Decisions and Tradeoffs

- The application was built with clarity, maintainability, and modularity in mind.

- Focus was on scalability and clean separation of concerns, allowing each feature (Messages, AI Training) to evolve independently.

- Componentization was prioritized to promote reusability and readability, even at the cost of slightly increased boilerplate.

- While attention was paid to UI accuracy, pixel-perfection was not the focus — the emphasis was on delivering engineering clarity and dynamic functionality under a strict time constraint.

## 🗂 Component Structure

The project follows a modular, feature-based folder structure that supports scalability, clarity, and developer productivity. Components are grouped by feature domain and type, promoting separation of concerns and easier navigation.

```
src/
├── api/                          # API abstraction layer
├── assets/                       # (For icons, images, etc.)
├── components/
│   ├── overview/                 # Feature-specific screens
│   │   ├── aiTraining/
│   │   │   ├── AITraing.tsx
│   │   │   ├── FilterBar.tsx
│   │   │   ├── TrainingNotification.tsx
│   │   │   └── TrainingNotificationSkeleton.tsx
│   │   ├── messages/
│   │   │   ├── MessageContainer.tsx
│   │   │   ├── MessageInputSection.tsx
│   │   │   ├── Messages.tsx
│   │   │   └── MessageSkeleton.tsx
│   │   ├── research/
│   │   │   └── Research.tsx
│   │   ├── ChatInput.tsx
│   │   └── OverviewTab.tsx
│   ├── ui/                       # Custom UI wrappers
│   │   ├── BadgeCustom.tsx
│   │   ├── ButtonCustom.tsx
│   │   ├── DropdownCustom.tsx
│   │   ├── DropdownMultiselect.tsx
│   │   ├── EmptyData.tsx
│   │   ├── MenuBar.tsx
│   │   ├── Overview.tsx
│   │   ├── PaginationBar.tsx
│   │   └── SelectionTag.tsx
│   └── userDetails/
├── config/
│   ├── dropdownMenuData.ts
│   ├── paginationData.ts
│   └── tabMenuData.ts
├── layout/
│   └── Layout.tsx
├── pages/
│   └── MainPage.tsx
├── utils/
│   └── utils.tsx
└── App.tsx
```

### Why This Structure?

- **Feature-oriented**: Encourages scaling without clutter. Each feature (e.g., Messages, AI Training) is self-contained and easily testable.
- **Reusable UI primitives**: Shared UI components are centralized for consistency and easier updates.
- **Clear separation of concerns**: Logic (API, config), layout, and presentation are kept cleanly distinct.
- **Scalable for teams**: Easy for multiple engineers to work in parallel without stepping on each other’s toes.

## Assumptions & Edge Case Handling

- **Empty States**: Handled using `<EmptyData />` for both messages and training sections.
- **Skeleton Loaders**: Ensures visual feedback during API loading.
- **Missing Data**: Fallbacks are implemented for optional fields like `icon`, `avatar`, `subtext`, etc.
- **No Results After Filtering**: A `"No matches found"` state is shown when dropdown search yields nothing.

## Accessibility Considerations

- All interactive elements (e.g., dropdowns, checkboxes, buttons) follow `shadcn/ui` accessibility standards.
- Keyboard navigation works as expected in dropdowns and accordions.
- Icons used from `lucide-react` are decorational unless explicitly labeled for screen readers.
- Input placeholders and focus states are visually and semantically clear.

## Performance Considerations

- **useMemo** used to memoize filtered dropdown items and prevent unnecessary re-renders.
- **Used TanStack Query**: All data fetching is handled with TanStack Query to ensure efficient caching, background updates, and request deduplication.
- Lightweight component trees split into feature domains (e.g., `aiTraining`, `messages`) for better tree shaking and lazy loading potential.
- Skeleton loading ensures perceived performance doesn't drop on network delays.

## Refactoring Opportunities (with more time)

- **Global State Management**: Introduce a state management library (e.g., Zustand or Redux Toolkit) for shared tab/filter state instead of prop drilling.
- **Pagination Hook Abstraction**: Reuse pagination logic across multiple components by abstracting it into a `usePagination()` hook.
- **Styling fixes for better UX**: For example, making the main tab (OverviewTab) fixed so it remains visible on scroll, improving navigation across long content.
- **Decouple tightly coupled components**: Some components could benefit from further decoupling for more seperation of concerns
- **Enhanced Responsiveness**: Improve mobile responsiveness.
- **User details**: Build out the User details view.

## 🚀 Run Locally

```bash
npm install
npm run dev
```

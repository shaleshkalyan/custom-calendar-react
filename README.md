# Reusable React Calendar Component

This project implements a robust, reusable `<Calendar />` component suitable for integration into a shared React component library. It is built using **TypeScript**, **Styled Components**, and **Moment.js** for reliable date management.

The calendar is fully dynamic, always displaying a consistent 7x6 grid that starts the week on **Sunday**, and adheres to a dark, minimalist aesthetic.

## Features

* **Fixed 7x6 Grid:** Maintains a consistent structure.
* **Sunday Start:** Week view always begins on Sunday.
* **Data-Driven Styling:** Flags determine highlighting and visibility.
* **Clean View:** Inactive dates (previous/next month) are hidden while maintaining grid structure.
* **Performance Optimized:** Uses `useMemo` and `React.memo` for efficient rendering.
* **Full Test Coverage:** Includes unit tests for logic and integration tests for UI behavior.

## Getting Started

### Prerequisites

* Node.js (LTS version)
* npm or yarn
* A React environment (e.g., Create React App, Next.js, or Vite)

### Installation

Ensure you have the primary dependencies installed in your project:

```bash
npm install styled-components moment
# or yarn add styled-components moment

import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => cleanup());

// jsdom lacks these browser APIs used by useMediaQuery, framer-motion
// (whileInView) and react-anchor-link-smooth-scroll.
let desktop = true;
export const setDesktop = (value: boolean) => {
  desktop = value;
};

window.matchMedia = (query: string) =>
  ({
    matches: desktop,
    media: query,
    onchange: null,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    addListener: () => undefined,
    removeListener: () => undefined,
    dispatchEvent: () => false,
  } as MediaQueryList);

class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
window.IntersectionObserver =
  IntersectionObserverStub as unknown as typeof IntersectionObserver;

window.scroll = vi.fn() as unknown as typeof window.scroll;
window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;

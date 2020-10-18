import { useEffect, useRef } from "react";

export const useScrollLock = (menuOpen: boolean) => {
  const bodyEl = useRef<HTMLElement>();

  useEffect(() => {
    if (!bodyEl.current) {
      bodyEl.current = document.body;
    }
  }, []);

  useEffect(() => {
    if (bodyEl.current) {
      bodyEl.current.classList[menuOpen ? "add" : "remove"]("no-scroll");
    }
  }, [menuOpen]);
};

/** Moves the soft spotlight on .glow panels to follow the pointer. */
export function initGlow(): void {
  if (!window.matchMedia("(hover: hover)").matches) return;
  document.addEventListener("pointermove", (event) => {
    const el = (event.target as Element | null)?.closest<HTMLElement>(".glow");
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - r.left}px`);
    el.style.setProperty("--my", `${event.clientY - r.top}px`);
  });
}

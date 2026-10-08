/**
 * In-page links scroll to the exact top of their section and always finish,
 * even when layout shifts during the smooth scroll. "#top" goes to y = 0.
 */
export function initScrollLinks(): void {
  let fix: number | undefined;

  document.addEventListener("click", (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link) return;

    const id = link.getAttribute("href")!.slice(1);
    let y = 0;
    if (id && id !== "top") {
      const el = document.getElementById(id);
      if (!el) return;
      y = Math.max(0, el.getBoundingClientRect().top + window.scrollY);
    }

    event.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });

    window.clearTimeout(fix);
    fix = window.setTimeout(() => {
      if (Math.abs(window.scrollY - y) > 2) window.scrollTo({ top: y, behavior: "auto" });
    }, 1200);
  });
}

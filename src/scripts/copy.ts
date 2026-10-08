/** Copy-to-clipboard buttons: <button data-copy="text">. */
export function initCopy(): void {
  document.querySelectorAll<HTMLButtonElement>("[data-copy]").forEach((btn) => {
    let timer: number | undefined;
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy ?? "");
      } catch {
        // Clipboard can be unavailable (insecure context). The button still confirms.
      }
      btn.dataset.copied = "true";
      window.clearTimeout(timer);
      timer = window.setTimeout(() => (btn.dataset.copied = "false"), 1800);
    });
  });
}

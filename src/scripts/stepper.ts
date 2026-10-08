/**
 * Install stepper: plays the terminal output line by line and keeps the
 * tabs and caption in sync. A tab click jumps to that stage and pauses.
 */

const CAPTIONS = [
  "Copy the line above and paste it into your terminal. It’s the only command you’ll ever run.",
  "Helmet looks for Hermes on your computer. If it’s missing, Helmet installs it, then adds itself on top.",
  "Tell Helmet which AI models you already use. It picks the right one for every job.",
  "That’s it. Say what you want done, in your own words.",
];

/** First animation frame of each stage. */
const STAGE_START = [0, 1, 5, 7];
const LAST_FRAME = 12;
const FRAME_MS = 1000;
const LINES = 8;

const stageOf = (frame: number) => (frame < 1 ? 0 : frame <= 4 ? 1 : frame <= 6 ? 2 : 3);

export function initStepper(): void {
  const root = document.querySelector<HTMLElement>("[data-stepper]");
  if (!root) return;

  const lines = [...root.querySelectorAll<HTMLElement>("[data-line]")];
  const tabs = [...root.querySelectorAll<HTMLButtonElement>("[data-step-tab]")];
  const toggle = root.querySelector<HTMLButtonElement>("[data-step-toggle]")!;
  const caption = root.querySelector<HTMLElement>("[data-step-caption]")!;
  const bar = root.querySelector<HTMLElement>("[data-install-bar]")!;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let frame = reduceMotion ? 11 : 0;
  let playing = !reduceMotion;

  function render(): void {
    const stage = stageOf(frame);
    for (let i = 0; i < LINES; i++) lines[i].hidden = frame < i;
    bar.style.transform = `scaleX(${frame >= 3 ? 1 : 0.18})`;
    caption.textContent = CAPTIONS[stage];
    tabs.forEach((t, i) => (i === stage ? t.setAttribute("aria-current", "step") : t.removeAttribute("aria-current")));
    toggle.textContent = playing ? "Pause" : "Replay";
  }

  tabs.forEach((tab, i) =>
    tab.addEventListener("click", () => {
      frame = STAGE_START[i];
      playing = false;
      render();
    }),
  );
  toggle.addEventListener("click", () => {
    if (playing) {
      playing = false;
    } else {
      frame = 0;
      playing = true;
    }
    render();
  });

  render();
  if (!reduceMotion) {
    window.setInterval(() => {
      if (!playing) return;
      frame = frame >= LAST_FRAME ? 0 : frame + 1;
      render();
    }, FRAME_MS);
  }
}

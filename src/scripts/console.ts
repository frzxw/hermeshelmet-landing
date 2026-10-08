/**
 * Console demo: a looping simulation of how Helmet plans, splits and checks work.
 * Pure DOM, no framework. Reads the hooks rendered by components/Console.astro.
 */

type WorkerState = "q" | "r" | "d" | "i";
type SupervisorState = "i" | "v" | "a";

interface Scenario {
  multi: boolean;
  tasks: [string, string, string];
}
interface Step {
  /** Orchestrator message */
  o: string;
  /** Orchestrator badge */
  os: string;
  /** Worker states, one letter each */
  w: string;
  /** Supervisor state */
  s: SupervisorState;
  /** Context window use, in percent of 200k */
  c: number;
}

const SCENARIOS: Scenario[] = [
  { multi: true, tasks: ["Add limiter middleware", "Write integration tests", "Update API docs"] },
  { multi: false, tasks: ["Fix the failing auth test", "Not needed.", "Not needed."] },
  { multi: true, tasks: ["Update client calls", "Migrate the test suite", "Update types and docs"] },
];

const MULTI: Step[] = [
  { o: "Reading the request.", os: "Reading", w: "qqq", s: "i", c: 38 },
  { o: "No plan found. Planning first.", os: "Planning", w: "qqq", s: "i", c: 42 },
  { o: "Plan ready. Splitting into 3 tasks.", os: "Managing", w: "rqq", s: "i", c: 48 },
  { o: "Plan ready. Splitting into 3 tasks.", os: "Managing", w: "rrq", s: "i", c: 54 },
  { o: "Three workers running in parallel.", os: "Managing", w: "rrr", s: "i", c: 60 },
  { o: "Checking results as they land.", os: "Managing", w: "drr", s: "v", c: 62 },
  { o: "Checking results as they land.", os: "Managing", w: "ddr", s: "v", c: 64 },
  { o: "Verified against the plan.", os: "Done", w: "ddd", s: "a", c: 66 },
  { o: "Verified against the plan.", os: "Done", w: "ddd", s: "a", c: 66 },
];

const SINGLE: Step[] = [
  { o: "Reading the request.", os: "Reading", w: "qii", s: "i", c: 38 },
  { o: "Small and clear. One worker is enough.", os: "Routing", w: "qii", s: "i", c: 40 },
  { o: "Sending it straight to a worker.", os: "Managing", w: "rii", s: "i", c: 44 },
  { o: "Sending it straight to a worker.", os: "Managing", w: "rii", s: "i", c: 48 },
  { o: "Checking the result.", os: "Managing", w: "dii", s: "v", c: 50 },
  { o: "Verified. The test passes.", os: "Done", w: "dii", s: "a", c: 50 },
  { o: "Verified. The test passes.", os: "Done", w: "dii", s: "a", c: 50 },
  { o: "Verified. The test passes.", os: "Done", w: "dii", s: "a", c: 50 },
  { o: "Verified. The test passes.", os: "Done", w: "dii", s: "a", c: 50 },
];

const WORKER: Record<WorkerState, { label: string; state: string }> = {
  q: { label: "Queued", state: "idle" },
  r: { label: "Running", state: "active" },
  d: { label: "Done", state: "done" },
  i: { label: "Idle", state: "idle" },
};
const SUPERVISOR: Record<SupervisorState, { label: string; state: string }> = {
  i: { label: "Idle", state: "idle" },
  v: { label: "Verifying", state: "active" },
  a: { label: "Approved", state: "done" },
};

const TICK_MS = 1500;
const BARS = { 1: 0.05, 2: 0.17, 3: 0.25, 4: 0.33 } as const;

export function initConsole(): void {
  const root = document.querySelector<HTMLElement>("[data-console]");
  if (!root) return;

  const $ = <T extends HTMLElement>(sel: string) => root.querySelector<T>(sel);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const buttons = [...root.querySelectorAll<HTMLButtonElement>("[data-scenario]")];
  const toggle = $<HTMLButtonElement>("[data-console-toggle]");

  let scenario = 0;
  let tick = reduceMotion ? 7 : 0;
  let playing = !reduceMotion;

  const setPill = (pill: HTMLElement | null, label: string, state: string) => {
    if (!pill) return;
    pill.dataset.state = state;
    const text = pill.querySelector("[data-label]");
    if (text) text.textContent = label;
  };

  function render(): void {
    const sc = SCENARIOS[scenario];
    const seq = sc.multi ? MULTI : SINGLE;
    const step = seq[tick % seq.length];

    $("[data-ctx-text]")!.textContent = `${step.c}% · ${step.c * 2}k / 200k`;
    const conv = $("[data-conv-text]");
    if (conv) conv.textContent = `${(step.c - 33) * 2}k`;
    for (const [n, v] of Object.entries(BARS)) {
      $<HTMLElement>(`[data-bar="${n}"]`)!.style.transform = `scaleX(${v})`;
    }
    $<HTMLElement>('[data-bar="5"]')!.style.transform = `scaleX(${step.c / 100})`;

    $("[data-o-msg]")!.textContent = step.o;
    $("[data-o-state]")!.textContent = step.os;

    for (let i = 0; i < 3; i++) {
      $(`[data-worker-task="${i + 1}"]`)!.textContent = sc.tasks[i];
      const ws = WORKER[step.w.charAt(i) as WorkerState];
      setPill($(`[data-worker-pill="${i + 1}"]`), ws.label, ws.state);
    }
    const ss = SUPERVISOR[step.s];
    setPill($("[data-supervisor-pill]"), ss.label, ss.state);

    buttons.forEach((b, i) => b.setAttribute("aria-pressed", String(i === scenario)));
    if (toggle) toggle.textContent = playing ? "Pause demo" : "Play demo";
  }

  buttons.forEach((b, i) =>
    b.addEventListener("click", () => {
      scenario = i;
      tick = 0;
      render();
    }),
  );
  toggle?.addEventListener("click", () => {
    playing = !playing;
    render();
  });

  render();
  if (!reduceMotion) {
    window.setInterval(() => {
      if (!playing) return;
      tick += 1;
      render();
    }, TICK_MS);
  }
}

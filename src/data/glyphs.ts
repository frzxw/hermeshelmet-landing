/**
 * Glyph artwork for the icon tiles (24x24 grid, stroke-based).
 * `pathLength="1"` on every shape lets the hover animation redraw the stroke.
 */
export const glyphs = {
  route: `<circle pathLength="1" cx="6" cy="5.5" r="2.4"/><path pathLength="1" d="M6 8v3.2a3.3 3.3 0 0 0 3.3 3.3h5.4a3.3 3.3 0 0 1 3.3 3.3"/><circle pathLength="1" cx="18" cy="19.4" r="2.4" fill="none"/>`,
  bars: `<path pathLength="1" d="M4 20v-6M10 20v-9M22 20H2"/><path pathLength="1" d="M16 20V4"/>`,
  layers: `<path pathLength="1" d="m3 13 9 5 9-5"/><path pathLength="1" d="m3 17.5 9 5 9-5" stroke-opacity=".45"/><path pathLength="1" d="m12 2.5 9 5-9 5-9-5z"/>`,
  folder: `<path pathLength="1" d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path pathLength="1" d="M3 11h18"/>`,
  code: `<path pathLength="1" d="m8 8-4 4 4 4M16 8l4 4-4 4"/><path pathLength="1" d="M13.6 5.5 10.4 18.5"/>`,
  plan: `<path pathLength="1" d="M10.5 7h9.5M10.5 12h9.5M10.5 17h6"/><circle pathLength="1" cx="5" cy="12" r="1.15" fill="currentColor" stroke="none"/><circle pathLength="1" cx="5" cy="17" r="1.15" fill="currentColor" stroke="none"/><circle pathLength="1" cx="5" cy="7" r="1.9" fill="none" stroke="none"/>`,
  test: `<circle pathLength="1" cx="12" cy="12" r="9"/><path pathLength="1" d="m8.4 12.3 2.5 2.5 4.7-5.1"/>`,
  review: `<path pathLength="1" d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle pathLength="1" cx="12" cy="12" r="3" fill="none"/>`,
  verify: `<path pathLength="1" d="M12 3 5 6v5.5c0 4.3 2.9 7.6 7 9.5 4.1-1.9 7-5.2 7-9.5V6z"/><path pathLength="1" d="m8.8 12.2 2.3 2.3 4.2-4.6"/>`,
} as const;

export type GlyphName = keyof typeof glyphs;

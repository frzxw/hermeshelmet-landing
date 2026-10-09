/** Single source of truth for links and copy that appears in more than one place. */
export const site = {
  name: "Helmet",
  title: "Hermes Helmet",
  description:
    "The batteries-included multi-agent layer for Hermes Agent. Plug in your models and let it plan, route and verify, without burning tokens on the wrong work.",
  url: "https://hermeshelmet.com",
  installCommand: "curl -fsSL hermeshelmet.com/install | sh",
  // TODO: replace with the real repository, contributing guide and license URLs.
  links: {
    github: "https://github.com/",
    contributing: "https://github.com/",
    license: "https://github.com/",
  },
} as const;

export const navLinks = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
] as const;

export const footerLinks = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#architecture", label: "Architecture" },
  { href: "#faq", label: "FAQ" },
  { href: "#top", label: "Install" },
  { href: site.links.contributing, label: "Contributing", external: true },
  { href: site.links.license, label: "License", external: true },
  { href: site.links.github, label: "GitHub", external: true },
] as const;

export const faqs = [
  {
    q: "Do I need Hermes already?",
    a: "No. One command installs Helmet and, if you don’t have it yet, Hermes too.",
  },
  {
    q: "Which models does it work with?",
    a: "Whichever you plug in. Helmet routes between them automatically, so you don’t pick tiers or write routing rules.",
  },
  {
    q: "Do I need to learn commands?",
    a: "No. Describe the work in plain language. Helmet reads the situation and decides what happens next.",
  },
  {
    q: "How does it save tokens?",
    a: "Agents exchange context through a shared folder instead of re-reading everything, and prompts stay stable so provider caches keep hitting.",
  },
  {
    q: "Is it free?",
    // TODO: replace the placeholder with the license and repository link.
    a: "Yes. Helmet is an independent open-source project. [LICENSE AND REPO LINK]",
  },
] as const;

export const stats = [
  { value: "cnt", label: "of input tokens served from cache in our own multi-agent runs.", aria: "About 83 percent" },
  { value: "1", label: "command to install, even if you don’t have Hermes yet." },
  { value: "0", label: "slash commands or keywords to learn before it works." },
] as const;

export const verbs = [
  { label: "Plan", glyph: "plan" },
  { label: "Route", glyph: "route" },
  { label: "Build", glyph: "code" },
  { label: "Test", glyph: "test" },
  { label: "Review", glyph: "review" },
  { label: "Verify", glyph: "verify" },
] as const;

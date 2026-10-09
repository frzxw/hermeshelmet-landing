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
    a: "Whatever you have: a frontier subscription, a few API keys, or only free and local models. With free or local models, Helmet Lite keeps to smaller steps and tells you plainly what an upgrade would add.",
  },
  {
    q: "Do I need to learn commands?",
    a: "No. Describe the work in plain language and Helmet decides how much process it deserves. The only command, /helmet, is for checking status, cost and context.",
  },
  {
    q: "How does it save tokens?",
    a: "Skills are short cards, checks run as scripts, each job goes to the cheapest model that can do it, and models only change between cards so provider caches keep hitting.",
  },
  {
    q: "Is my API key safe?",
    a: "Helmet never asks for or stores API keys. Sign-in goes through Hermes itself, and every config change is shown as a diff for your approval.",
  },
  {
    q: "Is it free?",
    // TODO: replace the placeholder with the license and repository link.
    a: "Yes. Helmet is an independent open-source project. [LICENSE AND REPO LINK]",
  },
] as const;

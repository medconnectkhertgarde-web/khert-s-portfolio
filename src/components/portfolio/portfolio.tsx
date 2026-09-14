import { useEffect, useState } from "react";
import { ArrowDown, Mail, Menu, Moon, Phone, Sun, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ClinicalStudies } from "./clinical-studies";

const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Clinical studies", "clinical-studies"],
  ["Contact", "contact"],
] as const;

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("khert-theme");
    const nextDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("khert-theme", next ? "dark" : "light");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label={`Switch to ${dark ? "light" : "dark"} theme`}>
      {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </Button>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[68rem] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="font-mono text-[0.7rem] font-medium uppercase text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          Khert Laguna Garde
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="nav-link">{label}</a>
          ))}
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-navigation" className="border-t border-border bg-background px-4 py-3 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-[68rem]">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="border-b border-border py-3 font-mono text-xs uppercase last:border-0">
                {label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="flex min-h-[calc(100svh-4rem)] scroll-mt-16 flex-col justify-between border-b border-border py-10 sm:py-14">
      <div className="grid gap-10 md:grid-cols-[1fr_14rem] md:items-start md:gap-16">
        <div>
          <p className="mb-5 font-mono text-xs uppercase text-muted-foreground">Independent researcher · Philippines</p>
          <h1 className="max-w-3xl text-[clamp(2.6rem,8vw,6.7rem)] font-semibold leading-[0.92] text-foreground">
            Khert Laguna Garde
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-foreground sm:text-base">
            <span>Independent Researcher</span><span className="text-muted-foreground" aria-hidden="true">/</span><span>Medicine · Clinical Studies</span>
          </div>
          <p className="mt-6 max-w-2xl text-[0.95rem] leading-7 text-muted-foreground">
            Independent researcher with a strong interest in medicine and clinical studies. I explore medical conditions, diagnostic approaches, disease mechanisms, treatment principles, and clinical scenarios through structured independent research and study.
          </p>
        </div>
        <div className="aspect-[4/5] w-full max-w-[14rem] border border-border bg-muted" aria-label="Profile photo placeholder">
          <div className="flex h-full items-center justify-center font-mono text-[0.65rem] uppercase text-muted-foreground">Profile photo</div>
        </div>
      </div>
      <a href="#about" className="mt-12 inline-flex w-fit items-center gap-2 font-mono text-[0.68rem] uppercase text-muted-foreground transition-colors hover:text-foreground">
        Continue <ArrowDown className="size-3.5" aria-hidden="true" />
      </a>
    </section>
  );
}

function SectionHeading({ number, children, id }: { number: string; children: string; id: string }) {
  return <h2 id={id} className="font-mono text-xs font-medium uppercase text-foreground">{number} — {children}</h2>;
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border py-16 sm:py-24" aria-labelledby="about-heading">
      <div className="grid gap-10 md:grid-cols-[15rem_1fr]">
        <SectionHeading number="01" id="about-heading">About</SectionHeading>
        <div className="max-w-2xl space-y-5 text-[0.95rem] leading-7 text-muted-foreground">
          <p>I’m an independent researcher with a growing focus on medicine and clinical studies. My work centers on understanding diseases, clinical presentation, diagnostic reasoning, treatment principles, and evidence-based approaches to patient scenarios.</p>
          <p>I enjoy turning complex medical topics into structured and understandable study materials while continuously expanding my knowledge across different areas of medicine.</p>
        </div>
      </div>
    </section>
  );
}

const experiences = [
  {
    company: "Concentrix",
    role: "Customer Service Representative",
    description: "Handled customer inquiries and service concerns while providing clear, professional, and timely support. The role involved understanding customer needs, explaining information accurately, resolving concerns when possible, documenting interactions, following account procedures, and escalating complex issues when necessary.",
    note: "A Customer Service Representative serves as a primary point of contact between a company and its customers, helping answer questions, resolve concerns, provide information, and maintain a positive customer experience.",
  },
  {
    company: "Sutherland Global Services",
    role: "Business Process Outsourcing — Healthcare Account",
    description: "Worked within a healthcare-focused BPO account supporting account operations and customer interactions according to established company and account procedures.",
  },
];

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-border py-16 sm:py-24" aria-labelledby="experience-heading">
      <SectionHeading number="02" id="experience-heading">Experience</SectionHeading>
      <div className="mt-10">
        {experiences.map((item, index) => (
          <article key={item.company} className="grid gap-5 border-t border-border py-8 md:grid-cols-[4rem_12rem_1fr] md:gap-8">
            <span className="font-mono text-[0.68rem] text-muted-foreground">0{index + 1}</span>
            <div>
              <h3 className="text-sm font-medium text-foreground">{item.company}</h3>
              <p className="mt-1 font-mono text-[0.66rem] uppercase leading-5 text-muted-foreground">{item.role}</p>
            </div>
            <div className="max-w-2xl text-sm leading-6 text-muted-foreground">
              <p>{item.description}</p>
              {item.note ? <p className="mt-4 border-l border-border pl-4 text-xs leading-5">{item.note}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-16 sm:py-24" aria-labelledby="contact-heading">
      <div className="grid gap-10 md:grid-cols-[15rem_1fr]">
        <SectionHeading number="04" id="contact-heading">Contact</SectionHeading>
        <div>
          <p className="max-w-xl text-[0.95rem] leading-7 text-muted-foreground">For research-related inquiries, professional opportunities, and other communications.</p>
          <div className="mt-10 grid border-t border-border">
            <a href="mailto:medconnect.khertgarde@gmail.com" className="contact-link">
              <span className="font-mono text-[0.68rem] uppercase text-muted-foreground">Email</span>
              <span className="min-w-0 break-all text-sm sm:text-base">medconnect.khertgarde@gmail.com</span>
              <Mail className="size-4" aria-hidden="true" />
            </a>
            <a href="tel:+639307732588" className="contact-link">
              <span className="font-mono text-[0.68rem] uppercase text-muted-foreground">Phone</span>
              <span className="text-sm sm:text-base">09307732588</span>
              <Phone className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-end sm:justify-between">
        <div><p className="font-medium text-foreground">Khert Laguna Garde</p><p className="mt-1">Independent Researcher</p></div>
        <p className="font-mono text-[0.65rem] uppercase">© {new Date().getFullYear()} Khert Laguna Garde</p>
      </div>
    </footer>
  );
}

export function Portfolio() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[68rem] px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Experience />
        <ClinicalStudies />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
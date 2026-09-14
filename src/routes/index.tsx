import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khert Laguna Garde — Independent Researcher" },
      { name: "description", content: "Portfolio of Khert Laguna Garde, an independent researcher focused on medicine and clinical studies." },
      { property: "og:title", content: "Khert Laguna Garde — Independent Researcher" },
      { property: "og:description", content: "Portfolio of Khert Laguna Garde, an independent researcher focused on medicine and clinical studies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

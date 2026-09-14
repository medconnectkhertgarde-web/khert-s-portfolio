import React, { Suspense, useEffect, useState, type ErrorInfo, type ReactNode } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowDownToLine, ArrowUpRight, FileText, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/lib/supabase";

export interface ClinicalStudy {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  published_at: string | null;
  gdrive_file_id: string | null;
  filename: string | null;
  is_published: boolean;
  sort_order: number;
  created_at: string;
}

const studiesQuery = {
  queryKey: ["clinical-studies"],
  queryFn: async (): Promise<ClinicalStudy[]> => {
    const { data, error } = await supabase
      .from("clinical_studies")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false })
      .order("sort_order", { ascending: true });

    if (error) throw error;
    return data ?? [];
  },
  staleTime: 5 * 60_000,
};

function formatDate(value: string | null) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(date);
}

function StudyCard({ study, onView }: { study: ClinicalStudy; onView: () => void }) {
  const published = formatDate(study.published_at);
  const downloadUrl = study.gdrive_file_id
    ? `https://drive.usercontent.google.com/download?id=${encodeURIComponent(study.gdrive_file_id)}&export=download`
    : null;

  return (
    <article className="group grid gap-6 border-t border-border py-7 md:grid-cols-[10rem_1fr_auto] md:items-start">
      <div className="flex items-center gap-3 font-mono text-[0.7rem] uppercase text-muted-foreground">
        <span>{study.category || "Clinical study"}</span>
        {published ? <span aria-label={`Published ${published}`}>{published}</span> : null}
      </div>
      <div className="min-w-0">
        <h3 className="text-lg font-medium leading-snug text-foreground">{study.title}</h3>
        {study.summary ? (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{study.summary}</p>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-2 md:justify-end">
        <Button size="sm" onClick={onView} disabled={!study.gdrive_file_id}>
          <FileText aria-hidden="true" />
          View study
        </Button>
        {downloadUrl ? (
          <Button asChild size="sm" variant="outline">
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
              <ArrowDownToLine aria-hidden="true" />
              Download
            </a>
          </Button>
        ) : (
          <Button size="sm" variant="outline" disabled>
            <ArrowDownToLine aria-hidden="true" />
            Download
          </Button>
        )}
      </div>
    </article>
  );
}

function StudyViewer({ study, onClose }: { study: ClinicalStudy; onClose: () => void }) {
  const [iframeState, setIframeState] = useState<"loading" | "ready" | "failed">("loading");
  const fileId = study.gdrive_file_id;
  const previewUrl = fileId
    ? `https://drive.google.com/file/d/${encodeURIComponent(fileId)}/preview`
    : null;
  const driveUrl = fileId
    ? `https://drive.google.com/file/d/${encodeURIComponent(fileId)}/view`
    : null;
  const downloadUrl = fileId
    ? `https://drive.usercontent.google.com/download?id=${encodeURIComponent(fileId)}&export=download`
    : null;

  useEffect(() => {
    setIframeState("loading");
    if (!previewUrl) return;
    const timeout = window.setTimeout(() => setIframeState("failed"), 15_000);
    return () => window.clearTimeout(timeout);
  }, [previewUrl]);

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="flex h-[94dvh] w-[calc(100%-1rem)] max-w-[76rem] grid-rows-[auto_1fr] gap-0 overflow-hidden rounded-md border-border bg-background p-0 shadow-2xl sm:w-[calc(100%-2rem)]">
        <header className="flex min-w-0 flex-col gap-3 border-b border-border px-4 py-4 pr-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="min-w-0">
            <DialogTitle className="truncate text-base font-medium">{study.title}</DialogTitle>
            <DialogDescription className="mt-1 font-mono text-[0.68rem] uppercase">
              {study.category || "Clinical study"}
            </DialogDescription>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            {driveUrl ? (
              <Button asChild size="sm" variant="outline">
                <a href={driveUrl} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight aria-hidden="true" />
                  Open in Drive
                </a>
              </Button>
            ) : null}
            {downloadUrl ? (
              <Button asChild size="sm">
                <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                  <ArrowDownToLine aria-hidden="true" />
                  Download
                </a>
              </Button>
            ) : null}
          </div>
        </header>
        <div className="relative min-h-0 bg-muted">
          {previewUrl && iframeState !== "failed" ? (
            <>
              {iframeState === "loading" ? (
                <div className="absolute inset-0 grid place-items-center" role="status">
                  <LoaderCircle className="animate-spin" aria-hidden="true" />
                  <span className="sr-only">Loading study viewer</span>
                </div>
              ) : null}
              <iframe
                className="relative h-full w-full border-0 bg-background"
                src={previewUrl}
                title={`${study.title} document viewer`}
                loading="lazy"
                onLoad={() => setIframeState("ready")}
                onError={() => setIframeState("failed")}
              />
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
              <FileText className="text-muted-foreground" aria-hidden="true" />
              <p className="text-sm text-muted-foreground">
                This document could not be displayed inside the website.
              </p>
              {driveUrl ? (
                <Button asChild size="sm">
                  <a href={driveUrl} target="_blank" rel="noopener noreferrer">
                    Open in Google Drive
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function StudiesList() {
  const { data: studies } = useSuspenseQuery(studiesQuery);
  const [selected, setSelected] = useState<ClinicalStudy | null>(null);

  if (studies.length === 0) {
    return (
      <div className="border-t border-border py-12 text-sm text-muted-foreground">
        Clinical studies will appear here once published.
      </div>
    );
  }

  return (
    <>
      <div>{studies.map((study) => <StudyCard key={study.id} study={study} onView={() => setSelected(study)} />)}</div>
      {selected ? <StudyViewer study={selected} onClose={() => setSelected(null)} /> : null}
    </>
  );
}

class StudiesErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    void error;
    void info;
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="border-t border-border py-12 text-sm text-muted-foreground" role="status">
          Clinical studies are temporarily unavailable.
        </div>
      );
    }
    return this.props.children;
  }
}

function StudiesLoading() {
  return (
    <div className="border-t border-border py-12" role="status">
      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase text-muted-foreground">
        <LoaderCircle className="animate-spin" aria-hidden="true" />
        Loading clinical studies
      </span>
    </div>
  );
}

export function ClinicalStudies() {
  return (
    <section id="clinical-studies" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="studies-heading">
      <div className="mb-10 flex items-baseline justify-between gap-4">
        <h2 id="studies-heading" className="font-mono text-xs font-medium uppercase text-foreground">
          03 — Recent clinical studies
        </h2>
        <span className="hidden font-mono text-[0.65rem] uppercase text-muted-foreground sm:block">Published work</span>
      </div>
      <StudiesErrorBoundary>
        <Suspense fallback={<StudiesLoading />}>
          <StudiesList />
        </Suspense>
      </StudiesErrorBoundary>
    </section>
  );
}
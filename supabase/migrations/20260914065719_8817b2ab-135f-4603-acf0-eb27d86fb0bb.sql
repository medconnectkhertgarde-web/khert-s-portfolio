CREATE TABLE public.clinical_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  summary text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT '',
  published_at timestamptz,
  gdrive_file_id text,
  filename text,
  is_published boolean NOT NULL DEFAULT false,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.clinical_studies TO anon;
GRANT SELECT ON public.clinical_studies TO authenticated;
GRANT ALL ON public.clinical_studies TO service_role;

ALTER TABLE public.clinical_studies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published clinical studies are publicly readable"
ON public.clinical_studies
FOR SELECT
TO anon, authenticated
USING (is_published = true);

CREATE INDEX clinical_studies_publication_order_idx
ON public.clinical_studies (published_at DESC NULLS LAST, sort_order ASC)
WHERE is_published = true;
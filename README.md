# Khert's Portfolio

Create and fully implement a polished, production-ready personal portfolio web application for:

KHERT LAGUNA GARDE

Do not stop after creating a plan, mockup, partial implementation, or a few components. Actually build the complete frontend, connect all required frontend logic, make sure the project builds successfully, fix errors before finishing, and only end once the requested implementation is complete.

Be efficient with tokens and chat output. Do not waste responses explaining what you are about to do. Implement directly. Keep explanations extremely short unless something absolutely requires manual user configuration.

IMPORTANT: Do not generate fake information, fake photographs, fake profiles, fake social-media accounts, fake statistics, fake testimonials, fake achievements, fake employers, fake clinical qualifications, fake licenses, fake education, fake projects, or fake contact details.

Do not describe Khert Laguna Garde as a physician, medical doctor, licensed healthcare professional, medical student, clinician, or holder of any qualification that was not specifically provided.

The portfolio should identify him primarily as:

Independent Researcher
Focus: Medicine and Clinical Studies

Do not describe his primary focus as cybersecurity, programming, software development, technology, or computer science.

TECH STACK

Use a lightweight modern frontend:

* React
* TypeScript
* Vite
* Tailwind CSS
* Supabase JavaScript client
* Lucide icons only where useful

Do not introduce unnecessary frameworks.

Avoid:

* Three.js
* WebGL
* complex particle effects
* heavy animation libraries
* unnecessary background videos
* excessive npm packages
* oversized JavaScript bundles

Use normal CSS/Tailwind transitions wherever possible.

The application will eventually be deployed on Vercel.

DESIGN DIRECTION

Use https://bryllim.com/ as the primary visual inspiration.

Do NOT make a pixel-perfect clone and do NOT copy his text, projects, navigation, interactive features, personal content, statistics, or branding.

Instead, reproduce the overall design language:

* highly polished minimalist portfolio
* monochrome aesthetic
* white / off-white background in light mode
* true or near-black typography
* black background with light typography in dark mode
* restrained gray shades
* almost no accent colors
* editorial appearance
* technical-zine feeling
* highly structured information
* thin horizontal separators
* numbered sections such as:
  01 — About
  02 — Experience
  03 — Clinical Studies
  04 — Contact
* clean spacing
* narrow readable content width
* large but not oversized name typography
* compact typography throughout
* small monospace labels
* subtle hover animations
* subtle inverted buttons
* rounded elements only where appropriate
* professional rather than corporate
* modern but not flashy

TYPOGRAPHY

Prefer:

Primary:
Geist

Secondary / technical labels:
Geist Mono

Fallback:
system-ui, sans-serif
ui-monospace, monospace

Keep typography compact.

Body text should generally feel around 15–16px rather than oversized landing-page typography.

Use uppercase monospace labels sparingly for metadata, section numbers, dates, categories, and interface labels.

Do not use random decorative fonts.

Implement proper light and dark themes.

If adding a theme control, use a very small unobtrusive theme toggle in the navigation.

LAYOUT

Create a responsive centered container.

Desktop:
approximately 900–1100px maximum content width.

Tablet:
adapt naturally without squeezing content.

Mobile:
single-column layout with excellent spacing.

The site must work correctly on:

* 320px phones
* ordinary smartphones
* tablets
* laptops
* desktop monitors
* ultrawide screens

No horizontal overflow at any breakpoint.

HEADER / NAVIGATION

Create a compact navigation header.

Left:
KHERT LAGUNA GARDE

Right:
ABOUT
EXPERIENCE
CLINICAL STUDIES
CONTACT

Use smooth anchor scrolling.

On small screens create a clean mobile navigation implementation.

Do not create unnecessary links such as:

* Blog
* Shop
* GitHub
* LinkedIn
* Instagram
* X
* YouTube
* Discord
* Community

unless those links are explicitly provided later.

HERO

Create a strong minimalist introduction.

Include a real profile-image PLACEHOLDER, not an AI-generated avatar.

The placeholder can simply be a neutral bordered image container saying:

PROFILE PHOTO

Do not generate a human face.

Make it extremely easy to later replace the placeholder with:

/public/profile.jpg

Main content:

Khert Laguna Garde

Independent Researcher

Medicine · Clinical Studies

Write a concise professional description similar to:

“Independent researcher with a strong interest in medicine and clinical studies. I explore medical conditions, diagnostic approaches, disease mechanisms, treatment principles, and clinical scenarios through structured independent research and study.”

Keep the wording credible.

Do not imply that he personally diagnoses or treats patients.

Do not claim that his independent clinical studies constitute peer-reviewed medical research unless explicitly stated later.

Include a subtle indicator beneath the introduction such as:

Based in the Philippines

Only if appropriate. Do not generate an exact address.

Do not create fake statistics such as:
“10+ studies”
“500+ readers”
“5 years experience”
or similar.

ABOUT SECTION

Section:

01 — ABOUT

Content should describe Khert professionally as an independent researcher focused on medicine.

Suggested copy:

“I’m an independent researcher with a growing focus on medicine and clinical studies. My work centers on understanding diseases, clinical presentation, diagnostic reasoning, treatment principles, and evidence-based approaches to patient scenarios.

I enjoy turning complex medical topics into structured and understandable study materials while continuously expanding my knowledge across different areas of medicine.”

Do not mention cybersecurity.

Do not emphasize software development or technology.

Keep it professional, concise, and natural.

EXPERIENCE SECTION

Section:

02 — EXPERIENCE

Create a clean chronological experience layout inspired by minimalist editorial CV layouts.

EXPERIENCE 1

Company:
Concentrix

Role:
Customer Service Representative

Description:

“Handled customer inquiries and service concerns while providing clear, professional, and timely support. The role involved understanding customer needs, explaining information accurately, resolving concerns when possible, documenting interactions, following account procedures, and escalating complex issues when necessary.”

Add a subtle secondary explanation of what Customer Service Representative means:

“A Customer Service Representative serves as a primary point of contact between a company and its customers, helping answer questions, resolve concerns, provide information, and maintain a positive customer experience.”

Do not create employment dates unless dates are later provided.

EXPERIENCE 2

Company:
Sutherland Global Services

Role:
Business Process Outsourcing — Healthcare Account

Use the correct term “Business Process Outsourcing (BPO),” not “Business Processing Outsourcing.”

Description:

“Worked within a healthcare-focused BPO account supporting account operations and customer interactions according to established company and account procedures.”

Keep this description intentionally general.

Do NOT invent duties involving:

* clinical patient care
* medical decision-making
* insurance claims
* medical coding
* prior authorization
* HIPAA compliance responsibilities
* pharmacy operations
* nursing
* diagnosis
* prescriptions
* laboratory work

unless these responsibilities are specifically provided later.

CLINICAL STUDIES SECTION

Section:

03 — RECENT CLINICAL STUDIES

This is one of the most important sections.

It must NOT use hardcoded fake studies.

Clinical-study content must dynamically load from Supabase.

If the Supabase table contains no published studies, show a tasteful empty state:

“Clinical studies will appear here once published.”

Do not generate demo study records.

The Supabase table will be:

clinical_studies

Expected fields:

id
title
slug
summary
category
published_at
gdrive_file_id
filename
is_published
sort_order
created_at

Only request records where:

is_published = true

Order primarily by published_at descending.

Study cards should show:

* title
* category
* short summary
* publication date when available
* View Study button
* Download button

Do not load every Google Drive iframe when the homepage first loads.

This is critical for performance.

Only load the Google Drive viewer AFTER the visitor clicks “View Study.”

STUDY VIEWER

When “View Study” is clicked:

Open a polished responsive modal or full-screen viewer.

Desktop:
large centered viewer.

Mobile:
nearly full-screen viewer.

Viewer header:

Study title
Category
Close button
Open in Google Drive
Download

Embed the Google Drive document using:

https://drive.google.com/file/d/{gdrive_file_id}/preview

Use an iframe.

The iframe should:

* width: 100%
* use most of the available viewport height
* have no ugly external border
* load lazily
* include an appropriate title attribute
* remain usable on mobile devices

For downloading, generate:

https://drive.usercontent.google.com/download?id={gdrive_file_id}&export=download

Also include:

“Open in Google Drive”

using:

https://drive.google.com/file/d/{gdrive_file_id}/view

Open external links in a new tab with appropriate security attributes.

If the iframe cannot be displayed, show a graceful fallback:

“This document could not be displayed inside the website.”

Then provide:

Open in Google Drive

Do not show a broken iframe indefinitely.

SUPABASE

Install and configure:

@supabase/supabase-js

Create:

src/lib/supabase.ts

Use:

VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY

Do not hardcode Supabase credentials into source files.

Never use:
SUPABASE_SECRET_KEY
service_role
private backend credentials

inside browser code.

The frontend should query approximately:

supabase
.from("clinical_studies")
.select("*")
.eq("is_published", true)
.order("published_at", { ascending: false })

Handle:

loading state
empty state
Supabase connection error
missing Drive file ID
invalid date
iframe loading

Do not make the entire page crash if Supabase is unavailable.

If Supabase fails, display:

“Clinical studies are temporarily unavailable.”

Keep the rest of the portfolio usable.

Do not implement user authentication.

Do not implement visitor accounts.

Do not implement an admin dashboard.

I will manage the records directly through Supabase.

CONTACT SECTION

Section:

04 — CONTACT

Use this exact contact information:

Email:
[medconnect.khertgarde@gmail.com](mailto:medconnect.khertgarde@gmail.com)

Phone:
09307732588

EMAIL

Display:

[medconnect.khertgarde@gmail.com](mailto:medconnect.khertgarde@gmail.com)

Make it clickable using:

mailto:medconnect[.khertgarde@gmail.com](mailto:.khertgarde@gmail.com)

Do NOT create:

* contact form
* email composition form
* message textarea
* backend email service
* newsletter form

PHONE

Display:

09307732588

Make it clickable using:

tel:+639307732588

On supported phones, clicking should open the phone dialer.

Desktop hover states should clearly indicate that both contact items are clickable.

CONTACT COPY

Use a minimal line such as:

“For research-related inquiries, professional opportunities, and other communications.”

Do not add fake office hours or addresses.

FOOTER

Very minimal.

Example:

Khert Laguna Garde
Independent Researcher

© current year Khert Laguna Garde

No “Made with Lovable.”

No “Built with Lovable.”

No promotional badges.

No fake social icons.

PROFILE PHOTO

Create only a placeholder.

Do not generate a stock image.

Do not use Unsplash.

Do not use DiceBear.

Do not generate an AI avatar.

Later I will replace the placeholder with an actual photograph.

RESPONSIVENESS

Test the complete site at approximately:

320px
375px
430px
768px
1024px
1440px
1920px

Make sure:

* headings do not overflow
* navigation works
* email address wraps safely
* experience rows stack properly
* study cards remain readable
* viewer works on mobile
* buttons remain accessible
* iframe fits mobile screens
* touch targets are large enough
* no horizontal scroll exists

ACCESSIBILITY

Use semantic HTML.

Use:
header
nav
main
section
article
footer

Provide proper:
aria-labels
button labels
focus states
keyboard navigation
modal focus management
Escape-to-close behavior

Respect:

prefers-reduced-motion

Maintain good contrast in both themes.

PERFORMANCE

The portfolio must remain extremely lightweight.

Important rules:

* Lazy-load profile photograph
* Lazy-load the Google Drive iframe
* Do not preload Drive files
* Do not make unnecessary Supabase queries
* Query the study table once
* Avoid large dependencies
* Avoid unnecessary re-renders
* use responsive CSS
* optimize production build
* keep animations CSS-based
* avoid huge images
* use loading="lazy" where appropriate

SEO

Set:

<title>Khert Laguna Garde — Independent Researcher</title>

Meta description:

“Portfolio of Khert Laguna Garde, an independent researcher focused on medicine and clinical studies.”

Add sensible:
Open Graph title
Open Graph description
canonical metadata structure
favicon placeholder

Do not create a fake Open Graph portrait.

CODE QUALITY

Use clean reusable components such as:

Header
Hero
About
Experience
ClinicalStudies
StudyCard
StudyViewer
Contact
Footer

Use a typed interface for ClinicalStudy.

Avoid giant monolithic components.

Avoid duplicated markup.

Avoid unnecessary abstraction.

Do not leave:
TODO
FIXME
placeholder JavaScript
unfinished buttons
broken routes
mock APIs
console errors
unused packages
unused imports

LOVABLE-SPECIFIC REQUIREMENTS

Do not place Lovable branding in the visible website.

Do not intentionally create:

“Made with Lovable”
“Built using Lovable”
Lovable badges
Lovable footer text
Lovable promotional links

Do not create fake testimonials or content just to make the page look fuller.

Do not generate fake profile photographs.

Do not create sample clinical studies just to fill the database section.

Make the real content look intentionally minimal rather than filling empty space with invented information.

FINAL QUALITY CHECK

Before ending:

1. Complete every requested section.
2. Make sure Supabase integration code exists.
3. Make sure Drive viewer logic exists.
4. Make sure email and phone links work.
5. Make sure no fake profiles or photographs were generated.
6. Make sure responsive behavior is implemented.
7. Run the production build.
8. Fix TypeScript errors.
9. Fix build errors.
10. Remove obvious console warnings caused by your implementation.
11. Make sure the page works even when the clinical_studies table is empty.
12. Make sure Google Drive is not loaded until a study is opened.
13. Make sure no secret Supabase credentials are required by the client.
14. Do not end the task while major requested functionality remains unfinished.

Be concise in the chat.

Spend the available effort implementing the application instead of repeatedly describing implementation steps.

Finish the complete implementation before returning the final response.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/19866d63-61bc-4cfd-beeb-8ffeab87f023).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

# uploads/

Drop new content here. This is the source of truth for everything Pranika
writes or photographs. Nothing in `uploads/` is served by the site — it's
just where originals live. The site reads from `public/` (processed images,
rendered MDX, etc.). Once you drop something here, ask Claude to process
it and it'll show up on the site.

## Folders

| Folder         | What goes in                                                                                                   |
| -------------- | -------------------------------------------------------------------------------------------------------------- |
| `profile/`     | Your profile photo (one image, shown on Home and About).                                                       |
| `aboutme/`     | The About-me bio. One text file, edit any time — Claude will re-sync `src/pages/about.astro` from it.          |
| `blog/`        | Blog post drafts. Filename `MMDDYYYY.txt`; first line = title; rest = body. Use `------------` for HR breaks.  |
| `of-hands-and-hours/` | For the *Of hands and hours* page: sketchbook pages, paintings, drawings, resin, magnets, anything made by hand. |
| `to-see-and-to-see-again/` | For the *To See, and to See Again.* page. One subfolder per day (`MMDDYYYY/`), two photos + a `Metadata.txt` per day. |

## Workflow

1. Drop the raw file(s) into the matching folder above.
2. Tell Claude: *"process the new drops"* (or point at a specific file).
3. For images: Claude rotates per EXIF, resizes (max width 1400), strips metadata,
   and writes the processed copy to `public/images/<folder>/`.
4. For text: Claude creates / updates the matching MDX or Astro page.

## Where things end up

| Drop here                    | Processed copy / rendered output                       |
| ---------------------------- | ------------------------------------------------------ |
| `uploads/profile/<file>`     | `public/images/profile/avatar.jpg`                     |
| `uploads/aboutme/about.txt`  | Bio paragraphs in `src/pages/about.astro`              |
| `uploads/blog/<MMDDYYYY>.txt`| `src/content/blog/<slug>.mdx`                          |
| `uploads/of-hands-and-hours/<file>` | `public/images/of-hands-and-hours/<file>` + MDX in `src/content/projects/sketches` (drawings) or `src/content/projects/craft` (3-D things) |
| `uploads/summer/dayN/<file>` | `public/images/summer/day-NN-<name>.jpg` + MDX in `src/content/projects/photography` |

Originals stay in `uploads/` so re-processing is always safe. Don't edit
files in `public/` directly — re-drop into `uploads/` and re-process.

# Podcast Videos

This folder holds the podcast `.mp4` files served from `/videos/*` on the site.

The actual video files are **not committed to git** (see `.gitignore`) because they are large (hundreds of MB each) and would blow past GitHub's per-file 100 MB limit.

## Expected files

| URL path                     | Local file                            |
| ---------------------------- | ------------------------------------- |
| `/videos/RT_PODCAST_EP_01.mp4` | `public/videos/RT_PODCAST_EP_01.mp4` |
| `/videos/RT_PODCAST_EP_02.mp4` | `public/videos/RT_PODCAST_EP_02.mp4` |

## When deploying

After `next build`, upload the `public/videos/` folder to the same path on the server (so the deployed site has `public/videos/RT_PODCAST_EP_01.mp4` on disk). Any of these work:

- SCP / SFTP / FTP upload
- `rsync -av public/videos/ user@server:/path/to/public/videos/`
- Hosting provider's file manager
- If deploying to Vercel: use Vercel Blob or an external CDN (Cloudflare R2, Bunny CDN) and update the `<video src>` to the CDN URL

For heavy traffic, prefer a CDN or YouTube embed instead of serving large MP4s from the Next.js server.

# MD Bazlur Rahman Likhon - Profile README

## Overview
A GitHub profile README rendered as a static web page in Replit.

## Architecture
- **Type**: Static website
- **Language**: Node.js (no framework)
- **Server**: `server.js` — reads `README.md`, renders it to HTML using `marked`, and serves it via a basic HTTP server
- **Port**: 5000 (host: 0.0.0.0)

## Files
- `README.md` — the profile/portfolio content (source of truth)
- `server.js` — HTTP server that renders the README as a styled HTML page
- `package.json` — Node.js project file with `marked` dependency

## Running
The "Start application" workflow runs `node server.js` and serves on port 5000.

## Dependencies
- `marked` — Markdown to HTML parser

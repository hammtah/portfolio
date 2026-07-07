---
title: Findit — Lost & Found
description: A mobile lost-and-found platform that matches reports by location and category, then connects people through real-time chat to coordinate returns — built as a team project with a NestJS API and Expo app.
repo: https://github.com/hammtah/findit
image: /images/projects/findit.jpg
featured: true
year: '2026'
tags:
  - React Native
  - Expo
  - NestJS
  - TypeScript
  - PostgreSQL
  - PostGIS
  - Socket.io
  - Academic
order: 2
---

## Project brief

**findit** is a mobile app that helps people get lost items back. Users post **lost** or **found** reports with photos, category, date, and location. The backend compares reports and surfaces likely matches; when two users connect, they chat in-app to arrange a handoff — without sharing phone numbers upfront.

**Team project** — built by three developers: [Ayyoub EL Kouri](https://github.com/AyyoubElKouri), [Taha Hammadate](https://github.com/hammtah), and [Yassine El Barni](https://github.com/yassineelbarni-u).

**Four pillars:**

| Pillar | What it means |
|--------|----------------|
| **Report** | Lost/found items with photos, category, time, and GPS location |
| **Discover** | Feed with filters + map with photo markers nearby |
| **Match** | Score-based pairing by distance, category, date, and text similarity |
| **Connect** | Real-time chat, push notifications, reviews after a return |

---

## The problem

You lose something — or find something — and the usual options are scattered: social posts, bulletin boards, or city lost-and-found offices with no way to know if anyone nearby has the opposite report. You need a single place to **post**, **see what’s close**, **spot a likely match**, and **talk safely** until the item is returned.

findit ties those steps together in one app.

---

## Mobile app

### Feed & filters

Browse nearby reports in a scrollable feed. Filter by type (lost/found), radius, category, date range, and status.

### Map

See reports on an interactive map with photo markers. Tap a pin to open the full report.

### Create a report

Multi-step flow: item details, category, when/where it was lost or found, photos, and geolocation.

### Chat

When a match looks right, start a conversation. Status flows from pending → active → archived, with push notifications for new messages.

---

## Smart matching

When a report is created, the API looks for opposite-type reports in the same category, within a geographic radius, with overlapping dates. Each candidate gets a **score** from:

- **Distance** — closer reports rank higher (PostGIS)
- **Text similarity** — title and description overlap
- **Date proximity** — lost/found events close in time

Matches above a threshold are saved and surfaced on the report detail screen so users can reach out.

---

## Backend & infrastructure

| Layer | Stack |
|-------|--------|
| **API** | NestJS 11, TypeScript, TypeORM |
| **Database** | PostgreSQL 16 + PostGIS 3.4 |
| **Real-time** | Socket.io (chat gateway) |
| **Auth** | JWT, refresh tokens, Google OAuth, Apple Sign In |
| **Media** | Cloudinary |
| **Push** | Expo Push Notifications |
| **Infra** | Docker Compose (PostGIS + pgAdmin) |

---

## Architecture (modules)

| Module | Role |
|--------|------|
| `findit-api/modules/reports` | CRUD, geospatial listing, photo metadata |
| `findit-api/modules/matching` | Match scoring and candidate search |
| `findit-api/modules/conversations` | Match-based contact requests |
| `findit-api/modules/messages` | Chat messages + Socket.io gateway |
| `findit-api/modules/auth` | Registration, login, OAuth, token refresh |
| `findit-api/modules/reviews` | Post-return ratings |
| `findit-mobile` | Expo app — feed, map, create report, chat, profile |

---

## Why it is useful

- **Local-first** — radius-based feed and map, not a global dump of posts
- **Automatic hints** — matching reduces manual scrolling through unrelated reports
- **Private coordination** — in-app chat instead of exposing personal contact info
- **Trust loop** — reviews and flagging after interactions

findit is built for the full path: **report → discover → match → return**.

---

## Links

- **Repository:** [https://github.com/hammtah/findit](https://github.com/hammtah/findit)
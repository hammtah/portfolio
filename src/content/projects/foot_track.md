---
title: Moroccan Football Platform
description: A PHP web platform for BOTOLA-style tournament tracking — match results, standings, upcoming fixtures with live countdowns, and split admin roles for league vs. tournament management.
repo: https://github.com/hammtah/foot_match_track
image: /images/projects/foot_match_track.jpg
featured: true
year: '2025'
tags:
  - PHP
  - SQLite
  - JavaScript
  - HTML/CSS
  - MySQL
order: 3
---

## Project brief

**foot_match_track** is a web app for following Moroccan football tournaments. Fans browse **results**, **standings**, and **upcoming matches**; admins manage teams, players, fixtures, scores, and stats from dedicated dashboards.

**Team academic project** — built by [Taha Hammadate](https://github.com/hammtah) and [Jounaid Ayoub](https://github.com/Jounaidayoub).

**Four pillars:**

| Pillar | What it means |
|--------|----------------|
| **Follow** | Home feed with latest results, upcoming fixtures, and kickoff countdowns |
| **Explore** | Match details — stats, scorers, head-to-head, polls, and comments |
| **Rank** | Live classement (points, goal difference, goals scored) per tournament |
| **Manage** | Role-based admin — league-wide setup vs. per-tournament match operations |

---

## The problem

Local tournament data is often scattered: scores in spreadsheets, schedules in messages, no single place for fans to check standings or the next fixture. Admins need separate tools to register teams, schedule matches, and publish results without breaking the public view.

foot_match_track puts the **fan experience** and **admin workflows** in one app.

---

## Fan experience

### Home

Hero banner for the next upcoming match (team logos, date, live **time left** countdown). Tabs for latest results and coming fixtures, plus follow/unfollow clubs.

### Match details

Per-match page with score or “vs” for upcoming games, venue, attendance, goal scorers, possession/shots stats, win poll, and a comments tab.

### Teams & standings

Team profiles and tournament **classement** table — points, goal difference, and goals scored, updated from match results.

---

## Admin roles

| Role | Scope |
|------|--------|
| **General admin** | Teams, players, stadiums, referees, publications, tournament admins |
| **Tournament admin** | Schedule matches, enter scores & events, lineups, match statistics |

Authentication uses email/password with role-based routing after login.

---

## Stack

| Layer | Choice |
|-------|--------|
| **Backend** | PHP 8, PDO |
| **Database** | SQLite (auto-init + seed on first run) |
| **Frontend** | Server-rendered PHP, CSS, vanilla JavaScript |
| **API-style endpoints** | JSON handlers for match fetch, goals, stats, comments |

No Composer, Node build step, or external DB server — run locally with `php -S localhost:8000`.

---

## Architecture (areas)

| Area | Role |
|------|------|
| `home/` | Latest & upcoming matches, countdowns, team follow bar |
| `match/` | Match details UI + comments |
| `includes/` | DB, header, classement, notifications, search |
| `admin-general/` | League-wide CRUD and dashboard |
| `admin-tournoi/` | Tournament match management, lineups, goals |
| `database/` | SQLite schema, seed import, upcoming-match patch |

---

## Why it is useful

- **Single source** for fixtures, results, and standings
- **Two admin levels** — league setup vs. day-to-day tournament ops
- **Low setup cost** — SQLite file DB, one PHP command to run
- **Fan-focused UI** — countdowns, polls, and match detail pages out of the box

Built for the path: **discover → follow → check match → see standings**.

---

## Links

- **Repository:** [https://github.com/hammtah/foot_match_track](https://github.com/hammtah/foot_match_track)

---
title: Pathfinding Visualizer
description: An interactive full-stack platform that compares BFS, Dijkstra, and A* on procedural mazes with weighted swamps — watch algorithms explore the grid in real time and see why terrain cost changes everything.
repo: https://github.com/hammtah/PathFinding
image: /images/projects/path-finding.png
featured: true
year: '2026'
tags:
  - C++
  - React
  - Pathfinding
  - Visualization
  - Docker
  - Academic
order: 2
---

## Project brief

**Pathfinding Visualizer** is a browser-based tool for **seeing** how shortest-path algorithms behave — not just reading pseudocode. Generate a maze, sprinkle in swamps with higher traversal cost, pick BFS / Dijkstra / A*, and watch visited cells light up before the final route is drawn.

The core idea: pathfinding is usually taught as three separate algorithms. This project makes the **differences tangible** — especially on **weighted** grids, where BFS optimizes hop count while Dijkstra and A* optimize total cost.

**Four pillars:**

| Pillar | What it means |
|--------|----------------|
| **Visualize** | Animated visited nodes (amber) and shortest path (cyan) on a 40×20 grid |
| **Compare algorithms** | BFS, Dijkstra (priority queue), and A* behind one API and UI |
| **Terrain modeling** | Walls (impassable) + swamps (10× edge cost) to show weighted vs unweighted behavior |
| **Full stack** | C++ Crow backend for computation, React frontend for interaction, Docker for deployment |

---

## The problem

Pathfinding lectures explain queues, priority queues, and heuristics — but it is hard to **feel** why A* visits fewer cells, or why BFS picks a different route once swamps exist.

You need a sandbox where you can:

- **Build** a maze in seconds
- **Run** the same start/end through different algorithms
- **Measure** visited count, path length, and **path weight**

This project is that sandbox.

---

## Screenshots

**Maze setup** — procedural walls, auto-placed swamps, start (green) and end (red):

![Generated maze with walls and swamps](/images/projects/screen-maze.png)

**A* result** — explored region, final path, and stats (path weight reflects swamp cost):

![A* visualization with visited nodes and shortest path](/images/projects/screen-finding.png)

---

## Explore the grid

### Generate & edit

- **Generate Maze** — recursive backtracker on the backend; swamps auto-scattered on free cells
- **Grid controls** — place start/end, draw walls, paint swamps (click or drag)
- **Keyboard shortcut** — `M` regenerates the maze

### What you see on the grid

| Element | Meaning |
|---------|---------|
| Green cell | Start node |
| Red cell | End node |
| Dark blocks | Walls (impassable) |
| Olive + waves | Swamp (cost 10 vs 1) |
| Amber cells | Visited during search |
| Cyan cells | Shortest path found |

Swamps add a **visual delay** and distinct sound when the path crosses them — a cue that cost matters, not just distance in hops.

---

## Swamps — why BFS ≠ Dijkstra

Normal cells have edge weight **1**. Swamp cells have weight **10**.

| Algorithm | Optimizes | With swamps |
|-----------|-----------|-------------|
| **BFS** | Fewest hops | May route through swamps; path weight shown for comparison |
| **Dijkstra** | Minimum total cost | Avoids swamps when a longer hop-count route is cheaper |
| **A\*** | Cost + heuristic | Fewer visited cells than Dijkstra on large grids |

**Path Weight** in Algorithm Stats is the number to watch: same maze, same start/end — switch algorithm and compare.

---

## Architecture

Browser UI talks to a C++ backend over JSON. The backend converts the grid to an adjacency list, runs the selected algorithm, and returns path + visited coordinates.

**Request flow (`/api/path`):**

| Module | Role |
|--------|------|
| `front/path/src/App.jsx` | Grid UI, edit modes, animation, algorithm stats, help guide |
| `back/Server.h` | REST API, CORS, request parsing |
| `back/Grid.h` | Grid → adjacency list; swamp weight 10 |
| `back/PathFinder.h` | Dispatches BFS, Dijkstra, A* |
| `back/Maze.h` | Procedural maze generation |
| `back/BFS.h`, `DijkstraPq.h`, `Astar.h` | Algorithm implementations |
| `docker-compose.yml` | Backend :18080 + frontend :5173 |

---

## Run it

```bash
git clone https://github.com/hammtah/PathFinding
cd PathFinding
docker-compose up -d
# Open http://localhost:5173
```

Or develop locally: `./PathFinding` in `back/build` + `npm run dev` in `front/path`.

---

## Why it is useful

- **CS education** — turn BFS / Dijkstra / A* from symbols into motion on the same maze
- **Weighted graphs** — swamps make “shortest path” ambiguous; the UI shows hop count vs cost
- **Portfolio demo** — full-stack: C++ algorithms, HTTP API, React animation, Docker
- **Experimentation** — draw walls, move endpoints, compare stats without re-reading a textbook

It is not a game engine or robotics stack. It is optimized for **clarity first** — one grid, three algorithms, immediate feedback.

---

## Example session

1. Click **Generate Maze** (or press `M`)
2. Select **Dijkstra** → **Visualize** → note path weight and visited count
3. Switch to **BFS** on the same board → compare path weight (often higher through swamps)
4. Switch to **A\*** → fewer visited cells, similar or better cost

---

## Links

- **Repository:** [github.com/hammtah/PathFinding](https://github.com/hammtah/PathFinding)

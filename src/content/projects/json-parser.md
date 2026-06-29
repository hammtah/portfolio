---
title: json-parser
description: A command-line JSON explorer with a path-based query language — load a file, inspect its shape, and pull out values interactively or from scripts.
repo: https://github.com/hammtah/J-QL
image: /images/projects/json-parser.svg
featured: true
tags:
  - C++
  - CMake
  - JSON
  - CLI
order: 3
---

A small **jq-lite** tool built in C++. Load a JSON file into an interactive REPL, explore its structure with a colored tree view, and run path-based queries to extract values — either at the prompt or in one-shot mode for scripts and pipes.

## Highlights

- Interactive REPL with Tab autocomplete, query history, and meta-commands (`structure`, `print`, `help`)
- Path query language: field access, array indices, wildcards, and string keys (e.g. `players[*].inventory[0].item`)
- One-shot mode (`-q`) with non-zero exit codes on failure for scripting
- CMake build with a Docker image for reproducible builds

## What I learned

Parsing and traversing JSON by hand, designing a small query DSL, and building a pleasant terminal UX — autocomplete, colored structure trees, and clear error messages — without leaning on heavy dependencies.

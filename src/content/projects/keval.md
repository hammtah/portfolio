---
title: Keval
description: A Redis-compatible key-value store built from scratch in Go, featuring custom RESP protocol parsing, concurrency, TTL, and crash-safe persistence.
repo: https://github.com/hammtah/keval
image: /images/projects/keval.png
featured: true
year: '2026'
tags:
  - Go
  - Redis
  - Parsing
  - Eviction
  - Persistence
  - Protocols
  - Hobby
order: 6
---

## Project brief

# keval — Redis-Inspired In-Memory Key-Value Store

> A ground-up implementation of a networked, persistent key-value store in Go, built to deeply understand the internals of systems like Redis.

---

## Overview

**keval** is a concurrent, in-memory key-value store that speaks the **RESP (Redis Serialization Protocol)**, making it wire-compatible with standard Redis clients. Built entirely from scratch in Go with zero external dependencies, the project explores the systems-programming fundamentals behind modern caches and databases: concurrent data access, memory pressure management, TTL-based key expiration, and crash-safe persistence.

| | |
|---|---|
| **Language** | Go |
| **Protocol** | RESP (Redis Serialization Protocol) |
| **Persistence** | Append-Only File (AOF) |
| **Concurrency Model** | Sharded hash map with per-shard `sync.RWMutex` |
| **Eviction Policy** | LRU approximation (sampled, à la Redis) |

---

## Motivation

Most developers use Redis as a black box. This project was built to answer: *what does it actually take to build one?* By implementing the TCP server, binary protocol parser, store engine, eviction logic, and AOF persistence layer from scratch, the project serves as a deep dive into concurrent systems design in Go.

---

## Architecture

```
┌─────────────────────────────┐
│        TCP Client           │  (redis-cli, any RESP client)
└────────────┬────────────────┘
             │ RESP over TCP
┌────────────▼────────────────┐
│       server package        │  Accept connections, dispatch goroutines
└────────────┬────────────────┘
             │
     ┌───────┴────────┐
     │                │
┌────▼────┐    ┌──────▼──────┐
│  resp   │    │   persist   │
│ package │    │   package   │
│ Parse   │    │ AOF write / │
│ Encode  │    │ AOF recover │
│ Evaluate│    └─────────────┘
└────┬────┘
     │
┌────▼──────────────────────────────────┐
│              store package            │
│  Sharded map  │  Memory tracker       │
│  Expiration   │  LRU Eviction         │
└───────────────────────────────────────┘
```

---

## Key Features

### RESP Protocol Implementation

- Hand-rolled RESP parser and encoder with no third-party libraries.

- Supports inline arrays, bulk strings, simple strings, integers, and errors.

- Fully compatible with **redis-cli** and other standard RESP clients.

### Concurrent Sharded Store

- The key space is divided across **N shards** using FNV-32a hashing for uniform key distribution.

- Each shard holds its own **sync.RWMutex**, allowing **reads to proceed in parallel** across different shards while writes lock only the relevant shard — far lower contention than a single global lock.

### Key Expiration (Dual Strategy)

- **Lazy expiration**: keys are checked for expiry on every **GET** — expired keys are deleted on the spot.

- **Active expiration**: a background goroutine periodically samples a random non-empty shard and purges up to 10 expired keys per cycle, preventing stale keys from indefinitely occupying memory.

### Memory Management & LRU Eviction

- Tracks total in-use memory with a thread-safe **Memory** struct.

- When inserting a key would exceed **maxmemory**, the store evicts keys using an **approximate LRU policy**: sample up to 10 entries from a random shard and delete the least-recently-accessed one — the same probabilistic approach used by Redis.

- **LastAccess** timestamps are stored as **atomic.Int64** values on each entry for lock-free reads during eviction sampling.

### AOF Persistence

- Write commands (**SET**, **DEL**, **INCR**) are appended to a **RESP-encoded Append-Only File** after each successful operation.

- On startup, the server **replays** the AOF file to reconstruct in-memory state, providing crash recovery with no data loss for written commands.

---

## Supported Commands

| Command | Syntax | Description |
|---------|--------|-------------|
| `PING` | `PING [message]` | Health check |
| `ECHO` | `ECHO <message>` | Echo a message |
| `SET` | `SET <key> <value> [EX <seconds>]` | Set key with optional TTL |
| `GET` | `GET <key>` | Get value by key |
| `DEL` | `DEL <key> [key ...]` | Delete one or more keys |
| `EXISTS` | `EXISTS <key> [key ...]` | Check key existence |
| `TTL` | `TTL <key>` | Remaining time-to-live in seconds |
| `INCR` | `INCR <key>` | Atomically increment integer value |

---

## Status & Roadmap

The core engine is fully functional. Planned improvements include:

- [ ] Snapshot-based persistence (RDB-style, with compression)
- [ ] `fsync` support for AOF durability guarantees
- [ ] Expanded command set (e.g., `LPUSH`, `LRANGE`, `HSET`)
- [ ] Full test suite
- [ ] GoDoc documentation

---

## Links

- **Repository:** [https://github.com/hammtah/keval](https://github.com/hammtah/keval)
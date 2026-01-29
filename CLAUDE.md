# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dendriforma is an artistic tool for exploring the morphospace of possible tree forms. It generates procedural 3D trees grounded in botanical science but free to transcend it—producing both faithful oaks and alien vegetation through parameter manipulation.

**Stack**: TypeScript, Three.js (3D rendering with orthographic camera)

**Aesthetic**: Minimalist green wireframe with early CAD/terminal feel—like viewing tree structure through a 1980s SGI workstation.

## Core Algorithms

### Space Colonization (Primary)
Trees emerge from competition for space. Attraction points fill a crown volume; branch tips grow toward nearby points, which disappear when colonized.

Three key parameters:
- **Influence radius (d_i)**: How far points attract growth (4-6× segment length)
- **Kill distance (d_k)**: When points get consumed (1-2× segment length)
- **Segment length (D)**: Resolution of branching

### Pipe Model (Essential)
Da Vinci's area-preservation rule for thickness: `d_parent^α = Σ d_child^α`
- α = 2.0: Classic area preservation
- α ≈ 2.5: Wind resistance optimization
- Real trees cluster at 2.0-2.5

### Weber-Penn Parametric (Fast Preview)
Deterministic generation (10-50ms) for real-time slider feedback. Switch to space colonization on mouse release for final form.

## Architecture

```
UI (parameters.ts)
    ↓
Application Logic (main.ts) - state management, animation loop
    ↓
┌─────────┬──────────┬────────────┐
│ Growth  │ Geometry │ Rendering  │
└─────────┴──────────┴────────────┘
    ↓
Core (skeleton, vector, delta)
```

**Data structures**:
- Immutable `Skeleton` with `nodes: Map<id, Node>`, `forks: Array<Fork>`, `rootId`
- Delta system for incremental updates
- Pure function operations

**Growth module additions**:
- `AttractionCloud`: Point set defining crown volume
- `GrowthTip`: Position, direction, associated attraction points
- `SpaceColonizer`: Iterative algorithm runner

## Key Mathematical Constants

| Principle | Value | Purpose |
|-----------|-------|---------|
| Phyllotaxis | 137.5° (golden angle) | Spiral branch arrangement |
| Branching angle | 30-60° conifers, 45-90° broadleaf | Species character |
| Length decay | 0.7-0.9 per generation | Proportional shrinking |
| Fractal dimension | D ≈ 1.4-2.0 | Crown density |

## Architectural Model Presets (Hallé)

- **Rauh** (oak/maple): Strong central axis, branches repeat trunk pattern
- **Massart** (fir/spruce): Tiered whorls of horizontal branches
- **Troll** (beech/elm): Horizontal branches curve upward over time
- **Leeuwenberg** (dogwood): Sympodial forking, no dominant leader

Interpolating between models creates hybrid/alien forms.

## Implementation Phases

1. Core space colonization + wireframe rendering
2. Pipe model thickness integration
3. Parameter UI with real-time preview
4. Hybrid generation (parametric preview → colonization final)
5. Crown shape editor + export (PNG/SVG)

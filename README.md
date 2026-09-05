# 🔥 3D Trinity Lens Research Lab

An immersive spatial computing interface for the Trinity Lens compression pipeline, built on **1×1=1^d dimensional mathematics** and powered by Three.js.

## 🌐 Usage
Open `index.html` in any modern browser — no build step needed.

## ✨ Features

### 🎮 3D Navigation
| Input | Action |
|---|---|
| Left drag | Orbit camera |
| Shift + drag / Middle mouse | Pan |
| Scroll | Zoom |
| Right-click node | Contextual menu |
| Tab | Cycle modes |

### 🔄 Interaction Modes
- **Navigate** — orbit, pan, zoom
- **Select** — click / Shift-click multi-select
- **Transform** — G move · R rotate · S scale
- **Vertex Edit** — per-node X/Y/Z sliders with close button
- **Group** — hierarchy management

### 🔧 Non-Destructive Modifiers
- Subdivide Surface
- Mirror Geometry
- Array Duplicate
- Wave Deform (animated)

### 🔗 Node Types & Connections
| Node | Category | Color |
|---|---|---|
| Stage 1 Triangle | Trinity | 🟡 Gold |
| Stage 2 Musical | Trinity | 💜 Purple |
| Stage 3 Lens | Trinity | 🔵 Cyan |
| Analyzer | Trinity | 💚 Green |
| Gateway | Trinity | 🟠 Orange |
| QA Stone | Verify | 🔴 Red |
| LLM Agent | Agent | 🔵 Blue |
| CLI Agent | Agent | 💚 Mint |
| Knowledge Drive | Data | 💜 Lavender |
| File Input | Data | 🟡 Amber |
| Search Tool | Tool | 🟠 Orange |

### 🎨 Animated Pac-Man Connections
Particles flow along curved 3D tubes; shape + color encodes data type:
- 🔺 **Triangle** — Trinity compressed data (gold)
- ⚪ **Sphere** — Agent tools (purple)
- 💎 **Diamond** — Files / data (green)
- ▪️ **Cube** — Context / knowledge (blue)

## 🏗️ Architecture
- Pure HTML + ES6 modules, zero build tooling
- Three.js r160 via CDN importmap
- All state in-memory; no backend required

## 📐 Dimensional Mathematics
Every compression stage preserves information in the `^d` dimension:
```
Stage 1 (8x) × Stage 2 (4x) × Stage 3 (35x) = 1120x^d
```
QA Stone verification enforces **ΔI ≥ 0** (no information loss).

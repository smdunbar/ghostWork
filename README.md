## ghostWork (Next.js)

### Prerequisites
- **Node.js**: recommended Node 20+ (you can check with `node -v`)
- **pnpm**: this repo pins pnpm via the `packageManager` field, so Corepack can install the right version automatically.

### Install
From the repo root:

```bash
cd ghostWork
corepack enable
pnpm install
```

### Run locally

```bash
cd ghostWork
pnpm dev
```

Then open `http://localhost:3000`.

### Other useful commands
- **Build**:

```bash
cd ghostWork
pnpm build
```

- **Start (after build)**:

```bash
cd ghostWork
pnpm start
```

- **Lint**:

```bash
cd ghostWork
pnpm lint
```

### Troubleshooting
- **Port already in use (3000)**: stop the other process, or run `pnpm dev --port 3001`.
- **`Ignored build scripts: sharp...` warning during install**: safe to ignore for local dev here (images are configured as `unoptimized` in `next.config.mjs`). If you want to allow those scripts, run `pnpm approve-builds`.

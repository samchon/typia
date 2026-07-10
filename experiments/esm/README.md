# typia ESM end-to-end

Installs every published package from the staged tarballs in
`experiments/tarballs/`, compiles a `"type": "module"` project with `ttsc`
(so the typia transform runs), and executes the result with plain `node` —
the same resolution path a real ESM consumer hits: the `import` condition of
each package's `exports` map, i.e. the bundled `lib/**/*.mjs`.

This is the regression gate for the transcoded ESM build. The `smoke`
experiment runs sources through `ttsx` and never touches the built `.mjs`;
this project exists precisely because a broken `.mjs` (lost named exports,
facade chunks) once shipped while every source-level suite stayed green.

```bash
pnpm run package:tgz   # from the repository root
npm install
npm run build
npm test
```

Checks per package:

- `typia` — named + default imports, transformed validators (`is`, `assert`,
  `validate`), JSON serde round-trip, `random` with a `Pattern` tag
  (exercises the `randexp` CJS external through ESM), and the
  `typia/lib/internal/*` deep-import mapping the transform relies on.
- `@typia/utils` — named imports and `NamingConvention` behavior.
- `@typia/mcp` — `createMcpServer` over a reflected controller.
- `@typia/langchain` — `toLangChainTools` conversion and a real
  `tool.invoke` round-trip through `@langchain/core`.
- `@typia/vercel` — `toVercelTools` conversion and a real `tool.execute`
  round-trip through `ai` (the package whose named-only ESM exports broke
  the previous CommonJS-transcoded build).

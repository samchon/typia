# Setup Wizard Experiment

This experiment validates the published-package path of `typia setup` with npm.

It builds local `.tgz` packages, installs them into a temporary npm project, runs
the built `typia` setup wizard, and verifies that:

- npm installed the local tarballs into `node_modules`;
- `@typescript/native-preview` and `ttsc` are installed by valid setup runs;
- `typia/lib/transform` is the only setup plugin path;
- `typia/lib/ttsc/plugin` is not exported as a package path;
- `bin/ttsc-typia.js` is not included in the installed package;
- the setup wizard writes a valid `tsconfig.json`.
- legacy `ts-patch` prepare steps, `dependencies.ts-patch`, and
  `devDependencies.ts-patch` are removed after a valid setup.
- existing `tsconfig.json` files without `compilerOptions` receive a new
  `compilerOptions` object while preserving unrelated fields such as `extends`.
- invalid `compilerOptions.plugins` values fail before dependency installation
  or package.json cleanup.

The failure rule is intentional: an invalid plugin configuration must not leave
a partially migrated package behind. Error scenarios assert both rejection and
absence of npm install/package.json side effects.

The entrypoint is `src/index.js`. Scenario cases live under `src/features/*.js`
and are executed through `@nestia/e2e`.

Run:

```bash
npm run start
```

To reuse already-built tarballs:

```bash
npm run start -- --skip-pack
```

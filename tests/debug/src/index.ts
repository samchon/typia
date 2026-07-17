import typia from "typia";

// Scratchpad for ad-hoc local repros: replace this with whatever you are
// debugging, then run `pnpm --filter ./tests/debug start`.
//
// Keep the committed sample runnable. This workspace is not a `test-*` package,
// so `pnpm test:packages` never runs it, and this sample is the only signal
// that the workspace itself still works -- importing typia at all is enough to
// surface a module-identity break like the one it shipped with when its
// `rootDir` drifted. A failure here should always be your own, never the
// workspace's.

interface IApplication {
  array(props: { values: number[] }): void;
}

console.log(JSON.stringify(typia.llm.application<IApplication>(), null, 2));

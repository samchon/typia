import typia from "typia";

// Scratchpad for ad-hoc local repros: replace this with whatever you are
// debugging and run `pnpm --filter ./tests/debug start`. The committed sample
// stays runnable so that a failure here is always your own, never the
// workspace's.
interface IApplication {
  array(props: { values: number[] }): void;
}

console.log(JSON.stringify(typia.llm.application<IApplication>(), null, 2));

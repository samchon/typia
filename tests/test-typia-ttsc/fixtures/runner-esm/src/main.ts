import typia from "typia";

import { mode } from "./mode";

const ok = typia.is<{
  mode: string;
  argv: string[];
}>({
  mode,
  argv: process.argv.slice(2),
});

console.log(
  JSON.stringify({
    argv: process.argv.slice(2),
    mode,
    ok,
  }),
);

export { mode };

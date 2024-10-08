import typia from "typia";

import { NativeSimple } from "../structures/NativeSimple";

const results: boolean[] = new Array(100).fill(0).map(() => {
  const simple = typia.random<NativeSimple>();
  return typia.is(simple);
});
console.log(results.filter((r) => r).length);

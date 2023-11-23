import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createRandom_AtomicClass = _test_random(
  "AtomicClass",
)<AtomicClass>(AtomicClass)({
  random: typia.createRandom<AtomicClass>((AtomicClass as any).RANDOM),
  assert: typia.createAssert<AtomicClass>(),
});

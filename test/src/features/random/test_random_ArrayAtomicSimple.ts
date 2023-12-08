import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_random_ArrayAtomicSimple = _test_random(
  "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)({
  random: () =>
    typia.random<ArrayAtomicSimple>((ArrayAtomicSimple as any).RANDOM),
  assert: typia.createAssert<ArrayAtomicSimple>(),
});

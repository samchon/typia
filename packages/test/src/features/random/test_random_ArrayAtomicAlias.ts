import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_random_ArrayAtomicAlias = _test_random(
  "ArrayAtomicAlias",
)<ArrayAtomicAlias>(ArrayAtomicAlias)({
  random: () =>
    typia.random<ArrayAtomicAlias>((ArrayAtomicAlias as any).RANDOM),
  assert: typia.createAssert<ArrayAtomicAlias>(),
});

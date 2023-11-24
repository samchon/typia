import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_random_ArrayRecursiveUnionImplicit = _test_random(
  "ArrayRecursiveUnionImplicit",
)<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)({
  random: () =>
    typia.random<ArrayRecursiveUnionImplicit>(
      (ArrayRecursiveUnionImplicit as any).RANDOM,
    ),
  assert: typia.createAssert<ArrayRecursiveUnionImplicit>(),
});

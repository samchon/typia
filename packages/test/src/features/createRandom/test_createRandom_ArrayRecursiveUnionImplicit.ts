import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createRandom_ArrayRecursiveUnionImplicit = _test_random(
  "ArrayRecursiveUnionImplicit",
)<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)({
  random: typia.createRandom<ArrayRecursiveUnionImplicit>(
    (ArrayRecursiveUnionImplicit as any).RANDOM,
  ),
  assert: typia.createAssert<ArrayRecursiveUnionImplicit>(),
});

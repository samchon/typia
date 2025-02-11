import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createRandom_ObjectUnionExplicit = _test_random(
  "ObjectUnionExplicit",
)<ObjectUnionExplicit>(ObjectUnionExplicit)({
  random: typia.createRandom<ObjectUnionExplicit>(
    (ObjectUnionExplicit as any).RANDOM,
  ),
  assert: typia.createAssert<ObjectUnionExplicit>(),
});

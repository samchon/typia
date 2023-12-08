import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_random_ObjectUnionExplicit = _test_random(
  "ObjectUnionExplicit",
)<ObjectUnionExplicit>(ObjectUnionExplicit)({
  random: () =>
    typia.random<ObjectUnionExplicit>((ObjectUnionExplicit as any).RANDOM),
  assert: typia.createAssert<ObjectUnionExplicit>(),
});

import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createRandom_ObjectUnionImplicit = _test_random("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit
)({
  random: typia.createRandom<ObjectUnionImplicit>((ObjectUnionImplicit as any).RANDOM),
  assert: typia.createAssert<ObjectUnionImplicit>(),
});

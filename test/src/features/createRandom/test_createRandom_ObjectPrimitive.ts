import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createRandom_ObjectPrimitive = _test_random(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)({
  random: typia.createRandom<ObjectPrimitive>((ObjectPrimitive as any).RANDOM),
  assert: typia.createAssert<ObjectPrimitive>(),
});

import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_random_ObjectPrimitive = (): void => _test_random("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive
)({
  random: () => typia.random<ObjectPrimitive>((ObjectPrimitive as any).RANDOM),
  assert: typia.createAssert<ObjectPrimitive>(),
});

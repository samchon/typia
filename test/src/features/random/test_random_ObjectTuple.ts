import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_random_ObjectTuple = (): void => _test_random("ObjectTuple")<ObjectTuple>(
    ObjectTuple
)({
  random: () => typia.random<ObjectTuple>((ObjectTuple as any).RANDOM),
  assert: typia.createAssert<ObjectTuple>(),
});

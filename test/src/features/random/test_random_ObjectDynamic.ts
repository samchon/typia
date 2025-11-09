import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_random_ObjectDynamic = (): void => _test_random("ObjectDynamic")<ObjectDynamic>(
    ObjectDynamic
)({
  random: () => typia.random<ObjectDynamic>((ObjectDynamic as any).RANDOM),
  assert: typia.createAssert<ObjectDynamic>(),
});

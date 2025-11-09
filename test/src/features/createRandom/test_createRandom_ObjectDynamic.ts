import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_createRandom_ObjectDynamic = (): void => _test_random("ObjectDynamic")<ObjectDynamic>(
    ObjectDynamic
)({
  random: typia.createRandom<ObjectDynamic>((ObjectDynamic as any).RANDOM),
  assert: typia.createAssert<ObjectDynamic>(),
});

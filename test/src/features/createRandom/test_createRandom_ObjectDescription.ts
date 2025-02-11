import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_createRandom_ObjectDescription = _test_random("ObjectDescription")<ObjectDescription>(
    ObjectDescription
)({
  random: typia.createRandom<ObjectDescription>((ObjectDescription as any).RANDOM),
  assert: typia.createAssert<ObjectDescription>(),
});

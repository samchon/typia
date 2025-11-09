import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_random_ObjectGeneric = (): void => _test_random("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric
)({
  random: () => typia.random<ObjectGeneric>((ObjectGeneric as any).RANDOM),
  assert: typia.createAssert<ObjectGeneric>(),
});

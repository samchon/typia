import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createRandom_ObjectGenericAlias = (): void => _test_random("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias
)({
  random: typia.createRandom<ObjectGenericAlias>((ObjectGenericAlias as any).RANDOM),
  assert: typia.createAssert<ObjectGenericAlias>(),
});

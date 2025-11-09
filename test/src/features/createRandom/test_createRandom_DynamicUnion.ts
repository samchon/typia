import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createRandom_DynamicUnion = (): void => _test_random("DynamicUnion")<DynamicUnion>(
    DynamicUnion
)({
  random: typia.createRandom<DynamicUnion>((DynamicUnion as any).RANDOM),
  assert: typia.createAssert<DynamicUnion>(),
});

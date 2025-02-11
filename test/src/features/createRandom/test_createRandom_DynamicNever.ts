import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_createRandom_DynamicNever = _test_random("DynamicNever")<DynamicNever>(
    DynamicNever
)({
  random: typia.createRandom<DynamicNever>((DynamicNever as any).RANDOM),
  assert: typia.createAssert<DynamicNever>(),
});

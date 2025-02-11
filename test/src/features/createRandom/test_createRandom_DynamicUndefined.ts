import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_createRandom_DynamicUndefined = _test_random("DynamicUndefined")<DynamicUndefined>(
    DynamicUndefined
)({
  random: typia.createRandom<DynamicUndefined>((DynamicUndefined as any).RANDOM),
  assert: typia.createAssert<DynamicUndefined>(),
});

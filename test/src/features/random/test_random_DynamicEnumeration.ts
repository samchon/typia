import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_random_DynamicEnumeration = (): void => _test_random("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration
)({
  random: () => typia.random<DynamicEnumeration>((DynamicEnumeration as any).RANDOM),
  assert: typia.createAssert<DynamicEnumeration>(),
});

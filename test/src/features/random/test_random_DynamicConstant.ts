import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_random_DynamicConstant = (): void => _test_random("DynamicConstant")<DynamicConstant>(
    DynamicConstant
)({
  random: () => typia.random<DynamicConstant>((DynamicConstant as any).RANDOM),
  assert: typia.createAssert<DynamicConstant>(),
});

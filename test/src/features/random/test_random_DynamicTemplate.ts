import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_random_DynamicTemplate = (): void => _test_random("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate
)({
  random: () => typia.random<DynamicTemplate>((DynamicTemplate as any).RANDOM),
  assert: typia.createAssert<DynamicTemplate>(),
});

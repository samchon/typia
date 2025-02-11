import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createRandom_DynamicTemplate = _test_random(
  "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)({
  random: typia.createRandom<DynamicTemplate>((DynamicTemplate as any).RANDOM),
  assert: typia.createAssert<DynamicTemplate>(),
});

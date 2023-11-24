import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_random_UltimateUnion = _test_random(
  "UltimateUnion",
)<UltimateUnion>(UltimateUnion)({
  random: () => typia.random<UltimateUnion>((UltimateUnion as any).RANDOM),
  assert: typia.createAssert<UltimateUnion>(),
});

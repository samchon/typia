import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_createRandom_UltimateUnion = _test_random(
  "UltimateUnion",
)<UltimateUnion>(UltimateUnion)({
  random: typia.createRandom<UltimateUnion>((UltimateUnion as any).RANDOM),
  assert: typia.createAssert<UltimateUnion>(),
});

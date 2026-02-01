import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { SetUnion } from "../../structures/SetUnion";

export const test_createRandom_SetUnion = (): void => _test_random("SetUnion")<SetUnion>(
    SetUnion
)({
  random: typia.createRandom<SetUnion>((SetUnion as any).RANDOM),
  assert: typia.createAssert<SetUnion>(),
});

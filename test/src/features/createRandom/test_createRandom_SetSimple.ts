import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { SetSimple } from "../../structures/SetSimple";

export const test_createRandom_SetSimple = _test_random("SetSimple")<SetSimple>(
    SetSimple
)({
  random: typia.createRandom<SetSimple>((SetSimple as any).RANDOM),
  assert: typia.createAssert<SetSimple>(),
});

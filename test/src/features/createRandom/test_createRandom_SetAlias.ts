import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { SetAlias } from "../../structures/SetAlias";

export const test_createRandom_SetAlias = (): void => _test_random("SetAlias")<SetAlias>(
    SetAlias
)({
  random: typia.createRandom<SetAlias>((SetAlias as any).RANDOM),
  assert: typia.createAssert<SetAlias>(),
});

import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_random_ObjectHttpConstant = _test_random(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)({
  random: () =>
    typia.random<ObjectHttpConstant>((ObjectHttpConstant as any).RANDOM),
  assert: typia.createAssert<ObjectHttpConstant>(),
});

import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_createRandom_ObjectRequired = _test_random(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)({
  random: typia.createRandom<ObjectRequired>((ObjectRequired as any).RANDOM),
  assert: typia.createAssert<ObjectRequired>(),
});

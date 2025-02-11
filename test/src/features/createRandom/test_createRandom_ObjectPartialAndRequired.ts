import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_createRandom_ObjectPartialAndRequired = _test_random(
  "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
  random: typia.createRandom<ObjectPartialAndRequired>(
    (ObjectPartialAndRequired as any).RANDOM,
  ),
  assert: typia.createAssert<ObjectPartialAndRequired>(),
});

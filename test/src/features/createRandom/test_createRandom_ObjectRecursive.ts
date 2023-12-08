import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createRandom_ObjectRecursive = _test_random(
  "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)({
  random: typia.createRandom<ObjectRecursive>((ObjectRecursive as any).RANDOM),
  assert: typia.createAssert<ObjectRecursive>(),
});

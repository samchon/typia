import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createRandom_ObjectOptional = _test_random(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)({
  random: typia.createRandom<ObjectOptional>((ObjectOptional as any).RANDOM),
  assert: typia.createAssert<ObjectOptional>(),
});

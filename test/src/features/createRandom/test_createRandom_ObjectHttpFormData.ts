import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_createRandom_ObjectHttpFormData = _test_random(
  "ObjectHttpFormData",
)<ObjectHttpFormData>(ObjectHttpFormData)({
  random: typia.createRandom<ObjectHttpFormData>(
    (ObjectHttpFormData as any).RANDOM,
  ),
  assert: typia.createAssert<ObjectHttpFormData>(),
});

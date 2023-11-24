import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_random_ObjectPropertyNullable = _test_random(
  "ObjectPropertyNullable",
)<ObjectPropertyNullable>(ObjectPropertyNullable)({
  random: () =>
    typia.random<ObjectPropertyNullable>(
      (ObjectPropertyNullable as any).RANDOM,
    ),
  assert: typia.createAssert<ObjectPropertyNullable>(),
});

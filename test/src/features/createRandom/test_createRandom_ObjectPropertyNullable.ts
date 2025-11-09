import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createRandom_ObjectPropertyNullable = (): void => _test_random("ObjectPropertyNullable")<ObjectPropertyNullable>(
    ObjectPropertyNullable
)({
  random: typia.createRandom<ObjectPropertyNullable>((ObjectPropertyNullable as any).RANDOM),
  assert: typia.createAssert<ObjectPropertyNullable>(),
});

import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createRandom_ObjectLiteralProperty = _test_random(
  "ObjectLiteralProperty",
)<ObjectLiteralProperty>(ObjectLiteralProperty)({
  random: typia.createRandom<ObjectLiteralProperty>(
    (ObjectLiteralProperty as any).RANDOM,
  ),
  assert: typia.createAssert<ObjectLiteralProperty>(),
});

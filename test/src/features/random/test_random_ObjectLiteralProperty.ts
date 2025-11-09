import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_random_ObjectLiteralProperty = (): void =>
  _test_random("ObjectLiteralProperty")<ObjectLiteralProperty>(
    ObjectLiteralProperty,
  )({
    random: () =>
      typia.random<ObjectLiteralProperty>(
        (ObjectLiteralProperty as any).RANDOM,
      ),
    assert: typia.createAssert<ObjectLiteralProperty>(),
  });

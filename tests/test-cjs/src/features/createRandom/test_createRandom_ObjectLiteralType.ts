import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createRandom_ObjectLiteralType = (): void =>
  _test_random("ObjectLiteralType")<ObjectLiteralType>(ObjectLiteralType)({
    random: typia.createRandom<ObjectLiteralType>(
      (ObjectLiteralType as any).RANDOM,
    ),
    assert: typia.createAssert<ObjectLiteralType>(),
  });
